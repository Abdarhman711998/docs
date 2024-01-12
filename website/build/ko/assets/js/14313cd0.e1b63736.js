"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5534],{70921:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const i={id:"contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"},c="\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",l={id:"sdk/rust/contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",description:"\uc870\uc5b8 \ubc0f \uc608\uc2dc",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/ko/sdk/rust/contract-size",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",frontMatter:{id:"contract-size",title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"},sidebar:"tools",previous:{title:"\ubaa8\ubc94 \uc0ac\ub840",permalink:"/ko/sdk/rust/best-practices"},next:{title:"JavaScript SDK\uc5d0 \ub300\ud574",permalink:"/ko/sdk/js/introduction"}},o={},d=[{value:"\uc870\uc5b8 \ubc0f \uc608\uc2dc",id:"\uc870\uc5b8-\ubc0f-\uc608\uc2dc",level:2},{value:"\uc791\uc740 \uc2b9\ub9ac",id:"\uc791\uc740-\uc2b9\ub9ac",level:2},{value:"\ud50c\ub798\uadf8 \uc0ac\uc6a9",id:"\ud50c\ub798\uadf8-\uc0ac\uc6a9",level:3},{value:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c <code>rlib</code> \uc81c\uac70",id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c-rlib-\uc81c\uac70",level:3},{value:"\uc800\uc218\uc900 \uc811\uadfc \ubc29\uc2dd",id:"\uc800\uc218\uc900-\uc811\uadfc-\ubc29\uc2dd",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\ucee8\ud2b8\ub799\ud2b8-\ud06c\uae30-\ucd95\uc18c",children:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c"}),"\n",(0,r.jsx)(n.h2,{id:"\uc870\uc5b8-\ubc0f-\uc608\uc2dc",children:"\uc870\uc5b8 \ubc0f \uc608\uc2dc"}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \ucf54\ub4dc \uac00\ub3c5\uc131\uc744 \ud76c\uc0dd\ud558\uba74\uc11c \ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30\ub97c \ud06c\uac8c \uc904\uc774\ub824\ub294 \ud558\uc704 \uc218\uc900 \uac1c\ub150\uc5d0 \uc775\uc219\ud55c \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \uc811\uadfc \ubc29\uc2dd\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uc2dc\ub098\ub9ac\uc624\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uacc4\uc815 \uad00\ub9ac\uc640 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 \ucee8\ud2b8\ub799\ud2b8"}),"\n",(0,r.jsx)(n.li,{children:"\ud329\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8"}),"\n",(0,r.jsx)(n.li,{children:"NEAR\uc758 EVM\uacfc \uac19\uc740 \ud5a5\ud6c4 \ubc1c\uc804 \uc0ac\ud56d"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ucef4\ud30c\uc77c \uc2dc \ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30\uc5d0 \uc6d0\uce58 \uc54a\ub294 \ubc14\uc774\ud2b8\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4 \uc911 \uc77c\ubd80\ub294 \ub2e4\ub978 \uc811\uadfc \ubc29\uc2dd\uc73c\ub85c \ub354 \uc27d\uac8c \uad50\uccb4\ub420 \uc218 \uc788\ub294 \ubc18\uba74, \ub2e4\ub978 \uc77c\ubd80\ub294 \uc2dc\uc2a4\ud15c \ud638\ucd9c\uc5d0 \ub300\ud55c \ub354 \ub9ce\uc740 \ub0b4\ubd80 \uc9c0\uc2dd\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\uc791\uc740-\uc2b9\ub9ac",children:"\uc791\uc740 \uc2b9\ub9ac"}),"\n",(0,r.jsx)(n.h3,{id:"\ud50c\ub798\uadf8-\uc0ac\uc6a9",children:"\ud50c\ub798\uadf8 \uc0ac\uc6a9"}),"\n",(0,r.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \ub54c, ",(0,r.jsx)(n.code,{children:"-C link-arg=-s"})," \ud50c\ub798\uadf8\ub97c Rust \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 \ub300\ubd80\ubd84\uc758 \uc608\uc81c \ub0b4 ",(0,r.jsx)(n.code,{children:"Cargo.toml"}),"\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ub9e4\uac1c\ubcc0\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ub354 \uc791\uc740 \ubc14\uc774\ub108\ub9ac\ub97c \uc0dd\uc131\ud558\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574, ",(0,r.jsx)(n.code,{children:'opt-level = "z"'})," \ub300\uc2e0 ",(0,r.jsx)(n.code,{children:'opt-level = "s"'}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\ud5d8\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level",children:"Cargo Book Profiles"})," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc138\uc694. \uc774 ",(0,r.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed",children:".wasm \ud06c\uae30 \ucd95\uc18c"})," \uc790\ub8cc\ub97c \ucc38\uc870\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.h3,{id:"\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c-rlib-\uc81c\uac70",children:["\ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"rlib"})," \uc81c\uac70"]}),"\n",(0,r.jsxs)(n.p,{children:["\ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \ub9e4\ub2c8\ud398\uc2a4\ud2b8(",(0,r.jsx)(n.code,{children:"Cargo.toml"}),")\uc5d0 ",(0,r.jsx)(n.code,{children:"rlib"}),"\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc77c\ubd80 NEAR \uc608\uc81c\uc5d0\uc11c\ub294 \uc774\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.admonition,{title:"\ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00",type:"caution",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib", "rlib"]\n'})})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib"]\n'})})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Rust SDK\ub97c \uc0ac\uc6a9\ud560 \ub54c, \uae30\ubcf8 JSON \uc9c1\ub82c\ud654\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \ub300\uc2e0 ",(0,r.jsx)(n.a,{href:"https://borsh.io",children:"Borsh"}),"\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uacfc \uc608\uc81c\ub294 ",(0,r.jsx)(n.a,{href:"/ko/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default",children:"\uc774 \ud398\uc774\uc9c0"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,r.jsxs)(n.li,{children:["assertion \ub610\ub294 \uac00\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,r.jsx)(n.code,{children:"assert!"})}),", ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,r.jsx)(n.code,{children:"assert_eq!"})}),", \ub610\ub294 ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,r.jsx)(n.code,{children:"assert_ne!"})})," \uac19\uc740 \ud45c\uc900 ",(0,r.jsx)(n.code,{children:"assert"})," \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ub9c8\uc138\uc694. ",(0,r.jsx)(n.code,{children:"unwrap"}),", ",(0,r.jsx)(n.code,{children:"expect"}),", \uadf8\ub9ac\uace0 Rust\uc758 ",(0,r.jsx)(n.code,{children:"panic!()"})," \ub9e4\ud06c\ub85c\uc5d0\ub3c4 \uc720\uc0ac\ud55c \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud45c\uc900 assertion \uc608\uc2dc:"}),"\n",(0,r.jsx)(n.admonition,{title:"\ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00",type:"caution",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n'})})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n'})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expect"})," \uc81c\uac70 \uc608\uc2dc:"]}),"\n",(0,r.jsx)(n.admonition,{title:"\ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00",type:"caution",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n'})})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n'})})}),"\n",(0,r.jsxs)(n.p,{children:["\ud45c\uc900 ",(0,r.jsx)(n.code,{children:"panic!()"})," \ubcc0\uacbd \uc608\uc2dc:"]}),"\n",(0,r.jsx)(n.admonition,{title:"\ubd88\ud544\uc694\ud55c \ube14\ub86f \ucd94\uac00",type:"caution",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'panic!("ERR_MSG_HERE"); \n'})})}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'env::panic_str("ERR_MSG_HERE");  \n'})})}),"\n",(0,r.jsx)(n.h2,{id:"\uc800\uc218\uc900-\uc811\uadfc-\ubc29\uc2dd",children:"\uc800\uc218\uc900 \uc811\uadfc \ubc29\uc2dd"}),"\n",(0,r.jsxs)(n.p,{children:["\ucd5c\uc18c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c ",(0,r.jsx)(n.code,{children:"no_std"})," \uc811\uadfc \ubc29\uc2dd\uc740 \ub2e4\uc74c \uc608\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs",children:"\uc791\uc740 \ucee8\ud2b8\ub799\ud2b8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs",children:"NEAR ETH \uac8c\uc774\ud2b8\uc6e8\uc774"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://youtu.be/Hy4VBSCqnsE",children:"\uad00\ub828 Youtube \ube44\ub514\uc624"})," : \uc5ec\uae30\uc11c\ub294 Eugene\uc774 ",(0,r.jsx)(n.code,{children:"no_std"})," \ubaa8\ub4dc\uc5d0\uc11c\uc758 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud55c \ucf54\ub4dc \uc608\uc2dc\ub294 ",(0,r.jsx)(n.a,{href:"https://github.com/near/core-contracts/pull/88",children:"\uc5ec\uae30"}),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nesdie"})," \ud504\ub85c\uc81d\ud2b8 \uc0ac\uc6a9 \uc608\uc2dc"]}),"\n",(0,r.jsxs)(n.li,{children:["Aurora\ub294 ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/rjson",children:"rjson"}),"\uc744 \uac00\ubcbc\uc6b4 JSON \uc9c1\ub82c\ud654 \ud06c\ub808\uc774\ud2b8\ub85c \uc0ac\uc6a9\ud558\uc5ec \uc131\uacf5\uc744 \uac70\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud604\uc7ac Rust SDK\uc640 \ud568\uaed8 \ud328\ud0a4\uc9d5\ub41c ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/serde",children:"serde"}),"\ubcf4\ub2e4 \uc791\uc740 \uacf5\uac04\uc744 \ucc28\uc9c0\ud569\ub2c8\ub2e4. Aurora \ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0\uc11c ",(0,r.jsx)(n.a,{href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254",children:"rjson\uc758 \uc608\uc2dc"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694. \uad6c\ud604 \uc138\ubd80 \uc815\ubcf4\ub294 \ub3c5\uc790\uac00 \uc218\uc9d1\ud574\uc57c \ud558\uba70, \uc5ec\uae30\uc5d0\uc11c \uc124\uba85\ud558\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.a,{href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30",children:"\uc774 nesdie \uc608\uc81c"}),"\ub294 \ub610\ud55c ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/miniserde",children:"miniserde \ud06c\ub808\uc774\ud2b8"}),"\ub97c \uc0ac\uc6a9\ud558\uace0, \uc774\ub294 Rust SDK\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30\ub85c \uc120\ud0dd\ud55c \uc0ac\ub78c\ub4e4\uc774 \uace0\ub824\ud574\uc57c \ud560 \ub610 \ub2e4\ub978 \uc635\uc158\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"\uc2dc\uc2a4\ud15c \ud638\ucd9c\uc5d0 \ub300\ud55c \uc815\ubcf4",type:"note",children:(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["\ud3bc\uccd0\uc11c ",(0,r.jsx)("code",{children:"sys.rs"}),"\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud56d\ubaa9 \ubcf4\uae30"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(67294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);