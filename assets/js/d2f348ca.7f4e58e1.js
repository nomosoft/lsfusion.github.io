(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82039],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2877:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Composition (JOIN)"},p=void 0,s={unversionedId:"Composition_JOIN",id:"version-v4/Composition_JOIN",isDocsHomePage:!1,title:"Composition (JOIN)",description:"The composition operator allows you to use values of other properties as arguments for one (main) property.",source:"@site/versioned_docs/version-v4/Composition_JOIN.md",sourceDirName:".",slug:"/Composition_JOIN",permalink:"/Composition_JOIN",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Composition_JOIN.md",version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Composition (JOIN)"},sidebar:"version-v4/learn",previous:{title:"Data properties (DATA)",permalink:"/Data_properties_DATA"},next:{title:"Constant",permalink:"/Constant"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The composition operator allows you to use values of other properties as ",(0,a.kt)("em",{parentName:"p"},"arguments")," for one (",(0,a.kt)("em",{parentName:"p"},"main"),") property."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To implement composition, use the ",(0,a.kt)("a",{parentName:"p",href:"/JOIN_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"JOIN")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\n// a similar property set using composition\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); \n")))}c.isMDXComponent=!0}}]);