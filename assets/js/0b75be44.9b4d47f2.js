(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2110],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32379:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"INPUT operator"},p=void 0,l={unversionedId:"INPUT_operator",id:"INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The INPUT operator creates an action that inputs a primitive.",source:"@site/docs/INPUT_operator.md",sourceDirName:".",slug:"/INPUT_operator",permalink:"/next/INPUT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/INPUT_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"INPUT operator"},sidebar:"learn",previous:{title:"IMPORT operator",permalink:"/next/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/next/MESSAGE_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,i.kt)("a",{parentName:"p",href:"/next/Primitive_input_INPUT"},"inputs a primitive"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"inputOptions")," - input options. Specified by one of the following syntaxes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[alias =] builtInClassName\n[alias] = expr\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT")," operator creates an action which allows to request the value of one of the ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes")," from the user."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"builtInClassName")),(0,i.kt)("p",{parentName:"li"},"  The name of one of the ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr")),(0,i.kt)("p",{parentName:"li"},"  An ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"expression"),", which value determines the ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_input#initial"},"initial value")," of the input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"alias")),(0,i.kt)("p",{parentName:"li"},"  The name of the local parameter to which the input result is written. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")),(0,i.kt)("p",{parentName:"li"},"  A keyword specifying that in addition to the value input the result needs to be written to the specified property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"changeExpr")),(0,i.kt)("p",{parentName:"li"},"  An ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," that determines the property to which the input result is written. By default, the property specified as the initial input value is used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"elseActionOperator")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}u.isMDXComponent=!0}}]);