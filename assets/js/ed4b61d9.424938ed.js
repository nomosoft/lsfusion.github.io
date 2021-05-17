(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[85375],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26974:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o={title:"Materializations"},l={unversionedId:"Materializations",id:"version-v4/Materializations",isDocsHomePage:!1,title:"Materializations",description:"Almost any aggregated property in the platform can be materialized. In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was data (and not calculated every time). Accordingly, all data properties are materialized by definition.",source:"@site/versioned_docs/version-v4/Materializations.md",sourceDirName:".",slug:"/Materializations",permalink:"/Materializations",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Materializations.md",version:"v4",lastUpdatedAt:1620400543,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"Materializations"},sidebar:"version-v4/learn",previous:{title:"Execution",permalink:"/Execution"},next:{title:"Indexes",permalink:"/Indexes"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Almost any aggregated ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"property")," in the platform can be ",(0,i.kt)("em",{parentName:"p"},"materialized"),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",(0,i.kt)("a",{parentName:"p",href:"/Data_properties_DATA_"},"data")," (and not calculated every time). Accordingly, all data properties are materialized by definition."),(0,i.kt)("p",null,"A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," (that is, the iteration operation for all of its non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values is ",(0,i.kt)("a",{parentName:"p",href:"/Set_operations#correct"},"correct"),")"),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To materialize a property, use the ",(0,i.kt)("a",{parentName:"p",href:"/Property_options#persistent-broken"},(0,i.kt)("inlineCode",{parentName:"a"},"MATERIALIZED")," option")," in the property options."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"sum = GROUP SUM sum(OrderDetail od) BY order(od) MATERIALIZED;\ndate(OrderDetail od) = date(order(od)) MATERIALIZED;\n\n // such a property cannot be materialized, since it is not NULL for an infinite number of dates\nlastDate(Customer customer, DATE date) = GROUP LAST date(Order order) IF customer(order) = customer AND date(order) < date;\n")))}c.isMDXComponent=!0}}]);