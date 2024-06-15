"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1381],{30998:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(85893),i=o(11151);const s={id:"token-loss",title:"Avoiding Token Loss",sidebar_label:"Avoiding Token Loss"},c=void 0,r={id:"integrations/errors/token-loss",title:"Avoiding Token Loss",description:"Careful!",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/6.integrations/errors/token-loss.md",sourceDirName:"6.integrations/errors",slug:"/integrations/errors/token-loss",permalink:"/zh-CN/integrations/errors/token-loss",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/errors/token-loss.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"token-loss",title:"Avoiding Token Loss",sidebar_label:"Avoiding Token Loss"},sidebar:"exchanges",previous:{title:"Source Code Survey",permalink:"/zh-CN/integrations/errors/error-implementation"},next:{title:"Integrator FAQ",permalink:"/zh-CN/integrations/faq"}},a={},l=[{value:"Improper key management",id:"improper-key-management",level:2},{value:"Loss of <code>FullAccess</code> key",id:"loss-of-fullaccess-key",level:3},{value:"Loss of <code>FunctionCall</code> access key",id:"loss-of-functioncall-access-key",level:3},{value:"Refunding deleted accounts",id:"refunding-deleted-accounts",level:2},{value:"Deleting account with non-existent beneficiary",id:"deleting-account-with-non-existent-beneficiary",level:3},{value:"Account with zero balance is garbage-collected, just before it receives refund",id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",level:3},{value:"Failed function calls in batches",id:"failed-function-calls-in-batches",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"Careful! :::warning\nCareful! Losing tokens means losing money!\n::: :::"}),(0,t.jsx)(n.p,{children:"Token loss is possible under multiple scenarios. Token loss is possible under multiple scenarios. These scenarios can be grouped into a few related classes:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Improper key management"}),"\n",(0,t.jsx)(n.li,{children:"Refunding deleted accounts"}),"\n",(0,t.jsx)(n.li,{children:"Failed function calls in batches"}),"\n"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"improper-key-management",children:"Improper key management"}),(0,t.jsx)(n.p,{children:"Improper key management may lead to token loss. Improper key management may lead to token loss. Mitigating such scenarios may be done by issuing backup keys allowing for recovery of accounts whose keys have been lost or deleted."}),(0,t.jsxs)(n.h3,{id:"loss-of-fullaccess-key",children:["Loss of ",(0,t.jsx)(n.code,{children:"FullAccess"})," key"]}),(0,t.jsxs)(n.p,{children:["A user may lose their private key of a ",(0,t.jsx)(n.code,{children:"FullAccess"})," key pair for an account with no other keys. No one will be able to recover the funds. Funds will remain locked in the account forever. No one will be able to recover the funds. Funds will remain locked in the account forever."]}),(0,t.jsxs)(n.h3,{id:"loss-of-functioncall-access-key",children:["Loss of ",(0,t.jsx)(n.code,{children:"FunctionCall"})," access key"]}),(0,t.jsxs)(n.p,{children:["An account may have its one and only ",(0,t.jsx)(n.code,{children:"FunctionCall"})," access key deleted. No one will be able to recover the funds. Funds will remain locked in the account forever. No one will be able to recover the funds. Funds will remain locked in the account forever."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"refunding-deleted-accounts",children:"Refunding deleted accounts"}),(0,t.jsx)(n.p,{children:"When a refund receipt is issued for an account, if that account no longer exists, the funds will be dispersed among validators proportional to their stake in the current epoch."}),(0,t.jsx)(n.h3,{id:"deleting-account-with-non-existent-beneficiary",children:"Deleting account with non-existent beneficiary"}),(0,t.jsx)(n.p,{children:"When you delete an account, you must assign a beneficiary. When you delete an account, you must assign a beneficiary. Once deleted, a transfer receipt is generated and sent to the beneficiary account. If the beneficiary account does not exist, a refund receipt will be generated and sent back to the original account. Since the original account has already been deleted, the funds will be dispersed among validators. If the beneficiary account does not exist, a refund receipt will be generated and sent back to the original account. Since the original account has already been deleted, the funds will be dispersed among validators."}),(0,t.jsx)(n.h3,{id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",children:"Account with zero balance is garbage-collected, just before it receives refund"}),(0,t.jsxs)(n.p,{children:["If an account ",(0,t.jsx)(n.code,{children:"A"})," transfers all of its funds to another account ",(0,t.jsx)(n.code,{children:"B"})," and account ",(0,t.jsx)(n.code,{children:"B"})," does not exist, a refund receipt will be generated for account ",(0,t.jsx)(n.code,{children:"A"}),". During the period of this round trip, account ",(0,t.jsx)(n.code,{children:"A"})," is vulnerable to deletion by garbage collection activities on the network. If account ",(0,t.jsx)(n.code,{children:"A"})," is deleted before the refund receipt arrives, the funds will be dispersed among validators. During the period of this round trip, account ",(0,t.jsx)(n.code,{children:"A"})," is vulnerable to deletion by garbage collection activities on the network. If account ",(0,t.jsx)(n.code,{children:"A"})," is deleted before the refund receipt arrives, the funds will be dispersed among validators."]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"failed-function-calls-in-batches",children:"Failed function calls in batches"}),(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"When designing a smart contract, you should always consider the asynchronous nature of NEAR Protocol.\n::: :::"}),(0,t.jsxs)(n.p,{children:["If a contract function ",(0,t.jsx)(n.code,{children:"f1"})," calls two (or more) other functions ",(0,t.jsx)(n.code,{children:"f2"})," and ",(0,t.jsx)(n.code,{children:"f3"}),", and at least one of these functions, ",(0,t.jsx)(n.code,{children:"f2"})," and ",(0,t.jsx)(n.code,{children:"f3"})," fails, then tokens will be refunded from the function that failed, but tokens will be appropriately credited to the function(s) which succeed."]}),(0,t.jsx)(n.p,{children:"The successful call's tokens may be considered lost depending on your use case if a single failure in the batch means the whole batch failed."})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>c});var t=o(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);