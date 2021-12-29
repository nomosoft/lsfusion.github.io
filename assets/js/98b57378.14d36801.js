"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88115],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Module header"},p=void 0,m={unversionedId:"Module_header",id:"Module_header",title:"Module header",description:"Each module begins with a header.",source:"@site/docs/Module_header.md",sourceDirName:".",slug:"/Module_header",permalink:"/next/Module_header",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Module_header.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Module header"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/Statements"},next:{title:"Overview",permalink:"/next/=_statement"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"/next/Modules"},"module")," begins with a ",(0,o.kt)("em",{parentName:"p"},"header"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The module header can consist of four special statements, in the following order:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MODULE"),"  statement defines the module name. It is required. Each module within one ",(0,o.kt)("a",{parentName:"p",href:"/next/Projects"},"project")," must have a unique name."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUIRE")," statement defines the list of modules on which the current module ",(0,o.kt)("a",{parentName:"p",href:"/next/Modules#depends"},"depends"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUIRE")," statement is absent, that is equivalent to depending only on the ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," module."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIORITY")," statement defines the list of additional ",(0,o.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespaces")," that will have priority in ",(0,o.kt)("a",{parentName:"p",href:"/next/Search_"},"finding")," ",(0,o.kt)("a",{parentName:"p",href:"/next/Element_identification"},"system elements"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMESPACE")," statement defines the module's namespace.  "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("p",{parentName:"li"},"  The name of the module. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". Module names cannot contain an underscore.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"moduleName1, ..., moduleNameN")),(0,o.kt)("p",{parentName:"li"},"  A list of the names of modules that the current module depends on. Each name is a simple ID. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),(0,o.kt)("p",{parentName:"li"},"  A list of namespace names. Each name is a simple ID. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"namespaceName")),(0,o.kt)("p",{parentName:"li"},"  The name of the module namespace. A simple ID that cannot contain an underscore. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"NAMESPACE")," statement is not used in the header, the name of the current module's namespace will be equal to the name of the module. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}d.isMDXComponent=!0}}]);