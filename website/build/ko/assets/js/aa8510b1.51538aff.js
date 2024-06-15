"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6266],{77198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const o={id:"blog",title:"Onchain Blog"},r="Blogchain",i={id:"tutorials/templates/blog",title:"Onchain Blog",description:"Demo",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/templates/blog.md",sourceDirName:"3.tutorials/templates",slug:"/tutorials/templates/blog",permalink:"/ko/tutorials/templates/blog",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/templates/blog.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"blog",title:"Onchain Blog"},sidebar:"tutorials",previous:{title:"Marketplace Frontend",permalink:"/ko/tutorials/templates/marketplace"},next:{title:"BOS Loader",permalink:"/ko/tutorials/near-components/bos-loader"}},c={},l=[{value:"Project Walkthrough",id:"project-walkthrough",level:2},{value:"Run the project",id:"run-the-project",level:2},{value:"Create a Blog (deploy contract)",id:"create-a-blog-deploy-contract",level:2},{value:"Step 1: check if the contract (blog) name already exists",id:"step-1-check-if-the-contract-blog-name-already-exists",level:3},{value:"Step 2: if contract name doesn&#39;t exist execute the deploy contract action with the instantiated wallet",id:"step-2-if-contract-name-doesnt-exist-execute-the-deploy-contract-action-with-the-instantiated-wallet",level:3},{value:"Create a Blog Post (mint an NFT)",id:"create-a-blog-post-mint-an-nft",level:2},{value:"Step 1: call storage method to upload file inserted by the user to arweave",id:"step-1-call-storage-method-to-upload-file-inserted-by-the-user-to-arweave",level:3},{value:"Step 2: mint the nft in the contract (blog)",id:"step-2-mint-the-nft-in-the-contract-blog",level:3},{value:"Get Data",id:"get-data",level:2},{value:"Get blog posts (nfts) from a blog (smart contract)",id:"get-blog-posts-nfts-from-a-blog-smart-contract",level:3},{value:"Get user blog posts (nfts)",id:"get-user-blog-posts-nfts",level:3},{value:"Get user blogs (smart contracts)",id:"get-user-blogs-smart-contracts",level:3},{value:"Get latest blogs (smart contracts)",id:"get-latest-blogs-smart-contracts",level:3},{value:"Get latest blog posts (nfts)",id:"get-latest-blog-posts-nfts",level:3},{value:"Get blog post (nft) data",id:"get-blog-post-nft-data",level:3},{value:"Extending",id:"extending",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"blogchain",children:"Blogchain"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blogchain.mintbase.xyz/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen",alt:"Demo"})}),"\n",(0,s.jsx)(t.a,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Ftemplates%2Ftree%2Fmain%2Fblogchain",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Deploy-on%20Vercel-blue",alt:"Deploy"})})]}),"\n",(0,s.jsx)(t.p,{children:"Blogchain makes your content unstoppable. Transform your blogs into smart contracts and posts into NFTs."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/oAVyr9o.png",alt:"img"})}),"\n",(0,s.jsx)(t.admonition,{title:"Mintbase Templates",type:"tip",children:(0,s.jsxs)(t.p,{children:["This is part of the ",(0,s.jsx)(t.a,{href:"https://templates.mintbase.xyz/",children:"Mintbase Templates"}),", a collection of templates that you can use to scaffold your own project"]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"project-walkthrough",children:"Project Walkthrough"}),"\n",(0,s.jsx)(t.p,{children:"Within the framework of blogchain, every blog manifests as an nft contract deployed from the Mintbase contract factory, while each individual blog post is uniquely represented as a non-fungible token (NFT)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"NOTE: As a standard on Mintbase as we use the latest versions of Next.js we recommend using pnpm, but the package manager is up to your personal choice."})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"run-the-project",children:"Run the project"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# install\npnpm i\n#run project\npnpm run dev\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"create-a-blog-deploy-contract",children:"Create a Blog (deploy contract)"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-check-if-the-contract-blog-name-already-exists",children:"Step 1: check if the contract (blog) name already exists"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/data/api/checkstorename",children:"@mintbase-js/data"})," checkStoreName method we can check if the store already exists."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const { data: checkStore } = await checkStoreName(\n  data.name,\n  NEAR_NETWORKS.TESTNET\n);\n\nif (checkStore?.nft_contracts.length === 0) {\n  (...)\n}\n"})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"step-2-if-contract-name-doesnt-exist-execute-the-deploy-contract-action-with-the-instantiated-wallet",children:"Step 2: if contract name doesn't exist execute the deploy contract action with the instantiated wallet"}),"\n",(0,s.jsxs)(t.p,{children:["Create deploy contract args using ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/deploycontract",children:"mintbase-js/sdk"})," deployContract method. This will deploy an NFT contract from the ",(0,s.jsx)(t.a,{href:"https://github.com/Mintbase/mb-contracts/tree/main/mb-factory-v1",children:"mintbase contract factory"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'const wallet = await selector.wallet();\n\nconst deployArgs = deployContract({\n  name: data.name,\n  ownerId: activeAccountId,\n  factoryContractId: MINTBASE_CONTRACTS.testnet,\n  metadata: {\n    symbol: "",\n  },\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We can then execute the deploy contract by passing in the wallet. If you wan't to learn about wallet connection check out the ",(0,s.jsx)(t.a,{href:"https://templates.mintbase.xyz/templates/starter-next",children:"wallet starter template"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"  await execute({ wallet }, deployArgs);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"create-a-blog-post-mint-an-nft",children:"Create a Blog Post (mint an NFT)"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-call-storage-method-to-upload-file-inserted-by-the-user-to-arweave",children:"Step 1: call storage method to upload file inserted by the user to arweave"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/storage#uploadreference-referenceobject-referenceobject-arweaveresponse",children:"@mintbase-js/storage"})," uploadReference method we upload the nft image to arweave."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const metadata = {\n  title: data.title,\n  media: data.media,\n};\nconst referenceJson = await uploadReference(metadata);\nconst reference = referenceJson.id;\n"})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"step-2-mint-the-nft-in-the-contract-blog",children:"Step 2: mint the nft in the contract (blog)"}),"\n",(0,s.jsxs)(t.p,{children:["Create mint args using ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/mint",children:"mintbase-js/sdk"})," mint method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'const wallet = await selector.wallet();\n\nconst mintCall = mint({\n  noMedia: true,\n  metadata: {\n    reference: reference,\n    title: data.title,\n    description: postContent,\n    extra: "blogpost",\n  },\n  contractAddress: data.contract,\n  ownerId: activeAccountId,\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:"We can then execute the mint nft method"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"  await execute({ wallet }, mintCall);\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"We populate the 'extra' field with the value 'blogpost' to subsequently filter the displayed NFTs and blogs in blogchain, ensuring that only blogs are included."})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"get-data",children:"Get Data"}),"\n",(0,s.jsx)(t.h3,{id:"get-blog-posts-nfts-from-a-blog-smart-contract",children:"Get blog posts (nfts) from a blog (smart contract)"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/dev/mintbase-graph",children:"Mintbase GraphQL Indexer"})," we can fetch the nfts from a specific smart contract - to filter by blog post we use 'blogpost' as an extra field as explained in the previous step."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'export const GET_BLOG_POSTS =\n`\nquery GET_BLOG_POSTS($contractId: String!) {\n    mb_views_nft_tokens(\n      where: {extra: {_eq: "blogpost"}, _and: {nft_contract_id: {_eq: $contractId}}}\n    ) {\n      metadata_id\n      title\n      description\n      media\n      minted_timestamp\n    }\n  }\n  `;\n'})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"get-user-blog-posts-nfts",children:"Get user blog posts (nfts)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'export const GET_USER_POSTS =\n`\nquery GET_USER_POSTS($accountId: String!) {\n    mb_views_nft_tokens(\n      where: {extra: {_eq: "blogpost"}, _and: {nft_contract_owner_id: {_eq: $accountId}}}\n    ) {\n      metadata_id\n      title\n      description\n      media\n      minted_timestamp\n    }\n  }\n  `;\n'})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"get-user-blogs-smart-contracts",children:"Get user blogs (smart contracts)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export const GET_USER_BLOGS =\n`\nquery GET_USER_BLOGS($accountId: String!) {\n    nft_contracts(where: {owner_id: {_eq: $accountId}}) {\n      id\n    }\n  }\n  `;\n"})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"get-latest-blogs-smart-contracts",children:"Get latest blogs (smart contracts)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'export const GET_LATEST_UPDATED_BLOGS =\n`\nquery GET_LATEST_UPDATED_BLOGS {\n  mb_views_nft_metadata(\n    where: {extra: {_eq: "blogpost"}}\n    distinct_on: [nft_contract_id, nft_contract_created_at]\n    limit: 6\n    order_by: [{nft_contract_created_at: desc}, {nft_contract_id: desc}]\n  ) {\n    nft_contract_id\n    nft_contract_owner_id\n  }\n  }\n  `;\n'})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"get-latest-blog-posts-nfts",children:"Get latest blog posts (nfts)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'export const GET_LATEST_POSTS =\n`\nquery GET_LATEST_POSTS {\n    mb_views_nft_tokens(\n      where: {extra: {_eq: "blogpost"}}\n      limit: 10\n      order_by: {minted_timestamp: desc}\n    ) {\n    metadata_id\n    title\n    description\n    media\n    minted_timestamp\n    minter\n    nft_contract_id\n    }\n  }`;\n'})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(t.h3,{id:"get-blog-post-nft-data",children:"Get blog post (nft) data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export const GET_POST_METADATA =\n`\nquery GET_POST_METADATA($metadataId: String!) {\n    mb_views_nft_tokens(where: {metadata_id: {_eq: $metadataId}}) {\n      metadata_id\n      title\n      description\n      media\n      minted_timestamp\n      minter\n      nft_contract_id\n    }\n  }`;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Presently, this template exclusively functions within the testnet environment. To transition to a different network the configuration must be changed in ",(0,s.jsx)(t.code,{children:"<MintbaseWalletContextProvider>"})," and every 'testnet' instance."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"extending",children:"Extending"}),"\n",(0,s.jsx)(t.p,{children:"This project is setup using Next.js + @mintbase/js\nYou can use this project as a reference to build your own, and use or remove any library you think it would suit your needs."}),"\n",(0,s.jsx)(t.admonition,{title:"Get in touch",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Support: ",(0,s.jsx)(t.a,{href:"https://t.me/mintdev",children:"Join the Telegram"})]}),"\n",(0,s.jsxs)(t.li,{children:["Twitter: ",(0,s.jsx)(t.a,{href:"https://twitter.com/mintbase",children:"@mintbase"})]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);