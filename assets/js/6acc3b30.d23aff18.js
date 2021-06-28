(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[32874],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72207:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Property change (CHANGE)"},p=void 0,c={unversionedId:"Property_change_CHANGE",id:"version-v4/Property_change_CHANGE",isDocsHomePage:!1,title:"Property change (CHANGE)",description:"The property change operator allows you to change the values of one property (write) to the value of another property (read) for all object collections for which the value of a third property (condition) is not NULL. The condition can be omitted (in which case it is considered to be equal to TRUE).",source:"@site/versioned_docs/version-v4/Property_change_CHANGE.md",sourceDirName:".",slug:"/Property_change_CHANGE",permalink:"/Property_change_CHANGE",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Property_change_CHANGE.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Property change (CHANGE)"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/State_change"},next:{title:"New object (NEW)",permalink:"/New_object_NEW"}},l=[{value:"Changeable properties",id:"changeable",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"property change")," operator allows you to change the values of one property (",(0,a.kt)("em",{parentName:"p"},"write"),") to the value of another property (",(0,a.kt)("em",{parentName:"p"},"read"),") for all object collections for which the value of a third property (",(0,a.kt)("em",{parentName:"p"},"condition"),") is not ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". The condition can be omitted (in which case it is considered to be equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),")."),(0,a.kt)("h3",{id:"changeable"},"Changeable properties"),(0,a.kt)("p",null,"In general, the property to be written should be ",(0,a.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data"),", but the platform also allows writing to properties created using the ",(0,a.kt)("a",{parentName:"p",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"selection")," operator. In this case, the platform determines the condition that is met in this selection operator for the created property; the property corresponding to that condition is written to. Accordingly, all properties that can be written to we'll call ",(0,a.kt)("em",{parentName:"p"},"mutable"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In addition to the above, mutable properties are also properties created using the ",(0,a.kt)("a",{parentName:"p",href:"/Extremum_MAX_MIN"},"extremum operator")," and ",(0,a.kt)("a",{parentName:"p",href:"/Logical_operators_AND_OR_NOT_XOR"},"logical operators")," (which are basically varieties of the selection operator)"))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare an action that implements property change, use the ",(0,a.kt)("a",{parentName:"p",href:"/CHANGE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"CHANGE")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// set a 15 percent discount for all customers who have an order amount over 100\nCLASS Customer;\ndiscount = DATA NUMERIC[5,2] (Customer);\ntotalOrders = DATA NUMERIC[14,2] (Customer);\nsetDiscount  {\n    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;\n}\n\ndiscount = DATA NUMERIC[5,2] (Customer, Item);\nin = DATA BOOLEAN (Item);\n// change the discount for selected products for a customer\nsetDiscount (Customer c)  {\n    discount(c, Item i) <- 15 WHERE in(i);\n}\n\n// copy property g to property f\nf = DATA INTEGER (INTEGER);\ng = DATA INTEGER (INTEGER);\ncopyFG  {\n    f(a) <- g(a);\n}\n")))}u.isMDXComponent=!0}}]);