(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27182],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55165:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"=> statement"},p={unversionedId:"=gt_statement",id:"=gt_statement",isDocsHomePage:!1,title:"=> statement",description:"The => statement creates a consequence.",source:"@site/docs/=gt_statement.md",sourceDirName:".",slug:"/=gt_statement",permalink:"/next/=gt_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/=gt_statement.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"=> statement"},sidebar:"learn",previous:{title:"CONSTRAINT statement",permalink:"/next/CONSTRAINT_statement"},next:{title:"CLASS statement",permalink:"/next/CLASS_statement"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"=>")," statement creates a ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"consequence"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"=>")," statement creates a consequence. This operator can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),(0,i.kt)("p",null,"When creating a consequence a ",(0,i.kt)("a",{parentName:"p",href:"/next/Constraints"},"constraint")," will be created, which is pretty similar to the following statement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),(0,i.kt)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOLVE LEFT")," is similar to creating ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_event"},"a simple event"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO \n    SETACTION(rightExpr);\n")),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"leftPropertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property")," specifying the consequence premise.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,i.kt)("p",{parentName:"li"},"  List of ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rightExpr")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value determines the consequence.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resolveType")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_event"},"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LEFT"),": if the premise (the left part of the statement) is changed to non-",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),", then the consequence changes to non ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RIGHT"),": if the consequence (the right part of the statement) changes to ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),", then the premise changes to ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LEFT RIGHT"),": similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"LEFT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RIGHT")," together. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventClause")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Event_description_block"},"Event description block"),". Describes an ",(0,i.kt)("a",{parentName:"p",href:"/next/Events"},"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}c.isMDXComponent=!0}}]);