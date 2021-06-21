(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88099],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18091:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"GROUP operator"},p=void 0,s={unversionedId:"GROUP_operator",id:"version-v4/GROUP_operator",isDocsHomePage:!1,title:"GROUP operator",description:"The GROUP operator creates a property implementing grouping.",source:"@site/versioned_docs/version-v4/GROUP_operator.md",sourceDirName:".",slug:"/GROUP_operator",permalink:"/GROUP_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/GROUP_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"GROUP operator"},sidebar:"version-v4/learn",previous:{title:"FORMULA operator",permalink:"/FORMULA_operator"},next:{title:"IF operator",permalink:"/IF_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," implementing ",(0,o.kt)("a",{parentName:"p",href:"/Grouping_GROUP"},"grouping"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP")," operator creates a property implementing grouping. The type of grouping is determined by the type of the ",(0,o.kt)("a",{parentName:"p",href:"/Set_operations"},"aggregate function"),". This operator differs from others in that it can implicitly declare its parameters in the expressions used (by analogy with the ",(0,o.kt)("a",{parentName:"p",href:"/=_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"=")," statement"),' when the parameters are not defined explicitly). At the same time, it is important to understand that these "implicitly declared" parameters are not parameters of the created property (which are actually determined by the ',(0,o.kt)("inlineCode",{parentName:"p"},"BY")," block and / or the upper parameters used)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"BY")," block describes group expressions. Each expression corresponds to a parameter of the property being created. As in other operators, upper parameters can be used in this operator, and the used parameters also implicitly become groups of the created property. Accordingly, when using the operator in the ",(0,o.kt)("a",{parentName:"p",href:"/=_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"=")," statement")," and explicitly defining the parameters on the left, the expressions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"BY")," block are mapped only for unused parameters. Moreover, if the classes or the number of these parameters do not match the number / classes of ",(0,o.kt)("inlineCode",{parentName:"p"},"BY")," expressions then the platform will throw an error. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"BY")," block is defined, this operator cannot be used inside ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expressions"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated. Can only be used for ",(0,o.kt)("a",{parentName:"p",href:"/Set_operations"},"non-commutative")," aggregate functions (",(0,o.kt)("inlineCode",{parentName:"p"},"CONCAT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LAST")," ) and must be uniquely defined. If a new parameter is declared in the expressions specifying the order (i.e. parameter is not used in the remaining blocks or in the upper context), the condition of non-NULLness of all these expressions is automatically added."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," block defines the condition under which object collections will participate in the group operation. Can only be used for the aggregate functions ",(0,o.kt)("inlineCode",{parentName:"p"},"AGGR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NAGGR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"AGGR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NAGGR")," using this block explicitly (and not, say, an ",(0,o.kt)("a",{parentName:"p",href:"/IF_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IF")," operator")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BY")," blocks) only makes sense from the perspective of being able to change the created property to non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," in some automatic mechanisms of the platform (for example, ",(0,o.kt)("a",{parentName:"p",href:"/Simple_constraints"},"automatic resolution")," of simple constraints)."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type")),(0,o.kt)("p",{parentName:"li"},"  Type of aggregate function. Can be one of the following: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MIN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CONCAT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EQUAL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AGGR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NAGGR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LAST"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN")),(0,o.kt)("p",{parentName:"li"},"  A list of expressions whose values are passed to the aggregate function as operands. The number of expressions should correspond to the number of operands of the function used. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"groupExpr1, ..., groupExprN"),"  "),(0,o.kt)("p",{parentName:"li"},"  List of group expressions. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DESC")),(0,o.kt)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprM")),(0,o.kt)("p",{parentName:"li"},"  A list of expressions that define the order in which object collections will be iterated over when calculating the aggregate function. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,o.kt)("p",{parentName:"li"},"  Filtering expression. Only object groups for which the value of the filtering expression is not ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," will participate in the grouping."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); // property (STRING[100]) -> Country is obtained\n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}d.isMDXComponent=!0}}]);