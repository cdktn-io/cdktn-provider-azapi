# `dataPlaneResource` Submodule <a name="`dataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPlaneResource <a name="DataPlaneResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResource(Construct Scope, string Id, DataPlaneResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig">DataPlaneResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig">DataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders">ResetCreateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters">ResetCreateQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders">ResetDeleteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters">ResetDeleteQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing">ResetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty">ResetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders">ResetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters">ResetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues">ResetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs">ResetReplaceTriggersRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody">ResetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion">ResetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders">ResetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters">ResetUpdateQueryParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry"></a>

```csharp
private void PutRetry(DataPlaneResourceRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts"></a>

```csharp
private void PutTimeouts(DataPlaneResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetCreateHeaders` <a name="ResetCreateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders"></a>

```csharp
private void ResetCreateHeaders()
```

##### `ResetCreateQueryParameters` <a name="ResetCreateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters"></a>

```csharp
private void ResetCreateQueryParameters()
```

##### `ResetDeleteHeaders` <a name="ResetDeleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders"></a>

```csharp
private void ResetDeleteHeaders()
```

##### `ResetDeleteQueryParameters` <a name="ResetDeleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters"></a>

```csharp
private void ResetDeleteQueryParameters()
```

##### `ResetIgnoreCasing` <a name="ResetIgnoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing"></a>

```csharp
private void ResetIgnoreCasing()
```

##### `ResetIgnoreMissingProperty` <a name="ResetIgnoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty"></a>

```csharp
private void ResetIgnoreMissingProperty()
```

##### `ResetLocks` <a name="ResetLocks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetReadHeaders` <a name="ResetReadHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders"></a>

```csharp
private void ResetReadHeaders()
```

##### `ResetReadQueryParameters` <a name="ResetReadQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters"></a>

```csharp
private void ResetReadQueryParameters()
```

##### `ResetReplaceTriggersExternalValues` <a name="ResetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues"></a>

```csharp
private void ResetReplaceTriggersExternalValues()
```

##### `ResetReplaceTriggersRefs` <a name="ResetReplaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs"></a>

```csharp
private void ResetReplaceTriggersRefs()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetSensitiveBody` <a name="ResetSensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody"></a>

```csharp
private void ResetSensitiveBody()
```

##### `ResetSensitiveBodyVersion` <a name="ResetSensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion"></a>

```csharp
private void ResetSensitiveBodyVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateHeaders` <a name="ResetUpdateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders"></a>

```csharp
private void ResetUpdateHeaders()
```

##### `ResetUpdateQueryParameters` <a name="ResetUpdateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters"></a>

```csharp
private void ResetUpdateQueryParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataPlaneResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataPlaneResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataPlaneResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataPlaneResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPlaneResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput">BodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput">CreateHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput">CreateQueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput">DeleteHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput">DeleteQueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput">IgnoreCasingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput">IgnoreMissingPropertyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput">LocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput">ReadHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput">ReadQueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput">ReplaceTriggersExternalValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput">ReplaceTriggersRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput">SensitiveBodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput">SensitiveBodyVersionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput">UpdateHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput">UpdateQueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders">CreateHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters">CreateQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders">DeleteHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters">DeleteQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing">IgnoreCasing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty">IgnoreMissingProperty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks">Locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders">ReadHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters">ReadQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues">ReplaceTriggersExternalValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs">ReplaceTriggersRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders">UpdateHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters">UpdateQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry"></a>

```csharp
public DataPlaneResourceRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts"></a>

```csharp
public DataPlaneResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> BodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `CreateHeadersInput`<sup>Optional</sup> <a name="CreateHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CreateHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateQueryParametersInput`<sup>Optional</sup> <a name="CreateQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CreateQueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DeleteHeadersInput`<sup>Optional</sup> <a name="DeleteHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeleteHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteQueryParametersInput`<sup>Optional</sup> <a name="DeleteQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> DeleteQueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `IgnoreCasingInput`<sup>Optional</sup> <a name="IgnoreCasingInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput"></a>

```csharp
public bool|IResolvable IgnoreCasingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoreMissingPropertyInput`<sup>Optional</sup> <a name="IgnoreMissingPropertyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput"></a>

```csharp
public bool|IResolvable IgnoreMissingPropertyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput"></a>

```csharp
public string[] LocksInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `ReadHeadersInput`<sup>Optional</sup> <a name="ReadHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ReadHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReadQueryParametersInput`<sup>Optional</sup> <a name="ReadQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ReadQueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ReplaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="ReplaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ReplaceTriggersExternalValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ReplaceTriggersRefsInput`<sup>Optional</sup> <a name="ReplaceTriggersRefsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput"></a>

```csharp
public string[] ReplaceTriggersRefsInput { get; }
```

- *Type:* string[]

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput"></a>

```csharp
public IResolvable|DataPlaneResourceRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `SensitiveBodyInput`<sup>Optional</sup> <a name="SensitiveBodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveBodyVersionInput`<sup>Optional</sup> <a name="SensitiveBodyVersionInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput"></a>

```csharp
public IResolvable|DataPlaneResourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpdateHeadersInput`<sup>Optional</sup> <a name="UpdateHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UpdateHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpdateQueryParametersInput`<sup>Optional</sup> <a name="UpdateQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> UpdateQueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `CreateHeaders`<sup>Required</sup> <a name="CreateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CreateHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateQueryParameters`<sup>Required</sup> <a name="CreateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> CreateQueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `DeleteHeaders`<sup>Required</sup> <a name="DeleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeleteHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteQueryParameters`<sup>Required</sup> <a name="DeleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> DeleteQueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `IgnoreCasing`<sup>Required</sup> <a name="IgnoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing"></a>

```csharp
public bool|IResolvable IgnoreCasing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoreMissingProperty`<sup>Required</sup> <a name="IgnoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty"></a>

```csharp
public bool|IResolvable IgnoreMissingProperty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks"></a>

```csharp
public string[] Locks { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `ReadHeaders`<sup>Required</sup> <a name="ReadHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ReadHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReadQueryParameters`<sup>Required</sup> <a name="ReadQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ReadQueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ReplaceTriggersExternalValues`<sup>Required</sup> <a name="ReplaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ReplaceTriggersExternalValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ReplaceTriggersRefs`<sup>Required</sup> <a name="ReplaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs"></a>

```csharp
public string[] ReplaceTriggersRefs { get; }
```

- *Type:* string[]

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### ~~`SensitiveBody`~~<sup>Required</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveBodyVersion`<sup>Required</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateHeaders`<sup>Required</sup> <a name="UpdateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UpdateHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpdateQueryParameters`<sup>Required</sup> <a name="UpdateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> UpdateQueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPlaneResourceConfig <a name="DataPlaneResourceConfig" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ParentId,
    string Type,
    System.Collections.Generic.IDictionary<string, object> Body = null,
    System.Collections.Generic.IDictionary<string, string> CreateHeaders = null,
    System.Collections.Generic.IDictionary<string, string[]>|IResolvable CreateQueryParameters = null,
    System.Collections.Generic.IDictionary<string, string> DeleteHeaders = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> DeleteQueryParameters = null,
    bool|IResolvable IgnoreCasing = null,
    bool|IResolvable IgnoreMissingProperty = null,
    string[] Locks = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> ReadHeaders = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> ReadQueryParameters = null,
    System.Collections.Generic.IDictionary<string, object> ReplaceTriggersExternalValues = null,
    string[] ReplaceTriggersRefs = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    DataPlaneResourceRetry Retry = null,
    System.Collections.Generic.IDictionary<string, object> SensitiveBody = null,
    System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion = null,
    DataPlaneResourceTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UpdateHeaders = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> UpdateQueryParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId">ParentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders">CreateHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters">CreateQueryParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string[]>\|Io.Cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders">DeleteHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters">DeleteQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing">IgnoreCasing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty">IgnoreMissingProperty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks">Locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders">ReadHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters">ReadQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues">ReplaceTriggersExternalValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs">ReplaceTriggersRefs</a></code> | <code>string[]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders">UpdateHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters">UpdateQueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A mapping of query parameters to be sent with the update request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `CreateHeaders`<sup>Optional</sup> <a name="CreateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CreateHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `CreateQueryParameters`<sup>Optional</sup> <a name="CreateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string[]>|IResolvable CreateQueryParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string[]>|Io.Cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `DeleteHeaders`<sup>Optional</sup> <a name="DeleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeleteHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `DeleteQueryParameters`<sup>Optional</sup> <a name="DeleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> DeleteQueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `IgnoreCasing`<sup>Optional</sup> <a name="IgnoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing"></a>

```csharp
public bool|IResolvable IgnoreCasing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `IgnoreMissingProperty`<sup>Optional</sup> <a name="IgnoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty"></a>

```csharp
public bool|IResolvable IgnoreMissingProperty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks"></a>

```csharp
public string[] Locks { get; set; }
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `ReadHeaders`<sup>Optional</sup> <a name="ReadHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ReadHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `ReadQueryParameters`<sup>Optional</sup> <a name="ReadQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ReadQueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `ReplaceTriggersExternalValues`<sup>Optional</sup> <a name="ReplaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ReplaceTriggersExternalValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_data_plane_resource" "example" {
  name = var.name
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@1.0"
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_external_values DataPlaneResource#replace_triggers_external_values}

---

##### `ReplaceTriggersRefs`<sup>Optional</sup> <a name="ReplaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs"></a>

```csharp
public string[] ReplaceTriggersRefs { get; set; }
```

- *Type:* string[]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#response_export_values DataPlaneResource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry"></a>

```csharp
public DataPlaneResourceRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#retry DataPlaneResource#retry}

---

##### `SensitiveBody`<sup>Optional</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `SensitiveBodyVersion`<sup>Optional</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SensitiveBodyVersion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts"></a>

```csharp
public DataPlaneResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `UpdateHeaders`<sup>Optional</sup> <a name="UpdateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UpdateHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `UpdateQueryParameters`<sup>Optional</sup> <a name="UpdateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> UpdateQueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

### DataPlaneResourceRetry <a name="DataPlaneResourceRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResourceRetry {
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
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#error_message_regex DataPlaneResource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#interval_seconds DataPlaneResource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#max_interval_seconds DataPlaneResource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#multiplier DataPlaneResource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#randomization_factor DataPlaneResource#randomization_factor}

---

### DataPlaneResourceTimeouts <a name="DataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResourceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create DataPlaneResource#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete DataPlaneResource#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read DataPlaneResource#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update DataPlaneResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPlaneResourceRetryOutputReference <a name="DataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResourceRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataPlaneResourceRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---


### DataPlaneResourceTimeoutsOutputReference <a name="DataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataPlaneResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataPlaneResourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---



