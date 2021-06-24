(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74544],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,p(p({ref:t},c),{},{components:r})):n.createElement(h,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31766:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"JOIN operator"},i={unversionedId:"JOIN_operator",id:"JOIN_operator",isDocsHomePage:!1,title:"JOIN operator",description:"The JOIN operator creates a property that implements a composition.",source:"@site/docs/JOIN_operator.md",sourceDirName:".",slug:"/JOIN_operator",permalink:"/next/JOIN_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/JOIN_operator.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"JOIN operator"},sidebar:"learn",previous:{title:"IF ... THEN operator",permalink:"/next/IF_..._THEN_operator"},next:{title:"MAX operator",permalink:"/next/MAX_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements a ",(0,o.kt)("a",{parentName:"p",href:"/next/Composition_JOIN"},"composition"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[JOIN] propertyId(expr1, ..., exprN)\n \n[JOIN] "[" operator "]" (expr1, ..., exprN)\n \n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},'"["')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"]"')," are ordinary brackets."),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",(0,o.kt)("a",{parentName:"p",href:"/next/Composition_JOIN"},"main property")," can be defined by one of the three following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an ID of the existing property"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"/next/Property_operators#contextindependent"},"context independent")," ",(0,o.kt)("a",{parentName:"li",href:"/next/Property_operators"},"property operator")," enclosed in brackets."),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("a",{parentName:"li",href:"/next/Expression"},"expression")," enclosed in brackets.")),(0,o.kt)("p",null,"The latter two options allow to use as the main property a property without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",(0,o.kt)("a",{parentName:"p",href:"/next/=_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"=")," statement"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',(0,o.kt)("a",{parentName:"p",href:"/next/=_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"=")," statement"),", in the case when the parameters are not defined explicitly.    "),(0,o.kt)("p",null,"Formally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," operator is also responsible for such constructions as ",(0,o.kt)("inlineCode",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",(0,o.kt)("inlineCode",{parentName:"p"},"propertyID"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"Property ID"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN")),(0,o.kt)("p",{parentName:"li"},"  A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"operator")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/next/Property_operators"},"context-independent")," property operator that is used to create the main property.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expression")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," which is used to define the main property. Cannot be a single parameter."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),(0,o.kt)("p",null,"Sometimes it\u2019s convenient to define the main property with an expression to simplify the source code and make it more understandable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); // a similar property set using composition\n")))}c.isMDXComponent=!0}}]);