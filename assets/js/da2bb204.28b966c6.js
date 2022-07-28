"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59260],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const i={title:"Internationalization"},o=void 0,l={unversionedId:"Internationalization",id:"Internationalization",title:"Internationalization",description:"Internationalization consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions.",source:"@site/docs/Internationalization.md",sourceDirName:".",slug:"/Internationalization",permalink:"/next/Internationalization",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Internationalization.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Internationalization"},sidebar:"learn",previous:{title:"Migration",permalink:"/next/Migration"},next:{title:"Execution",permalink:"/next/Execution"}},s={},p=[{value:"Locale",id:"locale",level:3},{value:"Formats for specifying locale parameters",id:"formats-for-specifying-locale-parameters",level:3},{value:"Determining the current locale",id:"current",level:3},{value:"String data localization",id:"string-data-localization",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Internationalization")," consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions."),(0,r.kt)("h3",{id:"locale"},"Locale"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Locale")," is a set of parameters that defines regional settings, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Language"),(0,r.kt)("li",{parentName:"ul"},"Country (which in turn determines the formats for displaying numbers and dates)"),(0,r.kt)("li",{parentName:"ul"},"Timezone"),(0,r.kt)("li",{parentName:"ul"},"The starting year for a 100-year period, if the year is specified by a two-digit number")),(0,r.kt)("h3",{id:"formats-for-specifying-locale-parameters"},"Formats for specifying locale parameters"),(0,r.kt)("p",null,"The language and country are specified in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/locale/create.html"},"standard Java")," format. For example, the language can be specified using the lines ",(0,r.kt)("inlineCode",{parentName:"p"},"ru"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"en"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"fr"),", and the country, respectively, using ",(0,r.kt)("inlineCode",{parentName:"p"},"RU"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"US"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"CA"),". The timezone is specified in the format supported by the Java method ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html#getTimeZone-java.lang.String-"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeZone.getTimeZone"))," (examples: ",(0,r.kt)("inlineCode",{parentName:"p"},"PST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Europe/Minsk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GMT-8:00"),").  The year is specified as a number (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"1960"),")."),(0,r.kt)("h3",{id:"current"},"Determining the current locale"),(0,r.kt)("p",null,"The server locale is determined by the ",(0,r.kt)("a",{parentName:"p",href:"http://www.oracle.com/us/technologies/java/locale-140624.html"},"default locale")," of the JVM in which the server starts (namely, the startup parameters ",(0,r.kt)("a",{parentName:"p",href:"/next/Launch_parameters#locale"},"user.language, user.country, user.timezone, and user.twoDigitYearStart"),"). When the application server starts, the parameters of this locale are automatically saved in the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Locale parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Start parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.language")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.serverLanguage[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.serverCountry[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.serverTimezone[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Starting year of the 100-year period"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.twoDigitYearStart")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.serverTwoDigitYearStart[]"))))),(0,r.kt)("p",null,"The server locale is used as ",(0,r.kt)("em",{parentName:"p"},"current")," when the action in which localization is being performed is initiated by the system, and not by a particular user (i.e., the system user is considered the current user)."),(0,r.kt)("p",null,"Otherwise, the current locale is determined by the values of the following properties (the user who initiated the action is passed as a parameter):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.language[CustomUser]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.country[CustomUser]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.timezone[CustomUser]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Starting year of the 100-year period"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Authentication.twoDigitYearStart[CustomUser]"))))),(0,r.kt)("p",null,"In the current platform implementation, the above properties allow you both to use the locale parameters of the user's operating system and to set these parameters explicitly for specific users; or, for example, to use the server locale for all users (this is the default behavior)."),(0,r.kt)("h3",{id:"string-data-localization"},"String data localization"),(0,r.kt)("p",null,"The main task of platform internationalization is to localize the string data that the user sees. When sending text messages, property captions, actions, forms, etc. to the client from the server, these can be translated into another language or otherwise converted depending on the ",(0,r.kt)("a",{parentName:"p",href:"#current"},"current locale"),"."),(0,r.kt)("p",null,"Localizable strings are created as follows: in the string, in place of the text to be localized, ",(0,r.kt)("em",{parentName:"p"},"the string data ID")," is specified in curly brackets (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"'{button.cancel}'"),"). When this string is sent to the client, all IDs found in the string are searched for on the server, then each is searched for in all ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_resource_bundle"},"ResourceBundle")," project files in the required locale. If found, the ID in the brackets is replaced with the corresponding text."))}c.isMDXComponent=!0}}]);