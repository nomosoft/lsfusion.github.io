"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24331],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"New object (NEW)"},s=void 0,l={unversionedId:"New_object_NEW",id:"New_object_NEW",title:"New object (NEW)",description:"The new object operator creates an action that creates objects of a specified custom class for object collections where the value of some property (condition) is not NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs/New_object_NEW.md",sourceDirName:".",slug:"/New_object_NEW",permalink:"/next/New_object_NEW",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/New_object_NEW.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"New object (NEW)"},sidebar:"learn",previous:{title:"Property change (CHANGE)",permalink:"/next/Property_change_CHANGE"},next:{title:"Class change (CHANGECLASS, DELETE)",permalink:"/next/Class_change_CHANGECLASS_DELETE"}},p=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"new object")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that creates objects of a specified ",(0,a.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom class")," for object collections where the value of some ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," (",(0,a.kt)("em",{parentName:"p"},"condition"),") is not ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),"."),(0,a.kt)("p",null,"This operator also allows you to set a ",(0,a.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"primary property"),", to whose values the added objects will be written. If no condition is specified, by default this property is considered to be ",(0,a.kt)("inlineCode",{parentName:"p"},"addedObject"),"."),(0,a.kt)("p",null,"The custom class whose objects will be created by this operator must be concrete."),(0,a.kt)("p",null,"You can also create objects using the corresponding ",(0,a.kt)("a",{parentName:"p",href:"/next/Loop_FOR#addobject"},"option")," in the ",(0,a.kt)("a",{parentName:"p",href:"/next/Loop_FOR"},"loop")," operator."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare an action that implements objects creation, use the ",(0,a.kt)("a",{parentName:"p",href:"/next/NEW_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEW")," operator"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW")," option in the ",(0,a.kt)("a",{parentName:"p",href:"/next/FOR_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"FOR")," operator")," is also used to implement similar functionality."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n")))}d.isMDXComponent=!0}}]);