"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[73688],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25880:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"{...} operator"},i=void 0,p={unversionedId:"Braces_operator",id:"version-v4/Braces_operator",title:"{...} operator",description:"The {...} operator creates actions that executes a sequence of other actions.",source:"@site/versioned_docs/version-v4/Braces_operator.md",sourceDirName:".",slug:"/Braces_operator",permalink:"/Braces_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Braces_operator.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"{...} operator"},sidebar:"version-v4/learn",previous:{title:"Action operators",permalink:"/Action_operators"},next:{title:"ABSTRACT operator",permalink:"/ABSTRACT_action_operator"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{...}")," operator creates ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"actions")," that executes a ",(0,a.kt)("a",{parentName:"p",href:"/Sequence"},"sequence of other actions"),". "),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    operator1\n    ...\n    operatorN\n}\n")),(0,a.kt)("p",null,"Operators can be of two types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"A sequence of ",(0,a.kt)("a",{parentName:"p",href:"/Action_operators"},"action operators")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",(0,a.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"local properties"),". The area of visibility of the local properties created inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"{...}")," operator ends at the end of this operator."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,a.kt)("p",{parentName:"li"},"  A ",(0,a.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")),(0,a.kt)("p",{parentName:"li"},"  A keyword that, when specified, marks the local property as ",(0,a.kt)("a",{parentName:"p",href:"/Session_management#nested"},"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED"),") when using the ",(0,a.kt)("a",{parentName:"p",href:"/NEWSESSION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")," with the specified keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED LOCAL")," (or just ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name1, ..., nameN")),(0,a.kt)("p",{parentName:"li"},"  A list of names of the local properties being created. The names are defined by ",(0,a.kt)("a",{parentName:"p",href:"/IDs#id"},"simple ID's"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"returnClass")),(0,a.kt)("p",{parentName:"li"},"  The ",(0,a.kt)("a",{parentName:"p",href:"/IDs#classid"},"class ID")," of the returned value of the local property. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"argumentClass1, ..., argumentClassN")),(0,a.kt)("p",{parentName:"li"},"  A list of argument class ID's of the local property."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order { // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old); // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    } // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n")))}u.isMDXComponent=!0}}]);