(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94004],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37372:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"CANCEL operator"},i=void 0,c={unversionedId:"CANCEL_operator",id:"CANCEL_operator",isDocsHomePage:!1,title:"CANCEL operator",description:"The CANCEL operator creates an action that cancels changes in the current session.",source:"@site/docs/CANCEL_operator.md",sourceDirName:".",slug:"/CANCEL_operator",permalink:"/next/CANCEL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/CANCEL_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"CANCEL operator"},sidebar:"learn",previous:{title:"BREAK operator",permalink:"/next/BREAK_operator"},next:{title:"CASE operator",permalink:"/next/CASE_action_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CANCEL")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/next/Cancel_changes_CANCEL"},"cancels changes")," in the current session."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CANCEL [nestedBlock]\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"nestedBlock")," has one of two possible syntaxes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CANCEL")," operator creates an action that cancels changes in the current session. By specifying the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED")," you can specify ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA#local"},"local properties")," whose changes are not dropped when cancelling the changes. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,o.kt)("p",{parentName:"li"},"  Keyword. If specified, all local properties preserve their changes after the ",(0,o.kt)("inlineCode",{parentName:"p"},"CANCEL")," operator is executed. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),(0,o.kt)("p",{parentName:"li"},"  List of local properties. Each list element is a ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"property ID"),". The local properties specified in the list will preserve their changes after the operator is executed."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n")))}u.isMDXComponent=!0}}]);