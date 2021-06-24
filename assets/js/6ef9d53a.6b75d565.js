(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68661],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return m},kt:function(){return N}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),k=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=k(r),N=a,s=u["".concat(p,".").concat(N)]||u[N]||d[N]||l;return r?n.createElement(s,i(i({ref:e},m),{},{components:r})):n.createElement(s,i({ref:e},m))}));function N(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var k=2;k<l;k++)i[k]=r[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67355:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),i={title:"Operator priority"},o={unversionedId:"Operator_priority",id:"Operator_priority",isDocsHomePage:!1,title:"Operator priority",description:"When evaluating an expression, operators are evaluated in a specific order depending on operator priority. The higher the operator\u2019s priority, the earlier it will be executed. The table below lists the priorities of all operators in descending order.",source:"@site/docs/Operator_priority.md",sourceDirName:".",slug:"/Operator_priority",permalink:"/next/Operator_priority",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Operator_priority.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Operator priority"},sidebar:"learn",previous:{title:"Expression",permalink:"/next/Expression"},next:{title:"Property operators",permalink:"/next/Property_operators"}},p=[],k={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When evaluating an ",(0,l.kt)("a",{parentName:"p",href:"/next/Expression"},"expression"),", ",(0,l.kt)("a",{parentName:"p",href:"/next/Property_operators_paradigm"},"operators")," are evaluated in a specific order depending on ",(0,l.kt)("em",{parentName:"p"},"operator priority"),". The higher the operator\u2019s priority, the earlier it will be executed. The table below lists the priorities of all operators in descending order."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(expression)"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/JOIN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"JOIN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/CASE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"CASE")),", ",(0,l.kt)("a",{parentName:"td",href:"/next/MULTI_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MULTI")),", ",(0,l.kt)("a",{parentName:"td",href:"/next/OVERRIDE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"OVERRIDE")),", ",(0,l.kt)("a",{parentName:"td",href:"/next/EXCLUSIVE_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"EXCLUSIVE")),", ",(0,l.kt)("a",{parentName:"td",href:"/next/IF_..._THEN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"IF ... THEN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/PARTITION_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"PARTITION")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/RECURSION_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"RECURSION")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/GROUP_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"GROUP")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/STRUCT_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"STRUCT")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/MAX_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MAX")),"/",(0,l.kt)("a",{parentName:"td",href:"/next/MIN_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"MIN")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/CONCAT_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"CONCAT")),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"INTEGER"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DOUBLE"),"...",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/PREV_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"PREV")),", ",(0,l.kt)("a",{parentName:"td",href:"/next/Change_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"CHANGED"),", ..."),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Property_signature_CLASS"},(0,l.kt)("inlineCode",{parentName:"a"},"CLASS")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/ACTIVE_TAB_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"ACTIVE")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Literals"},(0,l.kt)("inlineCode",{parentName:"a"},"literal"))),(0,l.kt)("td",{parentName:"tr",align:null},"Expression in parentheses",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Composition_JOIN"},"Composition"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"Selection"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Partitioning_sorting_PARTITION_..._ORDER"},"Partition/order"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Recursion_RECURSION"},"Recursion"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Grouping_GROUP"},"Group"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Structure_operators_STRUCT"},"Structure creation"),(0,l.kt)("br",null),"Maximum/minimum",(0,l.kt)("br",null),"String concatenation",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Type_conversion"},"Type conversion"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Property_signature_CLASS"},"Property signature"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Activity_ACTIVE"},"Activity"),(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"/next/Constant"},"Constants")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),"Prefix",(0,l.kt)("br",null),(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Brackets_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"[ ]")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/IS_AS_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"IS")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/IS_AS_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"AS"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Structure_operators_STRUCT"},"Structure element access"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Classification_IS_AS"},"Classification"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Classification_IS_AS"},"Classification")),(0,l.kt)("td",{parentName:"tr",align:null},"Postfix",(0,l.kt)("br",null),"Postfix",(0,l.kt)("br",null),"Postfix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"-"))),(0,l.kt)("td",{parentName:"tr",align:null},"Unary minus"),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"*")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"/"))),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication",(0,l.kt)("br",null),"Division"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"+")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"-"))),(0,l.kt)("td",{parentName:"tr",align:null},"Addition",(0,l.kt)("br",null),"Subtraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"(+)")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Arithmetic_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"(-)"))),(0,l.kt)("td",{parentName:"tr",align:null},"Addition with ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," values",(0,l.kt)("br",null),"Subtraction with ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," values"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"<")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"<=")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},">")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},">="))),(0,l.kt)("td",{parentName:"tr",align:null},"Less",(0,l.kt)("br",null),"Less or equal",(0,l.kt)("br",null),"Greater",(0,l.kt)("br",null),"Greater or equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary",(0,l.kt)("br",null),"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"==")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Comparison_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"!="))),(0,l.kt)("td",{parentName:"tr",align:null},"Equal",(0,l.kt)("br",null),"Not equal"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary",(0,l.kt)("br",null),"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"NOT"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"Logical negation")),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"AND"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"Logical AND")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"XOR"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"Logical exclusive OR")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/AND_OR_NOT_XOR_operators"},(0,l.kt)("inlineCode",{parentName:"a"},"OR"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"Logical OR")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/IF_operator"},(0,l.kt)("inlineCode",{parentName:"a"},"IF"))),(0,l.kt)("td",{parentName:"tr",align:null},"Condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")))))}m.isMDXComponent=!0}}]);