"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[25919],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"How-to: Registers"},l=void 0,c={unversionedId:"How-to_Registers",id:"version-v4/How-to_Registers",title:"How-to: Registers",description:"Accumulation ledger",source:"@site/versioned_docs/version-v4/How-to_Registers.md",sourceDirName:".",slug:"/How-to_Registers",permalink:"/How-to_Registers",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Registers.md",tags:[],version:"v4",lastUpdatedAt:1619790850,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"How-to: Registers"},sidebar:"version-v4/learn",previous:{title:"How-to: Working with documents",permalink:"/How-to_Working_with_documents"},next:{title:"How-to: Numbering",permalink:"/How-to_Numbering"}},d=[{value:"Accumulation ledger",id:"accumulation-ledger",children:[],level:3},{value:"Information ledger",id:"information-ledger",children:[],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"accumulation-ledger"},"Accumulation ledger"),(0,i.kt)("p",null,"Let's assume we need to implement the logic for calculating the SKU balances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Utils;\n\nCLASS SKU 'SKU';\nCLASS Stock 'Warehouse';\n")),(0,i.kt)("p",null,"Theoretically we could just create a ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"property")," that would sum up all incomings and subtract all outgoings, with all operations set explicitly. The weakness of this approach is that whenever a new operation is added, it needs to be added to the formula for calculating the balance. In addition, it will be difficult to build a form with a list of all the operations that can affect the balance for a specific SKU and warehouse. ",(0,i.kt)("a",{parentName:"p",href:"/Modularity"},"Modularity")," will also be violated, because the module in which the balance property is declared will depend on all modules containing operations that affect it."),(0,i.kt)("p",null,"To give the system efficient ",(0,i.kt)("a",{parentName:"p",href:"/Extensions"},"extensibility"),", it is best to implement this kind of functionality using ",(0,i.kt)("em",{parentName:"p"},"ledgers"),". To do this, we introduce an abstract class ",(0,i.kt)("inlineCode",{parentName:"p"},"SKULedger"),". One instance of the class will reflect a single change in the balance by a given amount (positive or negative) for one SKU in one warehouse. Abstract properties are set for it, which need to be defined when the class is implemented."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All ledgers can have an arbitrary number and type of measurements. In this example they are the SKU and the Warehouse."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT SKULedger 'Register of changes in the product balance';\n\nposted 'Completed' = ABSTRACT BOOLEAN (SKULedger);\ndateTime 'Date/time' = ABSTRACT DATETIME (SKULedger);\n\nsku 'SKU' = ABSTRACT SKU (SKULedger);\nstock 'Warehouse' = ABSTRACT Stock (SKULedger);\n\nquantity 'Qty' = ABSTRACT NUMERIC[14,2] (SKULedger);\n\nbalance 'Balance' = GROUP SUM quantity(SKULedger l) IF posted(l) BY stock(l), sku(l);\n\nbalance 'Balance as of date/time' = GROUP SUM quantity(SKULedger l) IF posted(l) AND dateTime(l) <= DATETIME dt BY stock(l), sku(l), dateTime(l);\n")),(0,i.kt)("p",null,"The current balance and the balance for a certain time period are calculated only from the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SKULedger")," class without reference to specific operations. This code can and must be declared in a separate module. Modules containing specific operations will use and extend this class."),(0,i.kt)("p",null,"For example, let's look at one operation: ",(0,i.kt)("em",{parentName:"p"},"Stock receipt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt 'Warehouse arrival';\nposted 'Completed' = DATA BOOLEAN (Receipt);\ndateTime 'Date/time' = DATA DATETIME (Receipt);\n\nstock 'Warehouse' = DATA Stock (Receipt);\n\nCLASS ReceiptDetail 'Warehouse arrival line';\nreceipt 'Arrival' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n\nsku 'SKU' = DATA SKU (ReceiptDetail);\n\nquantity 'Qty' = DATA NUMERIC[14,2] (ReceiptDetail);\nprice 'Price' = DATA NUMERIC[14,2] (ReceiptDetail);\n")),(0,i.kt)("p",null,'To "post" it into the ledger, we need to ',(0,i.kt)("a",{parentName:"p",href:"/Class_extension"},"extend the class")," ",(0,i.kt)("inlineCode",{parentName:"p"},"SKULedger")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReceiptDetail")," class for stock receipt. We also need to ",(0,i.kt)("a",{parentName:"p",href:"/Property_extension"},"extend the properties")," of the ledger."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS ReceiptDetail : SKULedger;\n\n// [SKULedger] must be specified, since ReceiptDetail also inherits PriceLedger in the same example and the platform needs to know which property needs to be implemented\nposted[SKULedger](ReceiptDetail d) += posted(receipt(d));\ndateTime[SKULedger](ReceiptDetail d) += dateTime(receipt(d));\n\nstock[SKULedger](ReceiptDetail d) += stock(receipt(d));\n\nsku[SKULedger](ReceiptDetail d) += sku(d);\nquantity[SKULedger](ReceiptDetail d) += quantity(d);\n")),(0,i.kt)("p",null,"Let's look at a more complex case, when we have a document recording transfer from one warehouse to another."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Transfer 'Moving from warehouse to warehouse';\nposted 'Completed' = DATA BOOLEAN (Transfer);\ndateTime 'Date/time' = DATA DATETIME (Transfer);\n\nfromStock 'Warehouse (from)' = DATA Stock (Transfer);\ntoStock 'Warehouse (to)' = DATA Stock (Transfer);\n\nCLASS TransferDetail 'Warehouse shipment line';\ntransfer 'Arrival' = DATA Transfer (TransferDetail) NONULL DELETE;\n\nsku 'SKU' = DATA SKU (TransferDetail);\n\nquantity 'Qty' = DATA NUMERIC[14,2] (TransferDetail);\nprice 'Price' = DATA NUMERIC[14,2] (TransferDetail);\n")),(0,i.kt)("p",null,'In this case, the data from the document must be "posted" into the ledger twice. By analogy with stock receipt, we will post the line into the ledger as an outgoing operation with a negative value.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS TransferDetail : SKULedger;\n\nposted(TransferDetail d) += posted(transfer(d));\ndateTime(TransferDetail d) += dateTime(transfer(d));\n\nstock(TransferDetail d) += fromStock(transfer(d));\n\nsku(TransferDetail d) += sku(d);\nquantity(TransferDetail d) += -quantity(d);\n")),(0,i.kt)("p",null,"To post it into the ledger for the warehouse where the SKUs are being transferred to, we use object ",(0,i.kt)("a",{parentName:"p",href:"/Aggregations"},"aggregation"),'. The line in the transfer document will generate an object, which in turn will be "posted" into the ledger.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS TransferSKULedger 'Moving to warehouse (register)' : SKULedger;\ntransferSKULedger = AGGR TransferSKULedger WHERE posted(TransferDetail transferDetail);\n\nposted(TransferSKULedger d) += d IS TransferSKULedger;\ndateTime(TransferSKULedger d) += dateTime(transfer(transferDetail(d)));\n\nstock(TransferSKULedger d) += toStock(transfer(transferDetail(d)));\n\nsku(TransferSKULedger d) += sku(transferDetail(d));\nquantity(TransferSKULedger d) += quantity(transferDetail(d));\n")),(0,i.kt)("p",null,"The ledger object will only be created when the transfer document has been posted. Therefore, in this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"posted")," property will always equal ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),"."),(0,i.kt)("p",null,"It should be noted that documents with one warehouse can also be posted into the ledger using aggregation. The aggregation scheme is more flexible but requires the creation of additional objects in the system, which may be worse from a performance perspective."),(0,i.kt)("h3",{id:"information-ledger"},"Information ledger"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"information ledger")," technique makes it possible to implement the logic of changing a certain indicator over time in a flexible way. Unlike the inventory ledger, it calculates not the sum of an indicator but its latest value over a certain period of time."),(0,i.kt)("p",null,"To implement this technique we introduce an abstract class ",(0,i.kt)("inlineCode",{parentName:"p"},"PriceLedger"),". Its instance reflects a single price change for one SKU and one warehouse at a certain time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT PriceLedger 'Receipt price change register';\n\nposted 'Completed' = ABSTRACT BOOLEAN (PriceLedger);\ndateTime 'Date/time' = ABSTRACT DATETIME (PriceLedger);\n\nsku 'SKU' = ABSTRACT SKU (PriceLedger);\nstock 'Warehouse' = ABSTRACT Stock (PriceLedger);\n\nprice 'Price' = ABSTRACT NUMERIC[14,2] (PriceLedger);\n\nprice 'Price' (Stock stock, SKU sku, DATETIME dateTime) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l) AND dateTime(l) <= dateTime\n          BY stock(l), sku(l);\n\nprice 'Price' (Stock stock, SKU sku) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l)\n          BY stock(l), sku(l);\n\nprice 'Price' (SKU sku, DATETIME dateTime) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l) AND dateTime(l) <= dateTime\n          BY sku(l);\n")),(0,i.kt)("p",null,"As a result, we get properties giving the price by SKU and warehouse for the date/time, the latest price, and also the latest price for that SKU for all warehouses."),(0,i.kt)("p",null,"Documents are posted into the information ledger the same way they are posted into the inventory ledger."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS ReceiptDetail : PriceLedger;\n\n// [PriceLedger] must be specified, since ReceiptDetail also inherits SKULedger in the same example and the platform needs to know which property to implement\nposted[PriceLedger](ReceiptDetail d) += posted(receipt(d));\ndateTime[PriceLedger](ReceiptDetail d) += dateTime(receipt(d));\n\nstock[PriceLedger](ReceiptDetail d) += stock(receipt(d));\n\nsku[PriceLedger](ReceiptDetail d) += sku(d);\nprice[PriceLedger](ReceiptDetail d) += price(d);\n")),(0,i.kt)("p",null,"In this case the signature of the abstract property needs to be specified explicitly, because there can be several of them with the same name and namespace (properties are named in just the same way for class ",(0,i.kt)("inlineCode",{parentName:"p"},"SKULedger"),")."))}u.isMDXComponent=!0}}]);