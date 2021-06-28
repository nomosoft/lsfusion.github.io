(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64654],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69809:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Class extension"},s=void 0,l={unversionedId:"Class_extension",id:"version-v4/Class_extension",isDocsHomePage:!1,title:"Class extension",description:"The class extension technique allows the developer to inherit one class from another after its creation. Also, using this mechanism you can add extra static objects to a class.",source:"@site/versioned_docs/version-v4/Class_extension.md",sourceDirName:".",slug:"/Class_extension",permalink:"/Class_extension",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Class_extension.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Class extension"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/Extensions"},next:{title:"Property extension",permalink:"/Property_extension"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The class ",(0,o.kt)("a",{parentName:"p",href:"/Extensions"},"extension")," technique allows the developer to ",(0,o.kt)("em",{parentName:"p"},"inherit")," one ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"class")," from another after its creation. Also, using this mechanism you can add extra ",(0,o.kt)("a",{parentName:"p",href:"/Static_objects"},"static objects")," to a class."),(0,o.kt)("p",null,"Class extension, together with the ",(0,o.kt)("a",{parentName:"p",href:"/Property_extension"},"property")," and ",(0,o.kt)("a",{parentName:"p",href:"/Action_extension"},"action extension")," technique, allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extract the relations between classes into a separate module, thereby obtaining a more modular architecture."),(0,o.kt)("li",{parentName:"ul"},"Modify the functionality of an existing module without making any changes to it."),(0,o.kt)("li",{parentName:"ul"},"Declare classes in the ",(0,o.kt)("a",{parentName:"li",href:"/Metaprogramming"},"metacode")," by defining the inheritance of a class outside its bounds.")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To extend a class, use the ",(0,o.kt)("a",{parentName:"p",href:"/EXTEND_CLASS_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"EXTEND CLASS")," statement"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n    point 'Dot',\n    segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n    circle 'Circle'\n}\n")))}u.isMDXComponent=!0}}]);