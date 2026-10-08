# `dataPlaneResource` Submodule <a name="`dataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPlaneResource <a name="DataPlaneResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResource(
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
  body: typing.Mapping[typing.Any] = None,
  create_headers: typing.Mapping[str] = None,
  create_query_parameters: typing.Mapping[typing.List[str]] | IResolvable = None,
  delete_headers: typing.Mapping[str] = None,
  delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  locks: typing.List[str] = None,
  name: str = None,
  read_headers: typing.Mapping[str] = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  replace_triggers_refs: typing.List[str] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataPlaneResourceRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  timeouts: DataPlaneResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createQueryParameters">create_query_parameters</a></code> | <code>typing.Mapping[typing.List[str]] \| cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.parentId"></a>

- *Type:* str

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.body"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `create_headers`<sup>Optional</sup> <a name="create_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `create_query_parameters`<sup>Optional</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createQueryParameters"></a>

- *Type:* typing.Mapping[typing.List[str]] | cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `delete_headers`<sup>Optional</sup> <a name="delete_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `delete_query_parameters`<sup>Optional</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreCasing"></a>

- *Type:* bool | cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreMissingProperty"></a>

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.locks"></a>

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersExternalValues"></a>

- *Type:* typing.Mapping[typing.Any]

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_data_plane_resource" "example" {
  name = var.name
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@1.0"
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_external_values DataPlaneResource#replace_triggers_external_values}

---

##### `replace_triggers_refs`<sup>Optional</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersRefs"></a>

- *Type:* typing.List[str]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#response_export_values DataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#retry DataPlaneResource#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBody"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateHeaders"></a>

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateQueryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders">reset_create_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters">reset_create_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders">reset_delete_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters">reset_delete_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing">reset_ignore_casing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty">reset_ignore_missing_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders">reset_read_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters">reset_read_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues">reset_replace_triggers_external_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs">reset_replace_triggers_refs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody">reset_sensitive_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion">reset_sensitive_body_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders">reset_update_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters">reset_update_query_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#error_message_regex DataPlaneResource#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#interval_seconds DataPlaneResource#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#max_interval_seconds DataPlaneResource#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#multiplier DataPlaneResource#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#randomization_factor DataPlaneResource#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create DataPlaneResource#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete DataPlaneResource#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read DataPlaneResource#read}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update DataPlaneResource#update}

---

##### `reset_body` <a name="reset_body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_create_headers` <a name="reset_create_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders"></a>

```python
def reset_create_headers() -> None
```

##### `reset_create_query_parameters` <a name="reset_create_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters"></a>

```python
def reset_create_query_parameters() -> None
```

##### `reset_delete_headers` <a name="reset_delete_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders"></a>

```python
def reset_delete_headers() -> None
```

##### `reset_delete_query_parameters` <a name="reset_delete_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters"></a>

```python
def reset_delete_query_parameters() -> None
```

##### `reset_ignore_casing` <a name="reset_ignore_casing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing"></a>

```python
def reset_ignore_casing() -> None
```

##### `reset_ignore_missing_property` <a name="reset_ignore_missing_property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty"></a>

```python
def reset_ignore_missing_property() -> None
```

##### `reset_locks` <a name="reset_locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_read_headers` <a name="reset_read_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders"></a>

```python
def reset_read_headers() -> None
```

##### `reset_read_query_parameters` <a name="reset_read_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters"></a>

```python
def reset_read_query_parameters() -> None
```

##### `reset_replace_triggers_external_values` <a name="reset_replace_triggers_external_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues"></a>

```python
def reset_replace_triggers_external_values() -> None
```

##### `reset_replace_triggers_refs` <a name="reset_replace_triggers_refs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs"></a>

```python
def reset_replace_triggers_refs() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_sensitive_body` <a name="reset_sensitive_body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody"></a>

```python
def reset_sensitive_body() -> None
```

##### `reset_sensitive_body_version` <a name="reset_sensitive_body_version" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion"></a>

```python
def reset_sensitive_body_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_headers` <a name="reset_update_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders"></a>

```python
def reset_update_headers() -> None
```

##### `reset_update_query_parameters` <a name="reset_update_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters"></a>

```python
def reset_update_query_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPlaneResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput">body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput">create_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput">create_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput">delete_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput">delete_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput">ignore_casing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput">ignore_missing_property_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput">locks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput">read_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput">read_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput">replace_triggers_external_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput">replace_triggers_refs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput">sensitive_body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput">sensitive_body_version_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput">update_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput">update_query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters">create_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks">locks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry"></a>

```python
retry: DataPlaneResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts"></a>

```python
timeouts: DataPlaneResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput"></a>

```python
body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `create_headers_input`<sup>Optional</sup> <a name="create_headers_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput"></a>

```python
create_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_query_parameters_input`<sup>Optional</sup> <a name="create_query_parameters_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput"></a>

```python
create_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `delete_headers_input`<sup>Optional</sup> <a name="delete_headers_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput"></a>

```python
delete_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_query_parameters_input`<sup>Optional</sup> <a name="delete_query_parameters_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput"></a>

```python
delete_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `ignore_casing_input`<sup>Optional</sup> <a name="ignore_casing_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput"></a>

```python
ignore_casing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property_input`<sup>Optional</sup> <a name="ignore_missing_property_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput"></a>

```python
ignore_missing_property_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput"></a>

```python
locks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `read_headers_input`<sup>Optional</sup> <a name="read_headers_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput"></a>

