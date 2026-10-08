# `resource` Submodule <a name="`resource` Submodule" id="@cdktn/provider-azapi.resource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resource <a name="Resource" id="@cdktn/provider-azapi.resource.Resource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource azapi_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.Resource.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.Resource(
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
  body: typing.Mapping[typing.Any] = None,
  create_headers: typing.Mapping[str] = None,
  create_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  delete_headers: typing.Mapping[str] = None,
  delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  identity: IResolvable | typing.List[ResourceIdentity] = None,
  ignore_body_changes: typing.List[str] = None,
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  ignore_null_property: bool | IResolvable = None,
  ignore_other_items_in_list: typing.List[str] = None,
  list_unique_id_property: typing.Mapping[str] = None,
  location: str = None,
  locks: typing.List[str] = None,
  name: str = None,
  parent_id: str = None,
  read_headers: typing.Mapping[str] = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  replace_triggers_refs: typing.List[str] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: ResourceRetry = None,
  schema_validation_enabled: bool | IResolvable = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.createQueryParameters">create_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.identity">identity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]</code> | identity block. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreBodyChanges">ignore_body_changes</a></code> | <code>typing.List[str]</code> | A list of paths in the resource body whose changes should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreNullProperty">ignore_null_property</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to `true`, the provider will ignore properties whose values are `null` in the `body`. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.schemaValidationEnabled">schema_validation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether enabled the validation on `type` and `body` with embedded schema. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags which should be assigned to the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.body"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#body Resource#body}

---

##### `create_headers`<sup>Optional</sup> <a name="create_headers" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.createHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_headers Resource#create_headers}

---

##### `create_query_parameters`<sup>Optional</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.createQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_query_parameters Resource#create_query_parameters}

---

##### `delete_headers`<sup>Optional</sup> <a name="delete_headers" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.deleteHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_headers Resource#delete_headers}

---

##### `delete_query_parameters`<sup>Optional</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.deleteQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_query_parameters Resource#delete_query_parameters}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.identity"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity Resource#identity}

---

##### `ignore_body_changes`<sup>Optional</sup> <a name="ignore_body_changes" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreBodyChanges"></a>

- *Type:* typing.List[str]

A list of paths in the resource body whose changes should be ignored.

Prefer Terraform's `lifecycle.ignore_changes` when possible. Use this argument only when the paths must be derived from variables or other non-static values. Changes to this argument take effect only after an apply because its value is stored in provider-private state. Paths use dot notation, for example `properties.sku.name`. Individual list items cannot be targeted, ignore the entire list property instead. Configuration changes at an ignored path will not be sent to Azure until that path is removed from this list. This write-only argument requires Terraform 1.11 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_body_changes Resource#ignore_body_changes}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreCasing"></a>

- *Type:* bool | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_casing Resource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreMissingProperty"></a>

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_missing_property Resource#ignore_missing_property}

---

##### `ignore_null_property`<sup>Optional</sup> <a name="ignore_null_property" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreNullProperty"></a>

- *Type:* bool | cdktn.IResolvable

When set to `true`, the provider will ignore properties whose values are `null` in the `body`.

These properties will not be included in the request body sent to the API, and the difference will not be shown in the plan output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_null_property Resource#ignore_null_property}

---

##### `ignore_other_items_in_list`<sup>Optional</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.ignoreOtherItemsInList"></a>

- *Type:* typing.List[str]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_other_items_in_list Resource#ignore_other_items_in_list}

---

##### `list_unique_id_property`<sup>Optional</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.listUniqueIdProperty"></a>

- *Type:* typing.Mapping[str]

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#list_unique_id_property Resource#list_unique_id_property}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.location"></a>

- *Type:* str

The location of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#location Resource#location}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.locks"></a>

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#locks Resource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#name Resource#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#parent_id Resource#parent_id}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.readHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_headers Resource#read_headers}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.readQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_query_parameters Resource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.replaceTriggersExternalValues"></a>

