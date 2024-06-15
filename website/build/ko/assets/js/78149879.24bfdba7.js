"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3786],{54223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(85893),a=n(11151),i=n(71183);const s={id:"unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)"},l=void 0,u={id:"build/smart-contracts/testing/unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)",description:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc62c\ubc14\ub974\uac8c \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uba54\uc11c\ub4dc\uac00 \uc608\uc0c1 \uac12\uc744 \ubc18\ud658\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc801\ud569\ud569\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc5b8\uc5b4\ub85c \uc791\uc131\ub418\uace0 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/testing/unit-test.md",sourceDirName:"2.build/2.smart-contracts/testing",slug:"/build/smart-contracts/testing/unit-test",permalink:"/ko/build/smart-contracts/testing/unit-test",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/testing/unit-test.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"unit-test",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)"},sidebar:"build",previous:{title:"\uc18c\uac1c",permalink:"/ko/build/smart-contracts/testing/introduction"},next:{title:"Integration Tests",permalink:"/ko/build/smart-contracts/testing/integration-test"}},o={},c=[{value:"\uc2a4\ub2c8\ud3ab I: Counter \ud14c\uc2a4\ud2b8",id:"\uc2a4\ub2c8\ud3ab-i-counter-\ud14c\uc2a4\ud2b8",level:2},{value:"Snippet II: Modifying the Context",id:"snippet-ii-modifying-the-context",level:2},{value:"\u26a0\ufe0f \uc81c\ud55c \uc0ac\ud56d",id:"\ufe0f-\uc81c\ud55c-\uc0ac\ud56d",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc62c\ubc14\ub974\uac8c \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uba54\uc11c\ub4dc\uac00 \uc608\uc0c1 \uac12\uc744 \ubc18\ud658\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc801\ud569\ud569\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc5b8\uc5b4\ub85c \uc791\uc131\ub418\uace0 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near-examples/docs-examples",children:"\uc608\uc81c"})," \uc911 \ud558\ub098\ub97c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud55c \uacbd\uc6b0, \ucee8\ud2b8\ub799\ud2b8 \ud3f4\ub354\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,r.jsx)(t.code,{children:"yarn test"}),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694. \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\uc5d0\uc11c \ud544\uc694\ud55c \ub178\ub4dc \ud30c\uc77c(\uc608: ",(0,r.jsx)(t.code,{children:"package.json"}),")\uc744 \ubcf5\uc0ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["\uac01 \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \ud3f4\ub354\uc5d0\uc11c ",(0,r.jsx)(t.code,{children:"yarn test"}),"\ub97c \uc2e4\ud589\ud558\uc5ec \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc640 ",(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/testing/integration-test",children:"\ud1b5\ud569"})," \ud14c\uc2a4\ud2b8\ub97c \ubaa8\ub450 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 :::"]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\uc2a4\ub2c8\ud3ab-i-counter-\ud14c\uc2a4\ud2b8",children:"\uc2a4\ub2c8\ud3ab I: Counter \ud14c\uc2a4\ud2b8"}),"\n",(0,r.jsxs)(t.p,{children:["The tests in the ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/counters",children:"Counter Example"})," rely on basic functions to check that the ",(0,r.jsx)(t.code,{children:"increment"}),", ",(0,r.jsx)(t.code,{children:"decrement"}),", and ",(0,r.jsx)(t.code,{children:"reset"})," methods work properly."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/counters/blob/main/contract-rs/src/lib.rs",start:"50",end:"71"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"snippet-ii-modifying-the-context",children:"Snippet II: Modifying the Context"}),"\n",(0,r.jsxs)(t.p,{children:["While doing unit testing you can modify the ",(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/environment",children:"Environment variables"})," through the ",(0,r.jsx)(t.code,{children:"VMContextBuilder"}),". \uc774\ub97c \ud1b5\ud574, \uc608\ub97c \ub4e4\uc5b4 \ubcf4\uc99d\uae08 \ubc0f \uac00\uc2a4\uac00 \ucca8\ubd80\ub41c \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc758 \ud638\ucd9c\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Here we present a snippet on how we test the ",(0,r.jsx)(t.code,{children:"donate"})," method from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/donation-examples",children:"Donation Example"})," by manipulating the ",(0,r.jsx)(t.code,{children:"predecessor"})," and ",(0,r.jsx)(t.code,{children:"attached_deposit"}),"."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"59",end:"117"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"\ufe0f-\uc81c\ud55c-\uc0ac\ud56d",children:"\u26a0\ufe0f \uc81c\ud55c \uc0ac\ud56d"}),"\n",(0,r.jsx)(t.p,{children:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ucf54\ub4dc \ubb34\uacb0\uc131\uc744 \ud655\uc778\ud558\uace0 \uaca9\ub9ac\ub41c \uba54\uc11c\ub4dc\uc5d0\uc11c \uae30\ubcf8\uc801\uc778 \uc624\ub958\ub97c \uac10\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc2e4\ud589\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uac10\uc9c0\ud560 \uc218 \uc5c6\ub294 \uac83\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/environment",children:"\uac00\uc2a4"})," \ubc0f ",(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/storage",children:"\uc2a4\ud1a0\ub9ac\uc9c0"})," \uc0ac\uc6a9\ub7c9 \ud14c\uc2a4\ud2b8"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/actions",children:"\uc804\uc1a1"})," \ud14c\uc2a4\ud2b8"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/crosscontract",children:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-contract Call)"})," \ud14c\uc2a4\ud2b8"]}),"\n",(0,r.jsx)(t.li,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud638 \uc791\uc6a9 \ud14c\uc2a4\ud2b8(\uc608: \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5ec\ub7ec \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc790\uae08\uc744 \uc608\uce58\ud558\ub294 \uacbd\uc6b0)"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\uc774\ub7ec\ud55c \ubaa8\ub4e0 \uacbd\uc6b0\uc5d0 \ub300\ud574\uc11c, ",(0,r.jsx)(t.a,{href:"/ko/build/smart-contracts/testing/integration-test",children:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8"}),"\ub85c \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c ",(0,r.jsx)(t.strong,{children:"\ubcf4\uc644"}),"\ud574\uc57c \ud569\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),u=n(91980),o=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,s=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),g=b[0],v=b[1],x=p({queryString:o,groupId:d}),j=x[0],y=x[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=k[0],I=k[1],S=function(){var e=null!=j?j:w;return m({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){S&&v(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,u=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==r&&(o(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,s=u.indexOf(e.currentTarget)-1;n=null!=(i=u[s])?i:u[u.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function k(e){var t=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>b,SQ:()=>f});var r=n(67294),a=n(74866),i=n(85162),s=n(74165),l=n(15861),u=n(1841),o=n.n(u),c=n(85893);function d(){return(d=(0,l.Z)((0,s.Z)().mark((function e(t,n,r){var a,i,l,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):l.length,l=l.slice(n,r),u=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(u)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,i=e.language,s=e.fname,l=e.metastring,u=(0,r.useState)("Loading..."),h=u[0],m=u[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return m(e)}))})),(0,c.jsxs)("div",{fname:s,children:[(0,c.jsx)(o(),{language:i,metastring:l+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(i.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===b)return b({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,c.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function b(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:r,language:a,fname:i,metastring:s})}}}]);