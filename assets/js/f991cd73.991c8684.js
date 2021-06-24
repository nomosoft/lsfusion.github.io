(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70806],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56370:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"INDEX statement"},p={unversionedId:"INDEX_statement",id:"version-v4/INDEX_statement",isDocsHomePage:!1,title:"INDEX statement",description:"The INDEX statement creates a new index.",source:"@site/versioned_docs/version-v4/INDEX_statement.md",sourceDirName:".",slug:"/INDEX_statement",permalink:"/INDEX_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/INDEX_statement.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"INDEX statement"},sidebar:"version-v4/learn",previous:{title:"TABLE statement",permalink:"/TABLE_statement"},next:{title:"BEFORE statement",permalink:"/BEFORE_statement"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX")," statement creates a new ",(0,i.kt)("a",{parentName:"p",href:"/Indexes"},"index"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INDEX field1, ..., fieldN;\n")),(0,i.kt)("p",null,"Each field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldi")," ",(0,i.kt)("a",{parentName:"p",href:"/Tables"},"table")," that the system should use to build an index can be described either by specifying a ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"property")," stored in this table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"propertyId(param1, ..., paramN)\n")),(0,i.kt)("p",null,"or by specifying a typed parameter referring to the corresponding key field: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"param\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX")," statement adds a new index by an ordered list of fields of a certain table. The list must contain at least one property. The table that the index should be built for is determined by the first property in the list. Also, the parameters passed to this property are used to determine the correspondence of the parameters to the key fields of the table. Accordingly, all other properties in the list should have the same number of parameters and be stored in the same table as the first property. The parameters specified in the list will correspond to the key fields of the table."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,i.kt)("p",{parentName:"li"},"  The ID of the ",(0,i.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"property")," that should be stored in the table for which the index is being created.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,i.kt)("p",{parentName:"li"},"  A list of property parameters. Each element of the list is a ",(0,i.kt)("a",{parentName:"p",href:"/IDs#paramid"},"typed parameter"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param")),(0,i.kt)("p",{parentName:"li"},"  A typed parameter that determines the key field of the table."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n")))}d.isMDXComponent=!0}}]);