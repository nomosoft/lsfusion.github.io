(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||p;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<p;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90193:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o},default:function(){return m}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),s={title:"+= statement"},i={unversionedId:"+=_statement",id:"+=_statement",isDocsHomePage:!1,title:"+= statement",description:"The += statement adds an implementation (selection option) to an abstract property.",source:"@site/docs/+=_statement.md",sourceDirName:".",slug:"/+=_statement",permalink:"/next/+=_statement",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/+=_statement.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"+= statement"},sidebar:"learn",previous:{title:"EXTEND FORM statement",permalink:"/next/EXTEND_FORM_statement"},next:{title:"ACTION+ statement",permalink:"/next/ACTION+_statement"}},o=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"+=")," statement adds an implementation (selection option) to an ",(0,p.kt)("a",{parentName:"p",href:"/next/Property_extension"},"abstract property"),"."),(0,p.kt)("h3",{id:"syntax"},"Syntax"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"propertyId (param1, ..., paramN) += implExpr;\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n")),(0,p.kt)("h3",{id:"description"},"Description"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"+=")," statement adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",(0,p.kt)("inlineCode",{parentName:"p"},"CASE"),", then the implementation should be described using ",(0,p.kt)("inlineCode",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as a property. "),(0,p.kt)("h3",{id:"parameters"},"Parameters"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID")," of the abstract property. ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,p.kt)("p",{parentName:"li"},"  List of parameters that will be used to define the implementation. Each element is a ",(0,p.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"implExpr")),(0,p.kt)("p",{parentName:"li"},"  ",(0,p.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value determines the implementation of an abstract property.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"whenExpr")),(0,p.kt)("p",{parentName:"li"},"  An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,p.kt)("inlineCode",{parentName:"p"},"CASE"),". "))),(0,p.kt)("h3",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}m.isMDXComponent=!0}}]);