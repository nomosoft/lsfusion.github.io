(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63450],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35266:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i={title:"Coding conventions"},l=void 0,p={unversionedId:"Coding_conventions",id:"Coding_conventions",isDocsHomePage:!1,title:"Coding conventions",description:"Common",source:"@site/docs/Coding_conventions.md",sourceDirName:".",slug:"/Coding_conventions",permalink:"/next/Coding_conventions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Coding_conventions.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Coding conventions"},sidebar:"learn",previous:{title:"Empty statement",permalink:"/next/Empty_statement"},next:{title:"IDE",permalink:"/next/IDE"}},s=[{value:"Common",id:"common",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Forms",id:"forms",children:[]}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"common"},"Common"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Class names, module names, and namespace names begin with a capital letter. Other names (property, action, form, parameter, etc.) start with a lowercase letter. If the name consists of several words, then each subsequent word in the name begins with a capital letter."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nNAMESPACE MyNamespace;\n\nCLASS MyClass 'My Class';\n\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\nmyAction 'My Action' (MyClass o) {\n    myProperty(o) <- TRUE;\n}\n\nFORM myForm\n;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Module, requirements and namespace declarations must be separated by blank lines:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nREQUIRE MyModule2;\n\nNAMESPACE MyNamespace;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,o.kt)("inlineCode",{parentName:"p"},">="),", ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," operators are separated on both sides by spaces."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"value(x) = 324\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A space is placed after the comma. There should be no space before the comma."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"f(x, y, z) = g(x, y, z) + h(x, y);\n\nFORM test\n    OBJECTS a = Class1, b = Class2\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\n;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Every new property or action declaration starts on a new line. If there is another code after the ",(0,o.kt)("inlineCode",{parentName:"p"},";"),", then a space is placed after the character."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When declaring a property or action, a space is inserted between the name or type and the symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"("),". When using a property, there is no space."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"nameProperty (MyClass o) = name(property(o));\nmyProperty = DATA STRING[10] (MyClass);\n")))),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Each "logically nested" line should have an offset by exactly 4 spaces. Actions are considered nested after ',(0,o.kt)("inlineCode",{parentName:"p"},"IF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WHILE"),", as well as after the property declaration itself:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"IF x = 1 THEN\n    f(a) <- TRUE;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Spaces are placed before and after symbols ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<-"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FOR f(a) DO {\n    x(a) <- TRUE;\n}\n")),(0,o.kt)("p",{parentName:"li"},"  or"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FOR f(a) DO { x(a) <- TRUE; }\n")))),(0,o.kt)("h3",{id:"forms"},"Forms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Object declarations are separated by an empty line."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM test\n    OBJECTS a = Object\n    PROPERTIES(a) VALUE\n\n    OBJECTS b = Object\n    PROPERTIES(b) VALUE\n;   \n")))))}m.isMDXComponent=!0}}]);