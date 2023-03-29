"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[838],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(o),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return o?r.createElement(f,c(c({ref:t},p),{},{components:o})):r.createElement(f,c({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=o[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8382:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:7,slug:"/stop-compute"},c="Shutdown",i={unversionedId:"shutdown-compute",id:"shutdown-compute",isDocsHomePage:!1,title:"Shutdown",description:"Be sure to shutdown the compute instance at the end of this workshop so you do not run out of credits.",source:"@site/docs/shutdown-compute.md",sourceDirName:".",slug:"/stop-compute",permalink:"/1hr-rai-dashboard-workshop/docs/stop-compute",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/shutdown-compute.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/stop-compute"},sidebar:"tutorialSidebar",previous:{title:"Local Feature Importance",permalink:"/1hr-rai-dashboard-workshop/docs/view-individual-feature-importance"}},s=[],u={toc:s},p="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shutdown"},"Shutdown"),(0,n.kt)("p",null,"Be sure to shutdown the compute instance at the end of this workshop so you do not run out of credits."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To shutdown the compute instance, click on the Compute icon on the left-hand side of the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/MBAzureMLStudio"},"Azure ML studio"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Azure ML studio",src:o(3396).Z,title:"Azure ML studio"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},'Under "Compute Instance", select the "cluster-cpu" instance.  Then, click on the "Stop" button.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stop compute",src:o(6226).Z,title:"Stop compute"})))}l.isMDXComponent=!0},3396:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/azure-cloud-shell-3fd4ef22c2037cdb5e3fa87714a5a05a.png"},6226:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/stop-compute-ec7f1da9cc96923e713ab89a2ca0fbe3.png"}}]);