- *Type:* typing.Mapping[typing.Any]

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_resource" "example" {
  name      = var.name
  type      = "Microsoft.Network/publicIPAddresses@2023-11-01"
  parent_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example"
  body = {
    properties = {
      sku   = var.sku
      zones = var.zones
    }
  }

  replace_triggers_external_values = [
    var.sku,
    var.zones,
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_external_values Resource#replace_triggers_external_values}

---

##### `replace_triggers_refs`<sup>Optional</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.replaceTriggersRefs"></a>

- *Type:* typing.List[str]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_refs Resource#replace_triggers_refs}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#response_export_values Resource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#retry Resource#retry}

---

##### `schema_validation_enabled`<sup>Optional</sup> <a name="schema_validation_enabled" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.schemaValidationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether enabled the validation on `type` and `body` with embedded schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#schema_validation_enabled Resource#schema_validation_enabled}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.sensitiveBody"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body Resource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body_version Resource#sensitive_body_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A mapping of tags which should be assigned to the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#tags Resource#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#timeouts Resource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.updateHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_headers Resource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.updateQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_query_parameters Resource#update_query_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateHeaders">reset_create_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters">reset_create_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders">reset_delete_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters">reset_delete_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges">reset_ignore_body_changes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing">reset_ignore_casing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty">reset_ignore_missing_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty">reset_ignore_null_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList">reset_ignore_other_items_in_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty">reset_list_unique_id_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadHeaders">reset_read_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters">reset_read_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues">reset_replace_triggers_external_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs">reset_replace_triggers_refs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled">reset_schema_validation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBody">reset_sensitive_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion">reset_sensitive_body_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders">reset_update_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters">reset_update_query_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resource.Resource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.resource.Resource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resource.Resource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.resource.Resource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.resource.Resource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.resource.Resource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.resource.Resource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azapi.resource.Resource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azapi.resource.Resource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azapi.resource.Resource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azapi.resource.Resource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azapi.resource.Resource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktn/provider-azapi.resource.Resource.putIdentity"></a>

```python
def put_identity(
  value: IResolvable | typing.List[ResourceIdentity]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putIdentity.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.resource.Resource.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#error_message_regex Resource#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#interval_seconds Resource#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#max_interval_seconds Resource#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#multiplier Resource#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#randomization_factor Resource#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.resource.Resource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create Resource#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete Resource#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read Resource#read}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update Resource#update}

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-azapi.resource.Resource.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_create_headers` <a name="reset_create_headers" id="@cdktn/provider-azapi.resource.Resource.resetCreateHeaders"></a>

```python
def reset_create_headers() -> None
```

##### `reset_create_query_parameters` <a name="reset_create_query_parameters" id="@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters"></a>

```python
def reset_create_query_parameters() -> None
```

##### `reset_delete_headers` <a name="reset_delete_headers" id="@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders"></a>

```python
def reset_delete_headers() -> None
```

##### `reset_delete_query_parameters` <a name="reset_delete_query_parameters" id="@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters"></a>

```python
def reset_delete_query_parameters() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-azapi.resource.Resource.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_ignore_body_changes` <a name="reset_ignore_body_changes" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges"></a>

```python
def reset_ignore_body_changes() -> None
```

##### `reset_ignore_casing` <a name="reset_ignore_casing" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing"></a>

```python
def reset_ignore_casing() -> None
```

##### `reset_ignore_missing_property` <a name="reset_ignore_missing_property" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty"></a>

```python
def reset_ignore_missing_property() -> None
```

##### `reset_ignore_null_property` <a name="reset_ignore_null_property" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty"></a>

```python
def reset_ignore_null_property() -> None
```

##### `reset_ignore_other_items_in_list` <a name="reset_ignore_other_items_in_list" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList"></a>

```python
def reset_ignore_other_items_in_list() -> None
```

##### `reset_list_unique_id_property` <a name="reset_list_unique_id_property" id="@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty"></a>

```python
def reset_list_unique_id_property() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-azapi.resource.Resource.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_locks` <a name="reset_locks" id="@cdktn/provider-azapi.resource.Resource.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.resource.Resource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktn/provider-azapi.resource.Resource.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_read_headers` <a name="reset_read_headers" id="@cdktn/provider-azapi.resource.Resource.resetReadHeaders"></a>

```python
def reset_read_headers() -> None
```

##### `reset_read_query_parameters` <a name="reset_read_query_parameters" id="@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters"></a>

```python
def reset_read_query_parameters() -> None
```

##### `reset_replace_triggers_external_values` <a name="reset_replace_triggers_external_values" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues"></a>

```python
def reset_replace_triggers_external_values() -> None
```

##### `reset_replace_triggers_refs` <a name="reset_replace_triggers_refs" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs"></a>

```python
def reset_replace_triggers_refs() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.resource.Resource.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.resource.Resource.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_schema_validation_enabled` <a name="reset_schema_validation_enabled" id="@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled"></a>

```python
def reset_schema_validation_enabled() -> None
```

##### `reset_sensitive_body` <a name="reset_sensitive_body" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBody"></a>

```python
def reset_sensitive_body() -> None
```

##### `reset_sensitive_body_version` <a name="reset_sensitive_body_version" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion"></a>

```python
def reset_sensitive_body_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azapi.resource.Resource.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.resource.Resource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_headers` <a name="reset_update_headers" id="@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders"></a>

```python
def reset_update_headers() -> None
```

##### `reset_update_query_parameters` <a name="reset_update_query_parameters" id="@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters"></a>

```python
def reset_update_query_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.resource.Resource.isConstruct"></a>

```python
from cdktn_provider_azapi import resource

resource.Resource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement"></a>

```python
from cdktn_provider_azapi import resource

resource.Resource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource"></a>

```python
from cdktn_provider_azapi import resource

resource.Resource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import resource

resource.Resource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Resource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Resource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.bodyInput">body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeadersInput">create_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput">create_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput">delete_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput">delete_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identityInput">identity_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput">ignore_body_changes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput">ignore_casing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput">ignore_missing_property_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput">ignore_null_property_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput">ignore_other_items_in_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput">list_unique_id_property_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locksInput">locks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeadersInput">read_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput">read_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput">replace_triggers_external_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput">replace_triggers_refs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput">schema_validation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput">sensitive_body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput">sensitive_body_version_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput">update_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput">update_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParameters">create_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges">ignore_body_changes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty">ignore_null_property</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locks">locks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled">schema_validation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.resource.Resource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.resource.Resource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.Resource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.resource.Resource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resource.Resource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resource.Resource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resource.Resource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resource.Resource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resource.Resource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resource.Resource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azapi.resource.Resource.property.identity"></a>

```python
identity: ResourceIdentityList
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.resource.Resource.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.resource.Resource.property.retry"></a>

```python
retry: ResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.resource.Resource.property.timeouts"></a>

```python
timeouts: ResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-azapi.resource.Resource.property.bodyInput"></a>

```python
body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `create_headers_input`<sup>Optional</sup> <a name="create_headers_input" id="@cdktn/provider-azapi.resource.Resource.property.createHeadersInput"></a>

```python
create_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_query_parameters_input`<sup>Optional</sup> <a name="create_query_parameters_input" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput"></a>

```python
create_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `delete_headers_input`<sup>Optional</sup> <a name="delete_headers_input" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput"></a>

```python
delete_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_query_parameters_input`<sup>Optional</sup> <a name="delete_query_parameters_input" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput"></a>

```python
delete_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-azapi.resource.Resource.property.identityInput"></a>

```python
identity_input: IResolvable | typing.List[ResourceIdentity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]

---

##### `ignore_body_changes_input`<sup>Optional</sup> <a name="ignore_body_changes_input" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput"></a>

```python
ignore_body_changes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_casing_input`<sup>Optional</sup> <a name="ignore_casing_input" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput"></a>

```python
ignore_casing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property_input`<sup>Optional</sup> <a name="ignore_missing_property_input" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput"></a>

```python
ignore_missing_property_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_null_property_input`<sup>Optional</sup> <a name="ignore_null_property_input" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput"></a>

```python
ignore_null_property_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_other_items_in_list_input`<sup>Optional</sup> <a name="ignore_other_items_in_list_input" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput"></a>

```python
ignore_other_items_in_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `list_unique_id_property_input`<sup>Optional</sup> <a name="list_unique_id_property_input" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput"></a>

```python
list_unique_id_property_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azapi.resource.Resource.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="@cdktn/provider-azapi.resource.Resource.property.locksInput"></a>

```python
locks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.resource.Resource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.resource.Resource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `read_headers_input`<sup>Optional</sup> <a name="read_headers_input" id="@cdktn/provider-azapi.resource.Resource.property.readHeadersInput"></a>

```python
read_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_query_parameters_input`<sup>Optional</sup> <a name="read_query_parameters_input" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput"></a>

```python
read_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values_input`<sup>Optional</sup> <a name="replace_triggers_external_values_input" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput"></a>

```python
replace_triggers_external_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `replace_triggers_refs_input`<sup>Optional</sup> <a name="replace_triggers_refs_input" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput"></a>

```python
replace_triggers_refs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.resource.Resource.property.retryInput"></a>

```python
retry_input: IResolvable | ResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---

##### `schema_validation_enabled_input`<sup>Optional</sup> <a name="schema_validation_enabled_input" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput"></a>

```python
schema_validation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sensitive_body_input`<sup>Optional</sup> <a name="sensitive_body_input" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput"></a>

```python
sensitive_body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version_input`<sup>Optional</sup> <a name="sensitive_body_version_input" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput"></a>

```python
sensitive_body_version_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azapi.resource.Resource.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.resource.Resource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.resource.Resource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_headers_input`<sup>Optional</sup> <a name="update_headers_input" id="@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput"></a>

```python
update_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters_input`<sup>Optional</sup> <a name="update_query_parameters_input" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput"></a>

```python
update_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.resource.Resource.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `create_headers`<sup>Required</sup> <a name="create_headers" id="@cdktn/provider-azapi.resource.Resource.property.createHeaders"></a>

```python
create_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_query_parameters`<sup>Required</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParameters"></a>

```python
create_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `delete_headers`<sup>Required</sup> <a name="delete_headers" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeaders"></a>

```python
delete_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_query_parameters`<sup>Required</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters"></a>

```python
delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### ~~`ignore_body_changes`~~<sup>Required</sup> <a name="ignore_body_changes" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
ignore_body_changes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_casing`<sup>Required</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property`<sup>Required</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_null_property`<sup>Required</sup> <a name="ignore_null_property" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty"></a>

```python
ignore_null_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_other_items_in_list`<sup>Required</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList"></a>

```python
ignore_other_items_in_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `list_unique_id_property`<sup>Required</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty"></a>

```python
list_unique_id_property: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azapi.resource.Resource.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.resource.Resource.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.resource.Resource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.resource.Resource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `read_headers`<sup>Required</sup> <a name="read_headers" id="@cdktn/provider-azapi.resource.Resource.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_query_parameters`<sup>Required</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values`<sup>Required</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues"></a>

```python
replace_triggers_external_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `replace_triggers_refs`<sup>Required</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs"></a>

```python
replace_triggers_refs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `schema_validation_enabled`<sup>Required</sup> <a name="schema_validation_enabled" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled"></a>

```python
schema_validation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### ~~`sensitive_body`~~<sup>Required</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version`<sup>Required</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azapi.resource.Resource.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.Resource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_headers`<sup>Required</sup> <a name="update_headers" id="@cdktn/provider-azapi.resource.Resource.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters`<sup>Required</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.resource.Resource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceConfig <a name="ResourceConfig" id="@cdktn/provider-azapi.resource.ResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceConfig.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  body: typing.Mapping[typing.Any] = None,
  create_headers: typing.Mapping[str] = None,
  create_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  delete_headers: typing.Mapping[str] = None,
  delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  identity: IResolvable | typing.List[ResourceIdentity] = None,
  ignore_body_changes: typing.List[str] = None,
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  ignore_null_property: bool | IResolvable = None,
  ignore_other_items_in_list: typing.List[str] = None,
  list_unique_id_property: typing.Mapping[str] = None,
  location: str = None,
  locks: typing.List[str] = None,
  name: str = None,
  parent_id: str = None,
  read_headers: typing.Mapping[str] = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  replace_triggers_refs: typing.List[str] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: ResourceRetry = None,
  schema_validation_enabled: bool | IResolvable = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters">create_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.identity">identity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]</code> | identity block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges">ignore_body_changes</a></code> | <code>typing.List[str]</code> | A list of paths in the resource body whose changes should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty">ignore_null_property</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to `true`, the provider will ignore properties whose values are `null` in the `body`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.location">location</a></code> | <code>str</code> | The location of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled">schema_validation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether enabled the validation on `type` and `body` with embedded schema. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags which should be assigned to the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resource.ResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resource.ResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resource.ResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resource.ResourceConfig.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#body Resource#body}

