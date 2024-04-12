---
id: storage
title: 상태 & 자료구조
---

import {CodeTabs, Language, Github} from "@site/src/components/codetabs"

각 컨트랙트에는 고유한 상태(스토리지)가 있으며, 이는 **해당 컨트랙트에 의해서만 수정 가능**하지만 [누구나 볼 수 있습니다](../../4.tools/cli.md#near-view-state-near-view-state).

컨트랙트는 모든 데이터를 `키-값` 스토리지에 저장합니다. 그러나 이는 SDK에 의한 [직렬화](./serialization.md)를 통해 추상화됩니다.

## :::info 컨트랙트는 잔고의 일부를 잠그는 방식으로 [스토리지 비용을 지불](#storage-cost)합니다. 현재 **100KB**를 저장하는 데 **~1Ⓝ** 만큼의 비용이 듭니다.

## 상태의 정의

컨트랙트의 상태는 [핵심 클래스 속성](./anatomy.md#defining-the-contract)에 의해 정의되며, 이를 통해 접근 가능합니다.

상태에는 상수, 기본 자료형 및 복합 객체를 저장할 수 있습니다. SDK 컬렉션은 [직렬화된 키-값 스토리지](./serialization.md#borsh-state-serialization)에 최적화되어 있기 때문입니다.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts"
          start="6" end="12" />

</Language>

<Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="14" end="24"/>

</Language>

</CodeTabs>

---

## Data Structures

The NEAR SDK exposes a series of structures ([Vectors](#vector), [Sets](#set), [Maps](#map) and [Trees](#tree))
to simplify storing data in an efficient way.

:::info Instantiation

All structures need to be initialized using a **unique `prefix`**, which will be used to identify the structure's keys
in the [serialized state](./serialization.md#borsh-state-serialization)

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts"
          start="8" end="11" />

</Language>

<Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="33" end="38"/>

</Language>

</CodeTabs>

:::

<hr className="subsection" />

### Vector

Implements a [vector/array](https://en.wikipedia.org/wiki/Array_data_structure) which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts"
          start="25" end="28" />

</Language>

<Language value="🦀 Rust" language="rust">
    <Github fname="vector.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/vector.rs" start="12" end="30"/>
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="7" end="24"/>

</Language>

</CodeTabs>

<hr className="subsection" />

### Map

Implements a [map/dictionary](https://en.wikipedia.org/wiki/Associative_array) which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts"
          start="33" end="37" />

</Language>

<Language value="🦀 Rust" language="rust">
    <Github fname="map.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/map.rs" start="9" end="24"/>
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="7" end="24"/>

</Language>

</CodeTabs>

<details>
<summary>Nesting of Objects - Temporary Solution</summary>

In the JS SDK, you can store and retrieve elements from a nested map or object, but first you need to construct or deconstruct the structure from state. This is a temporary solution until the improvements have been implemented to the SDK. Here is an example of how to do this:

```ts
import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";

@NearBindgen({})
class StatusMessage {
  records: UnorderedMap;
  constructor() {
    this.records = new UnorderedMap("a");
  }

  @call({})
  set_status({ message, prefix }: { message: string; prefix: string }) {
    let account_id = near.signerAccountId();

    const inner: any = this.records.get("b" + prefix);
    const inner_map: UnorderedMap = inner
      ? UnorderedMap.deserialize(inner)
      : new UnorderedMap("b" + prefix);

    inner_map.set(account_id, message);

    this.records.set("b" + prefix, inner_map);
  }

  @view({})
  get_status({ account_id, prefix }: { account_id: string; prefix: string }) {
    const inner: any = this.records.get("b" + prefix);
    const inner_map: UnorderedMap = inner
      ? UnorderedMap.deserialize(inner)
      : new UnorderedMap("b" + prefix);
    return inner_map.get(account_id);
  }
}
```

</details>

<hr className="subsection" />

### Set

Implements a [set](https://en.wikipedia.org/wiki/Set_\(abstract_data_type\)) which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts"
          start="42" end="46" />

</Language>

<Language value="🦀 Rust" language="rust">
    <Github fname="set.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/set.rs" start="9" end="16"/>
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="7" end="24"/>

</Language>

</CodeTabs>

<hr className="subsection" />

### Tree

An ordered equivalent of Map. The underlying implementation is based on an [AVL](https://en.wikipedia.org/wiki/AVL_tree). You should use this structure when you need to: have a consistent order, or access the min/max keys.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="tree.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/tree.rs" start="9" end="24"/>
    <Github fname="lib.rs"
          url="https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs" start="7" end="24"/>

</Language>

</CodeTabs>

---

## Storage Cost

Your contract needs to lock a portion of their balance proportional to the amount of data they stored in the blockchain. This means that:

- If more data is added and the **storage increases ↑**, then your contract's **balance decreases ↓**.
- If data is deleted and the **storage decreases ↓**, then your contract's **balance increases ↑**.

Currently, it cost approximately **1 Ⓝ** to store **100kb** of data.

:::info
You can save on smart contract storage if using NEAR Account IDs by encoding them using base32. Since they consist of `[a-z.-_]` characters with a maximum length of 64 characters, they can be encoded using 5 bits per character, with terminal `\0`. Going to a size of 65 \* 5 = 325 bits from the original (64 + 4) \* 8 = 544 bits. This is a 40% reduction in storage costs.
:::

:::caution
An error will raise if your contract tries to increase its state while not having NEAR to cover for storage.
:::

:::warning
Be mindful of potential [small deposit attacks](../security/storage.md)
:::
