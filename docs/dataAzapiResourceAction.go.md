# `dataAzapiResourceAction` Submodule <a name="`dataAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceAction <a name="DataAzapiResourceAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.NewDataAzapiResourceAction(scope Construct, id *string, config DataAzapiResourceActionConfig) DataAzapiResourceAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig">DataAzapiResourceActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig">DataAzapiResourceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues">ResetSensitiveResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry"></a>

```go
func PutRetry(value DataAzapiResourceActionRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts"></a>

```go
func PutTimeouts(value DataAzapiResourceActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction"></a>

```go
func ResetAction()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters"></a>

```go
func ResetQueryParameters()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues"></a>

```go
func ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetSensitiveResponseExportValues` <a name="ResetSensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues"></a>

```go
func ResetSensitiveResponseExportValues()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.DataAzapiResourceAction_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.DataAzapiResourceAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.DataAzapiResourceAction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.DataAzapiResourceAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzapiResourceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzapiResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output">Output</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput">SensitiveOutput</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput">BodyInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput">QueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput">SensitiveResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body">Body</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters">QueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output"></a>

```go
func Output() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry"></a>

```go
func Retry() DataAzapiResourceActionRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a>

---

##### `SensitiveOutput`<sup>Required</sup> <a name="SensitiveOutput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput"></a>

```go
func SensitiveOutput() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts"></a>

```go
func Timeouts() DataAzapiResourceActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput"></a>

```go
func BodyInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput"></a>

```go
func QueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput"></a>

```go
func ResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `SensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="SensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput"></a>

```go
func SensitiveResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body"></a>

```go
func Body() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters"></a>

```go
func QueryParameters() interface{}
```

- *Type:* interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues"></a>

```go
func ResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SensitiveResponseExportValues`<sup>Required</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues"></a>

```go
func SensitiveResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceActionConfig <a name="DataAzapiResourceActionConfig" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

&dataazapiresourceaction.DataAzapiResourceActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	Action: *string,
	Body: *map[string]interface{},
	Headers: *map[string]*string,
	Method: *string,
	QueryParameters: interface{},
	ResourceId: *string,
	ResponseExportValues: *map[string]interface{},
	Retry: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry,
	SensitiveResponseExportValues: *map[string]interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type">Type</a></code> | <code>*string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action">Action</a></code> | <code>*string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body">Body</a></code> | <code>*map[string]interface{}</code> | The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers">Headers</a></code> | <code>*map[string]*string</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP method to use when performing the action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters">QueryParameters</a></code> | <code>interface{}</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | The ID of the Azure resource to perform the action on. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#type DataAzapiResourceAction#type}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#action DataAzapiResourceAction#action}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body"></a>

```go
Body *map[string]interface{}
```

- *Type:* *map[string]interface{}

The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#body DataAzapiResourceAction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#headers DataAzapiResourceAction#headers}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP method to use when performing the action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#method DataAzapiResourceAction#method}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters"></a>

```go
QueryParameters interface{}
```

- *Type:* interface{}

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#query_parameters DataAzapiResourceAction#query_parameters}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

The ID of the Azure resource to perform the action on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#resource_id DataAzapiResourceAction#resource_id}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues"></a>

```go
ResponseExportValues *map[string]interface{}
```

- *Type:* *map[string]interface{}

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

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry"></a>

```go
Retry DataAzapiResourceActionRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#retry DataAzapiResourceAction#retry}

---

##### `SensitiveResponseExportValues`<sup>Optional</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues"></a>

```go
SensitiveResponseExportValues *map[string]interface{}
```

- *Type:* *map[string]interface{}

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

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts"></a>

```go
Timeouts DataAzapiResourceActionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#timeouts DataAzapiResourceAction#timeouts}

---

### DataAzapiResourceActionRetry <a name="DataAzapiResourceActionRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

&dataazapiresourceaction.DataAzapiResourceActionRetry {
	ErrorMessageRegex: *[]*string,
	IntervalSeconds: *f64,
	MaxIntervalSeconds: *f64,
	Multiplier: *f64,
	RandomizationFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex"></a>

```go
ErrorMessageRegex *[]*string
```

- *Type:* *[]*string

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#error_message_regex DataAzapiResourceAction#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#interval_seconds DataAzapiResourceAction#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```go
MaxIntervalSeconds *f64
```

- *Type:* *f64

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#max_interval_seconds DataAzapiResourceAction#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#multiplier DataAzapiResourceAction#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor"></a>

```go
RandomizationFactor *f64
```

- *Type:* *f64

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#randomization_factor DataAzapiResourceAction#randomization_factor}

---

### DataAzapiResourceActionTimeouts <a name="DataAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

&dataazapiresourceaction.DataAzapiResourceActionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read">Read</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#read DataAzapiResourceAction#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceActionRetryOutputReference <a name="DataAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.NewDataAzapiResourceActionRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzapiResourceActionRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```go
func ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```go
func ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```go
func ErrorMessageRegexInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```go
func MaxIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```go
func RandomizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```go
func ErrorMessageRegex() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```go
func MaxIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```go
func RandomizationFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzapiResourceActionTimeoutsOutputReference <a name="DataAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapiresourceaction"

dataazapiresourceaction.NewDataAzapiResourceActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzapiResourceActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



