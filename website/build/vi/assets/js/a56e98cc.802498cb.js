"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1322],{3115:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var c=e(85893),r=e(11151);const i={id:"minting-nft-frontend",title:"Mint NFT Front-end",sidebar_label:"Mint Front-end"},s="NFT Mint Front-end",o={id:"tutorials/nfts/minting-nft-frontend",title:"Mint NFT Front-end",description:'Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd t\xecm hi\u1ec3u c\xe1ch \u0111\u1ec3 t\u1ea1o ra m\u1ed9t NFT front-end \u0111\u01a1n gi\u1ea3n v\xe0 mint "Go Team" NFT tr\xean NEAR blockchain ngay t\u1eeb tr\xecnh duy\u1ec7t web c\u1ee7a m\xecnh.',source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/simple-nft-minting-example.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nft-frontend",permalink:"/vi/tutorials/nfts/minting-nft-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/simple-nft-minting-example.md",tags:[],version:"current",frontMatter:{id:"minting-nft-frontend",title:"Mint NFT Front-end",sidebar_label:"Mint Front-end"},sidebar:"contracts",previous:{title:"Mint NFT",permalink:"/vi/tutorials/nfts/minting-nfts"},next:{title:"Minecraft NFT",permalink:"/vi/tutorials/nfts/minecraft-nfts"}},a={},l=[{value:"T\u1ed5ng quan v\u1ec1 \u1ee9ng d\u1ee5ng",id:"t\u1ed5ng-quan-v\u1ec1-\u1ee9ng-d\u1ee5ng",level:2},{value:"Smart Contract code",id:"smart-contract-code",level:2},{value:"Front-end",id:"front-end",level:2},{value:"B\u1eaft \u0111\u1ea7u",id:"b\u1eaft-\u0111\u1ea7u",level:3},{value:"N\xfat mint",id:"n\xfat-mint",level:3},{value:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng",id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",level:2}];function d(n){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"nft-mint-front-end",children:"NFT Mint Front-end"}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:'Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd t\xecm hi\u1ec3u c\xe1ch \u0111\u1ec3 t\u1ea1o ra m\u1ed9t NFT front-end \u0111\u01a1n gi\u1ea3n v\xe0 mint "Go Team" NFT tr\xean NEAR blockchain ngay t\u1eeb tr\xecnh duy\u1ec7t web c\u1ee7a m\xecnh.'}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"t\u1ed5ng-quan-v\u1ec1-\u1ee9ng-d\u1ee5ng",children:"T\u1ed5ng quan v\u1ec1 \u1ee9ng d\u1ee5ng"}),"\n",(0,c.jsxs)(t.p,{children:["\u1ee8ng d\u1ee5ng n\xe0y kh\xe1 \u0111\u01a1n gi\u1ea3n: user \u0111\u0103ng nh\u1eadp v\xe0 nh\u1ea5n v\xe0o n\xfat ",(0,c.jsx)("kbd",{children:"Mint NFT"}),'. Sau khi user nh\u1ea5n v\xe0o n\xfat mint, m\u1ed9t "Go Team" NFT s\u1ebd \u0111\u01b0\u1ee3c mint v\xe0 g\u1eedi \u0111\u1ebfn NEAR Wallet c\u1ee7a h\u1ecd.']}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Front-end",src:e(6610).Z+"",width:"2142",height:"1026"})}),"\n",(0,c.jsx)(t.h2,{id:"smart-contract-code",children:"Smart Contract code"}),"\n",(0,c.jsxs)(t.p,{children:["The code for the NFT smart contract can be found in the ",(0,c.jsx)(t.a,{href:"/docs/tutorials/contracts/nfts/introduction",children:"Zero to Hero NFT tutorial"}),"'s  ",(0,c.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/tree/main/nft-contract/src",children:"GitHub repository"}),", under the ",(0,c.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,c.jsx)(t.p,{children:"C\xe1c contract method \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong \u1ee9ng d\u1ee5ng n\xe0y nh\u01b0 sau:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"nft_mint"}),": function \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 mint c\xe1c token."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"check_token"}),": function t\xf9y ch\u1ec9nh \u0111\u01b0\u1ee3c t\u1ea1o \u0111\u1ec3 ki\u1ec3m tra s\u1ef1 t\u1ed3n t\u1ea1i c\u1ee7a m\u1ed9t token. \u0110i\u1ec1u n\xe0y gi\xfap \u0111\u1ea3m b\u1ea3o m\u1ed9t token cho m\u1ed7i user."]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"front-end",children:"Front-end"}),"\n",(0,c.jsxs)(t.p,{children:["Front-end c\u1ee7a contract \u0111\u01b0\u1ee3c tri\u1ec3n khai b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,c.jsx)(t.code,{children:"create-near-app"}),". ",(0,c.jsx)(t.a,{href:"https://react-bootstrap.github.io/",children:"React Bootstrap"})," \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 style cho \u1ee9ng d\u1ee5ng n\xe0y."]}),"\n",(0,c.jsx)(t.p,{children:"\u0110\u1ec3 kh\u1edfi \u0111\u1ed9ng React front-end, ch\u1ea1y l\u1ec7nh sau trong terminal:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-sh",children:"npx create-near-app --frontend react --contract rust\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Then, simply import the contract files from the ",(0,c.jsx)(t.code,{children:"main"})," branch, and you'll have the needed structure to run the application."]}),"\n",(0,c.jsx)(t.h3,{id:"b\u1eaft-\u0111\u1ea7u",children:"B\u1eaft \u0111\u1ea7u"}),"\n",(0,c.jsx)(t.p,{children:"Khi mount c\xe1c component c\u1ee7a \u1ee9ng d\u1ee5ng, \u1ee9ng d\u1ee5ng ki\u1ec3m tra s\u1ef1 t\u1ed3n t\u1ea1i c\u1ee7a m\u1ed9t non-fungible token."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/App.js#L24-L46\n"})}),"\n",(0,c.jsx)(t.p,{children:"N\u1ebfu kh\xf4ng c\xf3 NFT n\xe0o tr\u01b0\u1edbc \u0111\xf3 \u0111\u01b0\u1ee3c mint, n\xfat mint s\u1ebd s\u1eb5n s\xe0ng \u0111\u1ec3 s\u1eed d\u1ee5ng."}),"\n",(0,c.jsx)(t.h3,{id:"n\xfat-mint",children:"N\xfat mint"}),"\n",(0,c.jsx)(t.p,{children:"\u0110\xe2y l\xe0 function \u0111\u1eb1ng sau n\xfat mint. Meta data \u0111\xe3 \u0111\u01b0\u1ee3c \u0111i\u1ec1n s\u1eb5n cho user:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"token_id"})," \u0111\u01b0\u1ee3c set b\u1edfi account id c\u1ee7a user,"]}),"\n",(0,c.jsxs)(t.li,{children:["v\xe0 ",(0,c.jsx)(t.code,{children:"media"})," link \u0111\u01b0\u1ee3c hard-code th\xe0nh ",(0,c.jsx)(t.code,{children:"goteam-gif.gif"})," l\u01b0u tr\u1eef tr\xean IPFS."]}),"\n"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/Components/MintingTool.js#L7-L23\n"})}),"\n",(0,c.jsxs)(t.p,{children:["After hitting the ",(0,c.jsx)("kbd",{children:"Mint NFT"})," button the user will be able to check out the newly minted NFT at ",(0,c.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"wallet.testnet.near.org"}),", under the Wallet's ",(0,c.jsx)(t.code,{children:"Collectibles"})," tab."]}),"\n",(0,c.jsx)(t.h2,{id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",children:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng"}),"\n",(0,c.jsxs)(t.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm repository c\u1ee7a \u1ee9ng d\u1ee5ng ho\xe0n ch\u1ec9nh ",(0,c.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"tr\xean GitHub"})," \u0111\u1ec3 clone v\xe0 ch\u1ea1y. Trong th\u01b0 m\u1ee5c c\u1ea5u h\xecnh b\u1ea1n c\xf3 th\u1ec3 nh\xecn th\u1ea5y r\u1eb1ng smart contract n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c deploy t\u1edbi ",(0,c.jsx)(t.code,{children:"nft-frontend-simple-mint.blockhead.testnet"}),":"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/config.js#L1-L2\n"})}),"\n",(0,c.jsxs)(t.p,{children:["B\u1ea1n c\u0169ng c\xf3 th\u1ec3 xem ",(0,c.jsx)(t.a,{href:"https://explorer.testnet.near.org/accounts/nft-frontend-simple-mint.blockhead.testnet",children:"explorer link t\u1ea1i \u0111\xe2y"})," \u0111\u1ec3 xem c\xf3 bao nhi\xeau c\xe1 nh\xe2n \u0111ang mint c\xe1c NFT ",(0,c.jsx)(t.em,{children:"Go Team"})," c\u1ee7a ri\xeang h\u1ecd. ",(0,c.jsx)(t.em,{children:(0,c.jsx)(t.strong,{children:"Ch\xfac b\u1ea1n mint th\xe0nh c\xf4ng!"})})]}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsxs)(t.p,{children:["Clone and ch\u1ea1y v\xed d\u1ee5 n\xe0y t\u1eeb ",(0,c.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"https://github.com/near-examples/nft-tutorial-frontend"})]})})]})}function h(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},6610:(n,t,e)=>{e.d(t,{Z:()=>c});const c=e.p+"assets/images/nft-mint-frontend-8bc5c90aa325d1408f13519e44664aee.png"},11151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>s});var c=e(67294);const r={},i=c.createContext(r);function s(n){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),c.createElement(i.Provider,{value:t},n.children)}}}]);