(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21511],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70390:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Data import (IMPORT)"},l={unversionedId:"Data_import_IMPORT",id:"Data_import_IMPORT",isDocsHomePage:!1,title:"Data import (IMPORT)",description:"The data import operator creates an action which reads a file from the value of some property, then, depending on its format, defines the columns (fields) of data in this file, after which it writes the value of each column (field) to the corresponding property (parameter) - import assignment. The mapping of columns to properties can go in either column or name order.",source:"@site/docs/Data_import_IMPORT.md",sourceDirName:".",slug:"/Data_import_IMPORT",permalink:"/next/Data_import_IMPORT",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Data_import_IMPORT.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Data import (IMPORT)"},sidebar:"learn",previous:{title:"Write file (WRITE)",permalink:"/next/Write_file_WRITE"},next:{title:"Data export (EXPORT)",permalink:"/next/Data_export_EXPORT"}},p=[{value:"General case",id:"general-case",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"data import")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," which reads a file from the value of some ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property"),", then, depending on its ",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view"},"format"),", defines the columns (fields) of data in this file, after which it ",(0,o.kt)("a",{parentName:"p",href:"/next/Property_change_CHANGE"},"writes")," the value of each column (field) to the corresponding property (parameter) - import ",(0,o.kt)("em",{parentName:"p"},"assignment"),". The mapping of columns to properties can go in either column or name order."),(0,o.kt)("p",null,"Rows, in turn, are mapped during import to objects of specified classes (let's call these objects ",(0,o.kt)("em",{parentName:"p"},"imported"),"). In the current platform implementation, there can be at most one object and the specified class must be either ",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"numeric")," or a ",(0,o.kt)("a",{parentName:"p",href:"/next/User_classes#abstract"},"specific user-defined class"),". Rows are mapped to the imported object as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for numeric classes: all imported rows are numbered in the order in which they appear in the file (starting from 0)."),(0,o.kt)("li",{parentName:"ul"},"for specific user-defined classes: ",(0,o.kt)("a",{parentName:"li",href:"/next/New_object_NEW"},"a new object")," of the specified class is created for each row.")),(0,o.kt)("p",null,"You can also define an import ",(0,o.kt)("em",{parentName:"p"},"condition"),": this is a property in which the ",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"default value")," of the property value class is written for each row (as opposed to import destination in which column values are written)."),(0,o.kt)("h3",{id:"general-case"},"General case"),(0,o.kt)("p",null,"It should be noted that data import is a special case of (syntactic sugar for) ",(0,o.kt)("a",{parentName:"p",href:"/next/In_a_structured_view_EXPORT_IMPORT#importForm"},"form import"),", in which the imported form is created automatically and consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"one ",(0,o.kt)("a",{parentName:"li",href:"/next/Form_structure#objects"},"group of objects")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," whose objects correspond to imported objects (not created if there are no imported objects)"),(0,o.kt)("li",{parentName:"ul"},"imported properties. The ",(0,o.kt)("a",{parentName:"li",href:"/next/Form_structure#propertygroup"},"property group")," for the properties that are created on the form is the ",(0,o.kt)("a",{parentName:"li",href:"/next/Groups_of_properties_and_actions#builtin"},"builtin")," group ",(0,o.kt)("inlineCode",{parentName:"li"},"System.private"),"."),(0,o.kt)("li",{parentName:"ul"},"a filter equal to the defined condition.")),(0,o.kt)("p",null,"Accordingly, the behavior of the data import operator (for example, determining the names of the resulting columns / keys, ",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view#value"},"processing of ",(0,o.kt)("inlineCode",{parentName:"a"},"value")),", etc.) is completely determined by the behavior of the form import operator (as if the above form were passed to it as a parameter)."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that imports data, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n")))}c.isMDXComponent=!0}}]);