# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azapi.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzapiProvider <a name="AzapiProvider" id="@cdktn/provider-azapi.provider.AzapiProvider"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs azapi}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

provider.NewAzapiProvider(scope Construct, id *string, config AzapiProviderConfig) AzapiProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig">AzapiProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azapi.provider.AzapiProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.provider.AzapiProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAlwaysAcquirePolicyToken` <a name="ResetAlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken"></a>

```go
func ResetAlwaysAcquirePolicyToken()
```

##### `ResetAuxiliaryTenantIds` <a name="ResetAuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds"></a>

```go
func ResetAuxiliaryTenantIds()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath"></a>

```go
func ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath"></a>

```go
func ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath"></a>

```go
func ResetClientSecretFilePath()
```

##### `ResetCustomCorrelationRequestId` <a name="ResetCustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId"></a>

```go
func ResetCustomCorrelationRequestId()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation"></a>

```go
func ResetDefaultLocation()
```

##### `ResetDefaultName` <a name="ResetDefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName"></a>

```go
func ResetDefaultName()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags"></a>

```go
func ResetDefaultTags()
```

##### `ResetDisableCorrelationRequestId` <a name="ResetDisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId"></a>

```go
func ResetDisableCorrelationRequestId()
```

##### `ResetDisableDefaultOutput` <a name="ResetDisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput"></a>

```go
func ResetDisableDefaultOutput()
```

##### `ResetDisableInstanceDiscovery` <a name="ResetDisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery"></a>

```go
func ResetDisableInstanceDiscovery()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId"></a>

```go
func ResetDisableTerraformPartnerId()
```

##### `ResetEnablePreflight` <a name="ResetEnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight"></a>

```go
func ResetEnablePreflight()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetIgnoreNoOpChanges` <a name="ResetIgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges"></a>

```go
func ResetIgnoreNoOpChanges()
```

##### `ResetMaximumBusyRetryAttempts` <a name="ResetMaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts"></a>

```go
func ResetMaximumBusyRetryAttempts()
```

##### `ResetOidcAzureServiceConnectionId` <a name="ResetOidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId"></a>

```go
func ResetOidcAzureServiceConnectionId()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken"></a>

```go
func ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl"></a>

```go
func ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath"></a>

```go
func ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId"></a>

```go
func ResetPartnerId()
```

##### `ResetPreserveResourceIdCasing` <a name="ResetPreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing"></a>

```go
func ResetPreserveResourceIdCasing()
```

##### `ResetSkipProviderRegistration` <a name="ResetSkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration"></a>

```go
func ResetSkipProviderRegistration()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity"></a>

```go
func ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli"></a>

```go
func ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi"></a>

```go
func ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc"></a>

```go
func ResetUseOidc()
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

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

provider.AzapiProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

provider.AzapiProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

provider.AzapiProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

provider.AzapiProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzapiProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzapiProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AzapiProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.functions">Functions</a></code> | <code>github.com/cdktn-io/cdktn-provider-azapi-go/azapi.providerFunctions.AzapiProviderFunctions</code> | Provider-defined functions of the azapi provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput">AlwaysAcquirePolicyTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput">AuxiliaryTenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput">CustomCorrelationRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput">DefaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput">DisableCorrelationRequestIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput">DisableDefaultOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput">DisableInstanceDiscoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput">EnablePreflightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput">IgnoreNoOpChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput">MaximumBusyRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput">OidcAzureServiceConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput">PreserveResourceIdCasingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput">SkipProviderRegistrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput">UseCliInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput">UseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput">UseOidcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken">AlwaysAcquirePolicyToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId">CustomCorrelationRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName">DefaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput">DisableDefaultOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery">DisableInstanceDiscovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight">EnablePreflight</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint">Endpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges">IgnoreNoOpChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts">MaximumBusyRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId">OidcAzureServiceConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken">OidcToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId">PartnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing">PreserveResourceIdCasing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCli">UseCli</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azapi.provider.AzapiProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azapi.provider.AzapiProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-azapi.provider.AzapiProvider.property.functions"></a>

```go
func Functions() AzapiProviderFunctions
```

- *Type:* github.com/cdktn-io/cdktn-provider-azapi-go/azapi.providerFunctions.AzapiProviderFunctions

Provider-defined functions of the azapi provider.

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AlwaysAcquirePolicyTokenInput`<sup>Optional</sup> <a name="AlwaysAcquirePolicyTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput"></a>

