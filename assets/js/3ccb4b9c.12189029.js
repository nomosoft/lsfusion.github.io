(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[25086],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return E}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),E=r,d=m["".concat(s,".").concat(E)]||m[E]||p[E]||a;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31738:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),l={title:"How-to: SEEK"},i={unversionedId:"How-to_SEEK",id:"How-to_SEEK",isDocsHomePage:!1,title:"How-to: SEEK",description:"Example 1",source:"@site/docs/How-to_SEEK.md",sourceDirName:".",slug:"/How-to_SEEK",permalink:"/next/How-to_SEEK",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_SEEK.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: SEEK"},sidebar:"learn",previous:{title:"How-to: NEWSESSION",permalink:"/next/How-to_NEWSESSION"},next:{title:"How-to: Events",permalink:"/next/How-to_Events"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have a defined logic for books and categories. A form has been created with a list of books categorized."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) NONULL;\nnameCategory 'Category' (Book b) = name(category(b));\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, nameCategory\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS c = Category\n    PROPERTIES(c) READONLY name\n    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    FILTERS category(b) == c\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,a.kt)("p",null,"We need to create an action that creates a new book, automatically assigns it to the current category and then makes this book active once the user saves and closes the form."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"createBook 'Create book' (Category c)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            category(newBook) <- c;\n            DIALOG book OBJECTS b = newBook INPUT DO {\n                SEEK books.b = newBook;\n            }\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(c) createBook DRAW b TOOLBAR\n;\n")),(0,a.kt)("p",null,"After closing the form, we need to call the ",(0,a.kt)("a",{parentName:"p",href:"/next/SEEK_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"SEEK")," operator")," which will make the added object active."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),". We have also added the customer logic. The user can set a price for each customer and book in the dedicated form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Customer, Book);\n\nFORM prices 'Prices'\n    OBJECTS c = Customer PANEL\n    PROPERTIES(c) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(c, b)\n;\n\nNAVIGATOR {\n    NEW prices;\n}\n")),(0,a.kt)("p",null,"We need to add a default customer whose data will be populated when the user opens the form."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"defaultCustomer 'Default customer' = DATA Customer ();\nnameDefaultCustomer 'Default customer' () = name(defaultCustomer());\n\nEXTEND FORM options PROPERTIES() nameDefaultCustomer;\nDESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }\n\nEXTEND FORM prices\n    EVENTS ON INIT { SEEK prices.c = defaultCustomer(); }\n;\n")),(0,a.kt)("p",null,"The property with the default customer is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"'Settings'")," form on the ",(0,a.kt)("inlineCode",{parentName:"p"},"'General'")," tab. The current object will change once the user opens the form, since the ",(0,a.kt)("a",{parentName:"p",href:"/next/Event_block"},(0,a.kt)("inlineCode",{parentName:"a"},"ON INIT")," event")," will be triggered."),(0,a.kt)("h2",{id:"example-2-1"},"Example 2"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"Let's assume that we have a report form for which a date range is specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM report 'Report'\n    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL\n    PROPERTIES VALUE(dFrom), VALUE(dTo)\n;\n\nNAVIGATOR {\n    NEW report;\n}\n")),(0,a.kt)("p",null,"We need to create buttons that will modify the interval to the last week, current month or last month."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"setReportLastWeek 'Last week' ()  {\n    SEEK report.dFrom = subtract(currentDate(), 7);\n    SEEK report.dTo = subtract(currentDate(), 1);\n}\nsetReportCurrentMonth 'Current month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(currentDate());\n    SEEK report.dTo = lastDayOfMonth(currentDate());\n}\nsetReportLastMonth 'Last month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));\n    SEEK report.dTo = subtract(firstDayOfMonth(currentDate()), 1);\n}\n\nEXTEND FORM report\n    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth\n;\n")),(0,a.kt)("p",null,"Date properties can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," ",(0,a.kt)("a",{parentName:"p",href:"/next/Modules"},"system module")," which is loaded at the very beginning using the ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUIRE")," statement."))}u.isMDXComponent=!0}}]);