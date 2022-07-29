"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42323],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||p;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88057:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const p={title:"= statement"},o=void 0,i={unversionedId:"=_statement",id:"version-v4/=_statement",title:"= statement",description:"The = statement creates a new property.",source:"@site/versioned_docs/version-v4/=_statement.md",sourceDirName:".",slug:"/=_statement",permalink:"/=_statement",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/=_statement.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"= statement"},sidebar:"version-v4/learn",previous:{title:"Module header",permalink:"/Module_header"},next:{title:"Expression",permalink:"/Expression"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],m={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," statement creates a new ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"property"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name [caption] [(param1, ..., paramN)] = expression [options];\nname [caption] [(param1, ..., paramN)] = contextIndependentOperator [options];\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," statement declares a new property and adds it to the current ",(0,a.kt)("a",{parentName:"p",href:"/Modules"},"module"),"."),(0,a.kt)("p",null,"When creating a property, the statement has two forms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first form describes and creates a property using an ",(0,a.kt)("a",{parentName:"li",href:"/Expression"},"expression"),". "),(0,a.kt)("li",{parentName:"ul"},"The second form describes the property using one of the ",(0,a.kt)("a",{parentName:"li",href:"/Property_operators#contextindependent"},"context-independent")," ",(0,a.kt)("a",{parentName:"li",href:"/Property_operators"},"property operators")," that cannot be part of an expression.")),(0,a.kt)("p",null,"When declaring a property, its set of options can also be specified.   "),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("p",{parentName:"li"},"  The name of the property. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"caption")),(0,a.kt)("p",{parentName:"li"},"  Property caption. ",(0,a.kt)("a",{parentName:"p",href:"/Literals#strliteral"},"String literal"),". If no caption is specified, then the property caption will be its name.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,a.kt)("p",{parentName:"li"},"  List of parameters. Each of these is specified by a ",(0,a.kt)("a",{parentName:"p",href:"/IDs#paramid"},"typed parameter"),". These parameters can then be used in the expression describing the property being created (as well as in some options)."),(0,a.kt)("p",{parentName:"li"},"  If parameters are not specified explicitly, they will be automatically calculated when processing the expression. The order of the parameters will correspond to the order in which the parameters appear in the expression. It is recommended that you explicitly specify property parameters. This will allow to find typos and other errors in the declaration (for example, a mismatch of the number of parameters provided with the number of parameters of the created property).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression")),(0,a.kt)("p",{parentName:"li"},"  An expression that describes and creates a property. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"contextIndependentOperator")),(0,a.kt)("p",{parentName:"li"},"  A context-independent property operator that describes and creates a property. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"options")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Property_options"},"Property options"),". "))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// property defined by the context-independent DATA property operator\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\n\n// property defined by expression\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\n\n// the caption of this property will be 'diff' and the parameters will be (a, b)\ndiff = a - b;\n\n// property defined by DATA operator with additional property options\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n")))}c.isMDXComponent=!0}}]);