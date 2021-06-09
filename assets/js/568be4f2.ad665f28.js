(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[41477],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86854:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"How-to: Events"},l={unversionedId:"How-to_Events",id:"How-to_Events",isDocsHomePage:!1,title:"How-to: Events",description:"Example 1",source:"@site/docs/How-to_Events.md",sourceDirName:".",slug:"/How-to_Events",permalink:"/next/How-to_Events",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Events.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: Events"},sidebar:"learn",previous:{title:"How-to: SEEK",permalink:"/next/How-to_SEEK"},next:{title:"How-to: Declarative logic",permalink:"/next/How-to_Declarative_logic"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],s={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nisClosed 'Closed' = DATA BOOLEAN (Order);\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n")),(0,o.kt)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nWHEN SET(date(Order o) < currentDate()) DO\n    isClosed(o) <- TRUE;\n\n// Option 2\nWHEN CHANGED(currentDate()) AND date(Order o) < currentDate() DO\n    isClosed(o) <- TRUE;\n")),(0,o.kt)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",(0,o.kt)("a",{parentName:"p",href:"/next/Change_operators_SET_CHANGED_etc"},(0,o.kt)("inlineCode",{parentName:"a"},"SET")," operator")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", but the order contains lines for the quantity, price and total."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[15,3] (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[16,2] (OrderDetail);\n")),(0,o.kt)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically recorded as the total amount."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL (CHANGED(quantity(OrderDetail d)) OR CHANGED(price(d)))\n            AND NOT CHANGED(sum(d)) DO {\n    sum(d) <- NUMERIC[16,2](quantity(d) * price(d));\n}\n")),(0,o.kt)("p",null,"Events of type ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL")," count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",(0,o.kt)("inlineCode",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will no longer take effect."),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-2"},(0,o.kt)("strong",{parentName:"a"},"Example 2")),", but a book is specified for the order line. Each book also has a default price."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, sum\n    FILTERS order(d) == o\n;\n")),(0,o.kt)("p",null,"We need to make sure that when the book is changed, the price is automatically appended to the order line. This event should only work on the order edit form."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL FORMS order SETCHANGED(book(OrderDetail d)) DO {\n    price(d) <- price(book(d));\n}\n")),(0,o.kt)("p",null,"In this case, the event will be triggered only when the book is changed or set. When a book is dropped, the price will not change."),(0,o.kt)("p",null,"Without the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMS")," block, this event would be triggered by any change to the order line book. For example, when an order was imported in any other form."),(0,o.kt)("h2",{id:"example-4"},"Example 4"),(0,o.kt)("h3",{id:"task-3"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"We need to organize logging of the deletion of orders"),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderLog 'Order deletion log';\ndate 'Order date' = DATA DATE (OrderLog);\nnumber 'Order number' = DATA INTEGER (OrderLog);\n\ndateTime 'Date' = DATA DATETIME (OrderLog);\nuser 'User' = DATA User (OrderLog);\n\nWHEN DROPPED(Order o IS Order) DO {\n    NEW l = OrderLog {\n        date(l) <- PREV(date(o));\n        number(l) <- PREV(number(o));\n\n        dateTime(l) <- currentDateTime();\n        user(l) <- currentUser();\n    }\n}\n")),(0,o.kt)("p",null,"When deleting an order and triggering an event with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DROPPED")," modifier, it is important to remember that the object no longer exists and all properties that take it as input will give ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values. Therefore, we need to access them not directly, but through the ",(0,o.kt)("inlineCode",{parentName:"p"},"PREV")," operator."))}c.isMDXComponent=!0}}]);