# `ephemeralAzapiResourceAction` Submodule <a name="`ephemeralAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiResourceAction <a name="EphemeralAzapiResourceAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

new ephemeralAzapiResourceAction.EphemeralAzapiResourceAction(scope: Construct, id: string, config: EphemeralAzapiResourceActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig">EphemeralAzapiResourceActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig">EphemeralAzapiResourceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry"></a>

```typescript
public putRetry(value: EphemeralAzapiResourceActionRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts"></a>

```typescript
public putTimeouts(value: EphemeralAzapiResourceActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetSensitiveBody"></a>

```typescript
public resetSensitiveBody(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput">bodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput">locksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput">queryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks">locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retry"></a>

```typescript
public readonly retry: EphemeralAzapiResourceActionRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference">EphemeralAzapiResourceActionRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeouts"></a>

```typescript
public readonly timeouts: EphemeralAzapiResourceActionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference">EphemeralAzapiResourceActionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.bodyInput"></a>

```typescript
public readonly bodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locksInput"></a>

```typescript
public readonly locksInput: string[];
```

- *Type:* string[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | EphemeralAzapiResourceActionRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBodyInput"></a>

```typescript
public readonly sensitiveBodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EphemeralAzapiResourceActionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBody`<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.sensitiveBody"></a>

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiResourceActionConfig <a name="EphemeralAzapiResourceActionConfig" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

const ephemeralAzapiResourceActionConfig: ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action">action</a></code> | <code>string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks">locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method">method</a></code> | <code>string</code> | Specifies the HTTP method of the azure resource action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#resource_id EphemeralAzapiResourceAction#resource_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#type EphemeralAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#action EphemeralAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#body EphemeralAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#headers EphemeralAzapiResourceAction#headers}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#locks EphemeralAzapiResourceAction#locks}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Specifies the HTTP method of the azure resource action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#method EphemeralAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#query_parameters EphemeralAzapiResourceAction#query_parameters}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The attribute can accept either a list or a map.

**List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property output.

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

- **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property output.

	```text
	{
		"login_server" = "registry1.azurecr.io"
		"quarantine_status" = "disabled"
	}
	```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#response_export_values EphemeralAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.retry"></a>

```typescript
public readonly retry: EphemeralAzapiResourceActionRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#retry EphemeralAzapiResourceAction#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.sensitiveBody"></a>

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#sensitive_body EphemeralAzapiResourceAction#sensitive_body}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EphemeralAzapiResourceActionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#timeouts EphemeralAzapiResourceAction#timeouts}

---

### EphemeralAzapiResourceActionRetry <a name="EphemeralAzapiResourceActionRetry" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

const ephemeralAzapiResourceActionRetry: ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#error_message_regex EphemeralAzapiResourceAction#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#interval_seconds EphemeralAzapiResourceAction#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#max_interval_seconds EphemeralAzapiResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#multiplier EphemeralAzapiResourceAction#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#randomization_factor EphemeralAzapiResourceAction#randomization_factor}

---

### EphemeralAzapiResourceActionTimeouts <a name="EphemeralAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

const ephemeralAzapiResourceActionTimeouts: ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open">open</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `open`<sup>Optional</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts.property.open"></a>

```typescript
public readonly open: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#open EphemeralAzapiResourceAction#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiResourceActionRetryOutputReference <a name="EphemeralAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

new ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAzapiResourceActionRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionRetry">EphemeralAzapiResourceActionRetry</a>

---


### EphemeralAzapiResourceActionTimeoutsOutputReference <a name="EphemeralAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { ephemeralAzapiResourceAction } from '@cdktn/provider-azapi'

new ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen">resetOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOpen` <a name="resetOpen" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.resetOpen"></a>

```typescript
public resetOpen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput">openInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open">open</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openInput`<sup>Optional</sup> <a name="openInput" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.openInput"></a>

```typescript
public readonly openInput: string;
```

- *Type:* string

---

##### `open`<sup>Required</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.open"></a>

```typescript
public readonly open: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAzapiResourceActionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiResourceAction.EphemeralAzapiResourceActionTimeouts">EphemeralAzapiResourceActionTimeouts</a>

---



