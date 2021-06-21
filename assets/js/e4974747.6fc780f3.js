(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79945],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45657:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"RETURN operator"},p=void 0,c={unversionedId:"RETURN_operator",id:"version-v4/RETURN_operator",isDocsHomePage:!1,title:"RETURN operator",description:"The RETURN operator creates an action that implements exit from an action created by the EXEC operator.",source:"@site/versioned_docs/version-v4/RETURN_operator.md",sourceDirName:".",slug:"/RETURN_operator",permalink:"/RETURN_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/RETURN_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"RETURN operator"},sidebar:"version-v4/learn",previous:{title:"REQUEST operator",permalink:"/REQUEST_operator"},next:{title:"SEEK operator",permalink:"/SEEK_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RETURN")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/Exit_RETURN"},"exit")," from an action created by the ",(0,a.kt)("a",{parentName:"p",href:"/Call_EXEC"},(0,a.kt)("inlineCode",{parentName:"a"},"EXEC")," operator"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RETURN\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RETURN")," operator creates an action that exits from the most nested ",(0,a.kt)("a",{parentName:"p",href:"/Call_EXEC"},"action call"),". "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"importFile  {\n    LOCAL file = FILE ();\n    INPUT f = FILE DO {\n        file () <- f;\n    }\n\n    IF NOT file() THEN RETURN;\n}\n")))}u.isMDXComponent=!0}}]);