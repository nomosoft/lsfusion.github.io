"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27230],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const p={title:"<- WHEN statement"},i=void 0,o={unversionedId:"lt-_WHEN_statement",id:"lt-_WHEN_statement",title:"<- WHEN statement",description:"The <- WHEN statement creates a calculated event.",source:"@site/docs/lt-_WHEN_statement.md",sourceDirName:".",slug:"/lt-_WHEN_statement",permalink:"/next/lt-_WHEN_statement",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/lt-_WHEN_statement.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"<- WHEN statement"},sidebar:"learn",previous:{title:"WHEN statement",permalink:"/next/WHEN_statement"},next:{title:"CONSTRAINT statement",permalink:"/next/CONSTRAINT_statement"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<- WHEN")," statement creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Calculated_events"},"calculated event"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"propertyId(param1, ..., paramN) <- valueExpr WHEN eventExpr;\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<- WHEN")," statement creates a calculated event for the ",(0,a.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"property")," specified on the left side of the statement. This operator can declare its own local parameters when specifying the property whose value will ",(0,a.kt)("a",{parentName:"p",href:"/next/Property_change_CHANGE"},"change"),". These parameters can then be used in expressions of the condition and value to which the property will change."),(0,a.kt)("p",null,"Only one calculated event can be defined for a property. "),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property")," whose value will be changed when the event occurs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"Typed parameters")," properties whose value will be changed when the event occurs. The number of these parameters must be equal to the number of parameters of the property being changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"valueExpr")),(0,a.kt)("p",{parentName:"li"},"  The expression to whose value the property value must be changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"eventExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value is a condition for the generated event."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// when adding a client, by default, give him the specified discount\ndefaultDiscount = DATA NUMERIC[6,2] ();\ndiscount = DATA NUMERIC[6,2] (Customer);\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[10,2] (OrderDetail);\n\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n")))}u.isMDXComponent=!0}}]);