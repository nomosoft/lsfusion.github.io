(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47047],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"CONSTRAINT statement"},s={unversionedId:"CONSTRAINT_statement",id:"version-v4/CONSTRAINT_statement",isDocsHomePage:!1,title:"CONSTRAINT statement",description:"The CONSTRAINT statement creates a constraint.",source:"@site/versioned_docs/version-v4/CONSTRAINT_statement.md",sourceDirName:".",slug:"/CONSTRAINT_statement",permalink:"/CONSTRAINT_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/CONSTRAINT_statement.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"CONSTRAINT statement"},sidebar:"version-v4/learn",previous:{title:"<- WHEN statement",permalink:"/lt-_WHEN_statement"},next:{title:"=> statement",permalink:"/=gt_statement"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CONSTRAINT")," statement creates a ",(0,i.kt)("a",{parentName:"p",href:"/Constraints"},"constraint"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONSTRAINT eventClause constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr;\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CONSTRAINT")," statement creates a constraint. If the constraint is violated, the user will be shown the message defined in the statement."),(0,i.kt)("p",null,"Also, by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKED")," option you can use the constraint when showing dialogs for changing properties whose values may violate the constraint if changed. In this instance an additional filter will be set in the dialog so that, when the property value changes, the constraint is not violated. If it is necessary to limit the set of properties for which the above filtering will be performed, the list of properties can be specified after the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"BY"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Creating a constraint is pretty similar to the following statements:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"constraintProperty = constraintExpr;\nWHEN eventClause [=GROUP MAX constraintProperty()]() DO {\n    PRINT outConstraintPropertyForm MESSAGE NOWAIT;\n    CANCEL;\n}\n")),(0,i.kt)("p",{parentName:"div"},"but it also has ",(0,i.kt)("a",{parentName:"p",href:"/Constraints"},"a number of advantages"),"."))),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventClause")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/Event_description_block"},"Event description block"),". Describes ",(0,i.kt)("a",{parentName:"p",href:"/Events"},"the event")," upon occurrence of which the created constraint will be checked.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"constraintExpr")),(0,i.kt)("p",{parentName:"li"},"  An ",(0,i.kt)("a",{parentName:"p",href:"/Expression"},"expression")," whose value is a condition for the constraint being created. If the obtained property does not contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"PREV")," operator, the platform automatically wraps it into the ",(0,i.kt)("inlineCode",{parentName:"p"},"SET")," operator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),(0,i.kt)("p",{parentName:"li"},"  List of ",(0,i.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"property IDs"),". When showing change dialog for each property in that list, options that violate the created constraint will be filtered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"messageExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value is shown as a message to the user when the set constraint is violated. It may be either a ",(0,i.kt)("a",{parentName:"p",href:"/IDs#strliteral"},"string literal")," or a property without parameters."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// balance not less than 0\nCONSTRAINT balance(Sku s, Stock st) < 0\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0));\n\nbarcode = DATA STRING[15] (Sku);\n// \"emulation\" security policy\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\n\nsku = DATA Sku (OrderDetail);\nin = DATA BOOLEAN (Sku, Customer);\n\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\n    CHECKED BY sku[OrderDetail] // a filter by available sku when selecting an item for an order line will be applied\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n")))}c.isMDXComponent=!0}}]);