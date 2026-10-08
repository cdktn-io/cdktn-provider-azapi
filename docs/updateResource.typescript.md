# `updateResource` Submodule <a name="`updateResource` Submodule" id="@cdktn/provider-azapi.updateResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpdateResource <a name="UpdateResource" id="@cdktn/provider-azapi.updateResource.UpdateResource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource azapi_update_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

new updateResource.UpdateResource(scope: Construct, id: string, config: UpdateResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig">UpdateResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.updateResource.UpdateResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig">UpdateResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride">putReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing">resetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty">resetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList">resetIgnoreOtherItemsInList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty">resetListUniqueIdProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders">resetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride">resetReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters">resetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues">resetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders">resetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters">resetUpdateQueryParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.updateResource.UpdateResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.updateResource.UpdateResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.updateResource.UpdateResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.updateResource.UpdateResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReadOverride` <a name="putReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride"></a>

```typescript
public putReadOverride(value: UpdateResourceReadOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putReadOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry"></a>

```typescript
public putRetry(value: UpdateResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts"></a>

```typescript
public putTimeouts(value: UpdateResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.updateResource.UpdateResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetIgnoreCasing` <a name="resetIgnoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreCasing"></a>

```typescript
public resetIgnoreCasing(): void
```

##### `resetIgnoreMissingProperty` <a name="resetIgnoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreMissingProperty"></a>

```typescript
public resetIgnoreMissingProperty(): void
```

##### `resetIgnoreOtherItemsInList` <a name="resetIgnoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetIgnoreOtherItemsInList"></a>

```typescript
public resetIgnoreOtherItemsInList(): void
```

##### `resetListUniqueIdProperty` <a name="resetListUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetListUniqueIdProperty"></a>

```typescript
public resetListUniqueIdProperty(): void
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetReadHeaders` <a name="resetReadHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadHeaders"></a>

```typescript
public resetReadHeaders(): void
```

##### `resetReadOverride` <a name="resetReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadOverride"></a>

```typescript
public resetReadOverride(): void
```

##### `resetReadQueryParameters` <a name="resetReadQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReadQueryParameters"></a>

```typescript
public resetReadQueryParameters(): void
```

##### `resetReplaceTriggersExternalValues` <a name="resetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetReplaceTriggersExternalValues"></a>

```typescript
public resetReplaceTriggersExternalValues(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBody"></a>

```typescript
public resetSensitiveBody(): void
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetSensitiveBodyVersion"></a>

```typescript
public resetSensitiveBodyVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateHeaders` <a name="resetUpdateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateHeaders"></a>

```typescript
public resetUpdateHeaders(): void
```

##### `resetUpdateQueryParameters` <a name="resetUpdateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.resetUpdateQueryParameters"></a>

```typescript
public resetUpdateQueryParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

updateResource.UpdateResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

updateResource.UpdateResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

updateResource.UpdateResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.updateResource.UpdateResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

updateResource.UpdateResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a UpdateResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UpdateResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UpdateResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UpdateResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride">readOverride</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput">bodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput">ignoreCasingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput">ignoreMissingPropertyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput">ignoreOtherItemsInListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput">listUniqueIdPropertyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput">locksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput">readHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput">readOverrideInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput">readQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput">replaceTriggersExternalValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput">updateHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput">updateQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.locks">locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `readOverride`<sup>Required</sup> <a name="readOverride" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverride"></a>

```typescript
public readonly readOverride: UpdateResourceReadOverrideOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference">UpdateResourceReadOverrideOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retry"></a>

```typescript
public readonly retry: UpdateResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference">UpdateResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeouts"></a>

```typescript
public readonly timeouts: UpdateResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference">UpdateResourceTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.bodyInput"></a>

```typescript
public readonly bodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreCasingInput`<sup>Optional</sup> <a name="ignoreCasingInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasingInput"></a>

```typescript
public readonly ignoreCasingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingPropertyInput`<sup>Optional</sup> <a name="ignoreMissingPropertyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingPropertyInput"></a>

```typescript
public readonly ignoreMissingPropertyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreOtherItemsInListInput`<sup>Optional</sup> <a name="ignoreOtherItemsInListInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInListInput"></a>

```typescript
public readonly ignoreOtherItemsInListInput: string[];
```

- *Type:* string[]

---

##### `listUniqueIdPropertyInput`<sup>Optional</sup> <a name="listUniqueIdPropertyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdPropertyInput"></a>

```typescript
public readonly listUniqueIdPropertyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locksInput"></a>

```typescript
public readonly locksInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `readHeadersInput`<sup>Optional</sup> <a name="readHeadersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeadersInput"></a>

```typescript
public readonly readHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOverrideInput`<sup>Optional</sup> <a name="readOverrideInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readOverrideInput"></a>

```typescript
public readonly readOverrideInput: IResolvable | UpdateResourceReadOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---

##### `readQueryParametersInput`<sup>Optional</sup> <a name="readQueryParametersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParametersInput"></a>

```typescript
public readonly readQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="replaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValuesInput"></a>

```typescript
public readonly replaceTriggersExternalValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | UpdateResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyInput"></a>

```typescript
public readonly sensitiveBodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersionInput"></a>

```typescript
public readonly sensitiveBodyVersionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | UpdateResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `updateHeadersInput`<sup>Optional</sup> <a name="updateHeadersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeadersInput"></a>

```typescript
public readonly updateHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParametersInput`<sup>Optional</sup> <a name="updateQueryParametersInput" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParametersInput"></a>

```typescript
public readonly updateQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreCasing`<sup>Required</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingProperty`<sup>Required</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreOtherItemsInList`<sup>Required</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.ignoreOtherItemsInList"></a>

```typescript
public readonly ignoreOtherItemsInList: string[];
```

- *Type:* string[]

---

##### `listUniqueIdProperty`<sup>Required</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.listUniqueIdProperty"></a>

```typescript
public readonly listUniqueIdProperty: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `readHeaders`<sup>Required</sup> <a name="readHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readQueryParameters`<sup>Required</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValues`<sup>Required</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.replaceTriggersExternalValues"></a>

```typescript
public readonly replaceTriggersExternalValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateHeaders`<sup>Required</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParameters`<sup>Required</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.updateResource.UpdateResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UpdateResourceConfig <a name="UpdateResourceConfig" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

const updateResourceConfig: updateResource.UpdateResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>string[]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>{[ key: string ]: string}</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks">locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the Azure resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride">readOverride</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | Overrides the default `GET` request used to read the resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of an existing Azure source. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#type UpdateResource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#body UpdateResource#body}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_casing UpdateResource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_missing_property UpdateResource#ignore_missing_property}

---

##### `ignoreOtherItemsInList`<sup>Optional</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.ignoreOtherItemsInList"></a>

```typescript
public readonly ignoreOtherItemsInList: string[];
```

- *Type:* string[]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#ignore_other_items_in_list UpdateResource#ignore_other_items_in_list}

---

##### `listUniqueIdProperty`<sup>Optional</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.listUniqueIdProperty"></a>

```typescript
public readonly listUniqueIdProperty: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#list_unique_id_property UpdateResource#list_unique_id_property}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#locks UpdateResource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the Azure resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#name UpdateResource#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#parent_id UpdateResource#parent_id}

---

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_headers UpdateResource#read_headers}

---

##### `readOverride`<sup>Optional</sup> <a name="readOverride" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readOverride"></a>

```typescript
public readonly readOverride: UpdateResourceReadOverride;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

Overrides the default `GET` request used to read the resource.

When configured, the provider sends the specified action request instead of `GET` and uses its response for all read processing, including refreshing `body` and `output`. When omitted, the provider reads the resource with `GET`.

~> **Warning:** Do not use `read_override` with sensitive values. Action responses are stored in state through `body` and `output`, and `read_override` cannot be combined with `sensitive_body`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_override UpdateResource#read_override}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read_query_parameters UpdateResource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.replaceTriggersExternalValues"></a>

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
resource "azapi_update_resource" "example" {
  resource_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.Network/publicIPAddresses/example"
  type        = "Microsoft.Network/publicIPAddresses@2023-11-01"
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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#replace_triggers_external_values UpdateResource#replace_triggers_external_values}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of an existing Azure source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#resource_id UpdateResource#resource_id}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#response_export_values UpdateResource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.retry"></a>

```typescript
public readonly retry: UpdateResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#retry UpdateResource#retry}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBody"></a>

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body UpdateResource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#sensitive_body_version UpdateResource#sensitive_body_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UpdateResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#timeouts UpdateResource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_headers UpdateResource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.updateResource.UpdateResourceConfig.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update_query_parameters UpdateResource#update_query_parameters}

---

### UpdateResourceReadOverride <a name="UpdateResourceReadOverride" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

const updateResourceReadOverride: updateResource.UpdateResourceReadOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action">action</a></code> | <code>string</code> | The name of the action appended to the resource ID, for example `list`. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method">method</a></code> | <code>string</code> | The HTTP method used to read the resource. The only supported value is `POST`. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The name of the action appended to the resource ID, for example `list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#action UpdateResource#action}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP method used to read the resource. The only supported value is `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#method UpdateResource#method}

---

### UpdateResourceRetry <a name="UpdateResourceRetry" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

const updateResourceRetry: updateResource.UpdateResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#error_message_regex UpdateResource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#interval_seconds UpdateResource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#max_interval_seconds UpdateResource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#multiplier UpdateResource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#randomization_factor UpdateResource#randomization_factor}

---

### UpdateResourceTimeouts <a name="UpdateResourceTimeouts" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

const updateResourceTimeouts: updateResource.UpdateResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#create UpdateResource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#delete UpdateResource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#read UpdateResource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/update_resource#update UpdateResource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### UpdateResourceReadOverrideOutputReference <a name="UpdateResourceReadOverrideOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

new updateResource.UpdateResourceReadOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceReadOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UpdateResourceReadOverride;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceReadOverride">UpdateResourceReadOverride</a>

---


### UpdateResourceRetryOutputReference <a name="UpdateResourceRetryOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

new updateResource.UpdateResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UpdateResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceRetry">UpdateResourceRetry</a>

---


### UpdateResourceTimeoutsOutputReference <a name="UpdateResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { updateResource } from '@cdktn/provider-azapi'

new updateResource.UpdateResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.updateResource.UpdateResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UpdateResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.updateResource.UpdateResourceTimeouts">UpdateResourceTimeouts</a>

---



