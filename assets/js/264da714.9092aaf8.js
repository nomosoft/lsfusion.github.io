"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16019],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Set operations",sidebar_label:"Overview"},p=void 0,u={unversionedId:"Set_operations",id:"version-v4/Set_operations",title:"Set operations",description:"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more properties are not NULL. In the property logic such an operation is the calculation of various aggregate functions.",source:"@site/versioned_docs/version-v4/Set_operations.md",sourceDirName:".",slug:"/Set_operations",permalink:"/Set_operations",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Set_operations.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Set operations",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},next:{title:"Grouping (GROUP)",permalink:"/Grouping_GROUP"}},s=[{value:"Aggregate functions",id:"func",children:[],level:3},{value:"Operation correctness",id:"correct",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",(0,l.kt)("a",{parentName:"p",href:"/Properties"},"properties")," are not ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),". In the property logic such an operation is the calculation of various ",(0,l.kt)("em",{parentName:"p"},"aggregate functions"),". "),(0,l.kt)("h3",{id:"func"},"Aggregate functions"),(0,l.kt)("p",null,"An aggregate function calculates a certain ",(0,l.kt)("em",{parentName:"p"},"result")," as a single object on a set of object collections. This function is defined by the ",(0,l.kt)("em",{parentName:"p"},"initial value")," (typically ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"), ",(0,l.kt)("a",{parentName:"p",href:"/Properties"},"properties")," that it uses (",(0,l.kt)("em",{parentName:"p"},"operands"),"), ",(0,l.kt)("em",{parentName:"p"},"operation of addition")," to the ",(0,l.kt)("em",{parentName:"p"},"intermediate result")," of the current operand values, and ",(0,l.kt)("em",{parentName:"p"},"conversion function")," of the intermediate result to the final (typically the intermediate result is the final result)."),(0,l.kt)("a",{className:"lsdoc-anchor",id:"commutative"}),(0,l.kt)("p",null,"Aggregate function is ",(0,l.kt)("em",{parentName:"p"},"commutative")," if the order in which the object collections of the original set are iterated over does not matter when calculating the result. "),(0,l.kt)("p",null,"The table below shows the currently supported types of aggregate functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type/statement option"),(0,l.kt)("th",{parentName:"tr",align:null},"Initial value"),(0,l.kt)("th",{parentName:"tr",align:null},"Names of the operands"),(0,l.kt)("th",{parentName:"tr",align:null},"Add operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Conversion function"),(0,l.kt)("th",{parentName:"tr",align:null},"Commutativity"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = result (+) operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MAX")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = max(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"any comparable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MIN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = min(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"any comparable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CONCAT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"separator, operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = CONCAT separator, result, operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LAST")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"PREV")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"where, operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = IF where THEN operand ELSE result"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"any")))),(0,l.kt)("p",null,"From the perspective of determining the set of object collections and the result display method, four main operators for working with sets can be distinguished:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Grouping_GROUP"},"Group (",(0,l.kt)("inlineCode",{parentName:"a"},"GROUP"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Partitioning_sorting_PARTITION_..._ORDER"},"Partition/order (",(0,l.kt)("inlineCode",{parentName:"a"},"PARTITION ... ORDER"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Recursion_RECURSION"},"Recursion (",(0,l.kt)("inlineCode",{parentName:"a"},"RECURSION"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Distribution_UNGROUP"},"Distribution (",(0,l.kt)("inlineCode",{parentName:"a"},"UNGROUP"),")"))),(0,l.kt)("h3",{id:"correct"},"Operation correctness"),(0,l.kt)("p",null,"You should consider that during each operation on a set of object collections, this set must be finite. In this case, the operation is called ",(0,l.kt)("em",{parentName:"p"},"correct"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A;\nd = DATA INTEGER (A);\n\nf (b) = GROUP SUM 1 IF d(a) < b;\nmessageF  { MESSAGE f(5); } // will be executed successfully\n\ng = GROUP SUM f(b);\nmessageG  { MESSAGE g(); } // f(b) is not NULL for infinite number b, the platform will throw an error\n\nFORM f\n    OBJECTS d=DATE\n;\n\nprintFWithD { PRINT f OBJECTS d=currentDate(); } // will be executed successfully\n\n// there is no filter for dates, and d IS DATE is not NULL for an infinite number d, the platform will throw an error\nprintFWithoutD { PRINT f; } \n")),(0,l.kt)("p",null,"There are several non-trivial cases when the operation is correct but the platform cannot determine this. For example, if the only limiting condition for a parameter is whether it falls within the range:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"hs = GROUP SUM 1 IF (a AS INTEGER) >= 4 AND a <= 6;\n// theoretically, it should return 3, but the platform will still throw an error\nmessageHS  { MESSAGE hs(); } \n// workaround: to work with intervals, the iterate property can be used\n// (which, in turn, is implemented through recursion)\nhi = GROUP SUM 1 IF iterate(a, 4, 6); \n")))}m.isMDXComponent=!0}}]);