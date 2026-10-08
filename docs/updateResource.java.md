# `updateResource` Submodule <a name="`updateResource` Submodule" id="@cdktn/provider-azapi.updateResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpdateResource <a name="UpdateResource" id="@cdktn/provider-azapi.updateResource.UpdateResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource azapi_update_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResource;

UpdateResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .ignoreCasing(java.lang.Boolean|IResolvable)
//  .ignoreMissingProperty(java.lang.Boolean|IResolvable)
//  .ignoreOtherItemsInList(java.util.List<java.lang.String>)
//  .listUniqueIdProperty(java.util.Map<java.lang.String, java.lang.String>)
//  .locks(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .parentId(java.lang.String)
//  .readHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .readOverride(UpdateResourceReadOverride)
//  .readQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .replaceTriggersExternalValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .resourceId(java.lang.String)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(UpdateResourceRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(UpdateResourceTimeouts)
//  .updateHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .updateQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>java.util.List<java.lang.String></code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Azure resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.parentId">parentId</a></code> | <code>java.lang.String</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readOverride">readOverride</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | Overrides the default `GET` request used to read the resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the update request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#type UpdateResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.body"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#body UpdateResource#body}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreCasing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_casing UpdateResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreMissingProperty"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_missing_property UpdateResource#ignore_missing_property}

---

##### `ignoreOtherItemsInList`<sup>Optional</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.ignoreOtherItemsInList"></a>

- *Type:* java.util.List<java.lang.String>

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_other_items_in_list UpdateResource#ignore_other_items_in_list}

---

##### `listUniqueIdProperty`<sup>Optional</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.listUniqueIdProperty"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#list_unique_id_property UpdateResource#list_unique_id_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.locks"></a>

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#locks UpdateResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the Azure resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#name UpdateResource#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.parentId"></a>

- *Type:* java.lang.String

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

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_headers UpdateResource#read_headers}

---

##### `readOverride`<sup>Optional</sup> <a name="readOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readOverride"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

Overrides the default `GET` request used to read the resource.

When configured, the provider sends the specified action request instead of `GET` and uses its response for all read processing, including refreshing `body` and `output`. When omitted, the provider reads the resource with `GET`.

~> **Warning:** Do not use `read_override` with sensitive values. Action responses are stored in state through `body` and `output`, and `read_override` cannot be combined with `sensitive_body`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_override UpdateResource#read_override}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.readQueryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_query_parameters UpdateResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.replaceTriggersExternalValues"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

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

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#resource_id UpdateResource#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#response_export_values UpdateResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#retry UpdateResource#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBody"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body UpdateResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body_version UpdateResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#timeouts UpdateResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_headers UpdateResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.updateQueryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_query_parameters UpdateResource#update_query_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride">putReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing">resetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty">resetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList">resetIgnoreOtherItemsInList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty">resetListUniqueIdProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders">resetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride">resetReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters">resetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues">resetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders">resetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters">resetUpdateQueryParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.updateResource.UpdateResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.updateResource.UpdateResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReadOverride` <a name="putReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride"></a>

