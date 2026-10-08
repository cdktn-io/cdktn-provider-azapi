# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azapi.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzapiProvider <a name="AzapiProvider" id="@cdktn/provider-azapi.provider.AzapiProvider"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs azapi}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new AzapiProvider(Construct Scope, string Id, AzapiProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig">AzapiProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig">AzapiProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken">ResetAlwaysAcquirePolicyToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds">ResetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath">ResetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath">ResetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId">ResetCustomCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation">ResetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName">ResetDefaultName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId">ResetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput">ResetDisableDefaultOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery">ResetDisableInstanceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId">ResetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight">ResetEnablePreflight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges">ResetIgnoreNoOpChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts">ResetMaximumBusyRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId">ResetOidcAzureServiceConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken">ResetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl">ResetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath">ResetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId">ResetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing">ResetPreserveResourceIdCasing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration">ResetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity">ResetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli">ResetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc">ResetUseOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azapi.provider.AzapiProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.provider.AzapiProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azapi.provider.AzapiProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAlwaysAcquirePolicyToken` <a name="ResetAlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken"></a>

```csharp
private void ResetAlwaysAcquirePolicyToken()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds"></a>

```csharp
private void ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath"></a>

```csharp
private void ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath"></a>

```csharp
private void ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath"></a>

```csharp
private void ResetClientSecretFilePath()
```

##### `ResetCustomCorrelationRequestId` <a name="ResetCustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId"></a>

```csharp
private void ResetCustomCorrelationRequestId()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation"></a>

```csharp
private void ResetDefaultLocation()
```

##### `ResetDefaultName` <a name="ResetDefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName"></a>

```csharp
private void ResetDefaultName()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags"></a>

```csharp
private void ResetDefaultTags()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId"></a>

```csharp
private void ResetDisableCorrelationRequestId()
```

##### `ResetDisableDefaultOutput` <a name="ResetDisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput"></a>

```csharp
private void ResetDisableDefaultOutput()
```

##### `ResetDisableInstanceDiscovery` <a name="ResetDisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery"></a>

```csharp
private void ResetDisableInstanceDiscovery()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId"></a>

```csharp
private void ResetDisableTerraformPartnerId()
```

##### `ResetEnablePreflight` <a name="ResetEnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight"></a>

```csharp
private void ResetEnablePreflight()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetIgnoreNoOpChanges` <a name="ResetIgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges"></a>

```csharp
private void ResetIgnoreNoOpChanges()
```

##### `ResetMaximumBusyRetryAttempts` <a name="ResetMaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts"></a>

```csharp
private void ResetMaximumBusyRetryAttempts()
```

##### `ResetOidcAzureServiceConnectionId` <a name="ResetOidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId"></a>

```csharp
private void ResetOidcAzureServiceConnectionId()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken"></a>

```csharp
private void ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl"></a>

```csharp
private void ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath"></a>

```csharp
private void ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId"></a>

```csharp
private void ResetPartnerId()
```

##### `ResetPreserveResourceIdCasing` <a name="ResetPreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing"></a>

```csharp
private void ResetPreserveResourceIdCasing()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration"></a>

```csharp
private void ResetSkipProviderRegistration()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity"></a>

```csharp
private void ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli"></a>

```csharp
private void ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi"></a>

```csharp
private void ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc"></a>

```csharp
private void ResetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azapi.provider.AzapiProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

AzapiProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.provider.AzapiProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

AzapiProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

AzapiProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

AzapiProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzapiProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzapiProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AzapiProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.functions">Functions</a></code> | <code>Io.Cdktn.Providers.Azapi.providerFunctions.AzapiProviderFunctions</code> | Provider-defined functions of the azapi provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput">AlwaysAcquirePolicyTokenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput">CustomCorrelationRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput">DefaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput">DisableDefaultOutputInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput">DisableInstanceDiscoveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput">EnablePreflightInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput">EndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput">IgnoreNoOpChangesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput">MaximumBusyRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput">OidcAzureServiceConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput">PreserveResourceIdCasingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput">UseCliInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput">UseMsiInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput">UseOidcInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken">AlwaysAcquirePolicyToken</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId">CustomCorrelationRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName">DefaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags">DefaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput">DisableDefaultOutput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery">DisableInstanceDiscovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight">EnablePreflight</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint">Endpoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges">IgnoreNoOpChanges</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts">MaximumBusyRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId">OidcAzureServiceConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken">OidcToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId">PartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing">PreserveResourceIdCasing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCli">UseCli</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi">UseMsi</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc">UseOidc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.provider.AzapiProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.provider.AzapiProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-azapi.provider.AzapiProvider.property.functions"></a>

