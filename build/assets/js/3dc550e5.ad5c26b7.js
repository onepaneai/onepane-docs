"use strict";(self.webpackChunkonepane_docs=self.webpackChunkonepane_docs||[]).push([[657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},o="Connect pixie",l={unversionedId:"connectors/Pixie connector/pixie_connector",id:"connectors/Pixie connector/pixie_connector",title:"Connect pixie",description:"Pixie is a cutting-edge observability platform designed to provide real-time insights into the performance and behavior of Kubernetes applications and microservices. Like its folklore namesake, Pixie grants an almost magical ability to uncover hidden insights and troubleshoot issues that may otherwise remain elusive within the vast and dynamic world of containerized applications.",source:"@site/docs/connectors/Pixie connector/pixie_connector.md",sourceDirName:"connectors/Pixie connector",slug:"/connectors/Pixie connector/pixie_connector",permalink:"/onepane-docs/build/docs/connectors/Pixie connector/pixie_connector",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/connectors/Pixie connector/pixie_connector.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"onepaneSidebar",previous:{title:"Pixie prerequisites",permalink:"/onepane-docs/build/docs/connectors/Pixie connector/pixie_prerequisites"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"Step 1: Get Kubernetes prerequisites ready",id:"step-1-get-kubernetes-prerequisites-ready",level:4},{value:"Step 2: Install pixie in a kuberentes cluster",id:"step-2-install-pixie-in-a-kuberentes-cluster",level:4},{value:"Step 3: Get cluster ID from cluster",id:"step-3-get-cluster-id-from-cluster",level:4},{value:"Step 4: Get Deployment key from cluster",id:"step-4-get-deployment-key-from-cluster",level:4},{value:"Step 5: Get Pixie cloud address",id:"step-5-get-pixie-cloud-address",level:4},{value:"Step 11: Store Application Information Securely",id:"step-11-store-application-information-securely",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-pixie"},"Connect pixie"),(0,r.kt)("p",null,"Pixie is a cutting-edge observability platform designed to provide real-time insights into the performance and behavior of Kubernetes applications and microservices. Like its folklore namesake, Pixie grants an almost magical ability to uncover hidden insights and troubleshoot issues that may otherwise remain elusive within the vast and dynamic world of containerized applications."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"With Pixie, developers and operators gain the power to peer into the heart of their Kubernetes clusters, unveiling the interactions between services, the flow of data, and the behavior of applications in real time. This tool empowers them to swiftly identify performance bottlenecks, troubleshoot errors, and optimize resource allocation, ensuring that their Kubernetes ecosystem runs harmoniously and efficiently."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The process of integrating azure services in onepane requires the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting pixie api key from cluster"),(0,r.kt)("li",{parentName:"ul"},"Getting pixie cluster id from cluster"),(0,r.kt)("li",{parentName:"ul"},"Get the stated keys and place it in onepane")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"here's a step-by-step guide on how to create an API key and Ingest license for getting newrelic datas into onepane. We are assuming that you are having a healthy kubernetes cluster."),(0,r.kt)("h4",{id:"step-1-get-kubernetes-prerequisites-ready"},"Step 1: Get Kubernetes prerequisites ready"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},"Set the cluster in your current context")),(0,r.kt)("h4",{id:"step-2-install-pixie-in-a-kuberentes-cluster"},"Step 2: Install pixie in a kuberentes cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your web browser and navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.px.dev/installing-pixie/install-guides/community-cloud-for-pixie/"},"Pixie installation guide "),"."),(0,r.kt)("li",{parentName:"ol"},"Install pixie in the cluster by following the instructions")),(0,r.kt)("h4",{id:"step-3-get-cluster-id-from-cluster"},"Step 3: Get cluster ID from cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"pl")," namespace exists")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the kubectl command for getting the secret"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret/pl-cluster-secrets -n pl -o yaml\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"pixie cluster",src:n(9047).Z,width:"2786",height:"540"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the value for cluster-id and do a base64 decode using the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo <cluster-id> | base64 --decode\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store it in a safe place"))),(0,r.kt)("h4",{id:"step-4-get-deployment-key-from-cluster"},"Step 4: Get Deployment key from cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"pl")," namespace exists")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the kubectl command for getting the secret"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret/pl-deploy-secrets -n pl -o yaml\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"pixie cluster",src:n(79).Z,width:"2012",height:"460"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the value for deploy-key and do a base64 decode using the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo <deploy-key> | base64 --decode\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store it in a safe place"))),(0,r.kt)("h4",{id:"step-5-get-pixie-cloud-address"},"Step 5: Get Pixie cloud address"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"pl")," namespace exists")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the kubectl command for getting the configmap"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get configmap/pl-cloud-config  -n pl -o yaml\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"pixie cluster",src:n(9197).Z,width:"1690",height:"494"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the value for PL_CLOUD_ADDR. Ensure that onepane can access the given address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store it in a safe place"))),(0,r.kt)("h4",{id:"step-11-store-application-information-securely"},"Step 11: Store Application Information Securely"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Keep the keys, including the cluster id, in a secure location. These details will be used to authenticate and authorize your application to access pixie resources by onepane.")),(0,r.kt)("p",null,"That's it! You've successfully created an API key with the necessary permissions for integrating with pixie resources and incident alerts."))}d.isMDXComponent=!0},9047:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/px_1-b52f25b8a44756413a1fc36176538264.png"},79:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/px_2-612f1108758f47ec48e73a3f98de6a04.png"},9197:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/px_3-73936cd328fb8235d3496c494dac593c.png"}}]);