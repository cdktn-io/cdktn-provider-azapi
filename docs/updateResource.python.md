# `updateResource` Submodule <a name="`updateResource` Submodule" id="@cdktn/provider-azapi.updateResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpdateResource <a name="UpdateResource" id="@cdktn/provider-azapi.updateResource.UpdateResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource azapi_update_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResource(
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
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  ignore_other_items_in_list: typing.List[str] = None,
  list_unique_id_property: typing.Mapping[str] = None,
  locks: typing.List[str] = None,
  name: str = None,
  parent_id: str = None,
  read_headers: typing.Mapping[str] = None,
  read_override: UpdateResourceReadOverride = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  resource_id: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: UpdateResourceRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  timeouts: UpdateResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the Azure resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readOverride">read_override</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | Overrides the default `GET` request used to read the resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#type UpdateResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.body"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#body UpdateResource#body}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreCasing"></a>

- *Type:* bool | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_casing UpdateResource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreMissingProperty"></a>

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_missing_property UpdateResource#ignore_missing_property}

---

##### `ignore_other_items_in_list`<sup>Optional</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreOtherItemsInList"></a>

- *Type:* typing.List[str]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_other_items_in_list UpdateResource#ignore_other_items_in_list}

---

##### `list_unique_id_property`<sup>Optional</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.listUniqueIdProperty"></a>

- *Type:* typing.Mapping[str]

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#list_unique_id_property UpdateResource#list_unique_id_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.locks"></a>

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#locks UpdateResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the Azure resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#name UpdateResource#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#parent_id UpdateResource#parent_id}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_headers UpdateResource#read_headers}

---

##### `read_override`<sup>Optional</sup> <a name="read_override" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readOverride"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

Overrides the default `GET` request used to read the resource.

When configured, the provider sends the specified action request instead of `GET` and uses its response for all read processing, including refreshing `body` and `output`. When omitted, the provider reads the resource with `GET`.

~> **Warning:** Do not use `read_override` with sensitive values. Action responses are stored in state through `body` and `output`, and `read_override` cannot be combined with `sensitive_body`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_override UpdateResource#read_override}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_query_parameters UpdateResource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.replaceTriggersExternalValues"></a>

- *Type:* typing.Mapping[typing.Any]

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_update_resource" "example" {
  resource_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.Network/publicIPAddresses/example"
  type        = "Microsoft.Network/publicIPAddresses@2023-11-01"
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#replace_triggers_external_values UpdateResource#replace_triggers_external_values}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.resourceId"></a>

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#resource_id UpdateResource#resource_id}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#response_export_values UpdateResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#retry UpdateResource#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBody"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body UpdateResource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body_version UpdateResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#timeouts UpdateResource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_headers UpdateResource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_query_parameters UpdateResource#update_query_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride">put_read_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing">reset_ignore_casing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty">reset_ignore_missing_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList">reset_ignore_other_items_in_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty">reset_list_unique_id_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders">reset_read_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride">reset_read_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters">reset_read_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues">reset_replace_triggers_external_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody">reset_sensitive_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion">reset_sensitive_body_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders">reset_update_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters">reset_update_query_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.updateResource.UpdateResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.updateResource.UpdateResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.updateResource.UpdateResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_read_override` <a name="put_read_override" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride"></a>

```python
def put_read_override(
  action: str,
  method: str
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride.parameter.action"></a>

- *Type:* str

The name of the action appended to the resource ID, for example `list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#action UpdateResource#action}

---

###### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride.parameter.method"></a>

- *Type:* str

The HTTP method used to read the resource. The only supported value is `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#method UpdateResource#method}

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#error_message_regex UpdateResource#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#interval_seconds UpdateResource#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#max_interval_seconds UpdateResource#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#multiplier UpdateResource#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#randomization_factor UpdateResource#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#create UpdateResource#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#delete UpdateResource#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read UpdateResource#read}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update UpdateResource#update}

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_ignore_casing` <a name="reset_ignore_casing" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing"></a>

```python
def reset_ignore_casing() -> None
```

##### `reset_ignore_missing_property` <a name="reset_ignore_missing_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty"></a>

