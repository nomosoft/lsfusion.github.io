"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22355],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,N=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(N,i(i({ref:t},d),{},{components:n})):r.createElement(N,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Change operators (SET, CHANGED, ...)"},i=void 0,l={unversionedId:"Change_operators_SET_CHANGED_etc",id:"version-v4/Change_operators_SET_CHANGED_etc",title:"Change operators (SET, CHANGED, ...)",description:"Change operators determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the previous value operator (PREV), however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:",source:"@site/versioned_docs/version-v4/Change_operators_SET_CHANGED_etc.md",sourceDirName:".",slug:"/Change_operators_SET_CHANGED_etc",permalink:"/Change_operators_SET_CHANGED_etc",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Change_operators_SET_CHANGED_etc.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Change operators (SET, CHANGED, ...)"},sidebar:"version-v4/learn",previous:{title:"Previous value (PREV)",permalink:"/Previous_value_PREV"},next:{title:"User/IS interaction",permalink:"/User_IS_interaction"}},p={},s=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Change operators")," determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the ",(0,a.kt)("a",{parentName:"p",href:"/Previous_value_PREV"},"previous value operator (",(0,a.kt)("inlineCode",{parentName:"a"},"PREV"),")"),", however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SET")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"f AND NOT PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DROPPED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NOT f AND PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is reset")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(f OR PREV(f)) AND NOT f==PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is changed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SETCHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"f AND NOT f==PREV(f)"),(0,a.kt)("br",null),"or",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT DROPPED(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is changed to non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DROPCHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT SET(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is either reset or changed from one non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL")," to another non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SETDROPPED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SET(f) OR DROPPED(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is either reset or changed from ",(0,a.kt)("inlineCode",{parentName:"td"},"NULL")," to non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These operators are computed differently inside the ",(0,a.kt)("a",{parentName:"p",href:"/Events#change"},"event")," handler: in this case, they return changes from the point of the previous occurrence of this event, or rather, from the point at which all its handlers are completed."))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property using change operators, the following ",(0,a.kt)("a",{parentName:"p",href:"/Change_operators"},"syntax constructs")," are used. "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}u.isMDXComponent=!0}}]);