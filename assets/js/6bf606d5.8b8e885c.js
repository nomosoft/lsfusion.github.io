(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4625],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=s(n),c=a,N=f["".concat(l,".").concat(c)]||f[c]||d[c]||i;return n?r.createElement(N,p(p({ref:t},m),{},{components:n})):r.createElement(N,p({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3105:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),p={title:"PRINT operator"},o=void 0,l={unversionedId:"PRINT_operator",id:"PRINT_operator",isDocsHomePage:!1,title:"PRINT operator",description:"The PRINT operator creates an action that opens a form in print view.",source:"@site/docs/PRINT_operator.md",sourceDirName:".",slug:"/PRINT_operator",permalink:"/next/PRINT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/PRINT_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"PRINT operator"},sidebar:"learn",previous:{title:"NEWTHREAD operator",permalink:"/next/NEWTHREAD_operator"},next:{title:"READ operator",permalink:"/next/READ_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PRINT")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT"},"opens a form")," in print view. "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions] \n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formActionOptions")," - additional options for this action. There are several possible option syntaxes in this operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PRINT")," operator creates an action that prints the specified form. When printing a form in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block you can add ",(0,i.kt)("a",{parentName:"p",href:"/next/Open_form#params"},"additional filters")," for form objects to check these objects for equality to the values passed."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Form name. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"Composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameN")),(0,i.kt)("p",{parentName:"li"},"  Names of form objects for which additional filters are specified. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple IDs"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr1 ... exprN")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."))),(0,i.kt)("h4",{id:"additional-options"},"Additional options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"printFormat")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT#format"},"print format")," is specified by one of these keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PDF")," \u2013 the form will be exported to a PDF file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XLS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"XLSX")," \u2013 the form will be exported to a file in one of the specified EXCEL formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DOCX")," \u2013 the form will be exported to a file in one of the specified WORD formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RTF")," \u2013 the form will be exported to an RTF file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," \u2013 the form will be exported to an HTML file."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sheetProperty")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"ID of the property")," whose value is used as the name of the sheet in the exported file. The property must not have parameters. It is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"XLS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX")," print formats.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"passwordExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value determines the password that sets the read-only mode for the exported file. Used for ",(0,i.kt)("inlineCode",{parentName:"p"},"XLS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX")," print formats.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PREVIEW")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is displayed in ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT#interactive"},"preview")," mode. This mode is used by default if no other modes/formats are specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NOPREVIEW")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is immediately (without preview) sent for printing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"printerExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MESSAGE")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form displays data to the user in ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT#interactive"},"message")," mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TOP n")),(0,i.kt)("p",{parentName:"li"},"  Displays only the first ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," entries. ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#intliteral-broken"},"Integer literal"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"syncType")),(0,i.kt)("p",{parentName:"li"},"  Determines when the created action should be continued:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WAIT")," - after the client completes the action (closes the preview/message form). Used by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOWAIT")," - after preparation of the information for sending to the client (form data is read).")))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n")))}d.isMDXComponent=!0}}]);