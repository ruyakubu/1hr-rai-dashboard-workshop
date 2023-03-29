"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3676:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:2},l="Prerequisites",i={unversionedId:"prerequistes",id:"prerequistes",isDocsHomePage:!1,title:"Prerequisites",description:"Azure subscription account",source:"@site/docs/prerequistes.md",sourceDirName:".",slug:"/prerequistes",permalink:"/1hr-rai-dashboard-workshop/docs/prerequistes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/prerequistes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1hr-rai-dashboard-workshop/docs/welcome"},next:{title:"Find errors using Tree map",permalink:"/1hr-rai-dashboard-workshop/docs/find-treemap-errors"}},s=[{value:"Azure subscription account",id:"azure-subscription-account",children:[]},{value:"Setup your cloud resources",id:"setup-your-cloud-resources",children:[{value:"Azure Login",id:"azure-login",children:[]},{value:"Create Resource Group and Azure ML workspace",id:"create-resource-group-and-azure-ml-workspace",children:[]},{value:"Run jobs for training the model and creating the RAI dashboard",id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard",children:[]}]}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h2",{id:"azure-subscription-account"},"Azure subscription account"),(0,o.kt)("p",null,"In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code.  You'll need to successfully complete the azure pass redemption process for setting up your account before you can start the steps below."),(0,o.kt)("h2",{id:"setup-your-cloud-resources"},"Setup your cloud resources"),(0,o.kt)("p",null,"We'll be using Azure Cloud Shell to create your Azure Machine Learning workspace; as well as running the jobs to train and register your model. And finally, create the Responsible AI dashboard that you'll be using in this workshop.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To start, log into the ",(0,o.kt)("a",{parentName:"p",href:"http://portal.azure.com/"},"Azure portal")," with your account subscription.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Subscriptions" icon, to access your ',(0,o.kt)("strong",{parentName:"p"},"subscription ID"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription icon",src:a(6382).Z,title:"Azure subscription icon"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'On the "Subscriptions" page, copy the "subscription Id" and store it to use later.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure subscription id",src:a(8734).Z,title:"Azure subscription id"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Select the "Azure Cloud Shell" icon.  ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell icon",src:a(3396).Z,title:"Azure Cloud Shell icon"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'A command terminal will open at the bottom of the page.  Select the "Bash" option.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:a(8054).Z,title:"Cloud Shell bash"}),"\t"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'A Cloud Shell needs to create a storage account and mount a file system for you.  Under the "Subscription" drop-down menu, select your subscription.  Then, click on the "Create storage" button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Shell bash",src:a(8729).Z,title:"Cloud Shell bash"}),"\t"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"This should open a Cloud Shell command line terminal.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Cloud Shell terminal",src:a(4900).Z,title:"Azure Cloud Shell terminal"}),"\t"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In Azure Cloud Shell command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Change to the project directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd RAI-Diabetes-Hospital-Readmission-classification\n")),(0,o.kt)("h3",{id:"azure-login"},"Azure Login"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"At the terminal command prompt, enter the following Azure CLI command to log into your Azure account. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az login --use-device-code\n")),(0,o.kt)("p",null,"Then, open the link provided and enter the access code from the Cloud Shell message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Login URL",src:a(5485).Z,title:"Device Login URL"}),"\t"),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'This will open a new browser window.  Enter the access code and click on the "Next" button.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Pick the account you used to setup the Azure subscription which shows the name and email your used. Then, click on the "Continue" button to sign into the Microsoft Azure CLI.  After you have successfully signed in, closed the browser window tab.  Return back to the Azure portal tab.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have successfully logged in, set your account to your subscription.  Use the ",(0,o.kt)("strong",{parentName:"p"},"subscription Id")," that you copied earlier."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az account set -s <enter-your-subscription-id-here>\n")),(0,o.kt)("h3",{id:"create-resource-group-and-azure-ml-workspace"},"Create Resource Group and Azure ML workspace"),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Create an Azure resource group.  For location, enter ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westus")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westus2")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"eastus"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"westeurope")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create --name <resource-group-name> --location <location>\n")),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Create an Azure Machine Learning workspace using the resource group name you created.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml workspace create -n <workspace-name> -g <resource-group-name>\n")),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Set your environment default to the resource group and Azure ML workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"\n')),(0,o.kt)("h3",{id:"run-jobs-for-training-the-model-and-creating-the-rai-dashboard"},"Run jobs for training the model and creating the RAI dashboard"),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Register the training and testing dataset to the Azure Machine Learning workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml data create -f cloud/train_data.yml\n\naz ml data create -f cloud/test_data.yml\n")),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"Create a compute instance for running the jobs.  Then, copy the compute name (e.g., ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"compute-xxxxxxxxxxxx")),") at the end of the run to use later.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"uuid=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w 12 | head -n 1)\ncomputename=compute-$uuid\n\naz ml compute create --name $computename --type computeinstance --size STANDARD_DS12_V2\n\necho 'copy the compute name to use later:' \necho $computename\n")),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},'On the Cloud Shell menu, click on the "Open editor" pane to edit some of the files.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open editor",src:a(6738).Z,title:"Open editor"}),"\t"),(0,o.kt)("ol",{start:20},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("em",{parentName:"li"},"RAI-Diabetes-Hospital-Readmission-classification")," folder to expand the directory.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Expand directory",src:a(7430).Z,title:"Expand directory"}),"\t"),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},'Navigate to the "cloud/training_job.yml" file.  Then replace the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},'"compute: azureml:compute-xxxxxxxxxxxx"')),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Training job update",src:a(5580).Z,title:"training job update"}),"\t"),(0,o.kt)("ol",{start:22},(0,o.kt)("li",{parentName:"ol"},'Right-click anywhere in the file, then select the "Save" option to save the file.  You can use Save short-cut keys as well.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save editor",src:a(7568).Z,title:"Save edit"}),"\t"),(0,o.kt)("ol",{start:23},(0,o.kt)("li",{parentName:"ol"},'Next, navigate to the "cloud/rai_dashboard_pipeline.yml" file.  Then update the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},'"compute: azureml:compute-xxxxxxxxxxxx"')),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rai pipeline update",src:a(1204).Z,title:"Rai pipeline update"}),"\t"),(0,o.kt)("ol",{start:24},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right-click anywhere in the file, then select the "Save" option to save the file.  You can also use Save short-cut keys as well.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right-click anywhere in the file, then select the "Quit" option to close the editor window.'))),(0,o.kt)("ol",{start:26},(0,o.kt)("li",{parentName:"ol"},"Back at the Cloud Shell command prompt, submit the job to train the model.  Wait for the job to update its run status during the training.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'run_id=$(az ml job create --name my_training_job -f cloud/training_job.yml --query name -o tsv)\n\n# wait for job to finish while checking for status\nif [[ -z "$run_id" ]]\nthen\n  echo "Job creation failed"\n  exit 3\nfi\nstatus=$(az ml job show -n $run_id --query status -o tsv)\nif [[ -z "$status" ]]\nthen\n  echo "Status query failed"\n  exit 4\nfi\nrunning=("Queued" "Starting" "Preparing" "Running" "Finalizing")\nwhile [[ ${running[*]} =~ $status ]]\ndo\n  sleep 8 \n  status=$(az ml job show -n $run_id --query status -o tsv)\n  echo $status\ndone\n')),(0,o.kt)("ol",{start:27},(0,o.kt)("li",{parentName:"ol"},"After the training job has completed successfully, register the model to the Azure Machine Learning workspace.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az ml model create --name rai_hospital_model --path "azureml://jobs/$run_id/outputs/model_output" --type mlflow_model\n')),(0,o.kt)("ol",{start:28},(0,o.kt)("li",{parentName:"ol"},"Submit the job pipeline to create the RAI dashboard.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az ml job create --file cloud/rai_dashboard_pipeline.yml\n")),(0,o.kt)("ol",{start:29},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into ",(0,o.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"Azure Machine Learning studio")," to monitor the pipeline job for creating the RAI dashboard.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on your Azure ML workspace name.  Then, click on the ",(0,o.kt)("strong",{parentName:"p"},"Pipelines")," tab to get the job status."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure ML Job status",src:a(9016).Z,title:"Azure ML job status page"}),"\t"),(0,o.kt)("ol",{start:31},(0,o.kt)("li",{parentName:"ol"},'To view the progression of the pipeline job creating the RAI dashboard, click on the job "Display name". ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard pipeline",src:a(4783).Z,title:"RAI dashboard pipeline"}),"\t"),(0,o.kt)("ol",{start:32},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Models")," tab on the left-hand navigation.  Then click on the name of the model to open the details page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lastly, click on the ",(0,o.kt)("em",{parentName:"p"},'"Responsible AI"'),' tab to view the RAI dashboard.  Then, click on the "Name" to view the dashboard.'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard tab",src:a(494).Z,title:"RAI dashboard tab"}),"\t"),(0,o.kt)("ol",{start:34},(0,o.kt)("li",{parentName:"ol"},"Terrific...you're ready to start using the dashboard!  ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RAI dashboard",src:a(8857).Z,title:"RAI dashboard"}),"\t"),(0,o.kt)("ol",{start:35},(0,o.kt)("li",{parentName:"ol"},'Click on the "Next" button below to proceed to the ',(0,o.kt)("em",{parentName:"li"},"Error Analysis")," lab.")))}u.isMDXComponent=!0},3396:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-cloud-shell-3fd4ef22c2037cdb5e3fa87714a5a05a.png"},8734:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-subscriptions-copy-975a8defcfeadf8482aff19fd99c5d58.png"},6382:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azure-subscriptions-c7ace6ac3d0c0059ead6d4ed452e87aa.png"},9016:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azureml_jobs_page-a1f6a2de5d57fc4c9c85f2f15165cdb9.png"},8054:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-bash-0ccfafbeaf7318d9b37ea44862851b56.png"},8729:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-create-storage-9de13991e6f96cc1335e956bf6c02f0a.png"},4900:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-shell-terminal-32a8fab51b18c4d35a6585c9ea235bb7.png"},5485:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/device-login-url-7259a2a4c8cb9ec364b039fa8f34abc3.png"},7430:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/expand-project-directory-ad6ae07fdfb95869ab4a03fc6d93837a.png"},6738:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/open-editor-93deb6020369c8cadce53124cc0d58fe.png"},494:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai-dashboard-tab-561f9c43b60eb2311a9e5c17e63430ad.png"},8857:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai-dashboard-2ab5b747896bc4ec09259adbd586e24d.png"},1204:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai-pipeline-compute-update-d40534a26baa978c0226ccd5310ec6cf.png"},4783:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rai_dashboard_pipeline-879d80eeee762e5c53465d91accba4c1.png"},7568:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/save-open-editor-eb93f6e1555eff477e97219deea43818.png"},5580:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/training-job-compute-update-d3d96d8ff6502d57cbcf032c08c04940.png"}}]);