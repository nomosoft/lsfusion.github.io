(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95722],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60144:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Form extension"},u=void 0,c={unversionedId:"Form_extension",id:"version-v4/Form_extension",isDocsHomePage:!1,title:"Form extension",description:"The form extension technique allows the developer to extend the structure and design of a form created in another module.",source:"@site/versioned_docs/version-v4/Form_extension.md",sourceDirName:".",slug:"/Form_extension",permalink:"/Form_extension",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Form_extension.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Form extension"},sidebar:"version-v4/learn",previous:{title:"Action extension",permalink:"/Action_extension"},next:{title:"Metaprogramming",permalink:"/Metaprogramming"}},s=[{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],p={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/Forms"},"form")," ",(0,a.kt)("a",{parentName:"p",href:"/Extensions"},"extension")," technique allows the developer to extend the ",(0,a.kt)("a",{parentName:"p",href:"/Form_structure"},"structure")," and ",(0,a.kt)("a",{parentName:"p",href:"/Interactive_view"},"design")," of a form created in another module."),(0,a.kt)("p",null,'Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.'),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"In order to extend the structure and design of an existing form, the ",(0,a.kt)("a",{parentName:"p",href:"/EXTEND_FORM_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"EXTEND FORM")," statement")," must be used."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    FILTERS itemGroup(i) == g // if the object was added after the object with products, then filtering would go by the group of products, and not by products\n;\n")))}l.isMDXComponent=!0}}]);