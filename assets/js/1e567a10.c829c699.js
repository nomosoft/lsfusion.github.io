"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[31953],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||r;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63693:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var n=a(83117),i=(a(67294),a(3905));const r={title:"Tables"},l=void 0,o={unversionedId:"Tables",id:"version-v4/Tables",title:"Tables",description:"For storing and calculating values of the properties the lsFusion platform uses a relational database. All data properties, as well as all calculated properties marked as materialized, are stored in the fields of the tables in the database. For each table, there is a set of key fields with the names key0, key1, ..., keyN, where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row there is a property value for the objects with IDs from the key fields. Objects of built-in classes can also be used as table keys.",source:"@site/versioned_docs/version-v4/Tables.md",sourceDirName:".",slug:"/Tables",permalink:"/Tables",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Tables.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"Tables"},sidebar:"version-v4/learn",previous:{title:"Indexes",permalink:"/Indexes"},next:{title:"Management",permalink:"/Management"}},s={},p=[{value:"Property table determining",id:"property",level:3},{value:"Table naming",id:"table-naming",level:3},{value:"Field naming",id:"name",level:3},{value:"Default tables",id:"default-tables",level:3},{value:"Default indexes",id:"default-indexes",level:3},{value:"Full tables",id:"full",level:3},{value:"Storing belonging to the class",id:"storing-belonging-to-the-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For storing and calculating values of the ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"properties")," the ",(0,i.kt)("strong",{parentName:"p"},"lsFusion")," platform uses a relational database. All ",(0,i.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data properties"),", as well as all calculated ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"properties")," marked as ",(0,i.kt)("a",{parentName:"p",href:"/Materializations"},"materialized"),", are stored in the fields of the ",(0,i.kt)("em",{parentName:"p"},"tables")," in the database. For each table, there is a set of key fields with the names ",(0,i.kt)("inlineCode",{parentName:"p"},"key0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key1"),", ..., ",(0,i.kt)("inlineCode",{parentName:"p"},"keyN"),", where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row there is a property value for the objects with IDs from the key fields. Objects of ",(0,i.kt)("a",{parentName:"p",href:"/Built-in_classes"},"built-in classes")," can also be used as table keys."),(0,i.kt)("p",null,"When creating a table, you must specify a list of the object ",(0,i.kt)("a",{parentName:"p",href:"/Classes"},"classes")," which will be the keys in this table."),(0,i.kt)("h3",{id:"property"},"Property table determining"),(0,i.kt)("p",null,'For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (',(0,i.kt)("inlineCode",{parentName:"p"},"NODEFAULT"),") to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (",(0,i.kt)("inlineCode",{parentName:"p"},"TABLE"),"))."),(0,i.kt)("h3",{id:"table-naming"},"Table naming"),(0,i.kt)("p",null,"For each table created in the platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Naming policy"),(0,i.kt)("th",{parentName:"tr",align:null},"Field name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full with signature (default)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NameSpace_TableName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full without signature"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NameSpace_TableName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Short"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TableName"))))),(0,i.kt)("p",null,"The naming policy is defined using the ",(0,i.kt)("a",{parentName:"p",href:"/Launch_parameters#namingpolicy"},(0,i.kt)("inlineCode",{parentName:"a"},"db.namingPolicy"))," startup parameter."),(0,i.kt)("h3",{id:"name"},"Field naming"),(0,i.kt)("p",null,"The values of each property are always stored exactly in one field, which name, depending on the selected naming policy, is defined as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Naming policy"),(0,i.kt)("th",{parentName:"tr",align:null},"Field name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full with signature (default)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NameSpace_PropertyName_ClassName1_ClassName2_..,ClassNameN"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full without signature"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NameSpace_PropertyName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Short"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PropertyName"))))),(0,i.kt)("p",null,"If necessary, for each property, the developer can explicitly specify the name of the field in which this property will be stored. Also, it is possible to create a custom policy for naming property fields if the above does not suit for some reason."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using too short property naming policy (in case the number of materialized properties is large enough) can significantly complicate ",(0,i.kt)("a",{parentName:"p",href:"/Naming"},"naming")," these properties (keeping them unique), or, accordingly, lead to the case when you will need to explicitly name the fields in which these properties will be stored too often."))),(0,i.kt)("p",null,"The naming policy is defined using the ",(0,i.kt)("a",{parentName:"p",href:"/Launch_parameters#namingpolicy"},(0,i.kt)("inlineCode",{parentName:"a"},"db.namingPolicy"))," startup parameter."),(0,i.kt)("h3",{id:"default-tables"},"Default tables"),(0,i.kt)("p",null,"If the system cannot determine the table in which the property should be put, then a table with a name equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_<class ID 1 in the property signature>_<class ID 2 in the property signature>_...<class ID n in the property signature>")," is automatically created. For example, for a property with class arguments ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Item"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Country.Country"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGER"),", the table ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_DATE_Item_Item_Country_Country_INTEGER")," will be created. However, it is recommended to avoid situations when the default table is used and explicitly specify the tables in which properties will be stored."),(0,i.kt)("p",null,"Also, it is possible to create a custom policy for naming tables in the platform if the basic policy does not suit for some reason."),(0,i.kt)("h3",{id:"default-indexes"},"Default indexes"),(0,i.kt)("p",null,"By default, a unique ",(0,i.kt)("a",{parentName:"p",href:"/Indexes"},"index")," is built for each table by its key fields ",(0,i.kt)("inlineCode",{parentName:"p"},"key0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key1"),", ..., ",(0,i.kt)("inlineCode",{parentName:"p"},"keyN")," named as ",(0,i.kt)("inlineCode",{parentName:"p"},"pk_<table ID>")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is the number of key fields in the table minus ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". Also indexes on key fields ",(0,i.kt)("inlineCode",{parentName:"p"},"keyK"),", ..., ",(0,i.kt)("inlineCode",{parentName:"p"},"keyN")," with names like ",(0,i.kt)("inlineCode",{parentName:"p"},"<table ID>_keyK _..._ keyN_idx")," are automatically added for all ",(0,i.kt)("inlineCode",{parentName:"p"},"K")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"."),(0,i.kt)("h3",{id:"full"},"Full tables"),(0,i.kt)("p",null,"Let's say that the table is ",(0,i.kt)("em",{parentName:"p"},"full")," if for each of its keys it contains all existing in the system objects of this key class. In general, the fullness of a table is specified explicitly using the special option (",(0,i.kt)("inlineCode",{parentName:"p"},"FULL"),") and is implemented via an implicit creation of a materialized ",(0,i.kt)("a",{parentName:"p",href:"/Classification_IS_AS"},"classification")," property (we will call it the ",(0,i.kt)("em",{parentName:"p"},"fullness")," property). However, in some cases, the platform may not create this property if it determines that the table already has properties which guarantee that it contains all the necessary objects (for example, the property of belonging to the class)."),(0,i.kt)("p",null,"By default, the fullness property is named ",(0,i.kt)("inlineCode",{parentName:"p"},"_FULL_TableName"),". Also, when defining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),(0,i.kt)("p",null,"It is worth noting that the fullness of the table is important only from the execution optimization perspective (for example, the server knows that a certain table has all objects of the required class, and instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"LEFT JOIN")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"INNER JOIN"),", which may be critical in some cases), and just as the table mechanism itself, it does not affect the logic of the system."),(0,i.kt)("h3",{id:"storing-belonging-to-the-class"},"Storing belonging to the class"),(0,i.kt)("p",null,"Belonging to the class is basic data similar to ",(0,i.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data")," properties. Thus, like data properties, this belonging is stored in the field of a certain table. At the same time, this table is determined similar to the table for the other materialized properties (assuming that the belonging to the class is a property with one parameter of this class), with the only difference being that at first only full tables are processed (i.e., they have higher priority), and only if no full tables are found, the remaining (not full) tables are processed."),(0,i.kt)("p",null,"If a certain table for each of its keys stores the belonging to the class of all descendants of the class of this key, firstly it is automatically marked as full (even if it was not specified explicitly), and secondly, the fullness property is not created for it (it is assumed that the role of this property is fulfilled by the property of belonging to the class itself)."),(0,i.kt)("p",null,"By default, the property of belonging to the class is named ",(0,i.kt)("inlineCode",{parentName:"p"},"_CLASS_TableName"),". Also, when determining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To create tables, use the ",(0,i.kt)("a",{parentName:"p",href:"/TABLE_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"TABLE")," statement"),". To specify the table which should store the property, use the ",(0,i.kt)("a",{parentName:"p",href:"/Property_options"},(0,i.kt)("inlineCode",{parentName:"a"},"TABLE")," option")," in the property options."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n")))}h.isMDXComponent=!0}}]);