"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62923],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83270:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"How-to: Matrix"},c=void 0,s={unversionedId:"How-to_Matrix",id:"How-to_Matrix",title:"How-to: Matrix",description:"Example 1",source:"@site/docs/How-to_Matrix.md",sourceDirName:".",slug:"/How-to_Matrix",permalink:"/next/How-to_Matrix",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Matrix.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: Matrix"},sidebar:"learn",previous:{title:"How-to: Navigator",permalink:"/next/How-to_Navigator"},next:{title:"How-to: Table status",permalink:"/next/How-to_Table_status"}},u=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution-2",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have the concepts of books and buyers defined. A price is defined for each book and buyer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\nCLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Book, Customer);\n")),(0,a.kt)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. Each cell should have a price for its book and buyer."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM prices 'Prices'\n    OBJECTS c = Customer\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(b, c) COLUMNS (c) HEADER name(c)\n;\n")),(0,a.kt)("p",null,"Object ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," will not be displayed on the form, since no properties have been added for it."),(0,a.kt)("p",null,"The form will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61359).Z})),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),", only there is a deferred payment period for each book and buyer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"gracePeriod 'Delay, days' = DATA INTEGER (Book, Customer);\n")),(0,a.kt)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. For each buyer, there will be two columns next to them: price and deferred payment period. We need to highlight columns with deferred payment information in yellow. It should be possible to choose which buyers to display in the columns."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA BOOLEAN (Customer);\n\nheaderName 'Price header' (Customer c) = name(c) + ': Price';\nheaderGrace 'Dealy header' (Customer c) = name(c) + ': Delay, days';\n\nFORM pricesAndGracePeriods 'Prices and delays'\n    OBJECTS s = Customer\n    PROPERTIES selected(s), name(s) READONLY\n\n    OBJECTS c = Customer\n    FILTERS selected(c)\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY,\n               price(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerName(c),\n               gracePeriod(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerGrace(c)\n;\n\nDESIGN pricesAndGracePeriods {\n    BOX(b) {\n        fill = 3;\n        PROPERTY(gracePeriod(b, c)) {\n            background = #FFFFAA;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Only objects that meet the filter condition for object ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," will be shown in the columns. Besides, the columns will be shown in the same order as the objects."),(0,a.kt)("p",null,"All properties with the same ID after the word ",(0,a.kt)("inlineCode",{parentName:"p"},"COLUMNS")," will go side by side for the same objects. In this case, the price and the deferred payment period for the first buyer, then the price and deferral for the second one, and so forth. If IDs were different or unspecified, prices for all buyers would have been shown first followed by deferred payment values."),(0,a.kt)("p",null,"The form will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53711).Z})),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"We need to create a form containing a matrix with a specified number of rows and columns. The user should be able to check each cell."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"in 'On' = DATA BOOLEAN (INTEGER, INTEGER);\n\nrow 'Row header' (INTEGER r) = 'Row ' + (r AS INTEGER);\ncolumn 'Column header' (INTEGER c) = 'Column ' + (c AS INTEGER);\n\nFORM matrix 'Matrix'\n    OBJECTS m = (rows = INTEGER, columns = INTEGER) PANEL\n    PROPERTIES rs = VALUE(rows), cs = VALUE(columns)\n\n    OBJECTS c = INTEGER\n    FILTERS iterate(c, 1, columns)\n\n    OBJECTS r = INTEGER\n    PROPERTIES(r) row\n    PROPERTIES in(r, c) COLUMNS (c) HEADER column(c)\n    FILTERS iterate(r, 1, rows)\n;\n\nDESIGN matrix {\n    PROPERTY(rs) { caption = 'Number of rows'; }\n    PROPERTY(cs) { caption = 'Number of columns'; }\n}\n")),(0,a.kt)("p",null,"In real projects, we recommend limiting the number of rows and columns during data entry or filtering. Otherwise, if the user enters too many rows or columns, the system will generate a CTE query for the ",(0,a.kt)("inlineCode",{parentName:"p"},"iterate")," property which, in turn, will produce a table containing entered (very big) number of records and that may cause the server database to crash."),(0,a.kt)("p",null,"Result:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18311).Z})))}p.isMDXComponent=!0},61359:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex1-20c502c1ad11f02d404b6f5b3e68ea18.png"},53711:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex2-9c8cdab1b451fede5fa58606076f3f52.png"},18311:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex3-4911fa19524c50949a0c169601f27c71.png"}}]);