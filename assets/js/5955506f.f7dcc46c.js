(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82767],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46747:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"FORMULA operator"},i={unversionedId:"FORMULA_operator",id:"version-v4/FORMULA_operator",isDocsHomePage:!1,title:"FORMULA operator",description:"The FORMULA operator creates a property that implements a custom formula.",source:"@site/versioned_docs/version-v4/FORMULA_operator.md",sourceDirName:".",slug:"/FORMULA_operator",permalink:"/FORMULA_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/FORMULA_operator.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"FORMULA operator"},sidebar:"version-v4/learn",previous:{title:"EXCLUSIVE operator",permalink:"/EXCLUSIVE_operator"},next:{title:"GROUP operator",permalink:"/GROUP_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMULA")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," that implements a ",(0,o.kt)("a",{parentName:"p",href:"/Custom_formula_FORMULA"},"custom formula"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FORMULA [NULL] [className] [syntaxType1] text1, ..., [syntaxTypeN] textN\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMULA")," operator creates a property that executes an arbitrary formula in SQL. It is possible to specify different formulas for different SQL dialects so that these properties are portable between different DBMSs. "),(0,o.kt)("p",null,"This property operator cannot be used inside ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expressions"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NULL")),(0,o.kt)("p",{parentName:"li"},"  Keyword specifying that the property being created may return ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," if all parameter values are non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". If not specified, then the property must be defined so that for non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," parameters it will always return a non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value (failure to fulfill this condition may lead to unpredictable results)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"className")),(0,o.kt)("p",{parentName:"li"},"  The name of the ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes"},"builtin class")," of the value returned by the property. If not specified, the resulting class is considered to be the ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes#commonparentclass"},"common ancestor")," of all property operands.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"syntaxType1, ..., syntaxTypeN")),(0,o.kt)("p",{parentName:"li"},"  Keywords defining SQL dialect types. The following types are currently supported:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PG")," - PostgreSQL syntax"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MS")," - MS SQL Server syntax")),(0,o.kt)("p",{parentName:"li"},"If the dialect type is not specified explicitly, then the corresponding formula text is set as the default text. Each of the types (or the lack of a type) must appear in the operator no more than once.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"text1, ..., textN")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/IDs#strliteral"},"String literals"),", each of which contains a formula in SQL syntax. The notation ",(0,o.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$2")," etc. is used to pass property parameters to the formula, where the number denotes the property parameter number. Parameter numbers start from ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". The number of parameters in the created property will be equal to the maximum parameter number specified in the description of the formula."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"round(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  // a property with two parameters: a rounded number and the number of decimal places\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';   // a property that converts the value passed as an argument to a 15-character string.\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; // a property with two different implementations for different SQL dialects\n")))}c.isMDXComponent=!0}}]);