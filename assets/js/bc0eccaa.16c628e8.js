(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41910:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Grouping (GROUP)"},s={unversionedId:"Grouping_GROUP_",id:"Grouping_GROUP_",isDocsHomePage:!1,title:"Grouping (GROUP)",description:"The group\xa0operator\xa0creates a\xa0property that divides all object collections in the system into groups, and calculates an\xa0aggregating function for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/docs/Grouping_GROUP_.md",sourceDirName:".",slug:"/Grouping_GROUP_",permalink:"/next/Grouping_GROUP_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Grouping_GROUP_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Grouping (GROUP)"},sidebar:"learn",previous:{title:"Set operations",permalink:"/next/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/next/Partitioning_sorting_PARTITION_..._ORDER_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"group\xa0"),"operator\xa0creates a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that divides all object collections in the system into groups, and calculates an\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations#func"},"aggregating function")," for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.\xa0"),(0,o.kt)("p",null,"Groups are defined for this operator as a set of properties (",(0,o.kt)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker.\xa0If the aggregation function is not\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations#commutative-broken"},"commutative"),", then the order must be uniquely determined.\xa0"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"))),(0,o.kt)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",(0,o.kt)("strong",{parentName:"p"},"EQUAL"),",\xa0",(0,o.kt)("strong",{parentName:"p"},"AGGR")," and\xa0",(0,o.kt)("strong",{parentName:"p"},"NAGGR"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EQUAL\xa0"),"is a special case of the aggregation function ",(0,o.kt)("strong",{parentName:"li"},"MAX")," (or ",(0,o.kt)("strong",{parentName:"li"},"MIN"),"), with the additional ",(0,o.kt)("a",{parentName:"li",href:"/next/Constraints"},"constraint")," that the value of the operand of the aggregating function within each group must be the same.\xa0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AGGR")," and ",(0,o.kt)("strong",{parentName:"li"},"NAGGR\xa0"),"\xa0are a special case of\xa0",(0,o.kt)("strong",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function NAGGR only differs from AGGR\xa0in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a property that implements grouping, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/GROUP_operator"},(0,o.kt)("strong",{parentName:"a"},"GROUP")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); // property (STRING[100]) -> Country is obtained\n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}l.isMDXComponent=!0}}]);