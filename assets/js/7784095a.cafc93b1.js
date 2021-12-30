"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4687],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5553:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],s={title:"Events"},i=void 0,c={unversionedId:"Events",id:"version-v4/Events",title:"Events",description:"Events are a mechanism that allows to execute certain actions at certain points in time (these actions shall be called event handlers).",source:"@site/versioned_docs/version-v4/Events.md",sourceDirName:".",slug:"/Events",permalink:"/Events",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Events.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Events"},sidebar:"version-v4/learn",previous:{title:"Send mail (EMAIL)",permalink:"/Send_mail_EMAIL"},next:{title:"Simple event",permalink:"/Simple_event"}},u=[{value:"Event types",id:"type",children:[],level:3},{value:"Change operators&#39; event mode",id:"change",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Events")," are a mechanism that allows to execute certain ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"actions")," at certain points in time (these actions shall be called event ",(0,o.kt)("em",{parentName:"p"},"handlers"),")."),(0,o.kt)("h3",{id:"type"},"Event types"),(0,o.kt)("p",null,"There are two types of events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Synchronous")," - occur immediately after a data change."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Asynchronous")," - occur at arbitrary points in time as the server manages to complete execution of all defined handlers, and/or after a certain period of time.")),(0,o.kt)("p",null,"In turn, from the perspective of the scope of changes, events can be divided into:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Local")," - occur locally for each change session."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Global")," - occur globally for the entire database.")),(0,o.kt)("p",null,"Thus, events can be synchronous local, synchronous global, asynchronous local, and asynchronous global. Note that by default global events are synchronous and local events are asynchronous (as the most commonly used combinations). Also, by default, all events are global."),(0,o.kt)("p",null,"Advantages of synchronous events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If necessary, you can cancel the changes in the handler if, for example, these changes do not meet the necessary conditions."),(0,o.kt)("li",{parentName:"ul"},"They guarantee greater integrity, since after the changes have been written the user is guaranteed to be working with the updated data.")),(0,o.kt)("p",null,"Advantages of asynchronous events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You can release the user immediately and perform the handling "in the background". This improves system ergonomics; however, it is possible only when updating the data is not critical for the user\'s further work (for global events, for example, within the next 5-10 minutes, until the server has time to complete the next handling cycle).'),(0,o.kt)("li",{parentName:"ul"},"Handlings are grouped for a large number of changes, including those made by different users (in the case of global events), and, accordingly, are performed fewer times, thereby improving the overall system performance.")),(0,o.kt)("p",null,"Advantages of local events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user sees the results of event handling immediately, not only after he has saved to the common database.")),(0,o.kt)("p",null,"Advantages of global events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They provide better performance and integrity, due both to the fact that the handling is performed only after the changes are saved to the common database (that is, significantly less often), and to the use of the numerous DBMS capabilities for working with transactions.")),(0,o.kt)("p",null,"The platform also allows to additionally specify that the event will occur only if the change session belongs to one of the given forms. If this is not done, then it must be kept in mind that most of the described events occur very often, so their handling should not have side effects (for example, showing messages) if there are no changes in the session. Ideally, events should be ",(0,o.kt)("a",{parentName:"p",href:"/Simple_event"},"simple")," and should generally be used only to optimize the performance of really complex cases."),(0,o.kt)("h3",{id:"change"},"Change operators' event mode"),(0,o.kt)("p",null,"When handling events, you can use a special mode of the ",(0,o.kt)("a",{parentName:"p",href:"/Previous_value_PREV"},"previous value")," operator (it shall be called ",(0,o.kt)("em",{parentName:"p"},"event")," mode). In this mode, the previous value operator will return the property's values not at the beginning of the session, but at the time of the previous occurrence of this event (or rather, the end of its handling). A similar mode is supported for all ",(0,o.kt)("a",{parentName:"p",href:"/Change_operators_SET_CHANGED_etc"},"change")," operators."),(0,o.kt)("p",null,"Event mode is also supported for the ",(0,o.kt)("a",{parentName:"p",href:"/Cancel_changes_CANCEL"},"cancel changes")," operator. In this case, when changes are canceled inside the global event handler, the session is not cleared, but ",(0,o.kt)("a",{parentName:"p",href:"/Apply_changes_APPLY"},"applying changes")," which led to the execution of this handler is canceled. The global event must be synchronous, otherwise the platform will throw an error."),(0,o.kt)("p",null,"By default, the following modes are used in event handling:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for the previous value operator: standard mode (value at the beginning of the session)"),(0,o.kt)("li",{parentName:"ul"},"for change operators - event (value at the time the previous event occurred). "),(0,o.kt)("li",{parentName:"ul"},"for the cancel changes operator - event mode (canceling the application, not clearing the session).")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For change operators and the previous value operator, when executing global synchronous event handlers, these modes (standard and event) coincide"))),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create actions that handle events, use the ",(0,o.kt)("a",{parentName:"p",href:"/ON_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"ON")," statement"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n")))}p.isMDXComponent=!0}}]);