(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[49747],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23663:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Indexes"},l=void 0,p={unversionedId:"Indexes",id:"version-v4/Indexes",isDocsHomePage:!1,title:"Indexes",description:"Building an index by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system.",source:"@site/versioned_docs/version-v4/Indexes.md",sourceDirName:".",slug:"/Indexes",permalink:"/Indexes",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Indexes.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Indexes"},sidebar:"version-v4/learn",previous:{title:"Materializations",permalink:"/Materializations"},next:{title:"Tables",permalink:"/Tables"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Building an ",(0,o.kt)("em",{parentName:"p"},"index")," by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system."),(0,o.kt)("p",null,"Only ",(0,o.kt)("a",{parentName:"p",href:"/Materializations"},"materialized")," properties can be indexed."),(0,o.kt)("p",null,"An index can also be built on several properties at once (this is effective if, for example, you need to filter by several properties simultaneously). In addition, property parameters can be included in a composite index of this kind. The built index will be named as following: ",(0,o.kt)("inlineCode",{parentName:"p"},"<table ID>_<property/parameter name 1>_..._<property/parameter name N>"),". If the specified properties are stored in different ",(0,o.kt)("a",{parentName:"p",href:"/Tables"},"tables"),", then the corresponding error will be thrown when you try to build the index."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create indexes, you must use the ",(0,o.kt)("a",{parentName:"p",href:"/INDEX_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"INDEX")," statement")," or the ",(0,o.kt)("a",{parentName:"p",href:"/Property_options#indexed-broken"},(0,o.kt)("inlineCode",{parentName:"a"},"INDEXED")," option")," in property options."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n")))}c.isMDXComponent=!0}}]);