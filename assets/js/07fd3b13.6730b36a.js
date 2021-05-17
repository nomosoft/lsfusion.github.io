(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60487],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20049:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={title:"Instruction +="},i={unversionedId:"Instruction_+=",id:"Instruction_+=",isDocsHomePage:!1,title:"Instruction +=",description:"The += instruction adds an implementation (selection option) to an abstract property.",source:"@site/docs/Instruction_+=.md",sourceDirName:".",slug:"/Instruction_+=",permalink:"/next/Instruction_+=",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Instruction_+=.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Instruction +="},sidebar:"learn",previous:{title:"EXTEND FORM instruction",permalink:"/next/EXTEND_FORM_instruction"},next:{title:"ACTION+ instruction",permalink:"/next/ACTION+_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The += instruction adds an implementation (selection option) to an ",(0,o.kt)("a",{parentName:"p",href:"/next/Property_extension"},"abstract property"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"propertyId (param1, ..., paramN) += implExpr;\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The += instruction adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",(0,o.kt)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using ",(0,o.kt)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as a property.\xa0"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"propertyId")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"ID")," of the abstract property.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"param1, ..., paramN")),(0,o.kt)("p",null,"List of parameters that will be used to define the implementation. Each element is a ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#paramid-broken"},"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"implExpr")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value determines the implementation of an abstract property."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"whenExpr")),(0,o.kt)("p",null,"An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,o.kt)("strong",{parentName:"p"},"CASE"),".\xa0"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}c.isMDXComponent=!0}}]);