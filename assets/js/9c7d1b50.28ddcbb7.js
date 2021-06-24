(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[30459],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},463:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"How-to: Form extension"},c={unversionedId:"How-to_Form_extension",id:"How-to_Form_extension",isDocsHomePage:!1,title:"How-to: Form extension",description:"Let's assume there is a module that describes the Sku form that is used to edit SKU values:",source:"@site/docs/How-to_Form_extension.md",sourceDirName:".",slug:"/How-to_Form_extension",permalink:"/next/How-to_Form_extension",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Form_extension.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: Form extension"},sidebar:"learn",previous:{title:"How-to: Action extension",permalink:"/next/How-to_Action_extension"},next:{title:"How-to: Integration",permalink:"/next/How-to_Integration"}},s=[],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's assume there is a module that describes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sku")," form that is used to edit SKU values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Sku;\n\nCLASS Sku; // declaring class Sku\n\nname 'Name' = DATA BPSTRING[100] (Sku); // creating a name property for it\n\nFORM sku 'Sku' // creating the Item form\n    OBJECTS s = Sku PANEL // adding a product object and making it display exactly one copy\n    PROPERTIES(s) name // adding the product name property to the form\n\n    EDIT Sku OBJECT s;\n;\n\nDESIGN sku {\n    NEW skuDetails AFTER BOX(s) { // creating a new container in a standard container right after i.box\n                                  // this container will be the tab panel, where tabs with product properties can be added\n        type = TABBED;\n        fill = 1; // let it expand to the whole form\n    }\n}\n")),(0,a.kt)("p",null,"We need to implement additional functionality for adding multiple barcodes to an SKU. This can be done by creating a new module that will introduce a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Barcode")," class and extend the functionality of the Sku edit form by adding the possibility to enter barcodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Barcode;\n\nREQUIRE Sku;\n\nCLASS Barcode; // declaring a barcode class\n\nid = DATA BPSTRING[13] (Barcode); // creating a property with a barcode number\nsku = DATA Sku (Barcode); // creating a barcode link to sku\n\nEXTEND FORM sku // creating the Item form\n    OBJECTS b = Barcode // adding the barcode object\n    PROPERTIES(b) id // adding the barcode number to the barcode table\n    PROPERTIES(b) NEW, DELETE // adding actions to create and delete barcodes\n    FILTERS sku(b) == s // making that only barcodes of this sku are displayed\n;\n\nDESIGN sku { // expanding the design of the Item form\n    skuDetails {\n        MOVE BOX(b); // making a container, which contains everything related to barcodes, by a tab in the previously created tab panel\n    }\n}\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Barcode")," module assumes that there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sku")," form with an ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," object and a container called ",(0,a.kt)("inlineCode",{parentName:"p"},"skuDetails"),". If the form changes for some reason, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Barcode")," module will become inoperable."))}u.isMDXComponent=!0}}]);