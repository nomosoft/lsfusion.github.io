(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62861],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return O}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(n),O=o,d=m["".concat(c,".").concat(O)]||m[O]||s[O]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5612:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (PARTITION ... ORDER)"},u={unversionedId:"Partitioning_sorting_PARTITION_..._ORDER",id:"Partitioning_sorting_PARTITION_..._ORDER",isDocsHomePage:!1,title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (PARTITION ... ORDER)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f / \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u044b, \u0438 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044c\u0435\u043a\u0442\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u0442\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a: \u0432\u0441\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Partitioning_sorting_PARTITION_..._ORDER.md",sourceDirName:".",slug:"/Partitioning_sorting_PARTITION_..._ORDER",permalink:"/ru/next/Partitioning_sorting_PARTITION_..._ORDER",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/Partitioning_sorting_PARTITION_..._ORDER.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"24.06.2021",frontMatter:{title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (PARTITION ... ORDER)"},sidebar:"learn",previous:{title:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 (GROUP)",permalink:"/ru/next/Grouping_GROUP"},next:{title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)",permalink:"/ru/next/Recursion_RECURSION"}},c=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,a.kt)("em",{parentName:"p"},"\u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f / \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043d\u0430 ",(0,a.kt)("em",{parentName:"p"},"\u0433\u0440\u0443\u043f\u043f\u044b"),", \u0438 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e ",(0,a.kt)("em",{parentName:"p"},"\u043f\u043e\u0440\u044f\u0434\u043a\u0430")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044c\u0435\u043a\u0442\u043e\u0432 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Set_operations#func"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),". \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u0442\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a: \u0432\u0441\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. "),(0,a.kt)("p",null,"\u0413\u0440\u0443\u043f\u043f\u044b \u0432 \u044d\u0442\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0435 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432 (",(0,a.kt)("em",{parentName:"p"},"\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043e\u043a"),"), \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044f. \u0415\u0441\u043b\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Set_operations#commutative"},"\u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u0438\u0432\u043d\u0430"),", \u0442\u043e \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u043c. "),(0,a.kt)("p",null,"\u041e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f / \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Grouping_GROUP"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438"),", \u043d\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043e\u043a, \u0430 \u0434\u043b\u044f \u0441\u0430\u043c\u0438\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0434\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435."),(0,a.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/PARTITION_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,a.kt)("inlineCode",{parentName:"a"},"PARTITION")),". "),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043c\u0435\u0441\u0442\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace '\u041c\u0435\u0441\u0442\u043e' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// \u0441\u0442\u0440\u043e\u0438\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u0431\u0430\u0437\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u0445 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 (\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f)\nindex '\u041d\u043e\u043c\u0435\u0440' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0432 \u0442\u0443\u0440\u043d\u0438\u0440\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043f\u043e \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f\nCLASS Order;\ntransportSum '\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum '\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0435' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// \u043f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441 \u043b\u0438\u043c\u0438\u0442\u0430\u043c\u0438\ndiscountSum '\u0421\u043a\u0438\u0434\u043a\u0430' = DATA NUMERIC[10,2] (Order);\ndiscountSum '\u0421\u043a\u0438\u0434\u043a\u0430 \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0435' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}l.isMDXComponent=!0}}]);