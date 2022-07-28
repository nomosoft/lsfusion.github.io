"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86032],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,d=m["".concat(c,".").concat(s)]||m[s]||f[s]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Execution order"},i=void 0,l={unversionedId:"Execution_order",id:"Execution_order",title:"Execution order",description:"The platform supports the following operators for managing the order in which actions are executed:",source:"@site/docs/Execution_order.md",sourceDirName:".",slug:"/Execution_order",permalink:"/next/Execution_order",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Execution_order.md",tags:[],version:"current",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Execution order"},sidebar:"learn",previous:{title:"\u041eperators",permalink:"/next/Action_operators_paradigm"},next:{title:"Sequence ({...})",permalink:"/next/Sequence"}},c={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The platform supports the following operators for managing the order in which actions are executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Sequence"},"Sequence (",(0,a.kt)("inlineCode",{parentName:"a"},"{ ... }"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Call_EXEC"},"Action call (",(0,a.kt)("inlineCode",{parentName:"a"},"EXEC"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Loop_FOR"},"Loop (",(0,a.kt)("inlineCode",{parentName:"a"},"FOR"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Recursive_loop_WHILE"},"Recursive loop (",(0,a.kt)("inlineCode",{parentName:"a"},"WHILE"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Branching_CASE_IF_MULTI"},"Branching (",(0,a.kt)("inlineCode",{parentName:"a"},"IF"),")")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Interruption_BREAK"},"Interruption (",(0,a.kt)("inlineCode",{parentName:"a"},"BREAK"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Exit_RETURN"},"Exit (",(0,a.kt)("inlineCode",{parentName:"a"},"RETURN"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/New_threads_NEWTHREAD_NEWEXECUTOR"},"New thread (",(0,a.kt)("inlineCode",{parentName:"a"},"NEWTHREAD"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"NEWEXECUTOR"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Exception_handling_TRY"},"Exception handling (",(0,a.kt)("inlineCode",{parentName:"a"},"TRY"),")"))))}f.isMDXComponent=!0}}]);