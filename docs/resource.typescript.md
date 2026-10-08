# `resource` Submodule <a name="`resource` Submodule" id="@cdktn/provider-azapi.resource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resource <a name="Resource" id="@cdktn/provider-azapi.resource.Resource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource azapi_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.Resource.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

new resource.Resource(scope: Construct, id: string, config: ResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig">ResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceConfig">ResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateHeaders">resetCreateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters">resetCreateQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders">resetDeleteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters">resetDeleteQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges">resetIgnoreBodyChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing">resetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty">resetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty">resetIgnoreNullProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList">resetIgnoreOtherItemsInList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty">resetListUniqueIdProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadHeaders">resetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters">resetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues">resetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs">resetReplaceTriggersRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetResponseExportValues">resetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled">resetSchemaValidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBody">resetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion">resetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders">resetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters">resetUpdateQueryParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resource.Resource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.resource.Resource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resource.Resource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.resource.Resource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.resource.Resource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.resource.Resource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.resource.Resource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azapi.resource.Resource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azapi.resource.Resource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azapi.resource.Resource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azapi.resource.Resource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azapi.resource.Resource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azapi.resource.Resource.putIdentity"></a>

```typescript
public putIdentity(value: IResolvable | ResourceIdentity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putIdentity.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-azapi.resource.Resource.putRetry"></a>

```typescript
public putRetry(value: ResourceRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azapi.resource.Resource.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-azapi.resource.Resource.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetCreateHeaders` <a name="resetCreateHeaders" id="@cdktn/provider-azapi.resource.Resource.resetCreateHeaders"></a>

```typescript
public resetCreateHeaders(): void
```

##### `resetCreateQueryParameters` <a name="resetCreateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters"></a>

```typescript
public resetCreateQueryParameters(): void
```

##### `resetDeleteHeaders` <a name="resetDeleteHeaders" id="@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders"></a>

```typescript
public resetDeleteHeaders(): void
```

##### `resetDeleteQueryParameters` <a name="resetDeleteQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters"></a>

```typescript
public resetDeleteQueryParameters(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azapi.resource.Resource.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIgnoreBodyChanges` <a name="resetIgnoreBodyChanges" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges"></a>

```typescript
public resetIgnoreBodyChanges(): void
```

##### `resetIgnoreCasing` <a name="resetIgnoreCasing" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing"></a>

```typescript
public resetIgnoreCasing(): void
```

##### `resetIgnoreMissingProperty` <a name="resetIgnoreMissingProperty" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty"></a>

```typescript
public resetIgnoreMissingProperty(): void
```

##### `resetIgnoreNullProperty` <a name="resetIgnoreNullProperty" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty"></a>

```typescript
public resetIgnoreNullProperty(): void
```

##### `resetIgnoreOtherItemsInList` <a name="resetIgnoreOtherItemsInList" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList"></a>

```typescript
public resetIgnoreOtherItemsInList(): void
```

##### `resetListUniqueIdProperty` <a name="resetListUniqueIdProperty" id="@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty"></a>

```typescript
public resetListUniqueIdProperty(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-azapi.resource.Resource.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLocks` <a name="resetLocks" id="@cdktn/provider-azapi.resource.Resource.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azapi.resource.Resource.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-azapi.resource.Resource.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetReadHeaders` <a name="resetReadHeaders" id="@cdktn/provider-azapi.resource.Resource.resetReadHeaders"></a>

```typescript
public resetReadHeaders(): void
```

##### `resetReadQueryParameters` <a name="resetReadQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters"></a>

```typescript
public resetReadQueryParameters(): void
```

##### `resetReplaceTriggersExternalValues` <a name="resetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues"></a>

```typescript
public resetReplaceTriggersExternalValues(): void
```

##### `resetReplaceTriggersRefs` <a name="resetReplaceTriggersRefs" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs"></a>

```typescript
public resetReplaceTriggersRefs(): void
```

##### `resetResponseExportValues` <a name="resetResponseExportValues" id="@cdktn/provider-azapi.resource.Resource.resetResponseExportValues"></a>

```typescript
public resetResponseExportValues(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-azapi.resource.Resource.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetSchemaValidationEnabled` <a name="resetSchemaValidationEnabled" id="@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled"></a>

```typescript
public resetSchemaValidationEnabled(): void
```

##### `resetSensitiveBody` <a name="resetSensitiveBody" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBody"></a>

```typescript
public resetSensitiveBody(): void
```

##### `resetSensitiveBodyVersion` <a name="resetSensitiveBodyVersion" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion"></a>

```typescript
public resetSensitiveBodyVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azapi.resource.Resource.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azapi.resource.Resource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateHeaders` <a name="resetUpdateHeaders" id="@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders"></a>

```typescript
public resetUpdateHeaders(): void
```

##### `resetUpdateQueryParameters` <a name="resetUpdateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters"></a>

```typescript
public resetUpdateQueryParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.resource.Resource.isConstruct"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

resource.Resource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

resource.Resource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

resource.Resource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

resource.Resource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.output">output</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.bodyInput">bodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeadersInput">createHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput">createQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput">deleteHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput">deleteQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identityInput">identityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput">ignoreBodyChangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput">ignoreCasingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput">ignoreMissingPropertyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput">ignoreNullPropertyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput">ignoreOtherItemsInListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput">listUniqueIdPropertyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locksInput">locksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeadersInput">readHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput">readQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput">replaceTriggersExternalValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput">replaceTriggersRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput">responseExportValuesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput">schemaValidationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput">sensitiveBodyInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput">sensitiveBodyVersionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput">updateHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput">updateQueryParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeaders">createHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParameters">createQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeaders">deleteHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges">ignoreBodyChanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty">ignoreNullProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locks">locks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled">schemaValidationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.resource.Resource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.resource.Resource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.Resource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.resource.Resource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resource.Resource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resource.Resource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.resource.Resource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.resource.Resource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resource.Resource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resource.Resource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azapi.resource.Resource.property.identity"></a>

```typescript
public readonly identity: ResourceIdentityList;
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-azapi.resource.Resource.property.output"></a>

```typescript
public readonly output: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-azapi.resource.Resource.property.retry"></a>

```typescript
public readonly retry: ResourceRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azapi.resource.Resource.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-azapi.resource.Resource.property.bodyInput"></a>

```typescript
public readonly bodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `createHeadersInput`<sup>Optional</sup> <a name="createHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.createHeadersInput"></a>

```typescript
public readonly createHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createQueryParametersInput`<sup>Optional</sup> <a name="createQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput"></a>

```typescript
public readonly createQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `deleteHeadersInput`<sup>Optional</sup> <a name="deleteHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput"></a>

```typescript
public readonly deleteHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteQueryParametersInput`<sup>Optional</sup> <a name="deleteQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput"></a>

```typescript
public readonly deleteQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azapi.resource.Resource.property.identityInput"></a>

```typescript
public readonly identityInput: IResolvable | ResourceIdentity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]

---

##### `ignoreBodyChangesInput`<sup>Optional</sup> <a name="ignoreBodyChangesInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput"></a>

```typescript
public readonly ignoreBodyChangesInput: string[];
```

- *Type:* string[]

---

##### `ignoreCasingInput`<sup>Optional</sup> <a name="ignoreCasingInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput"></a>

```typescript
public readonly ignoreCasingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingPropertyInput`<sup>Optional</sup> <a name="ignoreMissingPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput"></a>

```typescript
public readonly ignoreMissingPropertyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNullPropertyInput`<sup>Optional</sup> <a name="ignoreNullPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput"></a>

```typescript
public readonly ignoreNullPropertyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreOtherItemsInListInput`<sup>Optional</sup> <a name="ignoreOtherItemsInListInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput"></a>

```typescript
public readonly ignoreOtherItemsInListInput: string[];
```

- *Type:* string[]

---

##### `listUniqueIdPropertyInput`<sup>Optional</sup> <a name="listUniqueIdPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput"></a>

```typescript
public readonly listUniqueIdPropertyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azapi.resource.Resource.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="@cdktn/provider-azapi.resource.Resource.property.locksInput"></a>

```typescript
public readonly locksInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azapi.resource.Resource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-azapi.resource.Resource.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `readHeadersInput`<sup>Optional</sup> <a name="readHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.readHeadersInput"></a>

```typescript
public readonly readHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readQueryParametersInput`<sup>Optional</sup> <a name="readQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput"></a>

```typescript
public readonly readQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="replaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput"></a>

```typescript
public readonly replaceTriggersExternalValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `replaceTriggersRefsInput`<sup>Optional</sup> <a name="replaceTriggersRefsInput" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput"></a>

```typescript
public readonly replaceTriggersRefsInput: string[];
```

- *Type:* string[]

---

##### `responseExportValuesInput`<sup>Optional</sup> <a name="responseExportValuesInput" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput"></a>

```typescript
public readonly responseExportValuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-azapi.resource.Resource.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | ResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---

##### `schemaValidationEnabledInput`<sup>Optional</sup> <a name="schemaValidationEnabledInput" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput"></a>

```typescript
public readonly schemaValidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sensitiveBodyInput`<sup>Optional</sup> <a name="sensitiveBodyInput" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput"></a>

```typescript
public readonly sensitiveBodyInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersionInput`<sup>Optional</sup> <a name="sensitiveBodyVersionInput" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput"></a>

```typescript
public readonly sensitiveBodyVersionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azapi.resource.Resource.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azapi.resource.Resource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.resource.Resource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `updateHeadersInput`<sup>Optional</sup> <a name="updateHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput"></a>

```typescript
public readonly updateHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParametersInput`<sup>Optional</sup> <a name="updateQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput"></a>

```typescript
public readonly updateQueryParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-azapi.resource.Resource.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `createHeaders`<sup>Required</sup> <a name="createHeaders" id="@cdktn/provider-azapi.resource.Resource.property.createHeaders"></a>

```typescript
public readonly createHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createQueryParameters`<sup>Required</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParameters"></a>

```typescript
public readonly createQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `deleteHeaders`<sup>Required</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeaders"></a>

```typescript
public readonly deleteHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteQueryParameters`<sup>Required</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters"></a>

```typescript
public readonly deleteQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### ~~`ignoreBodyChanges`~~<sup>Required</sup> <a name="ignoreBodyChanges" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly ignoreBodyChanges: string[];
```

- *Type:* string[]

---

##### `ignoreCasing`<sup>Required</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreMissingProperty`<sup>Required</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNullProperty`<sup>Required</sup> <a name="ignoreNullProperty" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty"></a>

```typescript
public readonly ignoreNullProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreOtherItemsInList`<sup>Required</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList"></a>

```typescript
public readonly ignoreOtherItemsInList: string[];
```

- *Type:* string[]

---

##### `listUniqueIdProperty`<sup>Required</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty"></a>

```typescript
public readonly listUniqueIdProperty: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azapi.resource.Resource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-azapi.resource.Resource.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azapi.resource.Resource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-azapi.resource.Resource.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `readHeaders`<sup>Required</sup> <a name="readHeaders" id="@cdktn/provider-azapi.resource.Resource.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readQueryParameters`<sup>Required</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `replaceTriggersExternalValues`<sup>Required</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues"></a>

```typescript
public readonly replaceTriggersExternalValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `replaceTriggersRefs`<sup>Required</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs"></a>

```typescript
public readonly replaceTriggersRefs: string[];
```

- *Type:* string[]

---

##### `responseExportValues`<sup>Required</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValues"></a>

```typescript
public readonly responseExportValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `schemaValidationEnabled`<sup>Required</sup> <a name="schemaValidationEnabled" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled"></a>

```typescript
public readonly schemaValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### ~~`sensitiveBody`~~<sup>Required</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `sensitiveBodyVersion`<sup>Required</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azapi.resource.Resource.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.Resource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateHeaders`<sup>Required</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.resource.Resource.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateQueryParameters`<sup>Required</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.resource.Resource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceConfig <a name="ResourceConfig" id="@cdktn/provider-azapi.resource.ResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceConfig.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

const resourceConfig: resource.ResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.type">type</a></code> | <code>string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.body">body</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders">createHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters">createQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders">deleteHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters">deleteQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.identity">identity</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]</code> | identity block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges">ignoreBodyChanges</a></code> | <code>string[]</code> | A list of paths in the resource body whose changes should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing">ignoreCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty">ignoreMissingProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty">ignoreNullProperty</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to `true`, the provider will ignore properties whose values are `null` in the `body`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList">ignoreOtherItemsInList</a></code> | <code>string[]</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty">listUniqueIdProperty</a></code> | <code>{[ key: string ]: string}</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.location">location</a></code> | <code>string</code> | The location of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.locks">locks</a></code> | <code>string[]</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.parentId">parentId</a></code> | <code>string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders">readHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters">readQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues">replaceTriggersExternalValues</a></code> | <code>{[ key: string ]: any}</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs">replaceTriggersRefs</a></code> | <code>string[]</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues">responseExportValues</a></code> | <code>{[ key: string ]: any}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled">schemaValidationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether enabled the validation on `type` and `body` with embedded schema. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody">sensitiveBody</a></code> | <code>{[ key: string ]: any}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion">sensitiveBodyVersion</a></code> | <code>{[ key: string ]: string}</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A mapping of tags which should be assigned to the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders">updateHeaders</a></code> | <code>{[ key: string ]: string}</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters">updateQueryParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | A mapping of query parameters to be sent with the update request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azapi.resource.ResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azapi.resource.ResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azapi.resource.ResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-azapi.resource.ResourceConfig.property.body"></a>

```typescript
public readonly body: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#body Resource#body}

---

##### `createHeaders`<sup>Optional</sup> <a name="createHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders"></a>

```typescript
public readonly createHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_headers Resource#create_headers}

---

##### `createQueryParameters`<sup>Optional</sup> <a name="createQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters"></a>

```typescript
public readonly createQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_query_parameters Resource#create_query_parameters}

---

##### `deleteHeaders`<sup>Optional</sup> <a name="deleteHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders"></a>

```typescript
public readonly deleteHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_headers Resource#delete_headers}

---

##### `deleteQueryParameters`<sup>Optional</sup> <a name="deleteQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters"></a>

```typescript
public readonly deleteQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_query_parameters Resource#delete_query_parameters}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azapi.resource.ResourceConfig.property.identity"></a>

```typescript
public readonly identity: IResolvable | ResourceIdentity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity Resource#identity}

---

##### `ignoreBodyChanges`<sup>Optional</sup> <a name="ignoreBodyChanges" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges"></a>

```typescript
public readonly ignoreBodyChanges: string[];
```

- *Type:* string[]

A list of paths in the resource body whose changes should be ignored.

Prefer Terraform's `lifecycle.ignore_changes` when possible. Use this argument only when the paths must be derived from variables or other non-static values. Changes to this argument take effect only after an apply because its value is stored in provider-private state. Paths use dot notation, for example `properties.sku.name`. Individual list items cannot be targeted, ignore the entire list property instead. Configuration changes at an ignored path will not be sent to Azure until that path is removed from this list. This write-only argument requires Terraform 1.11 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_body_changes Resource#ignore_body_changes}

---

##### `ignoreCasing`<sup>Optional</sup> <a name="ignoreCasing" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing"></a>

```typescript
public readonly ignoreCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_casing Resource#ignore_casing}

---

##### `ignoreMissingProperty`<sup>Optional</sup> <a name="ignoreMissingProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty"></a>

```typescript
public readonly ignoreMissingProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_missing_property Resource#ignore_missing_property}

---

##### `ignoreNullProperty`<sup>Optional</sup> <a name="ignoreNullProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty"></a>

```typescript
public readonly ignoreNullProperty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to `true`, the provider will ignore properties whose values are `null` in the `body`.

These properties will not be included in the request body sent to the API, and the difference will not be shown in the plan output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_null_property Resource#ignore_null_property}

---

##### `ignoreOtherItemsInList`<sup>Optional</sup> <a name="ignoreOtherItemsInList" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList"></a>

```typescript
public readonly ignoreOtherItemsInList: string[];
```

- *Type:* string[]

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_other_items_in_list Resource#ignore_other_items_in_list}

---

##### `listUniqueIdProperty`<sup>Optional</sup> <a name="listUniqueIdProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty"></a>

```typescript
public readonly listUniqueIdProperty: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#list_unique_id_property Resource#list_unique_id_property}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-azapi.resource.ResourceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#location Resource#location}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="@cdktn/provider-azapi.resource.ResourceConfig.property.locks"></a>

```typescript
public readonly locks: string[];
```

- *Type:* string[]

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#locks Resource#locks}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azapi.resource.ResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#name Resource#name}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-azapi.resource.ResourceConfig.property.parentId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#parent_id Resource#parent_id}

---

##### `readHeaders`<sup>Optional</sup> <a name="readHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders"></a>

```typescript
public readonly readHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_headers Resource#read_headers}

---

##### `readQueryParameters`<sup>Optional</sup> <a name="readQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters"></a>

```typescript
public readonly readQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_query_parameters Resource#read_query_parameters}

---

##### `replaceTriggersExternalValues`<sup>Optional</sup> <a name="replaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues"></a>

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
resource "azapi_resource" "example" {
  name      = var.name
  type      = "Microsoft.Network/publicIPAddresses@2023-11-01"
  parent_id = "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example"
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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_external_values Resource#replace_triggers_external_values}

---

##### `replaceTriggersRefs`<sup>Optional</sup> <a name="replaceTriggersRefs" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs"></a>

```typescript
public readonly replaceTriggersRefs: string[];
```

- *Type:* string[]

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_refs Resource#replace_triggers_refs}

---

##### `responseExportValues`<sup>Optional</sup> <a name="responseExportValues" id="@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#response_export_values Resource#response_export_values}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-azapi.resource.ResourceConfig.property.retry"></a>

```typescript
public readonly retry: ResourceRetry;
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#retry Resource#retry}

---

##### `schemaValidationEnabled`<sup>Optional</sup> <a name="schemaValidationEnabled" id="@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled"></a>

```typescript
public readonly schemaValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether enabled the validation on `type` and `body` with embedded schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#schema_validation_enabled Resource#schema_validation_enabled}

---

##### `sensitiveBody`<sup>Optional</sup> <a name="sensitiveBody" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody"></a>

```typescript
public readonly sensitiveBody: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body Resource#sensitive_body}

---

##### `sensitiveBodyVersion`<sup>Optional</sup> <a name="sensitiveBodyVersion" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion"></a>

```typescript
public readonly sensitiveBodyVersion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body_version Resource#sensitive_body_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azapi.resource.ResourceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of tags which should be assigned to the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#tags Resource#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#timeouts Resource#timeouts}

---

##### `updateHeaders`<sup>Optional</sup> <a name="updateHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders"></a>

```typescript
public readonly updateHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_headers Resource#update_headers}

---

##### `updateQueryParameters`<sup>Optional</sup> <a name="updateQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters"></a>

```typescript
public readonly updateQueryParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_query_parameters Resource#update_query_parameters}

---

### ResourceIdentity <a name="ResourceIdentity" id="@cdktn/provider-azapi.resource.ResourceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceIdentity.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

const resourceIdentity: resource.ResourceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.type">type</a></code> | <code>string</code> | The Type of Identity which should be used for this azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | A list of User Managed Identity ID's which should be assigned to the azure resource. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type of Identity which should be used for this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

A list of User Managed Identity ID's which should be assigned to the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity_ids Resource#identity_ids}

---

### ResourceRetry <a name="ResourceRetry" id="@cdktn/provider-azapi.resource.ResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceRetry.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

const resourceRetry: resource.ResourceRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier">multiplier</a></code> | <code>number</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | The randomization factor to apply to the interval between retries. |

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#error_message_regex Resource#error_message_regex}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#interval_seconds Resource#interval_seconds}

---

##### `maxIntervalSeconds`<sup>Optional</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#max_interval_seconds Resource#max_interval_seconds}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#multiplier Resource#multiplier}

---

##### `randomizationFactor`<sup>Optional</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#randomization_factor Resource#randomization_factor}

---

### ResourceTimeouts <a name="ResourceTimeouts" id="@cdktn/provider-azapi.resource.ResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceTimeouts.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

const resourceTimeouts: resource.ResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create Resource#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete Resource#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read Resource#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update Resource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceIdentityList <a name="ResourceIdentityList" id="@cdktn/provider-azapi.resource.ResourceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

new resource.ResourceIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resource.ResourceIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get"></a>

```typescript
public get(index: number): ResourceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceIdentity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>[]

---


### ResourceIdentityOutputReference <a name="ResourceIdentityOutputReference" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

new resource.ResourceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceIdentity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceIdentity">ResourceIdentity</a>

---


### ResourceRetryOutputReference <a name="ResourceRetryOutputReference" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

new resource.ResourceRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds">resetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor">resetRandomizationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetMaxIntervalSeconds` <a name="resetMaxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```typescript
public resetMaxIntervalSeconds(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```

##### `resetRandomizationFactor` <a name="resetRandomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor"></a>

```typescript
public resetRandomizationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput">errorMessageRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput">maxIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput">randomizationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex">errorMessageRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds">maxIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor">randomizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageRegexInput`<sup>Optional</sup> <a name="errorMessageRegexInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```typescript
public readonly errorMessageRegexInput: string[];
```

- *Type:* string[]

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `maxIntervalSecondsInput`<sup>Optional</sup> <a name="maxIntervalSecondsInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```typescript
public readonly maxIntervalSecondsInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `randomizationFactorInput`<sup>Optional</sup> <a name="randomizationFactorInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput"></a>

```typescript
public readonly randomizationFactorInput: number;
```

- *Type:* number

---

##### `errorMessageRegex`<sup>Required</sup> <a name="errorMessageRegex" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex"></a>

```typescript
public readonly errorMessageRegex: string[];
```

- *Type:* string[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `maxIntervalSeconds`<sup>Required</sup> <a name="maxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```typescript
public readonly maxIntervalSeconds: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `randomizationFactor`<sup>Required</sup> <a name="randomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor"></a>

```typescript
public readonly randomizationFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---


### ResourceTimeoutsOutputReference <a name="ResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { resource } from '@cdktn/provider-azapi'

new resource.ResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---



