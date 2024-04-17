"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5715],{5973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(85893),o=t(11151);const i={id:"bos-components",title:"Historical data",sidebar_label:"Handling Historical data"},r=void 0,s={id:"build/near-components/anatomy/bos-components",title:"Historical data",description:"Building components that handle historical blockchain data require dedicated solutions that manage the data and reduce the latency of requests, as it's not possible to scan the whole blockchain when a user makes a request.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/3.near-components/anatomy/bos-components.md",sourceDirName:"2.build/3.near-components/anatomy",slug:"/build/near-components/anatomy/bos-components",permalink:"/ko/build/near-components/anatomy/bos-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/3.near-components/anatomy/bos-components.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713353002e3,frontMatter:{id:"bos-components",title:"Historical data",sidebar_label:"Handling Historical data"},sidebar:"build",previous:{title:"Social Notifications",permalink:"/ko/build/near-components/anatomy/notifications"},next:{title:"Using components on WebApps",permalink:"/ko/build/near-components/bos-gateway"}},d={},c=[{value:"Tutorials",id:"tutorials",level:2},{value:"GraphQL queries",id:"graphql-queries",level:2},{value:"Generate a NEAR component using Playground",id:"generate-a-near-component-using-playground",level:2},{value:"Component Examples",id:"component-examples",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Building components that handle historical blockchain data require dedicated solutions that manage the data and reduce the latency of requests, as it's not possible to scan the whole blockchain when a user makes a request."}),"\n",(0,a.jsxs)(n.p,{children:["A simple solution for developers building on NEAR is using ",(0,a.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"QueryAPI"}),", a fully managed solution to build indexer functions, extract on-chain data, store it in a database, and be able to query it using GraphQL endpoints."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Learn more about QueryAPI in this ",(0,a.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"QueryAPI Overview"})," article."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,a.jsx)(n.p,{children:"For a technical implementation deep-dive, check these QueryAPI tutorials:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tutorials/near-components/indexer-tutorials/posts-indexer",children:"Posts Indexer tutorial"}),": this indexer creates a new row in a pre-defined database for every new Social post found on the blockchain."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tutorials/near-components/indexer-tutorials/hype-indexer",children:"Hype Indexer tutorial"}),": this indexer creates a new row in a pre-defined database for every new Social post or comment found on the blockchain that contains either ",(0,a.jsx)(n.code,{children:"PEPE"})," or ",(0,a.jsx)(n.code,{children:"DOGE"})," in the contents."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/ko/tutorials/near-components/indexer-tutorials/feed-indexer",children:"Social Feed Indexer tutorial"}),": this indexer keeps track of new posts, comments, and likes on Social, so a social feed can be rendered quickly."]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"graphql-queries",children:"GraphQL queries"}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#mutations-in-graphql",children:"QueryAPI's GraphiQL"})," tab, you can access the GraphiQL Explorer that provides a user friendly GraphQL playground, where you can view and create queries and mutations based on the DB schema that you defined for the indexer."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"QueryAPI Indexer Dashboard",src:t(47455).Z+"",width:"2100",height:"940"})}),"\n",(0,a.jsx)(n.p,{children:"You can easily set some fields and select the returning data that you want, and the tool will build a query on the mutation panel on the right.\nThen you can copy the resulting query, either in your JavaScript code so that you pass actual data manually, or you pass in the mutation data object as a second parameter."}),"\n",(0,a.jsxs)(n.p,{children:["For example, if you go and add a new mutation, click ",(0,a.jsx)("kbd",{children:"+"}),", then you can do a bunch of actions here, such as creating, deleting, or inserting posts into your table."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Playground",src:t(54356).Z+"",width:"2560",height:"1374"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to test your mutation, using ",(0,a.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#local-debug-mode",children:"Debug Mode"})," you can add a specific block to the list, and then play it to see how it works.\nBased on the indexer logic you defined, you'll get a call to the GraphQL mutation with the object and data passed into it."]}),"\n",(0,a.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tip:"})," watch the video on how to ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=781s",children:"create mutations in GraphQL"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"generate-a-near-component-using-playground",children:"Generate a NEAR component using Playground"}),"\n",(0,a.jsx)(n.p,{children:"Creating a NEAR component from a GraphQL query is simple when using QueryAPI's GraphQL Playground. Just follow these steps:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"go to the GraphiQL tab"}),"\n",(0,a.jsx)(n.li,{children:"select the query that you want to use"}),"\n",(0,a.jsxs)(n.li,{children:["click on the ",(0,a.jsx)("kbd",{children:"Show GraphiQL Code Exporter"})," button"]}),"\n",(0,a.jsx)(n.li,{children:"get some default code here, copy it,"}),"\n",(0,a.jsx)(n.li,{children:"go to the NEAR sandbox, paste it."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This will set up some boilerplate code to execute the GraphQL query, add the query that you had in your playground and then call that query, extract the data and render it using the render data function."}),"\n",(0,a.jsxs)(n.p,{children:["Once you have the NEAR component code, you can test it out by going to ",(0,a.jsx)(n.a,{href:"https://near.org/sandbox",children:"the sandbox"}),", pasting the generated code, and then selecting ",(0,a.jsx)("kbd",{children:"Component Preview"}),".\nNext, you can create a nice UI over this boilerplate code, and publish your new NEAR component."]}),"\n",(0,a.jsx)(n.h4,{id:"component-examples",children:"Component Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=roshaan.near/widget/user-activity-feed&tab=source",children:"Activity Feed widget"})," running on ",(0,a.jsx)(n.a,{href:"https://near.org",children:"near.org"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},54356:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/QAPIScreen-03cb0756572d56815b027f3ed320ab00.gif"},47455:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/QAPIgraphiql-18e6ea0aaae4a46fc6a84c7020f54397.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);