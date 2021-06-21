(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[92717],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79225:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),l={title:"How-to: GROUP SUM"},i=void 0,s={unversionedId:"How-to_GROUP_SUM",id:"version-v4/How-to_GROUP_SUM",isDocsHomePage:!1,title:"How-to: GROUP SUM",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_SUM.md",sourceDirName:".",slug:"/How-to_GROUP_SUM",permalink:"/How-to_GROUP_SUM",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_GROUP_SUM.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"How-to: GROUP SUM"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/How-to_GROUP_MAX_MIN_AGGR"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"We have a set of books associated with certain category."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n")),(0,r.kt)("p",null,"We need to calculate the number of books in the category."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book book);\n")),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("h3",{id:"task-1"},"Task"),(0,r.kt)("p",null,"We have a set of books associated with certain tags. Each book can be associated with several tags at the same time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Tag 'Tag';\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n")),(0,r.kt)("p",null,"We need to calculate the number of books in the tag."),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n")),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("h3",{id:"task-2"},"Task"),(0,r.kt)("p",null,"We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\n\nCLASS Ledger 'Movement';\nbook 'Book' = DATA Book (Ledger);\nstock 'Warehouse' = DATA Stock (Ledger);\n\nquantity 'Qty' = DATA INTEGER (Ledger);\nout 'Expenses' = DATA BOOLEAN (Ledger);\n")),(0,r.kt)("p",null,"We need to calculate the current balance for a book at the warehouse."),(0,r.kt)("h3",{id:"solution-2"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"TABLE bookStock (Book, Stock);\ncurrentBalance 'Current balance' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n")),(0,r.kt)("p",null,"It is recommended to mark the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentBalance")," property as ",(0,r.kt)("a",{parentName:"p",href:"/Materializations"},(0,r.kt)("inlineCode",{parentName:"a"},"MATERIALIZED")),", so that when reading the current balances, the system could take the calculated value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookStock")," table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster."),(0,r.kt)("p",null,"Note that you do not need to define explicitly in which table to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentBalance")," property, since the system will use the signature to find out the most suitable table for it (in this case, this will be ",(0,r.kt)("inlineCode",{parentName:"p"},"bookStock"),")."),(0,r.kt)("h2",{id:"example-4"},"Example 4"),(0,r.kt)("h3",{id:"task-3"},"Task"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#example-3"},(0,r.kt)("strong",{parentName:"a"},"Example 3")),", except that each movement is associated with the date of movement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Ledger) INDEXED; // it is better to add an index to filter by date quickly\n")),(0,r.kt)("p",null,"We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day)."),(0,r.kt)("h3",{id:"solution-3"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nbalance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// Option 2\nbalance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n")),(0,r.kt)("p",null,'The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.'),(0,r.kt)("h2",{id:"example-5"},"Example 5"),(0,r.kt)("h3",{id:"task-4"},"Task"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#example-3"},(0,r.kt)("strong",{parentName:"a"},"Example 3")),", except that we need to calculate the current balance for a given book across all the warehouses."),(0,r.kt)("h3",{id:"solution-4"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);\n")),(0,r.kt)("p",null,"Unlike the current balance for all the warehouses, it is not reasonable to mark this property as ",(0,r.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," if you have only few warehouses \u2014 otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously."))}p.isMDXComponent=!0}}]);