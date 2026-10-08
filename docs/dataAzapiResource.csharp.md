# `dataAzapiResource` Submodule <a name="`dataAzapiResource` Submodule" id="@cdktn/provider-azapi.dataAzapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResource <a name="DataAzapiResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource azapi_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResource(Construct Scope, string Id, DataAzapiResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig">DataAzapiResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig">DataAzapiResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetIgnoreNotFound">ResetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry"></a>

```csharp
private void PutRetry(DataAzapiResourceRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzapiResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIgnoreNotFound` <a name="ResetIgnoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetIgnoreNotFound"></a>

```csharp
private void ResetIgnoreNotFound()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetParentId"></a>

```csharp
private void ResetParentId()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzapiResource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.exists">Exists</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList">DataAzapiResourceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference">DataAzapiResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference">DataAzapiResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFoundInput">IgnoreNotFoundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParametersInput">QueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.exists"></a>

```csharp
public IResolvable Exists { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.identity"></a>

```csharp
public DataAzapiResourceIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList">DataAzapiResourceIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retry"></a>

```csharp
public DataAzapiResourceRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference">DataAzapiResourceRetryOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeouts"></a>

```csharp
public DataAzapiResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference">DataAzapiResourceTimeoutsOutputReference</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IgnoreNotFoundInput`<sup>Optional</sup> <a name="IgnoreNotFoundInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFoundInput"></a>

```csharp
public bool|IResolvable IgnoreNotFoundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retryInput"></a>

```csharp
public IResolvable|DataAzapiResourceRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzapiResourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IgnoreNotFound`<sup>Required</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFound"></a>

```csharp
public bool|IResolvable IgnoreNotFound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceConfig <a name="DataAzapiResourceConfig" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Type,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    bool|IResolvable IgnoreNotFound = null,
    string Name = null,
    string ParentId = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters = null,
    string ResourceId = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    DataAzapiResourceRetry Retry = null,
    DataAzapiResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.ignoreNotFound">IgnoreNotFound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to `true`, the data source will not fail when the specified resource is not found (HTTP 404). |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.parentId">ParentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of the Azure resource to retrieve. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#type DataAzapiResource#type}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#headers DataAzapiResource#headers}

---

##### `IgnoreNotFound`<sup>Optional</sup> <a name="IgnoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.ignoreNotFound"></a>

```csharp
public bool|IResolvable IgnoreNotFound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to `true`, the data source will not fail when the specified resource is not found (HTTP 404).

Identifier attributes (`id`, `name`, `parent_id`, `resource_id`) will still be populated based on inputs; other computed attributes (`output`, `location`, `identity`, `tags`) will be null/empty. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#ignore_not_found DataAzapiResource#ignore_not_found}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the Azure resource.

Exactly one of the arguments `name` or `resource_id` must be set. It could be omitted if the `type` is `Microsoft.Resources/subscriptions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#name DataAzapiResource#name}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

The ID of the azure resource in which this resource is created.

It supports different kinds of deployment scope for **top level** resources:

* resource group scope: `parent_id` should be the ID of a resource group, it's recommended to manage a resource group by azurerm_resource_group.
* management group scope: `parent_id` should be the ID of a management group, it's recommended to manage a management group by azurerm_management_group.
* extension scope: `parent_id` should be the ID of the resource you're adding the extension to.
* subscription scope: `parent_id` should be like \x60/subscriptions/00000000-0000-0000-0000-000000000000\x60
* tenant scope: `parent_id` should be /

For child level resources, the `parent_id` should be the ID of its parent resource, for example, subnet resource's `parent_id` is the ID of the vnet.

For type `Microsoft.Resources/resourceGroups`, the `parent_id` could be omitted, it defaults to subscription ID specified in provider or the default subscription (You could check the default subscription by azure cli command: `az account show`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#parent_id DataAzapiResource#parent_id}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#query_parameters DataAzapiResource#query_parameters}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of the Azure resource to retrieve.

Exactly one of the arguments `name` or `resource_id` must be set. It could be omitted if the `type` is `Microsoft.Resources/subscriptions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#resource_id DataAzapiResource#resource_id}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#response_export_values DataAzapiResource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.retry"></a>

```csharp
public DataAzapiResourceRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#retry DataAzapiResource#retry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.timeouts"></a>

```csharp
public DataAzapiResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#timeouts DataAzapiResource#timeouts}

---

### DataAzapiResourceIdentity <a name="DataAzapiResourceIdentity" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceIdentity {

};
```


### DataAzapiResourceRetry <a name="DataAzapiResourceRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceRetry {
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#error_message_regex DataAzapiResource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#interval_seconds DataAzapiResource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#max_interval_seconds DataAzapiResource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#multiplier DataAzapiResource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#randomization_factor DataAzapiResource#randomization_factor}

---

### DataAzapiResourceTimeouts <a name="DataAzapiResourceTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#read DataAzapiResource#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceIdentityList <a name="DataAzapiResourceIdentityList" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get"></a>

```csharp
private DataAzapiResourceIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzapiResourceIdentityOutputReference <a name="DataAzapiResourceIdentityOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity">DataAzapiResourceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzapiResourceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity">DataAzapiResourceIdentity</a>

---


### DataAzapiResourceRetryOutputReference <a name="DataAzapiResourceRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---


### DataAzapiResourceTimeoutsOutputReference <a name="DataAzapiResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---



