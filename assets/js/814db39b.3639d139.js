"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82771],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"CHANGECLASS operator"},i=void 0,p={unversionedId:"CHANGECLASS_operator",id:"CHANGECLASS_operator",title:"CHANGECLASS operator",description:"The CHANGECLASS operator creates an action that changes objects classes.",source:"@site/docs/CHANGECLASS_operator.md",sourceDirName:".",slug:"/CHANGECLASS_operator",permalink:"/next/CHANGECLASS_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CHANGECLASS_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"CHANGECLASS operator"},sidebar:"learn",previous:{title:"CASE operator",permalink:"/next/CASE_action_operator"},next:{title:"INTERNAL operator",permalink:"/next/INTERNAL_operator"}},c={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGECLASS")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/next/Class_change_CHANGECLASS_DELETE"},"changes objects classes"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CHANGECLASS expr TO className [WHERE whereExpr]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGECLASS")," operator creates an action that changes the class of objects for which a certain condition is met. This operator can add its local parameter, which will correspond to the objects being iterated. In this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," block is required. This local parameter will not be a parameter of the action being created."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," or ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"typed parameter"),". You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"  The name of the class to which you want to change the object classes. A ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"composite ID"),", since the class must be a ",(0,a.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom")," class.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value is a condition for the created action. If not specified, it is considered equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),"."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\ndate = DATA DATE (Document);\n\nCLASS ClosedDocument : Document;\n// sets status to closed for all documents with a date older than 2 weeks\nchangeStatus()  {\n    CHANGECLASS Document d TO ClosedDocument WHERE sum(date(d), 14) <= currentDate();\n}\n")))}u.isMDXComponent=!0}}]);