---

##### `create_headers`<sup>Optional</sup> <a name="create_headers" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders"></a>

```python
create_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_headers Resource#create_headers}

---

##### `create_query_parameters`<sup>Optional</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters"></a>

```python
create_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_query_parameters Resource#create_query_parameters}

---

##### `delete_headers`<sup>Optional</sup> <a name="delete_headers" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders"></a>

```python
delete_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_headers Resource#delete_headers}

---

##### `delete_query_parameters`<sup>Optional</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters"></a>

```python
delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_query_parameters Resource#delete_query_parameters}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azapi.resource.ResourceConfig.property.identity"></a>

```python
identity: IResolvable | typing.List[ResourceIdentity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity Resource#identity}

---

##### `ignore_body_changes`<sup>Optional</sup> <a name="ignore_body_changes" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges"></a>

```python
ignore_body_changes: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths in the resource body whose changes should be ignored.

Prefer Terraform's `lifecycle.ignore_changes` when possible. Use this argument only when the paths must be derived from variables or other non-static values. Changes to this argument take effect only after an apply because its value is stored in provider-private state. Paths use dot notation, for example `properties.sku.name`. Individual list items cannot be targeted, ignore the entire list property instead. Configuration changes at an ignored path will not be sent to Azure until that path is removed from this list. This write-only argument requires Terraform 1.11 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_body_changes Resource#ignore_body_changes}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_casing Resource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_missing_property Resource#ignore_missing_property}

