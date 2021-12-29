"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16030],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76561:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),p=["components"],i={title:"EXCLUSIVE operator"},l=void 0,c={unversionedId:"EXCLUSIVE_operator",id:"EXCLUSIVE_operator",title:"EXCLUSIVE operator",description:"The EXCLUSIVE operator creates a property that implements a selection of one of the values (polymorphic form).",source:"@site/docs/EXCLUSIVE_operator.md",sourceDirName:".",slug:"/EXCLUSIVE_operator",permalink:"/next/EXCLUSIVE_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXCLUSIVE_operator.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"EXCLUSIVE operator"},sidebar:"learn",previous:{title:"DATA operator",permalink:"/next/DATA_operator"},next:{title:"FORMULA operator",permalink:"/next/FORMULA_operator"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements a ",(0,a.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive"},"selection")," of one of the values (polymorphic form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EXCLUSIVE expr1, ..., exprN\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," operator creates a property whose value will be the value of one of the properties specified in the operator. It is assumed that for any set of parameters, at most one of the properties will be non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". The value of the property will be the value of this single non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," property, or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," if there are no such properties."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN")),(0,a.kt)("p",{parentName:"li"},"  List of ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," whose values will determine the value of the property."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n")))}m.isMDXComponent=!0}}]);