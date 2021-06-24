(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[57391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,k=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46078:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),p={title:"Action options"},o={unversionedId:"Action_options",id:"Action_options",isDocsHomePage:!1,title:"Action options",description:"When declaring an action in the ACTION statement a certain set of action options may be specified at the end of the declaration.",source:"@site/docs/Action_options.md",sourceDirName:".",slug:"/Action_options",permalink:"/next/Action_options",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Action_options.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Action options"},sidebar:"learn",previous:{title:"WRITE operator",permalink:"/next/WRITE_operator"},next:{title:"GROUP statement",permalink:"/next/GROUP_statement"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[{value:"Interactive view block",id:"interactive-view-block",children:[]},{value:"<code>DESIGN</code> statement default values block",id:"design-statement-default-values-block",children:[]}]}],s={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When declaring an ",(0,r.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," in the ",(0,r.kt)("a",{parentName:"p",href:"/next/ACTION_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTION")," statement")," a certain set of ",(0,r.kt)("em",{parentName:"p"},"action options")," may be specified at the end of the declaration. "),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),(0,r.kt)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n")),(0,r.kt)("h2",{id:"description-and-parameters"},"Description and parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IN groupName")),(0,r.kt)("p",{parentName:"li"},"  Specifying the ",(0,r.kt)("a",{parentName:"p",href:"/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the action belongs. If the option is not specified, then the action will belong by default to the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.private")," group."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"groupName")),(0,r.kt)("p",{parentName:"li"},"  A group name. ",(0,r.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),"."))))),(0,r.kt)("h3",{id:"interactive-view-block"},"Interactive view block"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"viewType")),(0,r.kt)("p",{parentName:"li"},"  Specifying the type of the ",(0,r.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"action view")," when added to the form."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GRID")," - table column"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TOOLBAR")," - toolbar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PANEL")," - panel")),(0,r.kt)("p",{parentName:"li"},"It is similar to specifying the viewType option in the ",(0,r.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"property block")," of the ",(0,r.kt)("a",{parentName:"p",href:"/next/FORM_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"FORM")," statement"),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",(0,r.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"default view")," of the action display group on the form is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ON eventType { actionOperator }")),(0,r.kt)("p",{parentName:"li"},"  Specifying an action that will be the default handler of a certain ",(0,r.kt)("a",{parentName:"p",href:"/next/Form_events"},"event")," for all the interactive views of this action. Can be overridden in the property block of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM")," statement."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eventType")),(0,r.kt)("p",{parentName:"li"},"  A ",(0,r.kt)("a",{parentName:"p",href:"/next/Form_events"},"form event")," type. It is specified by one of the keywords:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of the specified property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHANGEWYS")," - occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the ",(0,r.kt)("a",{parentName:"li",href:"/next/Form_events"},"form events")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTEXTMENU [caption]")," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the caption of this menu item (",(0,r.kt)("a",{parentName:"li",href:"/next/Literals#strliteral"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,r.kt)("p",{parentName:"li"},"  A ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ASON eventType [ACTION] propertyId")),(0,r.kt)("p",{parentName:"li"},"  Specifies that this action will be the default handler of a certain ",(0,r.kt)("a",{parentName:"p",href:"/next/Form_events"},"event")," for all the interactive views of the specified property or action. Can be overridden in the ",(0,r.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"property and action block")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM")," statement. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eventType")),(0,r.kt)("p",{parentName:"li"},"  Similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON")," block.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,r.kt)("p",{parentName:"li"},"  An ",(0,r.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property or action")," for which the created action will be executed when the specified form event occurs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ACTION")),(0,r.kt)("p",{parentName:"li"},"  Keyword. If specified, it is considered that the action is set in ",(0,r.kt)("inlineCode",{parentName:"p"},"propertyId"),". If not specified, it is initially considered that a property is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"propertyId"),"; otherwise, if no property is found, it is considered that an action is specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"propertyId"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE path")),(0,r.kt)("p",{parentName:"li"},"  Specifies the file with the image to be displayed as an action icon."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path")),(0,r.kt)("p",{parentName:"li"},"  The relative path to the file. ",(0,r.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". The path is specified relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," folder."))))),(0,r.kt)("h3",{id:"design-statement-default-values-block"},(0,r.kt)("inlineCode",{parentName:"h3"},"DESIGN")," statement default values block"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CHANGEKEY key [SHOW | HIDE]")),(0,r.kt)("p",{parentName:"li"},"  Specifies a ",(0,r.kt)("a",{parentName:"p",href:"/next/Form_events#keyboard"},"keyboard shortcut")," which triggers this action. Sets the value for the ",(0,r.kt)("a",{parentName:"p",href:"/next/Form_design#defaultDesign"},"default design")," and can be overridden in the ",(0,r.kt)("a",{parentName:"p",href:"/next/DESIGN_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"DESIGN")," statement"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"key")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal")," that defines a keyboard shortcut. The definition method is identical to that for a parameter in the Java class method ",(0,r.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke(String)"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SHOW")),(0,r.kt)("p",{parentName:"li"},"  A keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HIDE")),(0,r.kt)("p",{parentName:"li"},"  A keyword. If specified, the keyboard shortcut will not be displayed in the action caption. ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CONFIRM")),(0,r.kt)("p",{parentName:"li"},"  Keyword. If specified, the user will be asked to confirm the action when it is executed. Sets the value for the default design and can be overridden in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement."))))}c.isMDXComponent=!0}}]);