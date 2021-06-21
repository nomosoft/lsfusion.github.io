(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[19619],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8463:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Install",sidebar_label:"Overview"},l=void 0,u={unversionedId:"Install",id:"version-v4/Install",isDocsHomePage:!1,title:"Install",description:"Automatic installation",source:"@site/versioned_docs/version-v4/Install.md",sourceDirName:".",slug:"/Install",permalink:"/Install",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Install.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Install",sidebar_label:"Overview"},sidebar:"version-v4/install",next:{title:"Overview",permalink:"/Automatic_installation"}},s=[{value:"Automatic installation",id:"automatic-installation",children:[]},{value:"Manual installation",id:"manual-installation",children:[]}],c={toc:s};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"automatic-installation"},"Automatic installation"),(0,i.kt)("p",null,"If you want to install the lsFusion platform and all of the additional applications it requires in one click, you can use special installers that will automate the process."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Development_auto"},"Development"),"  - contains instructions on installing and configuring the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Execution_auto"},"Execution")," - contains instructions on installing and configuring the environment needed to put the developed system into production.")),(0,i.kt)("h3",{id:"manual-installation"},"Manual installation"),(0,i.kt)("p",null,"If you prefer more customized configuration, already have IntelliJ IDEA and PostgreSQL installed, want to use other versions of additional applications or use Linux for development, you can use the lsFusion manual installation guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Development_manual"},"Development"),"  - contains instructions on installing and configuring the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Execution_manual"},"Execution")," - contains instructions on installing and configuring the environment needed to put the developed system into production.")))}p.isMDXComponent=!0}}]);