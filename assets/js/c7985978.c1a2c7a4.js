(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46912],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10174:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Event description block"},c={unversionedId:"Event_description_block",id:"Event_description_block",isDocsHomePage:!1,title:"Event description block",description:"Event description block describes an event in different instructions.",source:"@site/docs/Event_description_block.md",sourceDirName:".",slug:"/Event_description_block",permalink:"/next/Event_description_block",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Event_description_block.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Event description block"},sidebar:"learn",previous:{title:"ON instruction",permalink:"/next/ON_instruction"},next:{title:"WHEN instruction",permalink:"/next/WHEN_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Event description block")," describes an ",(0,i.kt)("a",{parentName:"p",href:"/next/Events"},"event")," in different instructions."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GLOBAL | LOCAL] [FORMS formName1, ..., formNameN] [GOAFTER propertyId1, ..., propertyIdM]\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"GLOBAL\xa0")),(0,i.kt)("p",null,"The keyword specifying that the described event will be global. This is the default behavior."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"LOCAL")),(0,i.kt)("p",null,"The keyword specifying that the described event\xa0will be local."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"formName1, ..., formNameN")),(0,i.kt)("p",null,"A list of names of the \xa0",(0,i.kt)("a",{parentName:"p",href:"/next/Forms"},"forms")," in which the event will occur. Each element of the list is a \xa0",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"composite ID"),". If the list is not defined, the event will occur in all forms."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),(0,i.kt)("p",null,"List of ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"property IDs"),". This list means that all event handlers that change one of the specified properties must be ",(0,i.kt)("a",{parentName:"p",href:"/next/Events#order-broken"},"executed earlier")," than the handlers that will be defined in the instruction for which this event description block is being defined."))}s.isMDXComponent=!0}}]);