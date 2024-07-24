"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1660],{44688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(85893),a=n(11151);const c={},o=void 0,s={id:"build/primitives/nft/smart-contract/transfer",title:"transfer",description:"Please notice that a contract can only transfer an NFT that they own, or an NFT that they were approved to transfer.",source:"@site/../docs/2.build/5.primitives/nft/smart-contract/transfer.md",sourceDirName:"2.build/5.primitives/nft/smart-contract",slug:"/build/primitives/nft/smart-contract/transfer",permalink:"/build/primitives/nft/smart-contract/transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/smart-contract/transfer.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},i={},l=[];function d(t){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsx)(e.p,{children:"Please notice that a contract can only transfer an NFT that they own, or an NFT that they were approved to transfer."})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'const YOCTO_NEAR: u128 = 1;\n\n#[ext_contract(ext_nft_contract)]\ntrait ExternalNftContract {\n  fn nft_transfer(&self, receiver_id: AccountId, token_id: TokenId) -> Promise;\n}\n\nimpl Contract {\n  #[payable]\n  pub fn nft_transfer(&mut self, receiver_id: AccountId, token_id: TokenId) -> Promise {\n    let promise = ext_nft_contract::ext(self.nft_contract.clone())\n      .with_attached_deposit(YOCTO_NEAR)\n      .nft_transfer(receiver_id, token_id);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .nft_transfer_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn nft_transfer_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting NFT contract");\n    }\n  }\n}\n'})})]})}function f(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var r=n(67294);const a={},c=r.createContext(a);function o(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);