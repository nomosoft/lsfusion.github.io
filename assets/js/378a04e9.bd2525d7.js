(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58345],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35764:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Open form",sidebar_label:"Overview"},s={unversionedId:"Open_form",id:"version-v4/Open_form",isDocsHomePage:!1,title:"Open form",description:"The open form operator creates an action that opens the specified form.",source:"@site/versioned_docs/version-v4/Open_form.md",sourceDirName:".",slug:"/Open_form",permalink:"/Open_form",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Open_form.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",sidebar_label:"Overview",frontMatter:{title:"Open form",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Structured view",permalink:"/Structured_view"},next:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/In_an_interactive_view_SHOW_DIALOG"}},l=[{value:"Form selection",id:"form",children:[]},{value:"View type",id:"view-type",children:[]},{value:"Passing objects",id:"params",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"open form")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"action")," that opens the specified ",(0,i.kt)("a",{parentName:"p",href:"/Forms"},"form"),"."),(0,i.kt)("h3",{id:"form"},"Form selection"),(0,i.kt)("p",null,"In addition to explicitly specifying the form to be opened, the platform also allows to open the ",(0,i.kt)("a",{parentName:"p",href:"/Interactive_view#edtClass"},"list/edit")," form for objects of the specified class. In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."),(0,i.kt)("h3",{id:"view-type"},"View type"),(0,i.kt)("p",null,"When a form is opened, the ",(0,i.kt)("a",{parentName:"p",href:"/Form_views"},"view")," type which will be used to display the form needs to be specified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/In_an_interactive_view_SHOW_DIALOG"},"In an interactive view (",(0,i.kt)("inlineCode",{parentName:"a"},"SHOW"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"DIALOG"),")")),(0,i.kt)("li",{parentName:"ul"},"In a static view:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/In_a_print_view_PRINT"},"In a print view (",(0,i.kt)("inlineCode",{parentName:"a"},"PRINT"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/In_a_structured_view_EXPORT_IMPORT"},"In a structured view (",(0,i.kt)("inlineCode",{parentName:"a"},"EXPORT"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"IMPORT"),")"))))),(0,i.kt)("h3",{id:"params"},"Passing objects"),(0,i.kt)("p",null,"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In interactive view: the passed value is set as the ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#currentObject"},"current")," object."),(0,i.kt)("li",{parentName:"ul"},"In a static view: an additional ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#filters"},"filter")," will be set so that the object must be ",(0,i.kt)("a",{parentName:"li",href:"/Comparison_operators_=_etc"},"equal")," to the passed value.")),(0,i.kt)("p",null,"By default, all passed values of objects must be defined (not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"); otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values). In this case (as in the case when no object is passed at all), the ",(0,i.kt)("a",{parentName:"p",href:"/Interactive_view#defaultobject"},"default object")," will be selected as the current object. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is worth noting that passing objects in the interactive view is basically the same as the ",(0,i.kt)("a",{parentName:"p",href:"/Search_SEEK"},"object seek")," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",(0,i.kt)("a",{parentName:"p",href:"/Search_SEEK#direction"},"seek direction")," is determined by the default object type (",(0,i.kt)("inlineCode",{parentName:"p"},"PREV")," here is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST"),")."))))}c.isMDXComponent=!0}}]);