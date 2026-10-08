# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azapi.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzapiProviderFunctions <a name="AzapiProviderFunctions" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions"></a>

Provider-defined functions of the azapi provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/providerfunctions"

providerfunctions.NewAzapiProviderFunctions(providerLocalName *string) AzapiProviderFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>*string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* *string

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

```go
func BuildResourceId(parentId *string, resourceType *string, name *string) *string
```

This function constructs an Azure resource ID given the parent ID, resource type, and resource name.

It is useful for creating resource IDs for top-level and nested resources within a specific scope.

###### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.parentId"></a>

- *Type:* *string

The parent ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.name"></a>

- *Type:* *string

The name of the Azure resource.

---

##### `ExtensionResourceId` <a name="ExtensionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId"></a>

```go
func ExtensionResourceId(baseResourceId *string, resourceType *string, resourceNames *[]*string) *string
```

This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names.

###### `baseResourceId`<sup>Required</sup> <a name="baseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.baseResourceId"></a>

- *Type:* *string

The base resource ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceNames"></a>

- *Type:* *[]*string

The list of resource names to construct the extension resource ID.

---

##### `ManagementGroupResourceId` <a name="ManagementGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId"></a>

```go
func ManagementGroupResourceId(managementGroupName *string, resourceType *string, resourceNames *[]*string) *string
```

This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names.

###### `managementGroupName`<sup>Required</sup> <a name="managementGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.managementGroupName"></a>

- *Type:* *string

The name of the management group.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceNames"></a>

- *Type:* *[]*string

The list of resource names to construct the resource ID.

---

##### `ParseResourceId` <a name="ParseResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId"></a>

```go
func ParseResourceId(resourceType *string, resourceId *string) IResolvable
```

This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceId"></a>

- *Type:* *string

The resource ID of the Azure resource to parse.

---

##### `ResourceGroupResourceId` <a name="ResourceGroupResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId"></a>

```go
func ResourceGroupResourceId(subscriptionId *string, resourceGroupName *string, resourceType *string, resourceNames *[]*string) *string
```

This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names.

###### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.subscriptionId"></a>

- *Type:* *string

The subscription ID of the Azure resource.

---

###### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceGroupName"></a>

- *Type:* *string

The name of the resource group.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceNames"></a>

- *Type:* *[]*string

The list of resource names to construct the resource ID.

---

##### `Snake2Camel` <a name="Snake2Camel" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel"></a>

```go
func Snake2Camel(input interface{}) IResolvable
```

Converts all keys in the input from snake_case to camelCase.

Retains the original structure and values.

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel.parameter.input"></a>

- *Type:* interface{}

The input value to convert from snake_case to camelCase.

Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.

---

##### `SubscriptionResourceId` <a name="SubscriptionResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId"></a>

```go
func SubscriptionResourceId(subscriptionId *string, resourceType *string, resourceNames *[]*string) *string
```

This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names.

###### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.subscriptionId"></a>

- *Type:* *string

The subscription ID of the Azure resource.

---

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceNames"></a>

- *Type:* *[]*string

The list of resource names to construct the resource ID.

---

##### `TenantResourceId` <a name="TenantResourceId" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId"></a>

```go
func TenantResourceId(resourceType *string, resourceNames *[]*string) *string
```

This function constructs an Azure tenant scope resource ID given the resource type and resource names.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceType"></a>

- *Type:* *string

The resource type of the Azure resource.

---

###### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceNames"></a>

- *Type:* *[]*string

The list of resource names to construct the resource ID.

---

##### `UniqueString` <a name="UniqueString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString"></a>

```go
func UniqueString(baseString *[]*string) *string
```

This function constructs an Azure equivalent `uniqueString` value.

It is useful for migrating existing resources based on the ARM `uniqueString` function.

###### `baseString`<sup>Required</sup> <a name="baseString" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString.parameter.baseString"></a>

- *Type:* *[]*string

The values used in the hash function to create a unique string.

---





