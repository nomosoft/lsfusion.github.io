(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[19367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85508:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"ACTION statement",sidebar_label:"Overview"},p={unversionedId:"ACTION_instruction",id:"version-v4/ACTION_instruction",isDocsHomePage:!1,title:"ACTION statement",description:"The ACTION statement creates an action.",source:"@site/versioned_docs/version-v4/ACTION_instruction.md",sourceDirName:".",slug:"/ACTION_instruction",permalink:"/ACTION_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ACTION_instruction.md",version:"v4",lastUpdatedAt:1623078033,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Overview",frontMatter:{title:"ACTION statement",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Property options",permalink:"/Property_options"},next:{title:"Action operator",permalink:"/Action_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION")," statement creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION")," statement declares a new action and adds it to the current ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module"),"."),(0,o.kt)("p",null,"The statement has two forms: the first form creates an action using a ",(0,o.kt)("a",{parentName:"p",href:"/Action_operator#contextdependent"},"context-dependent")," action operator, the second form creates a ",(0,o.kt)("a",{parentName:"p",href:"/Property_operators#contextindependent"},"context-independent")," one."),(0,o.kt)("p",null,"Also, when declaring an action, a set of its options can be specified.   "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("p",{parentName:"li"},"  Action name. ",(0,o.kt)("a",{parentName:"p",href:"/IDs#id-broken"},"Simple ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"caption")),(0,o.kt)("p",{parentName:"li"},"  Action caption. ",(0,o.kt)("a",{parentName:"p",href:"/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,o.kt)("p",{parentName:"li"},"  List of parameters. Each of them is defined by a ",(0,o.kt)("a",{parentName:"p",href:"/IDs#paramid-broken"},"typed parameter")," These parameters can be later used in the action operator describing the action being created (as well as in some options)."),(0,o.kt)("p",{parentName:"li"},"  If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"operator")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/Action_operator#contextdependent"},"context-dependent")," action operator describing and creating an action. You can use the parameters defined in this statement (if any) as operator parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"contextIndependentOperator")),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("a",{parentName:"p",href:"/Action_operator#contextindependent"},"context-independent")," action operator describing and creating an action. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"options")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/Action_options"},"Action options"),". "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}s.isMDXComponent=!0}}]);