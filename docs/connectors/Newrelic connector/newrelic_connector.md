---
sidebar_position: 2
---
# Connect newrelic

New Relic helps you understand the intricacies of your software in action. By collecting and analyzing data across your applications, infrastructure, and customer interactions, New Relic transforms complex metrics into actionable insights. These insights empower your teams to identify performance bottlenecks, optimize resource utilization, and enhance the overall user experience.

## Features

New Relic provides a unified platform for observability, offering visibility into application performance, infrastructure health, user experience, and business metrics. This comprehensive approach helps teams gain a holistic understanding of their entire technology stack realtime.


## Overview

The process of integrating azure services in onepane requires the following:

- Create a API key for onepane in newrelic
- Create a Ingest license for onepane in newrelic
- Get the stated keys and place it in onepane

## Steps

here's a step-by-step guide on how to create an API key and Ingest license for getting newrelic datas into onepane.


#### Step 1: Sign in to the Newrelic Portal

1. Open your web browser and navigate to the [Newrelic Portal](https://one.newrelic.com/).
2. Sign in with your Newlrelic credentials.

#### Step 2: Navigate to the API keys section

1. In the Newrelic Portal, click on "Profile" menu from the left sidebar.

    ![Newrelic overview](/images/integrations/newrelic/nw_1.png)

1. Click on API keys. This will open a window which list all api keys in system.

    ![Newrelic api keys](/images/integrations/newrelic/nw_2.png)



#### Step 3: Create a API key

1. In the API keys section click on "Create key" button. 

    ![Create api keys](/images/integrations/newrelic/nw_3.png)

2. **Key type**: Select user for keytype.
2. **Name**: Provide a proper name for the key
3. **Notes (optional)**: leave it empty

4. Click on 'Create key'

#### Step 5: Copy the API key

1. In the api keys window search for you key
2. Click on the 3 dotes on the right side of the key

    ![Key click](/images/integrations/newrelic/nw_4.png)

3. Click on 'Copy key'. And save it on a secure location


#### Step 6: Create a Ingest license

1. In the API keys section click on "Create key" button. 

    ![Create api keys](/images/integrations/newrelic/nw_3.png)

2. **Key type**: Select Ingest license for keytype.
2. **Name**: Provide a proper name for the key
3. **Notes (optional)**: leave it empty

4. Click on 'Create key'
5. Repeat **step 5** for getting the key



#### Step 7: Retrieve Newrelic Details

1. Goto current application's overview page, note down the following information:
   - **Application (client) ID**: click the user menu, and then go to: Administration > Access management > Accounts to see account IDs.

      ![Application](/images/integrations/newrelic/nw_5.png)

   - **API key**: This is the key from step 5
   - **Ingest license**: This is the key from step 6


#### Step 11: Store Application Information Securely

1. Keep the keys, including the ingest license, in a secure location. These details will be used to authenticate and authorize your application to access newrelic resources by onepane.

That's it! You've successfully created an API key with the necessary permissions for integrating with Newrelic resources and incident alerts.