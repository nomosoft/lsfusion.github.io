"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[18125],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91408:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={title:"Partitioning / sorting (PARTITION ... ORDER)"},a=void 0,c={unversionedId:"Partitioning_sorting_PARTITION_..._ORDER",id:"Partitioning_sorting_PARTITION_..._ORDER",title:"Partitioning / sorting (PARTITION ... ORDER)",description:"The partition/order operator creates a property that partitions all objects collections in the system into groups, and using the specified order calculates an aggregate function for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.",source:"@site/docs/Partitioning_sorting_PARTITION_..._ORDER.md",sourceDirName:".",slug:"/Partitioning_sorting_PARTITION_..._ORDER",permalink:"/next/Partitioning_sorting_PARTITION_..._ORDER",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Partitioning_sorting_PARTITION_..._ORDER.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Partitioning / sorting (PARTITION ... ORDER)"},sidebar:"learn",previous:{title:"Grouping (GROUP)",permalink:"/next/Grouping_GROUP"},next:{title:"Recursion (RECURSION)",permalink:"/next/Recursion_RECURSION"}},s={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"partition/order")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that partitions all objects collections in the system into ",(0,o.kt)("em",{parentName:"p"},"groups"),", and using the specified ",(0,o.kt)("em",{parentName:"p"},"order")," calculates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations#func"},"aggregate function")," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection. "),(0,o.kt)("p",null,"Groups in this operator are defined as a set of properties (",(0,o.kt)("em",{parentName:"p"},"groupings"),"), and the order is defined as a list of properties and a marker of increasing or decreasing. If the aggregation function is not ",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations#commutative"},"commutative"),", the order must be uniquely determined. "),(0,o.kt)("p",null,"Note that the partition/order operator is very similar to the ",(0,o.kt)("a",{parentName:"p",href:"/next/Grouping_GROUP"},"grouping operator"),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a property that implements partition/order, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/PARTITION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"PARTITION")," operator"),". "),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// determines the place of the team in the conference\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// finds the team next in the conference standings\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// proportional distribution example\nCLASS Order;\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// example of distribution with limits\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\ndiscountSum 'Discount by line' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}u.isMDXComponent=!0}}]);