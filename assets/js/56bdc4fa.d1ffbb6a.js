"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72728],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,u=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const i={title:"Navigator"},o=void 0,l={unversionedId:"Navigator",id:"version-v4/Navigator",title:"Navigator",description:"Navigator is a hierarchical structure (tree) consisting of navigator elements. There are three types of navigator elements:",source:"@site/versioned_docs/version-v4/Navigator.md",sourceDirName:".",slug:"/Navigator",permalink:"/Navigator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Navigator.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Navigator"},sidebar:"version-v4/learn",previous:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/In_a_structured_view_EXPORT_IMPORT"},next:{title:"Navigator design",permalink:"/Navigator_design"}},s={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Navigator")," is a hierarchical structure (tree) consisting of ",(0,r.kt)("em",{parentName:"p"},"navigator elements"),". There are three types of navigator elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"folder")," - combines other navigator elements into a group. Selecting this element ",(0,r.kt)("a",{parentName:"li",href:"/Navigator_design#selectedfolder"},"affects")," the display of its children if they belong to another ",(0,r.kt)("a",{parentName:"li",href:"/Navigator_design"},"window"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"action")," \u2013 executes a specified ",(0,r.kt)("a",{parentName:"li",href:"/Actions"},"action"),". Only actions that take no arguments can be added to the navigator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"form")," \u2013 ",(0,r.kt)("a",{parentName:"li",href:"/In_an_interactive_view_SHOW_DIALOG"},"opens")," a specified ",(0,r.kt)("a",{parentName:"li",href:"/Forms"},"form")," in the interactive view and the ",(0,r.kt)("a",{parentName:"li",href:"/In_an_interactive_view_SHOW_DIALOG#flow"},"asynchronous")," mode.")),(0,r.kt)("p",null,"When an element is added to the navigator, a ",(0,r.kt)("em",{parentName:"p"},"parent")," element is defined for it. The root element of the navigator is the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.root")," folder. "),(0,r.kt)("p",null,"If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden."),(0,r.kt)("p",null,"Just as an ",(0,r.kt)("a",{parentName:"p",href:"/Interactive_view"},"interactive")," form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's ",(0,r.kt)("a",{parentName:"p",href:"/Navigator_design"},"design")," can/has to be defined, as well as for all other ",(0,r.kt)("a",{parentName:"p",href:"/Form_views#graphic"},"graphic")," views."),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To manage the navigator use the ",(0,r.kt)("a",{parentName:"p",href:"/NAVIGATOR_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"NAVIGATOR")," statement"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { \n        // creating a form element for the items form in the folder, the default element name is the form name\n        NEW items; \n    }\n    catalogs {  // navigator element editing statement\n        // creating a stocksNavigator form element for the stocks form and adding the last element\n        // to the catalogs folder\n        NEW FORM stocksNavigator 'Warehouses' = stocks; \n        // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW legalEntities AFTER items; \n        NEW shipments;\n    }\n    // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n    NEW FOLDER documents 'Documents' WINDOW toolbar { \n        // the folders themselves will be displayed in the root window, and when the user selects one of them\n        // in a window with a vertical toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        // the statement to move the shipments element from the catalogs folder to the document folder\n        // before the hello element\n        MOVE shipments BEFORE h; \n    }\n}\n")))}p.isMDXComponent=!0}}]);