```csharp
public AzapiProviderFunctions Functions { get; }
```

- *Type:* Io.Cdktn.Providers.Azapi.providerFunctions.AzapiProviderFunctions

Provider-defined functions of the azapi provider.

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AlwaysAcquirePolicyTokenInput`<sup>Optional</sup> <a name="AlwaysAcquirePolicyTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput"></a>

```csharp
public bool|IResolvable AlwaysAcquirePolicyTokenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput"></a>

```csharp
public string[] AuxiliaryTenantIdsInput { get; }
```

- *Type:* string[]

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput"></a>

```csharp
public string ClientCertificatePathInput { get; }
```

- *Type:* string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput"></a>

```csharp
public string ClientIdFilePathInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput"></a>

```csharp
public string ClientSecretFilePathInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `CustomCorrelationRequestIdInput`<sup>Optional</sup> <a name="CustomCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput"></a>

```csharp
public string CustomCorrelationRequestIdInput { get; }
```

- *Type:* string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput"></a>

```csharp
public string DefaultLocationInput { get; }
```

- *Type:* string

---

##### `DefaultNameInput`<sup>Optional</sup> <a name="DefaultNameInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput"></a>

```csharp
public string DefaultNameInput { get; }
```

- *Type:* string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput"></a>

```csharp
public bool|IResolvable DisableCorrelationRequestIdInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableDefaultOutputInput`<sup>Optional</sup> <a name="DisableDefaultOutputInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput"></a>

```csharp
public bool|IResolvable DisableDefaultOutputInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableInstanceDiscoveryInput`<sup>Optional</sup> <a name="DisableInstanceDiscoveryInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput"></a>

```csharp
public bool|IResolvable DisableInstanceDiscoveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput"></a>

```csharp
public bool|IResolvable DisableTerraformPartnerIdInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreflightInput`<sup>Optional</sup> <a name="EnablePreflightInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput"></a>

```csharp
public bool|IResolvable EnablePreflightInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput"></a>

```csharp
public IResolvable|AzapiProviderEndpoint[] EndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IgnoreNoOpChangesInput`<sup>Optional</sup> <a name="IgnoreNoOpChangesInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput"></a>

```csharp
public bool|IResolvable IgnoreNoOpChangesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumBusyRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumBusyRetryAttemptsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput"></a>

```csharp
public double MaximumBusyRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `OidcAzureServiceConnectionIdInput`<sup>Optional</sup> <a name="OidcAzureServiceConnectionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput"></a>

```csharp
public string OidcAzureServiceConnectionIdInput { get; }
```

- *Type:* string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput"></a>

```csharp
public string OidcRequestTokenInput { get; }
```

- *Type:* string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput"></a>

```csharp
public string OidcRequestUrlInput { get; }
```

- *Type:* string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput"></a>

```csharp
public string OidcTokenFilePathInput { get; }
```

- *Type:* string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput"></a>

```csharp
public string OidcTokenInput { get; }
```

- *Type:* string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput"></a>

```csharp
public string PartnerIdInput { get; }
```

- *Type:* string

---

##### `PreserveResourceIdCasingInput`<sup>Optional</sup> <a name="PreserveResourceIdCasingInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput"></a>

```csharp
public bool|IResolvable PreserveResourceIdCasingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput"></a>

```csharp
public bool|IResolvable SkipProviderRegistrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput"></a>

```csharp
public bool|IResolvable UseAksWorkloadIdentityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput"></a>

```csharp
public bool|IResolvable UseCliInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput"></a>

```csharp
public bool|IResolvable UseMsiInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput"></a>

```csharp
public bool|IResolvable UseOidcInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlwaysAcquirePolicyToken`<sup>Optional</sup> <a name="AlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken"></a>

```csharp
public bool|IResolvable AlwaysAcquirePolicyToken { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; }
```

- *Type:* string[]

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; }
```

- *Type:* string

---

##### `CustomCorrelationRequestId`<sup>Optional</sup> <a name="CustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId"></a>

```csharp
public string CustomCorrelationRequestId { get; }
```

