"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1764],{2996:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(85893),s=i(11151),d=i(2154);const r={id:"social",title:"Social Interactions"},c=void 0,l={id:"build/near-components/anatomy/social",title:"Social Interactions",description:"NEAR components can natively communicate with the SocialDB smart contract (currently deployed at social.near).",source:"@site/../docs/2.build/3.near-components/anatomy/social.md",sourceDirName:"2.build/3.near-components/anatomy",slug:"/build/near-components/anatomy/social",permalink:"/build/near-components/anatomy/social",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/3.near-components/anatomy/social.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frolov",lastUpdatedAt:1719420487e3,frontMatter:{id:"social",title:"Social Interactions"},sidebar:"build",previous:{title:"Interacting with Near",permalink:"/build/near-components/anatomy/near"},next:{title:"Social Notifications",permalink:"/build/near-components/anatomy/notifications"}},o={},a=[{value:"Social.get",id:"socialget",level:2},{value:"Social.getr",id:"socialgetr",level:2},{value:"Social.keys",id:"socialkeys",level:2},{value:"Social.set",id:"socialset",level:2},{value:"Social.index",id:"socialindex",level:2},{value:"Indexing an Action",id:"indexing-an-action",level:3},{value:"Indexing a Post",id:"indexing-a-post",level:4},{value:"Indexing a Like",id:"indexing-a-like",level:4},{value:"Retrieving Indexed Actions",id:"retrieving-indexed-actions",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["NEAR components can natively communicate with the ",(0,t.jsx)(n.a,{href:"https://github.com/NearSocial/social-db",children:"SocialDB smart contract"})," (currently deployed at ",(0,t.jsx)(n.a,{href:"https://nearblocks.io/address/social.near",children:"social.near"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SocialDB"})," is a contract that stores ",(0,t.jsx)(n.code,{children:"key-value"})," pairs, and is used mostly to store social-related data, such as ",(0,t.jsx)(n.code,{children:"posts"}),", ",(0,t.jsx)(n.code,{children:"likes"}),", or ",(0,t.jsx)(n.code,{children:"profiles"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Besides user data, the ",(0,t.jsx)(n.code,{children:"SocialDB"})," contract stores ",(0,t.jsx)(n.strong,{children:"all existing NEAR components"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socialget",children:"Social.get"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Social.get"})," queries a key from the SocialDB contract and returns the data. The key being queried can contain wildcards."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alice.near/profile/**"}),"  will match the entire profile data of account alice.near."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alice.near/profile/*"})," will match all the fields of the profile, but not the nested objects."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"alice.near/profile/name"})," will match only the name field of the profile."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"*/widget/*"})," will match all the widgets of all the accounts."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(d.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Ask for the `profile` key of the influencer.testnet account\nconst profile = Social.get("influencer.testnet/profile/*");\n\n// Ask a component from the influencer.testnet account\nconst widget = Social.get("influencer.testnet/widget/Greeter");\n\nif(profile === null || widget === null) return "Loading ..."\n\nreturn (\n  <div>\n    <p>Profile: {JSON.stringify(profile)}</p>\n    <p>Widgets: {JSON.stringify(widget)} </p>\n  </div>\n);\n'})})}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"patterns"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string / string[]"}),(0,t.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"finality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"final"'})," / number"]}),(0,t.jsx)(n.td,{children:"the block height or finality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["the ",(0,t.jsx)(n.code,{children:"options"})," object."]})]})]})]}),(0,t.jsx)(n.admonition,{title:"options object",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subscribe"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_deleted"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,t.jsx)(n.code,{children:"null"}),"). Default is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]})}),(0,t.jsxs)(n.p,{children:["The block height or finality can be used to get the data at a specific block height or finality.\nIf the block height or finality is not specified, the data will be fetched at the ",(0,t.jsx)(n.code,{children:"optimistic"})," finality (the latest block height)."]}),(0,t.jsxs)(n.p,{children:["For block height and finality ",(0,t.jsx)(n.code,{children:"final"}),", instead of calling the NEAR RPC directly, the VM uses the Social API Server to fetch the data."]}),(0,t.jsx)(n.p,{children:"Social API server indexes the data for SocialDB and allows to fetch the data at any block height with additional options."}),(0,t.jsx)(n.p,{children:"It also allows returning more data than an RPC call because it's not restricted by the gas limit.\nIn general, the API server also serves data faster than the NEAR RPC, because it doesn't execute the contract code in a virtual machine."})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["While the data is fetching, ",(0,t.jsx)(n.code,{children:"Social.get"})," returns ",(0,t.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socialgetr",children:"Social.getr"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Social.getr"})," is just a wrapper helper for ",(0,t.jsx)(n.code,{children:"Social.get"}),", it appends ",(0,t.jsx)(n.code,{children:"**"})," to each of the path pattern."]}),"\n",(0,t.jsx)(d.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const profile = Social.getr("influencer.testnet/profile");\n\nreturn (\n  <div>\n    <p>Profile: {JSON.stringify(profile)}</p>\n  </div>\n);\n'})})}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"patterns"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string / string[]"}),(0,t.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"finality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"final"'})," / number"]}),(0,t.jsx)(n.td,{children:"the block height or finality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["the ",(0,t.jsx)(n.code,{children:"options"})," object."]})]})]})]}),(0,t.jsx)(n.admonition,{title:"options object",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subscribe"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_deleted"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,t.jsx)(n.code,{children:"null"}),"). Default is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socialkeys",children:"Social.keys"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"keys"})," method allows to get the list of keys that match a pattern. It's useful for querying the data without reading values."]}),"\n",(0,t.jsxs)(n.p,{children:["It also has an additional ",(0,t.jsx)(n.code,{children:"options"})," field that can be used to specify the return type and whether to return deleted keys."]}),"\n",(0,t.jsx)(d.W,{height:"80",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const data = Social.keys(`influencer.testnet/profile/*`, "final");\n\nreturn JSON.stringify(data)\n'})})}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Social.keys"})," takes up to 3 arguments:"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"patterns"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string / string[]"}),(0,t.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"finality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"final"'})," / number"]}),(0,t.jsx)(n.td,{children:"the block height or finality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["the ",(0,t.jsx)(n.code,{children:"options"})," object."]})]})]})]}),(0,t.jsx)(n.admonition,{title:"options object",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subscribe"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_type"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": either ",(0,t.jsx)(n.code,{children:'"History"'}),", ",(0,t.jsx)(n.code,{children:'"True"'}),", or ",(0,t.jsx)(n.code,{children:'"BlockHeight"'}),". If not specified, it will return the ",(0,t.jsx)(n.code,{children:'"True"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_deleted"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,t.jsx)(n.code,{children:"null"}),"). Default is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"values_only"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": whether to return only values (don't include objects). Default is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The Social API server supports custom options ",(0,t.jsx)(n.code,{children:'return_type: "History"'}),". For each matching key, it will return an array containing all the block heights when the value was changed in ascending order.\nIt can be used for building a feed, where the values are overwritten."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socialset",children:"Social.set"}),"\n",(0,t.jsxs)(n.p,{children:["Takes a ",(0,t.jsx)(n.code,{children:"data"})," object and commits it to SocialDB. The data object can contain multiple keys, and each key can contain multiple values."]}),"\n",(0,t.jsxs)(n.p,{children:["Importantly, a user can only commit to ",(0,t.jsx)(n.strong,{children:"their own"})," space in ",(0,t.jsx)(n.code,{children:"SocialDB"})," (e.g. ",(0,t.jsx)(n.code,{children:"alice.near"})," can only write in ",(0,t.jsx)(n.code,{children:"alice.near/**"}),"), except if ",(0,t.jsx)(n.a,{href:"https://github.com/NearSocial/social-db#permissions",children:(0,t.jsx)(n.strong,{children:"given explicit permission"})})," by the owner of another space."]}),"\n",(0,t.jsx)(n.p,{children:"Each time a user wants to commit data, they will be prompted to confirm the action. On confirming, the user can choose to not be asked again in the future."}),"\n",(0,t.jsx)(d.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const onClick = () => {\n  Social.set({\n    post: {\n      main: JSON.stringify({\n        type: "md",\n        text: "I\'ve read the docs!"\n      })\n    }\n  })\n}\n\nif(!context.accountId) return "Please login...";\n\nreturn <>\n  <p> Save a message showing some love to the NEAR Docs </p>\n  <button onClick={onClick}> Save the Message </button>\n</>\n'})})}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Social.set"})," arguments:"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"data"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["the data object to be committed. Similar to ",(0,t.jsx)(n.code,{children:"CommitButton"}),", it shouldn't start with an account ID."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"optional object."})]})]})]}),(0,t.jsx)(n.admonition,{title:"options object",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"force"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": whether to overwrite the data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCommit"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": function to trigger on successful commit. Will pass the\ndata that was written (including ",(0,t.jsx)(n.code,{children:"accountID"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onCancel"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": function to trigger if the user cancels the commit."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["By default ",(0,t.jsx)(n.code,{children:"Social.set"})," will omit saving data that is already saved (e.g. if the user already liked a post, it won't save the like again). To force saving the data, pass the ",(0,t.jsx)(n.code,{children:"force"})," option."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socialindex",children:"Social.index"}),"\n",(0,t.jsx)(n.p,{children:"NEAR Social readily provides an indexer - a service that listen to actions in SocialDB, and caches them so they can be retrieved without needing to interact with the contract."}),"\n",(0,t.jsx)(n.p,{children:"The indexer is very useful, for example, to rapidly store and retrieve information on all comments for a post. Without the indexer, we would need to check all entries in the contract to see who answered, surely running out of GAS before completion."}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"indexing-an-action",children:"Indexing an Action"}),"\n",(0,t.jsxs)(n.p,{children:["To index an action we need to add the ",(0,t.jsx)(n.code,{children:"index"})," key to the data being saved, within the ",(0,t.jsx)(n.code,{children:"index"})," key we will save the ",(0,t.jsx)(n.code,{children:"action"})," being indexed, alongside a ",(0,t.jsx)(n.code,{children:"key"})," and a ",(0,t.jsx)(n.code,{children:"value"})," that identifies this specific instance."]}),"\n",(0,t.jsx)(d.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// General form of an indexed action\n// {\n//   index: {\n//     actionName: JSON.stringify({ key, value })\n//   }\n// }\n\nconst onClick = () => {\n  Social.set({\n    index: {\n      readDocs: JSON.stringify({key: "docs", value: "like"})\n    } ,\n  })\n}\n\nreturn <>\n  {context.accountId ?\n  <>\n    <p> Index an action showing some love to the NEAR Docs </p>\n    <button onClick={onClick}> Index Action </button>\n  </> :\n  <p> Login to index an action </p>}\n</>\n'})})}),"\n",(0,t.jsxs)(n.p,{children:["In the example above we index a ",(0,t.jsx)(n.code,{children:"docs"})," action. In this case the ",(0,t.jsx)(n.code,{children:"action"})," is ",(0,t.jsx)(n.code,{children:"docs"}),", and the ",(0,t.jsx)(n.code,{children:"key"})," that identifies it is ",(0,t.jsx)(n.code,{children:'"read"'}),"."]}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Standards "}),(0,t.jsx)(n.h4,{id:"indexing-a-post",children:"Indexing a Post"}),(0,t.jsxs)(n.p,{children:["To index a post, the standard is to save the action ",(0,t.jsx)(n.code,{children:"post"}),", with ",(0,t.jsx)(n.code,{children:'{key: "main", value: {type: "md"}'}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  index: {\n    post: JSON.stringify({\n      key: "main",\n      value: {type: "md"}\n    })\n  }\n}\n'})}),(0,t.jsx)(n.h4,{id:"indexing-a-like",children:"Indexing a Like"}),(0,t.jsxs)(n.p,{children:["To index a like, the standard is to save the action ",(0,t.jsx)(n.code,{children:"like"}),", with ",(0,t.jsx)(n.code,{children:'{key: object-representing-the-post, value: {type: "like" }}'})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  index: {\n    like: JSON.stringify({\n      key: {type: 'social', path: 'influencer.testnet/post/main', blockHeight: 152959480 },\n      value: {type: \"like\"}})\n  }\n}\n"})})]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"retrieving-indexed-actions",children:"Retrieving Indexed Actions"}),"\n",(0,t.jsxs)(n.p,{children:["To retrieve indexed actions we use the ",(0,t.jsx)(n.code,{children:"Social.index"})," method. It takes the ",(0,t.jsx)(n.code,{children:"action"})," and the ",(0,t.jsx)(n.code,{children:"key"})," as arguments, and returns an array of all the indexed values alongside the ",(0,t.jsx)(n.code,{children:"blockHeight"})," in which they were indexed, and which user made the action."]}),"\n",(0,t.jsx)(d.W,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const readDocs = Social.index("readDocs", "docs")\n\nreturn <>\n  <p> Number of indexed "readDocs" actions with key "docs": {readDocs.length} </p>\n\n  <b>Indexed actions</b>\n  {JSON.stringify(readDocs)}\n</>\n'})})}),"\n",(0,t.jsxs)(i,{markdown:"1",children:[(0,t.jsx)("summary",{children:" Parameters "}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Social.index"})," arguments:"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"param"}),(0,t.jsx)(n.th,{children:"required"}),(0,t.jsx)(n.th,{children:"type"}),(0,t.jsx)(n.th,{children:"description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"action"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["is the ",(0,t.jsx)(n.code,{children:"index_type"})," from the standard, e.g. in the path ",(0,t.jsx)(n.code,{children:"index/like"})," the action is ",(0,t.jsx)(n.code,{children:"like"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"key"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"required"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"is the inner indexed value from the standard."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"optional"})}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["the ",(0,t.jsx)(n.code,{children:"options"})," object."]})]})]})]}),(0,t.jsx)(n.admonition,{title:"options object",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"subscribe"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"accountId"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": If given, it should either be a string or an array of account IDs to filter values by them. Otherwise, not filters by account Id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"order"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": Either ",(0,t.jsx)(n.code,{children:"asc"})," or ",(0,t.jsx)(n.code,{children:"desc"}),". Defaults to ",(0,t.jsx)(n.code,{children:"asc"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"limit"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": Defaults to ",(0,t.jsx)(n.code,{children:"100"}),". The number of values to return. Index may return more than index values, if the last elements have the same block height."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"from"})," ",(0,t.jsx)(n.em,{children:"(optional)"}),": Defaults to ",(0,t.jsx)(n.code,{children:"0"})," or ",(0,t.jsx)(n.code,{children:"Max"})," depending on order."]}),"\n"]})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2154:(e,n,i)=>{i.d(n,{W:()=>c});var t=i(67294),s=i(93293),d=i(91262),r=i(85893);function c(e){var n=e.children,c=e.id,l=void 0===c?1:c,o=e.height,a=void 0===o?"160px":o;return(0,r.jsx)(d.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(f){}var d=i(58613),c=d.Widget,o=d.useInitNear,h=i(2302).ZP,x=(0,t.useState)(e),j=x[0],p=x[1],u=o().initNear,m=(0,s.O)().selector;return(0,t.useEffect)((function(){u&&m&&u({networkId:"testnet",selector:m})}),[u,m]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"monaco",children:(0,r.jsx)(h,{height:a,value:j,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return p(e)}})}),(0,r.jsx)("div",{className:"code_iframe",children:(0,r.jsx)("div",{className:"bootstrap-scope",children:(0,r.jsx)("div",{className:"vm-widget",children:(0,r.jsx)(c,{code:j},l)})})}),n[1]]})}})}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);