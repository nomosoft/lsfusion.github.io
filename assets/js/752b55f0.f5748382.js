(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42360:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"PARTITION operator"},p=void 0,l={unversionedId:"PARTITION_operator",id:"PARTITION_operator",isDocsHomePage:!1,title:"PARTITION operator",description:"The PARTITION operator creates a property that implements partition/order or simple distribution.",source:"@site/docs/PARTITION_operator.md",sourceDirName:".",slug:"/PARTITION_operator",permalink:"/next/PARTITION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/PARTITION_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"PARTITION operator"},sidebar:"learn",previous:{title:"OVERRIDE operator",permalink:"/next/OVERRIDE_operator"},next:{title:"PREV operator",permalink:"/next/PREV_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/next/Partitioning_sorting_PARTITION_..._ORDER"},"partition/order")," or ",(0,a.kt)("a",{parentName:"p",href:"/next/Distribution_UNGROUP"},"simple distribution"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"There are two different types of ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION")," operator. The first implements partition/order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PARTITION \ntype expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),(0,a.kt)("p",null,"The second implements simple distribution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PARTITION \nUNGROUP propertyId distributionType expr\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[BY groupExpr1, ..., groupExprM]\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"distributionType")," can be described in several ways:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PROPORTION [STRICT] ROUND(digits)\nLIMIT [STRICT]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION")," operator creates a property that divides all object collections in the system into groups, and taking into account the specified order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"calculates an ",(0,a.kt)("a",{parentName:"li",href:"/next/Set_operations"},"aggregate function")," for each object collection. In case of partition/order,"),(0,a.kt)("li",{parentName:"ul"},"it distributes a certain value among the object collections of one group in the case of distribution.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block describes the groups into which numerous sets of object collections will be divided. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block is not specified, all object collections are considered to belong to the same group. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated or the distribution will take place. If this function is ",(0,a.kt)("a",{parentName:"p",href:"/next/Set_operations"},"non-commutative"),", the specified order must be uniquely determined. If a new parameter (not used earlier in the  ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," options and in the upper context) is declared in the expressions defining the order, when calculating the resulting value the condition of non-NULLness of all these expressions is automatically added."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")),(0,a.kt)("p",{parentName:"li"},"  Type of aggregate function. Currently the aggregate function types ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PREV")," are supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"ID")," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block. When calculating the values of group/partition expressions, objects that identify a certain group of object sets will be passed to this property as an input.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"distributionType")),(0,a.kt)("p",{parentName:"li"},"  Distribution type. These are of the following types:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PROPORTION")),(0,a.kt)("p",{parentName:"li"},"  Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")," expression that is specified after the distribution type."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"STRICT")),(0,a.kt)("p",{parentName:"li"},"  When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ROUND(digits)")),(0,a.kt)("p",{parentName:"li"},"  Specifies the number of decimal places the value will be rounded to."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"digits")," \u2013 ",(0,a.kt)("a",{parentName:"li",href:"/next/Literals#intliteral-broken"},"Integer literal")," specifying the number of decimal places. "))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")),(0,a.kt)("p",{parentName:"li"},"  A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set to the first object collection, and the rest of the value of the distributed property is assigned to the second object collection. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")," expression specified after specifying the distribution type."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"STRICT")),(0,a.kt)("p",{parentName:"li"},"  When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block.")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value is passed as an input to the aggregating function as an operand in case of partition/order. In case of distribution with type ",(0,a.kt)("inlineCode",{parentName:"p"},"PROPORTION")," it defines the proportion, and with type ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," it defines the limit.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"groupExpr1, ..., groupExprM"),"  "),(0,a.kt)("p",{parentName:"li"},"  List of group expressions (groups). ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DESC")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprK")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions that define the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. "))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// determines the place of the team in the conference\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// finds the team next in the conference standings\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// proportional distribution example\nCLASS Order;\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// example of distribution with limits\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\ndiscountSum 'Discount by line' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}c.isMDXComponent=!0}}]);