```go
func AlwaysAcquirePolicyTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AuxiliaryTenantIdsInput`<sup>Optional</sup> <a name="AuxiliaryTenantIdsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput"></a>

```go
func AuxiliaryTenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput"></a>

```go
func ClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput"></a>

```go
func ClientIdFilePathInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput"></a>

```go
func ClientSecretFilePathInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CustomCorrelationRequestIdInput`<sup>Optional</sup> <a name="CustomCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput"></a>

```go
func CustomCorrelationRequestIdInput() *string
```

- *Type:* *string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput"></a>

```go
func DefaultLocationInput() *string
```

- *Type:* *string

---

##### `DefaultNameInput`<sup>Optional</sup> <a name="DefaultNameInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput"></a>

```go
func DefaultNameInput() *string
```

- *Type:* *string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput"></a>

```go
func DefaultTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableCorrelationRequestIdInput`<sup>Optional</sup> <a name="DisableCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput"></a>

```go
func DisableCorrelationRequestIdInput() interface{}
```

- *Type:* interface{}

---

##### `DisableDefaultOutputInput`<sup>Optional</sup> <a name="DisableDefaultOutputInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput"></a>

```go
func DisableDefaultOutputInput() interface{}
```

- *Type:* interface{}

---

##### `DisableInstanceDiscoveryInput`<sup>Optional</sup> <a name="DisableInstanceDiscoveryInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput"></a>

```go
func DisableInstanceDiscoveryInput() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput"></a>

```go
func DisableTerraformPartnerIdInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePreflightInput`<sup>Optional</sup> <a name="EnablePreflightInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput"></a>

```go
func EnablePreflightInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IgnoreNoOpChangesInput`<sup>Optional</sup> <a name="IgnoreNoOpChangesInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput"></a>

```go
func IgnoreNoOpChangesInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumBusyRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumBusyRetryAttemptsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput"></a>

```go
func MaximumBusyRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `OidcAzureServiceConnectionIdInput`<sup>Optional</sup> <a name="OidcAzureServiceConnectionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput"></a>

```go
func OidcAzureServiceConnectionIdInput() *string
```

- *Type:* *string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput"></a>

```go
func OidcRequestTokenInput() *string
```

- *Type:* *string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput"></a>

```go
func OidcRequestUrlInput() *string
```

- *Type:* *string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput"></a>

```go
func OidcTokenFilePathInput() *string
```

- *Type:* *string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput"></a>

```go
func OidcTokenInput() *string
```

- *Type:* *string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput"></a>

```go
func PartnerIdInput() *string
```

- *Type:* *string

---

##### `PreserveResourceIdCasingInput`<sup>Optional</sup> <a name="PreserveResourceIdCasingInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput"></a>

```go
func PreserveResourceIdCasingInput() interface{}
```

- *Type:* interface{}

---

##### `SkipProviderRegistrationInput`<sup>Optional</sup> <a name="SkipProviderRegistrationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput"></a>

```go
func SkipProviderRegistrationInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput"></a>

```go
func UseAksWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput"></a>

```go
func UseCliInput() interface{}
```

- *Type:* interface{}

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput"></a>

