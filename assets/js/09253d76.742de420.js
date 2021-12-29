"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[85775],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"How-to: Filtering and ordering"},s=void 0,c={unversionedId:"How-to_Filtering_and_ordering",id:"version-v4/How-to_Filtering_and_ordering",title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Filtering_and_ordering.md",sourceDirName:".",slug:"/How-to_Filtering_and_ordering",permalink:"/How-to_Filtering_and_ordering",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Filtering_and_ordering.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: Filtering and ordering"},sidebar:"version-v4/learn",previous:{title:"How-to: Documents with lines",permalink:"/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/How-to_Design"}},u=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution-2",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"There are remaining books in stock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Stock 'Warehouse';\nname 'Name' = DATA ISTRING[100] (Stock);\n\n// for example it is made a data property, although usually it is calculated\nbalance 'Balance' = DATA INTEGER (Book, Stock); \n")),(0,a.kt)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM onStockObject 'Balances'\n    OBJECTS s = Stock PANEL\n    PROPERTIES(s) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES READONLY name(b), balance(b, s)\n    ORDERS name(b)\n\n    // Option 1\n    FILTERS balance(b, s)\n\n    // Option 2\n    FILTERGROUP bal\n        FILTER 'With positive balance' balance(b, s) > 0 'F10'\n        FILTER 'With negative balance' balance(b, s) < 0 'F9'\n        FILTER 'With balance' balance(b, s) 'F8' DEFAULT\n        FILTER 'No remainder' NOT balance (b, s) 'F7'\n;\n")),(0,a.kt)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT")," option is set)."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,a.kt)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"filterStock = DATA LOCAL Stock ();\nnameFilterStock 'Warehouse' = name(filterStock());\n\nFORM onStockLocal 'Balances'\n    PROPERTIES() nameFilterStock\n\n    OBJECTS sb = (s = Stock, b = Book)\n    PROPERTIES READONLY name(s), name(b), balance(b, s)\n    ORDERS name(s), name(b)\n\n    FILTERS s == filterStock() OR NOT filterStock()\n;\n")),(0,a.kt)("p",null,"In this case a warehouse cannot be declared via the ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"There is a list of orders for certain customers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n")),(0,a.kt)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"filterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nFORM orders 'Orders'\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY do = date, nameCustomer\n    ORDERS do DESC\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),(0,a.kt)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),(0,a.kt)("p",null,"Also, note that what is set in ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}p.isMDXComponent=!0}}]);