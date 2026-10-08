# `dataPlaneResource` Submodule <a name="`dataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPlaneResource <a name="DataPlaneResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResource;

DataPlaneResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parentId(java.lang.String)
    .type(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .createHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .createQueryParameters(java.util.Map<java.lang.String, java.util.List<java.lang.String>>|IResolvable)
//  .deleteHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .deleteQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .ignoreCasing(java.lang.Boolean|IResolvable)
//  .ignoreMissingProperty(java.lang.Boolean|IResolvable)
//  .locks(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .readHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .readQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .replaceTriggersExternalValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .replaceTriggersRefs(java.util.List<java.lang.String>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(DataPlaneResourceRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataPlaneResourceTimeouts)
//  .updateHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .updateQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.parentId">parentId</a></code> | <code>java.lang.String</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createHeaders">createHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createQueryParameters">createQueryParameters</a></code> | <code>java.util.Map<java.lang.String, java.util.List<java.lang.String>>\|io.cdktn.cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteHeaders">deleteHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteQueryParameters">deleteQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>java.util.List<java.lang.String></code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the update request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.parentId"></a>

- *Type:* java.lang.String

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.body"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `createHeaders`<sup>Optional</sup> <a name="createHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `createQueryParameters`<sup>Optional</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.createQueryParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.util.List<java.lang.String>>|io.cdktn.cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `deleteHeaders`<sup>Optional</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `deleteQueryParameters`<sup>Optional</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.deleteQueryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreCasing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.ignoreMissingProperty"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.locks"></a>

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.readQueryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersExternalValues"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

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

##### `replaceTriggersRefs`<sup>Optional</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.replaceTriggersRefs"></a>

- *Type:* java.util.List<java.lang.String>

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.responseExportValues"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

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

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBody"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.updateQueryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders">resetCreateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters">resetCreateQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders">resetDeleteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters">resetDeleteQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing">resetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty">resetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders">resetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters">resetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues">resetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs">resetReplaceTriggersRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders">resetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters">resetUpdateQueryParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry"></a>

```java
public void putRetry(DataPlaneResourceRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts"></a>

```java
public void putTimeouts(DataPlaneResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody"></a>

```java
public void resetBody()
```

##### `resetCreateHeaders` <a name="resetCreateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders"></a>

```java
public void resetCreateHeaders()
```

##### `resetCreateQueryParameters` <a name="resetCreateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters"></a>

```java
public void resetCreateQueryParameters()
```

##### `resetDeleteHeaders` <a name="resetDeleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders"></a>

```java
public void resetDeleteHeaders()
```

##### `resetDeleteQueryParameters` <a name="resetDeleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters"></a>

```java
public void resetDeleteQueryParameters()
```

##### `resetIgnoreCasing` <a name="resetIgnoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing"></a>

```java
public void resetIgnoreCasing()
```

##### `resetIgnoreMissingProperty` <a name="resetIgnoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty"></a>

```java
public void resetIgnoreMissingProperty()
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName"></a>

```java
public void resetName()
```

##### `resetReadHeaders` <a name="resetReadHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders"></a>

```java
public void resetReadHeaders()
```

##### `resetReadQueryParameters` <a name="resetReadQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters"></a>

```java
public void resetReadQueryParameters()
```

##### `resetReplaceTriggersExternalValues` <a name="resetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues"></a>

```java
public void resetReplaceTriggersExternalValues()
```

##### `resetReplaceTriggersRefs` <a name="resetReplaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs"></a>

```java
public void resetReplaceTriggersRefs()
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues"></a>

```java
public void resetResponseExportValues()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody"></a>

```java
public void resetSensitiveBody()
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion"></a>

```java
public void resetSensitiveBodyVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdateHeaders` <a name="resetUpdateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders"></a>

```java
public void resetUpdateHeaders()
```

##### `resetUpdateQueryParameters` <a name="resetUpdateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters"></a>

```java
public void resetUpdateQueryParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResource;

DataPlaneResource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResource;

DataPlaneResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResource;

DataPlaneResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResource;

DataPlaneResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataPlaneResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataPlaneResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output">output</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput">bodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput">createHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput">createQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput">deleteHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput">deleteQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput">ignoreCasingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput">ignoreMissingPropertyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput">locksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput">readHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput">readQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput">replaceTriggersExternalValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput">replaceTriggersRefsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput">updateHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput">updateQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders">createHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters">createQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders">deleteHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output"></a>

```java
public AnyMap getOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry"></a>

```java
public DataPlaneResourceRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts"></a>

```java
public DataPlaneResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `createHeadersInput`<sup>Optional</sup> <a name="createHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCreateHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `createQueryParametersInput`<sup>Optional</sup> <a name="createQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getCreateQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `deleteHeadersInput`<sup>Optional</sup> <a name="deleteHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeleteHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteQueryParametersInput`<sup>Optional</sup> <a name="deleteQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getDeleteQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `ignoreCasingInput`<sup>Optional</sup> <a name="ignoreCasingInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreMissingPropertyInput`<sup>Optional</sup> <a name="ignoreMissingPropertyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingPropertyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput"></a>

```java
public java.util.List<java.lang.String> getLocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput"></a>

```java
public java.lang.String getParentIdInput();
```

- *Type:* java.lang.String

---

##### `readHeadersInput`<sup>Optional</sup> <a name="readHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readQueryParametersInput`<sup>Optional</sup> <a name="readQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `replaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="replaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getReplaceTriggersExternalValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `replaceTriggersRefsInput`<sup>Optional</sup> <a name="replaceTriggersRefsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput"></a>

```java
public java.util.List<java.lang.String> getReplaceTriggersRefsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput"></a>

```java
public IResolvable|DataPlaneResourceRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput"></a>

```java
public IResolvable|DataPlaneResourceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `updateHeadersInput`<sup>Optional</sup> <a name="updateHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `updateQueryParametersInput`<sup>Optional</sup> <a name="updateQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `createHeaders`<sup>Required</sup> <a name="createHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCreateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `createQueryParameters`<sup>Required</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getCreateQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `deleteHeaders`<sup>Required</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeleteHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteQueryParameters`<sup>Required</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getDeleteQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `ignoreCasing`<sup>Required</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreMissingProperty`<sup>Required</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingProperty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

##### `readHeaders`<sup>Required</sup> <a name="readHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readQueryParameters`<sup>Required</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `replaceTriggersExternalValues`<sup>Required</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getReplaceTriggersExternalValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `replaceTriggersRefs`<sup>Required</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs"></a>

```java
public java.util.List<java.lang.String> getReplaceTriggersRefs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateHeaders`<sup>Required</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `updateQueryParameters`<sup>Required</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPlaneResourceConfig <a name="DataPlaneResourceConfig" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResourceConfig;

DataPlaneResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parentId(java.lang.String)
    .type(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .createHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .createQueryParameters(java.util.Map<java.lang.String, java.util.List<java.lang.String>>|IResolvable)
//  .deleteHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .deleteQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .ignoreCasing(java.lang.Boolean|IResolvable)
//  .ignoreMissingProperty(java.lang.Boolean|IResolvable)
//  .locks(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .readHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .readQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .replaceTriggersExternalValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .replaceTriggersRefs(java.util.List<java.lang.String>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(DataPlaneResourceRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataPlaneResourceTimeouts)
//  .updateHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .updateQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId">parentId</a></code> | <code>java.lang.String</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders">createHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters">createQueryParameters</a></code> | <code>java.util.Map<java.lang.String, java.util.List<java.lang.String>>\|io.cdktn.cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders">deleteHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>java.util.List<java.lang.String></code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `createHeaders`<sup>Optional</sup> <a name="createHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCreateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `createQueryParameters`<sup>Optional</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters"></a>

```java
public java.util.Map<java.lang.String, java.util.List<java.lang.String>>|IResolvable getCreateQueryParameters();
```

- *Type:* java.util.Map<java.lang.String, java.util.List<java.lang.String>>|io.cdktn.cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `deleteHeaders`<sup>Optional</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeleteHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `deleteQueryParameters`<sup>Optional</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getDeleteQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingProperty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getReplaceTriggersExternalValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

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

##### `replaceTriggersRefs`<sup>Optional</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs"></a>

```java
public java.util.List<java.lang.String> getReplaceTriggersRefs();
```

- *Type:* java.util.List<java.lang.String>

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

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

```java
public DataPlaneResourceRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#retry DataPlaneResource#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts"></a>

```java
public DataPlaneResourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

### DataPlaneResourceRetry <a name="DataPlaneResourceRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResourceRetry;

DataPlaneResourceRetry.builder()
    .errorMessageRegex(java.util.List<java.lang.String>)
//  .intervalSeconds(java.lang.Number)
//  .maxIntervalSeconds(java.lang.Number)
//  .multiplier(java.lang.Number)
//  .randomizationFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#error_message_regex DataPlaneResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#interval_seconds DataPlaneResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#max_interval_seconds DataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#multiplier DataPlaneResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#randomization_factor DataPlaneResource#randomization_factor}

---

### DataPlaneResourceTimeouts <a name="DataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResourceTimeouts;

DataPlaneResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create DataPlaneResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete DataPlaneResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read DataPlaneResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update DataPlaneResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPlaneResourceRetryOutputReference <a name="DataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResourceRetryOutputReference;

new DataPlaneResourceRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```java
public void resetMaxIntervalSeconds()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```java
public void resetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegexInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```java
public java.lang.Number getMaxIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```java
public java.lang.Number getRandomizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataPlaneResourceRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---


### DataPlaneResourceTimeoutsOutputReference <a name="DataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_plane_resource.DataPlaneResourceTimeoutsOutputReference;

new DataPlaneResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataPlaneResourceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---



