(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79393],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p={title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},i={unversionedId:"Metaprogramming",id:"version-v4/Metaprogramming",isDocsHomePage:!1,title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u044d\u0442\u043e \u0432\u0438\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043a\u043e\u0434. \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u0438 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Metaprogramming.md",sourceDirName:".",slug:"/Metaprogramming",permalink:"/ru/Metaprogramming",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Metaprogramming.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"23.06.2021",frontMatter:{title:"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},sidebar:"version-v4/learn",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c",permalink:"/ru/Form_extension"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/Integration"}},c=[{value:"\u041c\u0435\u0442\u0430\u043a\u043e\u0434",id:"metacode",children:[]},{value:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c",id:"concat",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],l={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")," - \u044d\u0442\u043e \u0432\u0438\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043a\u043e\u0434. \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u0438 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438.  "),(0,o.kt)("h3",{id:"metacode"},"\u041c\u0435\u0442\u0430\u043a\u043e\u0434"),(0,o.kt)("p",null,"\u0412 \u044f\u0437\u044b\u043a\u0435 ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,o.kt)("em",{parentName:"p"},"\u043c\u0435\u0442\u0430\u043a\u043e\u0434"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"/ru/META_statement"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439 ",(0,o.kt)("inlineCode",{parentName:"a"},"META")),". \u041c\u0435\u0442\u0430\u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0438 \u0431\u043b\u043e\u043a\u0430 \u043a\u043e\u0434\u0430 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ",(0,o.kt)("strong",{parentName:"p"},"lsFusion"),", \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ",(0,o.kt)("a",{parentName:"p",href:"/ru/Statements"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439"),". \u042d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043a\u043e\u0434\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u043e\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"END"),". \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0443\u044e ",(0,o.kt)("a",{parentName:"p",href:"/ru/Forms"},"\u0444\u043e\u0440\u043c\u0443")," \u0434\u0432\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/ru/Actions"},"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),(0,o.kt)("p",null,"\u0412 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u041e\u043d \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"META"),", \u0438\u043c\u0435\u043d\u0438 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u0435\u0442\u0430\u043a\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"p"},"addActions")," \u0438\u043c\u0435\u0435\u0442 \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"formName"),". \u042d\u0442\u043e \u0438\u043c\u044f \u0444\u043e\u0440\u043c\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"/ru/commat_statement"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0435\u0439 ",(0,o.kt)("inlineCode",{parentName:"a"},"@")),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),(0,o.kt)("p",null,"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", \u0437\u0430\u0442\u0435\u043c \u0438\u0434\u0435\u0442 \u0438\u043c\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b. \u041f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u0434\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0435 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"formName")," \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"documentForm")," \u0438 \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"orderForm"),". \u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u0434\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),(0,o.kt)("h3",{id:"concat"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0447\u0430\u0441\u0442\u043e \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u043e\u0432\u044b\u0445 ",(0,o.kt)("a",{parentName:"p",href:"/ru/Element_identification"},"\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b")," \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u043d\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u043d\u0430. \u041f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u043c\u0435\u043d\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/ru/Tokens"},"\u043b\u0435\u043a\u0441\u0435\u043c"),". \u042d\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0435 \u043b\u0435\u043a\u0441\u0435\u043c\u044b \u0432 \u043e\u0434\u043d\u0443. \u0415\u0441\u043b\u0438 \u0436\u0435 \u043e\u0434\u043d\u0430 \u0438\u0437 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0445 \u043b\u0435\u043a\u0441\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"/ru/Literals#strliteral"},"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u043c \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u043c"),", \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u0438\u043d \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439 \u043b\u0438\u0442\u0435\u0440\u0430\u043b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name '\u0418\u043c\u044f '##caption = DATA BPSTRING[100](object);\n    object##Type '\u0422\u0438\u043f '##caption = DATA Type (object);\n    object##Value '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, '\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430');\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"objectProperties")," \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"DocumentName '\u0418\u043c\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA BPSTRING[100](Document);\nDocumentType '\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA Type (Document);\nDocumentValue '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430' = DATA INTEGER (Document);\n")),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"###"),", \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0438\u0437 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0445 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b, \u0435\u0441\u043b\u0438 \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0443\u043a\u0432\u043e\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440."),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name '\u0418\u043c\u044f'##caption = DATA BPSTRING[100](###object); // \u0434\u0435\u043b\u0430\u0435\u043c \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u043f\u0435\u0440\u0432\u0443\u044e \u0431\u0443\u043a\u0432\u0443\n    object##Type '\u0422\u0438\u043f'##caption = DATA type (###object);\n    object##Value '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c'##caption = DATA INTEGER (###object);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}m.isMDXComponent=!0}}]);