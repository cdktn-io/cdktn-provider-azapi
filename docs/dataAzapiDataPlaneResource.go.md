# `dataAzapiDataPlaneResource` Submodule <a name="`dataAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiDataPlaneResource <a name="DataAzapiDataPlaneResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.NewDataAzapiDataPlaneResource(scope Construct, id *string, config DataAzapiDataPlaneResourceConfig) DataAzapiDataPlaneResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig">DataAzapiDataPlaneResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig">DataAzapiDataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry"></a>

```go
func PutRetry(value DataAzapiDataPlaneResourceRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts"></a>

```go
func PutTimeouts(value DataAzapiDataPlaneResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName"></a>

```go
func ResetName()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues"></a>

```go
func ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.DataAzapiDataPlaneResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.DataAzapiDataPlaneResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.DataAzapiDataPlaneResource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.DataAzapiDataPlaneResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzapiDataPlaneResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzapiDataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiDataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body">Body</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output">Output</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body"></a>

```go
func Body() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output"></a>

```go
func Output() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry"></a>

```go
func Retry() DataAzapiDataPlaneResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts"></a>

```go
func Timeouts() DataAzapiDataPlaneResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```go
func ResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues"></a>

```go
func ResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiDataPlaneResourceConfig <a name="DataAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

&dataazapidataplaneresource.DataAzapiDataPlaneResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ParentId: *string,
	Type: *string,
	Name: *string,
	ResponseExportValues: *map[string]interface{},
	Retry: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry,
	Timeouts: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId">ParentId</a></code> | <code>*string</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type">Type</a></code> | <code>*string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#parent_id DataAzapiDataPlaneResource#parent_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#type DataAzapiDataPlaneResource#type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#name DataAzapiDataPlaneResource#name}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#response_export_values DataAzapiDataPlaneResource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry"></a>

```go
Retry DataAzapiDataPlaneResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#retry DataAzapiDataPlaneResource#retry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts"></a>

```go
Timeouts DataAzapiDataPlaneResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#timeouts DataAzapiDataPlaneResource#timeouts}

---

### DataAzapiDataPlaneResourceRetry <a name="DataAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

&dataazapidataplaneresource.DataAzapiDataPlaneResourceRetry {
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```go
ErrorMessageRegex *[]*string
```

- *Type:* *[]*string

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#error_message_regex DataAzapiDataPlaneResource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#interval_seconds DataAzapiDataPlaneResource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```go
MaxIntervalSeconds *f64
```

- *Type:* *f64

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#max_interval_seconds DataAzapiDataPlaneResource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#multiplier DataAzapiDataPlaneResource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```go
RandomizationFactor *f64
```

- *Type:* *f64

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#randomization_factor DataAzapiDataPlaneResource#randomization_factor}

---

### DataAzapiDataPlaneResourceTimeouts <a name="DataAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

&dataazapidataplaneresource.DataAzapiDataPlaneResourceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read">Read</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#read DataAzapiDataPlaneResource#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiDataPlaneResourceRetryOutputReference <a name="DataAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.NewDataAzapiDataPlaneResourceRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzapiDataPlaneResourceRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```go
func ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```go
func ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```go
func ErrorMessageRegexInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```go
func MaxIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```go
func RandomizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```go
func ErrorMessageRegex() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```go
func MaxIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```go
func RandomizationFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzapiDataPlaneResourceTimeoutsOutputReference <a name="DataAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/dataazapidataplaneresource"

dataazapidataplaneresource.NewDataAzapiDataPlaneResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzapiDataPlaneResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



