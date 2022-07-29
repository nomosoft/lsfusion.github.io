"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93787],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},648:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var n=a(83117),i=(a(67294),a(3905));const r={title:"Access from an external system"},o=void 0,s={unversionedId:"Access_from_an_external_system",id:"version-v4/Access_from_an_external_system",title:"Access from an external system",description:"Action API",source:"@site/versioned_docs/version-v4/Access_from_an_external_system.md",sourceDirName:".",slug:"/Access_from_an_external_system",permalink:"/Access_from_an_external_system",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Access_from_an_external_system.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Access from an external system"},sidebar:"version-v4/learn",previous:{title:"Integration",permalink:"/Integration"},next:{title:"Access from an internal system",permalink:"/Access_from_an_internal_system"}},l={},p=[{value:"Action API",id:"action-api",level:2},{value:"Defining an action",id:"actiontype",level:3},{value:"Protocols",id:"protocols",level:3},{value:"HTTP",id:"http",level:4},{value:"Parameters",id:"url",level:5},{value:"Results",id:"httpresult",level:5},{value:"Several results / parameters in BODY",id:"several-results--parameters-in-body",level:5},{value:"Stateful API",id:"stateful-api",level:5},{value:"Authentication",id:"authentication",level:5},{value:"Form API",id:"form",level:2},{value:"Protocols",id:"protocols-1",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"Examples",id:"examples",level:2},{value:"Action API (Python)",id:"action-api-python",level:3},{value:"Form API (JavaScript)",id:"form-api-javascript",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"action-api"},"Action API"),(0,i.kt)("p",null,"The platform allows external systems to access an lsFusion-based system using various network protocols. The interface of such interaction is a call for an action with specified parameters and, if necessary, the return of certain property values (without parameters) as ",(0,i.kt)("em",{parentName:"p"},"results"),". It is assumed that all parameter and result objects are objects of ",(0,i.kt)("a",{parentName:"p",href:"/Built-in_classes"},"built-in classes"),"."),(0,i.kt)("h3",{id:"actiontype"},"Defining an action"),(0,i.kt)("p",null,"An action being called can be defined in one of the three ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL")," \u2013 code in the lsFusion language is specified. It is assumed that this code contains a declaration of an action named ",(0,i.kt)("inlineCode",{parentName:"li"},"run"),". This is the action that will be called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL ACTION")," \u2013 action code in the lsFusion language is specified. To access a parameter, the special character ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," and the parameter number (starting from ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),") are used.")),(0,i.kt)("h3",{id:"protocols"},"Protocols"),(0,i.kt)("p",null,"The platform currently supports the following network protocols:"),(0,i.kt)("h4",{id:"http"},"HTTP"),(0,i.kt)("p",null,"Communication over this protocol is supported both for an application server on port ",(0,i.kt)("inlineCode",{parentName:"p"},"7651"),", as well as a web server (if any) on the same port, that has a web client installed."),(0,i.kt)("p",null,"The URL format, depending on the method of ",(0,i.kt)("a",{parentName:"p",href:"#actiontype"},"action definition"),", looks as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXEC")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"http://server address:port/exec?action=<action name>"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"action")," parameter must always be specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"http://server address:port/eval?script=<code>"),". If the ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," parameter is not specified, it is assumed that the code is passed in the first BODY parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL ACTION")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"li"},"http://server address:port/eval/action?script=<action code>"),". If the ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," parameter is not specified, it is assumed that the code is passed in the first BODY parameter.")),(0,i.kt)("h5",{id:"url"},"Parameters"),(0,i.kt)("p",null,"Parameters can be passed both in the request string (by appending constructs like ",(0,i.kt)("inlineCode",{parentName:"p"},"&p=<parameter value>")," to the end of the string), as well as in the request body (BODY). It is assumed that URL parameters are substituted (in the order of their appearance in the request) for the executed action before BODY parameters."),(0,i.kt)("p",null,"When processing BODY parameters, parameters with the content type from the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table")," are considered files and are passed to the action parameters as objects of the file class (",(0,i.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PDFFILE"),", etc.). During this process, the corresponding file extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"application"),", the parameter is still considered a file, and the file extension is taken from the right part of the content type (for example, it will be ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"application/abc")," content type). Parameters with the ",(0,i.kt)("inlineCode",{parentName:"p"},"application/null")," content type are considered to be equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("p",null,"BODY parameters with types of content different from the ones mentioned above are considered strings and are automatically converted into parameter classes of the called action upon being called. Empty strings are converted into ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"Headers")," of an executed request are automatically saved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.headers[TEXT]")," property. The name of the header is written to the only parameter of this property, and the value of the header is written to the property's value."),(0,i.kt)("h5",{id:"httpresult"},"Results"),(0,i.kt)("p",null,"Properties whose values must be returned as the result are passed in the request string by adding strings like ",(0,i.kt)("inlineCode",{parentName:"p"},"&return=<property name>")," to its end. It is assumed that the values of specified properties are returned in the order of their appearance in the request string. By default, if no result properties are specified, the resulting property is the first one with a non-",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," value from the following ",(0,i.kt)("a",{parentName:"p",href:"/Built-in_classes#export"},"list"),". "),(0,i.kt)("p",null,"If the result of a request is a file (",(0,i.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PDFFILE"),", etc.), the response ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"content type")," , depending on the file extension, is determined in accordance with the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),". If the file extension is not found in this table, the content type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/<file extension>"),"."),(0,i.kt)("p",null,"The file extension in this case is determined automatically, similarly to the ",(0,i.kt)("a",{parentName:"p",href:"/WRITE_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"),"."),(0,i.kt)("p",null,"In all of the three cases above, if the result value is ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," string (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"application/null"),") is substituted for the file extension in the content type, and an empty string is returned as the response itself."),(0,i.kt)("p",null,"Request results different from files are converted into strings and are passed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"text/plain")," content type. ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values are returned as empty strings."),(0,i.kt)("p",null,"The values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.headersTo[TEXT]")," property are automatically written to the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request result. So, the header name is read from the only parameter of this property, and the header value is read from the property value."),(0,i.kt)("h5",{id:"several-results--parameters-in-body"},"Several results / parameters in BODY"),(0,i.kt)("p",null,"If the type of request BODY is ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),", it will be split into parts, and each part will be considered a separate request parameter. In this case, the order of these parameters is equal to the order in corresponding parts of the request BODY."),(0,i.kt)("p",null,"At the same time, if the number of results being returned is more than one, then the following happens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the request has a ",(0,i.kt)("inlineCode",{parentName:"li"},"returnmultitype=bodyurl")," parameter, the response content type on transmission is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")," and the results are encoded as if they were ",(0,i.kt)("a",{parentName:"li",href:"#url"},"passed in the request string"),"."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, the response content type during transmission is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"multipart/mixed"),", and the results are passed as internal parts of this response. ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that the processing of parameters and request results is largely similar to their processing during ",(0,i.kt)("a",{parentName:"p",href:"/Access_to_an_external_system_EXTERNAL"},"access to an external system")," over the HTTP protocol (in this case, parameters are processed as results and vice versa, results are processed as parameters).")),(0,i.kt)("h5",{id:"stateful-api"},"Stateful API"),(0,i.kt)("p",null,"The API described above is a REST API. Accordingly, the ",(0,i.kt)("a",{parentName:"p",href:"/Change_sessions"},"change session")," is created when a call is initiated, and closes immediately after the call ends. However, there are situations where such behavior is undesirable, and you need to accumulate changes for a certain period of time (for example, while the user is inputting data), which means that the session must be saved and handed over between sessions. In order to do this, you can add a string of the following format to the end of the query string: ",(0,i.kt)("inlineCode",{parentName:"p"},"&session=<session ID>"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<session ID>")," is any non-empty string. In this case, the session will not be closed after the call, but will be associated with a previously passed ID, so that all subsequent calls with this ID will be executed in this session. In order to close a session (after the end of a call), you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"_close")," postfix (for example,",(0,i.kt)("inlineCode",{parentName:"p"},"&session=0_close"),") to its ID in the request string."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since cookie files are implicitly used for working with HTTP sessions, it is important not to forget to save / pass cookies between stateful http calls (this, however, is typically done automatically by a browser, the HttpClient in Java, etc.)")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The current implementation of the platform assumes that if sessions are used, the elements of the system (for example, local properties) created in the current call are deleted \u2014 that is, they are not visible in subsequent calls.")),(0,i.kt)("h5",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"When executing an http request, it is often necessary to identify the user on whose behalf the specified action will be executed. At the moment, two types of authentication are supported by the platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic identification")," - the user name and password are passed in an encoded form in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Basic <credentials>")," heading."),(0,i.kt)("li",{parentName:"ul"},"Token-based authentication consists of two stages:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"At the first stage, you need to execute the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authentication.getAuthToken[]")," action with basic authentication. The result of this action will be an authentication token with a fixed lifetime (one day ",(0,i.kt)("a",{parentName:"li",href:"/Working_parameters#authTokenExpiration"},"by default"),"). An example of a request:  ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost/exec?action=getAuthToken"),"."),(0,i.kt)("li",{parentName:"ul"},"The token you receive can be used for authentication during its lifetime by passing it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer <token>")," header (similarly to JWT which is used in the current implementation of the platform for generating authentication tokens).")))),(0,i.kt)("h2",{id:"form"},"Form API"),(0,i.kt)("p",null,"Apart from executing actions, the platform also supports an API (similar to JSON API) for working with ",(0,i.kt)("a",{parentName:"p",href:"/Forms"},"forms"),", or specifically, their ",(0,i.kt)("a",{parentName:"p",href:"/Interactive_view"},"interactive views"),". Since it's a stateful API designed for the asynchronous mode (which means that the HTTPS interface itself has a number of system parameters, such as a request index, index of the latest received response, etc.), it's easier to use this API with the help of special libraries for specific languages/platforms that you want to integrate with:"),(0,i.kt)("h3",{id:"protocols-1"},"Protocols"),(0,i.kt)("h4",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"The JavaScript library is available in the central npm-repository under the name  ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/~lsfusion"},"@lsfusion/core"),"."),(0,i.kt)("p",null,"The key concept in this API is the concept of ",(0,i.kt)("em",{parentName:"p"},"state"),". A state is a JS object with a structure corresponding to form elements in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Form_structure#objects"},"An object group")," corresponds to a JS object that is stored in the js field of the state object. The name of the field matches the name of the object group. Each JS object from the object group, in turn, stores an array of JS objects (with ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#filters"},"filters")," and ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#sort"},"orders")," taken into account) in the ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," field. The JS object of the object group corresponds to the ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#currentObject"},"current")," object collection. Also, each JS object of an array (including the JS object of the object group) in the ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," field stores the value of objects \u2013 only values if there is just one object in the object group or, if there are multiple objects, a JS object with fields whose names are equal to object names and values are equal to object values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Properties"},"Properties")," correspond to a value stored in a field (the name of the field is equal to the property name) of a JS object which is determined in the following way depending on the existence of parameters and ",(0,i.kt)("a",{parentName:"li",href:"/Interactive_view#property"},"its view"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A property has parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The property view is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"GRID")," of each JS object in the ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," array of the JS object of this property's ",(0,i.kt)("a",{parentName:"li",href:"/Form_structure#drawgroup"},"display group"),"."),(0,i.kt)("li",{parentName:"ul"},"The property's view is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"PANEL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR"),"  of the JS object of this property's display group"))),(0,i.kt)("li",{parentName:"ul"},"A property has no parameters - of a JS state object.")))),(0,i.kt)("p",null,"The task of the library is to automatically keep this state described above up to date, both during form creation and during its subsequent modification (this behavior is often called reactivity)."),(0,i.kt)("p",null,"The library exports the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create")," - creates a new form. Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setState")," - a state change request function. This function is supposed to take a single parameter \u2013 a state change function (which, in turn, has just one parameter, the previous state, and outputs the next state as the result) and as a result of execution add this function to the state change queue (or, for example, apply it right away depending on the implementation of the view logic). This state management logic is fully identical to the state management logic in React and, as a rule, if used inside a React component, the ",(0,i.kt)("inlineCode",{parentName:"li"},"setState")," parameter is passed as ",(0,i.kt)("inlineCode",{parentName:"li"},"updateState => this.setState(updateState)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl")," - the URL of the lsFusion web server - a string, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"'https://demo.lsfusion.org/hockeystats'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formData")," - an object describing the form. Must contain either a name field with the name of the form (for example ",(0,i.kt)("inlineCode",{parentName:"li"},'{name: "MainForm"}'),") or a script field with the form code (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},'script:"OBJECTS i = Invoice PROPERTIES (i) date, stock"'),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change")," - changes the form data. Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setState")," - a state change request function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changes")," - a JS object containing what exactly needs to be changed. The structure of a JS change object is the same as that of the JS state object, except that a JS object of an object group does not have/is not supposed to have a ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," field \u2013 that is, all changes are supposed to be made for current object collection. However, if necessary, the ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," can be set to a single-element array, which will mean that there is no need to change the current object, but property values should be changed for the specified, not the current object. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"change(setState, {game:{value:[30], hostGoals:40, guestGoals:30}})")," will change the number of goals to ",(0,i.kt)("inlineCode",{parentName:"li"},"40")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),", but not for the current game, but for one with an object id ",(0,i.kt)("inlineCode",{parentName:"li"},"30"),". You can also specify actions in a JS change object (there are no actions in JS state objects). The value of the corresponding field in this case can be arbitrary. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"change(setState, {game: {doSmthWithGame : true}})")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," - a JS object of the current state. Optional parameter. In order to ensure the best UX in the asynchronous mode, it is advised that the user change values only for the objects that he sees during the change and not when the change is processed (the state can change at this moment and so can current objects). Therefore, when calling this function, it is recommended to pass the state that was used to render the view in which the user initiated this change as the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentState")," parameter."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close")," - closes the form. Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setState")," - a state change request function."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formCreated")," - checks whether the form has been initialized (and, accordingly, whether the state has been filled). Returns a boolean value. Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," - a JS state object"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numberOfPendingRequests")," - show how many change requests are currently queued. Returns a long type value. Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," - a JS state object")))),(0,i.kt)("p",null,"As the names of object groups and properties, not names on the form are used, but ",(0,i.kt)("a",{parentName:"p",href:"/Structured_view#extid"},"export/import")," names (which, however, match the names on forms if not explicitly defined). While working with a form via Form API, actions created using operators for ",(0,i.kt)("a",{parentName:"p",href:"/Interactive_view#objectoperators"},"object operations")," ",(0,i.kt)("inlineCode",{parentName:"p"},"NEW")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," automatically get export/import names ",(0,i.kt)("inlineCode",{parentName:"p"},"NEW")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),", respectively (that is you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"change(setState, {game : {NEW:true}})")," for adding an object, for example). Also, when Form API is used, it automatically adds a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"logMessage")," to the form to which all dialog messages are written (including those generated when ",(0,i.kt)("a",{parentName:"p",href:"/Constraints"},"constraints")," were violated)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Authentication, stateful and form API are only supported when executing http requests on the web server. When an application server (or specifically, a built-in web server) executes an HTTP request, authentication headers, as well as parameters with the session ID, are ignored (the user is considered anonymous). Form API is completely unsupported by the built-in web server.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"action-api-python"},"Action API (Python)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport requests\nfrom requests_toolbelt.multipart import decoder\n\nlsfCode = ("run(INTEGER no, DATE date, FILE detail) {\\n"\n           "    NEW o = FOrder {\\n"\n           "        no(o) <- no;\\n"\n           "        date(o) <- date;\\n"\n           "        LOCAL detailId = INTEGER (INTEGER);\\n"\n           "        LOCAL detailQuantity = INTEGER (INTEGER);\\n"\n           "        IMPORT JSON FROM detail TO detailId, detailQuantity;\\n"\n           "        FOR imported(INTEGER i) DO {\\n"\n           "            NEW od = FOrderDetail {\\n"\n           "                id(od) <- detailId(i);\\n"\n           "                quantity(od) <- detailQuantity(i);\\n"\n           "                price(od) <- 5;\\n"\n           "                order(od) <- o;\\n"\n           "            }\\n"\n           "        }\\n"\n           "        APPLY;\\n"\n           "        EXPORT JSON FROM price = price(FOrderDetail od), id = id(od) WHERE order(od) == o;\\n"\n           "        EXPORT FROM orderPrice(o), exportFile();\\n"\n           "    }\\n"\n           "}")\n\norder_no = 354\norder_date = \'10.10.2017\'\norder_details = [dict(id=1, quantity=10),\n                 dict(id=2, quantity=15),\n                 dict(id=5, quantity=4),\n                 dict(id=10, quantity=18),\n                 dict(id=11, quantity=1),\n                 dict(id=12, quantity=3)]\n\norder_json = json.dumps(order_details)\n\nurl = \'http://localhost:7651/eval\'\npayload = {\'script\': lsfCode, \'no\': str(order_no), \'date\': order_date,\n           \'detail\': (\'order.json\', order_json, \'text/json\')}\n\nresponse = requests.post(url, files=payload)\nmultipart_data = decoder.MultipartDecoder.from_response(response)\n\nsum_part, json_part = multipart_data.parts\nsum = int(sum_part.text)\ndata = json.loads(json_part.text)\n\n##############################################################\n\nprint(sum)\nfor item in data:\n    print(\'{0:3}: price {1}\'.format(int(item[\'id\']), int(item[\'price\'])))\n\n##############################################################\n# 205\n#   4: price 5\n#  18: price 5\n#   3: price 5\n#   1: price 5\n#  10: price 5\n#  15: price 5\n')),(0,i.kt)("h3",{id:"form-api-javascript"},"Form API (JavaScript)"))}d.isMDXComponent=!0}}]);