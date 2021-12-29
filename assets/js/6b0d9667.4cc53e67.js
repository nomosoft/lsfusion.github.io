"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72448],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"Integration",sidebar_label:"Overview"},l=void 0,c={unversionedId:"Integration",id:"version-v4/Integration",title:"Integration",description:"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:",source:"@site/versioned_docs/version-v4/Integration.md",sourceDirName:".",slug:"/Integration",permalink:"/Integration",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Integration.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Integration",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Metaprogramming",permalink:"/Metaprogramming"},next:{title:"Access from an external system",permalink:"/Access_from_an_external_system"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access to the lsFusion system from another system."),(0,i.kt)("li",{parentName:"ol"},"Access from the lsFusion system to another system.")),(0,i.kt)("p",null,"In terms of the physical model, integration can be divided into:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Interaction with systems running in "the same environment" as the lsFusion system (that is, in the Java virtual machine (JVM) of the lsFusion server and/or using the same SQL server as the lsFusion system).'),(0,i.kt)("li",{parentName:"ol"},"Interaction with remote systems via network protocols.")),(0,i.kt)("p",null,"Accordingly, we will call the first systems ",(0,i.kt)("em",{parentName:"p"},"internal"),", and the second ",(0,i.kt)("em",{parentName:"p"},"external"),". In turn, interaction with internal systems using Java tools we will call ",(0,i.kt)("em",{parentName:"p"},"Java interaction"),", and using SQL tools \u2013 ",(0,i.kt)("em",{parentName:"p"},"SQL interaction"),"."),(0,i.kt)("p",null,"Thus, the platform has four different types of integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Access_from_an_external_system"},"Access from an external system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Access_from_an_internal_system"},"Access from an internal system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Access_to_an_external_system_EXTERNAL"},"Access to an external system (",(0,i.kt)("inlineCode",{parentName:"a"},"EXTERNAL"),")")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Access_to_an_internal_system_INTERNAL_FORMULA"},"Access to an internal system (",(0,i.kt)("inlineCode",{parentName:"a"},"INTERNAL"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"FORMULA"),")"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Additionally, it is worth noting that the ability to interact with internal systems can be used not only for purposes of integration but also for purposes of extensibility when platform capabilities are insufficient for some reason."))))}u.isMDXComponent=!0}}]);