```go
func UseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput"></a>

```go
func UseOidcInput() interface{}
```

- *Type:* interface{}

---

##### `AlwaysAcquirePolicyToken`<sup>Optional</sup> <a name="AlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken"></a>

```go
func AlwaysAcquirePolicyToken() interface{}
```

- *Type:* interface{}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds"></a>

```go
func AuxiliaryTenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath"></a>

```go
func ClientCertificatePath() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath"></a>

```go
func ClientIdFilePath() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath"></a>

```go
func ClientSecretFilePath() *string
```

- *Type:* *string

---

##### `CustomCorrelationRequestId`<sup>Optional</sup> <a name="CustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId"></a>

```go
func CustomCorrelationRequestId() *string
```

- *Type:* *string

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation"></a>

```go
func DefaultLocation() *string
```

- *Type:* *string

---

##### `DefaultName`<sup>Optional</sup> <a name="DefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName"></a>

```go
func DefaultName() *string
```

- *Type:* *string

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags"></a>

```go
func DefaultTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId"></a>

```go
func DisableCorrelationRequestId() interface{}
```

- *Type:* interface{}

---

##### `DisableDefaultOutput`<sup>Optional</sup> <a name="DisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput"></a>

```go
func DisableDefaultOutput() interface{}
```

- *Type:* interface{}

---

##### `DisableInstanceDiscovery`<sup>Optional</sup> <a name="DisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery"></a>

```go
func DisableInstanceDiscovery() interface{}
```

- *Type:* interface{}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId"></a>

```go
func DisableTerraformPartnerId() interface{}
```

- *Type:* interface{}

---

##### `EnablePreflight`<sup>Optional</sup> <a name="EnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight"></a>

```go
func EnablePreflight() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint"></a>

```go
func Endpoint() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `IgnoreNoOpChanges`<sup>Optional</sup> <a name="IgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges"></a>

```go
func IgnoreNoOpChanges() interface{}
```

- *Type:* interface{}

---

##### `MaximumBusyRetryAttempts`<sup>Optional</sup> <a name="MaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts"></a>

```go
func MaximumBusyRetryAttempts() *f64
```

- *Type:* *f64

---

##### `OidcAzureServiceConnectionId`<sup>Optional</sup> <a name="OidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId"></a>

```go
func OidcAzureServiceConnectionId() *string
```

- *Type:* *string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken"></a>

```go
func OidcRequestToken() *string
```

- *Type:* *string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl"></a>

```go
func OidcRequestUrl() *string
```

- *Type:* *string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken"></a>

```go
func OidcToken() *string
```

- *Type:* *string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath"></a>

```go
func OidcTokenFilePath() *string
```

- *Type:* *string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId"></a>

```go
func PartnerId() *string
```

- *Type:* *string

---

##### `PreserveResourceIdCasing`<sup>Optional</sup> <a name="PreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing"></a>

```go
func PreserveResourceIdCasing() interface{}
```

- *Type:* interface{}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration"></a>

```go
func SkipProviderRegistration() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity"></a>

```go
func UseAksWorkloadIdentity() interface{}
```

- *Type:* interface{}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCli"></a>

```go
func UseCli() interface{}
```

- *Type:* interface{}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi"></a>

```go
func UseMsi() interface{}
```

- *Type:* interface{}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc"></a>

