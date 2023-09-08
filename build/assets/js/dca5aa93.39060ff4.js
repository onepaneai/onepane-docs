"use strict";(self.webpackChunkonepane_docs=self.webpackChunkonepane_docs||[]).push([[892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Connect newrelic",l={unversionedId:"connectors/Newrelic connector/newrelic_connector",id:"connectors/Newrelic connector/newrelic_connector",title:"Connect newrelic",description:"New Relic helps you understand the intricacies of your software in action. By collecting and analyzing data across your applications, infrastructure, and customer interactions, New Relic transforms complex metrics into actionable insights. These insights empower your teams to identify performance bottlenecks, optimize resource utilization, and enhance the overall user experience.",source:"@site/docs/connectors/Newrelic connector/newrelic_connector.md",sourceDirName:"connectors/Newrelic connector",slug:"/connectors/Newrelic connector/newrelic_connector",permalink:"/onepane-docs/build/docs/connectors/Newrelic connector/newrelic_connector",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/connectors/Newrelic connector/newrelic_connector.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"onepaneSidebar",previous:{title:"Newrelic prerequisites",permalink:"/onepane-docs/build/docs/connectors/Newrelic connector/newrelic_prerequisites"},next:{title:"Pixie prerequisites",permalink:"/onepane-docs/build/docs/connectors/Pixie connector/pixie_prerequisites"}},c={},s=[{value:"Features",id:"features",level:2},{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"Step 1: Sign in to the Newrelic Portal",id:"step-1-sign-in-to-the-newrelic-portal",level:4},{value:"Step 2: Navigate to the API keys section",id:"step-2-navigate-to-the-api-keys-section",level:4},{value:"Step 3: Create a API key",id:"step-3-create-a-api-key",level:4},{value:"Step 5: Copy the API key",id:"step-5-copy-the-api-key",level:4},{value:"Step 6: Create a Ingest license",id:"step-6-create-a-ingest-license",level:4},{value:"Step 7: Retrieve Newrelic Details",id:"step-7-retrieve-newrelic-details",level:4},{value:"Step 11: Store Application Information Securely",id:"step-11-store-application-information-securely",level:4}],p={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-newrelic"},"Connect newrelic"),(0,i.kt)("p",null,"New Relic helps you understand the intricacies of your software in action. By collecting and analyzing data across your applications, infrastructure, and customer interactions, New Relic transforms complex metrics into actionable insights. These insights empower your teams to identify performance bottlenecks, optimize resource utilization, and enhance the overall user experience."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"New Relic provides a unified platform for observability, offering visibility into application performance, infrastructure health, user experience, and business metrics. This comprehensive approach helps teams gain a holistic understanding of their entire technology stack realtime."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The process of integrating azure services in onepane requires the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a API key for onepane in newrelic"),(0,i.kt)("li",{parentName:"ul"},"Create a Ingest license for onepane in newrelic"),(0,i.kt)("li",{parentName:"ul"},"Get the stated keys and place it in onepane")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("p",null,"here's a step-by-step guide on how to create an API key and Ingest license for getting newrelic datas into onepane."),(0,i.kt)("h4",{id:"step-1-sign-in-to-the-newrelic-portal"},"Step 1: Sign in to the Newrelic Portal"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your web browser and navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://one.newrelic.com/"},"Newrelic Portal"),"."),(0,i.kt)("li",{parentName:"ol"},"Sign in with your Newlrelic credentials.")),(0,i.kt)("h4",{id:"step-2-navigate-to-the-api-keys-section"},"Step 2: Navigate to the API keys section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the Newrelic Portal, click on "Profile" menu from the left sidebar.'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Newrelic overview",src:n(898).Z,width:"2880",height:"1632"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on API keys. This will open a window which list all api keys in system."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Newrelic api keys",src:n(4846).Z,width:"2370",height:"1634"})))),(0,i.kt)("h4",{id:"step-3-create-a-api-key"},"Step 3: Create a API key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the API keys section click on "Create key" button. '),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create api keys",src:n(9377).Z,width:"2196",height:"1628"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key type"),": Select user for keytype.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name"),": Provide a proper name for the key")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Notes (optional)"),": leave it empty")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on 'Create key'"))),(0,i.kt)("h4",{id:"step-5-copy-the-api-key"},"Step 5: Copy the API key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the api keys window search for you key")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the 3 dotes on the right side of the key"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Key click",src:n(8888).Z,width:"2372",height:"1630"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on 'Copy key'. And save it on a secure location"))),(0,i.kt)("h4",{id:"step-6-create-a-ingest-license"},"Step 6: Create a Ingest license"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the API keys section click on "Create key" button. '),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Create api keys",src:n(9377).Z,width:"2196",height:"1628"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key type"),": Select Ingest license for keytype.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Name"),": Provide a proper name for the key")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Notes (optional)"),": leave it empty")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on 'Create key'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repeat ",(0,i.kt)("strong",{parentName:"p"},"step 5")," for getting the key"))),(0,i.kt)("h4",{id:"step-7-retrieve-newrelic-details"},"Step 7: Retrieve Newrelic Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Goto current application's overview page, note down the following information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application (client) ID"),": click the user menu, and then go to: Administration > Access management > Accounts to see account IDs."),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{alt:"Application",src:n(7386).Z,width:"2468",height:"1628"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"API key"),": This is the key from step 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ingest license"),": This is the key from step 6"))))),(0,i.kt)("h4",{id:"step-11-store-application-information-securely"},"Step 11: Store Application Information Securely"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Keep the keys, including the ingest license, in a secure location. These details will be used to authenticate and authorize your application to access newrelic resources by onepane.")),(0,i.kt)("p",null,"That's it! You've successfully created an API key with the necessary permissions for integrating with Newrelic resources and incident alerts."))}k.isMDXComponent=!0},898:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nw_1-3ba09d27587805a6ecfaf0d8ecad4b9d.png"},4846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nw_2-ac8e7aeccf4cb1a5912ca9ff55f82742.png"},9377:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nw_3-92a033bf9724ae82085409b01855235c.png"},8888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nw_4-79fdc94988507bb5869c42bf14f1deb1.png"},7386:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nw_5-82a84ffc68aa9e47e890001718150718.png"}}]);