"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4013],{61460:(e,t,a)=>{a.d(t,{Z:()=>k});var s=a(63366),r=a(67294),i=a(36905),n=a(57682),l=a(87524),c=a(33692),o=a(95999),d=a(16550),u=a(48596);function m(e){var t=(0,d.TH)().pathname;return(0,r.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,u.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}const g={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var b=a(85893);function h(e){var t=e.sidebar,a=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,b.jsx)("li",{className:g.sidebarItem,children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=a(13102);function j(e){var t=m(e.sidebar.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,b.jsx)(v.Zo,{component:j,props:e})}function f(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(h,{sidebar:t}):null}var x=["sidebar","toc","children"];function k(e){var t=e.sidebar,a=e.toc,r=e.children,l=(0,s.Z)(e,x),c=t&&t.items.length>0;return(0,b.jsx)(n.Z,Object.assign({},l,{children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(f,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:r}),a&&(0,b.jsx)("div",{className:"col col--2",children:a})]})})}))}},91223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(67294);var s=a(36905),r=a(95999),i=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var n=a(71667),l=a(35281),c=a(61460),o=a(13008),d=a(92503);const u={tag:"tag_Nnez"};var m=a(85893);function g(e){var t=e.letterEntry;return(0,m.jsxs)("article",{children:[(0,m.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,m.jsx)("ul",{className:"padding--none",children:t.tags.map((function(e){return(0,m.jsx)("li",{className:u.tag,children:(0,m.jsx)(o.Z,Object.assign({},e))},e.permalink)}))}),(0,m.jsx)("hr",{})]})}function b(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],s=t[0];return a.localeCompare(s)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return(0,m.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,m.jsx)(g,{letterEntry:e},e.letter)}))})}var h=a(90197);function v(e){var t=e.tags,a=e.sidebar,r=i();return(0,m.jsxs)(n.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(n.d,{title:r}),(0,m.jsx)(h.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(c.Z,{sidebar:a,children:[(0,m.jsx)(d.Z,{as:"h1",children:r}),(0,m.jsx)(b,{tags:t})]})]})}},13008:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(36905),r=a(33692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(85893);function l(e){var t=e.permalink,a=e.label,l=e.count,c=e.description;return(0,n.jsxs)(r.Z,{href:t,title:c,className:(0,s.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,n.jsx)("span",{children:l})]})}}}]);