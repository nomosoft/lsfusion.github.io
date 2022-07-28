"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59759],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,N=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(N,o(o({ref:t},u),{},{components:n})):a.createElement(N,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const l={title:"Logical operators (AND, OR, NOT, XOR)"},o=void 0,i={unversionedId:"Logical_operators_AND_OR_NOT_XOR",id:"Logical_operators_AND_OR_NOT_XOR",title:"Logical operators (AND, OR, NOT, XOR)",description:"Logical operators create properties that consider their arguments as logical values of class BOOLEAN and whose return value is also a value of class BOOLEAN. If the value of an argument of an logical operator is not NULL, then the argument is treated as the value TRUE of class BOOLEAN, otherwise as NULL.",source:"@site/docs/Logical_operators_AND_OR_NOT_XOR.md",sourceDirName:".",slug:"/Logical_operators_AND_OR_NOT_XOR",permalink:"/next/Logical_operators_AND_OR_NOT_XOR",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Logical_operators_AND_OR_NOT_XOR.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Logical operators (AND, OR, NOT, XOR)"},sidebar:"learn",previous:{title:"Arithmetic operators (+, -, *, ...)",permalink:"/next/Arithmetic_operators_+_-_etc"},next:{title:"Comparison operators (=, >, <, ...)",permalink:"/next/Comparison_operators_=_etc"}},p={},s=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Logical operators")," create ",(0,r.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," that consider their arguments as logical values of ",(0,r.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"class ",(0,r.kt)("inlineCode",{parentName:"a"},"BOOLEAN"))," and whose return value is also a value of class ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),". If the value of an argument of an logical operator is not ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", then the argument is treated as the value ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE")," of class ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),", otherwise as ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"The platform currently supports the following logical operators:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AND")),(0,r.kt)("td",{parentName:"tr",align:null},"Conjunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,r.kt)("inlineCode",{parentName:"td"},"TRUE")," if both operands are non-",(0,r.kt)("inlineCode",{parentName:"td"},"NULL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUE AND TRUE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OR")),(0,r.kt)("td",{parentName:"tr",align:null},"Disjunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,r.kt)("inlineCode",{parentName:"td"},"TRUE")," if either operand is non-",(0,r.kt)("inlineCode",{parentName:"td"},"NULL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NULL OR TRUE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOT")),(0,r.kt)("td",{parentName:"tr",align:null},"Negation"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes one operand and returns ",(0,r.kt)("inlineCode",{parentName:"td"},"TRUE")," if the operands is ",(0,r.kt)("inlineCode",{parentName:"td"},"NULL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOT TRUE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"XOR")),(0,r.kt)("td",{parentName:"tr",align:null},"Exception"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,r.kt)("inlineCode",{parentName:"td"},"TRUE")," if exactly one operand is non-",(0,r.kt)("inlineCode",{parentName:"td"},"NULL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRUE XOR TRUE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"Description of ",(0,r.kt)("a",{parentName:"p",href:"/next/AND_OR_NOT_XOR_operators"},"logical operator syntax"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}d.isMDXComponent=!0}}]);