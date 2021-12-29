"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14438],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40291:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"How-to: WHILE"},d=void 0,u={unversionedId:"How-to_WHILE",id:"version-v4/How-to_WHILE",title:"How-to: WHILE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_WHILE.md",sourceDirName:".",slug:"/How-to_WHILE",permalink:"/How-to_WHILE",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_WHILE.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: WHILE"},sidebar:"version-v4/learn",previous:{title:"How-to: IF/CASE",permalink:"/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/How-to_NEWSESSION"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution-2",children:[],level:3}],level:2}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have an order for which a date is defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\ndate 'Date' = DATA DATE (Order);\n")),(0,a.kt)("p",null,"We need to display a message containing the number of orders for each date from a given interval."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\n\nmessageCountOrders 'Count the number of orders' (DATE dFrom, DATE dTo)  {\n    // Option 1\n    LOCAL date = DATE ();\n    date() <- dFrom;\n\n    WHILE date() <= dTo DO {\n        MESSAGE 'Number of orders for ' + date () + ' : ' + OVERRIDE countOrders(date()), 0.0;\n        date() <- sum(date(), 1);\n    }\n\n    // Option 2\n    FOR iterate(DATE date, dFrom, dTo) DO\n        MESSAGE 'Number of orders for ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\n}\n")),(0,a.kt)("p",null,"Both these options will provide the same result."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sum")," property defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," system ",(0,a.kt)("a",{parentName:"p",href:"/Modules"},"module")," is used to add one day to the given date."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),". We have also defined order lines, so that each line contains the (full) amount and the discount."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\ndiscountSum 'Discount amount' = DATA NUMERIC[14,2] (OrderDetail);\n")),(0,a.kt)("p",null,'We need to create an action that "distributes" given discount by line, starting from the line with the largest amount.'),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"distributeDiscount 'Distribute discount' (Order o, NUMERIC[14,2] discount)  {\n    LOCAL discount = NUMERIC[14,2] ();\n    discount() <- discount;\n\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\n\n    WHILE discount() > 0 DO {\n        // finding the row with the largest \"remaining\" amount\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { \n            discountSum(d) <- MIN leftSum(d), discount();\n            discount() <- discount() (-) discountSum(d);\n        }\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\n            BREAK; // nothing left to break down\n    }\n}\n")),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"The logic for changing the balance for the book is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nCLASS Ledger 'Change balance';\ndate 'Date' = DATA DATE (Ledger);\nbook 'Book' = DATA Book (Ledger);\nquantity 'Qty' = DATA NUMERIC[14,2] (Ledger);\n")),(0,a.kt)("p",null,"We need to create an action that will calculate the accumulated (integral) balance for a given time period."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"calculateIntegral (DATE dFrom, DATE dTo)  {\n    LOCAL date = DATE();\n    date() <- dFrom;\n\n    LOCAL balance = NUMERIC[14,2] (Book);\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\n\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\n\n    WHILE date() <= dTo DO {\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\n        date() <- sum(date(), 1);\n    }\n\n    FOR cumBalance(Book b) DO {\n        MESSAGE 'Accumulated balance for book ' + b + ' : ' + cumBalance(b);\n    }\n}\n")))}p.isMDXComponent=!0}}]);