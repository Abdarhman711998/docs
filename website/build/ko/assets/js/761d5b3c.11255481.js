"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5662],{49116:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(85893),a=t(11151),s=t(77229);const i={id:"storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870"},o=void 0,l={id:"build/smart-contracts/anatomy/storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870",description:"\uac01 \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 \uace0\uc720\ud55c \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uac00 \uc788\uc73c\uba70, \uc774\ub294 \ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574\uc11c\ub9cc \uc218\uc815 \uac00\ub2a5\ud558\uc9c0\ub9cc \ub204\uad6c\ub098 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/storage.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/storage",permalink:"/ko/build/smart-contracts/anatomy/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/storage.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713353002e3,frontMatter:{id:"storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870"},sidebar:"build",previous:{title:"\ud658\uacbd",permalink:"/ko/build/smart-contracts/anatomy/environment"},next:{title:"\uc804\uc1a1 & Action",permalink:"/ko/build/smart-contracts/anatomy/actions"}},c={},u=[{value:":::info \ucee8\ud2b8\ub799\ud2b8\ub294 \uc794\uace0\uc758 \uc77c\ubd80\ub97c \uc7a0\uadf8\ub294 \ubc29\uc2dd\uc73c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud569\ub2c8\ub2e4. \ud604\uc7ac <strong>100KB</strong>\ub97c \uc800\uc7a5\ud558\ub294 \ub370 <strong>~1\u24c3</strong> \ub9cc\ud07c\uc758 \ube44\uc6a9\uc774 \ub4ed\ub2c8\ub2e4.",id:"info-\ucee8\ud2b8\ub799\ud2b8\ub294-\uc794\uace0\uc758-\uc77c\ubd80\ub97c-\uc7a0\uadf8\ub294-\ubc29\uc2dd\uc73c\ub85c-\uc2a4\ud1a0\ub9ac\uc9c0-\ube44\uc6a9\uc744-\uc9c0\ubd88\ud569\ub2c8\ub2e4-\ud604\uc7ac-100kb\ub97c-\uc800\uc7a5\ud558\ub294-\ub370-1\u24dd-\ub9cc\ud07c\uc758-\ube44\uc6a9\uc774-\ub4ed\ub2c8\ub2e4",level:2},{value:"\uc0c1\ud0dc\uc758 \uc815\uc758",id:"\uc0c1\ud0dc\uc758-\uc815\uc758",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Vector",id:"vector",level:3},{value:"Map",id:"map",level:3},{value:"Set",id:"set",level:3},{value:"Tree",id:"tree",level:3},{value:"Storage Cost",id:"storage-cost",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\uac01 \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 \uace0\uc720\ud55c \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uac00 \uc788\uc73c\uba70, \uc774\ub294 ",(0,n.jsx)(r.strong,{children:"\ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574\uc11c\ub9cc \uc218\uc815 \uac00\ub2a5"}),"\ud558\uc9c0\ub9cc ",(0,n.jsx)(r.a,{href:"/ko/tools/near-cli#near-view-state-near-view-state",children:"\ub204\uad6c\ub098 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c ",(0,n.jsx)(r.code,{children:"\ud0a4-\uac12"})," \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 SDK\uc5d0 \uc758\ud55c ",(0,n.jsx)(r.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"\uc9c1\ub82c\ud654"}),"\ub97c \ud1b5\ud574 \ucd94\uc0c1\ud654\ub429\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.h2,{id:"info-\ucee8\ud2b8\ub799\ud2b8\ub294-\uc794\uace0\uc758-\uc77c\ubd80\ub97c-\uc7a0\uadf8\ub294-\ubc29\uc2dd\uc73c\ub85c-\uc2a4\ud1a0\ub9ac\uc9c0-\ube44\uc6a9\uc744-\uc9c0\ubd88\ud569\ub2c8\ub2e4-\ud604\uc7ac-100kb\ub97c-\uc800\uc7a5\ud558\ub294-\ub370-1\u24dd-\ub9cc\ud07c\uc758-\ube44\uc6a9\uc774-\ub4ed\ub2c8\ub2e4",children:[":::info \ucee8\ud2b8\ub799\ud2b8\ub294 \uc794\uace0\uc758 \uc77c\ubd80\ub97c \uc7a0\uadf8\ub294 \ubc29\uc2dd\uc73c\ub85c ",(0,n.jsx)(r.a,{href:"#storage-cost",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88"}),"\ud569\ub2c8\ub2e4. \ud604\uc7ac ",(0,n.jsx)(r.strong,{children:"100KB"}),"\ub97c \uc800\uc7a5\ud558\ub294 \ub370 ",(0,n.jsx)(r.strong,{children:"~1\u24c3"})," \ub9cc\ud07c\uc758 \ube44\uc6a9\uc774 \ub4ed\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.h2,{id:"\uc0c1\ud0dc\uc758-\uc815\uc758",children:"\uc0c1\ud0dc\uc758 \uc815\uc758"}),"\n",(0,n.jsxs)(r.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc758 \uc0c1\ud0dc\ub294 ",(0,n.jsx)(r.a,{href:"/ko/build/smart-contracts/anatomy/#defining-the-contract",children:"\ud575\uc2ec \ud074\ub798\uc2a4 \uc18d\uc131"}),"\uc5d0 \uc758\ud574 \uc815\uc758\ub418\uba70, \uc774\ub97c \ud1b5\ud574 \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(r.p,{children:["\uc0c1\ud0dc\uc5d0\ub294 \uc0c1\uc218, \uae30\ubcf8 \uc790\ub8cc\ud615 \ubc0f \ubcf5\ud569 \uac1d\uccb4\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. SDK \uceec\ub809\uc158\uc740 ",(0,n.jsx)(r.a,{href:"/ko/build/smart-contracts/anatomy/serialization#borsh-state-serialization",children:"\uc9c1\ub82c\ud654\ub41c \ud0a4-\uac12 \uc2a4\ud1a0\ub9ac\uc9c0"}),"\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"6",end:"12"})}),(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"14",end:"24"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,n.jsxs)(r.p,{children:["The NEAR SDK exposes a series of structures (",(0,n.jsx)(r.a,{href:"#vector",children:"Vectors"}),", ",(0,n.jsx)(r.a,{href:"#set",children:"Sets"}),", ",(0,n.jsx)(r.a,{href:"#map",children:"Maps"})," and ",(0,n.jsx)(r.a,{href:"#tree",children:"Trees"}),")\nto simplify storing data in an efficient way."]}),"\n",(0,n.jsxs)(r.admonition,{title:"Instantiation",type:"info",children:[(0,n.jsxs)(r.p,{children:["All structures need to be initialized using a ",(0,n.jsxs)(r.strong,{children:["unique ",(0,n.jsx)(r.code,{children:"prefix"})]}),", which will be used to identify the structure's keys\nin the ",(0,n.jsx)(r.a,{href:"/ko/build/smart-contracts/anatomy/serialization#borsh-state-serialization",children:"serialized state"})]}),(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"38"})})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(r.h3,{id:"vector",children:"Vector"}),"\n",(0,n.jsxs)(r.p,{children:["Implements a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Array_data_structure",children:"vector/array"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"25",end:"28"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"vector.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/vector.rs",start:"12",end:"30"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(r.h3,{id:"map",children:"Map"}),"\n",(0,n.jsxs)(r.p,{children:["Implements a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Associative_array",children:"map/dictionary"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"33",end:"37"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"map.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/map.rs",start:"9",end:"24"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Nesting of Objects - Temporary Solution"}),(0,n.jsx)(r.p,{children:"In the JS SDK, you can store and retrieve elements from a nested map or object, but first you need to construct or deconstruct the structure from state. This is a temporary solution until the improvements have been implemented to the SDK. Here is an example of how to do this:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";\n\n@NearBindgen({})\nclass StatusMessage {\n  records: UnorderedMap;\n  constructor() {\n    this.records = new UnorderedMap("a");\n  }\n\n  @call({})\n  set_status({ message, prefix }: { message: string; prefix: string }) {\n    let account_id = near.signerAccountId();\n\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n\n    inner_map.set(account_id, message);\n\n    this.records.set("b" + prefix, inner_map);\n  }\n\n  @view({})\n  get_status({ account_id, prefix }: { account_id: string; prefix: string }) {\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n    return inner_map.get(account_id);\n  }\n}\n'})})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(r.h3,{id:"set",children:"Set"}),"\n",(0,n.jsxs)(r.p,{children:["Implements a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"set"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"42",end:"46"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"set.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/set.rs",start:"9",end:"16"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(r.h3,{id:"tree",children:"Tree"}),"\n",(0,n.jsxs)(r.p,{children:["An ordered equivalent of Map. The underlying implementation is based on an ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL"}),". You should use this structure when you need to: have a consistent order, or access the min/max keys."]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"tree.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/tree.rs",start:"9",end:"24"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"storage-cost",children:"Storage Cost"}),"\n",(0,n.jsx)(r.p,{children:"Your contract needs to lock a portion of their balance proportional to the amount of data they stored in the blockchain. This means that:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["If more data is added and the ",(0,n.jsx)(r.strong,{children:"storage increases \u2191"}),", then your contract's ",(0,n.jsx)(r.strong,{children:"balance decreases \u2193"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["If data is deleted and the ",(0,n.jsx)(r.strong,{children:"storage decreases \u2193"}),", then your contract's ",(0,n.jsx)(r.strong,{children:"balance increases \u2191"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Currently, it cost approximately ",(0,n.jsx)(r.strong,{children:"1 \u24c3"})," to store ",(0,n.jsx)(r.strong,{children:"100kb"})," of data."]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["You can save on smart contract storage if using NEAR Account IDs by encoding them using base32. Since they consist of ",(0,n.jsx)(r.code,{children:"[a-z.-_]"})," characters with a maximum length of 64 characters, they can be encoded using 5 bits per character, with terminal ",(0,n.jsx)(r.code,{children:"\\0"}),". Going to a size of 65 * 5 = 325 bits from the original (64 + 4) * 8 = 544 bits. This is a 40% reduction in storage costs."]})}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"An error will raise if your contract tries to increase its state while not having NEAR to cover for storage."})}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Be mindful of potential ",(0,n.jsx)(r.a,{href:"/ko/build/smart-contracts/security/storage",children:"small deposit attacks"})]})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var n=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var r=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function h(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function m(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId,s=(0,i.k6)(),o=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((function(e){if(o){var r=new URLSearchParams(s.location.search);r.set(o,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[o,s])]}function f(e){var r,t,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),x=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=x[0],g=x[1],j=p({queryString:c,groupId:d}),v=j[0],y=j[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(r),a=t[0],s=t[1],[a,(0,n.useCallback)((function(e){r&&s.set(e)}),[r,s])]),S=w[0],k=w[1],E=function(){var e=null!=v?v:S;return m({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var x=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){var r=e.className,t=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==n&&(c(r),i(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,a=l.indexOf(e.currentTarget)+1;t=null!=(n=l[a])?n:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(r=t)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map((function(e){var r=e.value,t=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function v(e){var r=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=s.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function y(e){var r=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,r)),(0,g.jsx)(v,Object.assign({},e,r))]})}function w(e){var r=(0,x.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},77229:(e,r,t)=>{t.d(r,{Ey:()=>u,O2:()=>l,SQ:()=>c});t(67294);var n=t(74866),a=t(85162),s=t(95665),i=t.n(s),o=t(85893);function l(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,o.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var r=e.children,t=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var t=e.props,n=(t.children,t.url),a=t.start,s=t.end,i=t.fname;if(e.type===u)return u({url:n,start:a,end:s,language:r,fname:i});return e}(e,t)})),1==r.length?(0,o.jsx)(a.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,o.jsx)(n.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,o.jsx)(a.Z,{value:r,label:e.props.fname,children:e})}))})}function u(e){var r=e.url,t=e.start,n=e.end,a=e.language,s=e.fname,l=r+"#";return t&&n&&(l+="L"+t+"-L"+n+"#"),(0,o.jsx)(i(),{language:a,fname:s,children:l})}}}]);