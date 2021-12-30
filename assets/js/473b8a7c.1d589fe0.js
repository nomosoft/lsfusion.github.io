"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21134],{3905:function(e,t,a){a.d(t,{Zo:function(){return N},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},N=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,N=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,d=c["".concat(l,".").concat(u)]||c[u]||k[u]||o;return a?r.createElement(d,p(p({ref:t},N),{},{components:a})):r.createElement(d,p({ref:t},N))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<o;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1991:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return N},default:function(){return c}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),p=["components"],i={title:"Action operators"},l=void 0,m={unversionedId:"Action_operators",id:"Action_operators",title:"Action operators",description:"Action operator is a syntax construct that describes an operator creating an action.",source:"@site/docs/Action_operators.md",sourceDirName:".",slug:"/Action_operators",permalink:"/next/Action_operators",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Action_operators.md",tags:[],version:"current",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Action operators"},sidebar:"learn",previous:{title:"ACTION statement",permalink:"/next/ACTION_statement"},next:{title:"{...} operator",permalink:"/next/Braces_operator"}},N=[{value:"Context dependent operators",id:"contextdependent",children:[],level:3},{value:"Context independent operators",id:"contextindependent",children:[],level:3}],k={toc:N};function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Action operator")," is a syntax construct that describes an ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operators_paradigm"},"operator")," creating an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action"),"."),(0,o.kt)("p",null,"Action operators can be divided into ",(0,o.kt)("em",{parentName:"p"},"context dependent")," and ",(0,o.kt)("em",{parentName:"p"},"context independent"),"."),(0,o.kt)("h3",{id:"contextdependent"},"Context dependent operators"),(0,o.kt)("p",null,"Context dependent action operators can use external context parameters. They can be used wherever you need to define an action, for example, when creating another action or ",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"event"),". These operators are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/Braces_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"{...}")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/ACTIVATE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVATE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/ACTIVE_FORM_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE FORM")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/APPLY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"APPLY")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/ASK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ASK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/BREAK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"BREAK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/CANCEL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CANCEL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/CASE_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/CHANGE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CHANGE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/CHANGECLASS_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CHANGECLASS")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/DELETE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"DELETE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/DIALOG_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"DIALOG")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/EMAIL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EMAIL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/EVAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EVAL")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/EXEC_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXEC")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/FOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"FOR")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/IF_..._THEN_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IF ... THEN")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/INPUT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INPUT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/MESSAGE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MESSAGE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/MULTI_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MULTI")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/NEW_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEW")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/NESTEDSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NESTEDSESSION")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/NEWEXECUTOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWEXECUTOR")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/NEWSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/NEWTHREAD_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWTHREAD")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/PRINT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"PRINT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/READ_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"READ")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/REQUEST_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"REQUEST")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/RETURN_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"RETURN")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/SEEK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"SEEK")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/SHOW_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"SHOW")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/TRY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"TRY")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/WHILE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WHILE")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/WRITE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"))),(0,o.kt)("h3",{id:"contextindependent"},"Context independent operators"),(0,o.kt)("p",null,"Context independent action operators cannot use external context parameters. Thus they can only be used in the ",(0,o.kt)("a",{parentName:"p",href:"/next/ACTION_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTION")," statement"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/ABSTRACT_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ABSTRACT")," operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/INTERNAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INTERNAL")," operator"))))}c.isMDXComponent=!0}}]);