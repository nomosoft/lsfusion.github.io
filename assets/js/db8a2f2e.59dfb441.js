"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79630],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54851:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"How-to: PARTITION"},l=void 0,i={unversionedId:"How-to_PARTITION",id:"How-to_PARTITION",title:"How-to: PARTITION",description:"Example 1",source:"@site/docs/How-to_PARTITION.md",sourceDirName:".",slug:"/How-to_PARTITION",permalink:"/next/How-to_PARTITION",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_PARTITION.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: PARTITION"},sidebar:"learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/next/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/next/How-to_GUI"}},u={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have an order with the lines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nCLASS OrderDetail 'Order line';\n\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n")),(0,a.kt)("p",null,"We need to number the lines starting from 1 as they are added to the order."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"index 'Line number' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n")),(0,a.kt)("p",null,"In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"We have a list of customer orders with specified dates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Order);\n\nCLASS Customer 'Customer';\ncustomer 'Customer' = DATA Customer (Order);\n")),(0,a.kt)("p",null,"For each order we need to find the date of the previous order placed by the same customer."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"prevOrderDate 'Previous order' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"/next/How-to_GROUP_CONCAT"},"How-to: ",(0,a.kt)("inlineCode",{parentName:"a"},"GROUP CONCAT")),", the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER"),"."),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"We have the current balance for books by batches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nCLASS Batch 'Batch';\nbook 'Book' = DATA Book (Batch);\ndate 'Arrival date' = DATA DATE (Batch);\n\nCLASS Stock 'Warehouse';\n// The balance is made data for the example. This is usually a calculated property.\ncurrentBalance 'Balance' = DATA INTEGER (Batch, Stock); \n")),(0,a.kt)("p",null,"We need to distribute the specified quantity for a specified book by batches according to the FIFO principle."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO 'Quantity by FIFO batch' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"STRICT")," parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch."))}d.isMDXComponent=!0}}]);