- *Type:* string

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; }
```

- *Type:* string

---

##### `DefaultName`<sup>Optional</sup> <a name="DefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName"></a>

```csharp
public string DefaultName { get; }
```

- *Type:* string

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId"></a>

```csharp
public bool|IResolvable DisableCorrelationRequestId { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableDefaultOutput`<sup>Optional</sup> <a name="DisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput"></a>

```csharp
public bool|IResolvable DisableDefaultOutput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableInstanceDiscovery`<sup>Optional</sup> <a name="DisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery"></a>

```csharp
public bool|IResolvable DisableInstanceDiscovery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId"></a>

```csharp
public bool|IResolvable DisableTerraformPartnerId { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreflight`<sup>Optional</sup> <a name="EnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight"></a>

```csharp
public bool|IResolvable EnablePreflight { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint"></a>

```csharp
public IResolvable|AzapiProviderEndpoint[] Endpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `IgnoreNoOpChanges`<sup>Optional</sup> <a name="IgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges"></a>

```csharp
public bool|IResolvable IgnoreNoOpChanges { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumBusyRetryAttempts`<sup>Optional</sup> <a name="MaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts"></a>

```csharp
public double MaximumBusyRetryAttempts { get; }
```

- *Type:* double

---

##### `OidcAzureServiceConnectionId`<sup>Optional</sup> <a name="OidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId"></a>

```csharp
public string OidcAzureServiceConnectionId { get; }
```

- *Type:* string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; }
```

- *Type:* string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; }
```

- *Type:* string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken"></a>

```csharp
public string OidcToken { get; }
```

- *Type:* string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; }
```

- *Type:* string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId"></a>

```csharp
public string PartnerId { get; }
```

- *Type:* string

---

##### `PreserveResourceIdCasing`<sup>Optional</sup> <a name="PreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing"></a>

```csharp
public bool|IResolvable PreserveResourceIdCasing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration"></a>

```csharp
public bool|IResolvable SkipProviderRegistration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity"></a>

```csharp
public bool|IResolvable UseAksWorkloadIdentity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCli"></a>

