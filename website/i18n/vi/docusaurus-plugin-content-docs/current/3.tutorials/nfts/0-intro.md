---
id: introduction
title: NFT từ Zero đến Hero
sidebar_label: Giới thiệu
---

> Trong serie _Zero to Hero_ này, bạn sẽ thấy một bộ hướng dẫn bao gồm mọi khía cạnh của một non-fungible token (NFT) smart contract. Bạn sẽ bắt đầu bằng cách mint ra một NFT bằng cách sử dụng một contract đã được deploy sẵn, và cuối cùng, bạn sẽ kết thúc việc xây dựng một một NFT smart contract hoàn chỉnh hỗ trợ mọi extension.

---

## Điều kiện cần

Để hoàn thành tốt các hướng dẫn này, bạn sẽ cần:

- [Rust](/build/smart-contracts/quickstart#prerequisites)
- [Một NEAR Wallet](https://testnet.mynearwallet.com/create)
- [NEAR-CLI](/tools/near-cli#setup)

:::info Bạn mới đến với Rust? If you are new to Rust and want to dive into smart contract development, our [Quick-start guide](../../2.build/2.smart-contracts/quickstart.md) is a great place to start. :::

---

## Tổng quan

Chỉ vài bước bạn sẽ từ **_Zero_** trở thành **_Hero_** trong một thời gian ngắn! 💪

| Bước | Tên                                                                 | Mô tả                                                                                                                   |
| ---- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1    | [Contract đã được deploy sẵn](/tutorials/nfts/predeployed-contract) | Mint một NFT mà không cần code, tạo, hay deploy một smart contract.                                                     |
| 2    | [Kiến trúc của contract](/tutorials/nfts/skeleton)                  | Tìm hiểu kiến trúc cơ bản của NFT smart contract và compile code.                                                       |
| 3    | [Mint](/tutorials/nfts/minting)                                     | Tóm gọn cách để hợp đồng thông minh có thể tạo ra một non-fungible token.                                               |
| 4    | [Upgrade một contract](/tutorials/nfts/upgrade-contract)            | Khám phá quy trình upgrade một smart contract có sẵn.                                                                   |
| 5    | [Enumeration](/tutorials/nfts/enumeration)                          | Khám phá các enumeration method có thể được dùng để trả về các state của smart contract.                                |
| 6    | [Core](/tutorials/nfts/core)                                        | Extend the NFT contract using the core standard which allows token transfer.                                            |
| 7    | [Các Approval](/tutorials/nfts/approvals)                           | Mở rộng contract cho phép các account khác có thể transfer các NFT thay mặt bạn.                                        |
| 8    | [Royalty](/tutorials/nfts/royalty)                                  | Thêm các NFT royalty để cho phép cài đặt tỷ lệ phần trăm sẽ trả cho người tạo token.                                    |
| 9    | [Marketplace](/tutorials/nfts/marketplace)                          | Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs. |


<!--
1. [Events](/tutorials/nfts/events): in this tutorial you'll explore the events extension, allowing the contract to react on certain events.
2. [Marketplace](/tutorials/nfts/marketplace): in the last tutorial you'll be exploring some key aspects of the marketplace contract.
-->

---

## Bước tiếp theo

Sẵn sàng để bắt đầu? Hãy đến ngay hướng dẫn [Contract đã được deploy sẵn](/tutorials/nfts/predeployed-contract) và bắt đầu chuyến hành trình của bạn!

Nếu bạn đã biết về các non-fungible token và smart contract, hãy bỏ qua và đến ngay với các hướng dẫn nào bạn thấy thích thú. Các bài hướng dẫn đã được thiết kế để bạn có thể bắt đầu từ bất cứ nền tảng kiến thức nào!

:::info Bạn có câu hỏi? 👉 Join us on [Discord](https://near.chat/) and let us know in the `#development` channels. 👈

We also host daily [Office Hours](https://pages.near.org/developers/get-help/office-hours/) live where the DevRel team will answer any questions you may have. 🤔

Thứ Hai – Thứ Sáu 11AM – 12PM Pacific (6PM – 7PM UTC) :::
