(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11099],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"CASE operator"},p={unversionedId:"CASE_action_operator",id:"version-v4/CASE_action_operator",isDocsHomePage:!1,title:"CASE operator",description:"The CASE operator creates an action that implements branching.",source:"@site/versioned_docs/version-v4/CASE_action_operator.md",sourceDirName:".",slug:"/CASE_action_operator",permalink:"/CASE_action_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/CASE_action_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"CASE operator"},sidebar:"version-v4/learn",previous:{title:"CANCEL operator",permalink:"/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/CHANGECLASS_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that implements ",(0,o.kt)("a",{parentName:"p",href:"/Branching_CASE_IF_MULTI"},"branching"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE")," operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHEN")," block. If a selection condition is met, the action specified in the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"THEN")," block is executed. If none of the conditions is met, the action specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ELSE")," block will be executed if this block is specified."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"exclusionType")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/Branching_CASE_IF_MULTI#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is specified by one of the keywords:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EXCLUSIVE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OVERRIDE"))),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type indicates that none of the conditions listed can be met simultaneously. The ",(0,o.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," type is used by default.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"condition1 ... conditionN")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"Expressions")," whose values determine the selection conditions. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"action1 ... actionN")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"Context-dependent operators")," that describe actions that may be called when the corresponding condition is met.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"elseAction")),(0,o.kt)("p",{parentName:"li"},"  A context-dependent operator that describes an action to be executed if none of the conditions is met. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")))}s.isMDXComponent=!0}}]);