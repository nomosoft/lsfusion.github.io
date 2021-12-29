"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48399],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,N=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(N,o(o({ref:t},m),{},{components:n})):a.createElement(N,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],p={title:"DIALOG operator"},l=void 0,s={unversionedId:"DIALOG_operator",id:"DIALOG_operator",title:"DIALOG operator",description:"The DIALOG operator creates an action that opens a form in an interactive view in dialog mode.",source:"@site/docs/DIALOG_operator.md",sourceDirName:".",slug:"/DIALOG_operator",permalink:"/next/DIALOG_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/DIALOG_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"DIALOG operator"},sidebar:"learn",previous:{title:"DELETE operator",permalink:"/next/DELETE_operator"},next:{title:"EMAIL operator",permalink:"/next/EMAIL_operator"}},m=[{value:"Syntax",id:"syntax",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Input options",id:"input-options",children:[],level:3},{value:"Additional options",id:"additional-options",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DIALOG")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,i.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG"},"opens a form")," in an interactive view in ",(0,i.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG#dialog"},"dialog")," mode. "),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DIALOG name\n[OBJECTS objName1 [= expr1] [NULL] [inputOptions1], ..., objNameN [= exprN] [NULL] [inputOptionsN]]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),(0,i.kt)("p",null,"When opening the list/edit form, the syntax is slightly different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DIALOG classFormType className\n[= expr] [NULL] [inputOptions]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"inputOptions")," \u2013 object options that determine whether the last current values of this object should be returned after the form is closed and what to do next with these values (defined with one of the following syntaxes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INPUT [alias] [NULL]\nCHANGE [= changeExpr] [NOCONSTRAINTFILTER] [alias] [NULL]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formActionOptions")," - additional options for this action. They can be added one by one in any order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"windowType\nMANAGESESSION | NOMANAGESESSION\nCANCEL | NOCANCEL\nNEWSESSION | NESTEDSESSION\nREADONLY\n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DIALOG")," operator creates an action that opens the specified form. When opening a form in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block you can ",(0,i.kt)("a",{parentName:"p",href:"/next/Open_form#params"},"specify")," ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_input#initial"},"initial values")," for the ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_structure"},"form objects")," and also return the last current values to the specified parameters and execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"DO")," action which will process the received values in case the input has not been cancelled."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Form name. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"classFormType")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Determines which form to open:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LIST")," \u2013 list form"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EDIT")," \u2013 edit form"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"className")),(0,i.kt)("p",{parentName:"li"},"  The name of the custom class for which a list/edit form should be opened. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameN")),(0,i.kt)("p",{parentName:"li"},"  Names of form objects for which initial values are specified. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple IDs"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr1 ... exprN")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," which values determine the initial values for form objects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NULL")),(0,i.kt)("p",{parentName:"li"},"  Specifies that ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values can be passed. This option is automatically enabled if the object returns a value."))),(0,i.kt)("h3",{id:"input-options"},"Input options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If used, then the last current value of the object of the opened form will be written to the specified local parameter and, if necessary, to the specified property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"alias")),(0,i.kt)("p",{parentName:"li"},"  The name of the local parameter to which the input result is written. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". If the name is not specified, then the name of the form object will be used as the parameter name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")),(0,i.kt)("p",{parentName:"li"},"  A keyword indicating that in addition to the value input the result needs to be written to the specified property. Also by default, this option sets an additional filter for the object values on the opened form so that when selecting an object and changing the specified property to the value of this object, none of the existing ",(0,i.kt)("a",{parentName:"p",href:"/next/Constraints"},"constraints")," are violated. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NOCONSTRAINTFILTER")),(0,i.kt)("p",{parentName:"li"},"  If used, no additional filter for constraint compliance is set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"changeExpr")),(0,i.kt)("p",{parentName:"li"},"  An ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," that determines the property to which the input result is written. By default, the property specified as the initial object value is used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NULL")),(0,i.kt)("p",{parentName:"li"},"  A keyword that determines whether the user can select ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),' as the return value (using the special "Drop" action \u2013 ',(0,i.kt)("inlineCode",{parentName:"p"},"System.formDrop"),"). If not used, will be enabled if and only if the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")," option is specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"elseActionOperator")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Parameters added to the input block ",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")," cannot be used as parameters."))),(0,i.kt)("h3",{id:"additional-options"},"Additional options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"windowType")),(0,i.kt)("p",{parentName:"li"},"  Method of ",(0,i.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG#location"},"the form layout"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOCKED")," - as a tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FLOAT")," - as a window. Used by default."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MANAGESESSION")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"NOMANAGESESSION")),(0,i.kt)("p",{parentName:"li"},"  Keywords. Determine whether or not the created form is considered to be the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#owner"},"session owner")," (if so, the corresponding buttons for managing the session will be shown on the form in interactive mode). By default, the platform tries to determine which mode to use ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#sysactions"},"automatically")," depending on the context.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CANCEL")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"NOCANCEL")),(0,i.kt)("p",{parentName:"li"},'  Keywords. Determine whether or not to show the "Cancel" system action (',(0,i.kt)("inlineCode",{parentName:"p"},"System.formCancel"),") on the form. By default, the platform tries to determine which mode to use ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#sysactions"},"automatically")," depending on context.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),(0,i.kt)("p",{parentName:"li"},"  Keywords. Determine that the form will be opened in a new (nested) session. By default, the form is opened in the current session.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"READONLY")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is opened in ",(0,i.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG#extra"},"read-only")," mode."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}c.isMDXComponent=!0}}]);