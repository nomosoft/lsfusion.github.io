(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[18512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},985:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return p}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Literals"},o={unversionedId:"Literals",id:"version-v4/Literals",isDocsHomePage:!1,title:"Literals",description:"|Name|Example|Class|Description|Constraints|",source:"@site/versioned_docs/version-v4/Literals.md",sourceDirName:".",slug:"/Literals",permalink:"/Literals",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Literals.md",version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"Literals"},sidebar:"version-v4/learn",previous:{title:"IDs",permalink:"/IDs"},next:{title:"Statements",permalink:"/Statements"}},d=[],s={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"strliteral"}),"String literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'text'"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"'line1\\nline2'"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"'{system.cancel}'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"STRING[N]"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"TEXT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ITEXT")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of characters enclosed in single quotes, allowing to use the special sequences ",(0,l.kt)("inlineCode",{parentName:"td"},"\\n"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"\\r"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"\\t"),". To specify single quote and backslash characters, use the escape sequences ",(0,l.kt)("inlineCode",{parentName:"td"},"\\'")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"\\\\"),". A string literal can also be a ",(0,l.kt)("a",{parentName:"td",href:"/Internationalization"},"localizable")," string. In this case the literal's class will be ",(0,l.kt)("inlineCode",{parentName:"td"},"TEXT"),", and instead of the characters ",(0,l.kt)("inlineCode",{parentName:"td"},"{")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"}")," it is necessary to use the special sequences ",(0,l.kt)("inlineCode",{parentName:"td"},"\\{")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"\\}")," respectively. If a string literal does not use localization capabilities, then the literal's class will be ",(0,l.kt)("inlineCode",{parentName:"td"},"STRING[N]")," where N is the number of characters in the string."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"intliteral"}),"Integer literal (int)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"56"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-32"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"1000000000")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning"),(0,l.kt)("td",{parentName:"tr",align:null},"32-bit signed integers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"longliteral"}),"Integer literal (long)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"56L"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-32L"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"1000000000000L")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LONG")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning and the letter ",(0,l.kt)("inlineCode",{parentName:"td"},"L")," (uppercase or lowercase) at the end"),(0,l.kt)("td",{parentName:"tr",align:null},"64-bit signed integers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"doubleliteral"}),"Floating-point literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"4.25D"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-2.125D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty), then the letter ",(0,l.kt)("inlineCode",{parentName:"td"},"D")," (uppercase or lowercase). With an optional minus sign at the beginning."),(0,l.kt)("td",{parentName:"tr",align:null},"64-bit floating point number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"numericliteral"}),(0,l.kt)("inlineCode",{parentName:"td"},"NUMERIC")," class literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"4.25"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"-2.125")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NUMERIC[N,M]")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty). With an optional minus sign at the beginning."),(0,l.kt)("td",{parentName:"tr",align:null},"The number of digits of the integer and fractional parts of a literal is determined by its class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"booleanliteral"}),"Logical literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,l.kt)("td",{parentName:"tr",align:null},"Keyword ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},"The opposite value is the special value ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"dateliteral"}),(0,l.kt)("inlineCode",{parentName:"td"},"DATE")," class literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1982_07_13"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"2000_01_25")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATE")),(0,l.kt)("td",{parentName:"tr",align:null},"Date in the format ",(0,l.kt)("inlineCode",{parentName:"td"},"YYYY_MM_DD"),". Four digits specifying the year, an underscore, two digits for the month, an underscore, and two digits for the day."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"timeliteral"}),(0,l.kt)("inlineCode",{parentName:"td"},"TIME")," class literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"12:05"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"00:59")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TIME")),(0,l.kt)("td",{parentName:"tr",align:null},"Time in the format ",(0,l.kt)("inlineCode",{parentName:"td"},"HH:mm"),". Two digits for the hours, a colon and two digits for the minutes."),(0,l.kt)("td",{parentName:"tr",align:null},"Hours from 0 to 23, minutes from 0 to 59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"datetimeliteral"}),(0,l.kt)("inlineCode",{parentName:"td"},"DATETIME")," class literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1982_07_13_12:05")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,l.kt)("td",{parentName:"tr",align:null},"Date and time in the format ",(0,l.kt)("inlineCode",{parentName:"td"},"YYYY_MM_DD_HH:mm")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{className:"lsdoc-anchor",id:"colorliteral"}),(0,l.kt)("inlineCode",{parentName:"td"},"COLOR")," class literal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB(255, 0, 204)"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"#FF00CC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"COLOR")),(0,l.kt)("td",{parentName:"tr",align:null},"Two definition forms. The first is the keyword ",(0,l.kt)("inlineCode",{parentName:"td"},"RGB"),", then comma-separated values for the red, green, and blue components in parentheses. The second is the pound sign, then the values of the red, blue, and green components in hexadecimal format, using two characters per component."),(0,l.kt)("td",{parentName:"tr",align:null},"Each number is from 0 to 255. In hexadecimal representation, you can use both uppercase and lowercase characters")))))}p.isMDXComponent=!0}}]);