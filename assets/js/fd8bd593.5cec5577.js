"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[34731],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"Value request (REQUEST)"},l=void 0,p={unversionedId:"Value_request_REQUEST",id:"version-v4/Value_request_REQUEST",title:"Value request (REQUEST)",description:"The value request operator creates an action in which requesting value(s) is separated from directly processing the value(s). Accordingly, this operator allows not to perform a value request if its result is known in advance in the context of the call (the value of the System.requestPushed property is equal to TRUE). This, in turn, automatically gives you the following capabilities in various use cases:",source:"@site/versioned_docs/version-v4/Value_request_REQUEST.md",sourceDirName:".",slug:"/Value_request_REQUEST",permalink:"/Value_request_REQUEST",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Value_request_REQUEST.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"Value request (REQUEST)"},sidebar:"version-v4/learn",previous:{title:"Primitive input (INPUT)",permalink:"/Primitive_input_INPUT"},next:{title:"Object group operators",permalink:"/Object_group_operators"}},u=[{value:"Implicit use",id:"implicit",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"value request")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"action")," in which ",(0,i.kt)("em",{parentName:"p"},"requesting")," value(s) is separated from directly ",(0,i.kt)("em",{parentName:"p"},"processing")," the value(s). Accordingly, this operator allows not to perform a value request if its result ",(0,i.kt)("em",{parentName:"p"},"is known in advance")," in the context of the call (the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.requestPushed")," property is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),"). This, in turn, automatically gives you the following capabilities in various use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asynchronous input"),(0,i.kt)("p",{parentName:"li"},"  If the user initiates a ",(0,i.kt)("a",{parentName:"p",href:"/Form_events"},"property")," ",(0,i.kt)("a",{parentName:"p",href:"/Form_events"},"change event")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE"),"), and processing it contains exactly one request for the value of a builtin class (the most common case), then the platform does not call it immediately, but first asks the user to input the value of the builtin class. As soon as this input is completed, the user can immediately continue his work and the input result asynchronously (in a new thread) is sent to the server, where the processing of the occurred event is started only at that moment (and not when the event actually occurred). Moreover (we call this technique ",(0,i.kt)("em",{parentName:"p"},"pushing")," the query value), the query result is marked as known in advance (the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.requestPushed")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),"), and the input value is written to the special property family: ",(0,i.kt)("inlineCode",{parentName:"p"},"requested"),". Accordingly, since this property family is used as the default result of all ",(0,i.kt)("a",{parentName:"p",href:"/Value_input"},"value input")," operators, synchronous processing is emulated; however, the ergonomics of changing data on the form is significantly improved (for example, the user can continue to input data without waiting for the calculation of all properties on the form).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PASTE"),(0,i.kt)("p",{parentName:"li"},"  When the user inserts a value into a property cell using the OS tools, the platform triggers a WYSIWYG event to change this property (",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGEWYS"),"), and calls the corresponding handler on the server. In this case, the value that the user inserted is pushed as the request value."))),(0,i.kt)("a",{className:"lsdoc-anchor",id:"defaultChange"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change event (",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGEWYS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE"),") ",(0,i.kt)("a",{parentName:"p",href:"/Form_events#default"},"default handler")," for composition"),(0,i.kt)("p",{parentName:"li"},"  If a property being changed is created using the ",(0,i.kt)("a",{parentName:"p",href:"/Composition_JOIN"},"composition")," operator with one argument (most often a name or ID), and change event handler is not explicitly defined for it, the platform automatically creates this handler as follows: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CHANGE"),(0,i.kt)("p",{parentName:"li"},"  The user is ",(0,i.kt)("a",{parentName:"p",href:"/Form_events#queryValue"},"requested")," an object of the property value class which is used as an argument, and this property value changes to the received object ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CHANGEWYS"),(0,i.kt)("p",{parentName:"li"},"  The user is requested for an object of the class of the value of the edited property, after which the platform finds the first object which composition property value is equal to the value input by the user and then changes the value of the property used as an argument to this object."))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  In both cases, a property change means calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")," event handler, while the value to which the property changes is pushed as the request value."))),(0,i.kt)("p",{parentName:"li"},'  Creating such default handlers allows to use PASTE "out of the box" for properties whose values belong not only to built-in but also to custom classes.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group change (",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPCHANGE"),") default handler"),(0,i.kt)("p",{parentName:"li"},"  By default, group change handler is created as follows: ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")," is called first for objects' ",(0,i.kt)("a",{parentName:"p",href:"/Form_structure#currentObject"},"current values"),", then if the input has not been canceled, the same handler is called for all other values of objects (matching the filter), with the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.requestPushed")," property set to ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE")," (it is assumed that the result of the input does not change during its handling, thus the behavior is emulated as if the first value was pushed)."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In fact, the value request operator performs only two operations: it ",(0,i.kt)("a",{parentName:"p",href:"/Branching_CASE_IF_MULTI"},"checks")," ",(0,i.kt)("inlineCode",{parentName:"p"},"System.requestPushed")," (pushing the value) for the value request action and ",(0,i.kt)("inlineCode",{parentName:"p"},"System.requestCanceled")," (canceling the value) for the request processing action, and it is also responsible for determining the possibility of asynchronous input of the property being changed. At the same time, using this operator makes the code clearer and more readable, therefore it is recommended to use it (instead of explicit checks and options)."))),(0,i.kt)("p",null,"As with other value input operators, it is possible to define ",(0,i.kt)("a",{parentName:"p",href:"/Value_input#result"},"main and alternative")," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled). Accordingly, it is these two actions in this operator that are responsible for processing request values."),(0,i.kt)("h3",{id:"implicit"},"Implicit use"),(0,i.kt)("p",null,"Note that all ",(0,i.kt)("a",{parentName:"p",href:"/Value_input"},"value input"),' operators can be automatically "wrapped" in the value request operator by using the corresponding option (',(0,i.kt)("inlineCode",{parentName:"p"},"DO"),"). And since, as a rule, a value is input using one input operator, it is recommended to use this option by default, and use the value request operator explicitly only in really complex cases, for example, if there can be several input options (depending on the condition, different forms, etc.)"),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"The syntax of the value request operator is described by the ",(0,i.kt)("a",{parentName:"p",href:"/REQUEST_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"REQUEST")," operator"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"\nrequestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n")))}h.isMDXComponent=!0}}]);