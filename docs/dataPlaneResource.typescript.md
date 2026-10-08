# `dataPlaneResource` Submodule <a name="`dataPlaneResource` Submodule" id="@cdktn/provider-azapi.dataPlaneResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPlaneResource <a name="DataPlaneResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource azapi_data_plane_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

new dataPlaneResource.DataPlaneResource(scope: Construct, id: string, config: DataPlaneResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig">DataPlaneResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig">DataPlaneResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders">resetCreateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters">resetCreateQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders">resetDeleteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters">resetDeleteQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing">resetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty">resetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders">resetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters">resetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues">resetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs">resetReplaceTriggersRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders">resetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters">resetUpdateQueryParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry"></a>

```typescript
public putRetry(value: DataPlaneResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts"></a>

```typescript
public putTimeouts(value: DataPlaneResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetCreateHeaders` <a name="resetCreateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateHeaders"></a>

```typescript
public resetCreateHeaders(): void
```

##### `resetCreateQueryParameters` <a name="resetCreateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetCreateQueryParameters"></a>

```typescript
public resetCreateQueryParameters(): void
```

##### `resetDeleteHeaders` <a name="resetDeleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteHeaders"></a>

```typescript
public resetDeleteHeaders(): void
```

##### `resetDeleteQueryParameters` <a name="resetDeleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetDeleteQueryParameters"></a>

```typescript
public resetDeleteQueryParameters(): void
```

##### `resetIgnoreCasing` <a name="resetIgnoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreCasing"></a>

```typescript
public resetIgnoreCasing(): void
```

##### `resetIgnoreMissingProperty` <a name="resetIgnoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetIgnoreMissingProperty"></a>

```typescript
public resetIgnoreMissingProperty(): void
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetReadHeaders` <a name="resetReadHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadHeaders"></a>

```typescript
public resetReadHeaders(): void
```

##### `resetReadQueryParameters` <a name="resetReadQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReadQueryParameters"></a>

```typescript
public resetReadQueryParameters(): void
```

##### `resetReplaceTriggersExternalValues` <a name="resetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersExternalValues"></a>

```typescript
public resetReplaceTriggersExternalValues(): void
```

##### `resetReplaceTriggersRefs` <a name="resetReplaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetReplaceTriggersRefs"></a>

```typescript
public resetReplaceTriggersRefs(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBody"></a>

```typescript
public resetSensitiveBody(): void
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetSensitiveBodyVersion"></a>

```typescript
public resetSensitiveBodyVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateHeaders` <a name="resetUpdateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateHeaders"></a>

```typescript
public resetUpdateHeaders(): void
```

##### `resetUpdateQueryParameters` <a name="resetUpdateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.resetUpdateQueryParameters"></a>

```typescript
public resetUpdateQueryParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

dataPlaneResource.DataPlaneResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

dataPlaneResource.DataPlaneResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

dataPlaneResource.DataPlaneResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

dataPlaneResource.DataPlaneResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataPlaneResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPlaneResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPlaneResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataPlaneResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput">bodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput">createHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput">createQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput">deleteHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput">deleteQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput">ignoreCasingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput">ignoreMissingPropertyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput">locksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput">readHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput">readQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput">replaceTriggersExternalValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput">replaceTriggersRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput">updateHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput">updateQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders">createHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters">createQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders">deleteHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks">locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retry"></a>

```typescript
public readonly retry: DataPlaneResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference">DataPlaneResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeouts"></a>

```typescript
public readonly timeouts: DataPlaneResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference">DataPlaneResourceTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.bodyInput"></a>

```typescript
public readonly bodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `createHeadersInput`<sup>Optional</sup> <a name="createHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeadersInput"></a>

```typescript
public readonly createHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createQueryParametersInput`<sup>Optional</sup> <a name="createQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParametersInput"></a>

```typescript
public readonly createQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `deleteHeadersInput`<sup>Optional</sup> <a name="deleteHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeadersInput"></a>

```typescript
public readonly deleteHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteQueryParametersInput`<sup>Optional</sup> <a name="deleteQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParametersInput"></a>

```typescript
public readonly deleteQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `ignoreCasingInput`<sup>Optional</sup> <a name="ignoreCasingInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasingInput"></a>

```typescript
public readonly ignoreCasingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingPropertyInput`<sup>Optional</sup> <a name="ignoreMissingPropertyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingPropertyInput"></a>

```typescript
public readonly ignoreMissingPropertyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locksInput"></a>

```typescript
public readonly locksInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `readHeadersInput`<sup>Optional</sup> <a name="readHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeadersInput"></a>

```typescript
public readonly readHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readQueryParametersInput`<sup>Optional</sup> <a name="readQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParametersInput"></a>

```typescript
public readonly readQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="replaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValuesInput"></a>

```typescript
public readonly replaceTriggersExternalValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `replaceTriggersRefsInput`<sup>Optional</sup> <a name="replaceTriggersRefsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefsInput"></a>

```typescript
public readonly replaceTriggersRefsInput: string[];
```

- *Type:* string[]

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | DataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyInput"></a>

```typescript
public readonly sensitiveBodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersionInput"></a>

```typescript
public readonly sensitiveBodyVersionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `updateHeadersInput`<sup>Optional</sup> <a name="updateHeadersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeadersInput"></a>

```typescript
public readonly updateHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParametersInput`<sup>Optional</sup> <a name="updateQueryParametersInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParametersInput"></a>

```typescript
public readonly updateQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `createHeaders`<sup>Required</sup> <a name="createHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createHeaders"></a>

```typescript
public readonly createHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createQueryParameters`<sup>Required</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.createQueryParameters"></a>

```typescript
public readonly createQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `deleteHeaders`<sup>Required</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteHeaders"></a>

```typescript
public readonly deleteHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteQueryParameters`<sup>Required</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.deleteQueryParameters"></a>

```typescript
public readonly deleteQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `ignoreCasing`<sup>Required</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingProperty`<sup>Required</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `readHeaders`<sup>Required</sup> <a name="readHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readQueryParameters`<sup>Required</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValues`<sup>Required</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersExternalValues"></a>

```typescript
public readonly replaceTriggersExternalValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `replaceTriggersRefs`<sup>Required</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.replaceTriggersRefs"></a>

```typescript
public readonly replaceTriggersRefs: string[];
```

- *Type:* string[]

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateHeaders`<sup>Required</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParameters`<sup>Required</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPlaneResourceConfig <a name="DataPlaneResourceConfig" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

const dataPlaneResourceConfig: dataPlaneResource.DataPlaneResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders">createHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters">createQueryParameters</a></code> | <code>{[ key: string ]: string[]} \| cdktn.IResolvable</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders">deleteHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks">locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>string[]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

The ID of the azure resource in which this resource is created.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#parent_id DataPlaneResource#parent_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#type DataPlaneResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#body DataPlaneResource#body}

---

##### `createHeaders`<sup>Optional</sup> <a name="createHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createHeaders"></a>

```typescript
public readonly createHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_headers DataPlaneResource#create_headers}

---

##### `createQueryParameters`<sup>Optional</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.createQueryParameters"></a>

```typescript
public readonly createQueryParameters: {[ key: string ]: string[]} | IResolvable;
```

- *Type:* {[ key: string ]: string[]} | cdktn.IResolvable

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create_query_parameters DataPlaneResource#create_query_parameters}

---

##### `deleteHeaders`<sup>Optional</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteHeaders"></a>

```typescript
public readonly deleteHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_headers DataPlaneResource#delete_headers}

---

##### `deleteQueryParameters`<sup>Optional</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.deleteQueryParameters"></a>

```typescript
public readonly deleteQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete_query_parameters DataPlaneResource#delete_query_parameters}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_casing DataPlaneResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#ignore_missing_property DataPlaneResource#ignore_missing_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#locks DataPlaneResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name (identifier segment) of the data plane resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#name DataPlaneResource#name}

---

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_headers DataPlaneResource#read_headers}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read_query_parameters DataPlaneResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersExternalValues"></a>

```typescript
public readonly replaceTriggersExternalValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Will trigger a replace of the resource when the value changes and is not `null`.

This can be used by practitioners to force a replace of the resource when certain values change, e.g. changing the SKU of a virtual machine based on the value of variables or locals. The value is a `dynamic`, so practitioners can compose the input however they wish. For a "break glass" set the value to `null` to prevent the plan modifier taking effect.
If you have `null` values that you do want to be tracked as affecting the resource replacement, include these inside an object.
Advanced use cases are possible and resource replacement can be triggered by values external to the resource, for example when a dependent resource changes.

e.g. to replace a resource when either the SKU or os_type attributes change:

```hcl
resource "azapi_data_plane_resource" "example" {
  name = var.name
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@1.0"
  body = {
    properties = {
      sku   = var.sku
      zones = var.zones
    }
  }

  replace_triggers_external_values = [
    var.sku,
    var.zones,
  ]
}
```


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_external_values DataPlaneResource#replace_triggers_external_values}

---

##### `replaceTriggersRefs`<sup>Optional</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.replaceTriggersRefs"></a>

```typescript
public readonly replaceTriggersRefs: string[];
```

- *Type:* string[]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#replace_triggers_refs DataPlaneResource#replace_triggers_refs}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#response_export_values DataPlaneResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.retry"></a>

```typescript
public readonly retry: DataPlaneResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#retry DataPlaneResource#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBody"></a>

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body DataPlaneResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#sensitive_body_version DataPlaneResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataPlaneResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#timeouts DataPlaneResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_headers DataPlaneResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceConfig.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update_query_parameters DataPlaneResource#update_query_parameters}

---

### DataPlaneResourceRetry <a name="DataPlaneResourceRetry" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

const dataPlaneResourceRetry: dataPlaneResource.DataPlaneResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#error_message_regex DataPlaneResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#interval_seconds DataPlaneResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#max_interval_seconds DataPlaneResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#multiplier DataPlaneResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#randomization_factor DataPlaneResource#randomization_factor}

---

### DataPlaneResourceTimeouts <a name="DataPlaneResourceTimeouts" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

const dataPlaneResourceTimeouts: dataPlaneResource.DataPlaneResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#create DataPlaneResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#delete DataPlaneResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#read DataPlaneResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/data_plane_resource#update DataPlaneResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPlaneResourceRetryOutputReference <a name="DataPlaneResourceRetryOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

new dataPlaneResource.DataPlaneResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataPlaneResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceRetry">DataPlaneResourceRetry</a>

---


### DataPlaneResourceTimeoutsOutputReference <a name="DataPlaneResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataPlaneResource } from '@cdktn/provider-azapi'

new dataPlaneResource.DataPlaneResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataPlaneResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.dataPlaneResource.DataPlaneResourceTimeouts">DataPlaneResourceTimeouts</a>

---