```python
read_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_query_parameters_input`<sup>Optional</sup> <a name="read_query_parameters_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput"></a>

```python
read_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values_input`<sup>Optional</sup> <a name="replace_triggers_external_values_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput"></a>

```python
replace_triggers_external_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `replace_triggers_refs_input`<sup>Optional</sup> <a name="replace_triggers_refs_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput"></a>

```python
replace_triggers_refs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput"></a>

```python
retry_input: IResolvable | DataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `sensitive_body_input`<sup>Optional</sup> <a name="sensitive_body_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput"></a>

```python
sensitive_body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version_input`<sup>Optional</sup> <a name="sensitive_body_version_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput"></a>

```python
sensitive_body_version_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_headers_input`<sup>Optional</sup> <a name="update_headers_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput"></a>

```python
update_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters_input`<sup>Optional</sup> <a name="update_query_parameters_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput"></a>

```python
update_query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `create_headers`<sup>Required</sup> <a name="create_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders"></a>

```python
create_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_query_parameters`<sup>Required</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters"></a>

```python
create_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `delete_headers`<sup>Required</sup> <a name="delete_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders"></a>

```python
delete_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_query_parameters`<sup>Required</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters"></a>

```python
delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `ignore_casing`<sup>Required</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_missing_property`<sup>Required</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `read_headers`<sup>Required</sup> <a name="read_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_query_parameters`<sup>Required</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `replace_triggers_external_values`<sup>Required</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues"></a>

```python
replace_triggers_external_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `replace_triggers_refs`<sup>Required</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs"></a>

```python
replace_triggers_refs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### ~~`sensitive_body`~~<sup>Required</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version`<sup>Required</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_headers`<sup>Required</sup> <a name="update_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_query_parameters`<sup>Required</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPlaneResourceConfig <a name="DataPlaneResourceConfig" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent_id: str,
  type: str,
  body: typing.Mapping[typing.Any] = None,
  create_headers: typing.Mapping[str] = None,
  create_query_parameters: typing.Mapping[typing.List[str]] | IResolvable = None,
  delete_headers: typing.Mapping[str] = None,
  delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  ignore_casing: bool | IResolvable = None,
  ignore_missing_property: bool | IResolvable = None,
  locks: typing.List[str] = None,
  name: str = None,
  read_headers: typing.Mapping[str] = None,
  read_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  replace_triggers_external_values: typing.Mapping[typing.Any] = None,
  replace_triggers_refs: typing.List[str] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: DataPlaneResourceRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  timeouts: DataPlaneResourceTimeouts = None,
  update_headers: typing.Mapping[str] = None,
  update_query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders">create_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters">create_query_parameters</a></code> | <code>typing.Mapping[typing.List[str]] \| cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders">delete_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters">delete_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing">ignore_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty">ignore_missing_property</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders">read_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters">read_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues">replace_triggers_external_values</a></code> | <code>typing.Mapping[typing.Any]</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs">replace_triggers_refs</a></code> | <code>typing.List[str]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders">update_headers</a></code> | <code>typing.Mapping[str]</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters">update_query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `create_headers`<sup>Optional</sup> <a name="create_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders"></a>

```python
create_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `create_query_parameters`<sup>Optional</sup> <a name="create_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters"></a>

```python
create_query_parameters: typing.Mapping[typing.List[str]] | IResolvable
```

- *Type:* typing.Mapping[typing.List[str]] | cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `delete_headers`<sup>Optional</sup> <a name="delete_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders"></a>

```python
delete_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `delete_query_parameters`<sup>Optional</sup> <a name="delete_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters"></a>

```python
delete_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `ignore_casing`<sup>Optional</sup> <a name="ignore_casing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing"></a>

```python
ignore_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `ignore_missing_property`<sup>Optional</sup> <a name="ignore_missing_property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty"></a>

```python
ignore_missing_property: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `read_headers`<sup>Optional</sup> <a name="read_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders"></a>

```python
read_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `read_query_parameters`<sup>Optional</sup> <a name="read_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters"></a>

```python
read_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `replace_triggers_external_values`<sup>Optional</sup> <a name="replace_triggers_external_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues"></a>

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
resource "azapi_data_plane_resource" "example" {
  name = var.name
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@1.0"
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_external_values DataPlaneResource#replace_triggers_external_values}

---

##### `replace_triggers_refs`<sup>Optional</sup> <a name="replace_triggers_refs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs"></a>

```python
replace_triggers_refs: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#response_export_values DataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry"></a>

```python
retry: DataPlaneResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#retry DataPlaneResource#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody"></a>

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts"></a>

```python
timeouts: DataPlaneResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `update_headers`<sup>Optional</sup> <a name="update_headers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders"></a>

```python
update_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `update_query_parameters`<sup>Optional</sup> <a name="update_query_parameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters"></a>

```python
update_query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

### DataPlaneResourceRetry <a name="DataPlaneResourceRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResourceRetry(
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
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#error_message_regex DataPlaneResource#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#interval_seconds DataPlaneResource#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#max_interval_seconds DataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#multiplier DataPlaneResource#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#randomization_factor DataPlaneResource#randomization_factor}

---

### DataPlaneResourceTimeouts <a name="DataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResourceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create DataPlaneResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete DataPlaneResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read DataPlaneResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update DataPlaneResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPlaneResourceRetryOutputReference <a name="DataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResourceRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataPlaneResourceRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---


### DataPlaneResourceTimeoutsOutputReference <a name="DataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import data_plane_resource

dataPlaneResource.DataPlaneResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataPlaneResourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---



