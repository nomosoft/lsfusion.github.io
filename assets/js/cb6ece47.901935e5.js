(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10568],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54257:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"[] operator"},i={unversionedId:"Brackets_operator",id:"Brackets_operator",isDocsHomePage:!1,title:"[] operator",description:"The ] operator creates a [property that returns an object from a structure.",source:"@site/docs/Brackets_operator.md",sourceDirName:".",slug:"/Brackets_operator",permalink:"/next/Brackets_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Brackets_operator.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"[] operator"},sidebar:"learn",previous:{title:"Arithmetic operators",permalink:"/next/Arithmetic_operators"},next:{title:"ABSTRACT operator",permalink:"/next/ABSTRACT_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that returns an object from a ",(0,o.kt)("a",{parentName:"p",href:"/next/Structure_operators_STRUCT"},"structure"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"expr [ number ]\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"]")," are ordinary square brackets."),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," operator creates a property that takes a structure as input and returns one of the objects of this structure. Objects are accessed using the sequence number of the object. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value must be a structure.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",{parentName:"li"},"  The sequence number of an object. ",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#intliteral"},"Integer literal"),". Must be within the range of ",(0,o.kt)("inlineCode",{parentName:"p"},"[1..N]"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," is the number of objects in the structure."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Letter;\nattachment1 = DATA FILE (Letter);\nattachment2 = DATA FILE (Letter);\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // returns attachment2\n")))}l.isMDXComponent=!0}}]);