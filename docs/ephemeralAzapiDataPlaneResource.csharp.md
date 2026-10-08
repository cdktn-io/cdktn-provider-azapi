# `ephemeralAzapiDataPlaneResource` Submodule <a name="`ephemeralAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiDataPlaneResource <a name="EphemeralAzapiDataPlaneResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResource(Construct Scope, string Id, EphemeralAzapiDataPlaneResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig">EphemeralAzapiDataPlaneResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry"></a>

```csharp
private void PutRetry(EphemeralAzapiDataPlaneResourceRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts"></a>

```csharp
private void PutTimeouts(EphemeralAzapiDataPlaneResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiDataPlaneResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiDataPlaneResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiDataPlaneResource.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body">Body</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body"></a>

```csharp
public AnyMap Body { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry"></a>

```csharp
public EphemeralAzapiDataPlaneResourceRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts"></a>

```csharp
public EphemeralAzapiDataPlaneResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput"></a>

```csharp
public IResolvable|EphemeralAzapiDataPlaneResourceRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput"></a>

```csharp
public IResolvable|EphemeralAzapiDataPlaneResourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiDataPlaneResourceConfig <a name="EphemeralAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResourceConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string ParentId,
    string Type,
    string Name = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    EphemeralAzapiDataPlaneResourceRetry Retry = null,
    EphemeralAzapiDataPlaneResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId">ParentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry"></a>

```csharp
public EphemeralAzapiDataPlaneResourceRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts"></a>

```csharp
public EphemeralAzapiDataPlaneResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}

---

### EphemeralAzapiDataPlaneResourceRetry <a name="EphemeralAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResourceRetry {
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
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}

---

### EphemeralAzapiDataPlaneResourceTimeouts <a name="EphemeralAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResourceTimeouts {
    string Open = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open">Open</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Open`<sup>Optional</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open"></a>

```csharp
public string Open { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiDataPlaneResourceRetryOutputReference <a name="EphemeralAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResourceRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAzapiDataPlaneResourceRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---


### EphemeralAzapiDataPlaneResourceTimeoutsOutputReference <a name="EphemeralAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiDataPlaneResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOpen` <a name="ResetOpen" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen"></a>

```csharp
private void ResetOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput">OpenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open">Open</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenInput`<sup>Optional</sup> <a name="OpenInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput"></a>

```csharp
public string OpenInput { get; }
```

- *Type:* string

---

##### `Open`<sup>Required</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open"></a>

```csharp
public string Open { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAzapiDataPlaneResourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---



