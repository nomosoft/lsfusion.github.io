"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[41911],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Empty statement"},i=void 0,s={unversionedId:"Empty_statement",id:"Empty_statement",title:"Empty statement",description:"Empty statement - a special statement that consists of a single semicolon.",source:"@site/docs/Empty_statement.md",sourceDirName:".",slug:"/Empty_statement",permalink:"/next/Empty_statement",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Empty_statement.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Empty statement"},sidebar:"learn",previous:{title:"AFTER statement",permalink:"/next/AFTER_statement"},next:{title:"Coding conventions",permalink:"/next/Coding_conventions"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Empty statement")," - a special statement that consists of a single semicolon."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},";\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"An empty statement is intended to prevent extra semicolons from being diagnosed as an error. For example, statements in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different statements. "),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Result {\n    yes 'Yes',\n    no 'No'\n};  // semicolon is not needed here, but its presence is not an error\n\n;;;; // this is valid lsFusion code\n")))}u.isMDXComponent=!0}}]);