```java
public void putReadOverride(UpdateResourceReadOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry"></a>

```java
public void putRetry(UpdateResourceRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts"></a>

```java
public void putTimeouts(UpdateResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetBody"></a>

```java
public void resetBody()
```

##### `resetIgnoreCasing` <a name="resetIgnoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing"></a>

```java
public void resetIgnoreCasing()
```

##### `resetIgnoreMissingProperty` <a name="resetIgnoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty"></a>

```java
public void resetIgnoreMissingProperty()
```

##### `resetIgnoreOtherItemsInList` <a name="resetIgnoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList"></a>

```java
public void resetIgnoreOtherItemsInList()
```

##### `resetListUniqueIdProperty` <a name="resetListUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty"></a>

```java
public void resetListUniqueIdProperty()
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetName"></a>

```java
public void resetName()
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId"></a>

```java
public void resetParentId()
```

##### `resetReadHeaders` <a name="resetReadHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders"></a>

```java
public void resetReadHeaders()
```

##### `resetReadOverride` <a name="resetReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride"></a>

```java
public void resetReadOverride()
```

##### `resetReadQueryParameters` <a name="resetReadQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters"></a>

```java
public void resetReadQueryParameters()
```

##### `resetReplaceTriggersExternalValues` <a name="resetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues"></a>

```java
public void resetReplaceTriggersExternalValues()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues"></a>

```java
public void resetResponseExportValues()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody"></a>

```java
public void resetSensitiveBody()
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion"></a>

```java
public void resetSensitiveBodyVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdateHeaders` <a name="resetUpdateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders"></a>

```java
public void resetUpdateHeaders()
```

##### `resetUpdateQueryParameters` <a name="resetUpdateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters"></a>

```java
public void resetUpdateQueryParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResource;

UpdateResource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResource;

UpdateResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResource;

UpdateResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResource;

UpdateResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UpdateResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UpdateResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UpdateResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the UpdateResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.output">output</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride">readOverride</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput">bodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput">ignoreCasingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput">ignoreMissingPropertyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput">ignoreOtherItemsInListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput">listUniqueIdPropertyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput">locksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput">readHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput">readOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput">readQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput">replaceTriggersExternalValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput">updateHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput">updateQueryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.output"></a>

```java
public AnyMap getOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `readOverride`<sup>Required</sup> <a name="readOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride"></a>

```java
public UpdateResourceReadOverrideOutputReference getReadOverride();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retry"></a>

```java
public UpdateResourceRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts"></a>

```java
public UpdateResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `ignoreCasingInput`<sup>Optional</sup> <a name="ignoreCasingInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreMissingPropertyInput`<sup>Optional</sup> <a name="ignoreMissingPropertyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingPropertyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreOtherItemsInListInput`<sup>Optional</sup> <a name="ignoreOtherItemsInListInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreOtherItemsInListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listUniqueIdPropertyInput`<sup>Optional</sup> <a name="listUniqueIdPropertyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListUniqueIdPropertyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput"></a>

```java
public java.util.List<java.lang.String> getLocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput"></a>

```java
public java.lang.String getParentIdInput();
```

- *Type:* java.lang.String

---

##### `readHeadersInput`<sup>Optional</sup> <a name="readHeadersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readOverrideInput`<sup>Optional</sup> <a name="readOverrideInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput"></a>

```java
public IResolvable|UpdateResourceReadOverride getReadOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---

##### `readQueryParametersInput`<sup>Optional</sup> <a name="readQueryParametersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `replaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="replaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getReplaceTriggersExternalValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput"></a>

```java
public IResolvable|UpdateResourceRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput"></a>

```java
public IResolvable|UpdateResourceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `updateHeadersInput`<sup>Optional</sup> <a name="updateHeadersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `updateQueryParametersInput`<sup>Optional</sup> <a name="updateQueryParametersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `ignoreCasing`<sup>Required</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreMissingProperty`<sup>Required</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingProperty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreOtherItemsInList`<sup>Required</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList"></a>

```java
public java.util.List<java.lang.String> getIgnoreOtherItemsInList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listUniqueIdProperty`<sup>Required</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListUniqueIdProperty();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

##### `readHeaders`<sup>Required</sup> <a name="readHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readQueryParameters`<sup>Required</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `replaceTriggersExternalValues`<sup>Required</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getReplaceTriggersExternalValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateHeaders`<sup>Required</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `updateQueryParameters`<sup>Required</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UpdateResourceConfig <a name="UpdateResourceConfig" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceConfig;

UpdateResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .ignoreCasing(java.lang.Boolean|IResolvable)
//  .ignoreMissingProperty(java.lang.Boolean|IResolvable)
//  .ignoreOtherItemsInList(java.util.List<java.lang.String>)
//  .listUniqueIdProperty(java.util.Map<java.lang.String, java.lang.String>)
//  .locks(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .parentId(java.lang.String)
//  .readHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .readOverride(UpdateResourceReadOverride)
//  .readQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .replaceTriggersExternalValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .resourceId(java.lang.String)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(UpdateResourceRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(UpdateResourceTimeouts)
//  .updateHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .updateQueryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing">ignoreCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>java.util.List<java.lang.String></code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Azure resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId">parentId</a></code> | <code>java.lang.String</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders">readHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride">readOverride</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | Overrides the default `GET` request used to read the resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters">readQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders">updateHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters">updateQueryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#type UpdateResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#body UpdateResource#body}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_casing UpdateResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreMissingProperty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_missing_property UpdateResource#ignore_missing_property}

---

##### `ignoreOtherItemsInList`<sup>Optional</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList"></a>

```java
public java.util.List<java.lang.String> getIgnoreOtherItemsInList();
```

- *Type:* java.util.List<java.lang.String>

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_other_items_in_list UpdateResource#ignore_other_items_in_list}

---

##### `listUniqueIdProperty`<sup>Optional</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListUniqueIdProperty();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#list_unique_id_property UpdateResource#list_unique_id_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#locks UpdateResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the Azure resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#name UpdateResource#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

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

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReadHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_headers UpdateResource#read_headers}

---

##### `readOverride`<sup>Optional</sup> <a name="readOverride" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride"></a>

```java
public UpdateResourceReadOverride getReadOverride();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

Overrides the default `GET` request used to read the resource.

When configured, the provider sends the specified action request instead of `GET` and uses its response for all read processing, including refreshing `body` and `output`. When omitted, the provider reads the resource with `GET`.

~> **Warning:** Do not use `read_override` with sensitive values. Action responses are stored in state through `body` and `output`, and `read_override` cannot be combined with `sensitive_body`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_override UpdateResource#read_override}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getReadQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_query_parameters UpdateResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues"></a>

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

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#resource_id UpdateResource#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#response_export_values UpdateResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry"></a>

```java
public UpdateResourceRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#retry UpdateResource#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body UpdateResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body_version UpdateResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts"></a>

```java
public UpdateResourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#timeouts UpdateResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUpdateHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_headers UpdateResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getUpdateQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_query_parameters UpdateResource#update_query_parameters}

---

### UpdateResourceReadOverride <a name="UpdateResourceReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceReadOverride;

UpdateResourceReadOverride.builder()
    .action(java.lang.String)
    .method(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action">action</a></code> | <code>java.lang.String</code> | The name of the action appended to the resource ID, for example `list`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method used to read the resource. The only supported value is `POST`. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the action appended to the resource ID, for example `list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#action UpdateResource#action}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method used to read the resource. The only supported value is `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#method UpdateResource#method}

---

### UpdateResourceRetry <a name="UpdateResourceRetry" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceRetry;

UpdateResourceRetry.builder()
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
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#error_message_regex UpdateResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#interval_seconds UpdateResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#max_interval_seconds UpdateResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#multiplier UpdateResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#randomization_factor UpdateResource#randomization_factor}

---

### UpdateResourceTimeouts <a name="UpdateResourceTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceTimeouts;

UpdateResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#create UpdateResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#delete UpdateResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read UpdateResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update UpdateResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### UpdateResourceReadOverrideOutputReference <a name="UpdateResourceReadOverrideOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceReadOverrideOutputReference;

new UpdateResourceReadOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|UpdateResourceReadOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---


### UpdateResourceRetryOutputReference <a name="UpdateResourceRetryOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceRetryOutputReference;

new UpdateResourceRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```java
public void resetMaxIntervalSeconds()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor"></a>

```java
public void resetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegexInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```java
public java.lang.Number getMaxIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput"></a>

```java
public java.lang.Number getRandomizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|UpdateResourceRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---


### UpdateResourceTimeoutsOutputReference <a name="UpdateResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.update_resource.UpdateResourceTimeoutsOutputReference;

new UpdateResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|UpdateResourceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---



