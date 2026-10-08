# `dataAzapiResource` Submodule <a name="`dataAzapiResource` Submodule" id="@cdktn/provider-azapi.dataAzapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResource <a name="DataAzapiResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource azapi_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

new dataAzapiResource.DataAzapiResource(scope: Construct, id: string, config: DataAzapiResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig">DataAzapiResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig">DataAzapiResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetIgnoreNotFound">resetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry"></a>

```typescript
public putRetry(value: DataAzapiResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzapiResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIgnoreNotFound` <a name="resetIgnoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetIgnoreNotFound"></a>

```typescript
public resetIgnoreNotFound(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

dataAzapiResource.DataAzapiResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

dataAzapiResource.DataAzapiResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

dataAzapiResource.DataAzapiResource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

dataAzapiResource.DataAzapiResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzapiResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.exists">exists</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList">DataAzapiResourceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference">DataAzapiResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference">DataAzapiResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFoundInput">ignoreNotFoundInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParametersInput">queryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFound">ignoreNotFound</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.exists"></a>

```typescript
public readonly exists: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.identity"></a>

```typescript
public readonly identity: DataAzapiResourceIdentityList;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList">DataAzapiResourceIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retry"></a>

```typescript
public readonly retry: DataAzapiResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference">DataAzapiResourceRetryOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference">DataAzapiResourceTimeoutsOutputReference</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ignoreNotFoundInput`<sup>Optional</sup> <a name="ignoreNotFoundInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFoundInput"></a>

```typescript
public readonly ignoreNotFoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | DataAzapiResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzapiResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ignoreNotFound`<sup>Required</sup> <a name="ignoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.ignoreNotFound"></a>

```typescript
public readonly ignoreNotFound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceConfig <a name="DataAzapiResourceConfig" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

const dataAzapiResourceConfig: dataAzapiResource.DataAzapiResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.ignoreNotFound">ignoreNotFound</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to `true`, the data source will not fail when the specified resource is not found (HTTP 404). |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of the Azure resource to retrieve. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#type DataAzapiResource#type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#headers DataAzapiResource#headers}

---

##### `ignoreNotFound`<sup>Optional</sup> <a name="ignoreNotFound" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.ignoreNotFound"></a>

```typescript
public readonly ignoreNotFound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to `true`, the data source will not fail when the specified resource is not found (HTTP 404).

Identifier attributes (`id`, `name`, `parent_id`, `resource_id`) will still be populated based on inputs; other computed attributes (`output`, `location`, `identity`, `tags`) will be null/empty. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#ignore_not_found DataAzapiResource#ignore_not_found}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the Azure resource.

Exactly one of the arguments `name` or `resource_id` must be set. It could be omitted if the `type` is `Microsoft.Resources/subscriptions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#name DataAzapiResource#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The ID of the azure resource in which this resource is created.

It supports different kinds of deployment scope for **top level** resources:

- resource group scope: `parent_id` should be the ID of a resource group, it's recommended to manage a resource group by azurerm_resource_group.
- management group scope: `parent_id` should be the ID of a management group, it's recommended to manage a management group by azurerm_management_group.
- extension scope: `parent_id` should be the ID of the resource you're adding the extension to.
- subscription scope: `parent_id` should be like \x60/subscriptions/00000000-0000-0000-0000-000000000000\x60
- tenant scope: `parent_id` should be /

For child level resources, the `parent_id` should be the ID of its parent resource, for example, subnet resource's `parent_id` is the ID of the vnet.

For type `Microsoft.Resources/resourceGroups`, the `parent_id` could be omitted, it defaults to subscription ID specified in provider or the default subscription (You could check the default subscription by azure cli command: `az account show`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#parent_id DataAzapiResource#parent_id}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#query_parameters DataAzapiResource#query_parameters}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of the Azure resource to retrieve.

Exactly one of the arguments `name` or `resource_id` must be set. It could be omitted if the `type` is `Microsoft.Resources/subscriptions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#resource_id DataAzapiResource#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#response_export_values DataAzapiResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.retry"></a>

```typescript
public readonly retry: DataAzapiResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#retry DataAzapiResource#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#timeouts DataAzapiResource#timeouts}

---

### DataAzapiResourceIdentity <a name="DataAzapiResourceIdentity" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

const dataAzapiResourceIdentity: dataAzapiResource.DataAzapiResourceIdentity = { ... }
```


### DataAzapiResourceRetry <a name="DataAzapiResourceRetry" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

const dataAzapiResourceRetry: dataAzapiResource.DataAzapiResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#error_message_regex DataAzapiResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#interval_seconds DataAzapiResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#max_interval_seconds DataAzapiResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#multiplier DataAzapiResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#randomization_factor DataAzapiResource#randomization_factor}

---

### DataAzapiResourceTimeouts <a name="DataAzapiResourceTimeouts" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

const dataAzapiResourceTimeouts: dataAzapiResource.DataAzapiResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource#read DataAzapiResource#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceIdentityList <a name="DataAzapiResourceIdentityList" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

new dataAzapiResource.DataAzapiResourceIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get"></a>

```typescript
public get(index: number): DataAzapiResourceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzapiResourceIdentityOutputReference <a name="DataAzapiResourceIdentityOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

new dataAzapiResource.DataAzapiResourceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity">DataAzapiResourceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzapiResourceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceIdentity">DataAzapiResourceIdentity</a>

---


### DataAzapiResourceRetryOutputReference <a name="DataAzapiResourceRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

new dataAzapiResource.DataAzapiResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceRetry">DataAzapiResourceRetry</a>

---


### DataAzapiResourceTimeoutsOutputReference <a name="DataAzapiResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzapiResource } from '@cdktn/provider-azapi'

new dataAzapiResource.DataAzapiResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResource.DataAzapiResourceTimeouts">DataAzapiResourceTimeouts</a>

---



