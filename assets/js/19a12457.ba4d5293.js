"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65900],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Grouping (GROUP)"},i=void 0,s={unversionedId:"Grouping_GROUP",id:"Grouping_GROUP",title:"Grouping (GROUP)",description:"The group operator creates a property that divides all object collections in the system into groups, and calculates an aggregating function for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/docs/Grouping_GROUP.md",sourceDirName:".",slug:"/Grouping_GROUP",permalink:"/next/Grouping_GROUP",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Grouping_GROUP.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Grouping (GROUP)"},sidebar:"learn",previous:{title:"Set operations",permalink:"/next/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/next/Partitioning_sorting_PARTITION_..._ORDER"}},l={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"group")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that divides all object collections in the system into groups, and calculates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Set_operations#func"},"aggregating function")," for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group. "),(0,a.kt)("p",null,"Groups are defined for this operator as a set of properties (",(0,a.kt)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker. If the aggregation function is not ",(0,a.kt)("a",{parentName:"p",href:"/next/Set_operations#commutative"},"commutative"),", then the order must be uniquely determined. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"))),(0,a.kt)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",(0,a.kt)("inlineCode",{parentName:"p"},"EQUAL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NAGGR"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EQUAL")," is a special case of the aggregation function ",(0,a.kt)("inlineCode",{parentName:"li"},"MAX")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"MIN"),"), with the additional ",(0,a.kt)("a",{parentName:"li",href:"/next/Constraints"},"constraint")," that the value of the operand of the aggregating function within each group must be the same. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AGGR")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NAGGR")," are a special case of ",(0,a.kt)("inlineCode",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function ",(0,a.kt)("inlineCode",{parentName:"li"},"NAGGR")," only differs from ",(0,a.kt)("inlineCode",{parentName:"li"},"AGGR")," in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property that implements grouping, use the ",(0,a.kt)("a",{parentName:"p",href:"/next/GROUP_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// property (STRING[100]) -> Country is obtained\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}u.isMDXComponent=!0}}]);