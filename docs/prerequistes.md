---
sidebar_position: 2
---

# Prerequisites

## Azure subscription account

In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account access code.  You'll need to complete the azure pass redemption process for setting up your account before you can start the steps below.

## Setup your cloud resources

We'll be using Azure Cloud Shell to create your Azure Machine Learning workspace; as well as run the jobs to train and register your model. And finally, create the Responsible AI dashboard that you'll be using in this workshop.  

1. To start, log into the [Azure portal](http://portal.azure.com/) with your account subscription.

2. Click on the "Subscriptions" icon, to access your **subscription ID**.

![Azure subscription icon](/img/tutorial/azure-subscriptions.png "Azure subscription icon")

3. On the "Subscriptions" page, copy the "subscription Id" and store it to use later.

![Azure subscription id](/img/tutorial/azure-subscriptions-copy.png "Azure subscription id")

4. Select the "Azure Cloud Shell" icon.  

![Azure Cloud Shell icon](/img/tutorial/azure-cloud-shell.png "Azure Cloud Shell icon")

5. A command terminal will open at the bottom of the page.  Select the "Bash" option.

![Cloud Shell bash](/img/tutorial/cloud-shell-bash.png "Cloud Shell bash")	

6. A Cloud Shell needs to create a storage account and mount a file system for you.  Under the "Subscription" drop-down menu, select your subscription.  Then, click on the "Create storage" button.

![Cloud Shell bash](/img/tutorial/cloud-shell-create-storage.png "Cloud Shell bash")	

7. This should open a Cloud Shell command line terminal.

![Azure Cloud Shell terminal](/img/tutorial/cloud-shell-terminal.png "Azure Cloud Shell terminal")	

8. In Azure Cloud Shell command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:
```shell
git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git
```
9. Change to the project directory
```shell
cd RAI-Diabetes-Hospital-Readmission-classification
```

### Azure Login

10. At the terminal command prompt, enter the following Azure CLI command to log into your Azure account. 

```shell
az login --use-device-code
```
Then, open the link provided and enter the access code from the Cloud Shell message.

![Device Login URL](/img/tutorial/device-login-url.png "Device Login URL")	

11. This will open a new browser window.  Enter the access code and click on the "Next" button.

12.  Pick the account you used to setup the Azure subscription which shows the name and email your used. Then, click on the "Continue" button to sign into the Microsoft Azure CLI.  After you have successfully signed in, closed the browser window tab.  Return back to the Azure portal tab.

13. Once you have successfully logged in, set your account to your subscription.  Use the **subscription Id** that you copied earlier.
```shell
az account set -s <enter-your-subscription-id-here>
```
### Create Resource Group and Azure ML workspace

14. Create an Azure resource group.  For location, enter ***westus***, ***westus2***, ***eastus*** or ***westeurope***.
```shell
az group create --name <resource-group-name> --location <location>
```
15. Create an Azure Machine Learning workspace using the resource group name you created.
```shell
az ml workspace create -n <workspace-name> -g <resource-group-name>
```
16. Set your environment default to the resource group and Azure ML workspace.
```shell
az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"
```

###  Run jobs for training the model and creating the RAI dashboard

17. To expedite the steps needed to provision the Azure Machine Learning resources for this workshop, run the setup bash script below to create the following:
* train and test datasets
* compute instance
* training job pipeline
* model registration
* RAI dashboard pipeline

```shell
bash cloud/setup.sh
```

18.  To monitor the pipeline job for creating the RAI dashboard, log into [Azure Machine Learning studio](https://ml.azure.com).  

19.  Click on your Azure ML workspace name.  Then, click on the **Pipelines** tab to get the job status.

![Azure ML Job status](/img/tutorial/azureml_jobs_page.png "Azure ML job status page")	

20.  To view the progression of the pipeline job creating the RAI dashboard, click on the job "Display name". 

![RAI dashboard pipeline](/img/tutorial/rai_dashboard_pipeline.png "RAI dashboard pipeline")	

21.  Click on the **Models** tab on the left-hand navigation.  Then click on the name of the model to open the details page.

22.  Lastly, click on the *"Responsible AI"* tab to view the RAI dashboard.  Then, click on the "Name" to view the dashboard.

![RAI dashboard tab](/img/tutorial/rai-dashboard-tab.png "RAI dashboard tab")	

23. Terrific...you're ready to start using the dashboard!  

![RAI dashboard](/img/tutorial/rai-dashboard.png "RAI dashboard")	

24. Click on the "Next" button below to proceed to the *Error Analysis* lab.
