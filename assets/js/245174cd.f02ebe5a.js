(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10763],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32528:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"DATA operator"},i={unversionedId:"DATA_operator",id:"DATA_operator",isDocsHomePage:!1,title:"DATA operator",description:"The DATA operator creates a data property.",source:"@site/docs/DATA_operator.md",sourceDirName:".",slug:"/DATA_operator",permalink:"/next/DATA_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/DATA_operator.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"DATA operator"},sidebar:"learn",previous:{title:"CONCAT operator",permalink:"/next/CONCAT_operator"},next:{title:"EXCLUSIVE operator",permalink:"/next/EXCLUSIVE_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DATA")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"data property"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DATA [LOCAL [NESTED]] returnClass (argumentClass1, ..., argumentClassN)\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DATA")," operator creates a data property. This ",(0,o.kt)("a",{parentName:"p",href:"/next/Property_operators_paradigm"},"property operator")," cannot be used inside ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions"),". The data property can be created local by specifying the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL"),". "),(0,o.kt)("p",null,"This operator cannot be used in the ",(0,o.kt)("a",{parentName:"p",href:"/next/JOIN_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"JOIN")," operator")," (inside ",(0,o.kt)("inlineCode",{parentName:"p"},"[ ]"),"), since a name must be specified for the data property."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,o.kt)("p",{parentName:"li"},"  A keyword that, when specified, creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA#local"},"local data property"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NESTED")),(0,o.kt)("p",{parentName:"li"},"  A keyword that, when specified, marks the local property as ",(0,o.kt)("a",{parentName:"p",href:"/next/Session_management#nested"},"nested")," that is, all its changes will be visible in new sessions, and when these sessions are closed, changes to this property will be applied to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED"),") when using the ",(0,o.kt)("a",{parentName:"p",href:"/next/NEWSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")," with the specified keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED LOCAL")," (or just ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"returnClass")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#classid"},"Class ID")," of the return value of a property. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"argumentClass1, ..., argumentClassN")),(0,o.kt)("p",{parentName:"li"},"  A list of class IDs for property arguments. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n")))}c.isMDXComponent=!0}}]);