# `resourceAction` Submodule <a name="`resourceAction` Submodule" id="@cdktn/provider-azapi.resourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceAction <a name="ResourceAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceAction;

ResourceAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .ignoreNotFound(java.lang.Boolean|IResolvable)
//  .locks(java.util.List<java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(ResourceActionRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .sensitiveResponseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ResourceActionTimeouts)
//  .when(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.ignoreNotFound">ignoreNotFound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.when">when</a></code> | <code>java.lang.String</code> | When to perform the action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.type"></a>

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.body"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.headers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `ignoreNotFound`<sup>Optional</sup> <a name="ignoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.ignoreNotFound"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.locks"></a>

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.method"></a>

- *Type:* java.lang.String

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.queryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#response_export_values ResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBody"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `sensitiveResponseExportValues`<sup>Optional</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveResponseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_response_export_values ResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.when"></a>

- *Type:* java.lang.String

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound">resetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues">resetSensitiveResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen">resetWhen</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry"></a>

```java
public void putRetry(ResourceActionRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts"></a>

```java
public void putTimeouts(ResourceActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction"></a>

```java
public void resetAction()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIgnoreNotFound` <a name="resetIgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound"></a>

```java
public void resetIgnoreNotFound()
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters"></a>

```java
public void resetQueryParameters()
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues"></a>

```java
public void resetResponseExportValues()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody"></a>

```java
public void resetSensitiveBody()
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion"></a>

```java
public void resetSensitiveBodyVersion()
```

##### `resetSensitiveResponseExportValues` <a name="resetSensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues"></a>

```java
public void resetSensitiveResponseExportValues()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWhen` <a name="resetWhen" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen"></a>

```java
public void resetWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceAction;

ResourceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceAction;

ResourceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceAction;

ResourceAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceAction;

ResourceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist">exist</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.output">output</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput">sensitiveOutput</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput">bodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput">ignoreNotFoundInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput">locksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput">queryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput">sensitiveResponseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput">whenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound">ignoreNotFound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.when">when</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `exist`<sup>Required</sup> <a name="exist" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist"></a>

```java
public IResolvable getExist();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.output"></a>

```java
public AnyMap getOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry"></a>

```java
public ResourceActionRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a>

---

##### `sensitiveOutput`<sup>Required</sup> <a name="sensitiveOutput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput"></a>

```java
public AnyMap getSensitiveOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts"></a>

```java
public ResourceActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ignoreNotFoundInput`<sup>Optional</sup> <a name="ignoreNotFoundInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNotFoundInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput"></a>

```java
public java.util.List<java.lang.String> getLocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput"></a>

```java
public IResolvable|ResourceActionRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="sensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput"></a>

```java
public IResolvable|ResourceActionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `whenInput`<sup>Optional</sup> <a name="whenInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput"></a>

```java
public java.lang.String getWhenInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ignoreNotFound`<sup>Required</sup> <a name="ignoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNotFound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sensitiveResponseExportValues`<sup>Required</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceActionConfig <a name="ResourceActionConfig" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceActionConfig;

ResourceActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .ignoreNotFound(java.lang.Boolean|IResolvable)
//  .locks(java.util.List<java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(ResourceActionRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .sensitiveBodyVersion(java.util.Map<java.lang.String, java.lang.String>)
//  .sensitiveResponseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ResourceActionTimeouts)
//  .when(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound">ignoreNotFound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method">method</a></code> | <code>java.lang.String</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when">when</a></code> | <code>java.lang.String</code> | When to perform the action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `ignoreNotFound`<sup>Optional</sup> <a name="ignoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNotFound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#response_export_values ResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry"></a>

```java
public ResourceActionRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSensitiveBodyVersion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `sensitiveResponseExportValues`<sup>Optional</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValues();
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_response_export_values ResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts"></a>

```java
public ResourceActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

### ResourceActionRetry <a name="ResourceActionRetry" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceActionRetry;

ResourceActionRetry.builder()
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
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#error_message_regex ResourceAction#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#interval_seconds ResourceAction#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#max_interval_seconds ResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#multiplier ResourceAction#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#randomization_factor ResourceAction#randomization_factor}

---

### ResourceActionTimeouts <a name="ResourceActionTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceActionTimeouts;

ResourceActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#create ResourceAction#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#delete ResourceAction#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#read ResourceAction#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#update ResourceAction#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceActionRetryOutputReference <a name="ResourceActionRetryOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceActionRetryOutputReference;

new ResourceActionRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```java
public void resetMaxIntervalSeconds()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```java
public void resetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegexInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```java
public java.lang.Number getMaxIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```java
public java.lang.Number getRandomizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceActionRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---


### ResourceActionTimeoutsOutputReference <a name="ResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.resource_action.ResourceActionTimeoutsOutputReference;

new ResourceActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceActionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---



