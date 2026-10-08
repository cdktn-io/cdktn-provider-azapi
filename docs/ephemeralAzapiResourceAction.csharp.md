# `ephemeralAzapiResourceAction` Submodule <a name="`ephemeralAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiResourceAction <a name="EphemeralAzapiResourceAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceAction(Construct Scope, string Id, EphemeralAzapiResourceActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig">EphemeralAzapiResourceActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig">EphemeralAzapiResourceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody">ResetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry"></a>

```csharp
private void PutRetry(EphemeralAzapiResourceActionRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts"></a>

```csharp
private void PutTimeouts(EphemeralAzapiResourceActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetLocks` <a name="ResetLocks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues"></a>

```csharp
private void ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetSensitiveBody` <a name="ResetSensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody"></a>

```csharp
private void ResetSensitiveBody()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiResourceAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiResourceAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

EphemeralAzapiResourceAction.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output">Output</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput">BodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput">LocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput">QueryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput">SensitiveBodyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks">Locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output"></a>

```csharp
public AnyMap Output { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry"></a>

```csharp
public EphemeralAzapiResourceActionRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts"></a>

```csharp
public EphemeralAzapiResourceActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> BodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput"></a>

```csharp
public string[] LocksInput { get; }
```

- *Type:* string[]

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput"></a>

```csharp
public IResolvable|EphemeralAzapiResourceActionRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `SensitiveBodyInput`<sup>Optional</sup> <a name="SensitiveBodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBodyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput"></a>

```csharp
public IResolvable|EphemeralAzapiResourceActionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks"></a>

```csharp
public string[] Locks { get; }
```

- *Type:* string[]

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResponseExportValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SensitiveBody`<sup>Required</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiResourceActionConfig <a name="EphemeralAzapiResourceActionConfig" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceActionConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string ResourceId,
    string Type,
    string Action = null,
    System.Collections.Generic.IDictionary<string, object> Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string[] Locks = null,
    string Method = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters = null,
    System.Collections.Generic.IDictionary<string, object> ResponseExportValues = null,
    EphemeralAzapiResourceActionRetry Retry = null,
    System.Collections.Generic.IDictionary<string, object> SensitiveBody = null,
    EphemeralAzapiResourceActionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type">Type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action">Action</a></code> | <code>string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body">Body</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks">Locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method">Method</a></code> | <code>string</code> | Specifies the HTTP method of the azure resource action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters">QueryParameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody">SensitiveBody</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#resource_id EphemeralAzapiResourceAction#resource_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#type EphemeralAzapiResourceAction#type}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#action EphemeralAzapiResourceAction#action}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Body { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#body EphemeralAzapiResourceAction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#headers EphemeralAzapiResourceAction#headers}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks"></a>

```csharp
public string[] Locks { get; set; }
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#locks EphemeralAzapiResourceAction#locks}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Specifies the HTTP method of the azure resource action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#method EphemeralAzapiResourceAction#method}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> QueryParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#query_parameters EphemeralAzapiResourceAction#query_parameters}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#response_export_values EphemeralAzapiResourceAction#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry"></a>

```csharp
public EphemeralAzapiResourceActionRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#retry EphemeralAzapiResourceAction#retry}

---

##### `SensitiveBody`<sup>Optional</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> SensitiveBody { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#sensitive_body EphemeralAzapiResourceAction#sensitive_body}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts"></a>

```csharp
public EphemeralAzapiResourceActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#timeouts EphemeralAzapiResourceAction#timeouts}

---

### EphemeralAzapiResourceActionRetry <a name="EphemeralAzapiResourceActionRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceActionRetry {
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
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier">Multiplier</a></code> | <code>double</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; set; }
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#error_message_regex EphemeralAzapiResourceAction#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#interval_seconds EphemeralAzapiResourceAction#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; set; }
```

- *Type:* double

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#max_interval_seconds EphemeralAzapiResourceAction#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#multiplier EphemeralAzapiResourceAction#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; set; }
```

- *Type:* double

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#randomization_factor EphemeralAzapiResourceAction#randomization_factor}

---

### EphemeralAzapiResourceActionTimeouts <a name="EphemeralAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceActionTimeouts {
    string Open = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open">Open</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Open`<sup>Optional</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open"></a>

```csharp
public string Open { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#open EphemeralAzapiResourceAction#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiResourceActionRetryOutputReference <a name="EphemeralAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceActionRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```csharp
private void ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```csharp
private void ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```csharp
public string[] ErrorMessageRegexInput { get; }
```

- *Type:* string[]

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```csharp
public double MaxIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```csharp
public double RandomizationFactorInput { get; }
```

- *Type:* double

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```csharp
public string[] ErrorMessageRegex { get; }
```

- *Type:* string[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```csharp
public double MaxIntervalSeconds { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```csharp
public double RandomizationFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAzapiResourceActionRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---


### EphemeralAzapiResourceActionTimeoutsOutputReference <a name="EphemeralAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new EphemeralAzapiResourceActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen">ResetOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOpen` <a name="ResetOpen" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen"></a>

```csharp
private void ResetOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput">OpenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open">Open</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenInput`<sup>Optional</sup> <a name="OpenInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput"></a>

```csharp
public string OpenInput { get; }
```

- *Type:* string

---

##### `Open`<sup>Required</sup> <a name="Open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open"></a>

```csharp
public string Open { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAzapiResourceActionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---



