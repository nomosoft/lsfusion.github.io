(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33795],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,c=u["".concat(l,".").concat(k)]||u[k]||d[k]||p;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79718:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var n=r(22122),a=r(19756),p=(r(67294),r(3905)),o={title:"EXPORT operator"},i={unversionedId:"EXPORT_operator",id:"version-v4/EXPORT_operator",isDocsHomePage:!1,title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified properties to a file, or, in common case, that opens a form in a structured view.",source:"@site/versioned_docs/version-v4/EXPORT_operator.md",sourceDirName:".",slug:"/EXPORT_operator",permalink:"/EXPORT_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/EXPORT_operator.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"EXPORT operator"},sidebar:"version-v4/learn",previous:{title:"EXEC operator",permalink:"/EXEC_operator"},next:{title:"EXTERNAL operator",permalink:"/EXTERNAL_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Source of export",id:"source-of-export",children:[]},{value:"Export format",id:"export-format",children:[]},{value:"Export destination",id:"export-destination",children:[]}]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"EXPORT")," operator: creates an ",(0,p.kt)("a",{parentName:"p",href:"/Actions"},"action")," that exports ",(0,p.kt)("a",{parentName:"p",href:"/Data_export_EXPORT"},"specified properties")," to a file, or, in common case, that ",(0,p.kt)("a",{parentName:"p",href:"/In_a_structured_view_EXPORT_IMPORT"},"opens a form")," in a structured view. "),(0,p.kt)("h2",{id:"syntax"},"Syntax"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"exportFormat")," can be specified by one of the following options:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),(0,p.kt)("h2",{id:"description"},"Description"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",(0,p.kt)("strong",{parentName:"p"},"XML"),", ",(0,p.kt)("strong",{parentName:"p"},"JSON"),", ",(0,p.kt)("strong",{parentName:"p"},"CSV"),", ",(0,p.kt)("strong",{parentName:"p"},"XLS"),", ",(0,p.kt)("strong",{parentName:"p"},"XLSX"),", ",(0,p.kt)("strong",{parentName:"p"},"DBF"),", ",(0,p.kt)("strong",{parentName:"p"},"TABLE"),". "),(0,p.kt)("p",null,"If no export file format is specified, it is considered to be ",(0,p.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,p.kt)("p",null,"If the property to which the data is exported is of class ",(0,p.kt)("inlineCode",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Format"),(0,p.kt)("th",{parentName:"tr",align:null},"Extension"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"JSON")),(0,p.kt)("td",{parentName:"tr",align:null},"json")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"XML")),(0,p.kt)("td",{parentName:"tr",align:null},"xml")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"CSV")),(0,p.kt)("td",{parentName:"tr",align:null},"csv")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"XLS")),(0,p.kt)("td",{parentName:"tr",align:null},"xls")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"XLSX")),(0,p.kt)("td",{parentName:"tr",align:null},"xlsx")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"DBF")),(0,p.kt)("td",{parentName:"tr",align:null},"dbf")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"TABLE")),(0,p.kt)("td",{parentName:"tr",align:null},"table")))),(0,p.kt)("p",null,"When exporting a form in an ",(0,p.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block, it is possible to add extra filters to check for the equality of the objects on the form with ",(0,p.kt)("a",{parentName:"p",href:"/Open_form#params"},"the values passed"),". These objects ",(0,p.kt)("a",{parentName:"p",href:"/Structured_view#objects"},"will not participate")," in building the object group hierarchy."),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("h3",{id:"source-of-export"},"Source of export"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"formName")),(0,p.kt)("p",{parentName:"li"},"  The name of the form from which you want to export data. ",(0,p.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameK")),(0,p.kt)("p",{parentName:"li"},"  Names of form objects for which filtered (fixed) values are specified. ",(0,p.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple IDs"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"expr1 ... exprK")),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("a",{parentName:"p",href:"/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),(0,p.kt)("p",{parentName:"li"},"  List of ",(0,p.kt)("a",{parentName:"p",href:"/Expression"},"expressions")," from whose values the data is exported. Each property is mapped to a table column of the result file.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"columnId1, ..., columnIdN")),(0,p.kt)("p",{parentName:"li"},"  A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either ",(0,p.kt)("a",{parentName:"p",href:"/IDs#id"},"a simple ID")," or a ",(0,p.kt)("a",{parentName:"p",href:"/Literals#strliteral"},"string literal"),". If no ID is specified, it is considered equal to ",(0,p.kt)("inlineCode",{parentName:"p"},"expr<Column number>")," by default.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,p.kt)("p",{parentName:"li"},"  An expression whose value is a condition for the export. If not specified, it is considered equal to the ",(0,p.kt)("a",{parentName:"p",href:"/Logical_operators_AND_OR_NOT_XOR"},"disjunction")," of all exported properties (that is, at least one of the properties must be non-",(0,p.kt)("inlineCode",{parentName:"p"},"NULL"),").")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprL")),(0,p.kt)("p",{parentName:"li"},"  List of ",(0,p.kt)("a",{parentName:"p",href:"/Expression"},"expressions")," by which the exported data is sorted. Only properties present in the list ",(0,p.kt)("inlineCode",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"DESC")),(0,p.kt)("p",{parentName:"li"},"  Keyword. Specifies reverse sort order. By default, ascending sort is used."))),(0,p.kt)("h3",{id:"export-format"},"Export format"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ATTR")),(0,p.kt)("p",{parentName:"li"},"  A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to ",(0,p.kt)("strong",{parentName:"p"},"XML"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"separator")),(0,p.kt)("p",{parentName:"li"},"  Delimiter in a ",(0,p.kt)("strong",{parentName:"p"},"CSV")," file. ",(0,p.kt)("a",{parentName:"p",href:"/Literals#strliteral"},"String literal"),". If not specified, then the default delimiter is ",(0,p.kt)("inlineCode",{parentName:"p"},";"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"HEADER | NOHEADER")),(0,p.kt)("p",{parentName:"li"},"  Keywords specifying the presence (",(0,p.kt)("inlineCode",{parentName:"p"},"HEADER"),") or absence (",(0,p.kt)("inlineCode",{parentName:"p"},"NOHEADER"),") of a header string in a ",(0,p.kt)("strong",{parentName:"p"},"CSV"),", ",(0,p.kt)("strong",{parentName:"p"},"XLS"),", or ",(0,p.kt)("strong",{parentName:"p"},"XLSX")," file. The default is ",(0,p.kt)("inlineCode",{parentName:"p"},"NOHEADER"),"."),(0,p.kt)("p",{parentName:"li"},"  When using the ",(0,p.kt)("inlineCode",{parentName:"p"},"NOHEADER")," option if the column name is one of the predefined names (",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", ..., ",(0,p.kt)("inlineCode",{parentName:"p"},"Z"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"AA"),", ..., ",(0,p.kt)("inlineCode",{parentName:"p"},"AE"),"), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ESCAPE | NOESCAPE")),(0,p.kt)("p",{parentName:"li"},"  Keywords specifying the presence (",(0,p.kt)("inlineCode",{parentName:"p"},"ESCAPE"),") or absence (",(0,p.kt)("inlineCode",{parentName:"p"},"NOESCAPE"),") of escaping for special characters (",(0,p.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,p.kt)("inlineCode",{parentName:"p"},'"')," (double quotes) and the specified delimiter (",(0,p.kt)("inlineCode",{parentName:"p"},"separator"),") in a ",(0,p.kt)("strong",{parentName:"p"},"CSV")," file. It makes sense to use ",(0,p.kt)("inlineCode",{parentName:"p"},"NOESCAPE")," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",(0,p.kt)("inlineCode",{parentName:"p"},"ESCAPE"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"CHARSET charsetStr")),(0,p.kt)("p",{parentName:"li"},"  An option specifying the encoding used for export."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"charsetStr")),(0,p.kt)("p",{parentName:"li"},"  String literal that defines the encoding. ")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"TOP n")),(0,p.kt)("p",{parentName:"li"},"  Exports only the first ",(0,p.kt)("inlineCode",{parentName:"p"},"n")," records. ",(0,p.kt)("a",{parentName:"p",href:"/Literals#intliteral"},"Integer literal"),"."))),(0,p.kt)("h3",{id:"export-destination"},"Export destination"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"Property ID")," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",(0,p.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"RAWFILE"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"JSONFILE"),", etc.). If this property is not specified, the ",(0,p.kt)("inlineCode",{parentName:"p"},"System.exportFile")," property is used by default.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"groupId1, ..., groupIdM")),(0,p.kt)("p",{parentName:"li"},"  Names of object groups from the exported form for which you want to export data. ",(0,p.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple IDs"),". Used only for exporting forms to flat formats.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"propertyId1 , ..., propertyIdM")),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"Property IDs")," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",(0,p.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"RAWFILE"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"JSONFILE"),", etc.). Used only for exporting forms to flat formats. For the ",(0,p.kt)("a",{parentName:"p",href:"/Static_view#empty"},"empty group")," of objects, the name ",(0,p.kt)("inlineCode",{parentName:"p"},"root")," is used. "))),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-lsf"},'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s); // uploads to CSV without header line and escaping special characters\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC; // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM ff=\'HI\'; // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform gets the object {"value":"HI"} to\n    EXPORT FROM \'HI\'; // uploads JSON "HI", as by default it gets the name value, and the platform automatically converts the object {"value": "HI"} to "HI"\n}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")))}m.isMDXComponent=!0}}]);