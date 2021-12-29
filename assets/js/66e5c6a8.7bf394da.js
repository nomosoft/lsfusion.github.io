"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[31969],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81905:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],p={title:"MULTI operator"},l=void 0,s={unversionedId:"MULTI_operator",id:"MULTI_operator",title:"MULTI operator",description:"The MULTI operator creates a property that implements selection of one of the values (polymorphic form).",source:"@site/docs/MULTI_operator.md",sourceDirName:".",slug:"/MULTI_operator",permalink:"/next/MULTI_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/MULTI_operator.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"MULTI operator"},sidebar:"learn",previous:{title:"MIN operator",permalink:"/next/MIN_operator"},next:{title:"OVERRIDE operator",permalink:"/next/OVERRIDE_operator"}},c=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MULTI")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements ",(0,o.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#single"},"selection")," of one of the values (polymorphic form)."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MULTI expr1, ..., exprN [exclusionType]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MULTI")," operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition is that the parameters match this property ",(0,o.kt)("a",{parentName:"p",href:"/next/CLASS_operator"},"signature"),". "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN"),"  "),(0,o.kt)("p",{parentName:"li"},"  A list of ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," defining the properties from which the selection is made.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"exclusionType")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EXCLUSIVE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OVERRIDE"))),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type indicates that the conditions for the property selection cannot be met simultaneously. The ",(0,o.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected. "),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type is used by default."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n")))}m.isMDXComponent=!0}}]);