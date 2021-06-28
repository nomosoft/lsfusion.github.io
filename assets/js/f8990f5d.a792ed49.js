(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64799],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6882:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Event block"},l=void 0,c={unversionedId:"Event_block",id:"Event_block",isDocsHomePage:!1,title:"Event block",description:"The event block of the  FORM statement - a set of constructions controlling events in an interactive form view.",source:"@site/docs/Event_block.md",sourceDirName:".",slug:"/Event_block",permalink:"/next/Event_block",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Event_block.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Event block"},sidebar:"learn",previous:{title:"Filters and sortings block",permalink:"/next/Filters_and_sortings_block"},next:{title:"DESIGN statement",permalink:"/next/DESIGN_statement"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The event block of the  ",(0,i.kt)("a",{parentName:"p",href:"/next/FORM_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"FORM")," statement")," - a set of constructions controlling ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_events"},"events")," in an interactive form view."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EVENTS formEventDecl1, ..., formEventDeclN\n")),(0,i.kt)("p",null,"Where each ",(0,i.kt)("inlineCode",{parentName:"p"},"formEventDecli")," has the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The event block allows to define handlers for ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_events"},"form events")," that occur as the result of certain user actions. Each block can have an arbitrary number of comma-separated event handlers. If several handlers are defined for an event, they are guaranteed to be executed in the order they are defined. "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventType")),(0,i.kt)("p",{parentName:"li"},"  Type of form event. It is specified with one of the following keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INIT")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OK BEFORE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OK AFTER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY BEFORE")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY AFTER")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CANCEL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLOSE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DROP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE objName")," \u2013 specifies that the action will be executed when the object ",(0,i.kt)("inlineCode",{parentName:"li"},"objName")," is changed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUERYOK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUERYCANCEL")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventActionId")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the action"),", that will be the event handler.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramK")),(0,i.kt)("p",{parentName:"li"},"  List of action parameters. Each parameter is specified with the object name on the form. The object name, in turn, is specified with a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"simple ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        ON OK { posted(i) <- TRUE; }, // specifying that when the user clicks OK, an action should be executed that will execute actions to \"conduction\" this invoice\n        ON DROP showImpossibleMessage() // by clicking the formDrop button, showing a message that this cannot be, since this button by default will be shown only in the form for choosing an invoice, and this form is basically an invoice edit form\n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n//    ... declaring the behavior of the form\n\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\nEXTEND FORM POS // adding a property through the form extension so that SEEK could be applied to the already created object on the form\n    EVENTS\n        ON INIT createReceipt() // when opening the form, executing the action to create a new receipt, which fills in the shift, cashier and other information\n;\n")))}m.isMDXComponent=!0}}]);