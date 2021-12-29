"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70330],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||l[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Metaprogramming"},s=void 0,p={unversionedId:"Metaprogramming",id:"Metaprogramming",title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/docs/Metaprogramming.md",sourceDirName:".",slug:"/Metaprogramming",permalink:"/next/Metaprogramming",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Metaprogramming.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Metaprogramming"},sidebar:"learn",previous:{title:"Form extension",permalink:"/next/Form_extension"},next:{title:"Overview",permalink:"/next/Integration"}},m=[{value:"Metacode",id:"metacode",children:[],level:3},{value:"Lexeme concatenation",id:"concat",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],l={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.  "),(0,o.kt)("h3",{id:"metacode"},"Metacode"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," the metaprogramming tool used is ",(0,o.kt)("em",{parentName:"p"},"metacode"),", which is described by the ",(0,o.kt)("a",{parentName:"p",href:"/next/META_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"META")," statement"),". Metacode consists of a header and an ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," code block describing the ",(0,o.kt)("a",{parentName:"p",href:"/next/Statements"},"statement")," sequence. This code block must end with the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"END"),". Let us consider an example of metacode that allows you to add two ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"actions")," to an arbitrary ",(0,o.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),(0,o.kt)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",(0,o.kt)("inlineCode",{parentName:"p"},"addActions")," has one parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",(0,o.kt)("a",{parentName:"p",href:"/next/commat_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"@")," statement"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),(0,o.kt)("p",null,"The statement to use metacode starts with the special symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," statement in all places where the metacode parameter is used. In this example, the metacode parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"formName")," will be replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"documentForm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),(0,o.kt)("h3",{id:"concat"},"Lexeme concatenation"),(0,o.kt)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",(0,o.kt)("a",{parentName:"p",href:"/next/Element_identification"},"system elements")," inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", which operates at the ",(0,o.kt)("a",{parentName:"p",href:"/next/Tokens"},"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"string literal"),", the concatenation will result in a single string literal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name 'Name '##caption = DATA BPSTRING[100](object);\n    object##Type 'Type '##caption = DATA Type (object);\n    object##Value 'Cost '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, 'of the document');\n")),(0,o.kt)("p",null,"Using the metacode ",(0,o.kt)("inlineCode",{parentName:"p"},"objectProperties")," produces the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"DocumentName 'Document name' = DATA BPSTRING[100](Document);\nDocumentType 'Document type' = DATA Type (Document);\nDocumentValue 'Document cost' = DATA INTEGER (Document);\n")),(0,o.kt)("p",null,"There is also the special operation ",(0,o.kt)("inlineCode",{parentName:"p"},"###"),". It is equivalent to operation ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object);\n    object##Value 'Cost'##caption = DATA INTEGER (###object);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}d.isMDXComponent=!0}}]);