(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83895],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29302:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"RECURSION operator"},p=void 0,l={unversionedId:"RECURSION_operator",id:"RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION operator creates a property that implements recursion.",source:"@site/docs/RECURSION_operator.md",sourceDirName:".",slug:"/RECURSION_operator",permalink:"/next/RECURSION_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/RECURSION_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"RECURSION operator"},sidebar:"learn",previous:{title:"PREV operator",permalink:"/next/PREV_operator"},next:{title:"STRUCT operator",permalink:"/next/STRUCT_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RECURSION")," operator creates a ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements ",(0,i.kt)("a",{parentName:"p",href:"/next/Recursion_RECURSION"},"recursion"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"$name"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is the name of the parameter."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"initialExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value is the initial property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"stepExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value is a property of a recursion step. Allows a special syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"$name")," to access the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter in the previous step.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES YES")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are allowed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES NO")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are not allowed. This option is used by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CYCLES IMPOSSIBLE")),(0,i.kt)("p",{parentName:"li"},"  Specifies that cycles are not possible."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")),(0,i.kt)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"fib(i) = RECURSION 1 IF (i==0 OR i==1) STEP 1 IF (i==$i+1 OR i==$i+2);\n")),(0,i.kt)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own, artificially creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}u.isMDXComponent=!0}}]);