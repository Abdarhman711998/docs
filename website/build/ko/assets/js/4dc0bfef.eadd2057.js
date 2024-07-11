"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[683],{44241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(85893),i=t(11151);const s={id:"meta-transactions",title:"Meta Transactions"},o="Meta Transactions",c={id:"concepts/abstraction/meta-transactions",title:"Meta Transactions",description:"NEP-366 introduced the concept of meta",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/abstraction/meta-tx.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/meta-transactions",permalink:"/ko/concepts/abstraction/meta-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/meta-tx.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"meta-transactions",title:"Meta Transactions"},sidebar:"build",previous:{title:"What is Chain Abstraction?",permalink:"/ko/build/chain-abstraction/what-is"},next:{title:"Relayers",permalink:"/ko/concepts/abstraction/relayers"}},r={},l=[{value:"Overview",id:"overview",level:2},{value:"Relayer",id:"relayer",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Single receiver",id:"single-receiver",level:3},{value:"Accounts must be initialized",id:"accounts-must-be-initialized",level:3},{value:"Constraints on the actions inside a meta transaction",id:"constraints-on-the-actions-inside-a-meta-transaction",level:2},{value:"Gas costs for meta transactions",id:"gas-costs-for-meta-transactions",level:2},{value:"Gas refunds in meta transactions",id:"gas-refunds-in-meta-transactions",level:2},{value:"Balance refunds in meta transactions",id:"balance-refunds-in-meta-transactions",level:2},{value:"Function access keys in meta transactions",id:"function-access-keys-in-meta-transactions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"meta-transactions",children:"Meta Transactions"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/NEPs/pull/366",children:"NEP-366"})," introduced the concept of meta\ntransactions to Near Protocol. This feature allows users to execute transactions\non NEAR without owning any gas or tokens. In order to enable this, users\nconstruct and sign transactions off-chain. A third party (the relayer) is used\nto cover the fees of submitting and executing the transaction."]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/near/NEPs/003e589e6aba24fc70dd91c9cf7ef0007ca50735/neps/assets/nep-0366/NEP-DelegateAction.png",alt:"Flow chart of meta\ntransactions"}),"\n",(0,a.jsx)(n.em,{children:"Credits for the diagram go to the NEP authors Alexander Fadeev and Egor\nUleyskiy."})]}),"\n",(0,a.jsxs)(n.p,{children:["The graphic shows an example use case for meta transactions. Alice owns an\namount of the fungible token ",(0,a.jsx)(n.code,{children:"$FT"}),". She wants to transfer some to John. To do\nthat, she needs to call ",(0,a.jsx)(n.code,{children:'ft_transfer("john", 10)'})," on an account named ",(0,a.jsx)(n.code,{children:"FT"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The problem is, Alice has no NEAR tokens. She only has a NEAR account that\nsomeone else funded for her and she owns the private keys. She could create a\nsigned transaction that would make the ",(0,a.jsx)(n.code,{children:'ft_transfer("john", 10)'})," call. But\nvalidator nodes will not accept it, because she does not have the necessary Near\ntoken balance to purchase the gas."]}),"\n",(0,a.jsxs)(n.p,{children:["With meta transactions, Alice can create a ",(0,a.jsx)(n.code,{children:"DelegateAction"}),", which is very\nsimilar to a transaction. It also contains a list of actions to execute and a\nsingle receiver for those actions. She signs the ",(0,a.jsx)(n.code,{children:"DelegateAction"})," and forwards\nit (off-chain) to a relayer. The relayer wraps it in a transaction, of which the\nrelayer is the signer and therefore pays the gas costs. If the inner actions\nhave an attached token balance, this is also paid for by the relayer."]}),"\n",(0,a.jsxs)(n.p,{children:["On chain, the ",(0,a.jsx)(n.code,{children:"SignedDelegateAction"})," inside the transaction is converted to an\naction receipt with the same ",(0,a.jsx)(n.code,{children:"SignedDelegateAction"})," on the relayer's shard. The\nreceipt is forwarded to the account from ",(0,a.jsx)(n.code,{children:"Alice"}),", which will unpacked the\n",(0,a.jsx)(n.code,{children:"SignedDelegateAction"})," and verify that it is signed by Alice with a valid Nonce,\netc. If all checks are successful, a new action receipt with the inner actions\nas body is sent to ",(0,a.jsx)(n.code,{children:"FT"}),". There, the ",(0,a.jsx)(n.code,{children:"ft_transfer"})," call finally executes."]}),"\n",(0,a.jsx)(n.h2,{id:"relayer",children:"Relayer"}),"\n",(0,a.jsxs)(n.p,{children:["Meta transactions only work with a ",(0,a.jsx)(n.a,{href:"/ko/concepts/abstraction/relayers",children:"relayer"}),". This is an application layer\nconcept, implemented off-chain. Think of it as a server that accepts a\n",(0,a.jsx)(n.code,{children:"SignedDelegateAction"}),", does some checks on them and eventually forwards it\ninside a transaction to the blockchain network."]}),"\n",(0,a.jsx)(n.p,{children:"A relayer may choose to offer their service for free but that's not going to be\nfinancially viable long-term. But they could easily have the user pay using\nother means, outside of Near blockchain. And with some tricks, it can even be\npaid using fungible tokens on Near."}),"\n",(0,a.jsxs)(n.p,{children:["In the example visualized above, the payment is done using $FT. Together with\nthe transfer to John, Alice also adds an action to pay 0.1 $FT to the relayer.\nThe relayer checks the content of the ",(0,a.jsx)(n.code,{children:"SignedDelegateAction"})," and only processes\nit if this payment is included as the first action. In this way, the relayer\nwill be paid in the same transaction as John."]}),"\n",(0,a.jsx)(n.admonition,{title:"Keep in mind",type:"warning",children:(0,a.jsxs)(n.p,{children:["The payment to the relayer is still not guaranteed. It could be that\nAlice does not have sufficient ",(0,a.jsx)(n.code,{children:"$FT"})," and the transfer fails. To mitigate, the\nrelayer should check the ",(0,a.jsx)(n.code,{children:"$FT"})," balance of Alice first."]})}),"\n",(0,a.jsx)(n.p,{children:"Unfortunately, this still does not guarantee that the balance will be high\nenough once the meta transaction executes. The relayer could waste NEAR gas\nwithout compensation if Alice somehow reduces her $FT balance in just the right\nmoment. Some level of trust between the relayer and its user is therefore\nrequired."}),"\n",(0,a.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsx)(n.h3,{id:"single-receiver",children:"Single receiver"}),"\n",(0,a.jsx)(n.p,{children:"A meta transaction, like a normal transaction, can only have one receiver. It's\npossible to chain additional receipts afterwards. But crucially, there is no\natomicity guarantee and no roll-back mechanism."}),"\n",(0,a.jsx)(n.h3,{id:"accounts-must-be-initialized",children:"Accounts must be initialized"}),"\n",(0,a.jsx)(n.p,{children:"Any transaction, including meta transactions, must use NONCEs to avoid replay\nattacks. The NONCE must be chosen by Alice and compared to a NONCE stored on\nchain. This NONCE is stored on the access key information that gets initialized\nwhen creating an account."}),"\n",(0,a.jsx)(n.h2,{id:"constraints-on-the-actions-inside-a-meta-transaction",children:"Constraints on the actions inside a meta transaction"}),"\n",(0,a.jsx)(n.p,{children:"A transaction is only allowed to contain one single delegate action. Nested\ndelegate actions are disallowed and so are delegate actions next to each other\nin the same receipt."}),"\n",(0,a.jsx)(n.h2,{id:"gas-costs-for-meta-transactions",children:"Gas costs for meta transactions"}),"\n",(0,a.jsx)(n.p,{children:"Meta transactions challenge the traditional ways of charging gas for actions.\nLet's assume Alice uses a relayer to\nexecute actions with Bob as the receiver."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The relayer purchases the gas for all inner actions, plus the gas for the\ndelegate action wrapping them."}),"\n",(0,a.jsxs)(n.li,{children:["The cost of sending the inner actions and the delegate action from the\nrelayer to Alice's shard will be burned immediately. The condition ",(0,a.jsx)(n.code,{children:"relayer    == Alice"})," determines which action ",(0,a.jsx)(n.code,{children:"SEND"})," cost is taken (",(0,a.jsx)(n.code,{children:"sir"})," or ",(0,a.jsx)(n.code,{children:"not_sir"}),").\nLet's call this ",(0,a.jsx)(n.code,{children:"SEND(1)"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["On Alice's shard, the delegate action is executed, thus the ",(0,a.jsx)(n.code,{children:"EXEC"})," gas cost\nfor it is burned. Alice sends the inner actions to Bob's shard. Therefore, we\nburn the ",(0,a.jsx)(n.code,{children:"SEND"})," fee again. This time based on ",(0,a.jsx)(n.code,{children:"Alice == Bob"})," to figure out\n",(0,a.jsx)(n.code,{children:"sir"})," or ",(0,a.jsx)(n.code,{children:"not_sir"}),". Let's call this ",(0,a.jsx)(n.code,{children:"SEND(2)"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["On Bob's shard, we execute all inner actions and burn their ",(0,a.jsx)(n.code,{children:"EXEC"})," cost."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Each of these steps should make sense and not be too surprising. But the\nconsequence is that the implicit costs paid at the relayer's shard are\n",(0,a.jsx)(n.code,{children:"SEND(1)"})," + ",(0,a.jsx)(n.code,{children:"SEND(2)"})," + ",(0,a.jsx)(n.code,{children:"EXEC"})," for all inner actions plus ",(0,a.jsx)(n.code,{children:"SEND(1)"})," + ",(0,a.jsx)(n.code,{children:"EXEC"})," for\nthe delegate action. This might be surprising but hopefully with this\nexplanation it makes sense now!"]}),"\n",(0,a.jsx)(n.h2,{id:"gas-refunds-in-meta-transactions",children:"Gas refunds in meta transactions"}),"\n",(0,a.jsx)(n.p,{children:"Gas refund receipts work exactly like for normal transaction. At every step, the\ndifference between the pessimistic gas price and the actual gas price at that\nheight is computed and refunded. At the end of the last step, additionally all\nremaining gas is also refunded at the original purchasing price. The gas refunds\ngo to the signer of the original transaction, in this case the relayer. This is\nonly fair, since the relayer also paid for it."}),"\n",(0,a.jsx)(n.h2,{id:"balance-refunds-in-meta-transactions",children:"Balance refunds in meta transactions"}),"\n",(0,a.jsx)(n.p,{children:"Unlike gas refunds, the protocol sends balance refunds to the predecessor\n(a.k.a. sender) of the receipt. This makes sense, as we deposit the attached\nbalance to the receiver, who has to explicitly reattach a new balance to new\nreceipts they might spawn."}),"\n",(0,a.jsx)(n.p,{children:"In the world of meta transactions, this assumption is also challenged. If an\ninner action requires an attached balance (for example a transfer action) then\nthis balance is taken from the relayer."}),"\n",(0,a.jsxs)(n.p,{children:["The relayer can see what the cost will be before submitting the meta transaction\nand agrees to pay for it, so nothing wrong so far. But what if the transaction\nfails execution on Bob's shard? At this point, the predecessor is ",(0,a.jsx)(n.code,{children:"Alice"})," and\ntherefore she receives the token balance refunded, not the relayer. This is\nsomething relayer implementations must be aware of since there is a financial\nincentive for Alice to submit meta transactions that have high balances attached\nbut will fail on Bob's shard."]}),"\n",(0,a.jsx)(n.h2,{id:"function-access-keys-in-meta-transactions",children:"Function access keys in meta transactions"}),"\n",(0,a.jsx)(n.p,{children:"Function access keys can limit the allowance, the receiving contract, and the\ncontract methods. The allowance limitation acts slightly strange with meta\ntransactions."}),"\n",(0,a.jsx)(n.p,{children:"But first, both the methods and the receiver will be checked as expected. That\nis, when the delegate action is unwrapped on Alice's shard, the access key is\nloaded from the DB and compared to the function call. If the receiver or method\nis not allowed, the function call action fails."}),"\n",(0,a.jsx)(n.p,{children:"For allowance, however, there is no check. All costs have been covered by the\nrelayer. Hence, even if the allowance of the key is insufficient to make the call\ndirectly, indirectly through meta transaction it will still work."}),"\n",(0,a.jsx)(n.p,{children:"This behavior is in the spirit of allowance limiting how much financial\nresources the user can use from a given account. But if someone were to limit a\nfunction access key to one trivial action by setting a very small allowance,\nthat is circumventable by going through a relayer. An interesting twist that\ncomes with the addition of meta transactions."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(67294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);