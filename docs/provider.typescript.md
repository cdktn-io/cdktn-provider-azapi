# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azapi.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzapiProvider <a name="AzapiProvider" id="@cdktn/provider-azapi.provider.AzapiProvider"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs azapi}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

new provider.AzapiProvider(scope: Construct, id: string, config?: AzapiProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig">AzapiProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig">AzapiProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken">resetAlwaysAcquirePolicyToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds">resetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath">resetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath">resetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId">resetCustomCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName">resetDefaultName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId">resetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput">resetDisableDefaultOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery">resetDisableInstanceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId">resetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight">resetEnablePreflight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges">resetIgnoreNoOpChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts">resetMaximumBusyRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId">resetOidcAzureServiceConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken">resetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl">resetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath">resetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId">resetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing">resetPreserveResourceIdCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration">resetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity">resetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli">resetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc">resetUseOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azapi.provider.AzapiProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.provider.AzapiProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.provider.AzapiProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAlwaysAcquirePolicyToken` <a name="resetAlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken"></a>

```typescript
public resetAlwaysAcquirePolicyToken(): void
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds"></a>

```typescript
public resetAuxiliaryTenantIds(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath"></a>

```typescript
public resetClientCertificatePath(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientIdFilePath` <a name="resetClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath"></a>

```typescript
public resetClientIdFilePath(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretFilePath` <a name="resetClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath"></a>

```typescript
public resetClientSecretFilePath(): void
```

##### `resetCustomCorrelationRequestId` <a name="resetCustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId"></a>

```typescript
public resetCustomCorrelationRequestId(): void
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation"></a>

```typescript
public resetDefaultLocation(): void
```

##### `resetDefaultName` <a name="resetDefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName"></a>

```typescript
public resetDefaultName(): void
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags"></a>

```typescript
public resetDefaultTags(): void
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId"></a>

```typescript
public resetDisableCorrelationRequestId(): void
```

##### `resetDisableDefaultOutput` <a name="resetDisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput"></a>

```typescript
public resetDisableDefaultOutput(): void
```

##### `resetDisableInstanceDiscovery` <a name="resetDisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery"></a>

```typescript
public resetDisableInstanceDiscovery(): void
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId"></a>

```typescript
public resetDisableTerraformPartnerId(): void
```

##### `resetEnablePreflight` <a name="resetEnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight"></a>

```typescript
public resetEnablePreflight(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetIgnoreNoOpChanges` <a name="resetIgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges"></a>

```typescript
public resetIgnoreNoOpChanges(): void
```

##### `resetMaximumBusyRetryAttempts` <a name="resetMaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts"></a>

```typescript
public resetMaximumBusyRetryAttempts(): void
```

##### `resetOidcAzureServiceConnectionId` <a name="resetOidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId"></a>

```typescript
public resetOidcAzureServiceConnectionId(): void
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken"></a>

```typescript
public resetOidcRequestToken(): void
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl"></a>

```typescript
public resetOidcRequestUrl(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath"></a>

```typescript
public resetOidcTokenFilePath(): void
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId"></a>

```typescript
public resetPartnerId(): void
```

##### `resetPreserveResourceIdCasing` <a name="resetPreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing"></a>

```typescript
public resetPreserveResourceIdCasing(): void
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration"></a>

```typescript
public resetSkipProviderRegistration(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetUseAksWorkloadIdentity` <a name="resetUseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity"></a>

```typescript
public resetUseAksWorkloadIdentity(): void
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli"></a>

```typescript
public resetUseCli(): void
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi"></a>

```typescript
public resetUseMsi(): void
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc"></a>

```typescript
public resetUseOidc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azapi.provider.AzapiProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

provider.AzapiProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

provider.AzapiProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

provider.AzapiProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

provider.AzapiProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzapiProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzapiProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AzapiProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.functions">functions</a></code> | <code>@cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions</code> | Provider-defined functions of the azapi provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput">alwaysAcquirePolicyTokenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput">clientIdFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput">clientSecretFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput">customCorrelationRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput">defaultLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput">defaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput">disableDefaultOutputInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput">disableInstanceDiscoveryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput">enablePreflightInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput">endpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput">ignoreNoOpChangesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput">maximumBusyRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput">oidcAzureServiceConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput">preserveResourceIdCasingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput">useAksWorkloadIdentityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput">useCliInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput">useMsiInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput">useOidcInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken">alwaysAcquirePolicyToken</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath">clientIdFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId">customCorrelationRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation">defaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName">defaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags">defaultTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput">disableDefaultOutput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery">disableInstanceDiscovery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight">enablePreflight</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint">endpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges">ignoreNoOpChanges</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts">maximumBusyRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId">oidcAzureServiceConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken">oidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId">partnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing">preserveResourceIdCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCli">useCli</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi">useMsi</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc">useOidc</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.provider.AzapiProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.provider.AzapiProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-azapi.provider.AzapiProvider.property.functions"></a>

```typescript
public readonly functions: AzapiProviderFunctions;
```

- *Type:* @cdktn/provider-azapi.providerFunctions.AzapiProviderFunctions

Provider-defined functions of the azapi provider.

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `alwaysAcquirePolicyTokenInput`<sup>Optional</sup> <a name="alwaysAcquirePolicyTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput"></a>

```typescript
public readonly alwaysAcquirePolicyTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput"></a>

```typescript
public readonly auxiliaryTenantIdsInput: string[];
```

- *Type:* string[]

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput"></a>

```typescript
public readonly clientCertificatePathInput: string;
```

- *Type:* string

---

##### `clientIdFilePathInput`<sup>Optional</sup> <a name="clientIdFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput"></a>

```typescript
public readonly clientIdFilePathInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretFilePathInput`<sup>Optional</sup> <a name="clientSecretFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput"></a>

```typescript
public readonly clientSecretFilePathInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `customCorrelationRequestIdInput`<sup>Optional</sup> <a name="customCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput"></a>

```typescript
public readonly customCorrelationRequestIdInput: string;
```

- *Type:* string

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput"></a>

```typescript
public readonly defaultLocationInput: string;
```

- *Type:* string

---

##### `defaultNameInput`<sup>Optional</sup> <a name="defaultNameInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput"></a>

```typescript
public readonly defaultNameInput: string;
```

- *Type:* string

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput"></a>

```typescript
public readonly defaultTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput"></a>

```typescript
public readonly disableCorrelationRequestIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDefaultOutputInput`<sup>Optional</sup> <a name="disableDefaultOutputInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput"></a>

```typescript
public readonly disableDefaultOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableInstanceDiscoveryInput`<sup>Optional</sup> <a name="disableInstanceDiscoveryInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput"></a>

```typescript
public readonly disableInstanceDiscoveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput"></a>

```typescript
public readonly disableTerraformPartnerIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePreflightInput`<sup>Optional</sup> <a name="enablePreflightInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput"></a>

```typescript
public readonly enablePreflightInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput"></a>

```typescript
public readonly endpointInput: IResolvable | AzapiProviderEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `ignoreNoOpChangesInput`<sup>Optional</sup> <a name="ignoreNoOpChangesInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput"></a>

```typescript
public readonly ignoreNoOpChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumBusyRetryAttemptsInput`<sup>Optional</sup> <a name="maximumBusyRetryAttemptsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput"></a>

```typescript
public readonly maximumBusyRetryAttemptsInput: number;
```

- *Type:* number

---

##### `oidcAzureServiceConnectionIdInput`<sup>Optional</sup> <a name="oidcAzureServiceConnectionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput"></a>

```typescript
public readonly oidcAzureServiceConnectionIdInput: string;
```

- *Type:* string

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput"></a>

```typescript
public readonly oidcRequestTokenInput: string;
```

- *Type:* string

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput"></a>

```typescript
public readonly oidcRequestUrlInput: string;
```

- *Type:* string

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput"></a>

```typescript
public readonly oidcTokenFilePathInput: string;
```

- *Type:* string

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: string;
```

- *Type:* string

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput"></a>

```typescript
public readonly partnerIdInput: string;
```

- *Type:* string

---

##### `preserveResourceIdCasingInput`<sup>Optional</sup> <a name="preserveResourceIdCasingInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput"></a>

```typescript
public readonly preserveResourceIdCasingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput"></a>

```typescript
public readonly skipProviderRegistrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `useAksWorkloadIdentityInput`<sup>Optional</sup> <a name="useAksWorkloadIdentityInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput"></a>

```typescript
public readonly useAksWorkloadIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput"></a>

```typescript
public readonly useCliInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput"></a>

```typescript
public readonly useMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput"></a>

```typescript
public readonly useOidcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `alwaysAcquirePolicyToken`<sup>Optional</sup> <a name="alwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken"></a>

```typescript
public readonly alwaysAcquirePolicyToken: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath"></a>

```typescript
public readonly clientIdFilePath: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath"></a>

```typescript
public readonly clientSecretFilePath: string;
```

- *Type:* string

---

##### `customCorrelationRequestId`<sup>Optional</sup> <a name="customCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId"></a>

```typescript
public readonly customCorrelationRequestId: string;
```

- *Type:* string

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation"></a>

```typescript
public readonly defaultLocation: string;
```

- *Type:* string

---

##### `defaultName`<sup>Optional</sup> <a name="defaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName"></a>

```typescript
public readonly defaultName: string;
```

- *Type:* string

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags"></a>

```typescript
public readonly defaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDefaultOutput`<sup>Optional</sup> <a name="disableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput"></a>

```typescript
public readonly disableDefaultOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableInstanceDiscovery`<sup>Optional</sup> <a name="disableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery"></a>

```typescript
public readonly disableInstanceDiscovery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePreflight`<sup>Optional</sup> <a name="enablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight"></a>

```typescript
public readonly enablePreflight: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint"></a>

```typescript
public readonly endpoint: IResolvable | AzapiProviderEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `ignoreNoOpChanges`<sup>Optional</sup> <a name="ignoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges"></a>

```typescript
public readonly ignoreNoOpChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maximumBusyRetryAttempts`<sup>Optional</sup> <a name="maximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts"></a>

```typescript
public readonly maximumBusyRetryAttempts: number;
```

- *Type:* number

---

##### `oidcAzureServiceConnectionId`<sup>Optional</sup> <a name="oidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId"></a>

```typescript
public readonly oidcAzureServiceConnectionId: string;
```

- *Type:* string

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

---

##### `preserveResourceIdCasing`<sup>Optional</sup> <a name="preserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing"></a>

```typescript
public readonly preserveResourceIdCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity"></a>

```typescript
public readonly useAksWorkloadIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzapiProviderConfig <a name="AzapiProviderConfig" id="@cdktn/provider-azapi.provider.AzapiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

const azapiProviderConfig: provider.AzapiProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken">alwaysAcquirePolicyToken</a></code> | <code>boolean \| cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>string[]</code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath">clientIdFilePath</a></code> | <code>string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId">customCorrelationRequestId</a></code> | <code>string</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation">defaultLocation</a></code> | <code>string</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName">defaultName</a></code> | <code>string</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags">defaultTags</a></code> | <code>{[ key: string ]: string}</code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>boolean \| cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput">disableDefaultOutput</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery">disableInstanceDiscovery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight">enablePreflight</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint">endpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment">environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges">ignoreNoOpChanges</a></code> | <code>boolean \| cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts">maximumBusyRetryAttempts</a></code> | <code>number</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId">oidcAzureServiceConnectionId</a></code> | <code>string</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken">oidcToken</a></code> | <code>string</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId">partnerId</a></code> | <code>string</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing">preserveResourceIdCasing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli">useCli</a></code> | <code>boolean \| cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi">useMsi</a></code> | <code>boolean \| cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc">useOidc</a></code> | <code>boolean \| cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `alwaysAcquirePolicyToken`<sup>Optional</sup> <a name="alwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken"></a>

```typescript
public readonly alwaysAcquirePolicyToken: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds"></a>

```typescript
public readonly auxiliaryTenantIds: string[];
```

- *Type:* string[]

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath"></a>

```typescript
public readonly clientCertificatePath: string;
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath"></a>

```typescript
public readonly clientIdFilePath: string;
```

- *Type:* string

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath"></a>

```typescript
public readonly clientSecretFilePath: string;
```

- *Type:* string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `customCorrelationRequestId`<sup>Optional</sup> <a name="customCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId"></a>

```typescript
public readonly customCorrelationRequestId: string;
```

- *Type:* string

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation"></a>

```typescript
public readonly defaultLocation: string;
```

- *Type:* string

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `defaultName`<sup>Optional</sup> <a name="defaultName" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName"></a>

```typescript
public readonly defaultName: string;
```

- *Type:* string

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags"></a>

```typescript
public readonly defaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId"></a>

```typescript
public readonly disableCorrelationRequestId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `disableDefaultOutput`<sup>Optional</sup> <a name="disableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput"></a>

```typescript
public readonly disableDefaultOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `disableInstanceDiscovery`<sup>Optional</sup> <a name="disableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery"></a>

```typescript
public readonly disableInstanceDiscovery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId"></a>

```typescript
public readonly disableTerraformPartnerId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `enablePreflight`<sup>Optional</sup> <a name="enablePreflight" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight"></a>

```typescript
public readonly enablePreflight: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint"></a>

```typescript
public readonly endpoint: IResolvable | AzapiProviderEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `ignoreNoOpChanges`<sup>Optional</sup> <a name="ignoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges"></a>

```typescript
public readonly ignoreNoOpChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `maximumBusyRetryAttempts`<sup>Optional</sup> <a name="maximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts"></a>

```typescript
public readonly maximumBusyRetryAttempts: number;
```

- *Type:* number

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `oidcAzureServiceConnectionId`<sup>Optional</sup> <a name="oidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId"></a>

```typescript
public readonly oidcAzureServiceConnectionId: string;
```

- *Type:* string

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken"></a>

```typescript
public readonly oidcRequestToken: string;
```

- *Type:* string

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl"></a>

```typescript
public readonly oidcRequestUrl: string;
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken"></a>

```typescript
public readonly oidcToken: string;
```

- *Type:* string

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath"></a>

```typescript
public readonly oidcTokenFilePath: string;
```

- *Type:* string

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId"></a>

```typescript
public readonly partnerId: string;
```

- *Type:* string

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `preserveResourceIdCasing`<sup>Optional</sup> <a name="preserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing"></a>

```typescript
public readonly preserveResourceIdCasing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration"></a>

```typescript
public readonly skipProviderRegistration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity"></a>

```typescript
public readonly useAksWorkloadIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli"></a>

```typescript
public readonly useCli: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi"></a>

```typescript
public readonly useMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc"></a>

```typescript
public readonly useOidc: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

### AzapiProviderEndpoint <a name="AzapiProviderEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-azapi'

const azapiProviderEndpoint: provider.AzapiProviderEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost">activeDirectoryAuthorityHost</a></code> | <code>string</code> | The Azure Active Directory login endpoint to use. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience">resourceManagerAudience</a></code> | <code>string</code> | The resource ID to obtain AD tokens for. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint">resourceManagerEndpoint</a></code> | <code>string</code> | The Azure Resource Manager endpoint to use. |

---

##### `activeDirectoryAuthorityHost`<sup>Optional</sup> <a name="activeDirectoryAuthorityHost" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost"></a>

```typescript
public readonly activeDirectoryAuthorityHost: string;
```

- *Type:* string

The Azure Active Directory login endpoint to use.

This can also be sourced from the `ARM_ACTIVE_DIRECTORY_AUTHORITY_HOST` Environment Variable. Defaults to `https://login.microsoftonline.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#active_directory_authority_host AzapiProvider#active_directory_authority_host}

---

##### `resourceManagerAudience`<sup>Optional</sup> <a name="resourceManagerAudience" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience"></a>

```typescript
public readonly resourceManagerAudience: string;
```

- *Type:* string

The resource ID to obtain AD tokens for.

This can also be sourced from the `ARM_RESOURCE_MANAGER_AUDIENCE` Environment Variable. Defaults to `https://management.core.windows.net/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_audience AzapiProvider#resource_manager_audience}

---

##### `resourceManagerEndpoint`<sup>Optional</sup> <a name="resourceManagerEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint"></a>

```typescript
public readonly resourceManagerEndpoint: string;
```

- *Type:* string

The Azure Resource Manager endpoint to use.

This can also be sourced from the `ARM_RESOURCE_MANAGER_ENDPOINT` Environment Variable. Defaults to `https://management.azure.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_endpoint AzapiProvider#resource_manager_endpoint}

---



