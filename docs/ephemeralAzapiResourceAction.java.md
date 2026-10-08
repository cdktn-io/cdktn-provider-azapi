# `ephemeralAzapiResourceAction` Submodule <a name="`ephemeralAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiResourceAction <a name="EphemeralAzapiResourceAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceAction;

EphemeralAzapiResourceAction.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .resourceId(java.lang.String)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .locks(java.util.List<java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(EphemeralAzapiResourceActionRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(EphemeralAzapiResourceActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | Specifies the HTTP method of the azure resource action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#resource_id EphemeralAzapiResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.type"></a>

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#type EphemeralAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#action EphemeralAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.body"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#body EphemeralAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.headers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#headers EphemeralAzapiResourceAction#headers}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.locks"></a>

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#locks EphemeralAzapiResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.method"></a>

- *Type:* java.lang.String

Specifies the HTTP method of the azure resource action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#method EphemeralAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.queryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#query_parameters EphemeralAzapiResourceAction#query_parameters}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#response_export_values EphemeralAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#retry EphemeralAzapiResourceAction#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.sensitiveBody"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#sensitive_body EphemeralAzapiResourceAction#sensitive_body}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#timeouts EphemeralAzapiResourceAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry"></a>

```java
public void putRetry(EphemeralAzapiResourceActionRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts"></a>

```java
public void putTimeouts(EphemeralAzapiResourceActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction"></a>

```java
public void resetAction()
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters"></a>

```java
public void resetQueryParameters()
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues"></a>

```java
public void resetResponseExportValues()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody"></a>

```java
public void resetSensitiveBody()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceAction;

EphemeralAzapiResourceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceAction;

EphemeralAzapiResourceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceAction;

EphemeralAzapiResourceAction.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output">output</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput">bodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput">locksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput">queryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output"></a>

```java
public AnyMap getOutput();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry"></a>

```java
public EphemeralAzapiResourceActionRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts"></a>

```java
public EphemeralAzapiResourceActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput"></a>

```java
public java.util.List<java.lang.String> getLocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValuesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput"></a>

```java
public IResolvable|EphemeralAzapiResourceActionRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBodyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput"></a>

```java
public IResolvable|EphemeralAzapiResourceActionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResponseExportValues();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `sensitiveBody`<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiResourceActionConfig <a name="EphemeralAzapiResourceActionConfig" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceActionConfig;

EphemeralAzapiResourceActionConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .resourceId(java.lang.String)
    .type(java.lang.String)
//  .action(java.lang.String)
//  .body(java.util.Map<java.lang.String, java.lang.Object>)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .locks(java.util.List<java.lang.String>)
//  .method(java.lang.String)
//  .queryParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .responseExportValues(java.util.Map<java.lang.String, java.lang.Object>)
//  .retry(EphemeralAzapiResourceActionRetry)
//  .sensitiveBody(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(EphemeralAzapiResourceActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type">type</a></code> | <code>java.lang.String</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action">action</a></code> | <code>java.lang.String</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body">body</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks">locks</a></code> | <code>java.util.List<java.lang.String></code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method">method</a></code> | <code>java.lang.String</code> | Specifies the HTTP method of the azure resource action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters">queryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues">responseExportValues</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#resource_id EphemeralAzapiResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#type EphemeralAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#action EphemeralAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#body EphemeralAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#headers EphemeralAzapiResourceAction#headers}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks"></a>

```java
public java.util.List<java.lang.String> getLocks();
```

- *Type:* java.util.List<java.lang.String>

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#locks EphemeralAzapiResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Specifies the HTTP method of the azure resource action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#method EphemeralAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getQueryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#query_parameters EphemeralAzapiResourceAction#query_parameters}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#response_export_values EphemeralAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry"></a>

```java
public EphemeralAzapiResourceActionRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#retry EphemeralAzapiResourceAction#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getSensitiveBody();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#sensitive_body EphemeralAzapiResourceAction#sensitive_body}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts"></a>

```java
public EphemeralAzapiResourceActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#timeouts EphemeralAzapiResourceAction#timeouts}

---

### EphemeralAzapiResourceActionRetry <a name="EphemeralAzapiResourceActionRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceActionRetry;

EphemeralAzapiResourceActionRetry.builder()
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
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#error_message_regex EphemeralAzapiResourceAction#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#interval_seconds EphemeralAzapiResourceAction#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#max_interval_seconds EphemeralAzapiResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#multiplier EphemeralAzapiResourceAction#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#randomization_factor EphemeralAzapiResourceAction#randomization_factor}

---

### EphemeralAzapiResourceActionTimeouts <a name="EphemeralAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceActionTimeouts;

EphemeralAzapiResourceActionTimeouts.builder()
//  .open(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open">open</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `open`<sup>Optional</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open"></a>

```java
public java.lang.String getOpen();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#open EphemeralAzapiResourceAction#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiResourceActionRetryOutputReference <a name="EphemeralAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceActionRetryOutputReference;

new EphemeralAzapiResourceActionRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```java
public void resetMaxIntervalSeconds()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```java
public void resetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegexInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```java
public java.lang.Number getMaxIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```java
public java.lang.Number getRandomizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```java
public java.util.List<java.lang.String> getErrorMessageRegex();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```java
public java.lang.Number getMaxIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```java
public java.lang.Number getRandomizationFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralAzapiResourceActionRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---


### EphemeralAzapiResourceActionTimeoutsOutputReference <a name="EphemeralAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azapi.ephemeral_azapi_resource_action.EphemeralAzapiResourceActionTimeoutsOutputReference;

new EphemeralAzapiResourceActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen">resetOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOpen` <a name="resetOpen" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen"></a>

```java
public void resetOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput">openInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open">open</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `openInput`<sup>Optional</sup> <a name="openInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput"></a>

```java
public java.lang.String getOpenInput();
```

- *Type:* java.lang.String

---

##### `open`<sup>Required</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open"></a>

```java
public java.lang.String getOpen();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralAzapiResourceActionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---



