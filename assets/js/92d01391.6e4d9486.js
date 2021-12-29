"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94839],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"How-to: GROUP MAX/MIN/AGGR"},p=void 0,u={unversionedId:"How-to_GROUP_MAX_MIN_AGGR",id:"version-v4/How-to_GROUP_MAX_MIN_AGGR",title:"How-to: GROUP MAX/MIN/AGGR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_MAX_MIN_AGGR.md",sourceDirName:".",slug:"/How-to_GROUP_MAX_MIN_AGGR",permalink:"/How-to_GROUP_MAX_MIN_AGGR",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_GROUP_MAX_MIN_AGGR.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"How-to: GROUP MAX/MIN/AGGR"},sidebar:"version-v4/learn",previous:{title:"How-to: GROUP SUM",permalink:"/How-to_GROUP_SUM"},next:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/How-to_CASE_IF_OVERRIDE"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution-2",children:[],level:3}],level:2},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[],level:3},{value:"Solution",id:"solution-3",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have a set of books, where each book has a unique ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nid 'Number' = DATA INTEGER (Book);\n")),(0,a.kt)("p",null,"We need to find the maximum book ID."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"maxId 'Maximum number' () = GROUP MAX id(Book b);\n")),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,a.kt)("p",null,"We need to find a ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," object by book ID."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nbook1 'Book' (INTEGER i) = GROUP MAX Book b BY id(b);\n\n// Option 2\nbook2 'Book' (INTEGER i) = GROUP AGGR Book b BY id(b);\n")),(0,a.kt)("p",null,"The difference between Option 2 and Option 1 is that declaration of this property puts a ",(0,a.kt)("a",{parentName:"p",href:"/Constraints"},"constraint")," on the uniqueness of book IDs. Any attempt to add two or more books with the same ID will result in the error message."),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"We have a set of books, where each book is associated with a category and price."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[10,2] (Book);\n")),(0,a.kt)("p",null,"We need to calculate the minimum price per category."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"minPrice 'Maximum number' (Category c) = GROUP MIN price(Book b) BY category(b);\n")),(0,a.kt)("h2",{id:"example-4"},"Example 4"),(0,a.kt)("h3",{id:"task-3"},"Task"),(0,a.kt)("p",null,"We have a book shipment document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\nshipment 'Shipment' = DATA Shipment (ShipmentDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (ShipmentDetail);\n")),(0,a.kt)("p",null,"We need to find a line with a given shipment by shipment document and book."),(0,a.kt)("h3",{id:"solution-3"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"shipmentDetail 'Shipment line' (Shipment s, Book b) = GROUP MAX ShipmentDetail d BY shipment(d), book(d);\n")),(0,a.kt)("p",null,"You can use this property to implement the Search functionality when inputting a shipment document."))}m.isMDXComponent=!0}}]);