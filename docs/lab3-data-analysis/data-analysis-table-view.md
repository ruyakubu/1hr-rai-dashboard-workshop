---
title: Data Analysis Table view
sidebar_position: 1
slug: /data-analysis-table-view
---

# Data Analysis

There are number of issues that could cause model inaccuracies.  For instance, data can be overrepresented in some cases or underrepresented in others. Not having a good balance of data can negatively skew a model’s performance. This leads to data biases causing the model not to be fair, inclusive, safe, or reliable.  The Azure Responsible AI dashboard includes a Data Analysis section for users to be able to explore and understand the dataset distributions and statistics. It provides an interactive user interface (UI) to enable users to visualize datasets based on the predicted and actual outcomes, error groups, and specific features. As a result, the insights help ML professionals to better understand and pinpoint the root cause of errors.

In this lab, we will explore how to use the Data Analysis section of the Azure Responsible AI (RAI) dashboard to discover the root-cause of the model’s performance due to problematic data distribution.

## Data Analysis: Table view

The Table view helps in visualizing all the features and rows of the data in a selected cohort. The advantage of using this view is that we get to see records of the raw data where the model made Correct vs Incorrect predictions. In addition, for each row of data, the dashboard includes a field for TrueY and PredictedY column for the user to be able to decipher common feature attributes from records where the model is incorrect.

Since we want to analyze the data for when the model is performing poorly, switch the cohort for "All data" to ***"Err: Prior_Inpatient >0; Num_meds >11.50 & <= 21.50"***.

1. Click on the "switch cohort" link on top of the dashboard.  Then select the *"Err: Prior_Inpatient >0; Num_meds >11.50 & <= 21.50"* cohort under the "Cohort list" drop-down menu list.

![Switch Cohort](/img/tutorial/6-da-switch-cohort.png "Switch Cohort")	
	
2. Review the individual patient records under the "Correct predictions" or "Incorrect predictions".

![Data analysis table view](/img/tutorial/6-da-table-view.png "Data analysis table view")	

In our Diabetes Hospital Readmission use case, the Table view confirms the False Negative rates we saw in the Model Overview: Dataset cohort section. The record count from the Table shows that there 55 False Negative record where the patients are readmitted, but the model predicted not readmitted. There are 20 True Negative records where the patients were readmitted, and the model correctly predicted readmit. This is beneficial to be able to review the raw data for your cohort to see what the true vs predicted outcome are for your sample data. In addition, you can view common feature attributes for one class vs another.



