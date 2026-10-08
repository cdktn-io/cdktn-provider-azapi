# `ephemeralAzapiDataPlaneResource` Submodule <a name="`ephemeralAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiDataPlaneResource <a name="EphemeralAzapiDataPlaneResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.NewEphemeralAzapiDataPlaneResource(scope Construct, id *string, config EphemeralAzapiDataPlaneResourceConfig) EphemeralAzapiDataPlaneResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig">EphemeralAzapiDataPlaneResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig">EphemeralAzapiDataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry"></a>

```go
func PutRetry(value EphemeralAzapiDataPlaneResourceRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts"></a>

```go
func PutTimeouts(value EphemeralAzapiDataPlaneResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName"></a>

```go
func ResetName()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues"></a>

```go
func ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResource_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body">Body</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output">Output</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body"></a>

```go
func Body() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output"></a>

```go
func Output() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry"></a>

```go
func Retry() EphemeralAzapiDataPlaneResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts"></a>

```go
func Timeouts() EphemeralAzapiDataPlaneResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```go
func ResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues"></a>

```go
func ResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiDataPlaneResourceConfig <a name="EphemeralAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

&ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResourceConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	ParentId: *string,
	Type: *string,
	Name: *string,
	ResponseExportValues: *map[string]interface{},
	Retry: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry,
	Timeouts: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId">ParentId</a></code> | <code>*string</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type">Type</a></code> | <code>*string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry"></a>

```go
Retry EphemeralAzapiDataPlaneResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts"></a>

```go
Timeouts EphemeralAzapiDataPlaneResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}

---

### EphemeralAzapiDataPlaneResourceRetry <a name="EphemeralAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

&ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResourceRetry {
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
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```go
ErrorMessageRegex *[]*string
```

- *Type:* *[]*string

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```go
MaxIntervalSeconds *f64
```

- *Type:* *f64

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```go
RandomizationFactor *f64
```

- *Type:* *f64

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}

---

### EphemeralAzapiDataPlaneResourceTimeouts <a name="EphemeralAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

&ephemeralazapidataplaneresource.EphemeralAzapiDataPlaneResourceTimeouts {
	Open: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open">Open</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Open`<sup>Optional</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open"></a>

```go
Open *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiDataPlaneResourceRetryOutputReference <a name="EphemeralAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.NewEphemeralAzapiDataPlaneResourceRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EphemeralAzapiDataPlaneResourceRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```go
func ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```go
func ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```go
func ErrorMessageRegexInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```go
func MaxIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```go
func RandomizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```go
func ErrorMessageRegex() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```go
func MaxIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```go
func RandomizationFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EphemeralAzapiDataPlaneResourceTimeoutsOutputReference <a name="EphemeralAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/ephemeralazapidataplaneresource"

ephemeralazapidataplaneresource.NewEphemeralAzapiDataPlaneResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EphemeralAzapiDataPlaneResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen">ResetOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOpen` <a name="ResetOpen" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen"></a>

```go
func ResetOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput">OpenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open">Open</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OpenInput`<sup>Optional</sup> <a name="OpenInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput"></a>

```go
func OpenInput() *string
```

- *Type:* *string

---

##### `Open`<sup>Required</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open"></a>

```go
func Open() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



