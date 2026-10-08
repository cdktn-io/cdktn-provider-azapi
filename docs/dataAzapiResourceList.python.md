# `dataAzapiResourceList` Submodule <a name="`dataAzapiResourceList` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceList <a name="DataAzapiResourceList" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list azapi_resource_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceList(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent_id: str,
  type: str,
  headers: typing.Mapping[str] = None,
  query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataAzapiResourceListRetry = None,
  timeouts: DataAzapiResourceListTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.parentId"></a>

- *Type:* str

The ID of the azure resource in which this resource is created.

It supports different kinds of deployment scope for **top level** resources:

* resource group scope: `parent_id` should be the ID of a resource group, it's recommended to manage a resource group by azurerm_resource_group.
* management group scope: `parent_id` should be the ID of a management group, it's recommended to manage a management group by azurerm_management_group.
* extension scope: `parent_id` should be the ID of the resource you're adding the extension to.
* subscription scope: `parent_id` should be like \x60/subscriptions/00000000-0000-0000-0000-000000000000\x60
* tenant scope: `parent_id` should be /

For child level resources, the `parent_id` should be the ID of its parent resource, for example, subnet resource's `parent_id` is the ID of the vnet.

For type `Microsoft.Resources/resourceGroups`, the `parent_id` could be omitted, it defaults to subscription ID specified in provider or the default subscription (You could check the default subscription by azure cli command: `az account show`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#parent_id DataAzapiResourceList#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#type DataAzapiResourceList#type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.headers"></a>

- *Type:* typing.Mapping[str]

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#headers DataAzapiResourceList#headers}

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.queryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#query_parameters DataAzapiResourceList#query_parameters}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.responseExportValues"></a>

- *Type:* typing.Mapping[typing.Any]

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["value"]`, it will set the following HCL object to the computed property output.

  ```text
  {
    "value" = [
  	{
  	  "id" = "/subscriptions/000000/resourceGroups/demo-rg/providers/Microsoft.Automation/automationAccounts/example"
  	  "location" = "eastus2"
  	  "name" = "example"
  	  "properties" = {
  		"creationTime" = "2024-10-11T08:18:38.737+00:00"
  		"disableLocalAuth" = false
  		"lastModifiedTime" = "2024-10-11T08:18:38.737+00:00"
  		"publicNetworkAccess" = true
  	  }
  	  "tags" = {}
  	  "type" = "Microsoft.Automation/AutomationAccounts"
  	}
    ]
  }
  ```
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"values": "value[].{name: name, publicNetworkAccess: properties.publicNetworkAccess}", "names": "value[].name"}`, it will set the following HCL object to the computed property output.

  ```text
  {
  	"names" = [
  		"example",
  		"fredaccount01",
  	]
  	"values" = [
  		{
  		  "name" = "example"
  		  "publicNetworkAccess" = true
  		},
  		{
  		  "name" = "fredaccount01"
  		  "publicNetworkAccess" = null
  		},
  	]
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#response_export_values DataAzapiResourceList#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#retry DataAzapiResourceList#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#timeouts DataAzapiResourceList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetQueryParameters">reset_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#error_message_regex DataAzapiResourceList#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#interval_seconds DataAzapiResourceList#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#max_interval_seconds DataAzapiResourceList#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#multiplier DataAzapiResourceList#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#randomization_factor DataAzapiResourceList#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#read DataAzapiResourceList#read}

---

##### `reset_headers` <a name="reset_headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_parameters` <a name="reset_query_parameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetQueryParameters"></a>

```python
def reset_query_parameters() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzapiResourceList resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceList.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzapiResourceList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzapiResourceList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzapiResourceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference">DataAzapiResourceListRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference">DataAzapiResourceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParametersInput">query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retry"></a>

```python
retry: DataAzapiResourceListRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference">DataAzapiResourceListRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeouts"></a>

```python
timeouts: DataAzapiResourceListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference">DataAzapiResourceListTimeoutsOutputReference</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `query_parameters_input`<sup>Optional</sup> <a name="query_parameters_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParametersInput"></a>

```python
query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retryInput"></a>

```python
retry_input: IResolvable | DataAzapiResourceListRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzapiResourceListTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `query_parameters`<sup>Required</sup> <a name="query_parameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParameters"></a>

```python
query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceListConfig <a name="DataAzapiResourceListConfig" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceListConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent_id: str,
  type: str,
  headers: typing.Mapping[str] = None,
  query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataAzapiResourceListRetry = None,
  timeouts: DataAzapiResourceListTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The ID of the azure resource in which this resource is created.

It supports different kinds of deployment scope for **top level** resources:

* resource group scope: `parent_id` should be the ID of a resource group, it's recommended to manage a resource group by azurerm_resource_group.
* management group scope: `parent_id` should be the ID of a management group, it's recommended to manage a management group by azurerm_management_group.
* extension scope: `parent_id` should be the ID of the resource you're adding the extension to.
* subscription scope: `parent_id` should be like \x60/subscriptions/00000000-0000-0000-0000-000000000000\x60
* tenant scope: `parent_id` should be /

For child level resources, the `parent_id` should be the ID of its parent resource, for example, subnet resource's `parent_id` is the ID of the vnet.

For type `Microsoft.Resources/resourceGroups`, the `parent_id` could be omitted, it defaults to subscription ID specified in provider or the default subscription (You could check the default subscription by azure cli command: `az account show`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#parent_id DataAzapiResourceList#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#type DataAzapiResourceList#type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#headers DataAzapiResourceList#headers}

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.queryParameters"></a>

```python
query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#query_parameters DataAzapiResourceList#query_parameters}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["value"]`, it will set the following HCL object to the computed property output.

  ```text
  {
    "value" = [
  	{
  	  "id" = "/subscriptions/000000/resourceGroups/demo-rg/providers/Microsoft.Automation/automationAccounts/example"
  	  "location" = "eastus2"
  	  "name" = "example"
  	  "properties" = {
  		"creationTime" = "2024-10-11T08:18:38.737+00:00"
  		"disableLocalAuth" = false
  		"lastModifiedTime" = "2024-10-11T08:18:38.737+00:00"
  		"publicNetworkAccess" = true
  	  }
  	  "tags" = {}
  	  "type" = "Microsoft.Automation/AutomationAccounts"
  	}
    ]
  }
  ```
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"values": "value[].{name: name, publicNetworkAccess: properties.publicNetworkAccess}", "names": "value[].name"}`, it will set the following HCL object to the computed property output.

  ```text
  {
  	"names" = [
  		"example",
  		"fredaccount01",
  	]
  	"values" = [
  		{
  		  "name" = "example"
  		  "publicNetworkAccess" = true
  		},
  		{
  		  "name" = "fredaccount01"
  		  "publicNetworkAccess" = null
  		},
  	]
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#response_export_values DataAzapiResourceList#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.retry"></a>

```python
retry: DataAzapiResourceListRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#retry DataAzapiResourceList#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.timeouts"></a>

```python
timeouts: DataAzapiResourceListTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#timeouts DataAzapiResourceList#timeouts}

---

### DataAzapiResourceListRetry <a name="DataAzapiResourceListRetry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceListRetry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#error_message_regex DataAzapiResourceList#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#interval_seconds DataAzapiResourceList#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#max_interval_seconds DataAzapiResourceList#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#multiplier DataAzapiResourceList#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#randomization_factor DataAzapiResourceList#randomization_factor}

---

### DataAzapiResourceListTimeouts <a name="DataAzapiResourceListTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceListTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#read DataAzapiResourceList#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceListRetryOutputReference <a name="DataAzapiResourceListRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceListRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzapiResourceListRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

---


### DataAzapiResourceListTimeoutsOutputReference <a name="DataAzapiResourceListTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_list

dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzapiResourceListTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

---



