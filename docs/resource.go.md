# `resource` Submodule <a name="`resource` Submodule" id="@cdktn/provider-azapi.resource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resource <a name="Resource" id="@cdktn/provider-azapi.resource.Resource"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource azapi_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.Resource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.NewResource(scope Construct, id *string, config ResourceConfig) Resource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig">ResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azapi.resource.Resource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceConfig">ResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateHeaders">ResetCreateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters">ResetCreateQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders">ResetDeleteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters">ResetDeleteQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges">ResetIgnoreBodyChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing">ResetIgnoreCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty">ResetIgnoreMissingProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty">ResetIgnoreNullProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList">ResetIgnoreOtherItemsInList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty">ResetListUniqueIdProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadHeaders">ResetReadHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters">ResetReadQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues">ResetReplaceTriggersExternalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs">ResetReplaceTriggersRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetResponseExportValues">ResetResponseExportValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled">ResetSchemaValidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBody">ResetSensitiveBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion">ResetSensitiveBodyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders">ResetUpdateHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters">ResetUpdateQueryParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resource.Resource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.resource.Resource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.resource.Resource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.resource.Resource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.resource.Resource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.resource.Resource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.resource.Resource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.resource.Resource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.resource.Resource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resource.Resource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azapi.resource.Resource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azapi.resource.Resource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.Resource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azapi.resource.Resource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azapi.resource.Resource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azapi.resource.Resource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azapi.resource.Resource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.resource.Resource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azapi.resource.Resource.putIdentity"></a>

