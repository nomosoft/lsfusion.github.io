"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[99882],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var a=n(83117),o=(n(67294),n(3905));const r={title:"Action extension"},i=void 0,s={unversionedId:"Action_extension",id:"version-v4/Action_extension",title:"Action extension",description:'The actions extension technique allows the developer to declare an abstract action in one module and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a branch operator, where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of classes or static objects) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a sequence operator.',source:"@site/versioned_docs/version-v4/Action_extension.md",sourceDirName:".",slug:"/Action_extension",permalink:"/Action_extension",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Action_extension.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Action extension"},sidebar:"version-v4/learn",previous:{title:"Property extension",permalink:"/Property_extension"},next:{title:"Form extension",permalink:"/Form_extension"}},c={},l=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"actions")," ",(0,o.kt)("a",{parentName:"p",href:"/Extensions"},"extension")," technique allows the developer to declare an abstract action in one ",(0,o.kt)("a",{parentName:"p",href:"/Modules"},"module"),' and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a ',(0,o.kt)("a",{parentName:"p",href:"/Branching_CASE_IF_MULTI"},"branch operator"),", where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"classes")," or ",(0,o.kt)("a",{parentName:"p",href:"/Static_objects"},"static objects"),") is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a ",(0,o.kt)("a",{parentName:"p",href:"/Sequence"},"sequence operator"),"."),(0,o.kt)("p",null,"For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are ",(0,o.kt)("a",{parentName:"p",href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"mutually exclusive"),")."),(0,o.kt)("p",null,"Actions extension allows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement the concept of action polymorphism by analogy with certain object-oriented programming languages."),(0,o.kt)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.')),(0,o.kt)("h3",{id:"poly"},"Polymorphic form"),(0,o.kt)("p",null,"As with a branching operator, for an abstract action there is a ",(0,o.kt)("em",{parentName:"p"},"polymorphic form"),", where it is possible not to define a condition explicitly, but to use as a condition matching the ",(0,o.kt)("a",{parentName:"p",href:"/Property_signature_CLASS"},"signature")," of the action that corresponds to this condition."),(0,o.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,o.kt)("p",null,"As for a branch operator, you can specify that all conditions of an abstract action must be ",(0,o.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,o.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action)."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"The key features that implement the extension technique are the ",(0,o.kt)("a",{parentName:"p",href:"/ABSTRACT_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"ABSTRACT")," operator"),", for declaring an abstract action, and the ",(0,o.kt)("a",{parentName:"p",href:"/ACTION+_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTION+")," statement"),", for adding an implementation to it."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"exportXls 'Export to Excel' ABSTRACT CASE (Order); // ABSTRACT CASE OVERRIDE LAST is created        \nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute' ABSTRACT (Task); // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill ABSTRACT LIST (OrderDetail, InvoiceDetail); // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Animal;\nwhoAmI  ABSTRACT ( Animal);\n\nCLASS Dog : Animal;\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\n\nCLASS Cat : Animal;\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\n\nask ()  {\n    FOR Animal a IS Animal DO\n        whoAmI(a); // a corresponding message will be shown for each object\n}\n\nonStarted  ABSTRACT LIST ( );\nonStarted () + {\n    name(Sku s) <- '1';\n}\nonStarted () + {\n    name(Sku s) <- '2';\n}\n// first, the 1st action is executed, then the 2nd action\n\nCLASS Human;\nname = DATA STRING[100] (Human);\n\ntestName  ABSTRACT CASE ( Human);\n\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n")))}d.isMDXComponent=!0}}]);