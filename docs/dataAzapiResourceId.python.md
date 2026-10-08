# `dataAzapiResourceId` Submodule <a name="`dataAzapiResourceId` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceId <a name="DataAzapiResourceId" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id azapi_resource_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceId(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  name: str = None,
  parent_id: str = None,
  resource_id: str = None,
  timeouts: DataAzapiResourceIdTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#type DataAzapiResourceId#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.name"></a>

- *Type:* str

The name of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#name DataAzapiResourceId#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#parent_id DataAzapiResourceId#parent_id}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.resourceId"></a>

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#resource_id DataAzapiResourceId#resource_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#timeouts DataAzapiResourceId#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#read DataAzapiResourceId#read}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzapiResourceId resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isConstruct"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceId.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformElement"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceId.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformDataSource"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceId.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceId.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzapiResourceId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzapiResourceId to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzapiResourceId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parts">parts</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.providerNamespace">provider_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference">DataAzapiResourceIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parts`<sup>Required</sup> <a name="parts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parts"></a>

```python
parts: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provider_namespace`<sup>Required</sup> <a name="provider_namespace" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.providerNamespace"></a>

```python
provider_namespace: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.timeouts"></a>

```python
timeouts: DataAzapiResourceIdTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference">DataAzapiResourceIdTimeoutsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzapiResourceIdTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceId.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceIdConfig <a name="DataAzapiResourceIdConfig" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceIdConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  name: str = None,
  parent_id: str = None,
  resource_id: str = None,
  timeouts: DataAzapiResourceIdTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.name">name</a></code> | <code>str</code> | The name of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#type DataAzapiResourceId#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#name DataAzapiResourceId#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#parent_id DataAzapiResourceId#parent_id}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#resource_id DataAzapiResourceId#resource_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdConfig.property.timeouts"></a>

```python
timeouts: DataAzapiResourceIdTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#timeouts DataAzapiResourceId#timeouts}

---

### DataAzapiResourceIdTimeouts <a name="DataAzapiResourceIdTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceIdTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_id#read DataAzapiResourceId#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceIdTimeoutsOutputReference <a name="DataAzapiResourceIdTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_azapi_resource_id

dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzapiResourceIdTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceId.DataAzapiResourceIdTimeouts">DataAzapiResourceIdTimeouts</a>

---



