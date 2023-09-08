---
sidebar_position: 1
---
# Azure prerequisites

The expansive Azure cloud platform encompasses over 200 products and cloud services meticulously crafted to facilitate the realization of innovative solutions. Its purpose is to not only address current challenges but also to pave the way for the future. Seamlessly spanning across various clouds, on-premises environments, and the edges of technology, Azure empowers you to construct, operate, and oversee applications.

## Features

Through our Azure integrations, you unlock the capacity to access performance insights via dynamically scaling dashboards, establish alerts for timely notifications during issues, and harness data querying capabilities to craft tailored charts and dashboards tailored to your unique observability requirements.


## Overview

The process of integrating azure services in onepane requires the following:

- Create a AD application for onepane in azure
- Grant required permissions over azure resources
- Generate Credentials and place it in onepane

## Steps

here's a step-by-step guide on how to create an Azure AD application with the necessary permissions for integrating with Azure resources and incident alerts to onepane:


#### Step 1: Sign in to the Azure Portal

1. Open your web browser and navigate to the [Azure Portal](https://portal.azure.com/).
2. Sign in with your Azure account credentials.

#### Step 2: Navigate to the Azure Active Directory (Azure AD) Section

1. In the Azure Portal, click on "Azure Active Directory" from the left-hand navigation menu.

    ![Active directory](/images/integrations/azure/az_1.png)


#### Step 3: Register an Application

1. In the Azure AD section, click on "App registrations" in the left-hand menu.
2. Click the "+ New registration" button.

    ![App registrations](/images/integrations/azure/az_2.png)

#### Step 4: Configure Application Details

1. **Name**: Enter a name for your application.
2. **Supported account types**: Always choose the appropriate account types based on your integration needs. For now  select "Accounts in this organizational directory only."
3. **Redirect URI (optional)**: leave it empty

    ![New application](/images/integrations/azure/az_3.png)

#### Step 5: Register the Application

1. Click the "Register" button to create the application.
2. Open the relevant application

    ![Created app](/images/integrations/azure/az_4.png)

#### Step 6: Configure API Permissions



1. In the application's overview page, navigate to the "API permissions" tab.

   ![Api permissions](/images/integrations/azure/az_5.png)

2. Click the "+ Add a permission" button.
3. Onepane needs the following permissions

   1. Log analytics API  - Data.Read
   2. Microsoft Graph - User.Read
   3. Microsoft Graph - Directory.Read.All
   4. Microsoft Graph - APIConnectors.Read.All
   5. Microsoft Graph - ExternalConnections.Read.All
   6. Microsoft Graph - ExternalItem.Read.All

5. Click the "Add permissions" button to save your selections.

#### Step 7: Grant Admin Consent

1. After adding the necessary permissions, you will need to obtain consent from an administrator to use these permissions.
2. Click the "Grant admin consent for [your tenant name]" button. An administrator will need to sign in and approve these permissions.

#### Step 8: Create client credentials

1. Go to Certificates and secrets
2. Click the "New client secret" button and create a secret for onepane app. Store this credentials for further use

    ![Api credentials](/images/integrations/azure/az_6.png)

#### Step 9: Grant Reader access over the subscription

1. Open the Current subscription's page

    ![Subscription](/images/integrations/azure/az_9.png)

2. In the subscription's overview page, navigate to the "Access control" tab. And click on '+ Add'. Select Add role assignment from it

    ![iam](/images/integrations/azure/az_10.png)

3. Give Reader access over the subscription for the ad application we created before

    ![iam](/images/integrations/azure/az_11.png)


#### Step 10: Retrieve Application Details

1. Goto current application's overview page, note down the following information:
   - **Application (client) ID**: This is a unique identifier for your application.
   - **Directory (tenant) ID**: This is the ID of your Azure AD tenant.
   - **Client secret (optional)**: The secret which we created in the last step
2. Goto subscriptions windows and get your subscription id
   - **Subscription ID**: This is a unique identifier for your subscription.

        ![Subscriptions](/images/integrations/azure/az_7.png)

3. Goto your active Loganalytics workspace and get Loganalytics workspace id
   - **WORKSPACE_ID**: This is a unique identifier for your loganalytics workspace.

        ![Workspace id](/images/integrations/azure/az_8.png)

   

#### Step 11: Store Application Information Securely

1. Keep the application details, including the client secret, in a secure location. These details will be used to authenticate and authorize your application to access Azure resources by onepane.

That's it! You've successfully created an Azure AD application with the necessary permissions for integrating with Azure resources and incident alerts.