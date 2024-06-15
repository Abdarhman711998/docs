"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5907],{20776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(85893),a=n(11151),s=n(71183);const l={id:"crosscontract",title:"Cross-Contract Calls"},c=void 0,i={id:"build/smart-contracts/anatomy/crosscontract",title:"Cross-Contract Calls",description:"Cross-contract calls allow your contract to interact with other deployed contracts. This is useful for:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/crosscontract.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/crosscontract",permalink:"/zh-CN/build/smart-contracts/anatomy/crosscontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/crosscontract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"crosscontract",title:"Cross-Contract Calls"},sidebar:"build",previous:{title:"Transfers & Actions",permalink:"/zh-CN/build/smart-contracts/anatomy/actions"},next:{title:"\u2705 Checklist",permalink:"/zh-CN/build/smart-contracts/security/checklist"}},o={},u=[{value:"Cross-Contract Calls are <strong>Independent</strong>",id:"cross-contract-calls-are-independent",level:4},{value:"Cross-Contract Calls are <strong>Asynchronous</strong>",id:"cross-contract-calls-are-asynchronous",level:4},{value:"Snippet: Querying Information",id:"snippet-querying-information",level:2},{value:"Snippet: Sending Information",id:"snippet-sending-information",level:2},{value:"Promises",id:"promises",level:2},{value:"Callback Method",id:"callback-method",level:2},{value:"Checking Execution Status",id:"checking-execution-status",level:3},{value:"Successful Execution",id:"successful-execution",level:3},{value:"Failed Execution",id:"failed-execution",level:3},{value:"Security Concerns",id:"security-concerns",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Cross-contract calls allow your contract to interact with other deployed contracts. This is useful for:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Querying information from another contract."}),"\n",(0,r.jsx)(t.li,{children:"Executing a method in another contract."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"cross-contract-calls-are-independent",children:["Cross-Contract Calls are ",(0,r.jsx)(t.strong,{children:"Independent"})]}),"\n",(0,r.jsx)(t.p,{children:"The method in which you make the call and the method in which you receive the result are different."}),"\n",(0,r.jsxs)(t.h4,{id:"cross-contract-calls-are-asynchronous",children:["Cross-Contract Calls are ",(0,r.jsx)(t.strong,{children:"Asynchronous"})]}),"\n",(0,r.jsx)(t.p,{children:"There is a delay between the call and the callback in which everyone can still interact with your contract."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"snippet-querying-information",children:"Snippet: Querying Information"}),"\n",(0,r.jsxs)(t.p,{children:["While making your contract, it is likely that you will want to query information from another contract. Below, you can see a basic example in which we query the greeting message from our ",(0,r.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/quickstart",children:"Hello NEAR"})," example."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"js",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"17",end:"39"})}),(0,r.jsxs)(s.SQ,{value:"rust",language:"rust",children:[(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"22",end:"51"}),(0,r.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/external.rs",start:"2",end:"12"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"snippet-sending-information",children:"Snippet: Sending Information"}),"\n",(0,r.jsxs)(t.p,{children:["Calling another contract passing information is also a common scenario. Below you can see a method that interacts with the ",(0,r.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/quickstart",children:"Hello NEAR"})," example to change its greeting message."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"js",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"41",end:"64"})}),(0,r.jsxs)(s.SQ,{value:"rust",language:"rust",children:[(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"53",end:"80"}),(0,r.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/external.rs",start:"2",end:"12"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"promises",children:"Promises"}),"\n",(0,r.jsx)(t.p,{children:"Cross-contract calls work by creating two promises in the network:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["A promise to execute code in the external contract (",(0,r.jsx)(t.code,{children:"Promise.create"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["A promise to call back a ",(0,r.jsx)(t.strong,{children:"different"})," method in your contract with the result (",(0,r.jsx)(t.code,{children:"Promise.then"}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Both promises take the same arguments:"}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"js",language:"ts",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'NearPromise.new("external_address").functionCall("method", JSON.stringify(arguments), DEPOSIT, GAS);\n'})})}),(0,r.jsx)(s.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'external_trait::ext("external_address")\n.with_attached_deposit(DEPOSIT)\n.with_static_gas(GAS)\n.method(arguments);\n'})})})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The address of the contract you want to interact with"}),"\n",(0,r.jsx)(t.li,{children:"The method that you want to execute"}),"\n",(0,r.jsxs)(t.li,{children:["The (",(0,r.jsx)(t.strong,{children:"encoded"}),") arguments to pass to the method"]}),"\n",(0,r.jsxs)(t.li,{children:["The amount of GAS to use (deducted from the ",(0,r.jsx)(t.strong,{children:"attached Gas"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["The amount of NEAR to attach (deducted from ",(0,r.jsx)(t.strong,{children:"your contract\u2019s balance"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Notice that the callback could be made to ",(0,r.jsx)(t.strong,{children:"any"})," contract. This means that, if you want, the result could be potentially handled by another contract."]})})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.p,{children:["The fact that you are creating a Promise means that both the cross-contract call and callback will ",(0,r.jsx)(t.strong,{children:"not execute immediately"}),". In fact:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The cross-contract call will execute 1 or 2 blocks after your method finishes ",(0,r.jsx)(t.strong,{children:"correctly"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The callback will then execute 1 or 2 blocks after the ",(0,r.jsx)(t.strong,{children:"external"})," method finishes (",(0,r.jsx)(t.strong,{children:"correctly or not"}),") :::"]}),"\n"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"callback-method",children:"Callback Method"}),(0,r.jsxs)(t.p,{children:["If your method finishes correctly, then eventually your callback method will execute. This will happen whether the external contract finishes ",(0,r.jsx)(t.strong,{children:"successfully or not"}),". We repeat, if your original method finishes correctly, then your callback will ",(0,r.jsx)(t.strong,{children:"always execute"}),"."]}),(0,r.jsx)(t.p,{children:"In the callback method you will have access to the result, which contains two important arguments:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"status"}),": Telling if the external method finished successfully or not"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"buffer"}),": Having the value returned by the external method (if any)"]}),"\n"]}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["The callback methods in your contract must be public, so it can be called when the second promise executes. However, they should be only callable by ",(0,r.jsx)(t.strong,{children:"your contract"}),". Always make sure to make it private by asserting that the ",(0,r.jsx)(t.code,{children:"predecessor"})," is ",(0,r.jsx)(t.code,{children:"current_account_id"}),". In rust this can be achieved using the ",(0,r.jsx)(t.code,{children:"#[private]"})," decorator."]})})})})]}),"\n",(0,r.jsx)(t.h3,{id:"checking-execution-status",children:"Checking Execution Status"}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"js",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"31",end:"38"})}),(0,r.jsx)(s.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"67",end:"74"})})]}),"\n",(0,r.jsx)(t.h3,{id:"successful-execution",children:"Successful Execution"}),"\n",(0,r.jsxs)(t.p,{children:["In case the call finishes successfully, the resulting object will have a ",(0,r.jsx)(t.code,{children:"status"})," of 1, and the ",(0,r.jsx)(t.code,{children:"buffer"})," will have the encoded result (if any). In order to recover the result you need to decode it from the resulting ",(0,r.jsx)(t.code,{children:"buffer"}),":"]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"js",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-ts/src/contract.ts",start:"31",end:"31"})}),(0,r.jsx)(s.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-simple-rs/src/lib.rs",start:"47",end:"49"})})]}),"\n",(0,r.jsx)(t.h3,{id:"failed-execution",children:"Failed Execution"}),"\n",(0,r.jsxs)(t.p,{children:["If the external method fails (i.e. it panics), then your callback will be ",(0,r.jsx)(t.strong,{children:"executed anyway"}),". Here you need to ",(0,r.jsx)(t.strong,{children:"manually rollback"})," any changes made in your contract during the original call. Particularly:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["If the contract attached NEAR to the call, the funds are sent back to ",(0,r.jsx)(t.strong,{children:"the contract's account"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If the original method made any state changes (i.e. changed or stored data), they ",(0,r.jsx)(t.strong,{children:"won't be automatically reverted"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If your original method finishes correctly then the callback executes ",(0,r.jsx)(t.strong,{children:"even if the external method panics"}),". Your state will ",(0,r.jsx)(t.strong,{children:"not"})," rollback automatically, and $NEAR will ",(0,r.jsx)(t.strong,{children:"not"})," be returned to the signer automatically. Always make sure to check in the callback if the external method failed, and manually rollback any operation if necessary."]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"security-concerns",children:"Security Concerns"}),"\n",(0,r.jsxs)(t.p,{children:["While writing cross-contract calls there is a significant aspect to keep in mind: all the calls are ",(0,r.jsx)(t.strong,{children:"independent"})," and ",(0,r.jsx)(t.strong,{children:"asynchronous"}),". In other words:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The method in which you make the call and method for the callback are ",(0,r.jsx)(t.strong,{children:"independent"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["There is a ",(0,r.jsx)(t.strong,{children:"delay between the call and the callback"}),", in which people can still interact with the contract"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This has important implications on how you should handle the callbacks. Particularly:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Make sure you don't leave the contract in a exploitable state between the call and the callback."}),"\n",(0,r.jsx)(t.li,{children:"Manually rollback any changes to the state in the callback if the external call failed."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We have a whole ",(0,r.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/security/callbacks",children:"security section"})," dedicated to these specific errors, so please go and check it."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Not following these basic security guidelines could expose your contract to exploits. Please check the ",(0,r.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/security/callbacks",children:"security section"}),", and if still in doubt, ",(0,r.jsx)(t.a,{href:"https://near.chat",children:"join us in Discord"}),"."]})})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),c=n(20469),i=n(91980),o=n(67392),u=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,i._X)(c),(0,r.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function p(e){var t,n,a,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,h=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),g=f[0],b=f[1],j=x({queryString:o,groupId:h}),y=j[0],v=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],C=w[1],S=function(){var e=null!=y?y:k;return m({value:e,tabValues:p})?e:null}();return(0,c.Z)((function(){S&&b(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),C(e)}),[v,C,p]),tabValues:p}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==r&&(o(t),l(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;n=null!=(s=i[l])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:h,onClick:u},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function v(e){var t=p(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(j,Object.assign({},t,e)),(0,b.jsx)(y,Object.assign({},t,e))]})}function w(e){var t=(0,f.Z)();return(0,b.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>x,Ey:()=>f,SQ:()=>p});var r=n(67294),a=n(74866),s=n(85162),l=n(74165),c=n(15861),i=n(1841),o=n.n(i),u=n(85893);function h(){return(h=(0,c.Z)((0,l.Z)().mark((function e(t,n,r){var a,s,c,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):c.length,c=c.slice(n,r),i=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(i)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,l=e.fname,c=e.metastring,i=(0,r.useState)("Loading..."),d=i[0],m=i[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return h.apply(this,arguments)}(e,n,a);r.then((function(e){return m(e)}))})),(0,u.jsxs)("div",{fname:l,children:[(0,u.jsx)(o(),{language:s,metastring:c+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===f)return f({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function f(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,l=e.metastring;return d({url:t,start:n,end:r,language:a,fname:s,metastring:l})}}}]);