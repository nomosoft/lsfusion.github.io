(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63182],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4857:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"INTERNAL operator"},l={unversionedId:"INTERNAL_operator",id:"INTERNAL_operator",isDocsHomePage:!1,title:"INTERNAL operator",description:"The INTERNAL operator creates an action that executes an internal call.",source:"@site/docs/INTERNAL_operator.md",sourceDirName:".",slug:"/INTERNAL_operator",permalink:"/next/INTERNAL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/INTERNAL_operator.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"INTERNAL operator"},sidebar:"learn",previous:{title:"CHANGECLASS operator",permalink:"/next/CHANGECLASS_operator"},next:{title:"DELETE operator",permalink:"/next/DELETE_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNAL")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that executes an ",(0,o.kt)("a",{parentName:"p",href:"/next/Internal_call_INTERNAL"},"internal call"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"The operator has two forms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INTERNAL className [(classId1, ..., classIdN)] [NULL]\nINTERNAL <{anyTokens}> [NULL]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERNAL")," operator creates an action which calls the code written in Java programming language. The first form of the operator allows you to specify the fully qualified name of a Java class. This class must be inherited from the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction")," Java class and must contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeInternal")," method which is executed when the action is called."),(0,o.kt)("p",null,"The second form of the operator allows to write some Java code inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<{...}>")," block. This block contents will be the code of ",(0,o.kt)("inlineCode",{parentName:"p"},"executeInternal")," method for the generated Java class. In this code you can refer to the only parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeInternal")," method \u2013 the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsfusion.server.logics.action.controller.context.ExecutionContext")," class."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"className")),(0,o.kt)("p",{parentName:"li"},"  The fully qualified name of the Java class. ",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"classId1, ..., classIdN")),(0,o.kt)("p",{parentName:"li"},"  A list of ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#classid"},"class IDs")," of the action arguments. If not specified, the created action will have no parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NULL")),(0,o.kt)("p",{parentName:"li"},"  If this keyword is used, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," parameters to the action.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"anyTokens")),(0,o.kt)("p",{parentName:"li"},"  Source code written in Java. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"showOnMap 'Show on map' INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console'  INTERNAL  <{System.out.println(\"action test\"); }>;\nsetNoCancelInTransaction()  INTERNAL  <{ context.getSession().setNoCancelInTransaction(true); }>; // here context is a parameter of executeInternal method\n")))}p.isMDXComponent=!0}}]);