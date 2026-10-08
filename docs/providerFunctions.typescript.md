# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azapi.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzapiProviderFunctions <a name="AzapiProviderFunctions" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions"></a>

Provider-defined functions of the azapi provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer"></a>

```typescript
import { providerFunctions } from '@cdktn/provider-azapi'

new providerFunctions.AzapiProviderFunctions(providerLocalName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId">buildResourceId</a></code> | This function constructs an Azure resource ID given the parent ID, resource type, and resource name. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId">extensionResourceId</a></code> | This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId">managementGroupResourceId</a></code> | This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId">parseResourceId</a></code> | This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId">resourceGroupResourceId</a></code> | This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel">snake2Camel</a></code> | Converts all keys in the input from snake_case to camelCase. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId">subscriptionResourceId</a></code> | This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId">tenantResourceId</a></code> | This function constructs an Azure tenant scope resource ID given the resource type and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString">uniqueString</a></code> | This function constructs an Azure equivalent `uniqueString` value. |

---

##### `buildResourceId` <a name="buildResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId"></a>

```typescript
public buildResourceId(parentId: string, resourceType: string, name: string): string
```

This function constructs an Azure resource ID given the parent ID, resource type, and resource name.

It is useful for creating resource IDs for top-level and nested resources within a specific scope.

###### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.parentId"></a>

- *Type:* string

The parent ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.name"></a>

- *Type:* string

The name of the Azure resource.

---

##### `extensionResourceId` <a name="extensionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId"></a>

```typescript
public extensionResourceId(baseResourceId: string, resourceType: string, resourceNames: string[]): string
```

This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names.

###### `baseResourceId`<sup>Required</sup> <a name="baseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.baseResourceId"></a>

- *Type:* string

The base resource ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the extension resource ID.

---

##### `managementGroupResourceId` <a name="managementGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId"></a>

```typescript
public managementGroupResourceId(managementGroupName: string, resourceType: string, resourceNames: string[]): string
```

This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names.

###### `managementGroupName`<sup>Required</sup> <a name="managementGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.managementGroupName"></a>

- *Type:* string

The name of the management group.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `parseResourceId` <a name="parseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId"></a>

```typescript
public parseResourceId(resourceType: string, resourceId: string): IResolvable
```

This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceId"></a>

- *Type:* string

The resource ID of the Azure resource to parse.

---

##### `resourceGroupResourceId` <a name="resourceGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId"></a>

```typescript
public resourceGroupResourceId(subscriptionId: string, resourceGroupName: string, resourceType: string, resourceNames: string[]): string
```

This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names.

###### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.subscriptionId"></a>

- *Type:* string

The subscription ID of the Azure resource.

---

###### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceGroupName"></a>

- *Type:* string

The name of the resource group.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `snake2Camel` <a name="snake2Camel" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel"></a>

```typescript
public snake2Camel(input?: any): IResolvable
```

Converts all keys in the input from snake_case to camelCase.

Retains the original structure and values.

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel.parameter.input"></a>

- *Type:* any

The input value to convert from snake_case to camelCase.

Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.

---

##### `subscriptionResourceId` <a name="subscriptionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId"></a>

```typescript
public subscriptionResourceId(subscriptionId: string, resourceType: string, resourceNames: string[]): string
```

This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names.

###### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.subscriptionId"></a>

- *Type:* string

The subscription ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `tenantResourceId` <a name="tenantResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId"></a>

```typescript
public tenantResourceId(resourceType: string, resourceNames: string[]): string
```

This function constructs an Azure tenant scope resource ID given the resource type and resource names.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceType"></a>

- *Type:* string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceNames"></a>

- *Type:* string[]

The list of resource names to construct the resource ID.

---

##### `uniqueString` <a name="uniqueString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString"></a>

```typescript
public uniqueString(baseString: string[]): string
```

This function constructs an Azure equivalent `uniqueString` value.

It is useful for migrating existing resources based on the ARM `uniqueString` function.

###### `baseString`<sup>Required</sup> <a name="baseString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString.parameter.baseString"></a>

- *Type:* string[]

The values used in the hash function to create a unique string.

---





