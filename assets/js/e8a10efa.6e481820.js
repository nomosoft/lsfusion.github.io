(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10512],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22168:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"EVAL operator"},p={unversionedId:"EVAL_operator",id:"version-v4/EVAL_operator",isDocsHomePage:!1,title:"EVAL operator",description:"The EVAL operator: creating an action that executes code in the lsFusion language.",source:"@site/versioned_docs/version-v4/EVAL_operator.md",sourceDirName:".",slug:"/EVAL_operator",permalink:"/EVAL_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EVAL_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"EVAL operator"},sidebar:"version-v4/learn",previous:{title:"EMAIL operator",permalink:"/EMAIL_operator"},next:{title:"EXEC operator",permalink:"/EXEC_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EVAL")," operator: creating an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/Eval_EVAL"},"executes code")," in the ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," language."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EVAL")," operator is designed to execute program code while the server is running. The operator takes as its argument a string containing source code. This string can be a simple string ",(0,o.kt)("a",{parentName:"p",href:"/Constant"},"constant")," or a more complex ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expression")," that evaluates to a string."),(0,o.kt)("p",null,"The code that is passed should consist of a sequence of ",(0,o.kt)("a",{parentName:"p",href:"/Statements"},"statements")," (or ",(0,o.kt)("a",{parentName:"p",href:"/Action_operators_paradigm"},"action operators")," and local property declarations, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION")," option is specified). When the action is executed, this code is inserted into a ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module")," with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the ",(0,o.kt)("a",{parentName:"p",href:"/Module_header"},(0,o.kt)("inlineCode",{parentName:"a"},"REQUIRE")," statement"),". Thus, you can use all ",(0,o.kt)("a",{parentName:"p",href:"/Element_identification"},"elements")," from other modules in the code passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EVAL")," operator. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION")," option is not specified, it is assumed that one of the passed statements will be the creation of action with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," (it is this action that will be executed)."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expression")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expression")," whose value is the string to be executed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ACTION")),(0,o.kt)("p",{parentName:"li"},"  Keyword.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"paramExpr1, ..., paramExprN")),(0,o.kt)("p",{parentName:"li"},"  A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"addProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  // source code consisting of one statement is specified with a string constant\n\ncode 'Source code' = DATA BPSTRING[2000] ();              // a property to which the user can enter the source code\nexecute 'Execute code'  { EVAL code(); }      // the action executing this code\n")))}l.isMDXComponent=!0}}]);