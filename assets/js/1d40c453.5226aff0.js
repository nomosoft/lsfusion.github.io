"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[18043],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"In an interactive view (SHOW, DIALOG)"},l=void 0,p={unversionedId:"In_an_interactive_view_SHOW_DIALOG",id:"version-v4/In_an_interactive_view_SHOW_DIALOG",title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that opens a form in the interactive view.",source:"@site/versioned_docs/version-v4/In_an_interactive_view_SHOW_DIALOG.md",sourceDirName:".",slug:"/In_an_interactive_view_SHOW_DIALOG",permalink:"/In_an_interactive_view_SHOW_DIALOG",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/In_an_interactive_view_SHOW_DIALOG.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"In an interactive view (SHOW, DIALOG)"},sidebar:"version-v4/learn",previous:{title:"Open form",permalink:"/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/In_a_print_view_PRINT"}},c=[{value:"Flow management",id:"flow",children:[],level:3},{value:"Form location",id:"location",children:[],level:3},{value:"System action management",id:"system-action-management",children:[],level:3},{value:"Dialog form",id:"dialog",children:[],level:3},{value:"Extra features",id:"extra",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This operator creates an action that ",(0,r.kt)("a",{parentName:"p",href:"/Open_form"},"opens a form")," in the ",(0,r.kt)("a",{parentName:"p",href:"/Interactive_view"},"interactive")," view."),(0,r.kt)("h3",{id:"flow"},"Flow management"),(0,r.kt)("p",null,"The operator works in two modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Synchronous")," (",(0,r.kt)("inlineCode",{parentName:"li"},"WAIT"),") - waits for the user to ",(0,r.kt)("strong",{parentName:"li"},"close")," the form, then saves the execution results and passes control to the next action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Asynchronous")," (",(0,r.kt)("inlineCode",{parentName:"li"},"NOWAIT"),") - passes control to the next action right after ",(0,r.kt)("strong",{parentName:"li"},"opening")," a form on the client end.")),(0,r.kt)("p",null,"By default, the operator works in the synchronous mode."),(0,r.kt)("h3",{id:"location"},"Form location"),(0,r.kt)("p",null,"A form being opened can be shown in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a ",(0,r.kt)("em",{parentName:"li"},"window")," (",(0,r.kt)("inlineCode",{parentName:"li"},"FLOAT"),")- the form is shown as a floating window."),(0,r.kt)("li",{parentName:"ul"},"As a ",(0,r.kt)("em",{parentName:"li"},"tab")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DOCKED"),") - the form is opened as a tab in the system ",(0,r.kt)("a",{parentName:"li",href:"/Navigator_design"},"window")," ",(0,r.kt)("inlineCode",{parentName:"li"},"System.forms"),".")),(0,r.kt)("p",null,"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'))),(0,r.kt)("h3",{id:"system-action-management"},"System action management"),(0,r.kt)("p",null,"By default, when the interactive view is enabled, the platform ",(0,r.kt)("a",{parentName:"p",href:"/Interactive_view#sysactions"},"automatically determines")," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",(0,r.kt)("a",{parentName:"p",href:"/Interactive_view#owner"},"owner of the session")," in which it is opened or not."),(0,r.kt)("h3",{id:"dialog"},"Dialog form"),(0,r.kt)("p",null,"This operator also allows to return the latest ",(0,r.kt)("a",{parentName:"p",href:"/Form_structure#currentObject"},"current value")," of a specified object (or, if necessary, of several objects), thus, essentially, performing ",(0,r.kt)("a",{parentName:"p",href:"/Value_input"},"value input"),". In this case, ",(0,r.kt)("a",{parentName:"p",href:"/Value_input#result"},"input is considered to be canceled")," if the user closes the form using ",(0,r.kt)("inlineCode",{parentName:"p"},"System.formClose")," (not ",(0,r.kt)("inlineCode",{parentName:"p"},"System.formOk"),")."),(0,r.kt)("p",null,"While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",(0,r.kt)("inlineCode",{parentName:"p"},"System.formDrop"),") on the form. Calling this action closes the form and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," value as a result."),(0,r.kt)("p",null,"Similar to the other value input operators, the dialog form of this operator allows to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"specify ",(0,r.kt)("a",{parentName:"li",href:"/Value_input#initial"},"initial object values")," (through the ",(0,r.kt)("a",{parentName:"li",href:"/Open_form"},"passing objects")," mechanism)."),(0,r.kt)("li",{parentName:"ul"},"specify ",(0,r.kt)("a",{parentName:"li",href:"/Value_input#result"},"main and alternative")," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Value_input#initial"},"change")," a specified property.")),(0,r.kt)("p",null,"In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate existing ",(0,r.kt)("a",{parentName:"p",href:"/Constraints"},"constraints"),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."),(0,r.kt)("p",null,"The operator dialog form is available in the synchronous mode only."),(0,r.kt)("h3",{id:"extra"},"Extra features"),(0,r.kt)("p",null,'When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each ',(0,r.kt)("a",{parentName:"p",href:"/Interactive_view#property"},"property view"),"."),(0,r.kt)("p",null,"Also, when calling the form, you can specify that it will be opened in a ",(0,r.kt)("a",{parentName:"p",href:"/New_session_NEWSESSION_NESTEDSESSION"},"new")," (nested) session. In this case, ",(0,r.kt)("a",{parentName:"p",href:"/Open_form#params"},"passing objects")," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",(0,r.kt)("a",{parentName:"p",href:"/New_session_NEWSESSION_NESTEDSESSION"},"new session")," operator)."),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To open a form in the interactive view, use the ",(0,r.kt)("a",{parentName:"p",href:"/SHOW_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"SHOW")," operator"),". To show the form in the dialog mode, use the ",(0,r.kt)("a",{parentName:"p",href:"/DIALOG_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"DIALOG")," operator"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}m.isMDXComponent=!0}}]);