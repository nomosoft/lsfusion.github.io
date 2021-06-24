(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17883],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32152:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"How-to: Interaction via HTTP protocol"},l={unversionedId:"How-to_Interaction_via_HTTP_protocol",id:"version-v4/How-to_Interaction_via_HTTP_protocol",isDocsHomePage:!1,title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Interaction_via_HTTP_protocol.md",sourceDirName:".",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/How-to_Interaction_via_HTTP_protocol",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Interaction_via_HTTP_protocol.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: Interaction via HTTP protocol"},sidebar:"version-v4/learn",previous:{title:"How-to: Data import",permalink:"/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/How-to_Frontend"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 6",id:"example-6",children:[{value:"Task",id:"task-5",children:[]},{value:"Solution",id:"solution-5",children:[]}]},{value:"Example 7",id:"example-7",children:[{value:"Task",id:"task-6",children:[]},{value:"Solution",id:"solution-6",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a certain set of cities associated with their countries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\nid 'Code' = DATA STRING[20] (Country) IN id;\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\ncountry (STRING[20] id) = GROUP AGGR Country c BY id(c);\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City) IN id;\n\ncountry 'Country' = DATA Country (City);\nnameCountry 'Country' (City c) = name(country(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n")),(0,o.kt)("p",null,"We need to send an HTTP request for adding a city in the JSON format to a certain url."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"postCity 'Send' (City c)  {\n    EXPORT JSON FROM countryId = id(country(c)), name = name(c);\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.createCity' PARAMS exportFile() TO result;\n\n    LOCAL code = STRING[10]();\n    LOCAL message = STRING[100]();\n    IMPORT JSON FROM result() TO() code, message;\n    IF NOT code() == '0' THEN {\n        MESSAGE 'Error: ' + message();\n    }\n}\n\nEXTEND FORM cities\n    PROPERTIES(c) postCity\n;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/Data_export_EXPORT"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator")," will create a JSON in the ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes"},(0,o.kt)("inlineCode",{parentName:"a"},"FILE"))," format and then will write it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"exportFile")," property. Here is an example of the generated file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"countryId":"123","name":"San Francisco"}\n')),(0,o.kt)("p",null,"Then we call the ",(0,o.kt)("a",{parentName:"p",href:"/Access_to_an_external_system_EXTERNAL"},(0,o.kt)("inlineCode",{parentName:"a"},"EXTERNAL")," operator"),", which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," block has the type JSON, ",(0,o.kt)("em",{parentName:"p"},"application/json")," will be used as the content type. ",(0,o.kt)("inlineCode",{parentName:"p"},"<namespace>.<property name>")," is encoded in the url. In this case, the namespace of the action being called ",(0,o.kt)("inlineCode",{parentName:"p"},"createCity")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Location"),". All parameters are passed consequently with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),". The response from the server will be written to the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," property. Suppose that the response is received in the JSON format and has one of the following types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"code":"0","message":"OK"}\n\n{"code":"1","message":"Invalid country code"}\n')),(0,o.kt)("p",null,"The response is handled by the ",(0,o.kt)("a",{parentName:"p",href:"/Data_import_IMPORT"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator")," which parses the corresponding parameters into the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," properties respectively. If any error occurs, the user will see a corresponding error message."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),". "),(0,o.kt)("p",null,"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"createCity (FILE f)  {\n\n    LOCAL cy = STRING[20] ();\n    LOCAL ne = STRING[100] ();\n\n    IMPORT JSON FROM f AS FILE TO() cy = countryId, ne = name;\n\n    IF NOT country(cy()) THEN {\n        EXPORT JSON FROM code = '1', message = 'Invalid country code';\n        RETURN;\n    }\n\n    NEW c = City {\n        name(c) <- ne();\n        country(c) <- country(cy());\n\n        APPLY;\n    }\n\n    EXPORT JSON FROM code = '0', message = 'OK';\n}\n")),(0,o.kt)("p",null,"Since the property is named ",(0,o.kt)("inlineCode",{parentName:"p"},"createCity")," and located in the ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module")," with the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"Location"),", the url on which the request will be handled looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:7651/exec?action=Location.createCity\n")),(0,o.kt)("p",null,"Body of the HTTP request will be passed as a parameter of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"FILE"),". The values read from the ",(0,o.kt)("inlineCode",{parentName:"p"},"countryId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," parameters are written to the local properties ",(0,o.kt)("inlineCode",{parentName:"p"},"cy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ne")," respectively."),(0,o.kt)("p",null,"If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",(0,o.kt)("a",{parentName:"p",href:"/Exit_RETURN"},(0,o.kt)("inlineCode",{parentName:"a"},"RETURN")," operator")," is called to abort execution. By default, the response message value is also stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"exportFile")," property."),(0,o.kt)("p",null,'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"We have the logic of book orders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nid 'Code' = DATA STRING[10] (Book) IN id;\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nbook (STRING[10] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS i = Order\n    PROPERTIES(i) READONLY date, number\n    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("p",null,"We need to send an HTTP request for creating a new order in the JSON format to a certain url."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportOrder\n    OBJECTS order = Order PANEL\n    PROPERTIES dt = date(order), nm = number(order)\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == order\n;\n\nexportOrder 'Send' (Order o)  {\n    EXPORT exportOrder OBJECTS order = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrder' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrder;\n;\n")),(0,o.kt)("p",null,"To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTERS")," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "dt":"20.08.18",\n   "nm":"1",\n   "detail":[\n      {\n         "pr":5.99,\n         "id":"b1",\n         "qn":3\n      },\n      {\n         "pr":6.99,\n         "id":"b2",\n         "qn":2\n      }\n   ]\n}\n')),(0,o.kt)("p",null,"We do not create a custom tag for ",(0,o.kt)("inlineCode",{parentName:"p"},"order"),", since the object value is passed as an argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPORT")," operator.",(0,o.kt)("br",{parentName:"p"}),"\n","In this example, the response to the HTTP request is ignored."),(0,o.kt)("h2",{id:"example-4"},"Example 4"),(0,o.kt)("h3",{id:"task-3"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-3"},(0,o.kt)("strong",{parentName:"a"},"Example 3")),". "),(0,o.kt)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"date = DATA LOCAL DATE();\nnumber = DATA LOCAL STRING[10]();\n\nid = DATA LOCAL STRING[10] (INTEGER);\nquantity = DATA LOCAL INTEGER (INTEGER);\nprice = DATA LOCAL NUMERIC[14,2] (INTEGER);\nFORM importOrder\n    PROPERTIES dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrder (FILE f)  {\n    IMPORT importOrder JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n")),(0,o.kt)("p",null,"To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the ",(0,o.kt)("inlineCode",{parentName:"p"},"INTEGER")," type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," properties have no parameters, since their values in JSON are provided at the topmost level."),(0,o.kt)("h2",{id:"example-5"},"Example 5"),(0,o.kt)("h3",{id:"task-4"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-4"},(0,o.kt)("strong",{parentName:"a"},"Example 4")),". "),(0,o.kt)("p",null,"We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," tag."),(0,o.kt)("h3",{id:"solution-4"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP order;\nFORM exportOrderNew\n    OBJECTS o = Order\n    PROPERTIES IN order dt = date(o), nm = number(o)\n\n    OBJECTS detail = OrderDetail IN order\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == o\n;\n\nexportOrderNew 'Send (new)' (Order o)  {\n    EXPORT exportOrderNew OBJECTS o = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrderNew' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrderNew;\n;\n")),(0,o.kt)("p",null,"Unlike the previous example, here we create a property ",(0,o.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"group")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," using the ",(0,o.kt)("a",{parentName:"p",href:"/GROUP_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"GROUP")," operator"),". When declaring a form, we put all the properties of the purchase order as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail")," object into this property group. The result JSON will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "order":{\n      "dt":"20.08.18",\n      "nm":"1",\n      "detail":[\n         {\n            "pr":5.99,\n            "id":"b1",\n            "qn":3\n         },\n         {\n            "pr":6.99,\n            "id":"b2",\n            "qn":2\n         }\n      ]\n   }\n}\n')),(0,o.kt)("h2",{id:"example-6"},"Example 6"),(0,o.kt)("h3",{id:"task-5"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-5"},(0,o.kt)("strong",{parentName:"a"},"Example 5")),". "),(0,o.kt)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),(0,o.kt)("h3",{id:"solution-5"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM importOrderNew\n    PROPERTIES IN order dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER IN order\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrderNew (FILE f)  {\n    IMPORT importOrderNew JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n")),(0,o.kt)("p",null,"Just as in the export process, we put all the properties and the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail")," object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," group to correctly receive the new version of JSON."),(0,o.kt)("h2",{id:"example-7"},"Example 7"),(0,o.kt)("h3",{id:"task-6"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-3"},(0,o.kt)("strong",{parentName:"a"},"Example 3")),". "),(0,o.kt)("p",null,"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."),(0,o.kt)("h3",{id:"solution-6"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportOrders\n    OBJECTS date = DATE PANEL\n\n    OBJECTS order = Order\n    PROPERTIES nm = number(order)\n    FILTERS date(order) = date\n;\n\ngetOrdersByDate (DATE d) {\n    EXPORT exportOrders OBJECTS date = d JSON;\n}\n")),(0,o.kt)("p",null,"The url to which the HTTP request should be sent will look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018"),"."),(0,o.kt)("p",null,"The response JSON will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "order": [\n        {\n            "nm": "42"\n        },\n        {\n            "nm": "65"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);