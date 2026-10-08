# `dataAzapiResourceAction` Submodule <a name="`dataAzapiResourceAction` Submodule" id="@cdktn/provider-azapi.dataAzapiResourceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzapiResourceAction <a name="DataAzapiResourceAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action azapi_resource_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

new dataAzapiResourceAction.DataAzapiResourceAction(scope: Construct, id: string, config: DataAzapiResourceActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig">DataAzapiResourceActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig">DataAzapiResourceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues">resetSensitiveResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry"></a>

```typescript
public putRetry(value: DataAzapiResourceActionRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzapiResourceActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSensitiveResponseExportValues` <a name="resetSensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetSensitiveResponseExportValues"></a>

```typescript
public resetSensitiveResponseExportValues(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

dataAzapiResourceAction.DataAzapiResourceAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzapiResourceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzapiResourceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzapiResourceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzapiResourceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput">sensitiveOutput</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput">bodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput">queryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput">sensitiveResponseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retry"></a>

```typescript
public readonly retry: DataAzapiResourceActionRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference">DataAzapiResourceActionRetryOutputReference</a>

---

##### `sensitiveOutput`<sup>Required</sup> <a name="sensitiveOutput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveOutput"></a>

```typescript
public readonly sensitiveOutput: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiResourceActionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference">DataAzapiResourceActionTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.bodyInput"></a>

```typescript
public readonly bodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | DataAzapiResourceActionRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---

##### `sensitiveResponseExportValuesInput`<sup>Optional</sup> <a name="sensitiveResponseExportValuesInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValuesInput"></a>

```typescript
public readonly sensitiveResponseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzapiResourceActionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveResponseExportValues`<sup>Required</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.sensitiveResponseExportValues"></a>

```typescript
public readonly sensitiveResponseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzapiResourceActionConfig <a name="DataAzapiResourceActionConfig" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

const dataAzapiResourceActionConfig: dataAzapiResourceAction.DataAzapiResourceActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action">action</a></code> | <code>string</code> | The name of the resource action. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | A map of headers to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method">method</a></code> | <code>string</code> | The HTTP method to use when performing the action. Defaults to `POST`. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters">queryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A map of query parameters to include in the request. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of the Azure resource to perform the action on. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues">sensitiveResponseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#type DataAzapiResourceAction#type}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The name of the resource action.

It's also possible to make HTTP requests towards the resource ID if leave this field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#action DataAzapiResourceAction#action}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The body attribute is a dynamic attribute that only allows users to specify the resource body as an HCL object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#body DataAzapiResourceAction#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#headers DataAzapiResourceAction#headers}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP method to use when performing the action. Defaults to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#method DataAzapiResourceAction#method}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A map of query parameters to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#query_parameters DataAzapiResourceAction#query_parameters}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of the Azure resource to perform the action on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#resource_id DataAzapiResourceAction#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#response_export_values DataAzapiResourceAction#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.retry"></a>

```typescript
public readonly retry: DataAzapiResourceActionRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#retry DataAzapiResourceAction#retry}

---

##### `sensitiveResponseExportValues`<sup>Optional</sup> <a name="sensitiveResponseExportValues" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.sensitiveResponseExportValues"></a>

```typescript
public readonly sensitiveResponseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The attribute can accept either a list or a map.

**List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property sensitive_output.

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

- **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property sensitive_output.

	```text
	{
		"login_server" = "registry1.azurecr.io"
		"quarantine_status" = "disabled"
	}
	```

To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#sensitive_response_export_values DataAzapiResourceAction#sensitive_response_export_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzapiResourceActionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#timeouts DataAzapiResourceAction#timeouts}

---

### DataAzapiResourceActionRetry <a name="DataAzapiResourceActionRetry" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

const dataAzapiResourceActionRetry: dataAzapiResourceAction.DataAzapiResourceActionRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#error_message_regex DataAzapiResourceAction#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#interval_seconds DataAzapiResourceAction#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#max_interval_seconds DataAzapiResourceAction#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#multiplier DataAzapiResourceAction#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#randomization_factor DataAzapiResourceAction#randomization_factor}

---

### DataAzapiResourceActionTimeouts <a name="DataAzapiResourceActionTimeouts" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

const dataAzapiResourceActionTimeouts: dataAzapiResourceAction.DataAzapiResourceActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/data-sources/resource_action#read DataAzapiResourceAction#read}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzapiResourceActionRetryOutputReference <a name="DataAzapiResourceActionRetryOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

new dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiResourceActionRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionRetry">DataAzapiResourceActionRetry</a>

---


### DataAzapiResourceActionTimeoutsOutputReference <a name="DataAzapiResourceActionTimeoutsOutputReference" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzapiResourceAction } from '@cdktn/provider-azapi'

new dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzapiResourceActionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataAzapiResourceAction.DataAzapiResourceActionTimeouts">DataAzapiResourceActionTimeouts</a>

---



