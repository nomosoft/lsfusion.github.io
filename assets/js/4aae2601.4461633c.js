"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"How-to: INTERNAL"},s=void 0,c={unversionedId:"How-to_INTERNAL",id:"version-v4/How-to_INTERNAL",title:"How-to: INTERNAL",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_INTERNAL.md",sourceDirName:".",slug:"/How-to_INTERNAL",permalink:"/How-to_INTERNAL",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_INTERNAL.md",tags:[],version:"v4",lastUpdatedAt:1619790850,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"How-to: INTERNAL"},sidebar:"version-v4/learn",previous:{title:"How-to: FORMULA",permalink:"/How-to_FORMULA"},next:{title:"Overview",permalink:"/How-to_Use_Cases"}},p=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[{value:"GetIP.java",id:"getipjava",children:[],level:4}],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[{value:"CalculateGCD.java",id:"calculategcdjava",children:[],level:4}],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution-2",children:[{value:"CalculateGCDObject.java",id:"calculategcdobjectjava",children:[],level:4}],level:3}],level:2},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[],level:3},{value:"Solution",id:"solution-3",children:[{value:"Beep.java",id:"beepjava",children:[],level:4},{value:"ClientBeep.java",id:"clientbeepjava",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"We need to implement an action that will display a message with the server's name and IP address."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"ip = DATA LOCAL TEXT();\ngetIPJava INTERNAL 'GetIP';\nshowIPJava 'Show computer name (Java)' {\n    getIPJava();\n    MESSAGE ip();\n}\n\nFORM info 'Information'\n    PROPERTIES() showIPJava\n;\n\nNAVIGATOR {\n    NEW info;\n}\n")),(0,r.kt)("p",null,"To solve the task, create an action using the ",(0,r.kt)("a",{parentName:"p",href:"/INTERNAL_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"INTERNAL")," operator")," which will generate an object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetIP"),' class (if the class has a package, then you must also specify "package" in the class name) and will call the ',(0,r.kt)("inlineCode",{parentName:"p"},"executeInternal")," method. The source code for this class will be as follows:"),(0,r.kt)("h4",{id:"getipjava"},"GetIP.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport java.sql.SQLException;\n\npublic class GetIP extends InternalAction {\n\n    public GetIP(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            findProperty("ip").change(InetAddress.getLocalHost().toString(), context);\n        } catch (UnknownHostException | ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),(0,r.kt)("p",null,"First, the action reads the server parameters using the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"InetAddress")," class. Then it finds the local property ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," declared in the same module as an action and writes the resulting value to it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"change")," method."),(0,r.kt)("p",null,"There is also an alternative way to set this property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"getIPFusion INTERNAL <{ findProperty(\"ip\").change((Object)java.net.InetAddress.getLocalHost().toString(), context); }>;\nshowIPFusion 'Show computer name (Fusion)' {\n    getIPFusion();\n    MESSAGE ip();\n}\n\nEXTEND FORM info\n    PROPERTIES() showIPFusion\n;\n")),(0,r.kt)("p",null,"The platform will generate the target class, insert the specified code into it and then compile it using the Janino ",(0,r.kt)("a",{parentName:"p",href:"https://janino-compiler.github.io/janino/"},"compiler"),". The advantage of this approach is that building the project does not require a dedicated step for compiling the Java code. However, the approach has a number of significant limitations and can be used only in the simplest cases."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("h3",{id:"task-1"},"Task"),(0,r.kt)("p",null,"We need to implement an action that calculates the maximum common divisor of the two integers."),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"gcd = DATA LOCAL INTEGER();\ncalculateGCD 'Calculate GCD' INTERNAL 'CalculateGCD' (INTEGER, INTEGER);\n\nFORM gcd 'GCD'\n    OBJECTS (a = INTEGER, b = INTEGER) PANEL\n    PROPERTIES 'A' = VALUE(a), 'B' = VALUE(b)\n\n    PROPERTIES gcd(), calculateGCD(a, b)\n;\n\nNAVIGATOR {\n    NEW gcd;\n}\n")),(0,r.kt)("p",null,"The key difference from the previous example is that the action has two ",(0,r.kt)("inlineCode",{parentName:"p"},"INTEGER")," arguments. Keep this in mind when writing your own ",(0,r.kt)("inlineCode",{parentName:"p"},"CalculateGCD")," class. Here is the source code:"),(0,r.kt)("h4",{id:"calculategcdjava"},"CalculateGCD.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCD extends InternalAction {\n\n    public CalculateGCD(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        BigInteger b1 = BigInteger.valueOf((Integer)getParam(0, context));\n        BigInteger b2 = BigInteger.valueOf((Integer)getParam(1, context));\n        BigInteger gcd = b1.gcd(b2);\n        try {\n            findProperty("gcd[]").change(gcd.intValue(), context);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Values of input properties are read using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getParam")," method, in which the first parameter passed is a 0-based index of the property to be read. This method returns an object of class ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", so explicit type casting is required."),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("h3",{id:"task-2"},"Task"),(0,r.kt)("p",null,"We need to implement an action that calculates the greatest common divisor of two integers, but they are specified as properties for an object."),(0,r.kt)("h3",{id:"solution-2"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Calculation;\na = DATA INTEGER (Calculation);\nb = DATA INTEGER (Calculation);\ngcd = DATA INTEGER (Calculation);\ncalculateGCD 'Calculate GCD' INTERNAL 'CalculateGCDObject' (Calculation);\n\nEXTEND FORM gcd\n    OBJECTS c = Calculation\n    PROPERTIES(c) a, b, gcd, calculateGCD GRID, NEW, DELETE\n;\n")),(0,r.kt)("p",null,"In this example we first need to read the values of the properties for the passed object, and then to write the result to a property with one input. This is done as follows:"),(0,r.kt)("h4",{id:"calculategcdobjectjava"},"CalculateGCDObject.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.data.value.DataObject;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCDObject extends InternalAction {\n\n    public CalculateGCDObject(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            DataObject calculation = (DataObject)getParamValue(0, context);\n            BigInteger a = BigInteger.valueOf((Integer)findProperty("a").read(context, calculation));\n            BigInteger b = BigInteger.valueOf((Integer)findProperty("b").read(context, calculation));\n            BigInteger gcd = a.gcd(b);\n            findProperty("gcd[Calculation]").change(gcd.intValue(), context, calculation);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The object that is passed is first written to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"calculation"),". This is done using the special ",(0,r.kt)("inlineCode",{parentName:"p"},"getParamValue")," method, which returns an object of class ",(0,r.kt)("inlineCode",{parentName:"p"},"DataObject"),". This stores the object's ID and class. It will then be used to read and write properties, by passing it as the last parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"change")," methods. If the property took several objects as input, every of them would need to be passed as the last parameter."),(0,r.kt)("p",null,"The full canonical name of the property is used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"findProperty")," method, because several ",(0,r.kt)("inlineCode",{parentName:"p"},"gcd")," properties are declared in the module. If you only specify the name, then a corresponding error will be issued saying it is impossible to determine the required property."),(0,r.kt)("h2",{id:"example-4"},"Example 4"),(0,r.kt)("h3",{id:"task-3"},"Task"),(0,r.kt)("p",null,"We need to implement an action that will generate a sound signal 5 times on the client machine."),(0,r.kt)("h3",{id:"solution-3"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"beep INTERNAL 'Beep';\nFORM beep 'Signal'\n    PROPERTIES() beep\n;\n\nNAVIGATOR {\n    NEW beep;\n}\n")),(0,r.kt)("p",null,"The Java code for an action created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERNAL")," operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"InternalAction"),". For this purpose there is a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"requestUserInteraction"),", which must be passed a class that inherits from class ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientAction"),"."),(0,r.kt)("h4",{id:"beepjava"},"Beep.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n")),(0,r.kt)("p",null,"The system halts code execution when this method is called, then passes ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientBeep")," (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," method. Source code of class ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientBeep"),":"),(0,r.kt)("h4",{id:"clientbeepjava"},"ClientBeep.java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n')),(0,r.kt)("p",null,"The object returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," method is returned to the server as the result of executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestUserInteraction")," method. In this example, the message ",(0,r.kt)("inlineCode",{parentName:"p"},"succeed")," will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server."),(0,r.kt)("p",null,"Since java code cannot be executed directly in the browser, this action will only work with a desktop client."))}d.isMDXComponent=!0}}]);