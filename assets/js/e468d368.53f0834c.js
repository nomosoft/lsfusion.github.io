(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1203],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return N}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),N=i,k=m["".concat(u,".").concat(N)]||m[N]||c[N]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58321:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"Instructions",sidebar_label:"Overview"},l={unversionedId:"Instructions",id:"version-v4/Instructions",isDocsHomePage:!1,title:"Instructions",description:"The code of any module in lsFusion consists of a sequence of instructions.",source:"@site/versioned_docs/version-v4/Instructions.md",sourceDirName:".",slug:"/Instructions",permalink:"/Instructions",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Instructions.md",version:"v4",lastUpdatedAt:1619001833,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"Overview",frontMatter:{title:"Instructions",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Literals",permalink:"/Literals"},next:{title:"Module header",permalink:"/Module_header"}},u=[],s={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The code of any ",(0,a.kt)("a",{parentName:"p",href:"/Modules"},"module")," in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/Language"},"lsFusion"))," consists of a sequence of ",(0,a.kt)("em",{parentName:"p"},"instructions. ")),(0,a.kt)("p",null,"Instructions are of the following kinds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Module_header"},"The special ",(0,a.kt)("inlineCode",{parentName:"a"},"MODULE"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"REQUIRE"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"PRIORITY")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"NAMESPACE")," instructions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Instruction_="},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"=")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ACTION_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"ACTION")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GROUP_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"GROUP")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ON_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"ON")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/WHEN_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"WHEN")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Instruction_-_WHEN"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"<-WHEN")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/CONSTRAINT_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"CONSTRAINT")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Instruction=_"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"=>")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/CLASS_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"CLASS")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/FORM_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"FORM")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/DESIGN_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"DESIGN")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/NAVIGATOR_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"NAVIGATOR")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/WINDOW_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"WINDOW")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/EXTEND_CLASS_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"EXTEND CLASS")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/EXTEND_FORM_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"EXTEND FORM")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Instruction_+="},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"+=")," instruction")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ACTION+_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"ACTION+")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/META_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"META")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Instruction_"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"@")," Instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/TABLE_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"TABLE")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/INDEX_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"INDEX")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/BEFORE_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"BEFORE")," instruction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AFTER_instruction"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"AFTER")," instruction")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"LOGGABLE")," instruction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Empty_instruction"},"Empty instruction"))),(0,a.kt)("p",null,"Each instruction in ",(0,a.kt)("strong",{parentName:"p"},"lsFusion")," ends with a semicolon, with two exceptions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An instruction followed by a closing brace ",(0,a.kt)("inlineCode",{parentName:"li"},"}")),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"META")," instruction")))}p.isMDXComponent=!0}}]);