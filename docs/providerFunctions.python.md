# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-azapi.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AzapiProviderFunctions <a name="AzapiProviderFunctions" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions"></a>

Provider-defined functions of the azapi provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer"></a>

```python
from cdktn_provider_azapi import provider_functions

providerFunctions.AzapiProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId">build_resource_id</a></code> | This function constructs an Azure resource ID given the parent ID, resource type, and resource name. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId">extension_resource_id</a></code> | This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId">management_group_resource_id</a></code> | This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId">parse_resource_id</a></code> | This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId">resource_group_resource_id</a></code> | This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel">snake2_camel</a></code> | Converts all keys in the input from snake_case to camelCase. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId">subscription_resource_id</a></code> | This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId">tenant_resource_id</a></code> | This function constructs an Azure tenant scope resource ID given the resource type and resource names. |
| <code><a href="#@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString">unique_string</a></code> | This function constructs an Azure equivalent `uniqueString` value. |

---

##### `build_resource_id` <a name="build_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId"></a>

```python
def build_resource_id(
  parent_id: str,
  resource_type: str,
  name: str
) -> str
```

This function constructs an Azure resource ID given the parent ID, resource type, and resource name.

It is useful for creating resource IDs for top-level and nested resources within a specific scope.

###### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.parentId"></a>

- *Type:* str

The parent ID of the Azure resource.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.buildResourceId.parameter.name"></a>

- *Type:* str

The name of the Azure resource.

---

##### `extension_resource_id` <a name="extension_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId"></a>

```python
def extension_resource_id(
  base_resource_id: str,
  resource_type: str,
  resource_names: typing.List[str]
) -> str
```

This function constructs an Azure extension resource ID given the base resource ID, resource type, and additional resource names.

###### `base_resource_id`<sup>Required</sup> <a name="base_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.baseResourceId"></a>

- *Type:* str

The base resource ID of the Azure resource.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.extensionResourceId.parameter.resourceNames"></a>

- *Type:* typing.List[str]

The list of resource names to construct the extension resource ID.

---

##### `management_group_resource_id` <a name="management_group_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId"></a>

```python
def management_group_resource_id(
  management_group_name: str,
  resource_type: str,
  resource_names: typing.List[str]
) -> str
```

This function constructs an Azure management group scope resource ID given the management group name, resource type, and resource names.

###### `management_group_name`<sup>Required</sup> <a name="management_group_name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.managementGroupName"></a>

- *Type:* str

The name of the management group.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.managementGroupResourceId.parameter.resourceNames"></a>

- *Type:* typing.List[str]

The list of resource names to construct the resource ID.

---

##### `parse_resource_id` <a name="parse_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId"></a>

```python
def parse_resource_id(
  resource_type: str,
  resource_id: str
) -> IResolvable
```

This function takes an Azure resource ID and a resource type and parses the ID into its individual components such as subscription ID, resource group name, provider namespace, and other parts.

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.parseResourceId.parameter.resourceId"></a>

- *Type:* str

The resource ID of the Azure resource to parse.

---

##### `resource_group_resource_id` <a name="resource_group_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId"></a>

```python
def resource_group_resource_id(
  subscription_id: str,
  resource_group_name: str,
  resource_type: str,
  resource_names: typing.List[str]
) -> str
```

This function constructs an Azure resource group scope resource ID given the subscription ID, resource group name, resource type, and resource names.

###### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.subscriptionId"></a>

- *Type:* str

The subscription ID of the Azure resource.

---

###### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceGroupName"></a>

- *Type:* str

The name of the resource group.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.resourceGroupResourceId.parameter.resourceNames"></a>

- *Type:* typing.List[str]

The list of resource names to construct the resource ID.

---

##### `snake2_camel` <a name="snake2_camel" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel"></a>

```python
def snake2_camel(
  input: typing.Any = None
) -> IResolvable
```

Converts all keys in the input from snake_case to camelCase.

Retains the original structure and values.

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.snake2Camel.parameter.input"></a>

- *Type:* typing.Any

The input value to convert from snake_case to camelCase.

Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.

---

##### `subscription_resource_id` <a name="subscription_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId"></a>

```python
def subscription_resource_id(
  subscription_id: str,
  resource_type: str,
  resource_names: typing.List[str]
) -> str
```

This function constructs an Azure subscription scope resource ID given the subscription ID, resource type, and resource names.

###### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.subscriptionId"></a>

- *Type:* str

The subscription ID of the Azure resource.

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.subscriptionResourceId.parameter.resourceNames"></a>

- *Type:* typing.List[str]

The list of resource names to construct the resource ID.

---

##### `tenant_resource_id` <a name="tenant_resource_id" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId"></a>

```python
def tenant_resource_id(
  resource_type: str,
  resource_names: typing.List[str]
) -> str
```

This function constructs an Azure tenant scope resource ID given the resource type and resource names.

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceType"></a>

- *Type:* str

The resource type of the Azure resource.

---

###### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.tenantResourceId.parameter.resourceNames"></a>

- *Type:* typing.List[str]

The list of resource names to construct the resource ID.

---

##### `unique_string` <a name="unique_string" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString"></a>

```python
def unique_string(
  base_string: typing.List[str]
) -> str
```

This function constructs an Azure equivalent `uniqueString` value.

It is useful for migrating existing resources based on the ARM `uniqueString` function.

###### `base_string`<sup>Required</sup> <a name="base_string" id="@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions.uniqueString.parameter.baseString"></a>

- *Type:* typing.List[str]

The values used in the hash function to create a unique string.

---





