# `resourceAction` Submodule <a name="`resourceAction` Submodule" id="@cdktn/provider-azapi.resourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceAction <a name="ResourceAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.NewResourceAction(scope Construct, id *string, config ResourceActionConfig) ResourceAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig">ResourceActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig">ResourceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound">ResetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody">ResetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion">ResetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues">ResetSensitiveResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen">ResetWhen</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry"></a>

```go
func PutRetry(value ResourceActionRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts"></a>

```go
func PutTimeouts(value ResourceActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction"></a>

```go
func ResetAction()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIgnoreNotFound` <a name="ResetIgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound"></a>

```go
func ResetIgnoreNotFound()
```

##### `ResetLocks` <a name="ResetLocks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters"></a>

```go
func ResetQueryParameters()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues"></a>

```go
func ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetSensitiveBody` <a name="ResetSensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody"></a>

```go
func ResetSensitiveBody()
```

##### `ResetSensitiveBodyVersion` <a name="ResetSensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion"></a>

```go
func ResetSensitiveBodyVersion()
```

##### `ResetSensitiveResponseExportValues` <a name="ResetSensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues"></a>

```go
func ResetSensitiveResponseExportValues()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWhen` <a name="ResetWhen" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen"></a>

```go
func ResetWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.ResourceAction_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.ResourceAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.ResourceAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.ResourceAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist">Exist</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.output">Output</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput">SensitiveOutput</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput">BodyInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput">IgnoreNotFoundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput">LocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput">QueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput">SensitiveBodyInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput">SensitiveBodyVersionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput">SensitiveResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput">WhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.body">Body</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks">Locks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters">QueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody">SensitiveBody</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.when">When</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Exist`<sup>Required</sup> <a name="Exist" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist"></a>

```go
func Exist() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.output"></a>

```go
func Output() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry"></a>

```go
func Retry() ResourceActionRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a>

---

##### `SensitiveOutput`<sup>Required</sup> <a name="SensitiveOutput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput"></a>

```go
func SensitiveOutput() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts"></a>

```go
func Timeouts() ResourceActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput"></a>

```go
func BodyInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IgnoreNotFoundInput`<sup>Optional</sup> <a name="IgnoreNotFoundInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput"></a>

```go
func IgnoreNotFoundInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput"></a>

```go
func LocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput"></a>

```go
func QueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput"></a>

```go
func ResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `SensitiveBodyInput`<sup>Optional</sup> <a name="SensitiveBodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput"></a>

```go
func SensitiveBodyInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SensitiveBodyVersionInput`<sup>Optional</sup> <a name="SensitiveBodyVersionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput"></a>

```go
func SensitiveBodyVersionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="SensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput"></a>

```go
func SensitiveResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WhenInput`<sup>Optional</sup> <a name="WhenInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput"></a>

```go
func WhenInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.body"></a>

```go
func Body() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IgnoreNotFound`<sup>Required</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound"></a>

```go
func IgnoreNotFound() interface{}
```

- *Type:* interface{}

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks"></a>

```go
func Locks() *[]*string
```

- *Type:* *[]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters"></a>

```go
func QueryParameters() interface{}
```

- *Type:* interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues"></a>

```go
func ResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### ~~`SensitiveBody`~~<sup>Required</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func SensitiveBody() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SensitiveBodyVersion`<sup>Required</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion"></a>

```go
func SensitiveBodyVersion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SensitiveResponseExportValues`<sup>Required</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues"></a>

```go
func SensitiveResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `When`<sup>Required</sup> <a name="When" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.when"></a>

```go
func When() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceActionConfig <a name="ResourceActionConfig" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

&resourceaction.ResourceActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceId: *string,
	Type: *string,
	Action: *string,
	Body: *map[string]interface{},
	Headers: *map[string]*string,
	IgnoreNotFound: interface{},
	Locks: *[]*string,
	Method: *string,
	QueryParameters: interface{},
	ResponseExportValues: *map[string]interface{},
	Retry: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.resourceAction.ResourceActionRetry,
	SensitiveBody: *map[string]interface{},
	SensitiveBodyVersion: *map[string]*string,
	SensitiveResponseExportValues: *map[string]interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.resourceAction.ResourceActionTimeouts,
	When: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type">Type</a></code> | <code>*string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action">Action</a></code> | <code>*string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body">Body</a></code> | <code>*map[string]interface{}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers">Headers</a></code> | <code>*map[string]*string</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>interface{}</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks">Locks</a></code> | <code>*[]*string</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method">Method</a></code> | <code>*string</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters">QueryParameters</a></code> | <code>interface{}</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody">SensitiveBody</a></code> | <code>*map[string]interface{}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>*map[string]*string</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when">When</a></code> | <code>*string</code> | When to perform the action. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body"></a>

```go
Body *map[string]interface{}
```

- *Type:* *map[string]interface{}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `IgnoreNotFound`<sup>Optional</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound"></a>

```go
IgnoreNotFound interface{}
```

- *Type:* interface{}

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks"></a>

```go
Locks *[]*string
```

- *Type:* *[]*string

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters"></a>

```go
QueryParameters interface{}
```

- *Type:* interface{}

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#response_export_values ResourceAction#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry"></a>

```go
Retry ResourceActionRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `SensitiveBody`<sup>Optional</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody"></a>

```go
SensitiveBody *map[string]interface{}
```

- *Type:* *map[string]interface{}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `SensitiveBodyVersion`<sup>Optional</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion"></a>

```go
SensitiveBodyVersion *map[string]*string
```

- *Type:* *map[string]*string

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `SensitiveResponseExportValues`<sup>Optional</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues"></a>

```go
SensitiveResponseExportValues *map[string]interface{}
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_response_export_values ResourceAction#sensitive_response_export_values}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts"></a>

```go
Timeouts ResourceActionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `When`<sup>Optional</sup> <a name="When" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when"></a>

```go
When *string
```

- *Type:* *string

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

### ResourceActionRetry <a name="ResourceActionRetry" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

&resourceaction.ResourceActionRetry {
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
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex"></a>

```go
ErrorMessageRegex *[]*string
```

- *Type:* *[]*string

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#error_message_regex ResourceAction#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#interval_seconds ResourceAction#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds"></a>

```go
MaxIntervalSeconds *f64
```

- *Type:* *f64

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#max_interval_seconds ResourceAction#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#multiplier ResourceAction#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor"></a>

```go
RandomizationFactor *f64
```

- *Type:* *f64

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#randomization_factor ResourceAction#randomization_factor}

---

### ResourceActionTimeouts <a name="ResourceActionTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

&resourceaction.ResourceActionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read">Read</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#create ResourceAction#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#delete ResourceAction#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#read ResourceAction#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#update ResourceAction#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceActionRetryOutputReference <a name="ResourceActionRetryOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.NewResourceActionRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceActionRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```go
func ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```go
func ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```go
func ErrorMessageRegexInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```go
func MaxIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```go
func RandomizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```go
func ErrorMessageRegex() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```go
func MaxIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor"></a>

```go
func RandomizationFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceActionTimeoutsOutputReference <a name="ResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resourceaction"

resourceaction.NewResourceActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



