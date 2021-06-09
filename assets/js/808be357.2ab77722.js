(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17022],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76228:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Groups of properties and actions"},p={unversionedId:"Groups_of_properties_and_actions",id:"Groups_of_properties_and_actions",isDocsHomePage:!1,title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/docs/Groups_of_properties_and_actions.md",sourceDirName:".",slug:"/Groups_of_properties_and_actions",permalink:"/next/Groups_of_properties_and_actions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Groups_of_properties_and_actions.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Groups of properties and actions"},sidebar:"learn",previous:{title:"Form structure",permalink:"/next/Form_structure"},next:{title:"Form views",permalink:"/next/Form_views"}},l=[{value:"Builtin property groups",id:"builtin",children:[]},{value:"Property groups usage",id:"property-groups-usage",children:[]},{value:"Language",id:"language",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),(0,i.kt)("p",null,"All ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," in the system are divided into ",(0,i.kt)("em",{parentName:"p"},"property groups"),". In this case, all groups form a hierarchy in which each group can contain both properties and other property groups. The root group in this hierarchy is the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.root")," group. All other groups are contained in some ",(0,i.kt)("em",{parentName:"p"},"parent group"),"."),(0,i.kt)("p",null,"Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.root")," group."),(0,i.kt)("h3",{id:"builtin"},"Builtin property groups"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," module, the following groups of properties and actions are created automatically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"private"))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All these groups (including ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),") are not used in form display mechanisms (i.e. containers in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_design#defaultDesign"},"default form design")," and elements of the ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view#hierarchy"},"hierarchical")," import / export hierarchy are not created for them)."))),(0,i.kt)("h3",{id:"property-groups-usage"},"Property groups usage"),(0,i.kt)("p",null,"Property groups are currently used in the following mechanisms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When displaying forms:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in the ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view"},"interactive")," view: you can specify for each group that a separate container must be created in the ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_design#defaultDesign"},"default design"),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and property group ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," that a container must be created, and group (or property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," is a descendant of group ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),", then the container of group (component of property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," will be the descendant of the container of group ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,i.kt)("li",{parentName:"ul"},"in the ",(0,i.kt)("a",{parentName:"li",href:"/next/Structured_view#hierarchy"},"hierarchical")," view :you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and property group ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," that a tag needs to be created, and group (or property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," is a descendant of group ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),", then group (property) ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," will be enclosed in the tag of group ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),". "))),(0,i.kt)("li",{parentName:"ul"},"When automatically creating forms:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All properties with one argument which are included in the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.base")," group will be displayed in the automatically generated dialog forms for ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#edtClass"},"selecting/editing")," objects. "),(0,i.kt)("li",{parentName:"ul"},"All properties with one argument which are included in the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.id")," group will be displayed in automatically generated ",(0,i.kt)("a",{parentName:"li",href:"/next/Constraints#message"},"message display forms")," on constraint violation."))),(0,i.kt)("li",{parentName:"ul"},"In the security policy:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can set a security policy for a group as a whole (and not for each property individually).")))),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To add a new property/action group to the system, use the ",(0,i.kt)("a",{parentName:"p",href:"/next/GROUP_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"GROUP")," statement"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}c.isMDXComponent=!0}}]);