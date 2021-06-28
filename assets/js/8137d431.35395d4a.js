(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64049],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"How-to: Data export"},p=void 0,l={unversionedId:"How-to_Data_export",id:"version-v4/How-to_Data_export",isDocsHomePage:!1,title:"How-to: Data export",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Data_export.md",sourceDirName:".",slug:"/How-to_Data_export",permalink:"/How-to_Data_export",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Data_export.md",version:"v4",lastUpdatedAt:1623078033,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"How-to: Data export"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/How-to_Working_with_external_formats"},next:{title:"How-to: Data import",permalink:"/How-to_Data_import"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have sales orders for several books."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\naddress 'Address' = DATA ISTRING[50] (Customer) IN base;\n\nCLASS Currency 'Currency';\nname 'Name' = DATA ISTRING[50] (Currency) IN id;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ncurrency 'Currency' = DATA Currency (OrderDetail);\nnameCurrency 'Currency' (OrderDetail d) = name(currency(d));\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number, nameCustomer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, nameCurrency, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number, nameCustomer\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("p",null,"We need to create a button that exports the contents of the order in the XML format."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP Info;\nGROUP Customer : Info;\n\nGROUP Specification;\n\nGROUP price;\n\nFORM Order\n    PROPERTIES timeStamp = currentDateTime() ATTR\n\n    OBJECTS order = Order\n    PROPERTIES(order) IN Info date, number\n    PROPERTIES IN Customer nameCustomer(order) EXTID 'name', =address(customer(order)) EXTID 'address'\n\n    PROPERTIES IN Specification count = [GROUP SUM 1 BY order(OrderDetail d)](order) ATTR\n\n    OBJECTS Detail = OrderDetail IN Specification\n    PROPERTIES(Detail) nameBook, quantity,\n                       nameCurrency IN price EXTID 'currency' ATTR, price IN price EXTID 'value'\n    FILTERS order(Detail) = order\n;\n\nexportToXML 'Export to XML' (Order o) {\n    EXPORT Order OBJECTS order = o XML;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToXML TOOLBAR\n;\n")),(0,o.kt)("p",null,"To upload the data in the XML format, we need to create a form ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view"},"with the corresponding structure")," and then call the ",(0,o.kt)("a",{parentName:"p",href:"/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator"),". This operator will generate a file based on the form and then write the file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"exportFile")," property, which is then opened on the client side using the ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),' action. The file will be opened in the software associated with its extension (i. e. ".xml").'),(0,o.kt)("p",null,"The resulting XML will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>Customer2</name>\n         <address>Address2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>Book2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>Book1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n')),(0,o.kt)("p",null,"The parent tag ",(0,o.kt)("inlineCode",{parentName:"p"},"Order")," matches the name of the form. Names of all other tags are defined either by a property name on the form (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),") or by the special parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID")," (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"). Use of ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID")," is preferable when the form contains several properties with the same name, but for different objects."),(0,o.kt)("p",null,'To create "intermediate" tags (e. g. ',(0,o.kt)("inlineCode",{parentName:"p"},"Info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Customer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Specification"),"), the correspondingly nested groups are created to which the necessary properties are then exported."),(0,o.kt)("p",null,"Use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTR")," attribute allows you to put the value not in a separate tag, but in the attribute of a parent tag (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"timeStamp")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),")."),(0,o.kt)("p",null,"To put the currency attribute into the ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," tag, a group with the corresponding name is created, into which the ",(0,o.kt)("inlineCode",{parentName:"p"},"nameCurrency")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," properties are then added. Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTR")," attribute is specified for currency, the currency is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," tag as attribute. And for the price, the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTID 'value'")," is set and therefore the value is written directly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," tag. Without all these parameters, the result would be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<price><currency>USD</currency><price>4.99</price></price>\n")),(0,o.kt)("p",null,"If you have a target XML template into which you need to export data, then use the following rules."),(0,o.kt)("p",null,"Any tag in the resulting file is generated by one of four elements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Property")," (to be declared using ",(0,o.kt)("inlineCode",{parentName:"li"},"PROPERTIES"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Object")," (to be declared using ",(0,o.kt)("inlineCode",{parentName:"li"},"OBJECTS"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Property group")," (to be declared using ",(0,o.kt)("inlineCode",{parentName:"li"},"GROUP")," outside the form)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Form")," (the upper tag)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the tag repeats several times in a row (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Detail"),"), declare an ",(0,o.kt)("em",{parentName:"p"},"object")," with the matching name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a tag contains nested tags, but is used only once (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Specification"),"), then declare a ",(0,o.kt)("em",{parentName:"p"},"property group"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the tag contains attributes (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},'count = "2"'),"), then it must be generated either by a ",(0,o.kt)("em",{parentName:"p"},"property group")," or by an ",(0,o.kt)("em",{parentName:"p"},"object")," (depending on whether this tag is used once or more).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the tag contains a value, then such tag must be generated either by a ",(0,o.kt)("em",{parentName:"p"},"property")," (e. g. ",(0,o.kt)("inlineCode",{parentName:"p"},"nameBook")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"quantity"),') with the corresponding name or by an object/property group with the only "nested" property having ',(0,o.kt)("inlineCode",{parentName:"p"},"EXTID 'value'"),")."))),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"We need to create a button that exports the contents of the order in the JSON format."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"exportToJSON 'Export to JSON' (Order o) {\n    EXPORT Order OBJECTS order = o JSON;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToJSON TOOLBAR\n;\n")),(0,o.kt)("p",null,"The resulting file will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"Address 2",\n         "name":"Customer 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"Book 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"Book 1"\n         }\n      ]\n   }\n}\n')),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTR")," option is ignored when you export data in the JSON format."),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"We need to create a button that exports all the orders for a certain date in the CSV format."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"exportToCSV (DATE date) {\n    LOCAL file = FILE();\n    EXPORT CSV HEADER FROM number = number(order(OrderDetail d)),\n                    customer = nameCustomer(order(d)),\n                    book = nameBook(d),\n                    quantity(d),\n                    price(d)\n           WHERE date(order(d)) = date TO file;\n    WRITE CLIENT DIALOG file() TO 'orders';\n}\n\nFORM exportParameters 'Parameters'\n    OBJECTS d = DATE PANEL\n    PROPERTIES(d) 'Date' = VALUE\n;\nexportToCSV 'Export to CSV' () {\n    DIALOG exportParameters OBJECTS d INPUT DO\n        exportToCSV(d);\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV DRAW o TOOLBAR\n;\n")),(0,o.kt)("p",null,"The first action gets a date as input and then generates a flat CSV file with a semicolon delimiter using the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPORT")," operator. The file will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"number;customer;book;quantity;price\n14;Customer 1;Book 1;2;8.99\n12;Customer 2;Book 2;1;3.99\n12;Customer 2;Book 1;2;4.99\n")),(0,o.kt)("p",null,"The column name is overridden for the first three parameters, while the other two use the names of the corresponding properties. The result is first written to the local property ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),". Then the user is prompted to save the file from that property to his workstation. This is done using ",(0,o.kt)("a",{parentName:"p",href:"/WRITE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"),"."),(0,o.kt)("p",null,"The second action opens the form, asks the user to enter a date and then calls the first data export action."))}m.isMDXComponent=!0}}]);