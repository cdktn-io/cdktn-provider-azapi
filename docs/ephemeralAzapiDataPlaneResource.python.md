# `ephemeralAzapiDataPlaneResource` Submodule <a name="`ephemeralAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiDataPlaneResource <a name="EphemeralAzapiDataPlaneResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  parent_id: str,
  type: str,
  name: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: EphemeralAzapiDataPlaneResourceRetry = None,
  timeouts: EphemeralAzapiDataPlaneResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.parentId"></a>

- *Type:* str

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts"></a>

```python
def put_timeouts(
  open: str = None
) -> None
```

###### `open`<sup>Optional</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts.parameter.open"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body">body</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body"></a>

```python
body: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry"></a>

```python
retry: EphemeralAzapiDataPlaneResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts"></a>

```python
timeouts: EphemeralAzapiDataPlaneResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput"></a>

```python
retry_input: IResolvable | EphemeralAzapiDataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | EphemeralAzapiDataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiDataPlaneResourceConfig <a name="EphemeralAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  parent_id: str,
  type: str,
  name: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: EphemeralAzapiDataPlaneResourceRetry = None,
  timeouts: EphemeralAzapiDataPlaneResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry"></a>

```python
retry: EphemeralAzapiDataPlaneResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts"></a>

```python
timeouts: EphemeralAzapiDataPlaneResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}

---

### EphemeralAzapiDataPlaneResourceRetry <a name="EphemeralAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry(
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
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}

---

### EphemeralAzapiDataPlaneResourceTimeouts <a name="EphemeralAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts(
  open: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open">open</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `open`<sup>Optional</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open"></a>

```python
open: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiDataPlaneResourceRetryOutputReference <a name="EphemeralAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralAzapiDataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---


### EphemeralAzapiDataPlaneResourceTimeoutsOutputReference <a name="EphemeralAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import ephemeral_azapi_data_plane_resource

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen">reset_open</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_open` <a name="reset_open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen"></a>

```python
def reset_open() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput">open_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open">open</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `open_input`<sup>Optional</sup> <a name="open_input" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput"></a>

```python
open_input: str
```

- *Type:* str

---

##### `open`<sup>Required</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open"></a>

```python
open: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralAzapiDataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---



