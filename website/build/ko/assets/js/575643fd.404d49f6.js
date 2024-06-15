"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[525],{91863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var i=t(85893),a=t(11151),o=t(74866),r=t(85162),s=t(2154);const c={id:"notifications",title:"Social Notifications"},l=void 0,u={id:"build/near-components/anatomy/notifications",title:"Social Notifications",description:"Applications such as NEAR Social and the NEAR Dev Portal allow components to send notifications to their users.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/3.near-components/anatomy/notifications.md",sourceDirName:"2.build/3.near-components/anatomy",slug:"/build/near-components/anatomy/notifications",permalink:"/ko/build/near-components/anatomy/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/3.near-components/anatomy/notifications.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"notifications",title:"Social Notifications"},sidebar:"build",previous:{title:"Social Interactions",permalink:"/ko/build/near-components/anatomy/social"},next:{title:"Handling Historical data",permalink:"/ko/build/near-components/anatomy/bos-components"}},d={},h=[{value:"Sending Notifications",id:"sending-notifications",level:2},{value:"Notification Types",id:"notification-types",level:2},{value:"Parsing Notifications",id:"parsing-notifications",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Applications such as ",(0,i.jsx)(n.a,{href:"https://near.social",children:"NEAR Social"})," and the ",(0,i.jsx)(n.a,{href:"https://dev.near.org/",children:"NEAR Dev Portal"})," allow components to send notifications to their users."]}),"\n",(0,i.jsxs)(n.p,{children:["Notifications are great to inform users in real time that something has happened, and can be ",(0,i.jsx)(n.a,{href:"../tutorial/push-notifications.md",children:"easily incorporated into any web app"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sending-notifications",children:"Sending Notifications"}),"\n",(0,i.jsxs)(n.p,{children:["Notifications are implemented as a particular case of ",(0,i.jsx)(n.a,{href:"/ko/build/near-components/anatomy/social#socialindex",children:"indexed actions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This means that to send a notification we just need to ",(0,i.jsx)(n.code,{children:"index"})," the ",(0,i.jsx)(n.code,{children:"notify"})," action for the indexer, with a ",(0,i.jsx)(n.code,{children:"key"})," and a ",(0,i.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"key"})," tells ",(0,i.jsx)(n.strong,{children:"which account"})," to notify."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"value"})," includes the ",(0,i.jsx)(n.a,{href:"#notification-types",children:"notification type"})," and the item being notified of."]}),"\n"]}),"\n",(0,i.jsx)(s.W,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const notifyMe = () => {\n  Social.set({\n    index: {\n      notify: JSON.stringify({\n        key: context.accountId,\n        value: "docs notification"\n      })\n    }\n  });\n}\n\nreturn <>\n  {context.accountId?\n  <button onClick={notifyMe}> Get Notification </button>\n  :\n  <p> Please login to be notified</p>\n  }\n</>\n'})})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the account executing the code is notifying ",(0,i.jsx)(n.code,{children:"mob.near"})," that they liked their social post created at the block height ",(0,i.jsx)(n.code,{children:"102169725"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notification-types",children:"Notification Types"}),"\n",(0,i.jsx)(n.p,{children:"Since notifications are indexed actions, anyone can create their own kind of notification."}),"\n",(0,i.jsx)(n.p,{children:"While there is no standard for notifications, we recommend using the following types:"}),"\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(r.Z,{value:"Custom",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'  Social.set({\n    index: JSON.stringify({\n      notify: {\n        key: "mob.near",\n        value: {\n          type: "custom",\n          message: "A message in the notification",\n          widget: "The widget to open when clicking on the notification",\n          params: { parameters: "to pass to the widget", ... },\n        },\n      }\n    })\n  });\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": currently, only dev.near.org implements custom notifications"]})]}),(0,i.jsxs)(r.Z,{value:"Like",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'  Social.set({\n    index: JSON.stringify({\n      notify: {\n        key: "mob.near",\n        value: {\n          type: "like",\n          item: {\n            type: "social",\n            path: "mob.near/post/main",\n            blockHeight: 102169725\n          }\n        }\n      }\n    })\n  })\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reference"}),": ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/LikeButton%5C&tab=source",children:"LikeButton"})]})]}),(0,i.jsxs)(r.Z,{value:"Comment",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'  Social.set({\n    index: JSON.stringify({\n      notify: {\n        key: "nearhacks.near",\n        value: {\n          type: "comment",\n          item: {\n            type: "social",\n            path: "nearhacks.near/post/main",\n            blockHeight: 102224773\n          }\n        }\n      }\n    })\n  })\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reference"}),": ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/Comments.Compose%5C&tab=source",children:"CommentButton"})]})]}),(0,i.jsxs)(r.Z,{value:"Follow",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'  Social.set({\n    index: JSON.stringify({\n      notify: {\n        key: "mob.near",\n        value: {\n          type: "follow",\n        }\n      }\n    })\n  })\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reference"}),": ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/FollowButton%5C&tab=source",children:"FollowButton"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["There is no standard for notifications, but you can contribute to create one ",(0,i.jsx)(n.a,{href:"https://github.com/NearSocial/standards/pull/19/files",children:"in this public discussion"}),"."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"parsing-notifications",children:"Parsing Notifications"}),"\n",(0,i.jsx)(n.p,{children:"In order to get all notifications for an user, we make a call to the Social indexer."}),"\n",(0,i.jsx)(s.W,{id:"1",height:"190px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// login to see your notifications\nconst accountId = context.accountId || \'influencer.testnet\'\n\nconst index = Social.index("notify", accountId, {limit: 2, order: "desc", subscribe: true});\n\nreturn <>\n  <h4> Notifications for {accountId} </h4>\n  {index.map(e => <> {JSON.stringify(e, null, 2)} <br/></>) }\n</>\n'})})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Please notice that anyone can create a notification for the user, and thus some form of filtering might be needed."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can also check how the ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/NotificationsPage%5C&tab=source",children:"Notifications Page"})," is implemented."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){var n=e.children,t=e.hidden,r=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(67294),a=t(36905),o=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,r.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:a});return[(0,c._X)(s),(0,i.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function m(e){var n,t,a,o,r=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,m=h(e),g=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:m})})),x=g[0],b=g[1],v=p({queryString:l,groupId:d}),j=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],o=t[1],[a,(0,i.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=w[0],k=w[1],S=function(){var e=null!=j?j:N;return f({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){S&&b(S)}),[S]),{selectedValue:x,selectValue:(0,i.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function v(e){var n=e.className,t=e.block,i=e.selectedValue,r=e.selectValue,s=e.tabValues,c=[],l=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(l(n),r(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var i,a=c.indexOf(e.currentTarget)+1;t=null!=(i=c[a])?i:c[0];break;case"ArrowLeft":var o,r=c.indexOf(e.currentTarget)-1;t=null!=(o=c[r])?o:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var r=o.find((function(e){return e.props.value===a}));return r?(0,i.cloneElement)(r,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(v,Object.assign({},n,e)),(0,b.jsx)(j,Object.assign({},n,e))]})}function w(e){var n=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},2154:(e,n,t)=>{t.d(n,{W:()=>s});var i=t(67294),a=t(93293),o=t(91262),r=t(85893);function s(e){var n=e.children,s=e.id,c=void 0===s?1:s,l=e.height,u=void 0===l?"160px":l;return(0,r.jsx)(o.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(x){}var o=t(58613),s=o.Widget,l=o.useInitNear,d=t(2302).ZP,h=(0,i.useState)(e),f=h[0],p=h[1],m=l().initNear,g=(0,a.O)().selector;return(0,i.useEffect)((function(){m&&g&&m({networkId:"testnet",selector:g})}),[m,g]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"monaco",children:(0,r.jsx)(d,{height:u,value:f,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return p(e)}})}),(0,r.jsx)("div",{className:"code_iframe",children:(0,r.jsx)("div",{className:"bootstrap-scope",children:(0,r.jsx)("div",{className:"vm-widget",children:(0,r.jsx)(s,{code:f},c)})})}),n[1]]})}})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);