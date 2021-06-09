(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97487],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return m},kt:function(){return N}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),k=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=k(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=k(r),N=n,s=u["".concat(p,".").concat(N)]||u[N]||d[N]||l;return r?a.createElement(s,i(i({ref:e},m),{},{components:r})):a.createElement(s,i({ref:e},m))}));function N(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var k=2;k<l;k++)i[k]=r[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49494:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=r(22122),n=r(19756),l=(r(67294),r(3905)),i={title:"Operator priority"},o={unversionedId:"Operator_priority",id:"version-v4/Operator_priority",isDocsHomePage:!1,title:"Operator priority",description:"When evaluating an expression, operators are evaluated in a specific order depending on operator priority. The higher the operator\u2019s priority, the earlier it will be executed. The table below lists the priorities of all operators in descending order.",source:"@site/versioned_docs/version-v4/Operator_priority.md",sourceDirName:".",slug:"/Operator_priority",permalink:"/Operator_priority",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Operator_priority.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Operator priority"},sidebar:"version-v4/learn",previous:{title:"Expression",permalink:"/Expression"},next:{title:"Property operators",permalink:"/Property_operators"}},p=[],k={toc:p};function m(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When evaluating an ",(0,l.kt)("a",{parentName:"p",href:"/Expression"},"expression"),", ",(0,l.kt)("a",{parentName:"p",href:"/Property_operators_paradigm"},"operators")," are evaluated in a specific order depending on ",(0,l.kt)("em",{parentName:"p"},"operator priority"),". The higher the operator\u2019s priority, the earlier it will be executed. The table below lists the priorities of all operators in descending order."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(expression)"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/JOIN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"JOIN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/CASE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"CASE")),", ",(0,l.kt)("a",{parentName:"td",href:"/MULTI_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MULTI")),", ",(0,l.kt)("a",{parentName:"td",href:"/OVERRIDE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"OVERRIDE")),", ",(0,l.kt)("a",{parentName:"td",href:"/EXCLUSIVE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"EXCLUSIVE")),", ",(0,l.kt)("a",{parentName:"td",href:"/IF_..._THEN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"IF ... THEN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/PARTITION_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"PARTITION")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/RECURSION_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"RECURSION")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/GROUP_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"GROUP")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/STRUCT_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"STRUCT")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/MAX_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MAX")),"/",(0,l.kt)("a",{parentName:"td",href:"/MIN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MIN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/CONCAT_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"CONCAT")),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"INTEGER"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DOUBLE"),"...",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/PREV_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"PREV")),", ",(0,l.kt)("a",{parentName:"td",href:"/Change_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"CHANGED"),", ..."),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Property_signature_CLASS"},(0,l.kt)("inlineCode",{parentName:"a"},"CLASS")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/ACTIVE_TAB_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"ACTIVE")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Literals"},(0,l.kt)("inlineCode",{parentName:"a"},"literal"))),(0,l.kt)("td",{parentName:"tr",align:null},"Expression in parentheses",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Composition_JOIN"},"Composition"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"Selection"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Partitioning_sorting_PARTITION_..._ORDER"},"Partition/order"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Recursion_RECURSION"},"Recursion"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Grouping_GROUP"},"Group"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Structure_operators_STRUCT"},"Structure creation"),(0,l.kt)("br",null),"Maximum/minimum",(0,l.kt)("br",null),"String concatenation",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Type_conversion"},"Type conversion"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Property_signature_CLASS"},"Property signature"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Activity_ACTIVE"},"Activity"),(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"/Constant"},"Constants")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Brackets_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"[ ]")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/IS_AS_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"IS")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/IS_AS_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"AS"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Structure_operators_STRUCT"},"Structure element access"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Classification_IS_AS"},"Classification"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Classification_IS_AS"},"Classification")),(0,l.kt)("td",{parentName:"tr",align:null},"Postfix",(0,l.kt)("br",null),"Postfix",(0,l.kt)("br",null),"Postfix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"-"))),(0,l.kt)("td",{parentName:"tr",align:null},"Unary minus"),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"*")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"/"))),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication",(0,l.kt)("br",null),"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"+")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"-"))),(0,l.kt)("td",{parentName:"tr",align:null},"Addition",(0,l.kt)("br",null),"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"(+)")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"(-)"))),(0,l.kt)("td",{parentName:"tr",align:null},"Addition with ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," values",(0,l.kt)("br",null),"Subtraction with ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," values"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"<")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"<=")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},">")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},">="))),(0,l.kt)("td",{parentName:"tr",align:null},"Less",(0,l.kt)("br",null),"Less or equal",(0,l.kt)("br",null),"Greater",(0,l.kt)("br",null),"Greater or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary",(0,l.kt)("br",null),"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"==")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"!="))),(0,l.kt)("td",{parentName:"tr",align:null},"Equal",(0,l.kt)("br",null),"Not equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"NOT"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Logical_operators_AND_OR_NOT_XOR"},"Logical negation")),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"AND"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Logical_operators_AND_OR_NOT_XOR"},"Logical AND")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"XOR"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Logical_operators_AND_OR_NOT_XOR"},"Logical exclusive OR")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"OR"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/Logical_operators_AND_OR_NOT_XOR"},"Logical OR")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/IF_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"IF"))),(0,l.kt)("td",{parentName:"tr",align:null},"Condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")))))}m.isMDXComponent=!0}}]);