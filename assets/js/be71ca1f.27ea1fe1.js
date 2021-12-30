"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47267],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],s={title:"Interactive view"},l=void 0,c={unversionedId:"Interactive_view",id:"version-v4/Interactive_view",title:"Interactive view",description:"A form opened in interactive mode is a graphical component with a certain design in which the user can trigger various events and thereby navigate through system objects, view and change property values, execute actions, and so on. Developers can also use an additional set of operators with this view, making it possible to manage the open form.",source:"@site/versioned_docs/version-v4/Interactive_view.md",sourceDirName:".",slug:"/Interactive_view",permalink:"/Interactive_view",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Interactive_view.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Interactive view"},sidebar:"version-v4/learn",previous:{title:"Form views",permalink:"/Form_views"},next:{title:"Form design",permalink:"/Form_design"}},p=[{value:"Object views",id:"objects",children:[],level:3},{value:"Object trees",id:"tree",children:[],level:3},{value:"Property views",id:"property",children:[],level:3},{value:"Filter group",id:"filtergroup",children:[],level:3},{value:"Custom filters/orders",id:"userfilters",children:[],level:3},{value:"Default objects selection",id:"defaultobject",children:[],level:3},{value:"Object operators",id:"objectoperators",children:[],level:3},{value:"Selection/editing forms",id:"edtClass",children:[],level:3},{value:"Session owner",id:"owner",children:[],level:3},{value:"System actions for form/session lifecycle management",id:"sysactions",children:[],level:3},{value:"Additional features",id:"extra",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Open form",id:"open-form",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],h={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A form opened in ",(0,i.kt)("em",{parentName:"p"},"interactive")," mode is a graphical component with a certain ",(0,i.kt)("a",{parentName:"p",href:"/Form_design"},"design")," in which the user can trigger various ",(0,i.kt)("a",{parentName:"p",href:"/Form_events"},"events")," and thereby navigate through system objects, view and change ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"property")," values, execute ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"actions"),", and so on. Developers can also use an ",(0,i.kt)("a",{parentName:"p",href:"/Form_operators"},"additional set of operators")," with this view, making it possible to manage the open form."),(0,i.kt)("h3",{id:"objects"},"Object views"),(0,i.kt)("p",null,"In the interactive view, object groups can be displayed in a table. The rows in the table are object collections, and the columns are properties. The records displayed in the table and their order are determined by the current ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#filters"},"filters")," and ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#sort"},"orders"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Form_structure#currentObject"},"Current values")," of objects can change either as a result of an action created using the special search operator ",(0,i.kt)("a",{parentName:"p",href:"/Search_SEEK"},"(",(0,i.kt)("inlineCode",{parentName:"a"},"SEEK"),")"),", or as a result of a change to the current row, if an object group is displayed in a table."),(0,i.kt)("p",null,"When an object group is displayed in a table, the number of rows (object collections) displayed can either be determined automatically based on the height of the visible part of the table, or specified by the developer explicitly when creating the form."),(0,i.kt)("h3",{id:"tree"},"Object trees"),(0,i.kt)("p",null,"The platform also allows to display multiple object groups in one table simultaneously. This happens similarly to the ",(0,i.kt)("a",{parentName:"p",href:"/Static_view#hierarchy"},"object group hierarchy")," in a static view, i.e. if we have two groups ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),' then, in the "joined" table, the first object collection from ',(0,i.kt)("inlineCode",{parentName:"p"},"A")," is displayed first, then all object collections from ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," (as filtered), then a second object collection from ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then again all the object collections from ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and so on. In this case, it is highly desirable that the filters for ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," used all objects from ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", since otherwise combining these groups into a single tree doesn't make sense. Initially, when a form is opened in the table, only objects of the topmost object group are displayed, but at the same time, a special column is created on the left of the table, using which the user can open nodes on his own and thus view only objects of interest in the lower object groups. Another function of this created column is to demonstrate the nesting of nodes by tabulating the elements inside this column (this allows the user to better understand what level of the hierarchy he is currently at)."),(0,i.kt)("a",{className:"lsdoc-anchor",id:"treegroup"}),(0,i.kt)("p",null,"Object trees also can be used to display hierarchical data (such as classifiers). In this case, the descendants of the object collection of a group in the tree can be not only object collections of lower groups but also object collections of the same group (such an object group shall be called ",(0,i.kt)("em",{parentName:"p"},"hierarchical"),'). To determine these child object collections in a hierarchical object group, it is necessary to define an additional filter for it \u2013 which, unlike regular filters, can refer not only to the values of the filtered object collections but also to the values of the "upper in the tree" object collection (the same approach is used in the ',(0,i.kt)("a",{parentName:"p",href:"/Recursion_RECURSION"},"recursion"),' operator). It is highly desirable that the hierarchical filter uses all the values of the upper object collections, since otherwise, as with filters between different groups of objects, creating such a tree doesn\'t make sense. Initially, it is assumed that all values of the "upper in the tree" object collection are ',(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the current platform implementation, hierarchical groups allow only trees to be displayed (not directed graphs). Accordingly, it is allowed to use only values of the upper object collections and properties that take lower (filtered) values of objects as input for a hierarchical filter (so that it is guaranteed that the same tree node cannot be reached in different ways)"))),(0,i.kt)("p",null,'The properties of different object groups in the tree are arranged in columns under each other, that is, the first column displays the first properties of each object group, the second column displays the second ones, and so on. The total number of tree columns is determined by the last group of objects on the tree (all "extra" properties of the upper groups are simply ignored).'),(0,i.kt)("h3",{id:"property"},"Property views"),(0,i.kt)("p",null,"Any property or action can be displayed on a form in one of the following ",(0,i.kt)("em",{parentName:"p"},"views"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Panel")," (",(0,i.kt)("inlineCode",{parentName:"li"},"PANEL"),"): a separate component that displays a property caption and this property value for the current values of the form objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Toolbar")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR"),"): similar to a panel, but this component has a different default location (immediately below the table), and if the table to which a toolbar belongs is hidden then the toolbar is hidden with it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"table column")," (",(0,i.kt)("inlineCode",{parentName:"li"},"GRID"),"): a separate column in the table that displays the property values for all object collections (rows) in the table.")),(0,i.kt)("p",null,"For each object group, you can specify which ",(0,i.kt)("em",{parentName:"p"},"default view")," the properties of this group will be displayed in (by default, this view is a table column). If the property has no parameters (that is, it does not have a display group), it is displayed in a panel. Actions are always displayed in a panel by default."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."))),(0,i.kt)("p",null,"If necessary, the developer can explicitly specify which view a property should use."),(0,i.kt)("p",null,"If at any point there are no properties displayed in the table for the object group, the table is automatically hidden."),(0,i.kt)("p",null,"By default, the caption of each property on the form is the title of the property itself. If necessary, the developer can specify a different caption, or, if you need even more flexibility, use a property as a caption. This caption property can receive ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#groupcolumns"},"upper")," objects of the displayed property as input. It is also worth noting that if ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#groupcolumns"},"groups-in-columns")," are defined for the property, then it is desirable to have different captions for the created columns (in order to distinguish them somehow): in this case, it is recommended to use a property that receives all (!) objects of the defined group-in-columns as input."),(0,i.kt)("p",null,"In addition to the captions, you can define colors (both the background color and the text color) for each property view on a form, as well as a condition that needs to be met for the property to be displayed. Like the caption, each of these parameters is defined using some property."),(0,i.kt)("h3",{id:"filtergroup"},"Filter group"),(0,i.kt)("p",null,"In order to provide the user with an interface for choosing filters to apply, they can be combined into ",(0,i.kt)("em",{parentName:"p"},"filter groups"),". For each of these groups, a special component will be created on the form: the user can use it to select one filter from the group as the current active filter. If several filters in one group are applied to different object groups, then the component will be displayed for the last of them."),(0,i.kt)("p",null,"The developer can specify a name for each filter group which can be used to access it in the future (for example, in form design)."),(0,i.kt)("h3",{id:"userfilters"},"Custom filters/orders"),(0,i.kt)("p",null,"The user can change existing orders or add their own, as well as add their own filters using the corresponding interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Orders \u2013 by double-clicking on the column heading."),(0,i.kt)("li",{parentName:"ul"},"Filters \u2013 by using the corresponding button under the table for each object group. By default, the filter is set to the active property in the table, and filters it for equality to the entered value (for all types except case-insensitive string types, where the filter is set to include the entered string). If necessary, the developer can specify the default filtering type explicitly by using the corresponding option.")),(0,i.kt)("h3",{id:"defaultobject"},"Default objects selection"),(0,i.kt)("p",null,"In the interactive form view, object group filters can change as a result of various user actions (for example, changing the upper objects of these filters, selecting filters in the filter group, etc.), after which the ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#currentObject"},"current")," objects may no longer meet the conditions of the new filters. Also, when ",(0,i.kt)("a",{parentName:"p",href:"/Open_form"},"a form is opened"),", some objects may not be ",(0,i.kt)("a",{parentName:"p",href:"/Open_form#params"},"passed")," or may be passed equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". In both of these cases, it is necessary to change the current objects, to some current ",(0,i.kt)("em",{parentName:"p"},"default objects"),". The platform provides several options for selecting new current objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First (",(0,i.kt)("inlineCode",{parentName:"li"},"FIRST"),") - the first object collection (in accordance with the current order)"),(0,i.kt)("li",{parentName:"ul"},"Last (",(0,i.kt)("inlineCode",{parentName:"li"},"LAST"),") \u2013 last object collection."),(0,i.kt)("li",{parentName:"ul"},"Previous (",(0,i.kt)("inlineCode",{parentName:"li"},"PREV"),") \u2013 the previous object collection (or as close to it as possible)."),(0,i.kt)("li",{parentName:"ul"},"Undefined (",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),") \u2013 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," values collection.")),(0,i.kt)("p",null,"If none of these options is explicitly specified, the platform will try to determine whether the permanent filters in the group of objects are a) mutually exclusive for different values of the upper objects (if any), and/or b) the filter selects a very small percentage of the total number of objects of the specified classes. In both of these cases, it makes no sense to search for the previous object and, by default, the first object is selected (",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST"),"); in all other cases, the previous object (",(0,i.kt)("inlineCode",{parentName:"p"},"PREV"),")."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is worth noting that the selection of objects by default is pretty the same as the ",(0,i.kt)("a",{parentName:"p",href:"/Search_SEEK"},"object search")," operation, where the search objects are:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"for type ",(0,i.kt)("inlineCode",{parentName:"li"},"PREV"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on opening a form: either the passed objects, or, if there are none, the last used objects for the form object class."),(0,i.kt)("li",{parentName:"ul"},"in other cases: the previous current object values"))),(0,i.kt)("li",{parentName:"ul"},"for other types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on opening the form - passed objects"),(0,i.kt)("li",{parentName:"ul"},"in other cases \u2013 an empty object collection")))),(0,i.kt)("p",{parentName:"div"},"Search direction is determined by the object's default type (",(0,i.kt)("inlineCode",{parentName:"p"},"PREV")," here is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST"),")."))),(0,i.kt)("h3",{id:"objectoperators"},"Object operators"),(0,i.kt)("p",null,"When adding properties to a form, you can use a predefined set of operators that implement the most common scenarios for working with objects instead of using specific properties (thus avoiding the need to create and name these properties outside the form each time):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Object value (",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE"),") \u2013 for a form object of ",(0,i.kt)("a",{parentName:"li",href:"/Built-in_classes"},"built-in class")," , a special property with one argument will be added which displays the current object value and allows the user to change it. For ",(0,i.kt)("a",{parentName:"li",href:"/User_classes"},"custom classes"),", a property will be added which displays the object ID in the database; when you try to change it, it shows a dialog with a list of objects of that class. The selected value will be used as the current value of the object on the form."),(0,i.kt)("li",{parentName:"ul"},"Create object (",(0,i.kt)("inlineCode",{parentName:"li"},"NEW"),") \u2013 adds an action without arguments, which ",(0,i.kt)("a",{parentName:"li",href:"/New_object_NEW"},"creates")," an object of the class of the passed form object (or the class explicitly specified by the developer), after which it automatically makes this object current. If the class has descendants, the user will be shown a dialog where he can select specific child class. If any filters are applied to the form object, for which the object is created, the system will try to ",(0,i.kt)("a",{parentName:"li",href:"/Property_change_CHANGE"},"change")," the newly created object's properties so that it meets these filter conditions (as a rule, for created objects, a default value of the class of each filter's value is written to that filter)"),(0,i.kt)("li",{parentName:"ul"},"Edit object (",(0,i.kt)("inlineCode",{parentName:"li"},"EDIT"),") \u2013 adds an action with one argument, which calls the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.formEdit")," action (which, in turn, open the default ",(0,i.kt)("a",{parentName:"li",href:"#edtClass"},"edit form")," for the edited object class). "),(0,i.kt)("li",{parentName:"ul"},"Create and edit an object (",(0,i.kt)("inlineCode",{parentName:"li"},"NEWEDIT"),") \u2013 adds an action without arguments which creates an object of the form object class, calls the edit object action (",(0,i.kt)("inlineCode",{parentName:"li"},"EDIT"),"), and if the input is not ",(0,i.kt)("a",{parentName:"li",href:"/Value_input#result"},"canceled"),", sets the added object as current."),(0,i.kt)("li",{parentName:"ul"},"Delete object (",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"),") \u2013 adds an action with one argument which deletes the current object.")),(0,i.kt)("p",null,"You can also specify options for the last four operators (ignored for all other actions):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/New_session_NEWSESSION_NESTEDSESSION"},"New Session")," (",(0,i.kt)("inlineCode",{parentName:"li"},"NEWSESSION"),") \u2013 in this case, the action added to the form will be executed in a new session. When opening forms in a new session, it is important to remember that changes made in the current session (form) will not be visible. Thus, this mechanism is only recommended if the form is opened from a form in which the user cannot change anything, or if the properties and actions of the two forms do not intersect in any way. Note that when the operator is used to create a new object (",(0,i.kt)("inlineCode",{parentName:"li"},"NEW"),") in a new session, the object is not only created but also edited (",(0,i.kt)("inlineCode",{parentName:"li"},"NEWEDIT"),") (otherwise, the session would immediately close and your changes would be lost)."),(0,i.kt)("li",{parentName:"ul"},"Nested Session (",(0,i.kt)("inlineCode",{parentName:"li"},"NESTEDSESSION"),") \u2013 the action will be executed in a new nested session. As with a new session, ",(0,i.kt)("inlineCode",{parentName:"li"},"NEW")," is replaced by ",(0,i.kt)("inlineCode",{parentName:"li"},"NEWEDIT"),".")),(0,i.kt)("h3",{id:"edtClass"},"Selection/editing forms"),(0,i.kt)("p",null,"For each form, you can specify that it is the default form for viewing/editing objects of a given class. In this case, this form will be opened when you call actions created using the operators for object operations (create/edit an object). The same form will be opened when the corresponding  ",(0,i.kt)("a",{parentName:"p",href:"/Open_form#form"},"form selection")," option is used in the form opening operator."),(0,i.kt)("p",null,"If list/edit form is not defined for a class, the platform will create one automatically. This form will consist of one object of the class, along with all properties matching the class and belonging to the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.base")," ",(0,i.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"property group"),". Also, actions of ",(0,i.kt)("a",{parentName:"p",href:"#objectoperators"},"creating, editing and deleting")," an object in a ",(0,i.kt)("a",{parentName:"p",href:"#objectoperators"},"new session")," will be automatically added to the form, along with the ",(0,i.kt)("a",{parentName:"p",href:"#objectoperators"},"object value")," property if there are no properties from the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.id"),' property group corresponding to the class of the object (that is, no "ID" of the object has been added to the form).'),(0,i.kt)("h3",{id:"owner"},"Session owner"),(0,i.kt)("p",null,"Since a form is opened by default in the current session, it may not always be safe to apply/cancel changes to this session: for example, the changes made in other forms may accidentally be applied. To avoid such situations, the platform has the concept of a ",(0,i.kt)("em",{parentName:"p"},"session owner")," \u2013 a form which is responsible for managing the life cycle of the session (for example, applying / canceling changes). By default, it is considered that a form is the session owner if the session did not have any other owner when the form was ",(0,i.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG"},"opened"),"."),(0,i.kt)("p",null,"To implement the mechanism for working with session owners the platform uses a numerical ",(0,i.kt)("a",{parentName:"p",href:"/Data_properties_DATA#local"},"local")," property called ",(0,i.kt)("inlineCode",{parentName:"p"},"System.sessionOwners"),". Accordingly, this property is incremented by ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," when you open a form and decremented by ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),' when you close it. Thus, it shows the nesting depth of the "form opening stack", and is ',(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," if the session has no owner and not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," otherwise."),(0,i.kt)("p",null,"If necessary, the developer can explicitly specify when opening a form that this form is the owner of the session that it uses."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Session ownership only affects the display / behavior of system actions for managing the life cycle of a form / session. When using the remaining actions, it is recommended that the developer should consider the risk of applying the "wrong" changes by himself (and, for example, use the mentioned above ',(0,i.kt)("inlineCode",{parentName:"p"},"System.sessionOwners")," property)."))),(0,i.kt)("h3",{id:"sysactions"},"System actions for form/session lifecycle management"),(0,i.kt)("p",null,"The following system actions are automatically added to any form (their names are specified in brackets):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refresh (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formRefresh"),") - updates the current state of the form, re-reading all the information from the database."),(0,i.kt)("li",{parentName:"ul"},"Save (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formApply"),") - saves the changes made on the form to the database."),(0,i.kt)("li",{parentName:"ul"},"Cancel (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formCancel"),") - cancels all changes made on the ",(0,i.kt)("em",{parentName:"li"},"form"),"."),(0,i.kt)("li",{parentName:"ul"},"OK (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formOk"),") \u2013 closes the current form and, if the form is the session owner, applies the changes to the database."),(0,i.kt)("li",{parentName:"ul"},"Close (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formClose"),") - closes the current ",(0,i.kt)("em",{parentName:"li"},"form")," and does nothing with the changes."),(0,i.kt)("li",{parentName:"ul"},"Drop (",(0,i.kt)("inlineCode",{parentName:"li"},"System.formDrop"),") \u2013 closes the current form and returns ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," as the selected object.")),(0,i.kt)("p",null,"By default, these system actions have the following visibility conditions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Condition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Refresh"),(0,i.kt)("td",{parentName:"tr",align:null},"Always")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Save, Cancel"),(0,i.kt)("td",{parentName:"tr",align:null},"If the form is the owner and actions that change the current session can be called on the form. Cancel may not be shown if the platform determines that canceling the changes is guaranteed to lead to a change of the ",(0,i.kt)("a",{parentName:"td",href:"/Open_form#params"},"initial values")," of form objects (i.e., selecting other objects)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OK, Close"),(0,i.kt)("td",{parentName:"tr",align:null},"If the form was opened ",(0,i.kt)("a",{parentName:"td",href:"/In_an_interactive_view_SHOW_DIALOG#flow"},"synchronously"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Drop"),(0,i.kt)("td",{parentName:"tr",align:null},"If the form is opened synchronously, returns a value and allows ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," values to be passed")))),(0,i.kt)("p",null,"If necessary, all these actions can be shown/hidden by removing the corresponding components from the ",(0,i.kt)("a",{parentName:"p",href:"/Form_design"},"form design")," and/or using the corresponding options in the ",(0,i.kt)("a",{parentName:"p",href:"/Open_form"},"open form")," operator."),(0,i.kt)("h3",{id:"extra"},"Additional features"),(0,i.kt)("p",null,"You can specify an image file which will be displayed as the form's icon."),(0,i.kt)("p",null,"Also, if necessary, you can enable ",(0,i.kt)("em",{parentName:"p"},"automatic update")," mode for a form: the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.formRefresh")," action will then be executed for the form at a specified interval."),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"All of the above options, as well as defining the form structure, can be done using the ",(0,i.kt)("a",{parentName:"p",href:"/FORM_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"FORM")," statement"),"."),(0,i.kt)("h3",{id:"open-form"},"Open form"),(0,i.kt)("p",null,"To display the form in the interactive view, the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/Open_form"},"open form")," operator is used in ",(0,i.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG"},"interactive view"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}d.isMDXComponent=!0}}]);