```go
func UseOidc() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzapiProviderConfig <a name="AzapiProviderConfig" id="@cdktn/provider-azapi.provider.AzapiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

&provider.AzapiProviderConfig {
	Alias: *string,
	AlwaysAcquirePolicyToken: interface{},
	AuxiliaryTenantIds: *[]*string,
	ClientCertificate: *string,
	ClientCertificatePassword: *string,
	ClientCertificatePath: *string,
	ClientId: *string,
	ClientIdFilePath: *string,
	ClientSecret: *string,
	ClientSecretFilePath: *string,
	CustomCorrelationRequestId: *string,
	DefaultLocation: *string,
	DefaultName: *string,
	DefaultTags: *map[string]*string,
	DisableCorrelationRequestId: interface{},
	DisableDefaultOutput: interface{},
	DisableInstanceDiscovery: interface{},
	DisableTerraformPartnerId: interface{},
	EnablePreflight: interface{},
	Endpoint: interface{},
	Environment: *string,
	IgnoreNoOpChanges: interface{},
	MaximumBusyRetryAttempts: *f64,
	OidcAzureServiceConnectionId: *string,
	OidcRequestToken: *string,
	OidcRequestUrl: *string,
	OidcToken: *string,
	OidcTokenFilePath: *string,
	PartnerId: *string,
	PreserveResourceIdCasing: interface{},
	SkipProviderRegistration: interface{},
	SubscriptionId: *string,
	TenantId: *string,
	UseAksWorkloadIdentity: interface{},
	UseCli: interface{},
	UseMsi: interface{},
	UseOidc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken">AlwaysAcquirePolicyToken</a></code> | <code>interface{}</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds">AuxiliaryTenantIds</a></code> | <code>*[]*string</code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId">CustomCorrelationRequestId</a></code> | <code>*string</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation">DefaultLocation</a></code> | <code>*string</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName">DefaultName</a></code> | <code>*string</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId">DisableCorrelationRequestId</a></code> | <code>interface{}</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput">DisableDefaultOutput</a></code> | <code>interface{}</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery">DisableInstanceDiscovery</a></code> | <code>interface{}</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight">EnablePreflight</a></code> | <code>interface{}</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint">Endpoint</a></code> | <code>interface{}</code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment">Environment</a></code> | <code>*string</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges">IgnoreNoOpChanges</a></code> | <code>interface{}</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts">MaximumBusyRetryAttempts</a></code> | <code>*f64</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId">OidcAzureServiceConnectionId</a></code> | <code>*string</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken">OidcToken</a></code> | <code>*string</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId">PartnerId</a></code> | <code>*string</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing">PreserveResourceIdCasing</a></code> | <code>interface{}</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration">SkipProviderRegistration</a></code> | <code>interface{}</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli">UseCli</a></code> | <code>interface{}</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `AlwaysAcquirePolicyToken`<sup>Optional</sup> <a name="AlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken"></a>

```go
AlwaysAcquirePolicyToken interface{}
```

- *Type:* interface{}

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `AuxiliaryTenantIds`<sup>Optional</sup> <a name="AuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds"></a>

```go
AuxiliaryTenantIds *[]*string
```

- *Type:* *[]*string

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath"></a>

```go
ClientCertificatePath *string
```

- *Type:* *string

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath"></a>

```go
ClientIdFilePath *string
```

- *Type:* *string

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath"></a>

```go
ClientSecretFilePath *string
```

- *Type:* *string

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `CustomCorrelationRequestId`<sup>Optional</sup> <a name="CustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId"></a>

```go
CustomCorrelationRequestId *string
```

- *Type:* *string

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation"></a>

```go
DefaultLocation *string
```

- *Type:* *string

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `DefaultName`<sup>Optional</sup> <a name="DefaultName" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName"></a>

```go
DefaultName *string
```

- *Type:* *string

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags"></a>

```go
DefaultTags *map[string]*string
```

- *Type:* *map[string]*string

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `DisableCorrelationRequestId`<sup>Optional</sup> <a name="DisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId"></a>

```go
DisableCorrelationRequestId interface{}
```

- *Type:* interface{}

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `DisableDefaultOutput`<sup>Optional</sup> <a name="DisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput"></a>

```go
DisableDefaultOutput interface{}
```

- *Type:* interface{}

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `DisableInstanceDiscovery`<sup>Optional</sup> <a name="DisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery"></a>

```go
DisableInstanceDiscovery interface{}
```

- *Type:* interface{}

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId"></a>

```go
DisableTerraformPartnerId interface{}
```

- *Type:* interface{}

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `EnablePreflight`<sup>Optional</sup> <a name="EnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight"></a>

```go
EnablePreflight interface{}
```

- *Type:* interface{}

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint"></a>

```go
Endpoint interface{}
```

- *Type:* interface{}

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `IgnoreNoOpChanges`<sup>Optional</sup> <a name="IgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges"></a>

```go
IgnoreNoOpChanges interface{}
```

- *Type:* interface{}

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `MaximumBusyRetryAttempts`<sup>Optional</sup> <a name="MaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts"></a>

```go
MaximumBusyRetryAttempts *f64
```

- *Type:* *f64

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `OidcAzureServiceConnectionId`<sup>Optional</sup> <a name="OidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId"></a>

```go
OidcAzureServiceConnectionId *string
```

- *Type:* *string

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken"></a>

```go
OidcRequestToken *string
```

- *Type:* *string

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl"></a>

```go
OidcRequestUrl *string
```

- *Type:* *string

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken"></a>

```go
OidcToken *string
```

- *Type:* *string

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath"></a>

```go
OidcTokenFilePath *string
```

- *Type:* *string

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId"></a>

```go
PartnerId *string
```

- *Type:* *string

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `PreserveResourceIdCasing`<sup>Optional</sup> <a name="PreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing"></a>

```go
PreserveResourceIdCasing interface{}
```

- *Type:* interface{}

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `SkipProviderRegistration`<sup>Optional</sup> <a name="SkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration"></a>

```go
SkipProviderRegistration interface{}
```

- *Type:* interface{}

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity"></a>

```go
UseAksWorkloadIdentity interface{}
```

- *Type:* interface{}

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli"></a>

```go
UseCli interface{}
```

- *Type:* interface{}

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi"></a>

```go
UseMsi interface{}
```

- *Type:* interface{}

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc"></a>

```go
UseOidc interface{}
```

- *Type:* interface{}

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

### AzapiProviderEndpoint <a name="AzapiProviderEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azapi-go/azapi/provider"

&provider.AzapiProviderEndpoint {
	ActiveDirectoryAuthorityHost: *string,
	ResourceManagerAudience: *string,
	ResourceManagerEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost">ActiveDirectoryAuthorityHost</a></code> | <code>*string</code> | The Azure Active Directory login endpoint to use. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience">ResourceManagerAudience</a></code> | <code>*string</code> | The resource ID to obtain AD tokens for. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint">ResourceManagerEndpoint</a></code> | <code>*string</code> | The Azure Resource Manager endpoint to use. |

---

##### `ActiveDirectoryAuthorityHost`<sup>Optional</sup> <a name="ActiveDirectoryAuthorityHost" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost"></a>

```go
ActiveDirectoryAuthorityHost *string
```

- *Type:* *string

The Azure Active Directory login endpoint to use.

This can also be sourced from the `ARM_ACTIVE_DIRECTORY_AUTHORITY_HOST` Environment Variable. Defaults to `https://login.microsoftonline.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#active_directory_authority_host AzapiProvider#active_directory_authority_host}

---

##### `ResourceManagerAudience`<sup>Optional</sup> <a name="ResourceManagerAudience" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience"></a>

```go
ResourceManagerAudience *string
```

- *Type:* *string

The resource ID to obtain AD tokens for.

This can also be sourced from the `ARM_RESOURCE_MANAGER_AUDIENCE` Environment Variable. Defaults to `https://management.core.windows.net/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_audience AzapiProvider#resource_manager_audience}

---

##### `ResourceManagerEndpoint`<sup>Optional</sup> <a name="ResourceManagerEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint"></a>

```go
ResourceManagerEndpoint *string
```

- *Type:* *string

The Azure Resource Manager endpoint to use.

This can also be sourced from the `ARM_RESOURCE_MANAGER_ENDPOINT` Environment Variable. Defaults to `https://management.azure.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_endpoint AzapiProvider#resource_manager_endpoint}

---



