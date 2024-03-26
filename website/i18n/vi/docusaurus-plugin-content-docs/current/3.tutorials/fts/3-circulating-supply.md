---
id: circulating-supply
title: Creating a Circulating Supply
sidebar_label: Circulating Supply
---

import {Github} from "@site/src/components/codetabs"

In the previous tutorial, you looked at what a fungible token was and how you could define one in your smart contract. In this tutorial, you'll learn how to create a circulating supply belonging to the contract owner and view all the tokens, with their metadata, in the NEAR wallet.

To get started, either work off the code you wrote in the previous tutorial or switch to the `2.define-a-token` folder in our repo. If you haven't cloned the repository, refer to the [Contract Architecture](1-skeleton.md) to start.

If you wish to see the finished code for this tutorial, you can find it in the `3.initial-supply` folder.

## Giới thiệu

Every fungible token contract on NEAR has what's known as a circulating supply. This is the number of tokens that exist on the contract and are actively available to trade.

When creating your contract, there are many different ways you could implement this to start. A few examples could be:
- Specify a starting total supply and distribute it based on a set of parameters (Benji gets 20%, Josh gets 2.5%, and the rest goes to Mike).
- Have a first come first serve pool where everybody claims up to X amount of tokens.
- Create tokens on demand resulting in a steady increase of the circulating supply overtime up to a specified cap.

The simplest approach, however, is to specify a total supply when initializing the contract. The entire circulating supply is then created and sent to the owner of the contract. The owner would then be able to transfer or sell the tokens as they wish. Once the initial supply is created, no more FTs could be minted. This means that the circulating supply will always be equal to the total supply.

## Modifications to contract

In order to implement this logic, you'll need to keep track of two things in your smart contract:
- A mapping of an account to the number of tokens they own.
- The total supply of tokens.

The mapping is so that you can easily check or modify the tokens owned by any given account at anytime within your contract. You'll also need to keep track of the total supply since it's required by the standard that you have a function to query for the supply of tokens on the contract.

### Setting the supply

Head over to the `src/lib.rs` file and add the following code to the `Contract` struct.

<Github language="rust" start="21" end="32" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs" />

You'll now want to add the functionality for depositing the tokens into the owner's account. Do this by creating a helper function that takes an amount and an account ID and performs the deposit logic for you. First create a new file `src/internal.rs` such that your file structure now looks as follows.

```
src
  ├── ft_core.rs
  ├── internal.rs
  ├── lib.rs
  ├── metadata.rs
  └── storage.rs
```

In the `internal.rs` file, add the following code to create a function called `internal_deposit` which takes an `AccountId` and a `Balance` and adds the amount to the account's current supply of FTs.

<Github language="rust" start="1" end="18" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/internal.rs" />

Now that the functionality for depositing FTs is in place, switch back to the `src/lib.rs` file and add the `internal` module:

<Github language="rust" start="8" end="10" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs" />

In addition, add the following code to the `new` initialization function.

```rust
#[init]
pub fn new(
    owner_id: AccountId,
    total_supply: U128,
    metadata: FungibleTokenMetadata,
) -> Self {
    // Create a variable of type Self with all the fields initialized. 
    let mut this = Self {
        // Set the total supply
        total_supply: total_supply.0,
        // Storage keys are simply the prefixes used for the collections. This helps avoid data collision
        accounts: LookupMap::new(StorageKey::Accounts.try_to_vec().unwrap()),
        metadata: LazyOption::new(
            StorageKey::Metadata.try_to_vec().unwrap(),
            Some(&metadata),
        ),
    };

    // Set the owner's balance to the total supply.
    this.internal_deposit(&owner_id, total_supply.into());

    // Return the Contract object
    this
}
```

This will initialize the total supply to what you passed in and will call the `internal_deposit` function to add the total supply to the owner's account.

### Getting the supply

