# `dataAzapiDataPlaneResource` Submodule <a name="`dataAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiDataPlaneResource <a name="DataAzapiDataPlaneResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource(
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
  name: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataAzapiDataPlaneResourceRetry = None,
  timeouts: DataAzapiDataPlaneResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.parentId"></a>

- *Type:* str

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#parent_id DataAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#type DataAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#name DataAzapiDataPlaneResource#name}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.responseExportValues"></a>

- *Type:* typing.Mapping[typing.Any]

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property output.

  ```text
  {
  	properties = {
  		loginServer = "registry1.azurecr.io"
  		policies = {
  			quarantinePolicy = {
  				status = "disabled"
  			}
  		}
  	}
  }
  ```
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property output.

  ```text
  {
  	"login_server" = "registry1.azurecr.io"
  	"quarantine_status" = "disabled"
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#response_export_values DataAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#retry DataAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#timeouts DataAzapiDataPlaneResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#error_message_regex DataAzapiDataPlaneResource#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#interval_seconds DataAzapiDataPlaneResource#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#max_interval_seconds DataAzapiDataPlaneResource#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#multiplier DataAzapiDataPlaneResource#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#randomization_factor DataAzapiDataPlaneResource#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#read DataAzapiDataPlaneResource#read}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzapiDataPlaneResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzapiDataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiDataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body">body</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body"></a>

```python
body: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry"></a>

```python
retry: DataAzapiDataPlaneResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts"></a>

```python
timeouts: DataAzapiDataPlaneResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput"></a>

```python
retry_input: IResolvable | DataAzapiDataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzapiDataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiDataPlaneResourceConfig <a name="DataAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent_id: str,
  type: str,
  name: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataAzapiDataPlaneResourceRetry = None,
  timeouts: DataAzapiDataPlaneResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#parent_id DataAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#type DataAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#name DataAzapiDataPlaneResource#name}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property output.

  ```text
  {
  	properties = {
  		loginServer = "registry1.azurecr.io"
  		policies = {
  			quarantinePolicy = {
  				status = "disabled"
  			}
  		}
  	}
  }
  ```
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property output.

  ```text
  {
  	"login_server" = "registry1.azurecr.io"
  	"quarantine_status" = "disabled"
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#response_export_values DataAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry"></a>

```python
retry: DataAzapiDataPlaneResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#retry DataAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts"></a>

```python
timeouts: DataAzapiDataPlaneResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#timeouts DataAzapiDataPlaneResource#timeouts}

---

### DataAzapiDataPlaneResourceRetry <a name="DataAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry(
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#error_message_regex DataAzapiDataPlaneResource#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#interval_seconds DataAzapiDataPlaneResource#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#max_interval_seconds DataAzapiDataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#multiplier DataAzapiDataPlaneResource#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#randomization_factor DataAzapiDataPlaneResource#randomization_factor}

---

### DataAzapiDataPlaneResourceTimeouts <a name="DataAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#read DataAzapiDataPlaneResource#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiDataPlaneResourceRetryOutputReference <a name="DataAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzapiDataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---


### DataAzapiDataPlaneResourceTimeoutsOutputReference <a name="DataAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_data_plane_resource

dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzapiDataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---



