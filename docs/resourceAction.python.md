# `resourceAction` Submodule <a name="`resourceAction` Submodule" id="@cdktn/provider-azapi.resourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceAction <a name="ResourceAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_id: str,
  type: str,
  action: str = None,
  body: typing.Mapping[typing.Any] = None,
  headers: typing.Mapping[str] = None,
  ignore_not_found: bool | IResolvable = None,
  locks: typing.List[str] = None,
  method: str = None,
  query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: ResourceActionRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  sensitive_response_export_values: typing.Mapping[typing.Any] = None,
  timeouts: ResourceActionTimeouts = None,
  when: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.action">action</a></code> | <code>str</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.ignoreNotFound">ignore_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.method">method</a></code> | <code>str</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveResponseExportValues">sensitive_response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.when">when</a></code> | <code>str</code> | When to perform the action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.resourceId"></a>

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.type"></a>

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.action"></a>

- *Type:* str

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.body"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.headers"></a>

- *Type:* typing.Mapping[str]

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `ignore_not_found`<sup>Optional</sup> <a name="ignore_not_found" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.ignoreNotFound"></a>

- *Type:* bool | cdktn.IResolvable

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.locks"></a>

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.method"></a>

- *Type:* str

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.queryParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#response_export_values ResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBody"></a>

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveBodyVersion"></a>

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `sensitive_response_export_values`<sup>Optional</sup> <a name="sensitive_response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.sensitiveResponseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_response_export_values ResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.when"></a>

- *Type:* str

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound">reset_ignore_not_found</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters">reset_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues">reset_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry">reset_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody">reset_sensitive_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion">reset_sensitive_body_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues">reset_sensitive_response_export_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen">reset_when</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry"></a>

```python
def put_retry(
  error_message_regex: typing.List[str],
  interval_seconds: typing.Union[int, float] = None,
  max_interval_seconds: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None,
  randomization_factor: typing.Union[int, float] = None
) -> None
```

###### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.errorMessageRegex"></a>

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#error_message_regex ResourceAction#error_message_regex}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#interval_seconds ResourceAction#interval_seconds}

---

###### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.maxIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#max_interval_seconds ResourceAction#max_interval_seconds}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#multiplier ResourceAction#multiplier}

---

###### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.randomizationFactor"></a>

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#randomization_factor ResourceAction#randomization_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#create ResourceAction#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#delete ResourceAction#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#read ResourceAction#read}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#update ResourceAction#update}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ignore_not_found` <a name="reset_ignore_not_found" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound"></a>

```python
def reset_ignore_not_found() -> None
```

##### `reset_locks` <a name="reset_locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_query_parameters` <a name="reset_query_parameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters"></a>

```python
def reset_query_parameters() -> None
```

##### `reset_response_export_values` <a name="reset_response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues"></a>

```python
def reset_response_export_values() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry"></a>

```python
def reset_retry() -> None
```

##### `reset_sensitive_body` <a name="reset_sensitive_body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody"></a>

```python
def reset_sensitive_body() -> None
```

##### `reset_sensitive_body_version` <a name="reset_sensitive_body_version" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion"></a>

```python
def reset_sensitive_body_version() -> None
```

##### `reset_sensitive_response_export_values` <a name="reset_sensitive_response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues"></a>

```python
def reset_sensitive_response_export_values() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_when` <a name="reset_when" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen"></a>

```python
def reset_when() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist">exist</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput">sensitive_output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput">body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput">ignore_not_found_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput">locks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput">query_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput">response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput">sensitive_body_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput">sensitive_body_version_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput">sensitive_response_export_values_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput">when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound">ignore_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks">locks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues">sensitive_response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.when">when</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exist`<sup>Required</sup> <a name="exist" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist"></a>

```python
exist: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.output"></a>

```python
output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry"></a>

```python
retry: ResourceActionRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a>

---

##### `sensitive_output`<sup>Required</sup> <a name="sensitive_output" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput"></a>

```python
sensitive_output: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts"></a>

```python
timeouts: ResourceActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput"></a>

```python
body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ignore_not_found_input`<sup>Optional</sup> <a name="ignore_not_found_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput"></a>

```python
ignore_not_found_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput"></a>

```python
locks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `query_parameters_input`<sup>Optional</sup> <a name="query_parameters_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput"></a>

```python
query_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `response_export_values_input`<sup>Optional</sup> <a name="response_export_values_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput"></a>

```python
response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput"></a>

```python
retry_input: IResolvable | ResourceActionRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `sensitive_body_input`<sup>Optional</sup> <a name="sensitive_body_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput"></a>

```python
sensitive_body_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version_input`<sup>Optional</sup> <a name="sensitive_body_version_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput"></a>

```python
sensitive_body_version_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sensitive_response_export_values_input`<sup>Optional</sup> <a name="sensitive_response_export_values_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput"></a>

