(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93751],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),h=i,c=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95086:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={title:"Working parameters"},o={unversionedId:"Working_parameters",id:"Working_parameters",isDocsHomePage:!1,title:"Working parameters",description:"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):",source:"@site/docs/Working_parameters.md",sourceDirName:".",slug:"/Working_parameters",permalink:"/next/Working_parameters",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Working_parameters.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Working parameters"},sidebar:"learn",previous:{title:"Launch events",permalink:"/next/Launch_events"},next:{title:"User interface",permalink:"/next/User_interface"}},d=[],m={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Java code in the ",(0,r.kt)("inlineCode",{parentName:"li"},"lsfusion.server.physics.admin.Settings.java")," file (relevant for platform forks)"),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"lsfusion.properties")," which are typically part of the project and therefore function for all installations by default - parameter name should start with ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," (e.g., settings.enableUI)"),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/settings.properties")," (for specific installations) - parameter name should start with ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",{parentName:"li",href:"/next/Launch_parameters#appjava"},"Java startup parameters")," - parameter name should start with ",(0,r.kt)("inlineCode",{parentName:"li"},"D")," prefix plus ",(0,r.kt)("inlineCode",{parentName:"li"},"settings")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"-Dsettings.enableUI=2"),")"),(0,r.kt)("li",{parentName:"ul"},"In the database: ",(0,r.kt)("inlineCode",{parentName:"li"},"Administration > System > Settings > Parameters"),". In this interface, you can set both global settings and settings for specific roles"),(0,r.kt)("li",{parentName:"ul"},"During the execution of an action using system actions: ",(0,r.kt)("inlineCode",{parentName:"li"},"Service.pushSetting[STRING, STRING]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Service.popSetting[STRING]")," (overriding the value of the property for the entire current thread).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableUI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines user interface access, including ",(0,r.kt)("a",{parentName:"td",href:"/next/Access_from_an_external_system#form"},"form api"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"2")," - Allow anonymous access",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"1")," - Allow authenticated access only",(0,r.kt)("br",null),"0 - Do not allow access"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," (",(0,r.kt)("inlineCode",{parentName:"td"},"2")," - if the server is started in ",(0,r.kt)("a",{parentName:"td",href:"/next/Launch_parameters#devmode-broken"},"development mode"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableAPI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines access to the program interface excluding form api",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"2")," - Allow anonymous access",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"1")," - Allow authenticated access only",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"0")," - Do not allow access"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," (",(0,r.kt)("inlineCode",{parentName:"td"},"2")," - if the server is started in ",(0,r.kt)("a",{parentName:"td",href:"/next/Launch_parameters#devmode-broken"},"development mode"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"freeConnections")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of connections in the connection pool on the application server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"12"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"statDegree")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The base used to estimate the number of records (statistics) by all optimizers. With that, optimizers consider any number of records equal to the specified base to a certain degree (for example, if the number of records is really ",(0,r.kt)("inlineCode",{parentName:"td"},"1000")," and the base is ",(0,r.kt)("inlineCode",{parentName:"td"},"5"),", then the optimizer considers the number of records equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," to the ",(0,r.kt)("inlineCode",{parentName:"td"},"4"),"th degree). Thus, the larger the base, the less accurate the statistics become, which means the compilation time, the size of the caches and generated requests are reduced, but this can significantly increase the likelihood of errors when building the correct query plan."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{id:"authTokenExpiration"}),(0,r.kt)("inlineCode",{parentName:"td"},"authTokenExpiration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication token expiration time in minutes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60*24")," (1 day)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reserveIDStep")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of IDs that the application server immediately reserves for optimization when performing single object adding operations (with asynchronous input, single ",(0,r.kt)("inlineCode",{parentName:"td"},"NEW"),", etc.)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"50"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"excessThreadAllocatedBytes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"accessInterruptCount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Determine the threshold and the number of iterations of memory measurement during which this threshold is exceeded after which the Java thread will be automatically interrupted. This mechanism is typically used to increase the fault tolerance of the application server."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5GB"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryLengthTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the query materialization mechanism. ",(0,r.kt)("inlineCode",{parentName:"td"},"queryLengthTimeout")," defines the minimum query length for which the mechanism is enabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useRequestTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables the mechanism for repeated remote calls if these calls take too long. It is necessary for resolving situations when a call is made on the server, but the response is lost due to network problems. The latter usually happens when the application server is running in a virtualized environment. Thus, in this case, it is recommended to enable this setting and disable it in the opposite case."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tempTablesTimeThreshold"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tempTablesCountThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},'Determine the minimum lifespan threshold (in seconds) of a temporary table and the number of tables per connection, upon exceeding which these temporary tables are cleared/deleted in the routine mode. The minimum lifespan threshold for the table should be commensurate with the standard using time of the temporary table. The smaller these thresholds, the lower the resource consumption by the database server, but the higher the likelihood of "cache rotation"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"240"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"40"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryRowCountPessLimit"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"queryRowCountOptDivider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the protection mechanism against too large queries. ",(0,r.kt)("inlineCode",{parentName:"td"},"queryRowCountPessLimit")," - minimum number of records for which this protection is activated, ",(0,r.kt)("inlineCode",{parentName:"td"},"queryRowCountOptDivider")," - the threshold at which the application server throws an error (is set as part of all memory available for the application server, e.g., if the parameter value is ",(0,r.kt)("inlineCode",{parentName:"td"},"50")," and the memory capacity is ",(0,r.kt)("inlineCode",{parentName:"td"},"100GB"),", then the threshold is ",(0,r.kt)("inlineCode",{parentName:"td"},"100GB/50=2GB"),")."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"50"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryLengthLimit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the protection mechanism against too long queries. ",(0,r.kt)("inlineCode",{parentName:"td"},"queryLengthLimit")," - the length of the request upon exceeding which the application server throws an error."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2000000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remoteLogTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime threshold (in milliseconds) at which the remote call is written to the corresponding log (server-remote)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"explainThreshold"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"explainJavaStack"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"explainCompile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Output parameters of ",(0,r.kt)("a",{parentName:"td",href:"/next/Journals_and_logs#explain-broken"},"query execution plan logs"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"explainThreshold")," - runtime threshold (in milliseconds) at which SQL request is written to the corresponding log (explain). Used only if ",(0,r.kt)("inlineCode",{parentName:"td"},"Service.explainAnalyzeMode[User]")," is enabled for the user."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"explainJavaStack")," - determines whether the Java stack should also be logged in addition to the LSF stack."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"explainCompile")," - outputs to a special log (explaincompile) information about the compilation of the query (proposed plans, pushing conditions into subqueries, etc.)."))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startServerAnyWay")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Start the server, even if there are errors in the index structure or metadata synchronization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conflictSleepThreshold"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"conflictSleepTimeDegree")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for resolving repeated update conflicts:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"conflictSleepThreshold")," - the number of unsuccessful attempts (when a conflict arose) after which the mechanism should be enabled."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"conflictSleepTimeDegree")," - time base (in seconds), at the degree of which counted in the number of attempts the thread should be stopped (e.g., if the base is ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," then for ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," attempts timeout will be ",(0,r.kt)("inlineCode",{parentName:"td"},"8"),", for ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," - ",(0,r.kt)("inlineCode",{parentName:"td"},"16"),", etc.)"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutNanosPerRow")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of nanoseconds to process one row (is used to estimate the approximate time of the request execution). If this estimated time is exceeded, the platform tries to materialize some subqueries (or somehow change this request to a more pessimistic one) and run the query again. Reducing this parameter value may lead to more frequent materializations and additional repeated executions of the query in general, increasing it may lead to the use of incorrect plans (in the first place, nested loops on joining large tables), for example, in cases when the SQL server evaluates the subquery statistics incorrectly."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deadLockThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for resolving repeated deadlocks. ",(0,r.kt)("inlineCode",{parentName:"td"},"deadLockThreshold")," - the number of unsuccessful attempts (when a deadlock occurred) after which the mechanism should be enabled."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"periodRestartConnections"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"percentRestartConnections")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the connection restarting mechanism. ",(0,r.kt)("inlineCode",{parentName:"td"},"periodRestartConnections")," - determines how often (a period in seconds) this mechanism is launched. ",(0,r.kt)("inlineCode",{parentName:"td"},"percentRestartConnections")," - determines the percentage of connections with the maximum scoring that will be restarted."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"closeFormDelay")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The period provided to the client to finish processing the form after initiating its closure on the server (this mechanism is necessary for saving a round trip request when closing the form)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"constraintRowsLimit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the number of rows that should be displayed within a constraint violation message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultCompareForStringContains")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Use Contains as the default filter in custom filters"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementComplexity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitComplexityGrowthCoeff"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementStat"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementValueComplexity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitApplyHintIncrementComplexity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitApplyHintIncrementStat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for managing the complexity of changes (materialization of property changes when the complexity of incremental calculations becomes too large):",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementComplexity")," - complexity threshold (defined as the approximate number of executed operators). When exceeded, property changes are materialized into a temporary table. This threshold must be exceeded either by the condition that defines the object collections for which the property has changed, or directly by the value of this property (for the value it is additionally verified that the increase in complexity compared to the calculation without changes exceeds ",(0,r.kt)("inlineCode",{parentName:"td"},"limitComplexityGrowthCoeff"),")"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementStat")," - the threshold of the estimated number of object collections for which the property changes, upon exceeding which the changes will not materialize (to avoid materialization of too large amount of data). This value is multiplied by the square of the ratio of the change complexity to the threshold (the greater the complexity, the less harm in the additional effort for maintaining a large amount of data), and also after this multiplication the resulting threshold is checked for being no less than the maximum number of records out of all used temporary tables (if less, then it is increased to this value)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"limitHintIncrementValueComplexity")," - if one of the property parameters is a known constant value, its changes will not be materialized by default. At the same time, complexity can increase very quickly, so there is an additional threshold in the platform, upon exceeding which changes will be materialized even in this case (with a constant parameter). However, if a property is marked with a special ",(0,r.kt)("inlineCode",{parentName:"td"},"COMPLEX")," option or depends on such a property, its changes having a constant value as one of the parameters will never be materialized."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"limitApplyHintIncrementComplexity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"limitApplyHintIncrementStat")," - parameters similar to the upper ones without the Apply prefix, and thus used when executing actions inside the ",(0,r.kt)("a",{parentName:"td",href:"/next/Apply_changes_APPLY"},"changes applying (",(0,r.kt)("inlineCode",{parentName:"a"},"APPLY"),")")," operator (e.g., inside event handling)")),"Upon increasing all of the above parameters, the compiler and the optimizer will have more information (possibly redundant) for building more efficient plans, but will also consume more of the processor time/memory (often significantly, therefore it is not recommended to set them too large)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"50"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"200"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"excessThreadAllocatedBytes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"excessInterruptCount"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"threadAllocatedMemoryPeriod")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the excessive memory consumption preventing mechanism on the application server:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"excessThreadAllocatedBytes")," - the number of bytes upon exceeding which the thread is considered as consuming too much memory"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"excessInterruptCount")," - the number of consecutive measurements during which the thread consumes too much memory. When exceeded, the thread will be interrupted"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"threadAllocatedMemoryPeriod")," - period (in seconds) that determines how often memory consumption by threads is measured"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5368709120L")," (5GB), ",(0,r.kt)("inlineCode",{parentName:"td"},"4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"180")," (3 minutes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useSavePointsThreshold"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"savePointCountForExceptions"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"updateSavePointsMinMultiplier"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"updateSavePointsMaxMultiplier")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the mechanism for using savepoints in transactions (used to avoid restarting the entire transaction, for example, in the subquery materialization mechanism):",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"useSavePointsThreshold")," - the number of simultaneous savepoints on the application server. The higher, the less likely transactions will be restarted, but the more likely some DBMSs (for example, Postgres) will initiate global locks (LWLock in Postgres). This parameter is adaptive and can change depending on the actual need to use savepoints (since the savepoint mechanism is turned on only after a certain number of transaction restarts). "),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"savePointCountForExceptions")," - the number of transaction restarts, upon exceeding which the savepoint mechanism is enabled (",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," - fully disable). "),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"updateSavePointsMaxMultiplier"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"updateSavePointsMinMultiplier")," - the minimum and maximum coefficients that can be set by the server when adaptively determining the number of simultaneous savepoints on the application server (for example, by default these coefficients are ",(0,r.kt)("inlineCode",{parentName:"td"},"0.8")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0"),", i.e. the minimum targeted number of simultaneous savepoints is ",(0,r.kt)("inlineCode",{parentName:"td"},"5*0.8=4"),", the maximum is ",(0,r.kt)("inlineCode",{parentName:"td"},"5*3=15"),")"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"0.8"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"editLogicalOnSingleClick")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether an event of changing a property of a logical type on the form is triggered by a single (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or double (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") mouse click"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"editActionOnSingleClick")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the action call event on the form is triggered by a single (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or double (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") mouse click"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In addition to the system parameters, the platform also has ",(0,r.kt)("a",{parentName:"p",href:"/next/Launch_parameters"},"launch parameters")," which are set a little differently and are relevant mainly for startup (initialization) processes of various components of the platform and access to these components."))))}s.isMDXComponent=!0}}]);