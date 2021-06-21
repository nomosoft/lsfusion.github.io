(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16419],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72723:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={title:"How-to: PARTITION"},i=void 0,c={unversionedId:"How-to_PARTITION",id:"version-v4/How-to_PARTITION",isDocsHomePage:!1,title:"How-to: PARTITION",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_PARTITION.md",sourceDirName:".",slug:"/How-to_PARTITION",permalink:"/How-to_PARTITION",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_PARTITION.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"How-to: PARTITION"},sidebar:"version-v4/learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/How-to_GROUP_CONCAT"},next:{title:"Overview",permalink:"/How-to_GUI"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have an order with the lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nCLASS OrderDetail 'Order line';\n\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n")),(0,o.kt)("p",null,"We need to number the lines starting from 1 as they are added to the order."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"index 'Line number' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n")),(0,o.kt)("p",null,"In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"We have a list of customer orders with specified dates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Order);\n\nCLASS Customer 'Customer';\ncustomer 'Customer' = DATA Customer (Order);\n")),(0,o.kt)("p",null,"For each order we need to find the date of the previous order placed by the same customer."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"prevOrderDate 'Previous order' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"/How-to_GROUP_CONCAT"},"How-to: ",(0,o.kt)("inlineCode",{parentName:"a"},"GROUP CONCAT")),", the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER"),"."),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"We have the current balance for books by batches."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nCLASS Batch 'Batch';\nbook 'Book' = DATA Book (Batch);\ndate 'Arrival date' = DATA DATE (Batch);\n\nCLASS Stock 'Warehouse';\ncurrentBalance 'Balance' = DATA INTEGER (Batch, Stock); // The balance is made data for the example. This is usually a calculated property.\n")),(0,o.kt)("p",null,"We need to distribute the specified quantity for a specified book by batches according to the FIFO principle."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO 'Quantity by FIFO batch' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"STRICT")," parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch."))}d.isMDXComponent=!0}}]);