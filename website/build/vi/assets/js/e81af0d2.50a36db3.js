"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3653],{85154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const c={id:"setup",title:"C\xe0i \u0111\u1eb7t"},r=void 0,a={id:"api/rpc/setup",title:"C\xe0i \u0111\u1eb7t",description:"In order to use the RPC API you will need to setup the correct RPC endpoints.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/5.api/rpc/setup.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/setup",permalink:"/vi/api/rpc/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"C\xe0i \u0111\u1eb7t"},sidebar:"api",previous:{title:"RPC Providers",permalink:"/vi/api/rpc/providers"},next:{title:"C\xe1c RPC Endpoint",permalink:"/vi/api/rpc/access-keys"}},o={},l=[{value:"RPC Endpoint Setup",id:"rpc-endpoint-setup",level:2},{value:"Limits",id:"limits",level:3},{value:"Querying Historical Data",id:"querying-historical-data",level:2},{value:"Limits",id:"limits-1",level:3},{value:"C\xe0i \u0111\u1eb7t Postman",id:"postman-setup",level:2},{value:"C\xe0i \u0111\u1eb7t JavaScript",id:"javascript-setup",level:2},{value:"C\xe0i \u0111\u1eb7t HTTPie",id:"httpie-setup",level:2},{value:"S\u1eed d\u1ee5ng tham s\u1ed1 <code>block_id</code>",id:"using-block_id-param",level:2},{value:"S\u1eed d\u1ee5ng tham s\u1ed1 <code>finality</code>",id:"using-finality-param",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In order to use the RPC API you will need to setup the correct RPC endpoints."}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h2,{id:"rpc-endpoint-setup",children:"RPC Endpoint Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"POST"})," cho t\u1ea5t c\u1ea3 c\xe1c method"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"JSON RPC 2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'id: "dontcare"'})}),"\n",(0,i.jsxs)(n.li,{children:["endpoint URL thay \u0111\u1ed5i b\u1edfi network:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mainnet ",(0,i.jsx)(n.code,{children:"https://rpc.mainnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["testnet ",(0,i.jsx)(n.code,{children:"https://rpc.testnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["betanet ",(0,i.jsx)(n.code,{children:"https://rpc.betanet.near.org"})," ",(0,i.jsx)(n.em,{children:"(c\xf3 th\u1ec3 kh\xf4ng \u1ed5n \u0111\u1ecbnh)"})]}),"\n",(0,i.jsxs)(n.li,{children:["localnet ",(0,i.jsx)(n.code,{children:"http://localhost:3030"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maximum number of requests per IP: 600 req/min"}),"\n"]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h2,{id:"querying-historical-data",children:"Querying Historical Data"}),"\n",(0,i.jsxs)(n.p,{children:["Truy v\u1ea5n l\u1ecbch s\u1eed data (nhi\u1ec1u h\u01a1n 5 ",(0,i.jsx)(n.a,{href:"/vi/concepts/basics/epoch",children:"epoch"})," ho\u1eb7c ~2.5 day), b\u1ea1n c\xf3 th\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c nh\u1eefng ph\u1ea3n h\u1ed3i l\xe0 data kh\xf4ng t\u1ed3n t\u1ea1i n\u1eefa. Trong tr\u01b0\u1eddng h\u1ee3p \u0111\xf3, c\xe1c archival RPC node s\u1ebd gi\xfap b\u1ea1n:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mainnet ",(0,i.jsx)(n.code,{children:"https://archival-rpc.mainnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["testnet ",(0,i.jsx)(n.code,{children:"https://archival-rpc.testnet.near.org"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 nh\xecn th\u1ea5y interface n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a trong ",(0,i.jsx)(n.code,{children:"nearcore"})," ",(0,i.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/bf9ae4ce8c680d3408db1935ebd0ca24c4960884/chain/jsonrpc/client/src/lib.rs#L181",children:"\u1edf \u0111\xe2y"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"limits-1",children:"Limits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maximum number of requests per IP: 600 req/min"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"postman-setup",children:"C\xe0i \u0111\u1eb7t Postman"}),"\n",(0,i.jsxs)(n.p,{children:["An easy way to test the queries in this documentation page is to use an API request tool such as ",(0,i.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"}),". You only need to configure two things:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u0110\u1ea3m b\u1ea3o b\u1ea1n th\xeam v\xe0o header v\u1edbi m\u1ed9t key l\xe0 ",(0,i.jsx)(n.code,{children:"Content-Type"})," c\xf3 gi\xe1 tr\u1ecb l\xe0 ",(0,i.jsx)(n.code,{children:"application/json"}),". ",(0,i.jsx)(n.img,{alt:"postman-setup-header",src:t(99916).Z+"",width:"1064",height:"299"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Sau \u0111\xf3 chuy\u1ec3n sang ",(0,i.jsx)(n.code,{children:"Body"})," v\xe0 ch\u1ecdn ",(0,i.jsx)(n.code,{children:"raw"})," radio button v\xe0 \u0111\u1ea3m b\u1ea3o ",(0,i.jsx)(n.code,{children:"JSON"})," l\xe0 format \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn. ",(0,i.jsx)(n.img,{alt:"postman-setup-header",src:t(2121).Z+"",width:"1052",height:"324"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Sau qu\xe1 tr\xecnh c\xe0i \u0111\u1eb7t \u0111\xf3, ch\u1ec9 c\u1ea7n copy/paste c\xe1c \u0111o\u1ea1n m\xe3 v\xed d\u1ee5 ",(0,i.jsx)(n.code,{children:"JSON object"})," d\u01b0\u1edbi \u0111\xe2y v\xe0o ",(0,i.jsx)(n.code,{children:"body"})," c\u1ee7a request tr\xean Postman, v\xe0 click ",(0,i.jsx)(n.code,{children:"send"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"javascript-setup",children:"C\xe0i \u0111\u1eb7t JavaScript"}),"\n",(0,i.jsxs)(n.p,{children:["All of the queries listed in this documentation page can be called using ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,i.jsx)(n.code,{children:"near-api-js"})}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0110\u1ec3 thi\u1ebft l\u1eadp v\xe0 c\xe0i \u0111\u1eb7t ",(0,i.jsx)(n.code,{children:"near-api-js"}),", vui l\xf2ng xem ",(0,i.jsx)(n.code,{children:"near-api-js"})," ",(0,i.jsx)(n.a,{href:"/tools/near-api-js/quick-reference",children:"t\xe0i li\u1ec7u tham kh\u1ea3o nhanh"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All JavaScript code snippets require a ",(0,i.jsx)(n.code,{children:"near"})," object. For examples of how to instantiate, ",(0,i.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#connect",children:(0,i.jsx)(n.strong,{children:"click here"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"httpie-setup",children:"C\xe0i \u0111\u1eb7t HTTPie"}),"\n",(0,i.jsxs)(n.p,{children:["N\u1ebfu b\u1ea1n \u01b0a th\xedch s\u1eed d\u1ee5ng command line interface, ch\xfang t\xf4i \u0111\xe3 cung c\u1ea5p c\xe1c v\xed d\u1ee5 RPC m\xe0 b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng v\u1edbi ",(0,i.jsx)(n.a,{href:"https://httpie.org/",children:"HTTPie"}),". Please note that params take either an object or array passed as a string."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=network_info params:='[]'\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"using-block_id-param",children:["S\u1eed d\u1ee5ng tham s\u1ed1 ",(0,i.jsx)(n.code,{children:"block_id"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"block_id"})," param can take either the block number (e.g. ",(0,i.jsx)(n.code,{children:"27912554"}),") or the block hash (e.g. ",(0,i.jsx)(n.code,{children:"'3Xz2wM9rigMXzA2c5vgCP8wTgFBaePucgUmVYPkMqhRL'"})," ) as an argument."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The block IDs of transactions shown in ",(0,i.jsx)("a",{href:"https://explorer.testnet.near.org",children:"NEAR Explorer"})," are not necessarily the block ID of the executed transaction. C\xe1c transaction c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t ho\u1eb7c hai block sau khi n\xf3 \u0111\u01b0\u1ee3c ghi l\u1ea1i, v\xe0 trong m\u1ed9t s\u1ed1 tr\u01b0\u1eddng h\u1ee3p c\xf3 th\u1ec3 di\u1ec5n ra tr\xean nhi\u1ec1u block. Do \u0111\xf3, \u0111i\u1ec1u quan tr\u1ecdng l\xe0 ph\u1ea3i ki\u1ec3m tra c\xe1c block ti\u1ebfp theo \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o t\u1ea5t c\u1ea3 c\xe1c k\u1ebft qu\u1ea3 li\xean quan t\u1edbi transaction \u0111\xe3 truy v\u1ea5n \u0111\u1ec1u \u0111\u01b0\u1ee3c t\xecm ra."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"using-finality-param",children:["S\u1eed d\u1ee5ng tham s\u1ed1 ",(0,i.jsx)(n.code,{children:"finality"})]}),"\n",(0,i.jsxs)(n.p,{children:["Tham s\u1ed1 ",(0,i.jsx)(n.code,{children:"finality"})," c\xf3 hai t\xf9y ch\u1ecdn: ",(0,i.jsx)(n.code,{children:"optimistic"})," v\xe0 ",(0,i.jsx)(n.code,{children:"final"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"optimistic"})," uses the latest block recorded on the node that responded to your query ",(0,i.jsx)(n.em,{children:"(< 1 second delay after the transaction is submitted)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"final"})," cho m\u1ed9t block \u0111\xe3 \u0111\u01b0\u1ee3c validate tr\xean \xedt nh\u1ea5t 66% c\xe1c node trong network ",(0,i.jsx)(n.em,{children:"(th\u01b0\u1eddng m\u1ea5t 2 block / kho\u1ea3ng 2 gi\xe2y delay)"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2121:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/postman-setup-body-93fd45785b0fee57caa83bc9ee772d45.png"},99916:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/postman-setup-headers-54e021bfa8af3fb5992db0f4281ae948.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);