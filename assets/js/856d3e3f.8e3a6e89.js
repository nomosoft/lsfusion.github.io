(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48993],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15036:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return l}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),s={title:"EXTEND CLASS statement"},o={unversionedId:"EXTEND_CLASS_statement",id:"version-v4/EXTEND_CLASS_statement",isDocsHomePage:!1,title:"EXTEND CLASS statement",description:"The EXTEND CLASS statement extends an existing class.",source:"@site/versioned_docs/version-v4/EXTEND_CLASS_statement.md",sourceDirName:".",slug:"/EXTEND_CLASS_statement",permalink:"/EXTEND_CLASS_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTEND_CLASS_statement.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"EXTEND CLASS statement"},sidebar:"version-v4/learn",previous:{title:"WINDOW statement",permalink:"/WINDOW_statement"},next:{title:"EXTEND FORM statement",permalink:"/EXTEND_FORM_statement"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTEND CLASS")," statement ",(0,i.kt)("a",{parentName:"p",href:"/Class_extension"},"extends")," an existing class."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTEND CLASS")," statement extends an existing ",(0,i.kt)("a",{parentName:"p",href:"/User_classes"},"custom class")," with additional parent classes and new ",(0,i.kt)("a",{parentName:"p",href:"/Static_objects"},"static objects"),". You can also extend ",(0,i.kt)("a",{parentName:"p",href:"/User_classes#abstract"},"abstract classes")," by adding parent classes to them."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Class name. A ",(0,i.kt)("a",{parentName:"p",href:"/IDs#cid"},"composite ID"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectName1, ..., objectNameM")),(0,i.kt)("p",{parentName:"li"},"  Names of new static objects of the specified class. Each name is defined ",(0,i.kt)("a",{parentName:"p",href:"/IDs#id"},"by a simple ID"),". Name values are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticName")," system property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),(0,i.kt)("p",{parentName:"li"},"  Captions of new static objects of the specified class. Each caption is a ",(0,i.kt)("a",{parentName:"p",href:"/IDs#strliteral"},"string literal"),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticCaption")," system property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parent1, ..., parentN")),(0,i.kt)("p",{parentName:"li"},"  A list of names of new parent classes. Each name is defined by a composite ID. "))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n    point 'Dot',\n    segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n    circle 'Circle'\n}\n")))}l.isMDXComponent=!0}}]);