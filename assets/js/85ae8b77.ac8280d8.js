(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87018],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17779:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Activation (ACTIVATE)"},c={unversionedId:"Activation_ACTIVATE",id:"version-v4/Activation_ACTIVATE",isDocsHomePage:!1,title:"Activation (ACTIVATE)",description:"The activation operator creates an action that activates one of three form elements:",source:"@site/versioned_docs/version-v4/Activation_ACTIVATE.md",sourceDirName:".",slug:"/Activation_ACTIVATE",permalink:"/Activation_ACTIVATE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Activation_ACTIVATE.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Activation (ACTIVATE)"},sidebar:"version-v4/learn",previous:{title:"Focus operators",permalink:"/Focus_operators"},next:{title:"Activity (ACTIVE)",permalink:"/Activity_ACTIVE"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"activation")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that activates one of three form elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Property - sets the focus on the specified ",(0,o.kt)("a",{parentName:"li",href:"/Properties"},"property")," on the form."),(0,o.kt)("li",{parentName:"ul"},"Tab \u2014 selects one of the tabs in the specified ",(0,o.kt)("a",{parentName:"li",href:"/Form_design#containers"},"tab panel"),"."),(0,o.kt)("li",{parentName:"ul"},"Form - activates the specified ",(0,o.kt)("a",{parentName:"li",href:"/Forms"},"form"),", if open. If one form was opened several times, the one opened first is activated.")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create an action that activates a form element, use the ",(0,o.kt)("a",{parentName:"p",href:"/ACTIVATE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVATE")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM myForm 'My form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN myForm {\n    NEW tabbedPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\ntestAction()  {\n    ACTIVATE FORM myForm;\n    ACTIVATE TAB myForm.recent;\n}\n\nCLASS ReceiptDetail;\nbarcode = DATA STRING[30] (ReceiptDetail);\nquantity = DATA STRING[30] (ReceiptDetail);\n\nFORM POS\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) barcode, quantityGrid = quantity\n;\n\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\n    NEW d = ReceiptDetail {\n        barcode(d) <- barcode;\n        ACTIVATE PROPERTY POS.quantityGrid;\n    }\n}\n")))}s.isMDXComponent=!0}}]);