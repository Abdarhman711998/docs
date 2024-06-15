"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3224],{97985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(85893),r=t(11151);const s={sidebar_label:"NFT Indexer"},i="Building an NFT indexer",o={id:"build/data-infrastructure/lake-framework/building-indexers/nft-indexer",title:"Building an NFT indexer",description:"near-examples/near-lake-nft-indexer: source code for this tutorial",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-framework/building-indexers/nft-indexer.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework/building-indexers",slug:"/build/data-infrastructure/lake-framework/building-indexers/nft-indexer",permalink:"/vi/build/data-infrastructure/lake-framework/building-indexers/nft-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/building-indexers/nft-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{sidebar_label:"NFT Indexer"},sidebar:"build",previous:{title:"Python tutorial",permalink:"/vi/build/data-infrastructure/lake-framework/building-indexers/python-lake-indexer"},next:{title:"NFT indexer for Python",permalink:"/vi/build/data-infrastructure/lake-framework/building-indexers/python-nft-indexer"}},d={},l=[{value:"The End",id:"the-end",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Set up NEAR Lake Framework",id:"set-up-near-lake-framework",level:2},{value:"Events and where to catch them",id:"events-and-where-to-catch-them",level:2},{value:"Catching only the data we need",id:"catching-only-the-data-we-need",level:2},{value:"Almost done",id:"almost-done",level:2},{value:"Crafting links to Paras and Mintbase for NFTs minted there",id:"crafting-links-to-paras-and-mintbase-for-nfts-minted-there",level:2},{value:"Paras token URL",id:"paras-token-url",level:3},{value:"Mintbase token URL",id:"mintbase-token-url",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"building-an-nft-indexer",children:"Building an NFT indexer"}),"\n",(0,a.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer",children:(0,a.jsx)(n.code,{children:"near-examples/near-lake-nft-indexer"})}),": source code for this tutorial"]})}),"\n",(0,a.jsx)(n.h2,{id:"the-end",children:"The End"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial ends with a working NFT indexer built on top ",(0,a.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework JS"}),". The indexer is watching for ",(0,a.jsx)(n.code,{children:"nft_mint"})," ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," and prints some relevant data:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"receiptId"})," of the ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})," where the mint has happened"]}),"\n",(0,a.jsx)(n.li,{children:"Marketplace"}),"\n",(0,a.jsx)(n.li,{children:"NFT owner account name"}),"\n",(0,a.jsx)(n.li,{children:"Links to the NFTs on the marketplaces"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The final source code is available on the GitHub ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer",children:(0,a.jsx)(n.code,{children:"near-examples/near-lake-nft-indexer"})})]}),"\n",(0,a.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR Protocol had introduced a nice feature ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),". The Events allow a contract developer to add standardized logs to the ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:(0,a.jsx)(n.code,{children:"ExecutionOutcomes"})})," thus allowing themselves or other developers to read those logs in more convenient manner via API or indexers."]}),"\n",(0,a.jsxs)(n.p,{children:["The Events have a field ",(0,a.jsx)(n.code,{children:"standard"})," which aligns with NEPs. In this tutorial we'll be talking about ",(0,a.jsx)(n.a,{href:"https://github.com/near/NEPs/discussions/171",children:"NEP-171 Non-Fungible Token standard"}),"."]}),"\n",(0,a.jsx)(n.p,{children:'In this tutorial our goal is to show you how you can "listen" to the Events contracts emit and how you can benefit from them.'}),"\n",(0,a.jsxs)(n.p,{children:["As the example we will be building an indexer that watches all the NFTs minted following the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP-171 Events"})," standard, assuming we're collectors who don't want to miss a thing. Our indexer should notice every single NFT minted and give us a basic set of data like: in what Receipt it was minted, and show us the link to a marketplace (we'll cover ",(0,a.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,a.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"})," in our example)."]}),"\n",(0,a.jsxs)(n.p,{children:["We will use JS version of ",(0,a.jsx)(n.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," in this tutorial. Though the concept is the same for Rust, but we want to show more people that it's not that complex to build your own indexer."]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,a.jsxs)(n.p,{children:["Please, ensure you've the credentials set up as described on the ",(0,a.jsx)(n.a,{href:"/vi/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," page. Otherwise you won't be able to get the code working."]})}),"\n",(0,a.jsx)(n.p,{children:"You will need:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"node"})," ",(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"installed and configured"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's create our project folder"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir lake-nft-indexer && cd lake-nft-indexer\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let's add the ",(0,a.jsx)(n.code,{children:"package.json"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"title=package.json",children:'{\n  "name": "lake-nft-indexer",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": "tsc && node index.js"\n  },\n  "dependencies": {\n    "near-lake-framework": "^1.0.2"\n  },\n  "devDependencies": {\n    "typescript": "^4.6.4"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You may have noticed we've added ",(0,a.jsx)(n.code,{children:"typescript"})," as a dev dependency. Let's configure the TypeScript. We'll need to create ",(0,a.jsx)(n.code,{children:"tsconfig.json"})," file for that"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"title=tsconfig.json",children:'{\n  "compilerOptions": {\n    "lib": [\n      "ES2019",\n      "dom"\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"ES2019 edition",type:"warning",children:(0,a.jsxs)(n.p,{children:["Please, note the ",(0,a.jsx)(n.code,{children:"ES2019"})," edition used. We require it because we are going to use ",(0,a.jsx)(n.code,{children:".flatMap()"})," and ",(0,a.jsx)(n.code,{children:".flat()"})," in our code. These methods were introduces in ",(0,a.jsx)(n.code,{children:"ES2019"}),". Though you can use even more recent"]})}),"\n",(0,a.jsxs)(n.p,{children:["Let's create empty ",(0,a.jsx)(n.code,{children:"index.ts"})," in the project root and thus finish the preparations."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we can start a real work."}),"\n",(0,a.jsx)(n.h2,{id:"set-up-near-lake-framework",children:"Set up NEAR Lake Framework"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"index.ts"})," let's import ",(0,a.jsx)(n.code,{children:"startStream"})," function and ",(0,a.jsx)(n.code,{children:"types"})," from ",(0,a.jsx)(n.code,{children:"near-lake-framework"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"import { startStream, types } from 'near-lake-framework';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add the instantiation of ",(0,a.jsx)(n.code,{children:"LakeConfig"})," below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.js",children:'const lakeConfig: types.LakeConfig = {\n  s3BucketName: "near-lake-data-mainnet",\n  s3RegionName: "eu-central-1",\n  startBlockHeight: 66264389,\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Just a few words on the config, we have set ",(0,a.jsx)(n.code,{children:"s3BucketName"})," for mainnet, default ",(0,a.jsx)(n.code,{children:"s3RegionName"})," and a fresh-ish block height for ",(0,a.jsx)(n.code,{children:"startBlockHeight"}),". You can go to ",(0,a.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"})," and get ",(0,a.jsx)(n.strong,{children:"the freshest"})," block height for your setup. Though you can use the same as we do."]}),"\n",(0,a.jsxs)(n.p,{children:["Now we need to create a callback function that we'll be called to handle ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/toc",children:(0,a.jsx)(n.code,{children:"StreamerMessage"})})," our indexer receives."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"async function handleStreamerMessage(\n  streamerMessage: types.StreamerMessage\n): Promise<void> {\n\n}\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Callback function requirements",type:"info",children:[(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"near-lake-framework"})," JS library the handler have to be presented as a callback function. This function have to:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"be asynchronous"}),"\n",(0,a.jsxs)(n.li,{children:["accept an argument of type ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/toc",children:(0,a.jsx)(n.code,{children:"StreamerMessage"})})]}),"\n",(0,a.jsxs)(n.li,{children:["return nothing (",(0,a.jsx)(n.code,{children:"void"}),")"]}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["And an actual start of our indexer in the end of the ",(0,a.jsx)(n.code,{children:"index.ts"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"(async () => {\n  await startStream(lakeConfig, handleStreamerMessage);\n})();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The final ",(0,a.jsx)(n.code,{children:"index.ts"})," at this moment should look like the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'import { startStream, types } from \'near-lake-framework\';\n\nconst lakeConfig: types.LakeConfig = {\n  s3BucketName: "near-lake-data-mainnet",\n  s3RegionName: "eu-central-1",\n  startBlockHeight: 66264389,\n};\n\nasync function handleStreamerMessage(\n  streamerMessage: types.StreamerMessage\n): Promise<void> {\n\n}\n\n(async () => {\n  await startStream(lakeConfig, handleStreamerMessage);\n})();\n'})}),"\n",(0,a.jsx)(n.h2,{id:"events-and-where-to-catch-them",children:"Events and where to catch them"}),"\n",(0,a.jsxs)(n.p,{children:["First of all let's find out where we can catch the Events. We hope you are familiar with how the ",(0,a.jsx)(n.a,{href:"/concepts/data-flow/near-data-flow",children:"Data Flow in NEAR Blockchain"}),", but let's revise our knowledge:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Mint an NFT is an action in an NFT contract (doesn't matter which one)"}),"\n",(0,a.jsxs)(n.li,{children:["Actions are located in a ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})]}),"\n",(0,a.jsxs)(n.li,{children:["A result of the Receipt execution is ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ExecutionOutcome"}),' in turn, catches the logs a contract "prints"']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," built on top of the logs"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This leads us to the realization that we can watch only for ExecutionOutcomes and ignore everything else ",(0,a.jsx)(n.code,{children:"StreamerMessage"})," brings us."]}),"\n",(0,a.jsxs)(n.p,{children:["Also, we need to define an interface to catch the Events. Let's copy the interface definition from the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat#events",children:"Events Nomicon page"})," and paste it before the ",(0,a.jsx)(n.code,{children:"handleStreamerMessage"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"interface EventLogData {\n  standard: string,\n  version: string,\n  event: string,\n  data?: unknown,\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"catching-only-the-data-we-need",children:"Catching only the data we need"}),"\n",(0,a.jsxs)(n.p,{children:["Inside the callback function ",(0,a.jsx)(n.code,{children:"handleStreamerMessage"})," we've prepared in the ",(0,a.jsx)(n.a,{href:"#preparation",children:"Preparation"})," section let's start filtering the data we need:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"async function handleStreamerMessage(\n  streamerMessage: types.StreamerMessage\n): Promise<void> {\n  const relevantOutcomes = streamerMessage\n    .shards\n    .flatMap(shard => shard.receiptExecutionOutcomes)\n\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We have iterated through all the ",(0,a.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shards"})," and collected the lists of all ExecutionOutcomes into a single list (in our case we don't care on which Shard did the mint happen)"]}),"\n",(0,a.jsxs)(n.p,{children:["Now we want to deal only with those ExecutionOutcomes that contain logs of Events format. Such logs start with ",(0,a.jsx)(n.code,{children:"EVENT_JSON:"})," according to the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat#events",children:"Events docs"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Also, we don't require all the data from ExecutionOutcome, let's handle it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"async function handleStreamerMessage(\n  streamerMessage: types.StreamerMessage\n): Promise<void> {\n  const relevantOutcomes = streamerMessage\n    .shards\n    .flatMap(shard => shard.receiptExecutionOutcomes)\n    .map(outcome => ({\n      receipt: {\n        id: outcome.receipt.receiptId,\n        receiverId: outcome.receipt.receiverId,\n      },\n      events: outcome.executionOutcome.outcome.logs.map(\n        (log: string): EventLogData => {\n          const [_, probablyEvent] = log.match(/^EVENT_JSON:(.*)$/) ?? []\n          try {\n            return JSON.parse(probablyEvent)\n          } catch (e) {\n            return\n          }\n        }\n      )\n      .filter(event => event !== undefined)\n    }))\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let us explain what we are doing here:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"We are walking through the ExecutionOutcomes"}),"\n",(0,a.jsxs)(n.li,{children:["We are constructing a list of objects containing ",(0,a.jsx)(n.code,{children:"receipt"})," (it's id and the receiver) and ",(0,a.jsx)(n.code,{children:"events"})," containing the Events"]}),"\n",(0,a.jsxs)(n.li,{children:["In order to collect the Events we are iterating through the ExecutionOutcome's logs trying to parse Event using regular expression. We're returning ",(0,a.jsx)(n.code,{children:"undefined"})," if we fail to parse ",(0,a.jsx)(n.code,{children:"EventLogData"})]}),"\n",(0,a.jsxs)(n.li,{children:["Finally once ",(0,a.jsx)(n.code,{children:"events"})," list is collected we're filtering it dropping the ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Fine, so now we have only a list of our objects that contain some Receipt data and the list of successfully parsed ",(0,a.jsx)(n.code,{children:"EventLogData"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The goal for our indexer is to return the useful data about a minted NFT that follows NEP-171 standard. We need to drop irrelevant standard Events:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'    .filter(relevantOutcome =>\n      relevantOutcome.events.some(\n        event => event.standard === "nep171" && event.event === "nft_mint"\n      )\n    )\n'})}),"\n",(0,a.jsx)(n.h2,{id:"almost-done",children:"Almost done"}),"\n",(0,a.jsx)(n.p,{children:"So far we have collected everything we need corresponding to our requirements."}),"\n",(0,a.jsxs)(n.p,{children:["We can print everything in the end of the ",(0,a.jsx)(n.code,{children:"handleStreamerMessage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"  relevantOutcomes.length && console.dir(relevantOutcomes, { depth: 10 })\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The final look of the ",(0,a.jsx)(n.code,{children:"handleStreamerMessage"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'async function handleStreamerMessage(\n  streamerMessage: types.StreamerMessage\n): Promise<void> {\n  const relevantOutcomes = streamerMessage\n    .shards\n    .flatMap(shard => shard.receiptExecutionOutcomes)\n    .map(outcome => ({\n      receipt: {\n        id: outcome.receipt.receiptId,\n        receiverId: outcome.receipt.receiverId,\n      },\n      events: outcome.executionOutcome.outcome.logs.map(\n        (log: string): EventLogData => {\n          const [_, probablyEvent] = log.match(/^EVENT_JSON:(.*)$/) ?? []\n          try {\n            return JSON.parse(probablyEvent)\n          } catch (e) {\n            return\n          }\n        }\n      )\n      .filter(event => event !== undefined)\n    }))\n    .filter(relevantOutcome =>\n      relevantOutcome.events.some(\n        event => event.standard === "nep171" && event.event === "nft_mint"\n      )\n    )\n\n  relevantOutcomes.length && console.dir(relevantOutcomes, { depth: 10 })\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And if we run our indexer we will be catching ",(0,a.jsx)(n.code,{children:"nft_mint"})," event and print the data in the terminal."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,a.jsx)(n.a,{href:"/vi/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,a.jsxs)(n.p,{children:["Not so fast! Remember we were talking about having the links to the marketplaces to see the minted tokens? We're gonna extend our data with links whenever possible. At least we're gonna show you how to deal with the NFTs minted on ",(0,a.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,a.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"crafting-links-to-paras-and-mintbase-for-nfts-minted-there",children:"Crafting links to Paras and Mintbase for NFTs minted there"}),"\n",(0,a.jsx)(n.p,{children:"At this moment we have an array of objects we've crafted on the fly that exposes receipt, execution status and event logs. We definitely know that all the data we have at this moment are relevant for us, and we want to extend it with the links to that minted NFTs at least for those marketplaces we know."}),"\n",(0,a.jsx)(n.p,{children:"We know and love Paras and Mintbase."}),"\n",(0,a.jsx)(n.h3,{id:"paras-token-url",children:"Paras token URL"}),"\n",(0,a.jsx)(n.p,{children:"We did the research for you and here's how the URL to token on Paras is crafting:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://paras.id/token/[1]::[2]/[3]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Where:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["[1] - Paras contract address (",(0,a.jsx)(n.code,{children:"x.paras.near"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["[2] - First part of the ",(0,a.jsx)(n.code,{children:"token_id"})," (",(0,a.jsx)(n.code,{children:"EventLogData.data"})," for Paras is an array of objects with ",(0,a.jsx)(n.code,{children:"token_ids"})," key in it. Those IDs represented by numbers with column ",(0,a.jsx)(n.code,{children:":"})," between them)"]}),"\n",(0,a.jsxs)(n.li,{children:["[3] - ",(0,a.jsx)(n.code,{children:"token_id"})," itself"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://paras.id/token/x.paras.near::387427/387427:373\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let's add the interface for later use somewhere after ",(0,a.jsx)(n.code,{children:"interface EventLogData"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface ParasEventLogData {\n  owner_id: string,\n  token_ids: string[],\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mintbase-token-url",children:"Mintbase token URL"}),"\n",(0,a.jsx)(n.p,{children:"And again we did the research for you:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://www.mintbase.io/thing/[1]:[2]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Where:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["[1] - ",(0,a.jsx)(n.code,{children:"meta_id"})," (",(0,a.jsx)(n.code,{children:"EventLogData.data"})," for Mintbase is an array of stringified JSON that contains ",(0,a.jsx)(n.code,{children:"meta_id"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"[2] - Store contract account address (basically Receipt's receiver ID)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://www.mintbase.io/thing/70eES-icwSw9iPIkUluMHOV055pKTTgQgTiXtwy3Xus:vnartistsdao.mintbase1.near\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let's add the interface for later use somewhere after ",(0,a.jsx)(n.code,{children:"interface EventLogData"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface MintbaseEventLogData {\n  owner_id: string,\n  memo: string,\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now it's a perfect time to add another ",(0,a.jsx)(n.code,{children:".map()"}),", but it might be too much. So let's proceed with a forloop to craft the output data we want to print."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'let output = []\nfor (let relevantOutcome of relevantOutcomes) {\n  let marketplace = "Unknown"\n  let nfts = []\n\n\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We're going to print the marketplace name, Receipt id so you would be able to search for it on ",(0,a.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"})," and the list of links to the NFTs along with the owner account name."]}),"\n",(0,a.jsxs)(n.p,{children:['Let\'s start crafting the links. Time to say "Hi!" to ',(0,a.jsx)(n.a,{href:"https://twitter.com/hdriqi",children:"Riqi"})," (just because we can):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'let output = []\n  for (let relevantOutcome of relevantOutcomes) {\n    let marketplace = "Unknown"\n    let nfts = []\n    if (relevantOutcome.receipt.receiverId.endsWith(".paras.near")) {\n      marketplace = "Paras"\n      nfts = relevantOutcome.events.flatMap(event => {\n        return (event.data as ParasEventLogData[])\n          .map(eventData => ({\n            owner: eventData.owner_id,\n            links: eventData.token_ids.map(\n              tokenId => `https://paras.id/token/${relevantOutcome.receipt.receiverId}::${tokenId.split(":")[0]}/${tokenId}`\n            )\n           })\n        )\n      })\n    }\n'})}),"\n",(0,a.jsxs)(n.p,{children:["A few words about what is going on here. If the Receipt's receiver account name ends with ",(0,a.jsx)(n.code,{children:".paras.near"})," (e.g. ",(0,a.jsx)(n.code,{children:"x.paras.near"}),") we assume it's from Paras marketplace, so we are changing the corresponding variable."]}),"\n",(0,a.jsxs)(n.p,{children:["After that we iterate over the Events and its ",(0,a.jsx)(n.code,{children:"data"})," using the ",(0,a.jsx)(n.code,{children:"ParasEventLogData"})," we've defined earlier. Collecting a list of objects with the NFTs owner and NFTs links."]}),"\n",(0,a.jsxs)(n.p,{children:["Mintbase turn, we hope ",(0,a.jsx)(n.a,{href:"https://twitter.com/nategeier",children:"Nate"})," and his team have ",(0,a.jsx)(n.a,{href:"/vi/build/data-infrastructure/lake-framework/migrating-to-near-lake-framework",children:"migrated to NEAR Lake Framework"}),' already, saying "Hi!" and crafting the link:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'  } else if (relevantOutcome.receipt.receiverId.match(/\\.mintbase\\d+\\.near$/)) {\n      marketplace = "Mintbase"\n      nfts = relevantOutcome.events.flatMap(event => {\n        return (event.data as MintbaseEventLogData[])\n          .map(eventData => {\n          const memo = JSON.parse(eventData.memo)\n          return {\n            owner: eventData.owner_id,\n            links: [`https://mintbase.io/thing/${memo["meta_id"]}:${relevantOutcome.receipt.receiverId}`]\n          }\n        })\n      })\n    }\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Almost the same story as with Paras, but a little bit more complex. The nature of Mintbase marketplace is that it's not a single marketplace! Every Mintbase user has their own store and a separate contract. And it looks like those contract addresses follow the same principle they end with ",(0,a.jsx)(n.code,{children:".mintbaseN.near"})," where ",(0,a.jsx)(n.code,{children:"N"})," is number (e.g. ",(0,a.jsx)(n.code,{children:"nate.mintbase1.near"}),")."]}),"\n",(0,a.jsx)(n.p,{children:"After we have defined that the ExecutionOutcome receiver is from Mintbase we are doing the same stuff as with Paras:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Changing the ",(0,a.jsx)(n.code,{children:"marketplace"})," variable"]}),"\n",(0,a.jsx)(n.li,{children:"Collecting the list of NFTs with owner and crafted links"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"And if we can't determine the marketplace, we still want to return something, so let's return Events data as is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"  } else {\n    nfts = relevantOutcome.events.flatMap(event => event.data)\n  }\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It's time to push the collected data to the ",(0,a.jsx)(n.code,{children:"output"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"  output.push({\n    receiptId: relevantOutcome.receipt.id,\n    marketplace,\n    nfts,\n  })\n"})}),"\n",(0,a.jsx)(n.p,{children:"And make it print the output to the terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"if (output.length) {\n  console.log(`We caught freshly minted NFTs!`)\n  console.dir(output, { depth: 5 })\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"All together:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:'  let output = []\n  for (let relevantOutcome of relevantOutcomes) {\n    let marketplace = "Unknown"\n    let nfts = []\n    if (relevantOutcome.receipt.receiverId.endsWith(".paras.near")) {\n      marketplace = "Paras"\n      nfts = relevantOutcome.events.flatMap(event => {\n        return (event.data as ParasEventLogData[])\n          .map(eventData => ({\n            owner: eventData.owner_id,\n            links: eventData.token_ids.map(\n              tokenId => `https://paras.id/token/${relevantOutcome.receipt.receiverId}::${tokenId.split(":")[0]}/${tokenId}`\n            )\n           })\n        )\n      })\n    } else if (relevantOutcome.receipt.receiverId.match(/\\.mintbase\\d+\\.near$/)) {\n      marketplace = "Mintbase"\n      nfts = relevantOutcome.events.flatMap(event => {\n        return (event.data as MintbaseEventLogData[])\n          .map(eventData => {\n          const memo = JSON.parse(eventData.memo)\n          return {\n            owner: eventData.owner_id,\n            links: [`https://mintbase.io/thing/${memo["meta_id"]}:${relevantOutcome.receipt.receiverId}`]\n          }\n        })\n      })\n    } else {\n      nfts = relevantOutcome.events.flatMap(event => event.data)\n    }\n    output.push({\n      receiptId: relevantOutcome.receipt.id,\n      marketplace,\n      createdOn,\n      nfts,\n    })\n  }\n  if (output.length) {\n    console.log(`We caught freshly minted NFTs!`)\n    console.dir(output, { depth: 5 })\n  }\n'})}),"\n",(0,a.jsxs)(n.p,{children:["OK, how about the date and time of the NFT mint? Let's add to the beginning of the ",(0,a.jsx)(n.code,{children:"handleStreamerMessage"})," function"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"const createdOn = new Date(streamerMessage.block.header.timestamp / 1000000)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.code,{children:"output.push()"})," expression:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"output.push({\n  receiptId: relevantOutcome.receipt.id,\n  marketplace,\n  createdOn,\n  nfts,\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"And not that's it. Run the indexer to watch for NFT minting and never miss a thing."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,a.jsx)(n.a,{href:"/vi/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,a.jsx)(n.p,{children:"Example output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"We caught freshly minted NFTs!\n[\n  {\n    receiptId: '2y5XzzL1EEAxgq8EW3es2r1dLLkcecC6pDFHR12osCGk',\n    marketplace: 'Paras',\n    createdOn: 2022-05-24T09:35:57.831Z,\n    nfts: [\n      {\n        owner: 'dccc.near',\n        links: [ 'https://paras.id/token/x.paras.near::398089/398089:17' ]\n      }\n    ]\n  }\n]\nWe caught freshly minted NFTs!\n[\n  {\n    receiptId: 'BAVZ92XdbkAPX4DkqW5gjCvrhLX6kGq8nD8HkhQFVt5q',\n    marketplace: 'Mintbase',\n    createdOn: 2022-05-24T09:36:00.411Z,\n    nfts: [\n      {\n        owner: 'chiming.near',\n        links: [\n          'https://mintbase.io/thing/HOTcn6LTo3qTq8bUbB7VwA1GfSDYx2fYOqvP0L_N5Es:vnartistsdao.mintbase1.near'\n        ]\n      }\n    ]\n  }\n]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"What a ride, yeah? Let's sum up what we have done:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You've learnt about ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})]}),"\n",(0,a.jsx)(n.li,{children:"Now you understand how to follow for the Events"}),"\n",(0,a.jsx)(n.li,{children:"Knowing the fact that as a contract developer you can use Events and emit your own events, now you know how to create an indexer that follows those Events"}),"\n",(0,a.jsxs)(n.li,{children:["We've had a closer look at NFT minting process, you can experiment further and find out how to follow ",(0,a.jsx)(n.code,{children:"nft_transfer"})," Events"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The material from this tutorial can be extrapolated for literally any event that follows the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events format"})]}),"\n",(0,a.jsx)(n.p,{children:"Not mentioning you have a dedicated indexer to find out about the newest NFTs minted out there and to be the earliest bird to collect them."}),"\n",(0,a.jsx)(n.p,{children:"Let's go hunt doo, doo, doo \ud83e\udd88"}),"\n",(0,a.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer",children:(0,a.jsx)(n.code,{children:"near-examples/near-lake-nft-indexer"})}),": source code for this tutorial"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);