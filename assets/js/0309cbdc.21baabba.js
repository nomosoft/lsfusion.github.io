(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88592],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83016:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i={title:"How-to: Action extension"},l=void 0,c={unversionedId:"How-to_Action_extension",id:"How-to_Action_extension",isDocsHomePage:!1,title:"How-to: Action extension",description:"We can use the following scheme to implement polymorphism:",source:"@site/docs/How-to_Action_extension.md",sourceDirName:".",slug:"/How-to_Action_extension",permalink:"/next/How-to_Action_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Action_extension.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: Action extension"},sidebar:"learn",previous:{title:"How-to: Property extension",permalink:"/next/How-to_Property_extension"},next:{title:"How-to: Form extension",permalink:"/next/How-to_Form_extension"}},p=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],s={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can use the following scheme to implement polymorphism:"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"Create an abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape")," with an abstract action ",(0,a.kt)("inlineCode",{parentName:"p"},"whoAmI"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nwhoAmI  ABSTRACT ( Shape);\n")),(0,a.kt)("p",null,"Then, create ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Circle")," classes inherited from ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nCLASS Circle : Shape;\n")),(0,a.kt)("p",null,"Define the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"whoAmI")," for the created classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"whoAmI (Rectangle r) + {\n    IF r IS Rectangle THEN {\n        MESSAGE 'I am a rectangle';\n    }\n}\nwhoAmI (Circle c) + {\n    IF c IS Circle THEN {\n        MESSAGE 'I am a circle';\n    }\n}\n")),(0,a.kt)("p",null,"When executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"whoAmI")," action, all the actions added as an implementation will be called. In this case, a corresponding message will appear depending on the argument."),(0,a.kt)("h3",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Suppose that we need to implement an action that copies an object (e. g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," class) with its semantics defined in multiple modules. This can be implemented as follows:"),(0,a.kt)("p",null,"Declare the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," class and the actions to copy it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},'MODULE Book;\n\nCLASS Book; // declaring class "book"\noverCopy  ABSTRACT ( Book, Book); // abstract action that takes an input two books and is "entry point", to which other modules can add realization\ncopy (Book book)  { // creating action on book copy\n    NEW b = Book { // adding new book\n        overCopy(b, book);\n    }\n}\n')),(0,a.kt)("p",null,"In the dependent module ",(0,a.kt)("inlineCode",{parentName:"p"},"MyBook"),", we want to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," class with new properties and also define the action to copy them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyBook;\n\nREQUIRE Book;\n\nname = DATA STRING[100] (Book); // adding some name property to the product\noverCopy (Book s, Book d) + {\n    name(d) <- name(s); // connecting the copying of the created property to the product copy action\n}\n")))}m.isMDXComponent=!0}}]);