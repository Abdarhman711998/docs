"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7130],{94669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=t(85893),i=t(11151);const a={id:"gas",title:"Gas"},c=void 0,r={id:"concepts/basics/transactions/gas",title:"Gas",description:"On every transaction you send to the network NEAR charges you a fee (aka gas fee). This fee is used to indirectly pay the people that keep the network infrastructure, and to incentivize developers of smart contracts.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/basics/transactions/gas.md",sourceDirName:"1.concepts/basics/transactions",slug:"/concepts/basics/transactions/gas",permalink:"/vi/concepts/basics/transactions/gas",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/transactions/gas.md",tags:[],version:"current",frontMatter:{id:"gas",title:"Gas"},sidebar:"concepts",previous:{title:"Overview",permalink:"/vi/concepts/basics/transactions/overview"},next:{title:"Gas - Advanced",permalink:"/vi/concepts/basics/transactions/gas-advanced"}},o={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"1. Gas as a Developer Incentive",id:"1-gas-as-a-developer-incentive",level:3},{value:"2. Free Transactions",id:"2-free-transactions",level:3},{value:"Gas Units &amp; Gas Price",id:"gas-units--gas-price",level:2},{value:"Gas Units",id:"gas-units",level:3},{value:"Gas Price",id:"gas-price",level:3},{value:"Translating Gas to Computational Resources",id:"thinking-in-gas",level:2},{value:"The cost of common actions",id:"the-cost-of-common-actions",level:2},{value:"How do I buy gas?",id:"how-do-i-buy-gas",level:2},{value:"Attach extra gas; get refunded!",id:"attach-extra-gas-get-refunded",level:2},{value:"Prepaid Gas l\xe0 g\xec?",id:"what-about-prepaid-gas",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["On every transaction you send to the network NEAR charges you a fee (aka ",(0,s.jsx)(n.strong,{children:"gas fee"}),"). This fee is used to indirectly pay the ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/validators",children:"people"})," that keep the network infrastructure, and to incentivize developers of smart contracts."]}),"\n",(0,s.jsx)(n.p,{children:"Gas is a fascinating topic that touches everyone in the NEAR ecosystem, here is a brief summary:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A small fee is charged on every transaction to indirectly ",(0,s.jsx)(n.strong,{children:"pay the validators"})," by burning a part of the total token supply."]}),"\n",(0,s.jsxs)(n.li,{children:["This fee ",(0,s.jsx)(n.strong,{children:"prevents spamming"})," the network with useless transactions."]}),"\n",(0,s.jsxs)(n.li,{children:["Read-only methods do not ",(0,s.jsx)(n.strong,{children:"result in fees for the user"}),", instead, the validator absorbs the cost."]}),"\n",(0,s.jsxs)(n.li,{children:["In transaction involving a contract, ",(0,s.jsx)(n.strong,{children:"30% of the fee"})," goes to the contract as a ",(0,s.jsx)(n.strong,{children:"developer incentive"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fees are measured in ",(0,s.jsx)(n.strong,{children:"gas units"})," but paid in $NEAR."]}),"\n",(0,s.jsxs)(n.li,{children:["Gas units are deterministic: the ",(0,s.jsx)(n.strong,{children:"same transaction"})," costs the ",(0,s.jsx)(n.strong,{children:"same gas units"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Gas units are transformed to $NEAR by multiplying for a ",(0,s.jsx)(n.strong,{children:"gas price"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"gas price variates"})," smoothly from block to block."]}),"\n",(0,s.jsxs)(n.li,{children:["Gas can be thought as a ",(0,s.jsx)(n.strong,{children:"wall time"}),": ",(0,s.jsx)(n.code,{children:"1 Tgas"})," ~ ",(0,s.jsx)(n.code,{children:"1 ms"})," of compute time."]}),"\n",(0,s.jsxs)(n.li,{children:["You can attach a ",(0,s.jsxs)(n.strong,{children:["maximum of ",(0,s.jsx)(n.code,{children:"300Tgas"})]})," to a transaction."]}),"\n",(0,s.jsxs)(n.li,{children:["Attaching extra gas does ",(0,s.jsx)(n.strong,{children:"NOT"})," make the transaction faster, unused gas is ",(0,s.jsx)(n.strong,{children:"simply returned"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Contract developers can ",(0,s.jsx)(n.strong,{children:"prepay gas"})," for their users."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,s.jsxs)(n.p,{children:["When you send a transaction to the NEAR network different ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/validators",children:"validators"})," process it using their own infrastructure."]}),"\n",(0,s.jsx)(n.p,{children:"Maintaining the infrastructure up and running is important to keep the network healthy, but represents a significant cost for the validator."}),"\n",(0,s.jsxs)(n.p,{children:["As many other networks, NEAR ",(0,s.jsx)(n.strong,{children:"pays the validators"})," for their job. Also like many other networks, users have to pay a small ",(0,s.jsx)(n.strong,{children:"fee"})," (aka ",(0,s.jsx)(n.strong,{children:"gas fee"}),") on every transaction. But instead of giving the gas fee to the validators, validators receive their reward independent from the gas fees. This topic is discussed in more details in the ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/validators",children:"validators"})," section."]}),"\n",(0,s.jsx)(n.p,{children:"In addition, NEAR implements two unique features with respect to gas fees:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Sharing fees with developers"}),"\n",(0,s.jsxs)(n.li,{children:["Allowing for ",(0,s.jsx)(n.strong,{children:"free"})," transactions"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-gas-as-a-developer-incentive",children:"1. Gas as a Developer Incentive"}),"\n",(0,s.jsx)(n.p,{children:"Something unique to NEAR is that the GAS is not used to pay validators. In transactions where calling a contract would incur a gas fee, the fee is actually divided as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"30% goes to the smart contract."}),"\n",(0,s.jsx)(n.li,{children:"70% is burned."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In this way, NEAR uses the gas to also ",(0,s.jsx)(n.strong,{children:"incentive development of dApps"})," in the ecosystem."]}),"\n",(0,s.jsx)(n.h3,{id:"2-free-transactions",children:"2. Free Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["Another unique feature of NEAR is that it allows to call ",(0,s.jsx)(n.code,{children:"read-only"})," methods in smart contracts for free, without even needing a NEAR account."]}),"\n",(0,s.jsx)(n.p,{children:"In such case, it is the validators who absorb the gas cost."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"gas-units--gas-price",children:"Gas Units & Gas Price"}),"\n",(0,s.jsx)(n.p,{children:"On every transaction NEAR users get charged a small $NEAR fee, which has to be paid upfront. However, transaction fees are not computed directly in $NEAR."}),"\n",(0,s.jsx)(n.h3,{id:"gas-units",children:"Gas Units"}),"\n",(0,s.jsxs)(n.p,{children:["Internally, the computation is done using ",(0,s.jsx)(n.strong,{children:"gas units"})," which are ",(0,s.jsx)(n.strong,{children:"deterministic"}),", meaning that a given operation will always cost the ",(0,s.jsx)(n.strong,{children:"same amount of gas"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gas-price",children:"Gas Price"}),"\n",(0,s.jsxs)(n.p,{children:["To determine the actual $NEAR fee the gas of all operations done by the transaction are added up are multiplied by a ",(0,s.jsx)(n.strong,{children:"gas price"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The gas price is not fixed: it is ",(0,s.jsx)(n.strong,{children:"recalculated each block"})," depending on network demand. If the previous block is more than half full the price goes up, otherwise it goes down."]}),"\n",(0,s.jsx)(n.p,{children:"The price cannot change by more than 1% each block and bottoms out at a price that's configured by the network (currently 100 million yocto NEAR).---"}),"\n",(0,s.jsx)(n.h2,{id:"thinking-in-gas",children:"Translating Gas to Computational Resources"}),"\n",(0,s.jsx)(n.p,{children:"Gas units have been carefully calculated to work out to some easy-to-think-in numbers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1 TGas"})," (10\xb9\xb2 gas units) \u2248 ",(0,s.jsx)(n.strong,{children:"1 millisecond"}),' of "compute" time.']}),"\n",(0,s.jsxs)(n.li,{children:["This represents ",(0,s.jsx)(n.strong,{children:"0.1 milliNEAR"})," (using the ",(0,s.jsx)(n.a,{href:"#how-is-the-gas-price-computed",children:"minimum gas price"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"1ms"})," is a rough but useful approximation. However, gas units encapsulate not only compute/CPU time but also bandwidth/network time and storage/IO time."]}),"\n",(0,s.jsx)(n.p,{children:"Via a governance mechanism, system parameters might be tweaked, shifting the mapping between TGas and milliseconds in the future."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["1s Block Production NEAR imposes a ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#protocol-config",children:"maximum amount of gas"})," per block to ensure that a block is generated approx. every second. :::"]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h2,{id:"the-cost-of-common-actions",children:"The cost of common actions"}),(0,s.jsxs)(n.p,{children:["To give you a starting point for what to expect for costs on NEAR, the table below lists the cost of some common actions in TGas and milliNEAR (at the ",(0,s.jsx)(n.a,{href:"#how-is-the-gas-price-computed",children:"minimum gas price"}),")."]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"TGas"}),(0,s.jsx)(n.th,{children:"fee (mN)"}),(0,s.jsx)(n.th,{children:"fee (\u24c3)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"T\u1ea1o account"}),(0,s.jsx)(n.td,{children:"0.42"}),(0,s.jsx)(n.td,{children:"0.042"}),(0,s.jsx)(n.td,{children:"4.2\u2a0910\u207b\u2075"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Send Funds"}),(0,s.jsx)(n.td,{children:"0.45"}),(0,s.jsx)(n.td,{children:"0.045"}),(0,s.jsx)(n.td,{children:"4.5\u2a0910\u207b\u2075"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Stake"}),(0,s.jsx)(n.td,{children:"0.50"}),(0,s.jsx)(n.td,{children:"0.050"}),(0,s.jsx)(n.td,{children:"5.0\u2a0910\u207b\u2075"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Th\xeam m\u1ed9t Full Access Key"}),(0,s.jsx)(n.td,{children:"0.42"}),(0,s.jsx)(n.td,{children:"0.042"}),(0,s.jsx)(n.td,{children:"4.2\u2a0910\u207b\u2075"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Delete Key"}),(0,s.jsx)(n.td,{children:"0.41"}),(0,s.jsx)(n.td,{children:"0.041"}),(0,s.jsx)(n.td,{children:"4.1\u2a0910\u207b\u2075"})]})]})]}),(0,s.jsxs)(t,{class:"info",children:[(0,s.jsx)("summary",{children:"Where do these numbers come from?"}),(0,s.jsxs)(n.p,{children:["NEAR is ",(0,s.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/res/runtime_configs/parameters.yaml",children:"configured"})," with base costs. An example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"  transfer_cost: {\n    send_sir:     115123062500,\n    send_not_sir: 115123062500,\n    execution:    115123062500\n  }\n"})}),(0,s.jsx)(n.p,{children:'The "sir" here stands for "sender is receiver". T\u1ea5t c\u1ea3 gi\xe1 tr\u1ecb \u0111\u1ec1u gi\u1ed1ng h\u1ec7t nhau, nh\u01b0ng ch\xfang c\xf3 th\u1ec3 thay \u0111\u1ed5i trong t\u01b0\u01a1ng lai.'}),(0,s.jsxs)(n.p,{children:["When you make a request to transfer funds, NEAR immediately deducts the appropriate ",(0,s.jsx)(n.code,{children:"send"})," amount from your account. Then it creates a ",(0,s.jsx)(n.em,{children:"receipt"}),", an internal book-keeping mechanism to facilitate NEAR's asynchronous, sharded design (if you're coming from Ethereum, forget what you know about Ethereum's receipts, as they're completely different). Creating a receipt has its own associated costs:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"  action_receipt_creation_config: {\n    send_sir:     108059500000,\n    send_not_sir: 108059500000,\n    execution:    108059500000\n  }\n"})}),(0,s.jsxs)(n.p,{children:["You can query this value by using the ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#protocol-config",children:(0,s.jsx)(n.code,{children:"protocol_config"})})," RPC endpoint and search for ",(0,s.jsx)(n.code,{children:"action_receipt_creation_config"}),"."]}),(0,s.jsxs)(n.p,{children:["The appropriate ",(0,s.jsx)(n.code,{children:"send"})," amount for creating this receipt is also immediately deducted from your account."]}),(0,s.jsxs)(n.p,{children:['The "transfer" action won\'t be finalized until the next block. At this point, the ',(0,s.jsx)(n.code,{children:"execution"})," amount for each of these actions will be deducted from your account (something subtle: the gas units on this next block could be multiplied by a gas price that's up to 1% different, since gas price is recalculated on each block). Adding it all up to find the total transaction fee:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    (transfer_cost.send_not_sir  + action_receipt_creation_config.send_not_sir ) * gas_price_at_block_1 +\n    (transfer_cost.execution + action_receipt_creation_config.execution) * gas_price_at_block_2\n"})})]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h2,{id:"how-do-i-buy-gas",children:"How do I buy gas?"}),(0,s.jsx)(n.p,{children:"You don't directly buy gas; you attach tokens to transactions."}),(0,s.jsxs)(n.p,{children:["N\u1ebfu b\u1ea1n hi\u1ec3u r\xf5 v\u1ec1 Ethereum, s\u1ebd c\xf3 m\u1ed9t suy ngh\u0129 n\u1ea3y ra trong \u0111\u1ea7u b\u1ea1n \u0111\xf3 l\xe0 s\u1eed d\u1ee5ng m\u1ed9t l\u01b0\u1ee3ng gas price cao h\u01a1n \u0111\u1ec3 transaction c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c x\u1eed l\xfd nhanh h\u01a1n. In NEAR, ",(0,s.jsx)(n.strong,{children:"gas costs are deterministic"}),", and you ",(0,s.jsx)(n.strong,{children:"can't pay extra"}),"."]}),(0,s.jsxs)(n.p,{children:["For basic operations like transfers the gas needed is easy to calculate ahead of time, so it's ",(0,s.jsx)(n.strong,{children:"automatically attached for you"}),"."]}),(0,s.jsxs)(n.p,{children:["Function calls are more complex and need you to attach an explicit amount of gas to the transactions, up to a maximum value of 3\u2a0910\xb9\u2074 gas units (",(0,s.jsx)(n.code,{children:"300 Tgas"}),")."]}),(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["This maximum value of prepaid gas is subject to change but you can query this value by using the ",(0,s.jsx)(n.a,{href:"/api/rpc/protocol#protocol-config",children:(0,s.jsx)(n.code,{children:"protocol_config"})})," RPC endpoint and search for ",(0,s.jsx)(n.code,{children:"max_total_prepaid_gas"}),". :::"]}),(0,s.jsxs)(t,{class:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:"How many tokens will these units cost?"}),"\nNote that you are greenlighting a maximum number of gas ",(0,s.jsx)(n.em,{children:"units"}),", not a number of NEAR tokens or yoctoNEAR."]}),(0,s.jsxs)(n.p,{children:["Nh\u1eefng unit n\xe0y s\u1ebd nh\xe2n v\u1edbi gas price t\u1ea1i block m\xe0 ch\xfang \u0111\u01b0\u1ee3c x\u1eed l\xfd. N\u1ebfu nh\u1eefng function call t\u1ea1o c\xe1c cross-contract call, sau \u0111\xf3 c\xe1c ph\u1ea7n ph\xe2n bi\u1ec7t c\u1ee7a function s\u1ebd \u0111\u01b0\u1ee3c x\u1eed l\xfd \u1edf c\xe1c block kh\xe1c, v\xe0 c\xf3 th\u1ec3 s\u1eed d\u1ee5ng m\u1ee9c gas price kh\xe1c nhau. At a minimum, the function will take two blocks to complete, as explained in ",(0,s.jsx)(n.a,{href:"#the-cost-of-common-actions",children:"where those numbers come from"}),"."]}),(0,s.jsxs)(n.p,{children:["Gi\u1ea3i s\u1eed m\u1ee9c gas price t\u1ed1i thi\u1ec3u c\u1ee7a h\u1ec7 th\u1ed1ng l\xe0 100 tri\u1ec7u yoctoNEAR trong su\u1ed1t qu\xe1 tr\xecnh v\u1eadn h\xe0nh, th\xec l\u01b0\u1ee3ng gas \u0111i k\xe8m t\u1ed1i \u0111a l\xe0 3\u2a0910\xb9\u2074 d\u01b0\u1eddng nh\u01b0 s\u1ebd cho ph\xe9p chi ti\xeau t\u1ed1i \u0111a 3\u2a0910\xb2\xb2 yN. However, there's also a pessimistic multiplier of about 6.4 to ",(0,s.jsx)(n.a,{href:"https://github.com/near/NEPs/issues/67",children:"prevent shard congestion"}),"."]}),(0,s.jsx)(n.p,{children:"Nh\xe2n c\u1ea3 ba con s\u1ed1 n\xe0y, ch\xfang ta th\u1ea5y r\u1eb1ng, n\u1ebfu gas price \u1edf m\u1ee9c t\u1ed1i thi\u1ec3u, th\xec gas unit t\u1ed1i \u0111a \u0111\u01b0\u1ee3c ph\xe9p \u0111\u01b0\u1ee3c \u0111\xednh k\xe8m cho c\xe1c ho\u1ea1t \u0111\u1ed9ng v\xe0o kho\u1ea3ng 0.2\u24c3. N\u1ebfu gas price cao h\u01a1n m\u1ee9c t\u1ed1i thi\u1ec3u, kho\u1ea3n ph\xed n\xe0y c\xf3 th\u1ec3 cao h\u01a1n."}),(0,s.jsx)(n.p,{children:"\u0110i\u1ec1u g\xec s\u1ebd x\u1ea3y ra n\u1ebfu gas price \u1edf m\u1ee9c t\u1ed1i thi\u1ec3u \u1edf block \u0111\u1ea7u ti\xean, nh\u01b0ng qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n ph\u1ea3i m\u1ea5t nhi\u1ec1u block \u0111\u1ec3 ho\xe0n th\xe0nh, v\xe0 c\xe1c block ti\u1ebfp theo \u0111\xf3 c\xf3 gas price cao h\u01a1n? Chi ph\xed c\xf3 th\u1ec3 nhi\u1ec1u h\u01a1n ~0.2\u24c3? C\xe2u tr\u1ea3 l\u1eddi l\xe0 kh\xf4ng. H\u1ec7 s\u1ed1 pessimistic gi\u1ea3i th\xedch cho tr\u01b0\u1eddng h\u1ee3p n\xe0y."})]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h2,{id:"attach-extra-gas-get-refunded",children:"Attach extra gas; get refunded!"}),(0,s.jsxs)(n.p,{children:["The amount of gas required to call a contract depends on the method's complexity and the contract's state. Many times this is ",(0,s.jsx)(n.strong,{children:"hard to predict"})," ahead of time."]}),(0,s.jsx)(n.p,{children:"Because of this, if you attach more tokens than needed to cover the gas, you'll get refunded the unused fee!"}),(0,s.jsxs)(n.p,{children:["\u0110i\u1ec1u n\xe0y c\u0169ng \u0111\xfang cho c\xe1c thao t\xe1c c\u01a1 b\u1ea3n. In the ",(0,s.jsx)(n.a,{href:"#the-cost-of-common-actions-the-cost-of-common-actions",children:"cost section"})," we mentioned that $NEAR fees are automatically calculated and attached. Since the gas price could be adjusted while these operations are being applied, a slight amount extra is attached, and any beyond what's necessary gets refunded."]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h2,{id:"what-about-prepaid-gas",children:"Prepaid Gas l\xe0 g\xec?"}),(0,s.jsx)(n.p,{children:"NEAR Team hi\u1ec3u \u0111\u01b0\u1ee3c r\u1eb1ng nh\u1eefng developer mu\u1ed1n mang l\u1ea1i cho user c\u1ee7a h\u1ecd nh\u1eefng tr\u1ea3i nghi\u1ec7m ban \u0111\u1ea7u t\u1ed1t nh\u1ea5t c\xf3 th\u1ec3. \u0110\u1ec3 hi\u1ec7n th\u1ef1c h\xf3a mong mu\u1ed1n n\xe0y, c\xe1c developer c\xf3 th\u1ec3 thi\u1ebft k\u1ebf c\xe1c \u1ee9ng d\u1ee5ng c\u1ee7a h\u1ecd theo c\xe1ch: l\u1ea7n \u0111\u1ea7u user c\xf3 th\u1ec3 r\xfat ti\u1ec1n \u0111\u1ec3 mua gas tr\u1ef1c ti\u1ebfp t\u1eeb m\u1ed9t t\xe0i kho\u1ea3n \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi developer. Sau khi tham gia, user c\xf3 th\u1ec3 d\xf9ng n\xf3 \u0111\u1ec3 thanh to\xe1n cho n\u1ec1n t\u1ea3ng m\xe0 h\u1ecd \u0111ang s\u1eed d\u1ee5ng."}),(0,s.jsx)(n.p,{children:"Theo ngh\u0129a n\xe0y, prepaid gas c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c xem nh\u01b0 m\u1ed9t t\xe0i kho\u1ea3n \u0111\u01b0\u1ee3c t\xe0i tr\u1ee3 v\xe0 c\xe1c contract li\xean quan cho qua tr\xecnh tham gia c\u1ee7a ng\u01b0\u1eddi d\xf9ng m\u1edbi."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"V\u1eady th\xec developer thanh to\xe1n gas fee cho user c\u1ee7a h\u1ecd tr\xean NEAR nh\u01b0 th\u1ebf n\xe0o?"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"User c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ti\u1ec1n tr\u1ef1c ti\u1ebfp t\u1eeb t\xe0i kho\u1ea3n c\u1ee7a developer ch\u1ec9 d\xe0nh cho vi\u1ec7c tr\u1ea3 gas fee tr\xean dApp n\xe0y. Sau \u0111\xf3, developer ph\u1ea3i ph\xe2n bi\u1ec7t c\xe1c user d\u1ef1a v\xe0o c\xe1c signer key thay v\xec c\xe1c account name."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"S\u1eed d\u1ee5ng function call, b\u1ea1n c\xf3 th\u1ec3 cho ph\xe9p user m\u1edbi kh\xf4ng c\xf3 t\xe0i kho\u1ea3n s\u1eed d\u1ee5ng dApp v\xe0 contract on-chain c\u1ee7a b\u1ea1n. Back-end t\u1ea1o ra m\u1ed9t access key m\u1edbi cho user tr\xean t\xe0i kho\u1ea3n c\u1ee7a contract v\xe0 tr\u1ecf n\xf3 v\u1ec1 ch\xednh contract \u0111\xf3. B\xe2y gi\u1edd, user c\xf3 th\u1ec3 ngay l\u1eadp t\u1ee9c s\u1eed d\u1ee5ng web app m\xe0 kh\xf4ng c\u1ea7n th\xf4ng qua b\u1ea5t k\u1ef3 wallet n\xe0o."}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["NEAR Protocol kh\xf4ng cung c\u1ea5p b\u1ea5t k\u1ef3 t\xednh n\u0103ng h\u1ea1n ch\u1ebf n\xe0o \u0111\u1ed1i v\u1edbi vi\u1ec7c s\u1eed d\u1ee5ng qu\u1ef9 c\u1ee7a developer. C\xe1c developer c\xf3 th\u1ec3 \u0111\u1eb7t m\u1ee9c cho ph\xe9p tr\xean c\xe1c access key t\u01b0\u01a1ng \u1ee9ng v\u1edbi nh\u1eefng user c\u1ee5 th\u1ec3 -- m\u1ed9t ",(0,s.jsx)(n.code,{children:"FunctionCall"})," access key cho m\u1ed7i user m\u1edbi v\u1edbi m\u1ee9c cho ph\xe9p c\u1ee5 th\u1ec3."]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(67294);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);