```python
sensitive_response_export_values_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ResourceActionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `when_input`<sup>Optional</sup> <a name="when_input" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput"></a>

```python
when_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ignore_not_found`<sup>Required</sup> <a name="ignore_not_found" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound"></a>

```python
ignore_not_found: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `query_parameters`<sup>Required</sup> <a name="query_parameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters"></a>

```python
query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `response_export_values`<sup>Required</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues"></a>

```python
response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### ~~`sensitive_body`~~<sup>Required</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `sensitive_body_version`<sup>Required</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sensitive_response_export_values`<sup>Required</sup> <a name="sensitive_response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues"></a>

```python
sensitive_response_export_values: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.when"></a>

```python
when: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceActionConfig <a name="ResourceActionConfig" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_id: str,
  type: str,
  action: str = None,
  body: typing.Mapping[typing.Any] = None,
  headers: typing.Mapping[str] = None,
  ignore_not_found: bool | IResolvable = None,
  locks: typing.List[str] = None,
  method: str = None,
  query_parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  response_export_values: typing.Mapping[typing.Any] = None,
  retry: ResourceActionRetry = None,
  sensitive_body: typing.Mapping[typing.Any] = None,
  sensitive_body_version: typing.Mapping[str] = None,
  sensitive_response_export_values: typing.Mapping[typing.Any] = None,
  timeouts: ResourceActionTimeouts = None,
  when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type">type</a></code> | <code>str</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action">action</a></code> | <code>str</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body">body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound">ignore_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks">locks</a></code> | <code>typing.List[str]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method">method</a></code> | <code>str</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters">query_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues">response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody">sensitive_body</a></code> | <code>typing.Mapping[typing.Any]</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion">sensitive_body_version</a></code> | <code>typing.Mapping[str]</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues">sensitive_response_export_values</a></code> | <code>typing.Mapping[typing.Any]</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when">when</a></code> | <code>str</code> | When to perform the action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body"></a>

```python
body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `ignore_not_found`<sup>Optional</sup> <a name="ignore_not_found" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound"></a>

```python
ignore_not_found: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks"></a>

```python
locks: typing.List[str]
```

- *Type:* typing.List[str]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method"></a>

```python
method: str
```

- *Type:* str

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters"></a>

```python
query_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `response_export_values`<sup>Optional</sup> <a name="response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#response_export_values ResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry"></a>

```python
retry: ResourceActionRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `sensitive_body`<sup>Optional</sup> <a name="sensitive_body" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody"></a>

```python
sensitive_body: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `sensitive_body_version`<sup>Optional</sup> <a name="sensitive_body_version" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion"></a>

```python
sensitive_body_version: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `sensitive_response_export_values`<sup>Optional</sup> <a name="sensitive_response_export_values" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues"></a>

```python
sensitive_response_export_values: typing.Mapping[typing.Any]
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_response_export_values ResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts"></a>

```python
timeouts: ResourceActionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when"></a>

```python
when: str
```

- *Type:* str

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

### ResourceActionRetry <a name="ResourceActionRetry" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceActionRetry(
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
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | The randomization factor to apply to the interval between retries. |

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#error_message_regex ResourceAction#error_message_regex}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#interval_seconds ResourceAction#interval_seconds}

---

##### `max_interval_seconds`<sup>Optional</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#max_interval_seconds ResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#multiplier ResourceAction#multiplier}

---

##### `randomization_factor`<sup>Optional</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#randomization_factor ResourceAction#randomization_factor}

---

### ResourceActionTimeouts <a name="ResourceActionTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceActionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#create ResourceAction#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#delete ResourceAction#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#read ResourceAction#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#update ResourceAction#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceActionRetryOutputReference <a name="ResourceActionRetryOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceActionRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds">reset_max_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor">reset_randomization_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_max_interval_seconds` <a name="reset_max_interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```python
def reset_max_interval_seconds() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```

##### `reset_randomization_factor` <a name="reset_randomization_factor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```python
def reset_randomization_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput">error_message_regex_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput">max_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput">randomization_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex">error_message_regex</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds">max_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor">randomization_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_regex_input`<sup>Optional</sup> <a name="error_message_regex_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```python
error_message_regex_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds_input`<sup>Optional</sup> <a name="max_interval_seconds_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```python
max_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor_input`<sup>Optional</sup> <a name="randomization_factor_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```python
randomization_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message_regex`<sup>Required</sup> <a name="error_message_regex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```python
error_message_regex: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_interval_seconds`<sup>Required</sup> <a name="max_interval_seconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```python
max_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `randomization_factor`<sup>Required</sup> <a name="randomization_factor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor"></a>

```python
randomization_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceActionRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---


### ResourceActionTimeoutsOutputReference <a name="ResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azapi import resource_action

resourceAction.ResourceActionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceActionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---