---

##### `ignore_null_property`<sup>Optional</sup> <a name="ignore_null_property" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty"></a>

```python
ignore_null_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to `true`, the provider will ignore properties whose values are `null` in the `body`.

These properties will not be included in the request body sent to the API, and the difference will not be shown in the plan output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_null_property Resource#ignore_null_property}

---

##### `ignore_other_items_in_list`<sup>Optional</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList"></a>

```python
ignore_other_items_in_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_other_items_in_list Resource#ignore_other_items_in_list}

---

##### `list_unique_id_property`<sup>Optional</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty"></a>

```python
list_unique_id_property: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#list_unique_id_property Resource#list_unique_id_property}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-azapi.resource.ResourceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#location Resource#location}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resource.ResourceConfig.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#locks Resource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.resource.ResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#name Resource#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.resource.ResourceConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#parent_id Resource#parent_id}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_headers Resource#read_headers}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_query_parameters Resource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues"></a>

```python
replace_triggers_external_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_resource" "example" {
  name      = var.name
  type      = "Microsoft.Network/publicIPAddresses@2023-11-01"
  parent_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example"
  body = {
    properties = {
      sku   = var.sku
      zones = var.zones
    }
  }

  replace_triggers_external_values = [
    var.sku,
    var.zones,
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_external_values Resource#replace_triggers_external_values}

---

##### `replace_triggers_refs`<sup>Optional</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs"></a>

```python
replace_triggers_refs: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_refs Resource#replace_triggers_refs}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#response_export_values Resource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resource.ResourceConfig.property.retry"></a>

```python
retry: ResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#retry Resource#retry}

---

##### `schema_validation_enabled`<sup>Optional</sup> <a name="schema_validation_enabled" id="@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled"></a>

```python
schema_validation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether enabled the validation on `type` and `body` with embedded schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#schema_validation_enabled Resource#schema_validation_enabled}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody"></a>

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body Resource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body_version Resource#sensitive_body_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azapi.resource.ResourceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of tags which should be assigned to the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#tags Resource#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts"></a>

```python
timeouts: ResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#timeouts Resource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_headers Resource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_query_parameters Resource#update_query_parameters}

---

### ResourceIdentity <a name="ResourceIdentity" id="@cdktn/provider-azapi.resource.ResourceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceIdentity.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.type">type</a></code> | <code>str</code> | The Type of Identity which should be used for this azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | A list of User Managed Identity ID's which should be assigned to the azure resource. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

The Type of Identity which should be used for this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of User Managed Identity ID's which should be assigned to the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity_ids Resource#identity_ids}

---

### ResourceRetry <a name="ResourceRetry" id="@cdktn/provider-azapi.resource.ResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceRetry.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceRetry(
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
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#error_message_regex Resource#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#interval_seconds Resource#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#max_interval_seconds Resource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#multiplier Resource#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#randomization_factor Resource#randomization_factor}

---

### ResourceTimeouts <a name="ResourceTimeouts" id="@cdktn/provider-azapi.resource.ResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create Resource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete Resource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read Resource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update Resource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceIdentityList <a name="ResourceIdentityList" id="@cdktn/provider-azapi.resource.ResourceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resource.ResourceIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ResourceIdentity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>]

---


### ResourceIdentityOutputReference <a name="ResourceIdentityOutputReference" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>

---


### ResourceRetryOutputReference <a name="ResourceRetryOutputReference" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---


### ResourceTimeoutsOutputReference <a name="ResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import resource

resource.ResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---



