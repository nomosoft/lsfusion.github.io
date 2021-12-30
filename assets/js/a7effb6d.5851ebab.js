"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42461],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=s,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(83117),s=n(80102),i=(n(67294),n(3905)),r=["components"],l={title:"Classes"},o=void 0,c={unversionedId:"Classes",id:"Classes",title:"Classes",description:"The base element in lsFusion is the object. Each object is an instance of some class, which determines the qualities of all its instances. Classes in turn can be divided into built-in classes, which are responsible for primitive data types, and user classes.",source:"@site/docs/Classes.md",sourceDirName:".",slug:"/Classes",permalink:"/next/Classes",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Classes.md",tags:[],version:"current",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Classes"},sidebar:"learn",previous:{title:"Simple constraints",permalink:"/next/Simple_constraints"},next:{title:"Built-in classes",permalink:"/next/Built-in_classes"}},p=[{value:"Inheritance",id:"inheritance",children:[],level:3},{value:"Class limitations",id:"class-limitations",children:[],level:3}],m={toc:p};function u(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The base element in ",(0,i.kt)("strong",{parentName:"p"},"lsFusion")," is the object. Each object is an ",(0,i.kt)("em",{parentName:"p"},"instance")," of some ",(0,i.kt)("em",{parentName:"p"},"class"),", which determines the qualities of all its instances. Classes in turn can be divided into ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes"),", which are responsible for primitive data types, and ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes"},"user classes"),". "),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Classes can ",(0,i.kt)("em",{parentName:"p"},"inherit")," from each other. When class ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," inherits from class ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", class ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," shall be called the ",(0,i.kt)("em",{parentName:"p"},"parent"),", and class ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," shall be called the ",(0,i.kt)("em",{parentName:"p"},"child"),"."),(0,i.kt)("p",null,"The idea of inheritance is as follows: if class ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," inherits from class ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then all instances of class ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," will have all the qualities of class ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". Thus, with inheritance, each class determines the qualities not only of all instances of this class but also of all instances of this class descendants.  "),(0,i.kt)("p",null,"Let's say that an object ",(0,i.kt)("em",{parentName:"p"},"belongs to")," class ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," if that object is either an instance of class ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or an instance of a class ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," descendant.  "),(0,i.kt)("p",null,"To implement polymorphism, inheritance is usually used together with ",(0,i.kt)("a",{parentName:"p",href:"/next/Property_extension"},"properties")," and ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_extension"},"actions")," extension mechanism. "),(0,i.kt)("h3",{id:"class-limitations"},"Class limitations"),(0,i.kt)("p",null,"The class mechanism has several limitations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Belonging to a class cannot be calculated (only set explicitly when ",(0,i.kt)("a",{parentName:"li",href:"/next/New_object_NEW"},"creating")," and ",(0,i.kt)("a",{parentName:"li",href:"/next/Class_change_CHANGECLASS_DELETE"},"changing the class"),") of an object."),(0,i.kt)("li",{parentName:"ol"},"A class is set for only one object (not for an object collection)."),(0,i.kt)("li",{parentName:"ol"},"It is not possible to inherit the same class multiple times.")),(0,i.kt)("p",null,"Accordingly, if the class mechanism is not sufficient, the platform also supports the ",(0,i.kt)("a",{parentName:"p",href:"/next/Aggregations"},"aggregation")," mechanism, which together with inheritance allows implementing almost any polymorphic logic."))}u.isMDXComponent=!0}}]);