Now that you've created a way to set the total supply, you'll also want a way to query for it as well as the balance for a specific user. The [standard](https://nomicon.io/Standards/Tokens/FungibleToken/Core) dictates that you should have two methods on your smart contract for doing these operations:
- **`ft_total_supply`**
- **`ft_balance_of`**

Head on over to the `src/ft_core.rs` file and add the following code to these functions.

<Github language="rust" start="83" end="91" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/ft_core.rs" />

At this point, you have everything you need to create an initial supply of tokens and query for the balance of a given account. There is, however, a problem that we need to solve. How will the wallet know that the total supply was created and is owned by the contract owner? How would it even know that our contract is a fungible token contract? If you were to deploy the contract and run through the setup process, you would be able to query for the information from the contract but you wouldn't see any FTs in the owner's NEAR wallet.

## Event

Have you ever wondered how the wallet knows which FTs you own and how it can display them in the [balances tab](https://testnet.mynearwallet.com/)? Originally, an [indexer](/tools/indexer-for-explorer) was used and it listened for any functions starting with `ft_` on your account. These contracts were then flagged on your account as likely FT contracts.

When you navigated to your balances tab, the wallet would then query all those contracts for the number of FTs you owned using the `ft_balance_of` function you just wrote.

### Vấn đề {#the-problem}

This method of flagging contracts was not reliable as each FT-driven application might have its own way of minting or transferring FTs. Ngoài ra, các ứng dụng thường transfer hoặc mint nhiều token cùng một lúc bằng cách sử dụng các batch function.

### Phương pháp {#the-solution}

A standard was introduced so that smart contracts could emit an event anytime FTs were transferred, minted, or burnt. Event này ở dạng log. Bất kể contract triển khai function như thế nào, giờ đây indexer có thể lắng nghe các log được tiêu chuẩn hóa đó.

As per the standard, you need to implement a logging functionality that gets fired when FTs are transferred or minted. Trong trường hợp này, contract không hỗ trợ burn vì thế bạn không cần lo lắng về nó bây giờ.

Điều quan trọng cần lưu ý là tiêu chuẩn quy định rằng log phải được bắt đầu với `"EVENT_JSON:"`. Tuy nhiên, cấu trúc log của bạn luôn phải chứa 3 thứ dưới đây:

- **standard**: the current name of the standard (e.g. nep141)
- **version**: phiên bản của tiêu chuẩn bạn đang sử dụng (ví dụ 1.0.0)
- **event**: một danh sách các event bạn đang phát ra.

Event interface khác nhau tùy thuộc vào việc bạn đang ghi lại các transfer hay mint. Interface của cả hai event được phác thảo như dưới đây.

**Các transfer event**:
- **old_owner_id**: the old owner of the FTs.
- **new_owner_id**: the new owner that the FTs are being transferred to.
- **amount**: the number of tokens transferred.
- *Optional* - **memo**: một tùy chọn message để đưa vào event.

**Các mint event**:
- **owner_id**: the owner that the FTs are being minted to.
- **amount**: the amount of FTs being minted.
- *Optional* - **memo**: một tùy chọn message để đưa vào event.

### Examples {#examples}

In order to solidify your understanding of the standard, let's walk through two scenarios and see what the logs should look like.

#### Tình huống A - mint đơn giản

In this scenario, the Benji mints 50 FTs to himself and doesn't include a message. Log sẽ nhìn giống như sau.

```json
EVENT_JSON:{
  "standard": "nep141",
  "version": "1.0.0",
  "event": "ft_mint",
  "data": [
    {"owner_id": "benji.testnet", "amount": "50"}
  ]
}
```

#### Scenario B - batch transfer

In this scenario, Benji wants to perform a batch transfer. He will send FTs to Jada, Mike, Josh, and Maria. Log sẽ như sau.

```json
EVENT_JSON:{
    "standard": "nep141",
    "version": "1.0.0",
    "event": "ft_transfer",
    "data": [
        {"old_owner_id": "benji.near", "new_owner_id": "josh.near", "amount": "1", "memo": "go team"},
        {"old_owner_id": "benji.near", "new_owner_id": "mike.near", "amount": "9000"},
        {"old_owner_id": "benji.near", "new_owner_id": "jada.near", "amount": "500"},
        {"old_owner_id": "benji.near", "new_owner_id": "maria.near", "amount": "500"}
    ]
}
```

## Các sửa đổi với contract {#modifications-to-the-contract}

Ở thời điểm này, bạn đã hiểu rõ về mục tiêu cuối cùng là gì vì thế hãy bắt đầu làm việc! Open the `src` directory and create a new file called `events.rs`. Đây là nơi các cấu trúc log của bạn sẽ được tạo.

### Tạo các file event {#events-rs}

Copy phần dưới đây vào file của bạn. This will outline the structs for your `EventLog`, `FtMintLog`, and `FtTransferLog`. Ngoài ra, chúng ta đã thêm `EVENT_JSON:` là tiền tố bất cứ khi nào bạn ghi lại `EventLog`.

<Github language="rust" start="1" end="121" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/events.rs" />

### Thêm các module và constant {#lib-rs}

Bây giờ bạn đã tạo một file mới, bạn cần thêm module tới file `lib.rs`.

<Github language="rust" start="1" end="13" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs" />

### Logging the total supply minted

Now that all the tools are set in place, you can implement the actual logging functionality. Since the contract will only be minting tokens at the very start when it's initialized, it's trivial where you should place the log. Open the `src/lib.rs` file and navigate to the bottom of the `new` initialization function. Đây là nơi bạn sẽ xây dựng log để mint.

<Github language="rust" start="63" end="97" url="https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs" />

With that finished, you've successfully implemented the backbone of the events standard and it's time to start testing.

## Deploy contract {#redeploying-contract}

Since the current contract you have is already initialized, let's create a sub-account and deploy to that instead.

### Tạo một sub-account

Chạy command dưới đây để tạo một sub-account `events` cho account chính của bạn với số dư ban đầu là 25 NEAR, nó sẽ được transfer từ account gốc sang account mới của bạn.

```bash
near create-account events.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25
```

Tiếp theo, bạn sẽ muốn export một biến môi trường cho việc develop được dễ dàng hơn:

```bash
export EVENTS_FT_CONTRACT_ID=events.$FT_CONTRACT_ID
```

Sử dụng build script, deploy contract như bạn đã làm ở các hướng dẫn trước:

```bash
cd 2.define-a-token && ./build.sh && cd .. && near deploy $EVENTS_FT_CONTRACT_ID out/contract.wasm 
```

### Initialization {#initialization}

Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's create an initial supply of 1000 `gtNEAR`. Since it has 24 decimal places, you should put `1000` followed by 24 zeros in the total supply field.

```bash
near call $EVENTS_FT_CONTRACT_ID new_default_meta '{"owner_id": "'$EVENTS_FT_CONTRACT_ID'", "total_supply": "1000000000000000000000000000"}' --accountId $EVENTS_FT_CONTRACT_ID
```

Bạn có thể kiểm tra xem mọi thứ có diễn ra đúng không bằng cách xem output trong CLI của mình:

```bash
Scheduling a call: events.goteam.testnet.new_default_meta({"owner_id": "events.goteam.testnet", "total_supply": "1000000000000000000000000000"})
Doing account.functionCall()
Receipt: BmD2hQJCUEMmvaUd45qrt7S55cewUXQSTPWT21Um3gXd
    Log [events.goteam.testnet]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"events.goteam.testnet","amount":"1000000000000000000000000000","memo":"Initial token supply is minted"}]}
Transaction Id BrEBqE9S3tTBcgDUU6ZyszjAbaR4wkPyEN1viYKaXpgh
To see the transaction in the transaction explorer, please open this url in your browser
https://testnet.nearblocks.io/txns/BrEBqE9S3tTBcgDUU6ZyszjAbaR4wkPyEN1viYKaXpgh
''
```

Bạn có thể thấy rằng event đã được log một cách chính xác!

### Querying Supply Information {#testing}

You can now test if your view functions work properly. First, try to query for the total supply.

```bash
near view $EVENTS_FT_CONTRACT_ID ft_total_supply
```

Nó sẽ trả về một output trong giống như sau:

```bash
'1000000000000000000000000000'
```

Chúc mừng! Now you can check if the balance of the owner account works properly. If you call the following function, it should return the same number as the total supply.

```bash
near view $EVENTS_FT_CONTRACT_ID ft_balance_of '{"account_id": "'$EVENTS_FT_CONTRACT_ID'"}'
```
Trả về:

```bash
'1000000000000000000000000000'
```

If you query for the balance of some other account, it should return `0`.

```bash
near view $EVENTS_FT_CONTRACT_ID ft_balance_of '{"account_id": "benjiman.testnet"}'
```

## Viewing FTs in the wallet {#viewing-fts-in-wallet}

Now that your contract implements the necessary functions that the wallet uses to pickup your contract and display the FTs, you should be able to see your tokens on display in the [balances tab](https://testnet.mynearwallet.com/).

<img width="65%" src="/docs/assets/fts/filled-fts-in-wallet.png" />

🎉🎉🎉 **This is awesome! Go team!** 🎉🎉🎉 You can now see your very first fungible tokens in the wallet!


## Tổng kết

Today you went through and created the logic for minting a total supply. You then implemented some of the core standard logic and the [events standard](https://nomicon.io/Standards/Tokens/FungibleToken/Event). You created events for [minting](#modifications-to-the-contract) FTs on initialization. You then deployed and [tested](#testing) your changes and saw your very first FTs in the wallet!

In the next tutorial, you'll look at the basics of registering accounts so that they can transfer and receive FTs.
