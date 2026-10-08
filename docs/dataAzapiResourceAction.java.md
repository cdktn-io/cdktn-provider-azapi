# `dataAzapiResourceAction` Submodule <a name="`dataAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceAction <a name="DataAzapiResourceAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceAction;

DataAzapiResourceAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .resourceId(java.lang.String)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(DataAzapiResourceActionRetry)
//  .sensitiveResponseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(DataAzapiResourceActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use when performing the action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the Azure resource to perform the action on. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.type"></a>

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#type DataAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#action DataAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.body"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#body DataAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.headers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#headers DataAzapiResourceAction#headers}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.method"></a>

- *Type:* java.lang.String

The HTTP method to use when performing the action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#method DataAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.queryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#query_parameters DataAzapiResourceAction#query_parameters}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of the Azure resource to perform the action on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#resource_id DataAzapiResourceAction#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#response_export_values DataAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#retry DataAzapiResourceAction#retry}

---

##### `sensitiveResponseExportValues`<sup>Optional</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.sensitiveResponseExportValues"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property sensitive_output.

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
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property sensitive_output.

  ```text
  {
  	"login_server" = "registry1.azurecr.io"
  	"quarantine_status" = "disabled"
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#sensitive_response_export_values DataAzapiResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#timeouts DataAzapiResourceAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues">resetSensitiveResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry"></a>

```java
public void putRetry(DataAzapiResourceActionRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts"></a>

```java
public void putTimeouts(DataAzapiResourceActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction"></a>

```java
public void resetAction()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters"></a>

```java
public void resetQueryParameters()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues"></a>

```java
public void resetResponseExportValues()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetSensitiveResponseExportValues` <a name="resetSensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues"></a>

```java
public void resetSensitiveResponseExportValues()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceAction;

DataAzapiResourceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceAction;

DataAzapiResourceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceAction;

DataAzapiResourceAction.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceAction;

DataAzapiResourceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzapiResourceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzapiResourceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzapiResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output">output</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput">sensitiveOutput</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput">bodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput">queryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput">sensitiveResponseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output"></a>

```java
public AnyMap getOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry"></a>

```java
public DataAzapiResourceActionRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a>

---

##### `sensitiveOutput`<sup>Required</sup> <a name="sensitiveOutput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput"></a>

```java
public AnyMap getSensitiveOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts"></a>

```java
public DataAzapiResourceActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput"></a>

```java
public IResolvable|DataAzapiResourceActionRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `sensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="sensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput"></a>

```java
public IResolvable|DataAzapiResourceActionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveResponseExportValues`<sup>Required</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceActionConfig <a name="DataAzapiResourceActionConfig" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceActionConfig;

DataAzapiResourceActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .resourceId(java.lang.String)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(DataAzapiResourceActionRetry)
//  .sensitiveResponseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(DataAzapiResourceActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use when performing the action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the Azure resource to perform the action on. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#type DataAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#action DataAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#body DataAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#headers DataAzapiResourceAction#headers}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method to use when performing the action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#method DataAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#query_parameters DataAzapiResourceAction#query_parameters}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of the Azure resource to perform the action on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#resource_id DataAzapiResourceAction#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#response_export_values DataAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry"></a>

```java
public DataAzapiResourceActionRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#retry DataAzapiResourceAction#retry}

---

##### `sensitiveResponseExportValues`<sup>Optional</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property sensitive_output.

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
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property sensitive_output.

  ```text
  {
  	"login_server" = "registry1.azurecr.io"
  	"quarantine_status" = "disabled"
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#sensitive_response_export_values DataAzapiResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts"></a>

```java
public DataAzapiResourceActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#timeouts DataAzapiResourceAction#timeouts}

---

### DataAzapiResourceActionRetry <a name="DataAzapiResourceActionRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceActionRetry;

DataAzapiResourceActionRetry.builder()
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#error_message_regex DataAzapiResourceAction#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#interval_seconds DataAzapiResourceAction#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#max_interval_seconds DataAzapiResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#multiplier DataAzapiResourceAction#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#randomization_factor DataAzapiResourceAction#randomization_factor}

---

### DataAzapiResourceActionTimeouts <a name="DataAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceActionTimeouts;

DataAzapiResourceActionTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#read DataAzapiResourceAction#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceActionRetryOutputReference <a name="DataAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceActionRetryOutputReference;

new DataAzapiResourceActionRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```java
public void resetMaxIntervalSeconds()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```java
public void resetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegexInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```java
public java.lang.Number getMaxIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```java
public java.lang.Number getRandomizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzapiResourceActionRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---


### DataAzapiResourceActionTimeoutsOutputReference <a name="DataAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.data_azapi_resource_action.DataAzapiResourceActionTimeoutsOutputReference;

new DataAzapiResourceActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzapiResourceActionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---



