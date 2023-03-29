"use strict";(self.webpackChunkrai_workshop=self.webpackChunkrai_workshop||[]).push([[546],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(m,n(n({ref:t},c),{},{components:a})):r.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,n[1]=s;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},472:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const i={title:"Global Feature Importance",sidebar_position:1,slug:"/view-feature-importance"},n="Feature Importance",s={unversionedId:"lab4-feature-importance/view- feature-importance",id:"lab4-feature-importance/view- feature-importance",isDocsHomePage:!1,title:"Global Feature Importance",description:"Part of training a model is not just to see how accurate it can make a prediction, but why it made the prediction.   Understanding and explaining a model\u2019s behavior is part of ensuring it is fair, inclusive, reliable and accountable.  Some industries have compliance regulations that require organizations to provide an explanation for how and why a model made the prediction it did. The Azure Responsible AI (RAI) dashboard provides the Feature Importance section that is an interactive user interface (UI) which enables data scientists or AI developers to see top features in their dataset that drove a model\u2019s prediction.",source:"@site/docs/lab4-feature-importance/view- feature-importance.md",sourceDirName:"lab4-feature-importance",slug:"/view-feature-importance",permalink:"/1hr-rai-dashboard-workshop/docs/view-feature-importance",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/lab4-feature-importance/view- feature-importance.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Global Feature Importance",sidebar_position:1,slug:"/view-feature-importance"},sidebar:"tutorialSidebar",previous:{title:"Data Analysis individual datapoints",permalink:"/1hr-rai-dashboard-workshop/docs/data-analysis-datapoint-chart"},next:{title:"Local Feature Importance",permalink:"/1hr-rai-dashboard-workshop/docs/view-individual-feature-importance"}},l=[{value:"View the top features driving the model&#39;s overall predictions",id:"view-the-top-features-driving-the-models-overall-predictions",children:[]},{value:"Check a Feature&#39;s influence on a Model Prediction",id:"check-a-features-influence-on-a-model-prediction",children:[]}],d={toc:l},c="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feature-importance"},"Feature Importance"),(0,o.kt)("p",null,"Part of training a model is not just to see how accurate it can make a prediction, but why it made the prediction.   Understanding and explaining a model\u2019s behavior is part of ensuring it is fair, inclusive, reliable and accountable.  Some industries have compliance regulations that require organizations to provide an explanation for how and why a model made the prediction it did. The Azure Responsible AI (RAI) dashboard provides the Feature Importance section that is an interactive user interface (UI) which enables data scientists or AI developers to see top features in their dataset that drove a model\u2019s prediction."),(0,o.kt)("p",null,"The Feature Importance section of the dashboard helps provide a better understanding of the model\u2019s behavior. The dashboard provides both Global and Local explanations. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Global Explanation"),": What are the top factor impacting the model's overrall predictions?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Local Explanation"),": Why did patient X get readmitted in the hospital in less than 30 days? Here, the dashboard could drill-down to the test dataset and show that Patient X has been predicted to be readmitted within 30 days in a hospital because of a history of other diagnoses.")),(0,o.kt)("p",null,"In this lab, you will explore how to use the Feature Importance section of the RAI dashboard."),(0,o.kt)("h2",{id:"view-the-top-features-driving-the-models-overall-predictions"},"View the top features driving the model's overall predictions"),(0,o.kt)("p",null,"The RAI dashboard displays the top data features that drove a model\u2019s overall predictions in the Feature Important section of the dashboard. This is also known as the global explanation. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Toggle the slider back-and-forth on top of the chart to display all the features, which are ordered in descending order of importance on the x-axis.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature importance chart",src:a(1430).Z,title:"Feature importance chart"}),"\t"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Observe the y-axis scale to see how much weight a feature has in driving a model\u2019s prediction in comparison to the rest of the other features. "),(0,o.kt)("li",{parentName:"ol"},"Compare the color of bar(s) on the chart that correspond to the cohorts created on the dashboard. In our case, there's \u201cAll data\u201d, which is the default cohort with the test dataset as well as the cohorts with the highest and least number of errors.")),(0,o.kt)("h2",{id:"check-a-features-influence-on-a-model-prediction"},"Check a Feature's influence on a Model Prediction"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To take a closer look into a feature to see how the model uses it values in making a prediction, we'll select the ",(0,o.kt)("strong",{parentName:"li"},'"Class: Not Readmitted"')," under the Class importance weights drop-down menu on the right-hand side of the dashboard."),(0,o.kt)("li",{parentName:"ol"},"Double-click on the ",(0,o.kt)("em",{parentName:"li"},'"number_diagnoses"'),' bar from the "All data" cohort (in blue color). This generates another chart below the Aggregate feature importance chart. ')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature influence on importance",src:a(6168).Z,title:"Feature influence on importance"}),"\t"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The x-axis displays the number of diagnoses were entered into the system for the diabetic patient. "),(0,o.kt)("li",{parentName:"ol"},"The y-axis displays, the level of contribution to the model making a prediction of Not Readmitted. Where numbers above 0 show the level of positive contribution to the model's prediction of a patient Not Readmitted and numbers below 0 show the level of negative contribution against the model's prediction for Not Readmitted."),(0,o.kt)("li",{parentName:"ol"},"As you can see from the graph, as we progress from 0 to 11 in the number of ",(0,o.kt)("em",{parentName:"li"},'"number_diagnoses"')," the more the model's confidence in a patient not readmitted within 30 days back to the hospital decrease. "),(0,o.kt)("li",{parentName:"ol"},'The chart shows that after 7 number of diagnoses, the class starts to negatively impact the "Not Readmitted classification", which leads to a "Readmitted" classification. This makes sense because the more a diabetic patient has other additional medical conditions, the more prone they are to getting sick and returning back to the hospital again.')))}h.isMDXComponent=!0},1430:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9-feature-importance-e5b22939d81f82b4f0f6dfefc8781789.png"},6168:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9-features-influence-bd9cafa48aad93396d60d1e5693ce3e2.png"}}]);