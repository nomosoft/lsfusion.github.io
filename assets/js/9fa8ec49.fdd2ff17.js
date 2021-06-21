(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61067],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(d,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"How-to: Data import"},l=void 0,d={unversionedId:"How-to_Data_import",id:"version-v4/How-to_Data_import",isDocsHomePage:!1,title:"How-to: Data import",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Data_import.md",sourceDirName:".",slug:"/How-to_Data_import",permalink:"/How-to_Data_import",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Data_import.md",version:"v4",lastUpdatedAt:1619790850,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"How-to: Data import"},sidebar:"version-v4/learn",previous:{title:"How-to: Data export",permalink:"/How-to_Data_export"},next:{title:"How-to: Interaction via HTTP protocol",permalink:"/How-to_Interaction_via_HTTP_protocol"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have the books for which names and prices are defined. The order logic is also defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Utils;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nid 'Code' = DATA STRING[20] (Book) IN id;\nbook 'Book' (STRING[20] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("p",null,"We need to create a button that loads the contents of the order from the Excel file selected by the user on their computer."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"importXlsx 'Import from XLS' (Order o)  {\n    INPUT f = EXCELFILE DO {\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT XLS FROM f TO bookId = A, quantity = B, price = C;\n\n        FOR imported(INTEGER i) NEW d = OrderDetail DO {\n            order(d) <- o;\n\n            book(d) <- book(bookId(i));\n            quantity(d) <- quantity(i);\n            price(d) <- price(i);\n        }\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) importXlsx\n;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/INPUT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INPUT")," operator")," which requests a file will display a dialog where the user will be able to choose an .xls or .xlsx file. Once the file is selected successfully, the system will call the ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," specified after ",(0,o.kt)("inlineCode",{parentName:"p"},"DO"),"."),(0,o.kt)("p",null,"It is assumed that a file consists of three columns. The first one ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," contains book codes, the second one ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," contains quantities, and the third one ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," contains prices. "),(0,o.kt)("p",null,"The  ",(0,o.kt)("a",{parentName:"p",href:"/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator")," reads the selected file and then writes its contents to local properties which take only one argument \u2014 line number. The numbering starts from 0. The ",(0,o.kt)("inlineCode",{parentName:"p"},"imported")," property will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," if the file contains a line with the corresponding number. Then, a corresponding line is created in the order for each of these lines."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),". In addition, we have specified a directory to which an external system puts orders. For each order, a separate CSV file is generated for storing the order date and number (in the denormalized form) along with the book code, quantity, and price."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"serverDirectory 'Directory on the server from which orders should be imported' = DATA STRING[100] ();\n\nEXTEND FORM orders PROPERTIES() serverDirectory;\n")),(0,o.kt)("p",null,"We need to implement an action that will import orders from this folder into the system."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"importOrders 'Import orders from directory' ()  {\n\n    listFiles('file://' + serverDirectory());\n\n    FOR ISTRING[255] f = fileName(INTEGER j) AND NOT fileIsDirectory(j) DO NEWSESSION {\n\n        LOCAL file = FILE ();\n        READ 'file://' + serverDirectory() + '/' + f TO file;\n\n        LOCAL date = DATE (INTEGER);\n        LOCAL number = STRING[10] (INTEGER);\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT CSV '|' NOHEADER CHARSET 'CP1251' FROM file() TO date, number, bookId, quantity, price;\n\n        NEW o = Order {\n            date(o) <- date(0);\n            number(o) <- number(0);\n\n            FOR imported(INTEGER i) NEW d = OrderDetail DO {\n                order(d) <- o;\n\n                book(d) <- book(bookId(i));\n                quantity(d) <- quantity(i);\n                price(d) <- price(i);\n            }\n        }\n\n        APPLY;\n        move('file://' + serverDirectory() + '/' + f, 'file://' + serverDirectory() + '/' + (IF canceled() THEN 'error/' ELSE 'success/') + f);\n    }\n}\n\nEXTEND FORM orders PROPERTIES() importOrders;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"listFiles")," action is declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Utils")," system ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module"),". The action scans the folder specified in the argument and reads all the files from it and writes their contents to the ",(0,o.kt)("inlineCode",{parentName:"p"},"fileName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fileIsDirectory")," properties."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/READ_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"READ")," operator")," reads the specified file and writes its contents to a local property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"FILE")," type which is then processed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"IMPORT")," operator. Its arguments specify that the file format is CSV without a title in the first line, with a vertical bar as separator, and with the CP1251 encoding."),(0,o.kt)("p",null,"It is assumed that dates and numbers in each line will have the same values. This is why their values are read from the first line with number 0."),(0,o.kt)("p",null,"Each file is processed in a separate new ",(0,o.kt)("a",{parentName:"p",href:"/Change_sessions"},"change session")," and then is saved using the ",(0,o.kt)("a",{parentName:"p",href:"/APPLY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"APPLY")," operator"),". This operator writes ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"canceled")," property when a certain ",(0,o.kt)("a",{parentName:"p",href:"/Constraints"},"constraint")," has been violated. Then, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MOVE")," statement of the ",(0,o.kt)("inlineCode",{parentName:"p"},"READ")," operator moves the file either to ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," folder or ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," folder. This allows us to call the action again without processing the same orders several times."),(0,o.kt)("p",null,"Since the result action has no arguments, we can add it to the scheduler for automatic launch at certain intervals."),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"An external database stores a book directory with their codes and names."),(0,o.kt)("p",null,"We need to create an action that will synchronize the book directory with this external database."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"importBooks 'Import books' ()  {\n    LOCAL file = FILE ();\n    READ 'jdbc:sqlserver://localhost;databaseName=books;User=import;Password=password@SELECT id, name FROM books' TO file;\n\n    LOCAL id = STRING[20] (INTEGER);\n    LOCAL name = ISTRING[100] (INTEGER);\n    IMPORT TABLE FROM file() TO id, name;\n\n    //creating new books\n    FOR id(INTEGER i) AND NOT book(id(i)) NEW b = Book DO {\n        id(b) <- id(i);\n    }\n\n    // changing values\n    FOR id(Book b) == id(INTEGER i) DO {\n        name(b) <- name(i);\n    }\n\n    // deleting books\n    DELETE Book b WHERE b IS Book AND NOT [ GROUP SUM 1 BY id(INTEGER i)](id(b));\n}\n")),(0,o.kt)("p",null,"Synchronization consists of the three main actions. First, we create books whose codes can be found in the external database, but not in our database. Then, we update the values for all books that can be found in our database. And finally, books that cannot be found in the external database are removed from our database."),(0,o.kt)("p",null,"This guarantees that when the action is started, the book directory will be absolutely identical to that in the external system. This scheme is useful when some master data is maintained in another system. The result action can be added to the scheduler and triggered at certain relatively small time intervals, thereby ensuring near real-time updates for the directory."),(0,o.kt)("h2",{id:"example-4"},"Example 4"),(0,o.kt)("h3",{id:"task-3"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"For each order line, we have added the decoding of this line by color and size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetailInfo 'Order line (transcript)';\n\ndetail = DATA OrderDetail (OrderDetailInfo) NONULL DELETE;\nsize = DATA STRING[100] (OrderDetailInfo);\ncolor = DATA STRING[100] (OrderDetailInfo);\nquantity = DATA INTEGER (OrderDetailInfo);\n\nEXTEND FORM order\n    OBJECTS i = OrderDetailInfo\n    PROPERTIES(i) size, color, quantity, NEW, DELETE\n    FILTERS detail(i) = d\n;\n")),(0,o.kt)("p",null,"We need to implement the import of orders from the JSON file of the specified structure. A JSON file may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "version":"v1",\n   "order":[\n      {\n         "date":"03.01.2018",\n         "number":"430",\n         "detail":[\n            {\n               "item":{\n                  "id":"132",\n                  "info":[\n                     {\n                        "size":"40",\n                        "color":"black",\n                        "quantity":2\n                     },\n                     {\n                        "size":"41",\n                        "color":"white",\n                        "quantity":3\n                     }\n                  ]\n               },\n               "price":1.99\n            },\n            {\n               "item":{\n                  "id":"136",\n                  "info":[\n                     {\n                        "size":"39",\n                        "color":"white",\n                        "quantity":4\n                     },\n                     {\n                        "size":"43",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":2.99\n            }\n         ]\n      },\n      {\n         "date":"04.01.2018",\n         "number":"435",\n         "detail":[\n            {\n               "item":{\n                  "id":"122",\n                  "info":[\n                     {\n                        "size":"L",\n                        "color":"black",\n                        "quantity":1\n                     },\n                     {\n                        "size":"XL",\n                        "color":"white",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":11.99\n            },\n            {\n               "item":{\n                  "id":"126",\n                  "info":[\n                     {\n                        "size":"S",\n                        "color":"white",\n                        "quantity":1\n                     },\n                     {\n                        "size":"M",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":12.99\n            }\n         ]\n      },\n   ]\n}\n')),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"version = DATA LOCAL STRING[100]();\n\nGROUP item;\nidItem = DATA LOCAL STRING[100] (OrderDetail);\n\nFORM importOrder\n    PROPERTIES() version\n\n    OBJECTS order = Order\n    PROPERTIES(order) date, number\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES(detail) IN item idItem EXTID 'id'\n    PROPERTIES(detail) price\n    FILTERS order(detail) = order\n\n    OBJECTS detailInfo = OrderDetailInfo IN item EXTID 'info'\n    PROPERTIES(detailInfo) size, color, quantity\n    FILTERS detail(detailInfo) = detail\n;\n\nimportOrderFromJSON 'Import from JSON' () {\n    INPUT f = FILE DO {\n        IMPORT importOrder JSON FROM f;\n        book(OrderDetail d) <- book(idItem(d)) WHERE idItem(d);\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() importOrderFromJSON DRAW o TOOLBAR\n;\n")),(0,o.kt)("p",null,"To implement the import process, we need to declare the form of the ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view"},"structure")," matching the structure of the JSON file."),(0,o.kt)("p",null,"We declare the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," tag at the upmost level without inputs and then add it to the form."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," tag is an array, we declare an object with the same name on the form. The platform will create a new object for each array element in the JSON. The ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," properties for the order will be automatically imported from the corresponding tags in the JSON."),(0,o.kt)("p",null,"Similarly, for the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail")," tag, we create an object with the same name and then link this object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," object using ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTERS"),". During the import process, the system will fill the link in the order line based on this filter and the nesting of tags."),(0,o.kt)("p",null,"To import values from tags nested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," tag, we create a new ",(0,o.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"group")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," and then place the properties and objects into it. In particular, the local property ",(0,o.kt)("inlineCode",{parentName:"p"},"idItem")," is created and then added to the form in this group. Since the property name does not match the tag name, we specify the corresponding name for the property on the form using the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID")," keyword."))}c.isMDXComponent=!0}}]);