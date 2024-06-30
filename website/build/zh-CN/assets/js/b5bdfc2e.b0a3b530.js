"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7387],{70309:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),s=n(11151);const a={},c=void 0,o={id:"build/primitives/ft/smart-contract/send",title:"send",description:"This snippet assumes that the contract is already holding some FTs and that you want to send them to another account.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/ft/smart-contract/send.md",sourceDirName:"2.build/5.primitives/ft/smart-contract",slug:"/build/primitives/ft/smart-contract/send",permalink:"/zh-CN/build/primitives/ft/smart-contract/send",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/smart-contract/send.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{}},i={},l=[];function d(t){const e={code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'#[near]\nimpl Contract {\n  #[payable]\n  pub fn send_tokens(&mut self, receiver_id: AccountId, amount: U128) -> Promise {\n    assert_eq!(env::attached_deposit(), 1, "Requires attached deposit of exactly 1 yoctoNEAR");\n\n    let promise = ext(self.ft_contract.clone())\n      .with_attached_deposit(YOCTO_NEAR)\n      .ft_transfer(receiver_id, amount, None);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(30*TGAS))\n      .external_call_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_call_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract");\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:"This snippet assumes that the contract is already holding some FTs and that you want to send them to another account."})})]})}function u(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var r=n(67294);const s={},a=r.createContext(s);function c(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);