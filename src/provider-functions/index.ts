/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the azapi provider.
*/
export class AzapiProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * This function constructs an Azure resource ID given the parent ID, resource type, and resource name. It is useful for creating resource IDs for top-level and nested resources within a specific scope.
  * @param {string} parentId - The parent ID of the Azure resource.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {string} name - The name of the Azure resource.
  * @returns {string}
  */
  public buildResourceId(parentId: string, resourceType: string, name: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "build_resource_id", [parentId, resourceType, name]));
  }

  /**
  * This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names.
  * @param {string} baseResourceId - The base resource ID of the Azure resource.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {Array<string>} resourceNames - The list of resource names to construct the extension resource ID.
  * @returns {string}
  */
  public extensionResourceId(baseResourceId: string, resourceType: string, resourceNames: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "extension_resource_id", [baseResourceId, resourceType, resourceNames]));
  }

  /**
  * This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names.
  * @param {string} managementGroupName - The name of the management group.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {Array<string>} resourceNames - The list of resource names to construct the resource ID.
  * @returns {string}
  */
  public managementGroupResourceId(managementGroupName: string, resourceType: string, resourceNames: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "management_group_resource_id", [managementGroupName, resourceType, resourceNames]));
  }

  /**
  * This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {string} resourceId - The resource ID of the Azure resource to parse.
  * @returns {object}
  */
  public parseResourceId(resourceType: string, resourceId: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "parse_resource_id", [resourceType, resourceId]);
  }

  /**
  * This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names.
  * @param {string} subscriptionId - The subscription ID of the Azure resource.
  * @param {string} resourceGroupName - The name of the resource group.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {Array<string>} resourceNames - The list of resource names to construct the resource ID.
  * @returns {string}
  */
  public resourceGroupResourceId(subscriptionId: string, resourceGroupName: string, resourceType: string, resourceNames: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "resource_group_resource_id", [subscriptionId, resourceGroupName, resourceType, resourceNames]));
  }

  /**
  * Converts all keys in the input from snake_case to camelCase. Retains the original structure and values.
  * @param {any} input - The input value to convert from snake_case to camelCase. Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.
  * @returns {any}
  */
  public snake2Camel(input?: any): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "snake2camel", [input]);
  }

  /**
  * This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names.
  * @param {string} subscriptionId - The subscription ID of the Azure resource.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {Array<string>} resourceNames - The list of resource names to construct the resource ID.
  * @returns {string}
  */
  public subscriptionResourceId(subscriptionId: string, resourceType: string, resourceNames: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "subscription_resource_id", [subscriptionId, resourceType, resourceNames]));
  }

  /**
  * This function constructs an Azure tenant scope resource ID given the resource type and resource names.
  * @param {string} resourceType - The resource type of the Azure resource.
  * @param {Array<string>} resourceNames - The list of resource names to construct the resource ID.
  * @returns {string}
  */
  public tenantResourceId(resourceType: string, resourceNames: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "tenant_resource_id", [resourceType, resourceNames]));
  }

  /**
  * This function constructs an Azure equivalent `uniqueString` value. It is useful for migrating existing resources based on the ARM `uniqueString` function.
  * @param {Array<string>} baseString - The values used in the hash function to create a unique string.
  * @returns {string}
  */
  public uniqueString(baseString: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "unique_string", [baseString]));
  }
}
