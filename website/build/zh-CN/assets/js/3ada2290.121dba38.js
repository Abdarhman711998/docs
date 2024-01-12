"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8907],{31332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(85893),r=n(11151),i=n(74866),s=n(85162);const l={id:"state",title:"State API",sidebar_label:"State"},o=void 0,c={id:"bos/api/state",title:"State API",description:"VM provides a convenient API to update the state of the component. There are two methods:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/bos/api/state.md",sourceDirName:"bos/api",slug:"/bos/api/state",permalink:"/zh-CN/bos/api/state",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/state.md",tags:[],version:"current",frontMatter:{id:"state",title:"State API",sidebar_label:"State"},sidebar:"integrate",previous:{title:"Introduction",permalink:"/zh-CN/bos/api/home"},next:{title:"Near",permalink:"/zh-CN/bos/api/near"}},d={},u=[{value:"State.init",id:"stateinit",level:2},{value:"<code>State.init()</code> Example",id:"stateinit-example",level:3},{value:"<code>State.init()</code> Implementation Details",id:"stateinit-implementation-details",level:3},{value:"State.update",id:"stateupdate",level:2},{value:"<code>State.update()</code> Example",id:"stateupdate-example",level:3},{value:"<code>State.update()</code> Implementation Details",id:"stateupdate-implementation-details",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"VM provides a convenient API to update the state of the component. There are two methods:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#stateinit",children:(0,a.jsx)(t.code,{children:"State.init"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#stateupdate",children:(0,a.jsx)(t.code,{children:"State.update"})})}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"Accessing the State from the Component UI",type:"note",children:[(0,a.jsxs)(t.p,{children:["You may access state variables from the component UI using the ",(0,a.jsx)(t.code,{children:"state"})," property of the ",(0,a.jsx)(t.code,{children:"widget"})," object. For example, if you have a state variable ",(0,a.jsx)(t.code,{children:"numVar"})," you can access it from the component UI using ",(0,a.jsx)(t.code,{children:"state.numVar"}),". Here's an example of accessing a variable ",(0,a.jsx)(t.code,{children:"profile"})," from the state and showing it conditionally on the component UI:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"return (\n  <div>\n  ...\n    {state.profile?.length > 0 && (\n      <div>\n        <p>Profiles:</p>\n        <ul>{state.profile}</ul>\n      </div>\n    )}\n  ...\n  </div>\n);\n"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"stateinit",children:"State.init"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"State.init"})," takes an object as an argument and initializes the state of the component with this object. It'll be no-op if the state is already initialized."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"param"}),(0,a.jsx)(t.th,{children:"required"}),(0,a.jsx)(t.th,{children:"type"}),(0,a.jsx)(t.th,{children:"description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"state"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"required"})}),(0,a.jsx)(t.td,{children:"object"}),(0,a.jsx)(t.td,{children:"an initial state object for the component"})]})})]}),"\n",(0,a.jsxs)(t.h3,{id:"stateinit-example",children:[(0,a.jsx)(t.code,{children:"State.init()"})," Example"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{value:"request",label:"Request",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const strVar = "Hello World!";\nState.init({\n  numVar: 0,\n  strVar\n});\n'})})}),(0,a.jsx)(s.Z,{value:"response",label:"Response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'{ numVar: 0, strVar: "Hello World!" }\n'})})})]}),"\n",(0,a.jsxs)(t.h3,{id:"stateinit-implementation-details",children:[(0,a.jsx)(t.code,{children:"State.init()"})," Implementation Details"]}),"\n",(0,a.jsxs)(t.p,{children:["The state object is both stored in the ",(0,a.jsx)(t.code,{children:"state"})," property of the component virtual machine and in the ",(0,a.jsx)(t.code,{children:"state"})," property of the react component. The state is initialized with the given object."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'reference title="VM.js"',children:"https://github.com/NearSocial/VM/blob/5b68433497272c23bf7d06a992c3209f3c97a2b5/src/lib/vm/vm.js#L754-L773\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"stateupdate",children:"State.update"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"State.update"})," will trigger the state update, and the component will be re-rendered. It also has an optional argument, the object that will be added to the ",(0,a.jsx)(t.code,{children:"state"})," object using ",(0,a.jsx)(t.code,{children:"Object.assign"}),". The state will be initialized with the given object if it's not initialized yet."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"param"}),(0,a.jsx)(t.th,{children:"required"}),(0,a.jsx)(t.th,{children:"type"}),(0,a.jsx)(t.th,{children:"description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"state"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"required"})}),(0,a.jsx)(t.td,{children:"object"}),(0,a.jsx)(t.td,{children:"the state"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"init"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:"optional"})}),(0,a.jsx)(t.td,{children:"object"}),(0,a.jsx)(t.td,{children:"an optional initial state object"})]})]})]}),"\n",(0,a.jsxs)(t.h3,{id:"stateupdate-example",children:[(0,a.jsx)(t.code,{children:"State.update()"})," Example"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{value:"request",label:"Request",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'State.update({\n  numVar: 1,\n  strVar: "Hello there!"\n});\n'})})}),(0,a.jsx)(s.Z,{value:"response",label:"Response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'{ numVar: 1, strVar: "Hello there!" }\n'})})})]}),"\n",(0,a.jsxs)(t.h3,{id:"stateupdate-implementation-details",children:[(0,a.jsx)(t.code,{children:"State.update()"})," Implementation Details"]}),"\n",(0,a.jsxs)(t.p,{children:["The state is stored in the ",(0,a.jsx)(t.code,{children:"state"})," property of the component. The state is initialized with an empty object ",(0,a.jsx)(t.code,{children:"{}"}),". ",(0,a.jsx)(t.code,{children:"Object.assign"})," is used to update the state."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'reference title="VM.js"',children:"https://github.com/NearSocial/VM/blob/5b68433497272c23bf7d06a992c3209f3c97a2b5/src/lib/vm/vm.js#L774-L786\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function j(e){var t,n,r,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,j=h(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:j})})),x=b[0],f=b[1],v=m({queryString:c,groupId:u}),g=v[0],y=v[1],S=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),V=S[0],w=S[1],I=function(){var e=null!=g?g:V;return p({value:e,tabValues:j})?e:null}();return(0,l.Z)((function(){I&&f(I)}),[I]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),w(e)}),[y,w,j]),tabValues:j}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),s(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;n=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=j(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,Object.assign({},e,t)),(0,f.jsx)(g,Object.assign({},e,t))]})}function S(e){var t=(0,b.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(67294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);