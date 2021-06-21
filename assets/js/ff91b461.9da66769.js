(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17038],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28734:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"Event description block"},p=void 0,l={unversionedId:"Event_description_block",id:"version-v4/Event_description_block",isDocsHomePage:!1,title:"Event description block",description:"Event description block describes an event in different statements.",source:"@site/versioned_docs/version-v4/Event_description_block.md",sourceDirName:".",slug:"/Event_description_block",permalink:"/Event_description_block",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Event_description_block.md",version:"v4",lastUpdatedAt:1623078033,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"Event description block"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/ON_statement"},next:{title:"WHEN statement",permalink:"/WHEN_statement"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Event description block")," describes an ",(0,a.kt)("a",{parentName:"p",href:"/Events"},"event")," in different statements."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[GLOBAL | LOCAL] [FORMS formName1, ..., formNameN] [GOAFTER propertyId1, ..., propertyIdM]\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GLOBAL")),(0,a.kt)("p",{parentName:"li"},"  The keyword specifying that the described event will be global. This is the default behavior.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,a.kt)("p",{parentName:"li"},"  The keyword specifying that the described event will be local.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formName1, ..., formNameN")),(0,a.kt)("p",{parentName:"li"},"  A list of names of the  ",(0,a.kt)("a",{parentName:"p",href:"/Forms"},"forms")," in which the event will occur. Each element of the list is a  ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid-broken"},"composite ID"),". If the list is not defined, the event will occur in all forms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdM")),(0,a.kt)("p",{parentName:"li"},"  List of ",(0,a.kt)("a",{parentName:"p",href:"/IDs#propertyid-broken"},"property IDs"),". This list means that all event handlers that change one of the specified properties must be ",(0,a.kt)("a",{parentName:"p",href:"/Events#order-broken"},"executed earlier")," than the handlers that will be defined in the statement for which this event description block is being defined."))))}d.isMDXComponent=!0}}]);