```go
func PutIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-azapi.resource.Resource.putRetry"></a>

```go
func PutRetry(value ResourceRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azapi.resource.Resource.putTimeouts"></a>

```go
func PutTimeouts(value ResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.resource.Resource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-azapi.resource.Resource.resetBody"></a>

```go
func ResetBody()
```

##### `ResetCreateHeaders` <a name="ResetCreateHeaders" id="@cdktn/provider-azapi.resource.Resource.resetCreateHeaders"></a>

```go
func ResetCreateHeaders()
```

##### `ResetCreateQueryParameters` <a name="ResetCreateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetCreateQueryParameters"></a>

```go
func ResetCreateQueryParameters()
```

##### `ResetDeleteHeaders` <a name="ResetDeleteHeaders" id="@cdktn/provider-azapi.resource.Resource.resetDeleteHeaders"></a>

```go
func ResetDeleteHeaders()
```

##### `ResetDeleteQueryParameters` <a name="ResetDeleteQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetDeleteQueryParameters"></a>

```go
func ResetDeleteQueryParameters()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azapi.resource.Resource.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetIgnoreBodyChanges` <a name="ResetIgnoreBodyChanges" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreBodyChanges"></a>

```go
func ResetIgnoreBodyChanges()
```

##### `ResetIgnoreCasing` <a name="ResetIgnoreCasing" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreCasing"></a>

```go
func ResetIgnoreCasing()
```

##### `ResetIgnoreMissingProperty` <a name="ResetIgnoreMissingProperty" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreMissingProperty"></a>

```go
func ResetIgnoreMissingProperty()
```

##### `ResetIgnoreNullProperty` <a name="ResetIgnoreNullProperty" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreNullProperty"></a>

```go
func ResetIgnoreNullProperty()
```

##### `ResetIgnoreOtherItemsInList` <a name="ResetIgnoreOtherItemsInList" id="@cdktn/provider-azapi.resource.Resource.resetIgnoreOtherItemsInList"></a>

```go
func ResetIgnoreOtherItemsInList()
```

##### `ResetListUniqueIdProperty` <a name="ResetListUniqueIdProperty" id="@cdktn/provider-azapi.resource.Resource.resetListUniqueIdProperty"></a>

```go
func ResetListUniqueIdProperty()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-azapi.resource.Resource.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetLocks` <a name="ResetLocks" id="@cdktn/provider-azapi.resource.Resource.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azapi.resource.Resource.resetName"></a>

```go
func ResetName()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktn/provider-azapi.resource.Resource.resetParentId"></a>

```go
func ResetParentId()
```

##### `ResetReadHeaders` <a name="ResetReadHeaders" id="@cdktn/provider-azapi.resource.Resource.resetReadHeaders"></a>

```go
func ResetReadHeaders()
```

##### `ResetReadQueryParameters` <a name="ResetReadQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetReadQueryParameters"></a>

```go
func ResetReadQueryParameters()
```

##### `ResetReplaceTriggersExternalValues` <a name="ResetReplaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersExternalValues"></a>

```go
func ResetReplaceTriggersExternalValues()
```

##### `ResetReplaceTriggersRefs` <a name="ResetReplaceTriggersRefs" id="@cdktn/provider-azapi.resource.Resource.resetReplaceTriggersRefs"></a>

```go
func ResetReplaceTriggersRefs()
```

##### `ResetResponseExportValues` <a name="ResetResponseExportValues" id="@cdktn/provider-azapi.resource.Resource.resetResponseExportValues"></a>

```go
func ResetResponseExportValues()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-azapi.resource.Resource.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetSchemaValidationEnabled` <a name="ResetSchemaValidationEnabled" id="@cdktn/provider-azapi.resource.Resource.resetSchemaValidationEnabled"></a>

```go
func ResetSchemaValidationEnabled()
```

##### `ResetSensitiveBody` <a name="ResetSensitiveBody" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBody"></a>

```go
func ResetSensitiveBody()
```

##### `ResetSensitiveBodyVersion` <a name="ResetSensitiveBodyVersion" id="@cdktn/provider-azapi.resource.Resource.resetSensitiveBodyVersion"></a>

```go
func ResetSensitiveBodyVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azapi.resource.Resource.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azapi.resource.Resource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateHeaders` <a name="ResetUpdateHeaders" id="@cdktn/provider-azapi.resource.Resource.resetUpdateHeaders"></a>

```go
func ResetUpdateHeaders()
```

##### `ResetUpdateQueryParameters` <a name="ResetUpdateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.resetUpdateQueryParameters"></a>

```go
func ResetUpdateQueryParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.resource.Resource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.Resource_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.Resource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.Resource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.resource.Resource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.Resource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.resource.Resource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.output">Output</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.bodyInput">BodyInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeadersInput">CreateHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput">CreateQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput">DeleteHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput">DeleteQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.identityInput">IdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput">IgnoreBodyChangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput">IgnoreCasingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput">IgnoreMissingPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput">IgnoreNullPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput">IgnoreOtherItemsInListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput">ListUniqueIdPropertyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locksInput">LocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeadersInput">ReadHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput">ReadQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput">ReplaceTriggersExternalValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput">ReplaceTriggersRefsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput">ResponseExportValuesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput">SchemaValidationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput">SensitiveBodyInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput">SensitiveBodyVersionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput">UpdateHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput">UpdateQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.body">Body</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createHeaders">CreateHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.createQueryParameters">CreateQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteHeaders">DeleteHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters">DeleteQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges">IgnoreBodyChanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreCasing">IgnoreCasing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty">IgnoreMissingProperty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty">IgnoreNullProperty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList">IgnoreOtherItemsInList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty">ListUniqueIdProperty</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.locks">Locks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readHeaders">ReadHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.readQueryParameters">ReadQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues">ReplaceTriggersExternalValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs">ReplaceTriggersRefs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled">SchemaValidationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBody">SensitiveBody</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateHeaders">UpdateHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters">UpdateQueryParameters</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.resource.Resource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.resource.Resource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resource.Resource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.resource.Resource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azapi.resource.Resource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.resource.Resource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.resource.Resource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resource.Resource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resource.Resource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resource.Resource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resource.Resource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resource.Resource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resource.Resource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resource.Resource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.resource.Resource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azapi.resource.Resource.property.identity"></a>

```go
func Identity() ResourceIdentityList
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceIdentityList">ResourceIdentityList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-azapi.resource.Resource.property.output"></a>

```go
func Output() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-azapi.resource.Resource.property.retry"></a>

```go
func Retry() ResourceRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference">ResourceRetryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azapi.resource.Resource.property.timeouts"></a>

```go
func Timeouts() ResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference">ResourceTimeoutsOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-azapi.resource.Resource.property.bodyInput"></a>

```go
func BodyInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `CreateHeadersInput`<sup>Optional</sup> <a name="CreateHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.createHeadersInput"></a>

```go
func CreateHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateQueryParametersInput`<sup>Optional</sup> <a name="CreateQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParametersInput"></a>

```go
func CreateQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteHeadersInput`<sup>Optional</sup> <a name="DeleteHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeadersInput"></a>

```go
func DeleteHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteQueryParametersInput`<sup>Optional</sup> <a name="DeleteQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParametersInput"></a>

```go
func DeleteQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azapi.resource.Resource.property.identityInput"></a>

```go
func IdentityInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreBodyChangesInput`<sup>Optional</sup> <a name="IgnoreBodyChangesInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChangesInput"></a>

```go
func IgnoreBodyChangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoreCasingInput`<sup>Optional</sup> <a name="IgnoreCasingInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasingInput"></a>

```go
func IgnoreCasingInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreMissingPropertyInput`<sup>Optional</sup> <a name="IgnoreMissingPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingPropertyInput"></a>

```go
func IgnoreMissingPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNullPropertyInput`<sup>Optional</sup> <a name="IgnoreNullPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullPropertyInput"></a>

```go
func IgnoreNullPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreOtherItemsInListInput`<sup>Optional</sup> <a name="IgnoreOtherItemsInListInput" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInListInput"></a>

```go
func IgnoreOtherItemsInListInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListUniqueIdPropertyInput`<sup>Optional</sup> <a name="ListUniqueIdPropertyInput" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdPropertyInput"></a>

```go
func ListUniqueIdPropertyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azapi.resource.Resource.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="@cdktn/provider-azapi.resource.Resource.property.locksInput"></a>

```go
func LocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azapi.resource.Resource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-azapi.resource.Resource.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `ReadHeadersInput`<sup>Optional</sup> <a name="ReadHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.readHeadersInput"></a>

```go
func ReadHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReadQueryParametersInput`<sup>Optional</sup> <a name="ReadQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParametersInput"></a>

```go
func ReadQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceTriggersExternalValuesInput`<sup>Optional</sup> <a name="ReplaceTriggersExternalValuesInput" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValuesInput"></a>

```go
func ReplaceTriggersExternalValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ReplaceTriggersRefsInput`<sup>Optional</sup> <a name="ReplaceTriggersRefsInput" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefsInput"></a>

```go
func ReplaceTriggersRefsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseExportValuesInput`<sup>Optional</sup> <a name="ResponseExportValuesInput" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValuesInput"></a>

```go
func ResponseExportValuesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-azapi.resource.Resource.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaValidationEnabledInput`<sup>Optional</sup> <a name="SchemaValidationEnabledInput" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabledInput"></a>

```go
func SchemaValidationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SensitiveBodyInput`<sup>Optional</sup> <a name="SensitiveBodyInput" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyInput"></a>

```go
func SensitiveBodyInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SensitiveBodyVersionInput`<sup>Optional</sup> <a name="SensitiveBodyVersionInput" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersionInput"></a>

```go
func SensitiveBodyVersionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azapi.resource.Resource.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azapi.resource.Resource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.resource.Resource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UpdateHeadersInput`<sup>Optional</sup> <a name="UpdateHeadersInput" id="@cdktn/provider-azapi.resource.Resource.property.updateHeadersInput"></a>

```go
func UpdateHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateQueryParametersInput`<sup>Optional</sup> <a name="UpdateQueryParametersInput" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParametersInput"></a>

```go
func UpdateQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-azapi.resource.Resource.property.body"></a>

```go
func Body() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `CreateHeaders`<sup>Required</sup> <a name="CreateHeaders" id="@cdktn/provider-azapi.resource.Resource.property.createHeaders"></a>

```go
func CreateHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateQueryParameters`<sup>Required</sup> <a name="CreateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.createQueryParameters"></a>

```go
func CreateQueryParameters() interface{}
```

- *Type:* interface{}

---

##### `DeleteHeaders`<sup>Required</sup> <a name="DeleteHeaders" id="@cdktn/provider-azapi.resource.Resource.property.deleteHeaders"></a>

```go
func DeleteHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteQueryParameters`<sup>Required</sup> <a name="DeleteQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.deleteQueryParameters"></a>

```go
func DeleteQueryParameters() interface{}
```

- *Type:* interface{}

---

##### ~~`IgnoreBodyChanges`~~<sup>Required</sup> <a name="IgnoreBodyChanges" id="@cdktn/provider-azapi.resource.Resource.property.ignoreBodyChanges"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func IgnoreBodyChanges() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoreCasing`<sup>Required</sup> <a name="IgnoreCasing" id="@cdktn/provider-azapi.resource.Resource.property.ignoreCasing"></a>

```go
func IgnoreCasing() interface{}
```

- *Type:* interface{}

---

##### `IgnoreMissingProperty`<sup>Required</sup> <a name="IgnoreMissingProperty" id="@cdktn/provider-azapi.resource.Resource.property.ignoreMissingProperty"></a>

```go
func IgnoreMissingProperty() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNullProperty`<sup>Required</sup> <a name="IgnoreNullProperty" id="@cdktn/provider-azapi.resource.Resource.property.ignoreNullProperty"></a>

```go
func IgnoreNullProperty() interface{}
```

- *Type:* interface{}

---

##### `IgnoreOtherItemsInList`<sup>Required</sup> <a name="IgnoreOtherItemsInList" id="@cdktn/provider-azapi.resource.Resource.property.ignoreOtherItemsInList"></a>

```go
func IgnoreOtherItemsInList() *[]*string
```

- *Type:* *[]*string

---

##### `ListUniqueIdProperty`<sup>Required</sup> <a name="ListUniqueIdProperty" id="@cdktn/provider-azapi.resource.Resource.property.listUniqueIdProperty"></a>

```go
func ListUniqueIdProperty() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azapi.resource.Resource.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-azapi.resource.Resource.property.locks"></a>

```go
func Locks() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azapi.resource.Resource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-azapi.resource.Resource.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `ReadHeaders`<sup>Required</sup> <a name="ReadHeaders" id="@cdktn/provider-azapi.resource.Resource.property.readHeaders"></a>

```go
func ReadHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReadQueryParameters`<sup>Required</sup> <a name="ReadQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.readQueryParameters"></a>

```go
func ReadQueryParameters() interface{}
```

- *Type:* interface{}

---

##### `ReplaceTriggersExternalValues`<sup>Required</sup> <a name="ReplaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersExternalValues"></a>

```go
func ReplaceTriggersExternalValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ReplaceTriggersRefs`<sup>Required</sup> <a name="ReplaceTriggersRefs" id="@cdktn/provider-azapi.resource.Resource.property.replaceTriggersRefs"></a>

```go
func ReplaceTriggersRefs() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseExportValues`<sup>Required</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resource.Resource.property.responseExportValues"></a>

```go
func ResponseExportValues() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SchemaValidationEnabled`<sup>Required</sup> <a name="SchemaValidationEnabled" id="@cdktn/provider-azapi.resource.Resource.property.schemaValidationEnabled"></a>

```go
func SchemaValidationEnabled() interface{}
```

- *Type:* interface{}

---

##### ~~`SensitiveBody`~~<sup>Required</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBody"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func SensitiveBody() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `SensitiveBodyVersion`<sup>Required</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resource.Resource.property.sensitiveBodyVersion"></a>

```go
func SensitiveBodyVersion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azapi.resource.Resource.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resource.Resource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateHeaders`<sup>Required</sup> <a name="UpdateHeaders" id="@cdktn/provider-azapi.resource.Resource.property.updateHeaders"></a>

```go
func UpdateHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpdateQueryParameters`<sup>Required</sup> <a name="UpdateQueryParameters" id="@cdktn/provider-azapi.resource.Resource.property.updateQueryParameters"></a>

```go
func UpdateQueryParameters() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.Resource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.resource.Resource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceConfig <a name="ResourceConfig" id="@cdktn/provider-azapi.resource.ResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

&resource.ResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	Body: *map[string]interface{},
	CreateHeaders: *map[string]*string,
	CreateQueryParameters: interface{},
	DeleteHeaders: *map[string]*string,
	DeleteQueryParameters: interface{},
	Identity: interface{},
	IgnoreBodyChanges: *[]*string,
	IgnoreCasing: interface{},
	IgnoreMissingProperty: interface{},
	IgnoreNullProperty: interface{},
	IgnoreOtherItemsInList: *[]*string,
	ListUniqueIdProperty: *map[string]*string,
	Location: *string,
	Locks: *[]*string,
	Name: *string,
	ParentId: *string,
	ReadHeaders: *map[string]*string,
	ReadQueryParameters: interface{},
	ReplaceTriggersExternalValues: *map[string]interface{},
	ReplaceTriggersRefs: *[]*string,
	ResponseExportValues: *map[string]interface{},
	Retry: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.resource.ResourceRetry,
	SchemaValidationEnabled: interface{},
	SensitiveBody: *map[string]interface{},
	SensitiveBodyVersion: *map[string]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azapi-go/azapi.resource.ResourceTimeouts,
	UpdateHeaders: *map[string]*string,
	UpdateQueryParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.type">Type</a></code> | <code>*string</code> | In a format like `<resource-type>@<api-version>`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.body">Body</a></code> | <code>*map[string]interface{}</code> | A dynamic attribute that contains the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders">CreateHeaders</a></code> | <code>*map[string]*string</code> | A mapping of headers to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters">CreateQueryParameters</a></code> | <code>interface{}</code> | A mapping of query parameters to be sent with the create request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders">DeleteHeaders</a></code> | <code>*map[string]*string</code> | A mapping of headers to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters">DeleteQueryParameters</a></code> | <code>interface{}</code> | A mapping of query parameters to be sent with the delete request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.identity">Identity</a></code> | <code>interface{}</code> | identity block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges">IgnoreBodyChanges</a></code> | <code>*[]*string</code> | A list of paths in the resource body whose changes should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing">IgnoreCasing</a></code> | <code>interface{}</code> | Whether ignore the casing of the property names in the response body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty">IgnoreMissingProperty</a></code> | <code>interface{}</code> | Whether ignore not returned properties like credentials in `body` to suppress plan-diff. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty">IgnoreNullProperty</a></code> | <code>interface{}</code> | When set to `true`, the provider will ignore properties whose values are `null` in the `body`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList">IgnoreOtherItemsInList</a></code> | <code>*[]*string</code> | A list of list property paths where items not specified in configuration should be ignored. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty">ListUniqueIdProperty</a></code> | <code>*map[string]*string</code> | A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.locks">Locks</a></code> | <code>*[]*string</code> | A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.parentId">ParentId</a></code> | <code>*string</code> | The ID of the azure resource in which this resource is created. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders">ReadHeaders</a></code> | <code>*map[string]*string</code> | A mapping of headers to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters">ReadQueryParameters</a></code> | <code>interface{}</code> | A mapping of query parameters to be sent with the read request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues">ReplaceTriggersExternalValues</a></code> | <code>*map[string]interface{}</code> | Will trigger a replace of the resource when the value changes and is not `null`. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs">ReplaceTriggersRefs</a></code> | <code>*[]*string</code> | A list of paths in the current Terraform configuration. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues">ResponseExportValues</a></code> | <code>*map[string]interface{}</code> | The attribute can accept either a list or a map. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a></code> | The retry object supports the following attributes:. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled">SchemaValidationEnabled</a></code> | <code>interface{}</code> | Whether enabled the validation on `type` and `body` with embedded schema. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody">SensitiveBody</a></code> | <code>*map[string]interface{}</code> | A dynamic attribute that contains the write-only properties of the request body. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion">SensitiveBodyVersion</a></code> | <code>*map[string]*string</code> | A map where the key is the path to the property in `sensitive_body` and the value is the version of the property. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A mapping of tags which should be assigned to the Azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders">UpdateHeaders</a></code> | <code>*map[string]*string</code> | A mapping of headers to be sent with the update request. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters">UpdateQueryParameters</a></code> | <code>interface{}</code> | A mapping of query parameters to be sent with the update request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azapi.resource.ResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azapi.resource.ResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azapi.resource.ResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azapi.resource.ResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azapi.resource.ResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azapi.resource.ResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resource.ResourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

In a format like `<resource-type>@<api-version>`.

`<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-azapi.resource.ResourceConfig.property.body"></a>

```go
Body *map[string]interface{}
```

- *Type:* *map[string]interface{}

A dynamic attribute that contains the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#body Resource#body}

---

##### `CreateHeaders`<sup>Optional</sup> <a name="CreateHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createHeaders"></a>

```go
CreateHeaders *map[string]*string
```

- *Type:* *map[string]*string

A mapping of headers to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_headers Resource#create_headers}

---

##### `CreateQueryParameters`<sup>Optional</sup> <a name="CreateQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.createQueryParameters"></a>

```go
CreateQueryParameters interface{}
```

- *Type:* interface{}

A mapping of query parameters to be sent with the create request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create_query_parameters Resource#create_query_parameters}

---

##### `DeleteHeaders`<sup>Optional</sup> <a name="DeleteHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteHeaders"></a>

```go
DeleteHeaders *map[string]*string
```

- *Type:* *map[string]*string

A mapping of headers to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_headers Resource#delete_headers}

---

##### `DeleteQueryParameters`<sup>Optional</sup> <a name="DeleteQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.deleteQueryParameters"></a>

```go
DeleteQueryParameters interface{}
```

- *Type:* interface{}

A mapping of query parameters to be sent with the delete request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete_query_parameters Resource#delete_query_parameters}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azapi.resource.ResourceConfig.property.identity"></a>

```go
Identity interface{}
```

- *Type:* interface{}

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity Resource#identity}

---

##### `IgnoreBodyChanges`<sup>Optional</sup> <a name="IgnoreBodyChanges" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreBodyChanges"></a>

```go
IgnoreBodyChanges *[]*string
```

- *Type:* *[]*string

A list of paths in the resource body whose changes should be ignored.

Prefer Terraform's `lifecycle.ignore_changes` when possible. Use this argument only when the paths must be derived from variables or other non-static values. Changes to this argument take effect only after an apply because its value is stored in provider-private state. Paths use dot notation, for example `properties.sku.name`. Individual list items cannot be targeted, ignore the entire list property instead. Configuration changes at an ignored path will not be sent to Azure until that path is removed from this list. This write-only argument requires Terraform 1.11 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_body_changes Resource#ignore_body_changes}

---

##### `IgnoreCasing`<sup>Optional</sup> <a name="IgnoreCasing" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreCasing"></a>

```go
IgnoreCasing interface{}
```

- *Type:* interface{}

Whether ignore the casing of the property names in the response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_casing Resource#ignore_casing}

---

##### `IgnoreMissingProperty`<sup>Optional</sup> <a name="IgnoreMissingProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreMissingProperty"></a>

```go
IgnoreMissingProperty interface{}
```

- *Type:* interface{}

Whether ignore not returned properties like credentials in `body` to suppress plan-diff.

It's recommend to enable this option when some sensitive properties are not returned in response body, instead of setting them in `lifecycle.ignore_changes` because it will make the sensitive fields unable to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_missing_property Resource#ignore_missing_property}

---

##### `IgnoreNullProperty`<sup>Optional</sup> <a name="IgnoreNullProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreNullProperty"></a>

```go
IgnoreNullProperty interface{}
```

- *Type:* interface{}

When set to `true`, the provider will ignore properties whose values are `null` in the `body`.

These properties will not be included in the request body sent to the API, and the difference will not be shown in the plan output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_null_property Resource#ignore_null_property}

---

##### `IgnoreOtherItemsInList`<sup>Optional</sup> <a name="IgnoreOtherItemsInList" id="@cdktn/provider-azapi.resource.ResourceConfig.property.ignoreOtherItemsInList"></a>

```go
IgnoreOtherItemsInList *[]*string
```

- *Type:* *[]*string

A list of list property paths where items not specified in configuration should be ignored.

This is intended for partial list management when combined with `list_unique_id_property` (for example, to avoid perpetual drift from server-side ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#ignore_other_items_in_list Resource#ignore_other_items_in_list}

---

##### `ListUniqueIdProperty`<sup>Optional</sup> <a name="ListUniqueIdProperty" id="@cdktn/provider-azapi.resource.ResourceConfig.property.listUniqueIdProperty"></a>

```go
ListUniqueIdProperty *map[string]*string
```

- *Type:* *map[string]*string

A mapping of list property paths to the field name used as a unique identifier when comparing and merging list items.

When not set, list items are matched by a `name` property (if present) or by list ordering. To match using multiple fields, specify a comma-separated list of field names (e.g., `"category, categoryGroup"`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#list_unique_id_property Resource#list_unique_id_property}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-azapi.resource.ResourceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#location Resource#location}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="@cdktn/provider-azapi.resource.ResourceConfig.property.locks"></a>

```go
Locks *[]*string
```

- *Type:* *[]*string

A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#locks Resource#locks}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azapi.resource.ResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#name Resource#name}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktn/provider-azapi.resource.ResourceConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

The ID of the azure resource in which this resource is created.

It supports different kinds of deployment scope for **top level** resources:

* resource group scope: `parent_id` should be the ID of a resource group, it's recommended to manage a resource group by azurerm_resource_group.
* management group scope: `parent_id` should be the ID of a management group, it's recommended to manage a management group by azurerm_management_group.
* extension scope: `parent_id` should be the ID of the resource you're adding the extension to.
* subscription scope: `parent_id` should be like \x60/subscriptions/00000000-0000-0000-0000-000000000000\x60
* tenant scope: `parent_id` should be /

For child level resources, the `parent_id` should be the ID of its parent resource, for example, subnet resource's `parent_id` is the ID of the vnet.

For type `Microsoft.Resources/resourceGroups`, the `parent_id` could be omitted, it defaults to subscription ID specified in provider or the default subscription (You could check the default subscription by azure cli command: `az account show`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#parent_id Resource#parent_id}

---

##### `ReadHeaders`<sup>Optional</sup> <a name="ReadHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readHeaders"></a>

```go
ReadHeaders *map[string]*string
```

- *Type:* *map[string]*string

A mapping of headers to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_headers Resource#read_headers}

---

##### `ReadQueryParameters`<sup>Optional</sup> <a name="ReadQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.readQueryParameters"></a>

```go
ReadQueryParameters interface{}
```

- *Type:* interface{}

A mapping of query parameters to be sent with the read request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read_query_parameters Resource#read_query_parameters}

---

##### `ReplaceTriggersExternalValues`<sup>Optional</sup> <a name="ReplaceTriggersExternalValues" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersExternalValues"></a>

```go
ReplaceTriggersExternalValues *map[string]interface{}
```

- *Type:* *map[string]interface{}

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

##### `ReplaceTriggersRefs`<sup>Optional</sup> <a name="ReplaceTriggersRefs" id="@cdktn/provider-azapi.resource.ResourceConfig.property.replaceTriggersRefs"></a>

```go
ReplaceTriggersRefs *[]*string
```

- *Type:* *[]*string

A list of paths in the current Terraform configuration.

When the values at these paths change, the resource will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#replace_triggers_refs Resource#replace_triggers_refs}

---

##### `ResponseExportValues`<sup>Optional</sup> <a name="ResponseExportValues" id="@cdktn/provider-azapi.resource.ResourceConfig.property.responseExportValues"></a>

```go
ResponseExportValues *map[string]interface{}
```

- *Type:* *map[string]interface{}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#response_export_values Resource#response_export_values}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-azapi.resource.ResourceConfig.property.retry"></a>

```go
Retry ResourceRetry
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceRetry">ResourceRetry</a>

The retry object supports the following attributes:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#retry Resource#retry}

---

##### `SchemaValidationEnabled`<sup>Optional</sup> <a name="SchemaValidationEnabled" id="@cdktn/provider-azapi.resource.ResourceConfig.property.schemaValidationEnabled"></a>

```go
SchemaValidationEnabled interface{}
```

- *Type:* interface{}

Whether enabled the validation on `type` and `body` with embedded schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#schema_validation_enabled Resource#schema_validation_enabled}

---

##### `SensitiveBody`<sup>Optional</sup> <a name="SensitiveBody" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBody"></a>

```go
SensitiveBody *map[string]interface{}
```

- *Type:* *map[string]interface{}

A dynamic attribute that contains the write-only properties of the request body.

This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body Resource#sensitive_body}

---

##### `SensitiveBodyVersion`<sup>Optional</sup> <a name="SensitiveBodyVersion" id="@cdktn/provider-azapi.resource.ResourceConfig.property.sensitiveBodyVersion"></a>

```go
SensitiveBodyVersion *map[string]*string
```

- *Type:* *map[string]*string

A map where the key is the path to the property in `sensitive_body` and the value is the version of the property.

The key is a string in the format of `path.to.property[index].subproperty`, where `index` is the index of the item in an array. When the version is changed, the property will be included in the request body, otherwise it will be omitted from the request body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#sensitive_body_version Resource#sensitive_body_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azapi.resource.ResourceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A mapping of tags which should be assigned to the Azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#tags Resource#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azapi.resource.ResourceConfig.property.timeouts"></a>

```go
Timeouts ResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azapi.resource.ResourceTimeouts">ResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#timeouts Resource#timeouts}

---

##### `UpdateHeaders`<sup>Optional</sup> <a name="UpdateHeaders" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateHeaders"></a>

```go
UpdateHeaders *map[string]*string
```

- *Type:* *map[string]*string

A mapping of headers to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_headers Resource#update_headers}

---

##### `UpdateQueryParameters`<sup>Optional</sup> <a name="UpdateQueryParameters" id="@cdktn/provider-azapi.resource.ResourceConfig.property.updateQueryParameters"></a>

```go
UpdateQueryParameters interface{}
```

- *Type:* interface{}

A mapping of query parameters to be sent with the update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update_query_parameters Resource#update_query_parameters}

---

### ResourceIdentity <a name="ResourceIdentity" id="@cdktn/provider-azapi.resource.ResourceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

&resource.ResourceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.type">Type</a></code> | <code>*string</code> | The Type of Identity which should be used for this azure resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | A list of User Managed Identity ID's which should be assigned to the azure resource. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

The Type of Identity which should be used for this azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#type Resource#type}

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azapi.resource.ResourceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

A list of User Managed Identity ID's which should be assigned to the azure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#identity_ids Resource#identity_ids}

---

### ResourceRetry <a name="ResourceRetry" id="@cdktn/provider-azapi.resource.ResourceRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

&resource.ResourceRetry {
	ErrorMessageRegex: *[]*string,
	IntervalSeconds: *f64,
	MaxIntervalSeconds: *f64,
	Multiplier: *f64,
	RandomizationFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | A list of regular expressions to match against error messages. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The base number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | The maximum number of seconds to wait between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The multiplier to apply to the interval between retries. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | The randomization factor to apply to the interval between retries. |

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resource.ResourceRetry.property.errorMessageRegex"></a>

```go
ErrorMessageRegex *[]*string
```

- *Type:* *[]*string

A list of regular expressions to match against error messages.

If any of the regular expressions match, the request will be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#error_message_regex Resource#error_message_regex}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The base number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#interval_seconds Resource#interval_seconds}

---

##### `MaxIntervalSeconds`<sup>Optional</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetry.property.maxIntervalSeconds"></a>

```go
MaxIntervalSeconds *f64
```

- *Type:* *f64

The maximum number of seconds to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#max_interval_seconds Resource#max_interval_seconds}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resource.ResourceRetry.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The multiplier to apply to the interval between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#multiplier Resource#multiplier}

---

##### `RandomizationFactor`<sup>Optional</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetry.property.randomizationFactor"></a>

```go
RandomizationFactor *f64
```

- *Type:* *f64

The randomization factor to apply to the interval between retries.

The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#randomization_factor Resource#randomization_factor}

---

### ResourceTimeouts <a name="ResourceTimeouts" id="@cdktn/provider-azapi.resource.ResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.resource.ResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

&resource.ResourceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.read">Read</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#create Resource#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#delete Resource#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#read Resource#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azapi.resource.ResourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/resources/resource#update Resource#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceIdentityList <a name="ResourceIdentityList" id="@cdktn/provider-azapi.resource.ResourceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.NewResourceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azapi.resource.ResourceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azapi.resource.ResourceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resource.ResourceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get"></a>

```go
func Get(index *f64) ResourceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azapi.resource.ResourceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resource.ResourceIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceIdentityOutputReference <a name="ResourceIdentityOutputReference" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.NewResourceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resource.ResourceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceRetryOutputReference <a name="ResourceRetryOutputReference" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.NewResourceRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds">ResetMaxIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor">ResetRandomizationFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetMaxIntervalSeconds` <a name="ResetMaxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMaxIntervalSeconds"></a>

```go
func ResetMaxIntervalSeconds()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```

##### `ResetRandomizationFactor` <a name="ResetRandomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.resetRandomizationFactor"></a>

```go
func ResetRandomizationFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput">ErrorMessageRegexInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput">MaxIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput">RandomizationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex">ErrorMessageRegex</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds">MaxIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor">RandomizationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageRegexInput`<sup>Optional</sup> <a name="ErrorMessageRegexInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegexInput"></a>

```go
func ErrorMessageRegexInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSecondsInput`<sup>Optional</sup> <a name="MaxIntervalSecondsInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSecondsInput"></a>

```go
func MaxIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `RandomizationFactorInput`<sup>Optional</sup> <a name="RandomizationFactorInput" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactorInput"></a>

```go
func RandomizationFactorInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessageRegex`<sup>Required</sup> <a name="ErrorMessageRegex" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.errorMessageRegex"></a>

```go
func ErrorMessageRegex() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxIntervalSeconds`<sup>Required</sup> <a name="MaxIntervalSeconds" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.maxIntervalSeconds"></a>

```go
func MaxIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `RandomizationFactor`<sup>Required</sup> <a name="RandomizationFactor" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.randomizationFactor"></a>

```go
func RandomizationFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resource.ResourceRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceTimeoutsOutputReference <a name="ResourceTimeoutsOutputReference" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/resource"

resource.NewResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azapi.resource.ResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



