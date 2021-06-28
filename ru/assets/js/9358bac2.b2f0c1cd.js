(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74244],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=o(n),k=a,c=N["".concat(u,".").concat(k)]||N[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},48768:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438",sidebar_label:"\u041e\u0431\u0437\u043e\u0440"},p=void 0,u={unversionedId:"Set_operations",id:"Set_operations",isDocsHomePage:!1,title:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438",description:"\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043d\u0435 \u0440\u0430\u0432\u043d\u044b NULL. \u0412 \u043b\u043e\u0433\u0438\u043a\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0442\u0430\u043a\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Set_operations.md",sourceDirName:".",slug:"/Set_operations",permalink:"/ru/next/Set_operations",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/Set_operations.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"24.06.2021",frontMatter:{title:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438",sidebar_label:"\u041e\u0431\u0437\u043e\u0440"},sidebar:"learn",previous:{title:"\u0412\u044b\u0431\u043e\u0440 (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/ru/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},next:{title:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 (GROUP)",permalink:"/ru/next/Grouping_GROUP"}},o=[{value:"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"func",children:[]},{value:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",id:"correct",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],m={toc:o};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432")," \u043d\u0435 \u0440\u0430\u0432\u043d\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),". \u0412 \u043b\u043e\u0433\u0438\u043a\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0442\u0430\u043a\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 ",(0,l.kt)("em",{parentName:"p"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),". "),(0,l.kt)("h3",{id:"func"},"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0448\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 ",(0,l.kt)("em",{parentName:"p"},"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")," \u0432 \u0432\u0438\u0434\u0435 \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f ",(0,l.kt)("em",{parentName:"p"},"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c")," (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"), ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 (",(0,l.kt)("em",{parentName:"p"},"\u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430\u043c\u0438"),"), ",(0,l.kt)("em",{parentName:"p"},"\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f")," \u043a ",(0,l.kt)("em",{parentName:"p"},"\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443")," \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 ",(0,l.kt)("em",{parentName:"p"},"\u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f")," \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c)."),(0,l.kt)("a",{className:"lsdoc-anchor",id:"commutative"}),(0,l.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,l.kt)("em",{parentName:"p"},"\u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u0438\u0432\u043d\u043e\u0439"),", \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043d\u0435 \u0432\u0430\u0436\u043d\u043e, \u0432 \u043a\u0430\u043a\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430. "),(0,l.kt)("p",null,"\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0441\u043d\u0438\u0437\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0438\u0434\u044b \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0412\u0438\u0434 / \u043e\u043f\u0446\u0438\u044f \u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432. \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = result (+) operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0447\u0438\u0441\u043b\u043e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MAX")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = max(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u043b\u044e\u0431\u043e\u0439 \u0441\u0440\u0430\u0432\u043d\u0438\u043c\u044b\u0439")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MIN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = min(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u043b\u044e\u0431\u043e\u0439 \u0441\u0440\u0430\u0432\u043d\u0438\u043c\u044b\u0439")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CONCAT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"separator, operand"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"result = CONCAT separator, result, operand")),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LAST / PREV")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},"where, operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = IF where THEN operand ELSE result"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"\u043b\u044e\u0431\u043e\u0439"))))),(0,l.kt)("p",null,"\u0421 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0447\u0435\u0442\u044b\u0440\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/next/Grouping_GROUP"},"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 (",(0,l.kt)("inlineCode",{parentName:"a"},"GROUP"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/next/Partitioning_sorting_PARTITION_..._ORDER"},"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (",(0,l.kt)("inlineCode",{parentName:"a"},"PARTITION ... ORDER"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/next/Recursion_RECURSION"},"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (",(0,l.kt)("inlineCode",{parentName:"a"},"RECURSION"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/next/Distribution_UNGROUP"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (",(0,l.kt)("inlineCode",{parentName:"a"},"UNGROUP"),")"))),(0,l.kt)("h3",{id:"correct"},"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u044d\u0442\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c ",(0,l.kt)("em",{parentName:"p"},"\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439"),"."),(0,l.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A;\nd = DATA INTEGER (A);\n\nf (b) = GROUP SUM 1 IF d(a) < b;\nmessageF  { MESSAGE f(5); } // \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f\n\ng = GROUP SUM f(b);\nmessageG  { MESSAGE g(); } // f(b) \u043d\u0435 NULL \u0434\u043b\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 b, \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443\n\nFORM f\n    OBJECTS d=DATE\n;\n\nprintFWithD { PRINT f OBJECTS d=currentDate(); } // \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f\n\nprintFWithoutD { PRINT f; } // \u0444\u0438\u043b\u044c\u0442\u0440\u0430 \u0434\u043b\u044f \u0434\u0430\u0442 \u043d\u0435\u0442, \u0430 d IS DATE \u043d\u0435 NULL \u0434\u043b\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 d, \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443\n")),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439, \u043d\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u044d\u0442\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u043d\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0435\u0433\u043e \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"hs = GROUP SUM 1 IF (a AS INTEGER) >= 4 AND a <= 6;\nmessageHS  { MESSAGE hs(); } // \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u044b\u0434\u0430\u0442\u044c 3, \u043d\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443\nhi = GROUP SUM 1 IF iterate(a, 4, 6); // workaround: \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430\u043c\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e iterate (\u043e\u043d\u043e \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044e)\n")))}d.isMDXComponent=!0}}]);