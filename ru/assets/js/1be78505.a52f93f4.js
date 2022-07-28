"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29514,24608],{49068:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ce}});var a=n(67294),l=n(24608),r=n(37422),o=n(86010),c=n(95999),i=n(12466),s=n(85936);var d=n(35281),m="backToTopButton_RiI4",u="backToTopButtonShow_ssHd";function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,i.Ct)();return(0,i.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,s.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",d.k.common.backToTopButton,m,e&&u),type:"button",onClick:t})}var p=n(87524),h=n(86668),E=n(55537),f=n(83117);function v(e){return a.createElement("svg",(0,f.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var _="collapseSidebarButton_FykI",g="collapseSidebarButtonIcon_DTRl";function k(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",_),onClick:t},a.createElement(v,{className:g}))}var C=n(59689),I=n(902),N=n(53438),S=n(48596),Z=n(86043);const y=Symbol("EmptyContext"),T=a.createContext(y);function x(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(T.Provider,{value:r},t)}var L=n(39960),w=n(72389);function A(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:r,index:c,...i}=e;const{items:s,label:m,collapsible:u,className:b,href:p}=t,E=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,N.Wl)(e):void 0),[e,t])}(t),v=(0,N._F)(t,l),_=(0,S.Mg)(p,l),{collapsed:g,setCollapsed:k}=(0,Z.u)({initialState:()=>!!u&&(!v&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:l}=e;const r=(0,I.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:v,collapsed:g,setCollapsed:k});const{expandedItem:C,setExpandedItem:x}=function(){const e=(0,a.useContext)(T);if(e===y)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}();function F(e){void 0===e&&(e=!g),x(e?null:c),k(e)}const{docs:{sidebar:{autoCollapseCategories:M}}}=(0,h.L)();return(0,a.useEffect)((()=>{u&&C&&C!==c&&M&&k(!0)}),[u,C,c,k,M]),a.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},b)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(L.Z,(0,f.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!p&&u,"menu__link--active":v}),onClick:u?e=>{null==n||n(t),p?F(!1):(e.preventDefault(),F())}:()=>{null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":u?!g:void 0,href:u?null!=E?E:"#":E},i),m),p&&u&&a.createElement(A,{categoryLabel:m,onClick:e=>{e.preventDefault(),F()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(U,{items:s,tabIndex:g?-1:0,onItemClick:n,activePath:l,level:r+1})))}var M=n(13919),P=n(90541),H="menuExternalLink_KU1_";function B(e){let{item:t,onItemClick:n,activePath:l,level:r,index:c,...i}=e;const{href:s,label:m,className:u}=t,b=(0,N._F)(t,l),p=(0,M.Z)(s);return a.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:m},a.createElement(L.Z,(0,f.Z)({className:(0,o.Z)("menu__link",!p&&H,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},p&&{onClick:n?()=>n(t):void 0},i),m,!p&&a.createElement(P.Z,null)))}var D="menuHtmlItem_hP_2";function R(e){let{item:t,level:n,index:l}=e;const{value:r,defaultStyle:c,className:i}=t;return a.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(n),c&&D+" menu__list-item",i),key:l,dangerouslySetInnerHTML:{__html:r}})}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,f.Z)({item:t},n));case"html":return a.createElement(R,(0,f.Z)({item:t},n));default:return a.createElement(B,(0,f.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(x,null,t.map(((e,t)=>a.createElement(W,(0,f.Z)({key:t,item:e,index:t},n)))))}var U=(0,a.memo)(z),V="menu_izAj",Y="menuWithAnnouncementBar_l2a_";function q(e){let{path:t,sidebar:n,className:l}=e;const r=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",V,r&&Y,l)},a.createElement("ul",{className:(0,o.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}var K="sidebar_RiAD",Q="sidebarWithHideableNavbar_d0QC",j="sidebarHidden_Lg_2",X="sidebarLogo_YUvz";function G(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,h.L)();return a.createElement("div",{className:(0,o.Z)(K,c&&Q,r&&j)},c&&a.createElement(E.Z,{tabIndex:-1,className:X}),a.createElement(q,{path:t,sidebar:n}),i&&a.createElement(k,{onClick:l}))}var J=a.memo(G),O=n(72961),$=n(13102);const ee=e=>{let{sidebar:t,path:n}=e;const l=(0,O.e)();return a.createElement("ul",{className:(0,o.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function te(e){return a.createElement($.Zo,{component:ee,props:e})}var ne=a.memo(te);function ae(e){const t=(0,p.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(J,e),l&&a.createElement(ne,e))}var le=n(76775),re="expandButton__5cy",oe="expandButtonIcon_FlNX";function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(v,{className:oe}))}var ie="docSidebarContainer_UQUJ",se="docSidebarContainerHidden_f7XD",de=n(1116);function me(e){var t;let{children:n}=e;const l=(0,de.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:r}=(0,le.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),l((e=>!e))}),[l,c]);return a.createElement("aside",{className:(0,o.Z)(d.k.docs.docSidebarContainer,ie,n&&se),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie)&&n&&i(!0)}},a.createElement(me,null,a.createElement(ae,{sidebar:t,path:r,onCollapse:s,isHidden:c})),c&&a.createElement(ce,{toggleSidebar:s}))}var be={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,de.V)();return a.createElement("main",{className:(0,o.Z)(be.docMainContainer,(t||!l)&&be.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},n))}var he="docPage_ualW",Ee="docsWrapper_mKqt";function fe(e){let{children:t}=e;const n=(0,de.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(r.Z,{wrapperClassName:Ee},a.createElement(b,null),a.createElement("div",{className:he},n&&a.createElement(ue,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(pe,{hiddenSidebarContainer:l},t)))}var ve=n(43320),_e=n(10833),ge=n(74477),ke=n(14739);function Ce(e){const{versionMetadata:t}=e,n=(0,N.hI)(e);if(!n)return a.createElement(l.default,null);const{docElement:r,sidebarName:c,sidebarItems:i}=n;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,ve.os)(t.pluginId,t.version)}),a.createElement(_e.FG,{className:(0,o.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(ge.q,{version:t},a.createElement(de.b,{name:c,items:i},a.createElement(fe,null,r)))))}},24608:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(67294),l=n(37422),r=n(95999),o=n(10833);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return o}});var a=n(67294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);