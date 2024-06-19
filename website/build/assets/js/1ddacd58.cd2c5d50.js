"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8397],{53891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),s=t(11151),a=t(71183);const i={id:"events",title:"Events"},o=void 0,l={id:"tutorials/nfts/events",title:"Events",description:"In this tutorial, you'll learn about the events standard and how to implement it in your smart contract.",source:"@site/../docs/3.tutorials/nfts/7-events.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/events",permalink:"/tutorials/nfts/events",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/7-events.md",tags:[],version:"current",lastUpdatedBy:"Lyudmil Ivanov",lastUpdatedAt:1718807151e3,sidebarPosition:7,frontMatter:{id:"events",title:"Events"},sidebar:"tutorials",previous:{title:"Transfers",permalink:"/tutorials/nfts/core"},next:{title:"Approvals",permalink:"/tutorials/nfts/approvals"}},c={},d=[{value:"Understanding the use case",id:"understanding-the-use-case",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch mint",id:"scenario-b---batch-mint",level:4},{value:"Scenario C - transfer NFTs",id:"scenario-c---transfer-nfts",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Creating the events file",id:"events-rs",level:3},{value:"Adding modules and constants",id:"lib-rs",level:3},{value:"Logging minted tokens",id:"logging-minted-tokens",level:3},{value:"Logging transfers",id:"logging-transfers",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Minting",id:"minting",level:3},{value:"Transferring",id:"transferring",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this tutorial, you'll learn about the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and how to implement it in your smart contract."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"understanding-the-use-case",children:"Understanding the use case"}),"\n",(0,r.jsxs)(n.p,{children:["Have you ever wondered how the wallet knows which NFTs you own and how it can display them in the ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"? Originally, an indexer used to listen for any functions calls starting with ",(0,r.jsx)(n.code,{children:"nft_"})," on your account. These contracts were then flagged on your account as likely NFT contracts."]}),"\n",(0,r.jsxs)(n.p,{children:["When you navigated to your collectibles tab, the wallet would then query all those contracts for the list of NFTs you owned using the ",(0,r.jsx)(n.code,{children:"nft_tokens_for_owner"})," function you saw in the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/enumeration",children:"enumeration tutorial"}),"."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"the-problem",children:"The problem"}),"\n",(0,r.jsx)(n.p,{children:"This method of flagging contracts was not reliable as each NFT-driven application might have its own way of minting or transferring NFTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions."}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"the-solution",children:"The solution"}),"\n",(0,r.jsx)(n.p,{children:"A standard was introduced so that smart contracts could emit an event anytime NFTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."}),"\n",(0,r.jsx)(n.p,{children:"As per the standard, you need to implement a logging functionality that gets fired when NFTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."}),"\n",(0,r.jsxs)(n.p,{children:["It's important to note the standard dictates that the log should begin with ",(0,r.jsx)(n.code,{children:'"EVENT_JSON:"'}),". The structure of your log should, however, always contain the 3 following things:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"standard"}),": the current name of the standard (e.g. nep171)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"version"}),": the version of the standard you're using (e.g. 1.0.0)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"event"}),": a list of events you're emitting."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transfer events"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Optional"})," - ",(0,r.jsx)(n.strong,{children:"authorized_id"}),": the account approved to transfer on behalf of the owner."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"old_owner_id"}),": the old owner of the NFT."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"new_owner_id"}),": the new owner that the NFT is being transferred to."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Optional"})," - ",(0,r.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Minting events"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"owner_id"}),": the owner that the NFT is being minted to."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Optional"})," - ",(0,r.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"In order to solidify your understanding of the standard, let's walk through three scenarios and see what the logs should look like."}),"\n",(0,r.jsx)(n.h4,{id:"scenario-a---simple-mint",children:"Scenario A - simple mint"}),"\n",(0,r.jsxs)(n.p,{children:["In this scenario, Benji wants to mint an NFT to Mike with a token ID ",(0,r.jsx)(n.code,{children:'"team-token"'})," and he doesn't include a message. The log should look as follows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"scenario-b---batch-mint",children:"Scenario B - batch mint"}),"\n",(0,r.jsxs)(n.p,{children:["In this scenario, Benji wants to perform a batch mint. He will mint an NFT to Mike, Damian, Josh, and Dorian. Dorian, however, will get two NFTs. Each token ID will be ",(0,r.jsx)(n.code,{children:'"team-token"'})," followed by an incrementing number. The log is as follows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"scenario-c---transfer-nfts",children:"Scenario C - transfer NFTs"}),"\n",(0,r.jsx)(n.p,{children:"In this scenario, Mike is transferring both his team tokens to Josh. The log should look as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,r.jsxs)(n.p,{children:["At this point, you should have a good understanding of what the end goal should be so let's get to work! Open the repository and create a new file in the ",(0,r.jsx)(n.code,{children:"nft-contract-basic/src"})," directory called ",(0,r.jsx)(n.code,{children:"events.rs"}),". This is where your log structs will live."]}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to see the finished code of the events implementation, that can be found on the ",(0,r.jsx)(n.code,{children:"nft-contract-events"})," folder."]}),"\n",(0,r.jsx)(n.h3,{id:"events-rs",children:"Creating the events file"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following into your file. This will outline the structs for your ",(0,r.jsx)(n.code,{children:"EventLog"}),", ",(0,r.jsx)(n.code,{children:"NftMintLog"}),", and ",(0,r.jsx)(n.code,{children:"NftTransferLog"}),". In addition, we've added a way for ",(0,r.jsx)(n.code,{children:"EVENT_JSON:"})," to be prefixed whenever you log the ",(0,r.jsx)(n.code,{children:"EventLog"}),"."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"1",end:"79",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/events.rs"}),"\n",(0,r.jsxs)(n.p,{children:["This requires the ",(0,r.jsx)(n.code,{children:"serde_json"})," package which you can easily add to your ",(0,r.jsx)(n.code,{children:"nft-contract-skeleton/Cargo.toml"})," file:"]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"10",end:"12",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/Cargo.toml"}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"lib-rs",children:"Adding modules and constants"}),"\n",(0,r.jsxs)(n.p,{children:["Now that you've created a new file, you need to add the module to the ",(0,r.jsx)(n.code,{children:"lib.rs"})," file. In addition, you can define two constants for the standard and version that will be used across our contract."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"10",end:"30",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/lib.rs"}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"logging-minted-tokens",children:"Logging minted tokens"}),"\n",(0,r.jsxs)(n.p,{children:["Now that all the tools are set in place, you can now implement the actual logging functionality. Since the contract will only be minting tokens in one place, open the ",(0,r.jsx)(n.code,{children:"nft-contract-basic/src/mint.rs"})," file and navigate to the bottom of the file. This is where you'll construct the log for minting. Anytime someone successfully mints an NFT, it will now correctly emit a log."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"5",end:"58",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/mint.rs"}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"logging-transfers",children:"Logging transfers"}),"\n",(0,r.jsxs)(n.p,{children:["Let's open the ",(0,r.jsx)(n.code,{children:"nft-contract-basic/src/internal.rs"})," file and navigate to the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function. This is the location where you'll build your transfer logs. Whenever an NFT is transferred, this function is called and so you'll correctly be logging the transfers."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"96",end:"159",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/internal.rs"}),"\n",(0,r.jsxs)(n.p,{children:["This solution, unfortunately, has an edge case which will break things. If an NFT is transferred via the ",(0,r.jsx)(n.code,{children:"nft_transfer_call"})," function, there's a chance that the transfer will be reverted if the ",(0,r.jsx)(n.code,{children:"nft_on_transfer"})," function returns ",(0,r.jsx)(n.code,{children:"true"}),". Taking a look at the logic for ",(0,r.jsx)(n.code,{children:"nft_transfer_call"}),", you can see why this is a problem."]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"nft_transfer_call"})," is invoked, it will:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Call ",(0,r.jsx)(n.code,{children:"internal_transfer"})," to perform the actual transfer logic."]}),"\n",(0,r.jsxs)(n.li,{children:["Initiate a cross-contract call and invoke the ",(0,r.jsx)(n.code,{children:"nft_on_transfer"})," function."]}),"\n",(0,r.jsxs)(n.li,{children:["Resolve the promise and perform logic in ",(0,r.jsx)(n.code,{children:"nft_resolve_transfer"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This will either return true meaning the transfer went fine or it will revert the transfer and return false."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you only place the log in the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function, the log will be emitted and the indexer will think that the NFT was transferred. If the transfer is reverted during ",(0,r.jsx)(n.code,{children:"nft_resolve_transfer"}),", however, that event should ",(0,r.jsx)(n.strong,{children:"also"})," be emitted. Anywhere that an NFT ",(0,r.jsx)(n.strong,{children:"could"})," be transferred, we should add logs. Replace the ",(0,r.jsx)(n.code,{children:"nft_resolve_transfer"})," with the following code."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"157",end:"241",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/nft_core.rs"}),"\n",(0,r.jsxs)(n.p,{children:["In addition, you need to add an ",(0,r.jsx)(n.code,{children:"authorized_id"})," and ",(0,r.jsx)(n.code,{children:"memo"})," to the parameters for ",(0,r.jsx)(n.code,{children:"nft_resolve_transfer"})," as shown below."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We will talk more about this ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/approvals",children:(0,r.jsx)(n.code,{children:"authorized_id"})})," in the following chapter."]})}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"43",end:"60",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/nft_core.rs"}),"\n",(0,r.jsxs)(n.p,{children:["The last step is to modify the ",(0,r.jsx)(n.code,{children:"nft_transfer_call"})," logic to include these new parameters:"]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"86",end:"135",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-events/src/nft_core.rs"}),"\n",(0,r.jsx)(n.p,{children:"With that finished, you've successfully implemented the events standard and it's time to start testing."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,r.jsx)(n.p,{children:"For the purpose of readability and ease of development, instead of redeploying the contract to the same account, let's create an account and deploy to that instead. You could have deployed to the same account as none of the changes you implemented in this tutorial would have caused errors."}),"\n",(0,r.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll deploy this contract to the network."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export EVENTS_NFT_CONTRACT_ID=<accountId>\nnear create-account $EVENTS_NFT_CONTRACT_ID --useFaucet\n"})}),"\n",(0,r.jsx)(n.p,{children:"Using the cargo-near, deploy and initialize the contract as you did in the previous tutorials:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $EVENTS_NFT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"minting",children:"Minting"}),"\n",(0,r.jsxs)(n.p,{children:["Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,r.jsx)(n.code,{children:'"events-token"'})," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can check to see if everything went through properly by looking at the output in your CLI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n\tLog [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can see that the event was properly logged!"}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"transferring",children:"Transferring"}),"\n",(0,r.jsxs)(n.p,{children:["You can now test if your transfer log works as expected by sending ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," your NFT."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,r.jsx)(n.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n\tLog [events.goteam.examples.testnet]: Memo: Go Team :)\n\tLog [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Hurray! At this point, your NFT contract is fully complete and the events standard has been implemented."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["Today you went through the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and implemented the necessary logic in your smart contract. You created events for ",(0,r.jsx)(n.a,{href:"#logging-minted-tokens",children:"minting"})," and ",(0,r.jsx)(n.a,{href:"#logging-transfers",children:"transferring"})," NFTs. You then deployed and ",(0,r.jsx)(n.a,{href:"#initialization-and-minting",children:"tested"})," your changes by minting and transferring NFTs."]}),"\n",(0,r.jsx)(n.p,{children:"In the next tutorial, you'll look at the basics of a marketplace contract and how it was built."}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli: ",(0,r.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(n.li,{children:["cargo-near ",(0,r.jsx)(n.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.1.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Events standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP297 extension"}),", version ",(0,r.jsx)(n.code,{children:"1.1.0"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),s=t(36905),a=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,a=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:s});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function g(e){var n,t,s,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,g=u(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:g})})),x=p[0],v=p[1],j=m({queryString:c,groupId:h}),b=j[0],w=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),s=t[0],a=t[1],[s,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),T=y[0],_=y[1],k=function(){var e=null!=b?b:T;return f({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){k&&v(k)}),[k]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),_(e)}),[w,_,g]),tabValues:g}}var p=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;t=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;t=null!=(a=l[i])?a:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},a,{className:(0,s.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,s=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function w(e){var n=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,Object.assign({},n,e)),(0,v.jsx)(b,Object.assign({},n,e))]})}function y(e){var n=(0,p.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>m,Ey:()=>p,SQ:()=>g});var r=t(67294),s=t(74866),a=t(85162),i=t(74165),o=t(15861),l=t(1841),c=t.n(l),d=t(85893);function h(){return(h=(0,o.Z)((0,i.Z)().mark((function e(n,t,r){var s,a,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(n+"-until"))&&a>Date.now())){e.next=5;break}s=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(n,s),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=s.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var n=e.url,t=e.start,s=e.end,a=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),u=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),s=r[0],a=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+a+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return h.apply(this,arguments)}(e,t,s);r.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:i,children:[(0,d.jsx)(c(),{language:a,metastring:o+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(a.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function g(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),s=t.start,a=t.end,i=t.fname;if(e.type===p)return p({url:r,start:s,end:a,language:n,fname:i});return e}(e,t)})),1==n.length?(0,d.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(s.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function p(e){var n=e.url,t=e.start,r=e.end,s=e.language,a=e.fname,i=e.metastring;return u({url:n,start:t,end:r,language:s,fname:a,metastring:i})}}}]);