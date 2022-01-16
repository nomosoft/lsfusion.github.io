"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[84167],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=["components"],i={title:"Journals and logs"},s=void 0,d={unversionedId:"Journals_and_logs",id:"version-v4/Journals_and_logs",title:"Journals and logs",description:"Logs",source:"@site/versioned_docs/version-v4/Journals_and_logs.md",sourceDirName:".",slug:"/Journals_and_logs",permalink:"/Journals_and_logs",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Journals_and_logs.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Journals and logs"},sidebar:"version-v4/learn",previous:{title:"Scheduler",permalink:"/Scheduler"},next:{title:"Profiler",permalink:"/Profiler"}},p=[{value:"Logs",id:"logs",children:[],level:3},{value:"Logs",id:"logs",children:[],level:3}],c={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error log (fig. 1).")),(0,r.kt)("p",null,"This log contains all errors that occurred during the operation. Errors are divided into the following classes (the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object class")," column):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class ",(0,r.kt)("inlineCode",{parentName:"li"},"Exception on server"),";"),(0,r.kt)("li",{parentName:"ul"},"errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class ",(0,r.kt)("inlineCode",{parentName:"li"},"Exception on server (from client)"),";"),(0,r.kt)("li",{parentName:"ul"},"errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: ",(0,r.kt)("inlineCode",{parentName:"li"},"Exception on client")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Exception on web client"),";"),(0,r.kt)("li",{parentName:"ul"},"connection errors \u2013 errors are displayed on a blue background and are divided into two classes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Temporary connection loss")," - connection with the server was interrupted, but was then restored;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Permanent connection loss")," - connection with the server was interrupted and could not be restored;")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(44405).Z})),(0,r.kt)("p",null," Fig. 1 Error log."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception trace")," section displays the java stack for the error; the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception LSF trace")," displays the lsfusion stack. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connection Log (fig. 2).")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60452).Z})),(0,r.kt)("p",null,"Fig. 2 Connection Log."),(0,r.kt)("p",null,"The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: ",(0,r.kt)("inlineCode",{parentName:"p"},"Active connections"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," section shows which forms the user entered and how many times. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," section lets you trace when changes were applied, for some forms."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The change log contains more detailed information about the changes which were reflected in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," section of the connection log (fig. 3.)."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41193).Z})),(0,r.kt)("p",null,"Fig. 3 Change log."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Change")," column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."),(0,r.kt)("p",null,"The form lets you filter the changes made by users (excluding system changes) by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"Only user changes"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.).")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5763).Z})),(0,r.kt)("p",null,"Fig. 4 Client application log."),(0,r.kt)("p",null,"As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"Date from")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Date to")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date and time")," section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."),(0,r.kt)("p",null,"How much information should be stored in these logs is indicated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin form > Settings > Logging tab")," (fig. 5.)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67774).Z})),(0,r.kt)("p",null,"Fig. 5 Setting the number of days for logging."),(0,r.kt)("p",null,"If you need to track changes to the individual values of any  Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go to any entry in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Surname")," column and right-click to bring up the ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure property policy")," menu (fig. 6.);")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38458).Z})),(0,r.kt)("p",null,"Fig. 6 Select a property to log changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Security policy")," form, check ",(0,r.kt)("inlineCode",{parentName:"li"},"Logged by user")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK")," (fig. 7.);")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(14703).Z})),(0,r.kt)("p",null,"Fig. 7 Setting user logging."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"once you restart the application server, right-clicking on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Surname")," property will bring up an additional ",(0,r.kt)("inlineCode",{parentName:"li"},"Show Change History")," menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8).")),(0,r.kt)("h3",{id:""},(0,r.kt)("img",{src:n(46574).Z})),(0,r.kt)("p",null,"Fig. 8. Property change history."),(0,r.kt)("p",null,"The retention time for these logs is set to the same retention time as for the Change Log."),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("p",null,"The following set of logs is supported for each platform component in the platform:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Folder"),(0,r.kt)("th",{parentName:"tr",align:null},"Logs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$FUSION_DIR$/logs"),", where ",(0,r.kt)("inlineCode",{parentName:"td"},"$FUSION_DIR$")," is the application server startup folder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"stdout")," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.). Includes ",(0,r.kt)("inlineCode",{parentName:"td"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"explain")," logs."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"stderr")," - general error log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"start")," - a log of the stop and start process"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"remote"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the application server"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"sql"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sqlhand"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sqlconnection"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sqlconflict"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sqladjust")," - logs of processes related to accessing the database server"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"explain"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"explaincompile")," - logs where query plans are displayed (database server and application server, respectively)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"lru")," - log of memory management processes (mainly LRU caches)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"allocatedbytes")," - log of memory allocation processes"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"assert")," - a log of various checks on meeting specified conditions (or rather, non-meeting)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"mail")," - mail log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"jasperReports")," - JasperReports log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"jdbc")," - jdbc driver log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"exinfo")," - a log of additional information (not included in the above)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$CATALINA_BASE$/logs"),", where ",(0,r.kt)("inlineCode",{parentName:"td"},"$CATALINA_BASE$")," is the folder where Tomcat is installed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"catalina.out")," - general output log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"gwtlog"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gwtlog-err")," - GWT logs"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the web server")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$USER_DIR$/.fusion/logs"),", where ",(0,r.kt)("inlineCode",{parentName:"td"},"$USER_DIR$")," is the user folder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"stdout")," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"stderr")," - general error log"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"remote"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the application server"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"jasperReports")," - JasperReports log")))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"With ",(0,r.kt)("a",{parentName:"p",href:"/Execution_auto"},"automatic installation")," under Linux, symlinks for these folders (as well as for the ",(0,r.kt)("a",{parentName:"p",href:"/Launch_parameters#applsfusion"},"lsFusion launch parameters"),") are automatically created to ",(0,r.kt)("a",{parentName:"p",href:"/Execution_auto#logs"},"other folders")," whose location is better aligned with Linux ideology."))))}u.isMDXComponent=!0},41193:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_change_log-77c906c0463d46fcfdeb0daa6c8f1b1d.png"},5763:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_client_app_log-746459cb2512064a6afcf809a358f92d.png"},60452:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_connection_log-5696a142aee31ad27fa735a5fb071342.png"},44405:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_error_log-a78ad45f17ae5241063f3bed45a573fc.png"},38458:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_log_property_changes-4bbe3199b2d5daecd4f2f189ddac25b5.png"},67774:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_log_settings-82a4ded811cb69cd37024f69d542a851.png"},46574:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_property_changes_history-befbd6aed40287bfe38660bddbaa7ba9.png"},14703:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_user_logging-757d6d4e309da6be74572557eea3aa48.png"}}]);