```csharp
public bool|IResolvable UseCli { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi"></a>

```csharp
public bool|IResolvable UseMsi { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc"></a>

```csharp
public bool|IResolvable UseOidc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzapiProviderConfig <a name="AzapiProviderConfig" id="@cdktn/provider-azapi.provider.AzapiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new AzapiProviderConfig {
    string Alias = null,
    bool|IResolvable AlwaysAcquirePolicyToken = null,
    string[] AuxiliaryTenantIds = null,
    string ClientCertificate = null,
    string ClientCertificatePassword = null,
    string ClientCertificatePath = null,
    string ClientId = null,
    string ClientIdFilePath = null,
    string ClientSecret = null,
    string ClientSecretFilePath = null,
    string CustomCorrelationRequestId = null,
    string DefaultLocation = null,
    string DefaultName = null,
    System.Collections.Generic.IDictionary<string, string> DefaultTags = null,
    bool|IResolvable DisableCorrelationRequestId = null,
    bool|IResolvable DisableDefaultOutput = null,
    bool|IResolvable DisableInstanceDiscovery = null,
    bool|IResolvable DisableTerraformPartnerId = null,
    bool|IResolvable EnablePreflight = null,
    IResolvable|AzapiProviderEndpoint[] Endpoint = null,
    string Environment = null,
    bool|IResolvable IgnoreNoOpChanges = null,
    double MaximumBusyRetryAttempts = null,
    string OidcAzureServiceConnectionId = null,
    string OidcRequestToken = null,
    string OidcRequestUrl = null,
    string OidcToken = null,
    string OidcTokenFilePath = null,
    string PartnerId = null,
    bool|IResolvable PreserveResourceIdCasing = null,
    bool|IResolvable SkipProviderRegistration = null,
    string SubscriptionId = null,
    string TenantId = null,
    bool|IResolvable UseAksWorkloadIdentity = null,
    bool|IResolvable UseCli = null,
    bool|IResolvable UseMsi = null,
    bool|IResolvable UseOidc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken">AlwaysAcquirePolicyToken</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>string[]</code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>string</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId">CustomCorrelationRequestId</a></code> | <code>string</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName">DefaultName</a></code> | <code>string</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags">DefaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput">DisableDefaultOutput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery">DisableInstanceDiscovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight">EnablePreflight</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint">Endpoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]</code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment">Environment</a></code> | <code>string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges">IgnoreNoOpChanges</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts">MaximumBusyRetryAttempts</a></code> | <code>double</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId">OidcAzureServiceConnectionId</a></code> | <code>string</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken">OidcToken</a></code> | <code>string</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>string</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId">PartnerId</a></code> | <code>string</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing">PreserveResourceIdCasing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli">UseCli</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi">UseMsi</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc">UseOidc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `AlwaysAcquirePolicyToken`<sup>Optional</sup> <a name="AlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken"></a>

```csharp
public bool|IResolvable AlwaysAcquirePolicyToken { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds"></a>

```csharp
public string[] AuxiliaryTenantIds { get; set; }
```

- *Type:* string[]

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath"></a>

```csharp
public string ClientCertificatePath { get; set; }
```

- *Type:* string

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath"></a>

```csharp
public string ClientIdFilePath { get; set; }
```

- *Type:* string

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath"></a>

```csharp
public string ClientSecretFilePath { get; set; }
```

- *Type:* string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `CustomCorrelationRequestId`<sup>Optional</sup> <a name="CustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId"></a>

```csharp
public string CustomCorrelationRequestId { get; set; }
```

- *Type:* string

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; set; }
```

- *Type:* string

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `DefaultName`<sup>Optional</sup> <a name="DefaultName" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName"></a>

```csharp
public string DefaultName { get; set; }
```

- *Type:* string

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId"></a>

```csharp
public bool|IResolvable DisableCorrelationRequestId { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `DisableDefaultOutput`<sup>Optional</sup> <a name="DisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput"></a>

```csharp
public bool|IResolvable DisableDefaultOutput { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `DisableInstanceDiscovery`<sup>Optional</sup> <a name="DisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery"></a>

```csharp
public bool|IResolvable DisableInstanceDiscovery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId"></a>

```csharp
public bool|IResolvable DisableTerraformPartnerId { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `EnablePreflight`<sup>Optional</sup> <a name="EnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight"></a>

```csharp
public bool|IResolvable EnablePreflight { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint"></a>

```csharp
public IResolvable|AzapiProviderEndpoint[] Endpoint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>[]

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `IgnoreNoOpChanges`<sup>Optional</sup> <a name="IgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges"></a>

```csharp
public bool|IResolvable IgnoreNoOpChanges { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `MaximumBusyRetryAttempts`<sup>Optional</sup> <a name="MaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts"></a>

```csharp
public double MaximumBusyRetryAttempts { get; set; }
```

- *Type:* double

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `OidcAzureServiceConnectionId`<sup>Optional</sup> <a name="OidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId"></a>

```csharp
public string OidcAzureServiceConnectionId { get; set; }
```

- *Type:* string

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken"></a>

```csharp
public string OidcRequestToken { get; set; }
```

- *Type:* string

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl"></a>

```csharp
public string OidcRequestUrl { get; set; }
```

- *Type:* string

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken"></a>

```csharp
public string OidcToken { get; set; }
```

- *Type:* string

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath"></a>

```csharp
public string OidcTokenFilePath { get; set; }
```

- *Type:* string

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId"></a>

```csharp
public string PartnerId { get; set; }
```

- *Type:* string

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `PreserveResourceIdCasing`<sup>Optional</sup> <a name="PreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing"></a>

```csharp
public bool|IResolvable PreserveResourceIdCasing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration"></a>

```csharp
public bool|IResolvable SkipProviderRegistration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity"></a>

```csharp
public bool|IResolvable UseAksWorkloadIdentity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli"></a>

```csharp
public bool|IResolvable UseCli { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi"></a>

```csharp
public bool|IResolvable UseMsi { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc"></a>

```csharp
public bool|IResolvable UseOidc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

### AzapiProviderEndpoint <a name="AzapiProviderEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azapi;

new AzapiProviderEndpoint {
    string ActiveDirectoryAuthorityHost = null,
    string ResourceManagerAudience = null,
    string ResourceManagerEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost">ActiveDirectoryAuthorityHost</a></code> | <code>string</code> | The Azure Active Directory login endpoint to use. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience">ResourceManagerAudience</a></code> | <code>string</code> | The resource ID to obtain AD tokens for. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint">ResourceManagerEndpoint</a></code> | <code>string</code> | The Azure Resource Manager endpoint to use. |

---

##### `ActiveDirectoryAuthorityHost`<sup>Optional</sup> <a name="ActiveDirectoryAuthorityHost" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost"></a>

```csharp
public string ActiveDirectoryAuthorityHost { get; set; }
```

- *Type:* string

The Azure Active Directory login endpoint to use.

This can also be sourced from the `ARM_ACTIVE_DIRECTORY_AUTHORITY_HOST` Environment Variable. Defaults to `https://login.microsoftonline.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#active_directory_authority_host AzapiProvider#active_directory_authority_host}

---

##### `ResourceManagerAudience`<sup>Optional</sup> <a name="ResourceManagerAudience" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience"></a>

```csharp
public string ResourceManagerAudience { get; set; }
```

- *Type:* string

The resource ID to obtain AD tokens for.

This can also be sourced from the `ARM_RESOURCE_MANAGER_AUDIENCE` Environment Variable. Defaults to `https://management.core.windows.net/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_audience AzapiProvider#resource_manager_audience}

---

##### `ResourceManagerEndpoint`<sup>Optional</sup> <a name="ResourceManagerEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint"></a>

```csharp
public string ResourceManagerEndpoint { get; set; }
```

- *Type:* string

The Azure Resource Manager endpoint to use.

This can also be sourced from the `ARM_RESOURCE_MANAGER_ENDPOINT` Environment Variable. Defaults to `https://management.azure.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_endpoint AzapiProvider#resource_manager_endpoint}

---



