# `dataAzapiDataPlaneResource` Submodule <a name="`dataAzapiDataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiDataPlaneResource <a name="DataAzapiDataPlaneResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new dataAzapiDataPlaneResource.DataAzapiDataPlaneResource(scope: Construct, id: string, config: DataAzapiDataPlaneResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig">DataAzapiDataPlaneResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig">DataAzapiDataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry"></a>

```typescript
public putRetry(value: DataAzapiDataPlaneResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzapiDataPlaneResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzapiDataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiDataPlaneResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiDataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiDataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body">body</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.body"></a>

```typescript
public readonly body: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retry"></a>

```typescript
public readonly retry: DataAzapiDataPlaneResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference">DataAzapiDataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiDataPlaneResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference">DataAzapiDataPlaneResourceTimeoutsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | DataAzapiDataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzapiDataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiDataPlaneResourceConfig <a name="DataAzapiDataPlaneResourceConfig" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const dataAzapiDataPlaneResourceConfig: dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource exists. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name (identifier segment) of the data plane resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The ID of the azure resource in which this resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#parent_id DataAzapiDataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#type DataAzapiDataPlaneResource#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name (identifier segment) of the data plane resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#name DataAzapiDataPlaneResource#name}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#response_export_values DataAzapiDataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.retry"></a>

```typescript
public readonly retry: DataAzapiDataPlaneResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#retry DataAzapiDataPlaneResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiDataPlaneResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#timeouts DataAzapiDataPlaneResource#timeouts}

---

### DataAzapiDataPlaneResourceRetry <a name="DataAzapiDataPlaneResourceRetry" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const dataAzapiDataPlaneResourceRetry: dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#error_message_regex DataAzapiDataPlaneResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#interval_seconds DataAzapiDataPlaneResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#max_interval_seconds DataAzapiDataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#multiplier DataAzapiDataPlaneResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#randomization_factor DataAzapiDataPlaneResource#randomization_factor}

---

### DataAzapiDataPlaneResourceTimeouts <a name="DataAzapiDataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

const dataAzapiDataPlaneResourceTimeouts: dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/data_plane_resource#read DataAzapiDataPlaneResource#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiDataPlaneResourceRetryOutputReference <a name="DataAzapiDataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiDataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceRetry">DataAzapiDataPlaneResourceRetry</a>

---


### DataAzapiDataPlaneResourceTimeoutsOutputReference <a name="DataAzapiDataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzapiDataPlaneResource } from '@cdktn/provider-azapi'

new dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiDataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiDataPlaneResource.DataAzapiDataPlaneResourceTimeouts">DataAzapiDataPlaneResourceTimeouts</a>

---



