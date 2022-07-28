"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[71530],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Access to an internal system (INTERNAL, FORMULA)"},i=void 0,s={unversionedId:"Access_to_an_internal_system_INTERNAL_FORMULA",id:"Access_to_an_internal_system_INTERNAL_FORMULA",title:"Access to an internal system (INTERNAL, FORMULA)",description:"Java interaction",source:"@site/docs/Access_to_an_internal_system_INTERNAL_FORMULA.md",sourceDirName:".",slug:"/Access_to_an_internal_system_INTERNAL_FORMULA",permalink:"/next/Access_to_an_internal_system_INTERNAL_FORMULA",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Access_to_an_internal_system_INTERNAL_FORMULA.md",tags:[],version:"current",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Access to an internal system (INTERNAL, FORMULA)"},sidebar:"learn",previous:{title:"Access to an external system (EXTERNAL)",permalink:"/next/Access_to_an_external_system_EXTERNAL"},next:{title:"Internal call (INTERNAL)",permalink:"/next/Internal_call_INTERNAL"}},c={},l=[{value:"Java interaction",id:"javato",level:3},{value:"SQL interaction",id:"sql-interaction",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"javato"},"Java interaction"),(0,a.kt)("p",null,"To implement this type of interaction, platform uses the ",(0,a.kt)("a",{parentName:"p",href:"/next/Internal_call_INTERNAL"},"internal call (",(0,a.kt)("inlineCode",{parentName:"a"},"INTERNAL"),")")," operator, which allows calling Java code inside the JVM lsFusion server."),(0,a.kt)("h3",{id:"sql-interaction"},"SQL interaction"),(0,a.kt)("p",null,"To implement this type of interaction, the platform uses the ",(0,a.kt)("a",{parentName:"p",href:"/next/Custom_formula_FORMULA"},"custom formula (",(0,a.kt)("inlineCode",{parentName:"a"},"FORMULA"),")")," operator, which allows accessing the objects/syntax constructs of the SQL server used by the developed lsFusion system."))}p.isMDXComponent=!0}}]);