```python
def reset_ignore_missing_property() -> None
```

##### `reset_ignore_other_items_in_list` <a name="reset_ignore_other_items_in_list" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList"></a>

```python
def reset_ignore_other_items_in_list() -> None
```

##### `reset_list_unique_id_property` <a name="reset_list_unique_id_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty"></a>

```python
def reset_list_unique_id_property() -> None
```

##### `reset_locks` <a name="reset_locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_read_headers` <a name="reset_read_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders"></a>

```python
def reset_read_headers() -> None
```

##### `reset_read_override` <a name="reset_read_override" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride"></a>

```python
def reset_read_override() -> None
```

##### `reset_read_query_parameters` <a name="reset_read_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters"></a>

```python
def reset_read_query_parameters() -> None
```

##### `reset_replace_triggers_external_values` <a name="reset_replace_triggers_external_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues"></a>

```python
def reset_replace_triggers_external_values() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_sensitive_body` <a name="reset_sensitive_body" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody"></a>

```python
def reset_sensitive_body() -> None
```

##### `reset_sensitive_body_version` <a name="reset_sensitive_body_version" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion"></a>

```python
def reset_sensitive_body_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_headers` <a name="reset_update_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders"></a>

```python
def reset_update_headers() -> None
```

##### `reset_update_query_parameters` <a name="reset_update_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters"></a>

```python
def reset_update_query_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UpdateResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UpdateResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UpdateResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride">read_override</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput">body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput">ignore_casing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput">ignore_missing_property_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput">ignore_other_items_in_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput">list_unique_id_property_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput">locks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput">read_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput">read_override_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput">read_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput">replace_triggers_external_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput">sensitive_body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput">sensitive_body_version_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput">update_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput">update_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locks">locks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `read_override`<sup>Required</sup> <a name="read_override" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride"></a>

```python
read_override: UpdateResourceReadOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retry"></a>

```python
retry: UpdateResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts"></a>

```python
timeouts: UpdateResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput"></a>

```python
body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `ignore_casing_input`<sup>Optional</sup> <a name="ignore_casing_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput"></a>

```python
ignore_casing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property_input`<sup>Optional</sup> <a name="ignore_missing_property_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput"></a>

```python
ignore_missing_property_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_other_items_in_list_input`<sup>Optional</sup> <a name="ignore_other_items_in_list_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput"></a>

```python
ignore_other_items_in_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `list_unique_id_property_input`<sup>Optional</sup> <a name="list_unique_id_property_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput"></a>

```python
list_unique_id_property_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput"></a>

```python
locks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `read_headers_input`<sup>Optional</sup> <a name="read_headers_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput"></a>

```python
read_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_override_input`<sup>Optional</sup> <a name="read_override_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput"></a>

```python
read_override_input: IResolvable | UpdateResourceReadOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---

##### `read_query_parameters_input`<sup>Optional</sup> <a name="read_query_parameters_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput"></a>

```python
read_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values_input`<sup>Optional</sup> <a name="replace_triggers_external_values_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput"></a>

```python
replace_triggers_external_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput"></a>

```python
retry_input: IResolvable | UpdateResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---

##### `sensitive_body_input`<sup>Optional</sup> <a name="sensitive_body_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput"></a>

```python
sensitive_body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version_input`<sup>Optional</sup> <a name="sensitive_body_version_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput"></a>

```python
sensitive_body_version_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | UpdateResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_headers_input`<sup>Optional</sup> <a name="update_headers_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput"></a>

```python
update_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters_input`<sup>Optional</sup> <a name="update_query_parameters_input" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput"></a>

```python
update_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `ignore_casing`<sup>Required</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property`<sup>Required</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_other_items_in_list`<sup>Required</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList"></a>

```python
ignore_other_items_in_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `list_unique_id_property`<sup>Required</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty"></a>

```python
list_unique_id_property: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `read_headers`<sup>Required</sup> <a name="read_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_query_parameters`<sup>Required</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values`<sup>Required</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues"></a>

