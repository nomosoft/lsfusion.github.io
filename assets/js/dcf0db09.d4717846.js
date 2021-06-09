(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62739],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Loop (FOR)"},c={unversionedId:"Loop_FOR",id:"version-v4/Loop_FOR",isDocsHomePage:!1,title:"Loop (FOR)",description:"The loop operator creates an action that iterates all object collections for which the defined condition is met, and executes a defined action for each such object collection (let's call it the main one). You can also define an alternative action that will be executed only if no object collections have been found that meet the condition. The condition itself is defined as a certain property. Let's say that the condition is satisfied if the value of this property is not NULL.",source:"@site/versioned_docs/version-v4/Loop_FOR.md",sourceDirName:".",slug:"/Loop_FOR",permalink:"/Loop_FOR",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Loop_FOR.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Loop (FOR)"},sidebar:"version-v4/learn",previous:{title:"Call (EXEC)",permalink:"/Call_EXEC"},next:{title:"Branching (CASE, IF, MULTI)",permalink:"/Branching_CASE_IF_MULTI"}},s=[{value:"Adding an object",id:"addobject",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"loop")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that iterates all object collections for which the defined ",(0,a.kt)("em",{parentName:"p"},"condition")," is met, and executes a defined action for each such object collection (let's call it the ",(0,a.kt)("em",{parentName:"p"},"main one"),"). You can also define an ",(0,a.kt)("em",{parentName:"p"},"alternative action")," that will be executed only if no object collections have been found that meet the condition. The condition itself is defined as a certain ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"property"),". Let's say that the condition is ",(0,a.kt)("em",{parentName:"p"},"satisfied")," if the value of this property is not ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,a.kt)("p",null,"By default, object collections are iterated in arbitrary order. However, the developer can explicitly define this order, if necessary. To do this, you need to specify a list of properties with values in an ascending or descending order that will define the order of object iteration."),(0,a.kt)("p",null,"As for other ",(0,a.kt)("a",{parentName:"p",href:"/Set_operations"},"set operations"),", the condition must be such that the operation is ",(0,a.kt)("a",{parentName:"p",href:"/Set_operations#correct"},"correct"),"."),(0,a.kt)("h3",{id:"addobject"},"Adding an object"),(0,a.kt)("p",null,"This operator also allows you to create an object of a specified concrete ",(0,a.kt)("a",{parentName:"p",href:"/User_classes"},"custom class")," for each iterated object collection. This object can then be used in the main action as a parameter."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"The syntax of the loop operator is described by the ",(0,a.kt)("a",{parentName:"p",href:"/FOR_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"FOR")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n")))}p.isMDXComponent=!0}}]);