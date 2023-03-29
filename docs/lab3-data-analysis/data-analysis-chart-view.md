---
title: Data Analysis chart view
sidebar_position: 2
slug: /data-analysis-chart-view
---


The chart view of the dashboard is another useful tool to visualize the data representation. You will be using the chart to compare the data distribution for the patients data.

*Check data imbalance issues*

1. Under the "Chart view" pane, use the cohort with all the test data by selecting the "All data" option from the **"Select a dataset cohort to explore"** drop-down menu.
2. On the Y-axis,  click on the current selected *"race"* button, which will launch a pop-up menu. Under **"Select your axis value"**, choose "Count".

![Data Analysis chart](/img/tutorial/7-select-data-chart.png "Data Analysis chart view")	
	
3. On the X-axis, click on the current selected "Index" value, then choose "True Y" under the **"Select your axis value"** menu. You can see that the data distribution between both classes is imbalance.

![Data Analysis trueY](/img/tutorial/7-da-trueY.png "Data Analysis TrueY")	
	
4. Looks like out of the **994** diabetes patients test data, **798** patients are Not readmitted and 198 are Readmitted. These are the actual values or TrueY.
5. On the X-axis, click on the current selected "Index" value, then choose *"Predicted Y"* under the "Select your axis value" menu. 

![Data Analysis PredictedY](/img/tutorial/7-da-predictedY.png "Data Analysis PredictedY")	
	
	
6. You can see that the model’s number of patients Readmitted is **41**, while the number of patients Not Readmitted is **953**. So, this definitely exposes an extreme data imbalance issue where the model is not performing well for cases where patients are Readmitted.
	
*Check sensitive data representation*

It is important to check for data disparities for non-sensitive and sensitive data (e.g., *age*, *gender*, *race* etc.). Not having a good balance of data can negatively skew a model’s performance. This leads to data biases causing the model to have fairness, inclusiveness, safety, or reliability issues. 

1. On the Y-axis,  verify that *"Count"* is still selected.
2. On the X-axis, click on the current selected *"Predicted Y"* button, which will launch a pop-up menu. Under "Select your axis value", click on the "Dataset" radio button.
3.  Under the "Select feature" drop-down menu, select *"race"*.

![Data Analysis race count](/img/tutorial/7-da-race-count.png "Data Analysis race count")	
	
4. You will find that, there's a lot of disparities among "Race" representation. Caucasians represent 77% of patients in the test data. African-Americans make up 19% of the patients. Hispanics represent 2% of the data. There's obviously a lot of gaps between the different races. This is an area that will be a good candidate for a data scientist or ML engineer to flagged to make sure it does not induce any racial biases.
5. Next, on the X-axis, click on the current selected *"Predicted Y"* button, which will launch a pop-up menu. Under "Select your axis value", click on the "Dataset" radio button.
6. Under the "Select feature" drop-down menu, select *"gender"*.
	
![Data Analysis gender count](/img/tutorial/7-da-gender-count.png "Data Analysis gender count")	

7. The gender representation among the patient is fairly balanced. So, this is not an area of concern.
8. Finally, On the X-axis, replace gender to age.

![Data Analysis age count](/img/tutorial/7-da-age-count.png "Data Analysis age count")	
	
9. The *Age* representation is not proportionately distributed across the 3 age groups. Diabetes tends to affect individuals the older they get. This may be an acceptable and expected disparity, however this is another candidate for a data scientist to validate with medical specialists.

*Check Hospital Readmissions*

Since *Prior_Inpatient* is one of the features from the cohort will the highest errors; let see what impact it has to the model’s outcome.

1. Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select *"prior_inpatient"* on the drop-down menu. 
2. On the X-axis, click on the current selected "Index" value, then choose *"Predicted Y"* under the "Select your axis value" menu.

![Data Analysis prior inpatient prediction](/img/tutorial/7-da-prior-inpatient.png "Data Analysis prior inpatient prediction")	

3. As you can see, the chart shows that the more the number of inpatients hospital stays a diabetic patient has in the past, the more likely they will be readmitted back in the hospital in 30 days. Patients with less prior inpatients are more likely not to be readmitted.

![Data Analysis prior inpatient predictionY](/img/tutorial/7-da-inpatient-predictY.png "Data Analysis prior inpatient predictionY")	

4. Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select *"race"* on the drop-down menu. 
5. Leave the X-axis to be *"Predicted Y"*.

![Data Analysis race predictionY](/img/tutorial/7-da-race-predictY.png "Data Analysis race predictionY")	

6. For *"Race"*, the chart shows that due to the data imbalance, the model will not be able to predict if a patient will be Readmitted back to the hospital for some ethnicities. As you saw above the "Caucasian" patients are overrepresented in this data set. So, even when there was no prediction for the other ethnic groups, we see 31 "Readmitted" occurrences for Caucasian patients since there's an overrepresentation there.
7. Click on the y-axis label. In the pop-up window pane, select the "Dataset" radio button. Then under "select feature", select *"age"* on the drop-down menu. 
	
![Data Analysis age predictionY](/img/tutorial/7-da-age-predictY.png "Data Analysis age predictionY")
	
8. You'll see that the model prediction is affected by the patients' age groups as well. There's an overrepresentation of data for patients *"Over 60 years"* and data underrepresentation for patients *"30 years or younger"*. Here, the effects of data imbalance were evident between the model's classification of "Not readmitted" vs "Readmitted".
