"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43658],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"How-to: Design"},s=void 0,d={unversionedId:"How-to_Design",id:"How-to_Design",title:"How-to: Design",description:"Example 1",source:"@site/docs/How-to_Design.md",sourceDirName:".",slug:"/How-to_Design",permalink:"/next/How-to_Design",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Design.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: Design"},sidebar:"learn",previous:{title:"How-to: Filtering and ordering",permalink:"/next/How-to_Filtering_and_ordering"},next:{title:"How-to: Trees",permalink:"/next/How-to_Trees"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have a form with the list of orders, where each order is associated with a list of books and its posted payments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment 'Payment';\norder 'Order' = DATA Order (Payment) NONULL DELETE;\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,a.kt)("p",null,"We need to customize the design of the form, so that the lines and payments can be displayed on dedicated tabs which are separated from the list of orders using a vertical splitter."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    // adding a new container to the very beginning of the form\n    NEW orderList FIRST {\n        fill = 1; // marking that this container should \"stretch\" in the upper container\n        type = SPLITV; // vertical splitter - that is, there can only be 2 children\n        MOVE BOX(o); // the first container will be the list of orders\n        NEW orderDetails {\n            // Specifying that the specification will take up 2 times more space than the o.box container \n            // (for all such containers fill, by default, is 1)\n            fill = 2; \n            type = TABBED; // the container will be a tabbed panel\n            MOVE BOX(d) { // the first tab will be a list of rows with books\n                caption = 'Order content';\n            }\n            MOVE BOX(p) { // the second tab will be the list of payments\n                caption = 'Payments made';\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"The form will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9461).Z})),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),", except we have added filters by date and customer to the form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),(0,a.kt)("p",null,"We need to add filtering elements to the design of the previously created form."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    orderList {\n        // creating a new container and adding the first component to the vertical splitter\n        NEW orderHeader FIRST { \n            // it is necessary to make it \"stretched\" inside the orderList, as it will have a list of orders\n            fill = 1; \n            // by default, the type of the new container is CONTAINERV, that is, all the components in it are\n            // arranged from top to bottom creating a container in which all the components that are responsible \n            // for filtering will be placed\n            NEW filters { \n                caption = 'Filters';\n                // making it horizontal so that all components go from left to right\n                type = CONTAINERH; \n                MOVE PROPERTY(df) {\n                    caption = 'Date from';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = 'Date to';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            // moving the container with the order list to it, since there should be exactly two components\n            // in the splitter\n            MOVE BOX(o); \n        }\n    }\n}\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69458).Z})))}m.isMDXComponent=!0},9461:function(e,t,n){t.Z=n.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},69458:function(e,t,n){t.Z=n.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"}}]);