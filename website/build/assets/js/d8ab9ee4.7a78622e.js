"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6265],{7406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),s=t(11151);const i={id:"nft-chain-keys",title:"NFT Chain Keys Smart Contract",sidebar_label:"NFT Chain Keys Contract"},r=void 0,o={id:"build/chain-abstraction/nft-chain-keys",title:"NFT Chain Keys Smart Contract",description:"The NFT Chain Keys smart contract makes the ownership of remote accounts both provable and transferrable. This new paradigm allows you to create new end-user experiences that leverage provable and transferrable remote accounts as a core primitive.",source:"@site/../docs/2.build/1.chain-abstraction/nft-keys.md",sourceDirName:"2.build/1.chain-abstraction",slug:"/build/chain-abstraction/nft-chain-keys",permalink:"/build/chain-abstraction/nft-chain-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/nft-keys.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1713392118e3,frontMatter:{id:"nft-chain-keys",title:"NFT Chain Keys Smart Contract",sidebar_label:"NFT Chain Keys Contract"},sidebar:"build",previous:{title:"Wallet Chain Key Rules",permalink:"/build/chain-abstraction/wallet"},next:{title:"Multichain Relayer Server",permalink:"/build/chain-abstraction/multichain-gas-relayer/multichain-server"}},c={},l=[{value:"Contract overview",id:"contract-overview",level:2},{value:"Standards",id:"standards",level:3},{value:"Usage",id:"usage",level:2},{value:"Use Cases for NFT Keys",id:"use-cases-for-nft-keys",level:2},{value:"Remote Account Marketplace",id:"remote-account-marketplace",level:3},{value:"Bridgeless Multi-Chain DEX",id:"bridgeless-multi-chain-dex",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The NFT Chain Keys smart contract makes the ownership of remote accounts both provable and transferrable. This new paradigm allows you to create new end-user experiences that leverage provable and transferrable remote accounts as a core primitive."}),"\n",(0,a.jsx)(n.h2,{id:"contract-overview",children:"Contract overview"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/near/mpc-recovery",children:"MPC Account Recovery smart contract"})," provides a ",(0,a.jsx)(n.a,{href:"https://github.com/near/mpc-recovery#sign",children:(0,a.jsx)(n.code,{children:"sign"})})," method that accepts a ",(0,a.jsx)(n.code,{children:"path"})," parameter. This allows one predecessor account to have access to an effectively unlimited number of MPC keys."]}),"\n",(0,a.jsxs)(n.p,{children:["The NFT Chain Keys contract takes advantage of this property and allows secure transfers of MPC keys between users, using the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171 NFT contract standard"}),".\nThe contract also implements new functionality to enable chain key management features."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The essence of Multi-Party Computation (MPC) is to enable independent parties to perform shared computations on private information without revealing secrets to each other."})}),"\n",(0,a.jsx)(n.h3,{id:"standards",children:"Standards"}),"\n",(0,a.jsx)(n.p,{children:"Besides the NEP-171 contract standard, the NFT Chain Keys contract complies with a full suite of NEP standards:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"NEP-145: Storage Management"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171: NFT Core"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"NEP-177: Metadata"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"NEP-178: Approval Management"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP-181: Enumeration"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Please refer to the smart contract ",(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract/blob/master/nft_key/README.md",children:"GitHub documentation"})," for usage information:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#creating-new-key-tokens",children:"Creating new key tokens"}),": mint unlimited new NFT chain keys, as long as the account has sufficient storage."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#issuing-signatures",children:"Issuing signatures"}),": generate new signatures based on a submitted payload."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/multichain-gas-station-contract/tree/master/nft_key#approvals",children:"Approvals"}),": implement a separate set of approval management functions for using NFTs, which operate similarly to NEP-178."]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"use-cases-for-nft-keys",children:"Use Cases for NFT Keys"}),"\n",(0,a.jsx)(n.admonition,{title:"Disclaimer",type:"info",children:(0,a.jsx)(n.p,{children:"The ideas presented in this section are just initial concepts, and shouldn\u2019t be considered as fully fledged solutions."})}),"\n",(0,a.jsx)(n.h3,{id:"remote-account-marketplace",children:"Remote Account Marketplace"}),"\n",(0,a.jsxs)(n.p,{children:["NFT Keys enable users to buy, sell, and trade remote accounts within a marketplace-style application.\nFor instance, ",(0,a.jsx)(n.em,{children:"Alice"}),", possessing a set of remote accounts with value and history, can mint an NFT key and list these accounts for sale on the marketplace.\nPotential buyers, like ",(0,a.jsx)(n.em,{children:"Bob"}),", can browse the value of ",(0,a.jsx)(n.em,{children:"Alice\u2019s"})," accounts and choose to make a purchase.\nIf ",(0,a.jsx)(n.em,{children:"Bob"})," decides to proceed, they would simply need to acquire ownership of the original NFT key from ",(0,a.jsx)(n.em,{children:"Alice"})," in exchange for payment, such as in ",(0,a.jsx)(n.code,{children:"$NEAR"}),".\nOnce the transaction is completed, ownership of the accounts transfers to ",(0,a.jsx)(n.em,{children:"Bob"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"bridgeless-multi-chain-dex",children:"Bridgeless Multi-Chain DEX"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a Multi-chain DEX without bridging by combining Chain Signatures with NFT Keys.\nUsers wishing to swap asset ",(0,a.jsx)(n.code,{children:"$A"})," for asset ",(0,a.jsx)(n.code,{children:"$B"})," would initiate the swap on the bridgeless DEX.\nSupported by liquidity providers (Automated Market Makers) across multiple chains, the DEX facilitates these swaps.\nHere's how it works:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A user proposes the swap, specifying asset ",(0,a.jsx)(n.code,{children:"$A"})," in remote ",(0,a.jsx)(n.code,{children:"account X"})," for asset ",(0,a.jsx)(n.code,{children:"$B"})," in remote ",(0,a.jsx)(n.code,{children:"account Y"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The liquidity provider receives asset ",(0,a.jsx)(n.code,{children:"$A"})," from the user and sends the equivalent amount of asset ",(0,a.jsx)(n.code,{children:"$B"})," to a newly created remote ",(0,a.jsx)(n.code,{children:"account Y"}),", along with a minted NFT key."]}),"\n",(0,a.jsx)(n.li,{children:"The NFT key is then sent to the user to complete the swap."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Although liquidity providers still need to leverage bridging to settle assets between different pools, users of this exchange type are exposed to reduced bridge risk."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);