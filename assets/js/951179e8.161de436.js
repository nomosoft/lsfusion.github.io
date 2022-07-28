"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61139],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"JSON operator"},p=void 0,i={unversionedId:"JSON_operator",id:"JSON_operator",title:"JSON operator",description:"The JSON operator is property that creates JSON from specified properties or, in common case, from form.",source:"@site/docs/JSON_operator.md",sourceDirName:".",slug:"/JSON_operator",permalink:"/next/JSON_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/JSON_operator.md",tags:[],version:"current",lastUpdatedAt:1646050947,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"JSON operator"}},l={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source of export",id:"source-of-export",level:3},{value:"Examples",id:"examples",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," operator is property that creates JSON from ",(0,a.kt)("a",{parentName:"p",href:"/next/Data_export_EXPORT"},"specified properties")," or, in common case, from ",(0,a.kt)("a",{parentName:"p",href:"/next/In_a_structured_view_EXPORT_IMPORT"},"form"),". "),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JSON ( FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] )\nJSON ( formName [OBJECTS objName1 = expr1, ..., objNameK = exprK]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," operator is property that creates JSON from the specified properties or form."),(0,a.kt)("p",null,"When exporting a form in an ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block, it is possible to add extra filters to check for the equality of the objects on the form with ",(0,a.kt)("a",{parentName:"p",href:"/next/Open_form#params"},"the values passed"),". These objects ",(0,a.kt)("a",{parentName:"p",href:"/next/Structured_view#objects"},"will not participate")," in building the object group hierarchy."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"source-of-export"},"Source of export"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formName")),(0,a.kt)("p",{parentName:"li"},"  The name of the form from which you want to export data. ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameK")),(0,a.kt)("p",{parentName:"li"},"  Names of form objects for which filtered (fixed) values are specified. ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple IDs"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr1 ... exprK")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),(0,a.kt)("p",{parentName:"li"},"  List of ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," from whose values the data is exported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"columnId1, ..., columnIdN")),(0,a.kt)("p",{parentName:"li"},"  A list of column IDs in the resulting JSON into which data from the corresponding property will be exported. Each list element is either ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#id"},"a simple ID")," or a ",(0,a.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"string literal"),". If no ID is specified, it is considered equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"expr<Column number>")," by default.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value is a condition for the export. If not specified, it is considered equal to the ",(0,a.kt)("a",{parentName:"p",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"disjunction")," of all exported properties (that is, at least one of the properties must be non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprL")),(0,a.kt)("p",{parentName:"li"},"  List of ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," by which the exported data is sorted. Only properties present in the list ",(0,a.kt)("inlineCode",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DESC")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Specifies reverse sort order. By default, ascending sort is used."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM testF \n      OBJECTS j = INTEGER\n      PROPERTIES ab='34'\n      OBJECTS i = INTEGER\n      PROPERTIES name = 'Name ' + (i AS INTEGER)\n;\n\nrun() {\n    MESSAGE JSON (testF OBJECTS j=4 FILTERS mod(i,2) = 0);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MESSAGE JSON (FROM code = '1', message = 'OK');\n")))}c.isMDXComponent=!0}}]);