(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63720],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),N=m(n),k=i,u=N["".concat(p,".").concat(k)]||N[k]||d[k]||r;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},35812:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={title:"WINDOW statement"},o={unversionedId:"WINDOW_statement",id:"WINDOW_statement",isDocsHomePage:!1,title:"WINDOW statement",description:"The WINDOW statement creates a new window.",source:"@site/docs/WINDOW_statement.md",sourceDirName:".",slug:"/WINDOW_statement",permalink:"/next/WINDOW_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/WINDOW_statement.md",version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"WINDOW statement"},sidebar:"learn",previous:{title:"NAVIGATOR statement",permalink:"/next/NAVIGATOR_statement"},next:{title:"EXTEND CLASS statement",permalink:"/next/EXTEND_CLASS_statement"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW")," statement creates a new ",(0,r.kt)("a",{parentName:"p",href:"/next/Navigator_design"},"window"),"."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WINDOW name [caption] type [options]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," that go at the end of the statement has the following syntax (the syntax for each option is indicated on a separate line):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HIDETITLE \nHIDESCROLLBARS \nDRAWROOT \nVERTICAL | HORIZONTAL\nPOSITION(x, y, width, height)\nLEFT | RIGHT | TOP | BOTTOM\nHALIGN(alignType)\nVALING(alignType) \nTEXTHALIGN(alignType)\nTEXTVALIGN(alignType)\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW")," statement declares a new window and adds it to the current ",(0,r.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),". Options are listed one after another in arbitrary order, separated by spaces or line breaks. Depending on the selected window type \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PANEL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TREE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"MENU")," \u2013 a toolbar, panel, tree, or menu will be created."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",{parentName:"li"},"  Window name. ",(0,r.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". The name must be unique within the current ",(0,r.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespace"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"caption")),(0,r.kt)("p",{parentName:"li"},"  Window caption. ",(0,r.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". If caption is not specified, the caption of the window will be its name.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"type")),(0,r.kt)("p",{parentName:"li"},"  Type of window to create. Specified with one of the keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PANEL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TREE"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"MENU"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HIDETITLE")),(0,r.kt)("p",{parentName:"li"},"  Specifying that no caption should be displayed in the user interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HIDESCROLLBARS")),(0,r.kt)("p",{parentName:"li"},"  Specifying that no scrollbars should be displayed for this window.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DRAWROOT")),(0,r.kt)("p",{parentName:"li"},"  Specifying that the ",(0,r.kt)("a",{parentName:"p",href:"/next/Navigator"},"navigator elements")," whose descendants will be added to this window will also be added to it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VERTICAL")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"HORIZONTAL")),(0,r.kt)("p",{parentName:"li"},"  Specifying the vertical or horizontal orientation of the toolbar or panel being created. ",(0,r.kt)("inlineCode",{parentName:"p"},"VERTICAL")," is used by default. This option only makes sense for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PANEL")," windows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"POSITION (x, y, width, height)")),(0,r.kt)("p",{parentName:"li"},"  Specifying the size and location of the window. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"x")),(0,r.kt)("p",{parentName:"li"},"  The left window coordinate. ",(0,r.kt)("a",{parentName:"p",href:"/next/Literals#intliteral"},"Integer literal")," ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"y")),(0,r.kt)("p",{parentName:"li"},"  Top window coordinate. Integer literal ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"width")),(0,r.kt)("p",{parentName:"li"},"  Window width. Integer literal ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"height")),(0,r.kt)("p",{parentName:"li"},"  Window height. Integer literal ranging from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LEFT")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"RIGHT")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"BOTTOM")),(0,r.kt)("p",{parentName:"li"},"  Specifying a fixed location of the window on the desktop, which does not allow the user to change its position and size. Here the window size is automatically determined based on the preferred dimensions of the component. The window will be located to the left, right, top, and bottom of the desktop, respectively. This option only makes sense for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," windows and cannot be used simultaneously with the ",(0,r.kt)("inlineCode",{parentName:"p"},"POSITION")," option.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HALIGN(alignType)")),(0,r.kt)("p",{parentName:"li"},"  Specifying the horizontal alignment of the buttons in a vertical toolbar. This option only makes sense for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," windows with ",(0,r.kt)("inlineCode",{parentName:"p"},"VERTICAL")," orientation."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alignType")),(0,r.kt)("p",{parentName:"li"},"  Alignment type. This is specified using one of these keywords:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," - all buttons will have the same left coordinate. Used by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")," - all buttons will be centered along the X axis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")," - all buttons will have the same right coordinate."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TEXTHALIGN(alignType)")),(0,r.kt)("p",{parentName:"li"},"  Specifies the horizontal alignment of text on the buttons in a vertical toolbar. This option makes sense only for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," windows with ",(0,r.kt)("inlineCode",{parentName:"p"},"VERTICAL")," orientation. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alignType")),(0,r.kt)("p",{parentName:"li"},"  Alignment type. This is specified using one of these keywords:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," - the text will be located on the button on the left. Used by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")," \u2013 the text will be located in the center of the button."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")," - the text will be located on the button on the right."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VALIGN(alignType)")),(0,r.kt)("p",{parentName:"li"},"  Specifies the vertical alignment of the buttons in a horizontal toolbar. This option only makes sense for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," windows with ",(0,r.kt)("inlineCode",{parentName:"p"},"HORIZONTAL")," orientation. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alignType")),(0,r.kt)("p",{parentName:"li"},"  Alignment type. This is specified using one of these keywords:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," - all buttons will have the same upper coordinate. Used by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")," - all buttons will be centered along the Y axis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")," - all buttons will have the same lower coordinate."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TEXTVALIGN(alignType)")),(0,r.kt)("p",{parentName:"li"},"  Specifying the vertical alignment of text on the buttons in a horizontal toolbar. This option makes sense only for ",(0,r.kt)("inlineCode",{parentName:"p"},"TOOLBAR")," windows with ",(0,r.kt)("inlineCode",{parentName:"p"},"HORIZONTAL")," orientation. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"alignType")),(0,r.kt)("p",{parentName:"li"},"  Alignment type. This is specified using one of these keywords:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START")," - the text will be located at the top of the button."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CENTER")," - the text will be located in the center of the button. Used by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END")," - the text will be located at the bottom of the button.  ")))))))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"// creating system windows in the System module\nWINDOW root 'Root' TOOLBAR HIDETITLE HIDESCROLLBARS HORIZONTAL POSITION(0, 0, 100, 6);\nWINDOW toolbar 'Toolbar' TOOLBAR HIDETITLE VERTICAL POSITION(0, 6, 20, 64);\nWINDOW tree 'Tree' TOOLBAR HIDETITLE POSITION(0, 6, 20, 64);\n\n// menu without scrollbars under the root window\nWINDOW menu MENU HIDESCROLLBARS DRAWROOT POSITION(20, 6, 80, 4);\n\n// a horizontal toolbar at the bottom of the desktop, in which all buttons will be centered and text will be aligned up\n// in this toolbar, for example, it is possible to place forms for quick opening\nWINDOW hotforms TOOLBAR HORIZONTAL VALIGN(CENTER) TEXTVALIGN(START) BOTTOM;\n")))}s.isMDXComponent=!0}}]);