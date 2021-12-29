"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[81958],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46376:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],p={title:"Data properties (DATA)"},l=void 0,s={unversionedId:"Data_properties_DATA",id:"version-v4/Data_properties_DATA",title:"Data properties (DATA)",description:"Data property is a property which value is stored in the database and may change through the execution of the corresponding action. Each parameter and the value of a data property must belong to a certain specified class. If a parameter does not belong to the specified class or is NULL, then the property value will return NULL.",source:"@site/versioned_docs/version-v4/Data_properties_DATA.md",sourceDirName:".",slug:"/Data_properties_DATA",permalink:"/Data_properties_DATA",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Data_properties_DATA.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Data properties (DATA)"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/Property_operators_paradigm"},next:{title:"Composition (JOIN)",permalink:"/Composition_JOIN"}},c=[{value:"Local data properties",id:"local",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Data property")," is a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," which value is stored in the database and may change through the execution of the ",(0,o.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"corresponding")," action. Each parameter and the value of a data property must belong to a certain specified ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"class"),". If a parameter does not belong to the specified class or is ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", then the property value will return ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,o.kt)("h3",{id:"local"},"Local data properties"),(0,o.kt)("p",null,"Data properties can be ",(0,o.kt)("em",{parentName:"p"},"local"),". Such properties retain their values only within the ",(0,o.kt)("a",{parentName:"p",href:"/Change_sessions"},"session"),", i.e. they are not saved to the database, which means when applying changes these values are reset to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," by default."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a primary property, use the ",(0,o.kt)("a",{parentName:"p",href:"/DATA_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"DATA")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n")))}d.isMDXComponent=!0}}]);