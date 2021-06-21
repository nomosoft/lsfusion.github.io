(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[44570],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68245:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a={title:"Form structure",sidebar_label:"Overview"},s=void 0,p={unversionedId:"Form_structure",id:"version-v4/Form_structure",isDocsHomePage:!1,title:"Form structure",description:"The form structure is a complex of objects, properties, actions and relations between them.",source:"@site/versioned_docs/version-v4/Form_structure.md",sourceDirName:".",slug:"/Form_structure",permalink:"/Form_structure",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Form_structure.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Form structure",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/Forms"},next:{title:"Groups of properties and actions",permalink:"/Groups_of_properties_and_actions"}},l=[{value:"Objects",id:"objects",children:[]},{value:"Properties and actions",id:"properties",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Orders",id:"sort",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/Forms"},"form")," structure is a complex of ",(0,o.kt)("em",{parentName:"p"},"objects"),", ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"properties"),", ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"actions")," and relations between them."),(0,o.kt)("h3",{id:"objects"},"Objects"),(0,o.kt)("p",null,"When creating a form, first you must define which objects it will display. For each form object you need to specify its ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"class"),"."),(0,o.kt)("p",null,"It is possible to combine objects into ",(0,o.kt)("em",{parentName:"p"},"object groups"),'. In this case, the table will show a "Cartesian product" of these objects (i.e., for two objects - all pairs, three objects - triples, etc.). '),(0,o.kt)("p",null,"In accordance with the order of adding object groups to the form, an ordered ",(0,o.kt)("em",{parentName:"p"},"list")," of object groups is formed. Accordingly, the group with the maximum number for a certain set of object groups shall be called the ",(0,o.kt)("em",{parentName:"p"},"last")," group for this set (i.e., the latest). The ",(0,o.kt)("em",{parentName:"p"},"last")," group for a set of objects is determined similarly: first, a set of object groups into which these objects are included is built, then the last group is determined for the obtained set of object groups."),(0,o.kt)("h4",{id:"currentObject"},"Current object"),(0,o.kt)("p",null,"Each object on the form has a ",(0,o.kt)("em",{parentName:"p"},"current value")," at any time. It changes either as a result of ",(0,o.kt)("a",{parentName:"p",href:"/Interactive_view#objects"},"corresponding user actions")," in ",(0,o.kt)("a",{parentName:"p",href:"/Interactive_view"},"interactive"),' view or "virtually" while reading data in ',(0,o.kt)("a",{parentName:"p",href:"/Static_view"},"static")," view."),(0,o.kt)("h3",{id:"properties"},"Properties and actions"),(0,o.kt)("p",null,"After defining objects, you can add properties and actions to the form, passing these objects to them as arguments."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adding actions is relevant only for ",(0,o.kt)("a",{parentName:"p",href:"/Interactive_view"},"interactive")," view. In ",(0,o.kt)("a",{parentName:"p",href:"/Static_view"},"static")," view added actions are ignored."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The behavior of properties and actions in the context of their display on the form is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),(0,o.kt)("h4",{id:"drawgroup"},"Display group"),(0,o.kt)("p",null,"Each property is displayed exactly in one of the object groups on the form (this group shall be called a ",(0,o.kt)("em",{parentName:"p"},"display group")," of this property). By default, the display group is the last group for the set of objects which this property receives as an input. If necessary, the developer can specify the display group explicitly (with certain ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view#drawgroup-broken"},"constraints")," when used in a structured view)"),(0,o.kt)("h4",{id:"groupcolumns"},"Groups-in-columns"),(0,o.kt)("p",null,"By default, a property is displayed in its display group exactly once. In this case, the values of objects which are not in the display group of this property (these objects shall be called ",(0,o.kt)("em",{parentName:"p"},"upper"),') are used as their current values. However, it is also possible to display one property multiple times so that all object collections are used as the values of certain upper objects (not their current values). With this display of the property, a kind of "matrix" is formed - upper objects x objects of the display group. Thus, to create such a matrix, when adding a property to the form you must specify which ',(0,o.kt)("em",{parentName:"p"},"upper")," objects (specifically, object groups) must be used to create columns (these object groups shall be called ",(0,o.kt)("em",{parentName:"p"},"groups-in-columns"),")."),(0,o.kt)("p",null,"When determining a ",(0,o.kt)("a",{parentName:"p",href:"#drawgroup"},"display group"),", properties of the group-to-columns are ignored."),(0,o.kt)("h4",{id:"propertygroup"},"Property groups"),(0,o.kt)("p",null,"Properties on the form can be combined into ",(0,o.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"groups")," which, in turn, are used in the interactive (",(0,o.kt)("a",{parentName:"p",href:"/Form_design#defaultDesign"},"default design"),") and ",(0,o.kt)("a",{parentName:"p",href:"/Structured_view#hierarchy"},"hierarchical")," form views. By default, a property is included in a group globally (i.e., this inclusion is defined for a property for all forms at once), however, this inclusion can be redefined for particular forms."),(0,o.kt)("h4",{id:"default-settings"},"Default settings"),(0,o.kt)("p",null,"Properties on the form have a large number of display settings in various ",(0,o.kt)("a",{parentName:"p",href:"/Form_views"},"views"),', most of which can be set not only directly for the property on the form, but also for the property itself (when creating it). These settings will be the default settings, i.e., if the setting is not explicitly set for a specific property on the form, then the setting of the property itself is used. In addition, these default settings are "inherited" when using ',(0,o.kt)("a",{parentName:"p",href:"/Composition_JOIN"},"composition"),", ",(0,o.kt)("a",{parentName:"p",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"selection")," and ",(0,o.kt)("a",{parentName:"p",href:"/Previous_value_PREV"},"previous value")," operators (i.e., if property ",(0,o.kt)("inlineCode",{parentName:"p"},"f(a)")," has the default width of ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),", then the property ",(0,o.kt)("inlineCode",{parentName:"p"},"g(a) = f(a) IF h(a)")," will also have a width of ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," by default)."),(0,o.kt)("h3",{id:"filters"},"Filters"),(0,o.kt)("p",null,"For each form, the developer can create ",(0,o.kt)("em",{parentName:"p"},"filters")," which will limit the list of object collections available for viewing/selection on the form."),(0,o.kt)("p",null,"To define a filter, you must specify a property that will be used as a filter condition. The filter will be applied to the table of the object group that is the last for the set of objects which this property takes as input (i.e., similar to the definition of the property ",(0,o.kt)("em",{parentName:"p"},"display group"),"). In this case, only those object collections (rows) for which property values are not ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," will be shown."),(0,o.kt)("h3",{id:"sort"},"Orders"),(0,o.kt)("p",null,"By default, in all object group views, object collections are displayed in a certain non-deterministic order, which is determined by the specific implementation of the platform (most often, internal identifiers are used to determine the order). If necessary, the developer can define this order explicitly by specifying a list of properties on the form that will be used as orders. At the same time, for each property in this list, you can specify whether the order should be ascending or descending (by default, the ascending option is used)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value is always considered to be the smallest value. "),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create a new form and define its structure, the ",(0,o.kt)("a",{parentName:"p",href:"/FORM_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"FORM")," statement")," is used."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    OBJECTS d = Document // Adding one object of the Document class. The object will be available by this name in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n\n\n    // ... adding properties and filters to the form\n\n    LIST Document OBJECT d // marking that this form should be used when it is necessary to select a document, while the d object should be used as a return value\n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    OBJECTS i = Item PANEL // adding an object of the Item class and marking that it should be displayed in the panel (i.e., only one value is visible)\n\n    // ... adding properties and filters to the form\n\n    EDIT Item OBJECT i // marking that this form should be used when it is necessary to add or edit a product\n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    PROPERTIES(i) NEWSESSION NEW, EDIT // adding buttons that will create and edit the product using the item form\n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two statements (the second statement can be transferred to another module)\nEXTEND FORM printInvoice\n    OBJECTS d = InvoiceDetail // adding invoice lines, each of which will be used in the report as a detail\n\n    // ... adding properties and filters to the form\n;\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } // declaring an action that will open the invoice print form\n")))}d.isMDXComponent=!0}}]);