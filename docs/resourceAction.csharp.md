# `resourceAction` Submodule <a name="`resourceAction` Submodule" id="@cdktn/provider-azapi.resourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceAction <a name="ResourceAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceAction(Construct Scope, string Id, ResourceActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig">ResourceActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.resourceAction.ResourceAction.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.resourceAction.ResourceAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.resourceAction.ResourceAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azapi.resourceAction.ResourceAction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry"></a>

```csharp
private void PutRetry(ResourceActionRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.resourceAction.ResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIgnoreNotFound` <a name="ResetIgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetIgnoreNotFound"></a>

```csharp
private void ResetIgnoreNotFound()
```

##### `ResetLocks` <a name="ResetLocks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetSensitiveBody` <a name="ResetSensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBody"></a>

```csharp
private void ResetSensitiveBody()
```

##### `ResetSensitiveBodyVersion` <a name="ResetSensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveBodyVersion"></a>

```csharp
private void ResetSensitiveBodyVersion()
```

##### `ResetSensitiveResponseExportValues` <a name="ResetSensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetSensitiveResponseExportValues"></a>

```csharp
private void ResetSensitiveResponseExportValues()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWhen` <a name="ResetWhen" id="@cdktn/provider-azapi.resourceAction.ResourceAction.resetWhen"></a>

```csharp
private void ResetWhen()
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

```csharp
using Io.Cdktn.Providers.Azapi;

ResourceAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

ResourceAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

ResourceAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.resourceAction.ResourceAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

ResourceAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ResourceAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist">Exist</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput">SensitiveOutput</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput">BodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput">IgnoreNotFoundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput">LocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput">QueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput">SensitiveBodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput">SensitiveBodyVersionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput">SensitiveResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput">WhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks">Locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.when">When</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Exist`<sup>Required</sup> <a name="Exist" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.exist"></a>

```csharp
public IResolvable Exist { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retry"></a>

```csharp
public ResourceActionRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference">ResourceActionRetryOutputReference</a>

---

##### `SensitiveOutput`<sup>Required</sup> <a name="SensitiveOutput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveOutput"></a>

```csharp
public AnyMap SensitiveOutput { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeouts"></a>

```csharp
public ResourceActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference">ResourceActionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.bodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> BodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IgnoreNotFoundInput`<sup>Optional</sup> <a name="IgnoreNotFoundInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFoundInput"></a>

```csharp
public bool|IResolvable IgnoreNotFoundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locksInput"></a>

```csharp
public string[] LocksInput { get; }
```

- *Type:* string[]

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.retryInput"></a>

```csharp
public IResolvable|ResourceActionRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---

##### `SensitiveBodyInput`<sup>Optional</sup> <a name="SensitiveBodyInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveBodyVersionInput`<sup>Optional</sup> <a name="SensitiveBodyVersionInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="SensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.timeoutsInput"></a>

```csharp
public IResolvable|ResourceActionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WhenInput`<sup>Optional</sup> <a name="WhenInput" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.whenInput"></a>

```csharp
public string WhenInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IgnoreNotFound`<sup>Required</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.ignoreNotFound"></a>

```csharp
public bool|IResolvable IgnoreNotFound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.locks"></a>

```csharp
public string[] Locks { get; }
```

- *Type:* string[]

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### ~~`SensitiveBody`~~<sup>Required</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveBodyVersion`<sup>Required</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveBodyVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SensitiveResponseExportValues`<sup>Required</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.sensitiveResponseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `When`<sup>Required</sup> <a name="When" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.when"></a>

```csharp
public string When { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.resourceAction.ResourceAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceActionConfig <a name="ResourceActionConfig" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceActionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceId,
    string Type,
    string Action = null,
    System.Collections.Generic.IDictionary<string, object> Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    bool|IResolvable IgnoreNotFound = null,
    string[] Locks = null,
    string Method = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    ResourceActionRetry Retry = null,
    System.Collections.Generic.IDictionary<string, object> SensitiveBody = null,
    System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion = null,
    System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues = null,
    ResourceActionTimeouts Timeouts = null,
    string When = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action">Action</a></code> | <code>string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks">Locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method">Method</a></code> | <code>string</code> | Specifies the HTTP method of the azure resource action. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when">When</a></code> | <code>string</code> | When to perform the action. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#resource_id ResourceAction#resource_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#type ResourceAction#type}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#action ResourceAction#action}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#body ResourceAction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#headers ResourceAction#headers}

---

##### `IgnoreNotFound`<sup>Optional</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.ignoreNotFound"></a>

```csharp
public bool|IResolvable IgnoreNotFound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to `true`, the resource action will ignore `Not Found` errors returned from the Azure API.

Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#ignore_not_found ResourceAction#ignore_not_found}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.locks"></a>

```csharp
public string[] Locks { get; set; }
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#locks ResourceAction#locks}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Specifies the HTTP method of the azure resource action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#method ResourceAction#method}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#query_parameters ResourceAction#query_parameters}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

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

```csharp
public ResourceActionRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#retry ResourceAction#retry}

---

##### `SensitiveBody`<sup>Optional</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBody"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body ResourceAction#sensitive_body}

---

##### `SensitiveBodyVersion`<sup>Optional</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveBodyVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#sensitive_body_version ResourceAction#sensitive_body_version}

---

##### `SensitiveResponseExportValues`<sup>Optional</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.sensitiveResponseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

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

```csharp
public ResourceActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#timeouts ResourceAction#timeouts}

---

##### `When`<sup>Optional</sup> <a name="When" id="@cdktn/provider-azapi.resourceAction.ResourceActionConfig.property.when"></a>

```csharp
public string When { get; set; }
```

- *Type:* string

When to perform the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#when ResourceAction#when}

---

### ResourceActionRetry <a name="ResourceActionRetry" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceActionRetry {
    string[] ErrorMessageRegex,
    double IntervalSeconds = null,
    double MaxIntervalSeconds = null,
    double Multiplier = null,
    double RandomizationFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#error_message_regex ResourceAction#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#interval_seconds ResourceAction#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#max_interval_seconds ResourceAction#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#multiplier ResourceAction#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#randomization_factor ResourceAction#randomization_factor}

---

### ResourceActionTimeouts <a name="ResourceActionTimeouts" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceActionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#create ResourceAction#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#delete ResourceAction#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#read ResourceAction#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource_action#update ResourceAction#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceActionRetryOutputReference <a name="ResourceActionRetryOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceActionRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResourceActionRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionRetry">ResourceActionRetry</a>

---


### ResourceActionTimeoutsOutputReference <a name="ResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new ResourceActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resourceAction.ResourceActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResourceActionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.resourceAction.ResourceActionTimeouts">ResourceActionTimeouts</a>

---



