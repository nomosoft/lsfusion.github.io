(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11720],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90933:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Write file (WRITE)"},l={unversionedId:"Write_file_WRITE",id:"version-v4/Write_file_WRITE",isDocsHomePage:!1,title:"Write file (WRITE)",description:"The write file operator creates an action which reads a file from the value of some property and saves it to the defined source.",source:"@site/versioned_docs/version-v4/Write_file_WRITE.md",sourceDirName:".",slug:"/Write_file_WRITE",permalink:"/Write_file_WRITE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Write_file_WRITE.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Write file (WRITE)"},sidebar:"version-v4/learn",previous:{title:"Read file (READ)",permalink:"/Read_file_READ"},next:{title:"Data import (IMPORT)",permalink:"/Data_import_IMPORT"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"write file")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," which reads a file from the value of some property and saves it to the defined source."),(0,o.kt)("p",null,"The source is set as a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," whose values are instances of ",(0,o.kt)("a",{parentName:"p",href:"/Built-in_classes"},"string classes"),". The following types of data sources (URLs) are supported: ",(0,o.kt)("strong",{parentName:"p"},"FILE"),", ",(0,o.kt)("strong",{parentName:"p"},"FTP"),", ",(0,o.kt)("strong",{parentName:"p"},"SFTP")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that writes a file, use the ",(0,o.kt)("a",{parentName:"p",href:"/WRITE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n")))}c.isMDXComponent=!0}}]);