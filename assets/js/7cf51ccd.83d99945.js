(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54438],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"BEFORE statement"},c=void 0,p={unversionedId:"BEFORE_statement",id:"version-v4/BEFORE_statement",isDocsHomePage:!1,title:"BEFORE statement",description:"The BEFORE statement calls an action before calling another action.",source:"@site/versioned_docs/version-v4/BEFORE_statement.md",sourceDirName:".",slug:"/BEFORE_statement",permalink:"/BEFORE_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/BEFORE_statement.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"BEFORE statement"},sidebar:"version-v4/learn",previous:{title:"INDEX statement",permalink:"/INDEX_statement"},next:{title:"AFTER statement",permalink:"/AFTER_statement"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE")," statement calls an ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"action")," before calling another action. "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BEFORE action(param1, ..., paramN) DO aspectAction;\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE")," statement defines an action (let's call it an ",(0,i.kt)("em",{parentName:"p"},"aspect"),") that will be called before the specified one."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"action")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"ID")," of the action before which the aspect will be called.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,i.kt)("p",{parentName:"li"},"  List of action parameter names. Each name is defined ",(0,i.kt)("a",{parentName:"p",href:"/IDs#id"},"by a simple ID"),". These parameters can be accessed while defining an aspect.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"aspectAction")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent action operator")," describing the aspect."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"changeName(Sku s, STRING[100] name)  { name(s) <- name; }\nBEFORE changeName(Sku s, STRING[100] name) DO MESSAGE 'Changing user name'; // The message will be shown before each call to changeName\n")))}m.isMDXComponent=!0}}]);