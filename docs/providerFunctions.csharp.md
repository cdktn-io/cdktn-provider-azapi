# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azapi.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzapiProviderFunctions <a name="AzapiProviderFunctions" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions"></a>

Provider-defined functions of the azapi provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new AzapiProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId">BuildResourceId</a></code> | This function constructs an Azure resource ID given the parent ID, resource type, and resource name. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId">ExtensionResourceId</a></code> | This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId">ManagementGroupResourceId</a></code> | This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId">ParseResourceId</a></code> | This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId">ResourceGroupResourceId</a></code> | This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel">Snake2Camel</a></code> | Converts all keys in the input from snake_case to camelCase. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId">SubscriptionResourceId</a></code> | This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId">TenantResourceId</a></code> | This function constructs an Azure tenant scope resource ID given the resource type and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString">UniqueString</a></code> | This function constructs an Azure equivalent `uniqueString` value. |

---

##### `BuildResourceId` <a name="BuildResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId"></a>

```csharp
private string BuildResourceId(string ParentId, string ResourceType, string Name)
```

This function constructs an Azure resource ID given the parent ID, resource type, and resource name.

It is useful for creating resource IDs for top-level and nested resources within a specific scope.

###### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.parentId"></a>

- *Type:* string

The parent ID of the Azure resource.

---

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.name"></a>

- *Type:* string

The name of the Azure resource.

---

##### `ExtensionResourceId` <a name="ExtensionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId"></a>

```csharp
private string ExtensionResourceId(string BaseResourceId, string ResourceType, string[] ResourceNames)
```

This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names.

###### `BaseResourceId`<sup>Required</sup> <a name="BaseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.baseResourceId"></a>

- *Type:* string

The base resource ID of the Azure resource.

---

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the extension resource ID.

---

##### `ManagementGroupResourceId` <a name="ManagementGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId"></a>

```csharp
private string ManagementGroupResourceId(string ManagementGroupName, string ResourceType, string[] ResourceNames)
```

This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names.

###### `ManagementGroupName`<sup>Required</sup> <a name="ManagementGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.managementGroupName"></a>

- *Type:* string

The name of the management group.

---

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `ParseResourceId` <a name="ParseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId"></a>

```csharp
private IResolvable ParseResourceId(string ResourceType, string ResourceId)
```

This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts.

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceId"></a>

- *Type:* string

The resource ID of the Azure resource to parse.

---

##### `ResourceGroupResourceId` <a name="ResourceGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId"></a>

```csharp
private string ResourceGroupResourceId(string SubscriptionId, string ResourceGroupName, string ResourceType, string[] ResourceNames)
```

This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names.

###### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.subscriptionId"></a>

- *Type:* string

The subscription ID of the Azure resource.

---

###### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceGroupName"></a>

- *Type:* string

The name of the resource group.

---

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `Snake2Camel` <a name="Snake2Camel" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel"></a>

```csharp
private IResolvable Snake2Camel(object Input = null)
```

Converts all keys in the input from snake_case to camelCase.

Retains the original structure and values.

###### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel.parameter.input"></a>

- *Type:* object

The input value to convert from snake_case to camelCase.

Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.

---

##### `SubscriptionResourceId` <a name="SubscriptionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId"></a>

```csharp
private string SubscriptionResourceId(string SubscriptionId, string ResourceType, string[] ResourceNames)
```

This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names.

###### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.subscriptionId"></a>

- *Type:* string

The subscription ID of the Azure resource.

---

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `TenantResourceId` <a name="TenantResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId"></a>

```csharp
private string TenantResourceId(string ResourceType, string[] ResourceNames)
```

This function constructs an Azure tenant scope resource ID given the resource type and resource names.

###### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `UniqueString` <a name="UniqueString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString"></a>

```csharp
private string UniqueString(string[] BaseString)
```

This function constructs an Azure equivalent `uniqueString` value.

It is useful for migrating existing resources based on the ARM `uniqueString` function.

###### `BaseString`<sup>Required</sup> <a name="BaseString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString.parameter.baseString"></a>

- *Type:* string[]

The values used in the hash function to create a unique string.

---





