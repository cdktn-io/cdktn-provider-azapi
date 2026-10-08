# `dataAzapiResourceList` Submodule <a name="`dataAzapiResourceList` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceList <a name="DataAzapiResourceList" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list azapi_resource_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceList(Construct Scope, string Id, DataAzapiResourceListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig">DataAzapiResourceListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig">DataAzapiResourceListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry"></a>

```csharp
private void PutRetry(DataAzapiResourceListRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzapiResourceListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResourceList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

DataAzapiResourceList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzapiResourceList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiResourceList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiResourceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference">DataAzapiResourceListRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference">DataAzapiResourceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParametersInput">QueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retry"></a>

```csharp
public DataAzapiResourceListRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference">DataAzapiResourceListRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeouts"></a>

```csharp
public DataAzapiResourceListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference">DataAzapiResourceListTimeoutsOutputReference</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.retryInput"></a>

```csharp
public IResolvable|DataAzapiResourceListRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzapiResourceListTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceListConfig <a name="DataAzapiResourceListConfig" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ParentId,
    string Type,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    DataAzapiResourceListRetry Retry = null,
    DataAzapiResourceListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.parentId">ParentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#parent_id DataAzapiResourceList#parent_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#type DataAzapiResourceList#type}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#headers DataAzapiResourceList#headers}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#query_parameters DataAzapiResourceList#query_parameters}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

The attribute can accept either a list or a map.

* **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["value"]`, it will set the following HCL object to the computed property output.

  ```text
  {
    "value" = [
  	{
  	  "id" = "/subscriptions/000000/resourceGroups/demo-rg/providers/Microsoft.Automation/automationAccounts/example"
  	  "location" = "eastus2"
  	  "name" = "example"
  	  "properties" = {
  		"creationTime" = "2024-10-11T08:18:38.737+00:00"
  		"disableLocalAuth" = false
  		"lastModifiedTime" = "2024-10-11T08:18:38.737+00:00"
  		"publicNetworkAccess" = true
  	  }
  	  "tags" = {}
  	  "type" = "Microsoft.Automation/AutomationAccounts"
  	}
    ]
  }
  ```
* **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"values": "value[].{name: name, publicNetworkAccess: properties.publicNetworkAccess}", "names": "value[].name"}`, it will set the following HCL object to the computed property output.

  ```text
  {
  	"names" = [
  		"example",
  		"fredaccount01",
  	]
  	"values" = [
  		{
  		  "name" = "example"
  		  "publicNetworkAccess" = true
  		},
  		{
  		  "name" = "fredaccount01"
  		  "publicNetworkAccess" = null
  		},
  	]
  }
  ```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#response_export_values DataAzapiResourceList#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.retry"></a>

```csharp
public DataAzapiResourceListRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#retry DataAzapiResourceList#retry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListConfig.property.timeouts"></a>

```csharp
public DataAzapiResourceListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#timeouts DataAzapiResourceList#timeouts}

---

### DataAzapiResourceListRetry <a name="DataAzapiResourceListRetry" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceListRetry {
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
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#error_message_regex DataAzapiResourceList#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#interval_seconds DataAzapiResourceList#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#max_interval_seconds DataAzapiResourceList#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#multiplier DataAzapiResourceList#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#randomization_factor DataAzapiResourceList#randomization_factor}

---

### DataAzapiResourceListTimeouts <a name="DataAzapiResourceListTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceListTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_list#read DataAzapiResourceList#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceListRetryOutputReference <a name="DataAzapiResourceListRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceListRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceListRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListRetry">DataAzapiResourceListRetry</a>

---


### DataAzapiResourceListTimeoutsOutputReference <a name="DataAzapiResourceListTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new DataAzapiResourceListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzapiResourceListTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.dataAzapiResourceList.DataAzapiResourceListTimeouts">DataAzapiResourceListTimeouts</a>

---



