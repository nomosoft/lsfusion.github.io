(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4355],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98172:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Filter (FILTER)"},c={unversionedId:"Filter_FILTER",id:"Filter_FILTER",isDocsHomePage:!1,title:"Filter (FILTER)",description:"The filter operator creates a property that returns TRUE if the object collection matches the current filter of the specified object group, and NULL if it does not.",source:"@site/docs/Filter_FILTER.md",sourceDirName:".",slug:"/Filter_FILTER",permalink:"/next/Filter_FILTER",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Filter_FILTER.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Filter (FILTER)"},sidebar:"learn",previous:{title:"Search (SEEK)",permalink:"/next/Search_SEEK"},next:{title:"Order (ORDER)",permalink:"/next/Order_ORDER"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"filter")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that returns ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," if the object collection matches the current ",(0,a.kt)("a",{parentName:"p",href:"/next/Form_structure#filters"},"filter")," of the specified object group, and ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," if it does not."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property that determines matching the filter use the ",(0,a.kt)("a",{parentName:"p",href:"/next/Object_group_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"FILTER")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n")))}p.isMDXComponent=!0}}]);