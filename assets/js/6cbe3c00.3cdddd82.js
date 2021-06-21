(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[45424],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37193:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),p={title:"Comparison operators"},i=void 0,s={unversionedId:"Comparison_operators",id:"version-v4/Comparison_operators",isDocsHomePage:!1,title:"Comparison operators",description:"==, =, !=, `, =` operators create properties that implement comparison operations.",source:"@site/versioned_docs/version-v4/Comparison_operators.md",sourceDirName:".",slug:"/Comparison_operators",permalink:"/Comparison_operators",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Comparison_operators.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Comparison operators"},sidebar:"version-v4/learn",previous:{title:"Change operators",permalink:"/Change_operators"},next:{title:"Property options",permalink:"/Property_options"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"=="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"p"},">=")," operators create ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"properties")," that implement ",(0,a.kt)("a",{parentName:"p",href:"/Comparison_operators_=_etc"},"comparison operations"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"expression1 == expression2\nexpression1 = expression2\nexpression1 != expression2\nexpression1 < expression2\nexpression1 > expression2\nexpression1 <= expression2\nexpression1 >= expression2\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression1, expression2")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"Expressions")," which values are the arguments of a comparison operator."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\n")))}u.isMDXComponent=!0}}]);