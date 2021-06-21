(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[56782],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92798:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"IF ... THEN operator"},p=void 0,l={unversionedId:"IF_..._THEN_operator",id:"version-v4/IF_..._THEN_operator",isDocsHomePage:!1,title:"IF ... THEN operator",description:"The IF ... THEN operator creates a property that implements selection with one condition (single form).",source:"@site/versioned_docs/version-v4/IF_..._THEN_operator.md",sourceDirName:".",slug:"/IF_..._THEN_operator",permalink:"/IF_..._THEN_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/IF_..._THEN_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"IF ... THEN operator"},sidebar:"version-v4/learn",previous:{title:"IF operator",permalink:"/IF_operator"},next:{title:"JOIN operator",permalink:"/JOIN_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"property")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"selection")," with one condition (single form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IF condition \n    THEN value\n    [ELSE alternativeValue]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", then the value of the created property will be the value of the property specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"THEN")," block; otherwise, the value will be the value of the property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE")," block, or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," if no ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE")," block was specified."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"condition")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"Expression")," defining a condition. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"value")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value will be the value of the created property if the condition is met.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"alternativeValue")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value will be the value of the created property if the condition is not met."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); // if h is of another class, it will be NULL\n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}u.isMDXComponent=!0}}]);