```python
replace_triggers_external_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### ~~`sensitive_body`~~<sup>Required</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version`<sup>Required</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_headers`<sup>Required</sup> <a name="update_headers" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters`<sup>Required</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UpdateResourceConfig <a name="UpdateResourceConfig" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  body: typing.Mapping[typing.Any] = None,
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  ignore_other_items_in_list: typing.List[str] = None,
  list_unique_id_property: typing.Mapping[str] = None,
  locks: typing.List[str] = None,
  name: str = None,
  parent_id: str = None,
  read_headers: typing.Mapping[str] = None,
  read_override: UpdateResourceReadOverride = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  resource_id: str = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: UpdateResourceRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  timeouts: UpdateResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList">ignore_other_items_in_list</a></code> | <code>typing.List[str]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty">list_unique_id_property</a></code> | <code>typing.Mapping[str]</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the Azure resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride">read_override</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | Overrides the default `GET` request used to read the resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#type UpdateResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#body UpdateResource#body}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_casing UpdateResource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_missing_property UpdateResource#ignore_missing_property}

---

##### `ignore_other_items_in_list`<sup>Optional</sup> <a name="ignore_other_items_in_list" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList"></a>

```python
ignore_other_items_in_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_other_items_in_list UpdateResource#ignore_other_items_in_list}

---

##### `list_unique_id_property`<sup>Optional</sup> <a name="list_unique_id_property" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty"></a>

```python
list_unique_id_property: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#list_unique_id_property UpdateResource#list_unique_id_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#locks UpdateResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the Azure resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#name UpdateResource#name}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#parent_id UpdateResource#parent_id}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_headers UpdateResource#read_headers}

---

##### `read_override`<sup>Optional</sup> <a name="read_override" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride"></a>

```python
read_override: UpdateResourceReadOverride
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

Overrides the default `GET` request used to read the resource.

When configured, the provider sends the specified action request instead of `GET` and uses its response for all read processing, including refreshing `body` and `output`. When omitted, the provider reads the resource with `GET`.

~> **Warning:** Do not use `read_override` with sensitive values. Action responses are stored in state through `body` and `output`, and `read_override` cannot be combined with `sensitive_body`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_override UpdateResource#read_override}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_query_parameters UpdateResource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues"></a>

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
resource "azapi_update_resource" "example" {
  resource_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.Network/publicIPAddresses/example"
  type        = "Microsoft.Network/publicIPAddresses@2023-11-01"
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#replace_triggers_external_values UpdateResource#replace_triggers_external_values}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#resource_id UpdateResource#resource_id}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#response_export_values UpdateResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry"></a>

```python
retry: UpdateResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#retry UpdateResource#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody"></a>

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body UpdateResource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body_version UpdateResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts"></a>

```python
timeouts: UpdateResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#timeouts UpdateResource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_headers UpdateResource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_query_parameters UpdateResource#update_query_parameters}

---

### UpdateResourceReadOverride <a name="UpdateResourceReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceReadOverride(
  action: str,
  method: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action">action</a></code> | <code>str</code> | The name of the action appended to the resource ID, for example `list`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method">method</a></code> | <code>str</code> | The HTTP method used to read the resource. The only supported value is `POST`. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action"></a>

```python
action: str
```

- *Type:* str

The name of the action appended to the resource ID, for example `list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#action UpdateResource#action}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method"></a>

```python
method: str
```

- *Type:* str

The HTTP method used to read the resource. The only supported value is `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#method UpdateResource#method}

---

### UpdateResourceRetry <a name="UpdateResourceRetry" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceRetry(
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
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#error_message_regex UpdateResource#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#interval_seconds UpdateResource#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#max_interval_seconds UpdateResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#multiplier UpdateResource#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#randomization_factor UpdateResource#randomization_factor}

---

### UpdateResourceTimeouts <a name="UpdateResourceTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#create UpdateResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#delete UpdateResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read UpdateResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update UpdateResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### UpdateResourceReadOverrideOutputReference <a name="UpdateResourceReadOverrideOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceReadOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | UpdateResourceReadOverride
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---


### UpdateResourceRetryOutputReference <a name="UpdateResourceRetryOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | UpdateResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---


### UpdateResourceTimeoutsOutputReference <a name="UpdateResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import update_resource

updateResource.UpdateResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | UpdateResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---



