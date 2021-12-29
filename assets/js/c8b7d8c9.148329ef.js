"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2610],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),f=r,k=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],p={title:"FORM statement",sidebar_label:"Overview"},l=void 0,m={unversionedId:"FORM_statement",id:"FORM_statement",title:"FORM statement",description:"The FORM statement creates a form.",source:"@site/docs/FORM_statement.md",sourceDirName:".",slug:"/FORM_statement",permalink:"/next/FORM_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/FORM_statement.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"FORM statement",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"CLASS statement",permalink:"/next/CLASS_statement"},next:{title:"Object blocks",permalink:"/next/Object_blocks"}},s=[{value:"Syntax",id:"syntax",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Form options (<code>formOptions</code>)",id:"form-options-formoptions",children:[],level:3},{value:"Form blocks (<code>formBlock1 ... formBlockN</code>)",id:"blocks",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM")," statement creates a ",(0,i.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),". "),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),(0,i.kt)("p",null,"After specifying the form name and caption, form options ",(0,i.kt)("inlineCode",{parentName:"p"},"formOptions")," are specified in an arbitrary order"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IMAGE path \nAUTOREFRESH period \n")),(0,i.kt)("p",null,"After the form options, the blocks of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"formBlock1 ... formBlockN")," are described in the arbitrary order: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OBJECTS ... \nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM")," statement declares a new form and adds it to the current ",(0,i.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),". In addition, this statement is used to describe ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_structure"},"the form structure"),", as well as its ",(0,i.kt)("a",{parentName:"p",href:"/next/Static_view"},"static")," and partially ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view"},"interactive")," (except ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_design"},"form design"),") views. At the beginning of the statement, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Form name. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". The name must be unique within the current ",(0,i.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespace"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"caption")),(0,i.kt)("p",{parentName:"li"},"  Form caption. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#strliteral"},"String literal"),". If the caption is not defined, the form's name will be its caption."))),(0,i.kt)("h3",{id:"form-options-formoptions"},"Form options (",(0,i.kt)("inlineCode",{parentName:"h3"},"formOptions"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IMAGE path")),(0,i.kt)("p",{parentName:"li"},"  The relative path to the file with the image that will be used as the form icon. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")),(0,i.kt)("p",{parentName:"li"},"  Path to the file. String literal. The path is relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"images")," directory.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AUTOREFRESH period")),(0,i.kt)("p",{parentName:"li"},"  Specifying the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#extra"},"automatic form update")," period. If the option is not specified, the form will not be updated automatically."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"period")),(0,i.kt)("p",{parentName:"li"},"  A period of time in seconds. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#intliteral"},"Integral literal"),". "))))),(0,i.kt)("h3",{id:"blocks"},"Form blocks (",(0,i.kt)("inlineCode",{parentName:"h3"},"formBlock1 ... formBlockN"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS ...")),(0,i.kt)("p",{parentName:"li"},"  Adds objects to the form. ",(0,i.kt)("a",{parentName:"p",href:"/next/Object_blocks"},"Object block syntax")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TREE ...")),(0,i.kt)("p",{parentName:"li"},"  Adds an object tree to the form. ",(0,i.kt)("a",{parentName:"p",href:"/next/Object_blocks#tree"},"Syntax of the object tree block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PROPERTIES ...")),(0,i.kt)("p",{parentName:"li"},"  Adds ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," and ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"actions")," to the form. ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"Syntax of the property and action block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FILTERS ...")),(0,i.kt)("p",{parentName:"li"},"  Adds fixed filters to the form. ",(0,i.kt)("a",{parentName:"p",href:"/next/Filters_and_sortings_block#fixedfilters"},"Syntax of the fixed filters block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"[EXTEND] FILTERGROUP ...")),(0,i.kt)("p",{parentName:"li"},"  Adds a group of filters to the form or extends an existing one. ",(0,i.kt)("a",{parentName:"p",href:"/next/Filters_and_sortings_block#filtergroup"},"Syntax of a filter group block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ORDER ...")),(0,i.kt)("p",{parentName:"li"},"  Adds sorting options to the form. ",(0,i.kt)("a",{parentName:"p",href:"/next/Filters_and_sortings_block#sort"},"Syntax of the order block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS ...")),(0,i.kt)("p",{parentName:"li"},"  Defines actions that are executed on specific events. ",(0,i.kt)("a",{parentName:"p",href:"/next/Event_block"},"Syntax of the event block"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FORMEXTID extID")),(0,i.kt)("p",{parentName:"li"},"  Specifying the name to be used to ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view#extid"},"export/import")," this form. Used only in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view"},"structured")," view."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"extId")),(0,i.kt)("p",{parentName:"li"},"  String literal.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"REPORT propertyExpression")),(0,i.kt)("p",{parentName:"li"},"  Specifying the property whose value will be used as the name of the ",(0,i.kt)("a",{parentName:"p",href:"/next/Print_view"},"report")," file for ",(0,i.kt)("a",{parentName:"p",href:"/next/Static_view#empty"},"an empty")," group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be ",(0,i.kt)("a",{parentName:"p",href:"/next/Open_form"},"passed")," when the form is opened ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT"},"in the print view")," (if it doesn't happen, they will be considered equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),")."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyExpression")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EDIT \u0441lassName OBJECT objectName")),(0,i.kt)("p",{parentName:"li"},"  Sets the current form as the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#edtClass"},"edit")," form for all objects of the specified class."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"className")),(0,i.kt)("p",{parentName:"li"},"  The name of the ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom")," . When editing objects of this class, the created form will be opened. Defined with a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectName")),(0,i.kt)("p",{parentName:"li"},"  The name of the form object that will be used for editing. Defined with a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"simple ID"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LIST \u0441lassName OBJECT objectName")),(0,i.kt)("p",{parentName:"li"},"  Sets the current form as the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#edtClass"},"list form")," for the object of the specified class. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"className")),(0,i.kt)("p",{parentName:"li"},"  The name of the ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom")," class whose objects will be listed using the created form. Defined with a composite ID.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectName")),(0,i.kt)("p",{parentName:"li"},"  The name of the form object whose current value will be used as the object being selected. Defined with a simple ID."))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    // Adding one object of the Document class. The object will be available by this name \n    // in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n    OBJECTS d = Document \n\n\n    // ... adding properties and filters to the form\n\n    // marking that this form should be used when it is necessary to select a document, \n    // while the d object should be used as a return value\n    LIST Document OBJECT d \n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    // adding an object of the Item class and marking that it should be displayed\n    // in the panel (i.e., only one value is visible)\n    OBJECTS i = Item PANEL \n\n    // ... adding properties and filters to the form\n\n    // marking that this form should be used when it is necessary to add or edit a product\n    EDIT Item OBJECT i \n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    // adding buttons that will create and edit the product using the item form\n    PROPERTIES(i) NEWSESSION NEW, EDIT \n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two statements (the second statement can be transferred to another module)\nEXTEND FORM printInvoice\n    // adding invoice lines, each of which will be used in the report as a detail\n    OBJECTS d = InvoiceDetail \n\n    // ... adding properties and filters to the form\n;\n// declaring an action that will open the invoice print form\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } \n")))}d.isMDXComponent=!0}}]);