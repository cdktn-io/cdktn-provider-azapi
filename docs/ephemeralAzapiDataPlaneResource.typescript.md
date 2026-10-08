# `ephemeralAzapiDataPlaneResource` Submodule <a name="`ephemeralAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzapiDataPlaneResource <a name="EphemeralAzapiDataPlaneResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource(scope: Construct, id: string, config: EphemeralAzapiDataPlaneResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig">EphemeralAzapiDataPlaneResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig">EphemeralAzapiDataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry"></a>

```typescript
public putRetry(value: EphemeralAzapiDataPlaneResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts"></a>

```typescript
public putTimeouts(value: EphemeralAzapiDataPlaneResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body">body</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.body"></a>

```typescript
public readonly body: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retry"></a>

```typescript
public readonly retry: EphemeralAzapiDataPlaneResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference">EphemeralAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeouts"></a>

```typescript
public readonly timeouts: EphemeralAzapiDataPlaneResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference">EphemeralAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | EphemeralAzapiDataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EphemeralAzapiDataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzapiDataPlaneResourceConfig <a name="EphemeralAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const ephemeralAzapiDataPlaneResourceConfig: ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.retry"></a>

```typescript
public readonly retry: EphemeralAzapiDataPlaneResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EphemeralAzapiDataPlaneResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}

---

### EphemeralAzapiDataPlaneResourceRetry <a name="EphemeralAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const ephemeralAzapiDataPlaneResourceRetry: ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}

---

### EphemeralAzapiDataPlaneResourceTimeouts <a name="EphemeralAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const ephemeralAzapiDataPlaneResourceTimeouts: ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open">open</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `open`<sup>Optional</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts.property.open"></a>

```typescript
public readonly open: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAzapiDataPlaneResourceRetryOutputReference <a name="EphemeralAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAzapiDataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceRetry">EphemeralAzapiDataPlaneResourceRetry</a>

---


### EphemeralAzapiDataPlaneResourceTimeoutsOutputReference <a name="EphemeralAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { ephemeralAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen">resetOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOpen` <a name="resetOpen" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.resetOpen"></a>

```typescript
public resetOpen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput">openInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open">open</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openInput`<sup>Optional</sup> <a name="openInput" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.openInput"></a>

```typescript
public readonly openInput: string;
```

- *Type:* string

---

##### `open`<sup>Required</sup> <a name="open" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.open"></a>

```typescript
public readonly open: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAzapiDataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.ephemeralAzapiDataPlaneResource.EphemeralAzapiDataPlaneResourceTimeouts">EphemeralAzapiDataPlaneResourceTimeouts</a>

---



