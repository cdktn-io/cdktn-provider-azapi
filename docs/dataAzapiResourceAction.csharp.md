# `dataAzapiResourceAction` Submodule <a name="`dataAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceAction <a name="DataAzapiResourceAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceAction(Construct Scope, string Id, DataAzapiResourceActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig">DataAzapiResourceActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry"></a>

```csharp
private void PutRetry(DataAzapiResourceActionRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzapiResourceActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetSensitiveResponseExportValues` <a name="ResetSensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues"></a>

```csharp
private void ResetSensitiveResponseExportValues()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceAction.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiResourceAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput">SensitiveOutput</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput">BodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput">QueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput">SensitiveResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry"></a>

```csharp
public DataAzapiResourceActionRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a>

---

##### `SensitiveOutput`<sup>Required</sup> <a name="SensitiveOutput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput"></a>

```csharp
public AnyMap SensitiveOutput { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts"></a>

```csharp
public DataAzapiResourceActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> BodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput"></a>

```csharp
public IResolvable|DataAzapiResourceActionRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `SensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="SensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzapiResourceActionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveResponseExportValues`<sup>Required</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceActionConfig <a name="DataAzapiResourceActionConfig" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceActionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Type,
    string Action = null,
    System.Collections.Generic.IDictionary<string, object> Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string Method = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters = null,
    string ResourceId = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    DataAzapiResourceActionRetry Retry = null,
    System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues = null,
    DataAzapiResourceActionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action">Action</a></code> | <code>string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method">Method</a></code> | <code>string</code> | The HTTP method to use when performing the action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of the Azure resource to perform the action on. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues">SensitiveResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#type DataAzapiResourceAction#type}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#action DataAzapiResourceAction#action}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#body DataAzapiResourceAction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#headers DataAzapiResourceAction#headers}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The HTTP method to use when performing the action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#method DataAzapiResourceAction#method}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#query_parameters DataAzapiResourceAction#query_parameters}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of the Azure resource to perform the action on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#resource_id DataAzapiResourceAction#resource_id}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#response_export_values DataAzapiResourceAction#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry"></a>

```csharp
public DataAzapiResourceActionRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#retry DataAzapiResourceAction#retry}

---

##### `SensitiveResponseExportValues`<sup>Optional</sup> <a name="SensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveResponseExportValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

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

```csharp
public DataAzapiResourceActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#timeouts DataAzapiResourceAction#timeouts}

---

### DataAzapiResourceActionRetry <a name="DataAzapiResourceActionRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceActionRetry {
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#error_message_regex DataAzapiResourceAction#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#interval_seconds DataAzapiResourceAction#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#max_interval_seconds DataAzapiResourceAction#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#multiplier DataAzapiResourceAction#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#randomization_factor DataAzapiResourceAction#randomization_factor}

---

### DataAzapiResourceActionTimeouts <a name="DataAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceActionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#read DataAzapiResourceAction#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceActionRetryOutputReference <a name="DataAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceActionRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceActionRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---


### DataAzapiResourceActionTimeoutsOutputReference <a name="DataAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceActionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---



