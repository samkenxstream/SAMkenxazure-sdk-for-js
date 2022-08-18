/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkConnectionUpdate, DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Partially updates a Network Connection
 *
 * @summary Partially updates a Network Connection
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/NetworkConnections_Patch.json
 */
async function networkConnectionsUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const networkConnectionName = "uswest3network";
  const body: NetworkConnectionUpdate = {
    domainPassword: "New Password value for user"
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.networkConnections.beginUpdateAndWait(
    resourceGroupName,
    networkConnectionName,
    body
  );
  console.log(result);
}

networkConnectionsUpdate().catch(console.error);
