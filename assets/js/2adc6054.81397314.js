(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93214],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91066:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"How-to: Table status"},l={unversionedId:"How-to_Table_status",id:"How-to_Table_status",isDocsHomePage:!1,title:"How-to: Table status",description:"Example 1",source:"@site/docs/How-to_Table_status.md",sourceDirName:".",slug:"/How-to_Table_status",permalink:"/next/How-to_Table_status",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Table_status.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"How-to: Table status"},sidebar:"learn",previous:{title:"How-to: Matrix",permalink:"/next/How-to_Matrix"},next:{title:"How-to: Reports",permalink:"/next/How-to_Reports"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],u={toc:s};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("h3",{id:"condition"},"Condition"),(0,i.kt)("p",null,"We have the concept of books, for which title, genre and price are defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\ngenre 'Genre' = DATA ISTRING[30] (Book) IN id;\n\nprice 'Price' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,i.kt)("p",null,"We need to display the number of books on the form, taking into account filters made by the user."),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"filtered 'Book filtered' (Book b) = FILTER books.b;\nfilteredCount 'Number of books' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n")),(0,i.kt)("p",null,"The solution uses the\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Filter_FILTER_"},"FILTER")," operator, which returns\xa0",(0,i.kt)("strong",{parentName:"p"},"TRUE")," if the object is included in the current filter on the form."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("h3",{id:"condition-1"},"Condition"),(0,i.kt)("p",null,"Similar to\xa0",(0,i.kt)("strong",{parentName:"p"},"Example 1"),"."),(0,i.kt)("p",null,"We need to display the serial number of the book in the table with books taking into account the current filter and order made by the user."),(0,i.kt)("h3",{id:"solution-1"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"index 'Order' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n")),(0,i.kt)("p",null,"The property with the current order, defined using the\xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Order_ORDER_"},"ORDER")," operator, is not declared as a separate named property but is used directly in the expression."),(0,i.kt)("p",null,"The form obtained in both examples, with user-defined filter and order, will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8268).Z})))}c.isMDXComponent=!0},8268:function(e,t,n){"use strict";t.Z=n.p+"assets/images/46367772-20ca778d576353ee95d7171002b5fda7.png"}}]);