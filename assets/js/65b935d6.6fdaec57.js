(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1068],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60212:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"Change operators"},p={unversionedId:"Change_operators",id:"Change_operators",isDocsHomePage:!1,title:"Change operators",description:"Change operators - a set of operators that determine various types of property value changes.",source:"@site/docs/Change_operators.md",sourceDirName:".",slug:"/Change_operators",permalink:"/next/Change_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Change_operators.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Change operators"},sidebar:"learn",previous:{title:"IS, AS operators",permalink:"/next/IS_AS_operators"},next:{title:"Comparison operators",permalink:"/next/Comparison_operators"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Change operators - a set of operators that determine various types of ",(0,o.kt)("a",{parentName:"p",href:"/next/Change_operators_SET_CHANGED_etc"},"property value changes"),". "),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"typeChange(propExpr)\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Change operators create ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"actions")," which determine whether some types of changes have been made for a certain property in the current session."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"typeChange")),(0,o.kt)("p",{parentName:"li"},"  Type of the change operator. It is specified by one of the keywords:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CHANGED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DROPPED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SETCHANGED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DROPCHANGED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SETDROPPED")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propExpr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," which value defines the property that should be checked for the presence of a change."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}c.isMDXComponent=!0}}]);