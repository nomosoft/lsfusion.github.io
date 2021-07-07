(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63012],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71238:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"IDE"},s=void 0,l={unversionedId:"IDE",id:"version-v4/IDE",isDocsHomePage:!1,title:"IDE",description:"Creating a new lsFusion project",source:"@site/versioned_docs/version-v4/IDE.md",sourceDirName:".",slug:"/IDE",permalink:"/IDE",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/IDE.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"IDE"},sidebar:"version-v4/learn",previous:{title:"Coding conventions",permalink:"/Coding_conventions"},next:{title:"Overview",permalink:"/Examples"}},c=[{value:"Creating a new lsFusion project",id:"newproject",children:[]},{value:"Developing an application",id:"dev",children:[]},{value:"Starting up a server",id:"run",children:[]},{value:"Creating a server startup configuration",id:"configuration",children:[]},{value:"Building an application (with embedded server)",id:"build",children:[]}],p={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"newproject"},"Creating a new lsFusion project"),(0,a.kt)("p",null,"Launch ",(0,a.kt)("strong",{parentName:"p"},"IDEA")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Create New Project"),", or when ",(0,a.kt)("strong",{parentName:"p"},"IDEA")," is already opened, select ",(0,a.kt)("inlineCode",{parentName:"p"},"File > New > Project")," from the menu."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75082).Z}),(0,a.kt)("img",{src:n(98771).Z})),(0,a.kt)("p",null,"Select project type ",(0,a.kt)("inlineCode",{parentName:"p"},"lsFusion"),". Make sure that the JDK is set and the link to the library with the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsFusion")," is selected (when ",(0,a.kt)("a",{parentName:"p",href:"/Development_auto"},"automatic installation")," is used, this link is set automatically; otherwise, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Download")," or select the previously downloaded library ",(0,a.kt)("inlineCode",{parentName:"p"},"Create"),") and then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(12040).Z})),(0,a.kt)("p",null,"Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters for the database and application server when necessary. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Finish"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28118).Z})),(0,a.kt)("h3",{id:"dev"},"Developing an application"),(0,a.kt)("p",null,"All the source code written in ",(0,a.kt)("strong",{parentName:"p"},"lsFusion")," is stored by default in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/lsfusion"),"."),(0,a.kt)("p",null,"To add a new ",(0,a.kt)("a",{parentName:"p",href:"/Modules"},"module"),", right-click the corresponding folder and select ",(0,a.kt)("inlineCode",{parentName:"p"},"New > lsFusion Module")," from the menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76934).Z})),(0,a.kt)("p",null,"You can also create subfolders (by choosing ",(0,a.kt)("inlineCode",{parentName:"p"},"Package"),") to group similar modules into a directory."),(0,a.kt)("h3",{id:"run"},"Starting up a server"),(0,a.kt)("p",null,"When you create a new project, a server startup configuration is also created by default. You can run it by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Run -> Run 'Run lsFusion server'")," or by clicking on the symbol ",(0,a.kt)("img",{src:n(71793).Z})," next to the caption ",(0,a.kt)("inlineCode",{parentName:"p"},"Run lsFusion server")," in the upper right corner. If startup is successful, the last line in the log should be ",(0,a.kt)("inlineCode",{parentName:"p"},"Server has successfully started"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45919).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62947).Z})),(0,a.kt)("p",null,"After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop."),(0,a.kt)("h3",{id:"configuration"},"Creating a server startup configuration"),(0,a.kt)("p",null,"If the platform is embedded to an existing project (for example, ",(0,a.kt)("a",{parentName:"p",href:"/Development_manual#maven"},"via Maven")," for a Maven project), you may need to manually create a server startup configuration for the applications. This is done as follows:"),(0,a.kt)("p",null,"In the menu, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit configurations"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85902).Z})),(0,a.kt)("p",null,"In the window that opens, click ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," in the upper left corner and select ",(0,a.kt)("inlineCode",{parentName:"p"},"lsFusion Server")," from the drop-down list"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(10708).Z})),(0,a.kt)("p",null,"Set the configuration name and the module (if there are several) for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25722).Z})),(0,a.kt)("h3",{id:"build"},"Building an application (with embedded server)"),(0,a.kt)("p",null,"To compile a single JAR file that contains both the developed code and the application server itself, you can use the following ",(0,a.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/"},"guide"),". The result JAR file (",(0,a.kt)("em",{parentName:"p"},"artifact"),") can be used to install applications on a production server as described in the section ",(0,a.kt)("a",{parentName:"p",href:"/Execution_manual#appservice"},"installing an applications server as a service"),". Note that since all modules and the server itself will be inside the same JAR file, the installation process is slightly different:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in the first section instead of the server JAR file this file must be downloaded"),(0,a.kt)("li",{parentName:"ul"},"the third section (copying application files to the server) can be skipped")))}u.isMDXComponent=!0},76934:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_add_module-f96b6a90d6837c31f9ab841fd7512070.png"},10708:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_add_server-7899f167483b4e142fb7af0824724254.png"},25722:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_conf_name-16c8bb42e6a15191a116d9d00c625c46.png"},98771:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_create_project-213520422c6d0b41d9a366fb514ed100.png"},85902:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_edit_conf-6d4c9f2696d22cee17e04a988f440f32.png"},28118:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_project_name-07003f2b6fedfb885d369a1fbfd9efd6.png"},12040:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_project_type-0fd21524f5cbcc20e6c3e8d89112a5ec.png"},45919:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_run_command-2ce951636d580b6f84da92d0566d0f57.png"},62947:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_run_in_operationbar-328e1c6d1b0fa845c094f426403b1d9b.png"},71793:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAABkElEQVQ4Ee2UO0gDQRCG/9t75eFdxIhFilgYRII2tjZWCoKNgpUoSMDGFIpFqoCFjZWNjYWdjWAhpBMEiVYKIqJiE9TG+CgUTBC9nZWLEjizeQhpBAcGdnZ2vv13dlkln88LNMlYkzglzB+DjexMYuV4Da/vhV91QXrMQCiEo8Il5g7SOH08bxgohWk+Ez7bQtHkSJ+sYv1sEx/k1IVKYVwIQFWhB/wwbRuZ+yyS+2nkXm5rAuUwIjjEQQrATB2mHcSd8ozk4RK2rjIgQVJoFRgHpy93CxWVQQ/6oVl+bOS2sZhdxkPxqQIohTmcw+NEcLUww4BhteDi7QYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},75082:function(e,t,n){"use strict";t.Z=n.p+"assets/images/IDE_welcome_screen-4a4a765ac64129f10a365ad7d971e4d9.png"}}]);