"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[91689],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Constant"},c=void 0,l={unversionedId:"Constant",id:"Constant",title:"Constant",description:"The constant operator is used to create properties without parameters which always return the same value. This value can be static objects of custom and built-in classes as well as the special NULL value.",source:"@site/docs/Constant.md",sourceDirName:".",slug:"/Constant",permalink:"/next/Constant",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Constant.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Constant"},sidebar:"learn",previous:{title:"Composition (JOIN)",permalink:"/next/Composition_JOIN"},next:{title:"Overview",permalink:"/next/Operations_with_primitives"}},p=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"constant")," operator is used to create properties without parameters which always return the same value. This value can be ",(0,o.kt)("a",{parentName:"p",href:"/next/Static_objects"},"static objects")," of ",(0,o.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom")," and ",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in")," classes as well as the special ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value. "),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"Static objects of custom classes are specified as ",(0,o.kt)("inlineCode",{parentName:"p"},"<class name>.<object name>"),"."),(0,o.kt)("p",null,"Static objects of built-in classes are specified by special ",(0,o.kt)("a",{parentName:"p",href:"/next/Literals"},"literals"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Direction {\n    north, east, south, west // declaring static objects\n}\n\n// A constant property is created from a Direction.north object which is then used \n// by the comparison operator to construct the isNorth property\nisNorth (Direction d) = d == Direction.north;  \n\n// A constant property is created from a literal describing the date\ndefaultDate() = 1982_07_13;                         \n\nCLASS Man;\nage 'Age' = DATA INTEGER (Man);\n// A constant property is created from an integer (integer literal)\nisChild (Man m) = age(m) < 17;                        \n")))}f.isMDXComponent=!0}}]);