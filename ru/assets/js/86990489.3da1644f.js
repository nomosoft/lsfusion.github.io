(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20357],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13172:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},c=void 0,p={unversionedId:"Aggregations",id:"version-v4/Aggregations",isDocsHomePage:!1,title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438",description:"\u041f\u043e\u0434 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e (\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e) \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043d\u0435 NULL \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Aggregations.md",sourceDirName:".",slug:"/Aggregations",permalink:"/ru/Aggregations",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Aggregations.md",version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"07.07.2021",frontMatter:{title:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"},sidebar:"version-v4/learn",previous:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b",permalink:"/ru/User_classes"},next:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/ru/View_logic"}},u=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],l={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041f\u043e\u0434 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e (",(0,i.kt)("em",{parentName:"p"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e"),") \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e ",(0,i.kt)("em",{parentName:"p"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e")," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442. "),(0,i.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Classes"},"\u043a\u043b\u0430\u0441\u0441\u0443"),"."),(0,i.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0439 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0432\u0443\u0445 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Simple_constraints"},"\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0439")," \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/Grouping_GROUP"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e")," \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430. \u041f\u0435\u0440\u0432\u043e\u0435 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 - \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430, \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0433\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u043e \u0432\u0441\u0435 \u0435\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0432\u0442\u043e\u0440\u043e\u0435 \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 - \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0433\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"p",href:"/ru/AGGR_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"a"},"AGGR")),"."),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u044b A B \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 AB\n\nCLASS Shipment '\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice '\u0418\u043d\u0432\u043e\u0439\u0441';\ncreateShipment '\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443' = DATA BOOLEAN (Invoice);\ndate '\u0414\u0430\u0442\u0430 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439' = DATA DATE (Invoice);\nCLASS ShipmentInvoice '\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u0438\u043d\u0432\u043e\u0439\u0441\u0443' : Shipment;\n// \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e \u0438\u043d\u0432\u043e\u0439\u0441\u0443, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0438\u043d\u0432\u043e\u0439\u0441\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); \ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // \u0434\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 = \u0434\u0430\u0442\u0430 \u0438\u043d\u0432\u043e\u0439\u0441\u0430 + 1\n")))}s.isMDXComponent=!0}}]);