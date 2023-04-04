"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3676:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2},s="Prerequisites",l={unversionedId:"prerequistes",id:"prerequistes",isDocsHomePage:!1,title:"Prerequisites",description:"Azure subscription account",source:"@site/docs/prerequistes.md",sourceDirName:".",slug:"/prerequistes",permalink:"/1hr-rai-dashboard-workshop/docs/prerequistes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/prerequistes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1hr-rai-dashboard-workshop/docs/welcome"},next:{title:"Find errors using Tree map",permalink:"/1hr-rai-dashboard-workshop/docs/find-treemap-errors"}},i=[{value:"Azure subscription account",id:"azure-subscription-account",children:[]},{value:"Setup your cloud resources",id:"setup-your-cloud-resources",children:[{value:"Azure Login",id:"azure-login",children:[]},{value:"Create Resource Group and Azure ML workspace",id:"create-resource-group-and-azure-ml-workspace",children:[]},{value:"Run jobs for training the model and creating the RAI dashboard",id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard",children:[]}]}],c={toc:i},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h2",{id:"azure-subscription-account"},"Azure subscription account"),(0,o.kt)("p",null,"In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code.  You'll need to complete the azure pass redemption process for setting up your account before you can start the steps below."),(0,o.kt)("h2",{id:"setup-your-cloud-resources"},"Setup your cloud resources"),(0,o.kt)("p",null,"We'll be using Azure Cloud Shell to create your Azure Machine Learning workspace; as well as run the jobs to train and register your model. And finally, create the Responsible AI dashboard that you'll be using in this workshop.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To start, log into the ",(0,o.kt)("a",{parentName:"p",href:"http://portal.azure.com/"},"Azure portal")," with your account subscription.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Subscriptions" icon, to access your ',(0,o.kt)("strong",{parentName:"p"},"subscription ID"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription icon",src:r(6382).Z,title:"Azure subscription icon"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'On the "Subscriptions" page, copy the "subscription Id" and store it to use later.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription id",src:r(8734).Z,title:"Azure subscription id"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Select the "Azure Cloud Shell" icon.  ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell icon",src:r(3396).Z,title:"Azure Cloud Shell icon"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'A command terminal will open at the bottom of the page.  Select the "Bash" option.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:r(8054).Z,title:"Cloud Shell bash"}),"\t"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'A Cloud Shell needs to create a storage account and mount a file system for you.  Under the "Subscription" drop-down menu, select your subscription.  Then, click on the "Create storage" button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:r(8729).Z,title:"Cloud Shell bash"}),"\t"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"This should open a Cloud Shell command line terminal.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell terminal",src:r(4900).Z,title:"Azure Cloud Shell terminal"}),"\t"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In Azure Cloud Shell command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Change to the project directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd RAI-Diabetes-Hospital-Readmission-classification\n")),(0,o.kt)("h3",{id:"azure-login"},"Azure Login"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"At the terminal command prompt, enter the following Azure CLI command to log into your Azure account. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az login --use-device-code\n")),(0,o.kt)("p",null,"Then, open the link provided and enter the access code from the Cloud Shell message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Login URL",src:r(5485).Z,title:"Device Login URL"}),"\t"),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'This will open a new browser window.  Enter the access code and click on the "Next" button.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Pick the account you used to setup the Azure subscription which shows the name and email your used. Then, click on the "Continue" button to sign into the Microsoft Azure CLI.  After you have successfully signed in, closed the browser window tab.  Return back to the Azure portal tab.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have successfully logged in, set your account to your subscription.  Use the ",(0,o.kt)("strong",{parentName:"p"},"subscription Id")," that you copied earlier."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az account set -s <enter-your-subscription-id-here>\n")),(0,o.kt)("h3",{id:"create-resource-group-and-azure-ml-workspace"},"Create Resource Group and Azure ML workspace"),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Create an Azure resource group.  For location, enter ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westus")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westus2")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"eastus"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westeurope")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create --name <resource-group-name> --location <location>\n")),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Create an Azure Machine Learning workspace using the resource group name you created.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml workspace create -n <workspace-name> -g <resource-group-name>\n")),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Set your environment default to the resource group and Azure ML workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"\n')),(0,o.kt)("h3",{id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard"},"Run jobs for training the model and creating the RAI dashboard"),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"To expedite the steps needed to provision the Azure Machine Learning resources for this workshop, run the setup bash script below to create the following:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"train and test datasets"),(0,o.kt)("li",{parentName:"ul"},"compute instance"),(0,o.kt)("li",{parentName:"ul"},"training job pipeline"),(0,o.kt)("li",{parentName:"ul"},"model registration"),(0,o.kt)("li",{parentName:"ul"},"RAI dashboard pipeline")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bash cloud/setup.sh\n")),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To monitor the pipeline job for creating the RAI dashboard, log into ",(0,o.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"Azure Machine Learning studio"),".  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on your Azure ML workspace name.  Then, click on the ",(0,o.kt)("strong",{parentName:"p"},"Pipelines")," tab to get the job status."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure ML Job status",src:r(9016).Z,title:"Azure ML job status page"}),"\t"),(0,o.kt)("ol",{start:20},(0,o.kt)("li",{parentName:"ol"},'To view the progression of the pipeline job creating the RAI dashboard, click on the job "Display name". ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard pipeline",src:r(4783).Z,title:"RAI dashboard pipeline"}),"\t"),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Models")," tab on the left-hand navigation.  Then click on the name of the model to open the details page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lastly, click on the ",(0,o.kt)("em",{parentName:"p"},'"Responsible AI"'),' tab to view the RAI dashboard.  Then, click on the "Name" to view the dashboard.'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard tab",src:r(494).Z,title:"RAI dashboard tab"}),"\t"),(0,o.kt)("ol",{start:23},(0,o.kt)("li",{parentName:"ol"},"Terrific...you're ready to start using the dashboard!  ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard",src:r(8857).Z,title:"RAI dashboard"}),"\t"),(0,o.kt)("ol",{start:24},(0,o.kt)("li",{parentName:"ol"},'Click on the "Next" button below to proceed to the ',(0,o.kt)("em",{parentName:"li"},"Error Analysis")," lab.")))}p.isMDXComponent=!0},3396:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure-cloud-shell-3fd4ef22c2037cdb5e3fa87714a5a05a.png"},8734:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure-subscriptions-copy-975a8defcfeadf8482aff19fd99c5d58.png"},6382:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure-subscriptions-c7ace6ac3d0c0059ead6d4ed452e87aa.png"},9016:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azureml_jobs_page-a1f6a2de5d57fc4c9c85f2f15165cdb9.png"},8054:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-shell-bash-0ccfafbeaf7318d9b37ea44862851b56.png"},8729:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-shell-create-storage-9de13991e6f96cc1335e956bf6c02f0a.png"},4900:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-shell-terminal-32a8fab51b18c4d35a6585c9ea235bb7.png"},5485:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/device-login-url-7259a2a4c8cb9ec364b039fa8f34abc3.png"},494:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rai-dashboard-tab-561f9c43b60eb2311a9e5c17e63430ad.png"},8857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rai-dashboard-2ab5b747896bc4ec09259adbd586e24d.png"},4783:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rai_dashboard_pipeline-879d80eeee762e5c53465d91accba4c1.png"}}]);