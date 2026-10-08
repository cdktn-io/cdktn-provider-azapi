# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azapi.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzapiProvider <a name="AzapiProvider" id="@cdktn/provider-azapi.provider.AzapiProvider"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs azapi}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProvider;

AzapiProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .alwaysAcquirePolicyToken(java.lang.Boolean|IResolvable)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .customCorrelationRequestId(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .defaultName(java.lang.String)
//  .defaultTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableCorrelationRequestId(java.lang.Boolean|IResolvable)
//  .disableDefaultOutput(java.lang.Boolean|IResolvable)
//  .disableInstanceDiscovery(java.lang.Boolean|IResolvable)
//  .disableTerraformPartnerId(java.lang.Boolean|IResolvable)
//  .enablePreflight(java.lang.Boolean|IResolvable)
//  .endpoint(IResolvable|java.util.List<AzapiProviderEndpoint>)
//  .environment(java.lang.String)
//  .ignoreNoOpChanges(java.lang.Boolean|IResolvable)
//  .maximumBusyRetryAttempts(java.lang.Number)
//  .oidcAzureServiceConnectionId(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .preserveResourceIdCasing(java.lang.Boolean|IResolvable)
//  .skipProviderRegistration(java.lang.Boolean|IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useAksWorkloadIdentity(java.lang.Boolean|IResolvable)
//  .useCli(java.lang.Boolean|IResolvable)
//  .useMsi(java.lang.Boolean|IResolvable)
//  .useOidc(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alwaysAcquirePolicyToken">alwaysAcquirePolicyToken</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.customCorrelationRequestId">customCorrelationRequestId</a></code> | <code>java.lang.String</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultName">defaultName</a></code> | <code>java.lang.String</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultTags">defaultTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableDefaultOutput">disableDefaultOutput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableInstanceDiscovery">disableInstanceDiscovery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.enablePreflight">enablePreflight</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>></code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.ignoreNoOpChanges">ignoreNoOpChanges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.maximumBusyRetryAttempts">maximumBusyRetryAttempts</a></code> | <code>java.lang.Number</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcAzureServiceConnectionId">oidcAzureServiceConnectionId</a></code> | <code>java.lang.String</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.preserveResourceIdCasing">preserveResourceIdCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useCli">useCli</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useMsi">useMsi</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useOidc">useOidc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `alwaysAcquirePolicyToken`<sup>Optional</sup> <a name="alwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alwaysAcquirePolicyToken"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* java.util.List<java.lang.String>

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* java.lang.String

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `customCorrelationRequestId`<sup>Optional</sup> <a name="customCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.customCorrelationRequestId"></a>

- *Type:* java.lang.String

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultLocation"></a>

- *Type:* java.lang.String

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `defaultName`<sup>Optional</sup> <a name="defaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultName"></a>

- *Type:* java.lang.String

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `disableDefaultOutput`<sup>Optional</sup> <a name="disableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableDefaultOutput"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `disableInstanceDiscovery`<sup>Optional</sup> <a name="disableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableInstanceDiscovery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `enablePreflight`<sup>Optional</sup> <a name="enablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.enablePreflight"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.endpoint"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>>

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `ignoreNoOpChanges`<sup>Optional</sup> <a name="ignoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.ignoreNoOpChanges"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `maximumBusyRetryAttempts`<sup>Optional</sup> <a name="maximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.maximumBusyRetryAttempts"></a>

- *Type:* java.lang.Number

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `oidcAzureServiceConnectionId`<sup>Optional</sup> <a name="oidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcAzureServiceConnectionId"></a>

- *Type:* java.lang.String

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcToken"></a>

- *Type:* java.lang.String

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* java.lang.String

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.partnerId"></a>

- *Type:* java.lang.String

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `preserveResourceIdCasing`<sup>Optional</sup> <a name="preserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.preserveResourceIdCasing"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useAksWorkloadIdentity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useCli"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useMsi"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useOidc"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.provider.AzapiProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.provider.AzapiProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAlwaysAcquirePolicyToken` <a name="resetAlwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken"></a>

```java
public void resetAlwaysAcquirePolicyToken()
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds"></a>

```java
public void resetAuxiliaryTenantIds()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath"></a>

```java
public void resetClientCertificatePath()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientIdFilePath` <a name="resetClientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath"></a>

```java
public void resetClientIdFilePath()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretFilePath` <a name="resetClientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath"></a>

```java
public void resetClientSecretFilePath()
```

##### `resetCustomCorrelationRequestId` <a name="resetCustomCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId"></a>

```java
public void resetCustomCorrelationRequestId()
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation"></a>

```java
public void resetDefaultLocation()
```

##### `resetDefaultName` <a name="resetDefaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName"></a>

```java
public void resetDefaultName()
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags"></a>

```java
public void resetDefaultTags()
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId"></a>

```java
public void resetDisableCorrelationRequestId()
```

##### `resetDisableDefaultOutput` <a name="resetDisableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput"></a>

```java
public void resetDisableDefaultOutput()
```

##### `resetDisableInstanceDiscovery` <a name="resetDisableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery"></a>

```java
public void resetDisableInstanceDiscovery()
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId"></a>

```java
public void resetDisableTerraformPartnerId()
```

##### `resetEnablePreflight` <a name="resetEnablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight"></a>

```java
public void resetEnablePreflight()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetIgnoreNoOpChanges` <a name="resetIgnoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges"></a>

```java
public void resetIgnoreNoOpChanges()
```

##### `resetMaximumBusyRetryAttempts` <a name="resetMaximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts"></a>

```java
public void resetMaximumBusyRetryAttempts()
```

##### `resetOidcAzureServiceConnectionId` <a name="resetOidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId"></a>

```java
public void resetOidcAzureServiceConnectionId()
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken"></a>

```java
public void resetOidcRequestToken()
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl"></a>

```java
public void resetOidcRequestUrl()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath"></a>

```java
public void resetOidcTokenFilePath()
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId"></a>

```java
public void resetPartnerId()
```

##### `resetPreserveResourceIdCasing` <a name="resetPreserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing"></a>

```java
public void resetPreserveResourceIdCasing()
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration"></a>

```java
public void resetSkipProviderRegistration()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetUseAksWorkloadIdentity` <a name="resetUseAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity"></a>

```java
public void resetUseAksWorkloadIdentity()
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli"></a>

```java
public void resetUseCli()
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi"></a>

```java
public void resetUseMsi()
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc"></a>

```java
public void resetUseOidc()
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

```java
import io.cdktn.providers.azapi.provider.AzapiProvider;

AzapiProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProvider;

AzapiProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProvider;

AzapiProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProvider;

AzapiProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzapiProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzapiProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzapiProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AzapiProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.functions">functions</a></code> | <code>io.cdktn.providers.azapi.provider_functions.AzapiProviderFunctions</code> | Provider-defined functions of the azapi provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput">alwaysAcquirePolicyTokenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput">clientIdFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput">clientSecretFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput">customCorrelationRequestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput">defaultLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput">defaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput">disableDefaultOutputInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput">disableInstanceDiscoveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput">enablePreflightInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput">endpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput">ignoreNoOpChangesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput">maximumBusyRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput">oidcAzureServiceConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput">preserveResourceIdCasingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput">useAksWorkloadIdentityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput">useCliInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput">useMsiInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput">useOidcInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken">alwaysAcquirePolicyToken</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId">customCorrelationRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName">defaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags">defaultTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput">disableDefaultOutput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery">disableInstanceDiscovery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight">enablePreflight</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint">endpoint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges">ignoreNoOpChanges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts">maximumBusyRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId">oidcAzureServiceConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing">preserveResourceIdCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCli">useCli</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.provider.AzapiProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.provider.AzapiProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-azapi.provider.AzapiProvider.property.functions"></a>

```java
public AzapiProviderFunctions getFunctions();
```

- *Type:* io.cdktn.providers.azapi.provider_functions.AzapiProviderFunctions

Provider-defined functions of the azapi provider.

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `alwaysAcquirePolicyTokenInput`<sup>Optional</sup> <a name="alwaysAcquirePolicyTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput"></a>

```java
public java.lang.Boolean|IResolvable getAlwaysAcquirePolicyTokenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput"></a>

```java
public java.lang.String getClientCertificatePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdFilePathInput`<sup>Optional</sup> <a name="clientIdFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput"></a>

```java
public java.lang.String getClientIdFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePathInput`<sup>Optional</sup> <a name="clientSecretFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput"></a>

```java
public java.lang.String getClientSecretFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `customCorrelationRequestIdInput`<sup>Optional</sup> <a name="customCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput"></a>

```java
public java.lang.String getCustomCorrelationRequestIdInput();
```

- *Type:* java.lang.String

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput"></a>

```java
public java.lang.String getDefaultLocationInput();
```

- *Type:* java.lang.String

---

##### `defaultNameInput`<sup>Optional</sup> <a name="defaultNameInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput"></a>

```java
public java.lang.String getDefaultNameInput();
```

- *Type:* java.lang.String

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableCorrelationRequestIdInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDefaultOutputInput`<sup>Optional</sup> <a name="disableDefaultOutputInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDefaultOutputInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableInstanceDiscoveryInput`<sup>Optional</sup> <a name="disableInstanceDiscoveryInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableInstanceDiscoveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableTerraformPartnerIdInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePreflightInput`<sup>Optional</sup> <a name="enablePreflightInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePreflightInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput"></a>

```java
public IResolvable|java.util.List<AzapiProviderEndpoint> getEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `ignoreNoOpChangesInput`<sup>Optional</sup> <a name="ignoreNoOpChangesInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNoOpChangesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maximumBusyRetryAttemptsInput`<sup>Optional</sup> <a name="maximumBusyRetryAttemptsInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput"></a>

```java
public java.lang.Number getMaximumBusyRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `oidcAzureServiceConnectionIdInput`<sup>Optional</sup> <a name="oidcAzureServiceConnectionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput"></a>

```java
public java.lang.String getOidcAzureServiceConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput"></a>

```java
public java.lang.String getOidcRequestTokenInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput"></a>

```java
public java.lang.String getOidcRequestUrlInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput"></a>

```java
public java.lang.String getOidcTokenFilePathInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput"></a>

```java
public java.lang.String getOidcTokenInput();
```

- *Type:* java.lang.String

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput"></a>

```java
public java.lang.String getPartnerIdInput();
```

- *Type:* java.lang.String

---

##### `preserveResourceIdCasingInput`<sup>Optional</sup> <a name="preserveResourceIdCasingInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput"></a>

```java
public java.lang.Boolean|IResolvable getPreserveResourceIdCasingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipProviderRegistrationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `useAksWorkloadIdentityInput`<sup>Optional</sup> <a name="useAksWorkloadIdentityInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAksWorkloadIdentityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCliInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput"></a>

```java
public java.lang.Boolean|IResolvable getUseMsiInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput"></a>

```java
public java.lang.Boolean|IResolvable getUseOidcInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alwaysAcquirePolicyToken`<sup>Optional</sup> <a name="alwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken"></a>

```java
public java.lang.Boolean|IResolvable getAlwaysAcquirePolicyToken();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

---

##### `customCorrelationRequestId`<sup>Optional</sup> <a name="customCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId"></a>

```java
public java.lang.String getCustomCorrelationRequestId();
```

- *Type:* java.lang.String

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

---

##### `defaultName`<sup>Optional</sup> <a name="defaultName" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName"></a>

```java
public java.lang.String getDefaultName();
```

- *Type:* java.lang.String

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId"></a>

```java
public java.lang.Boolean|IResolvable getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDefaultOutput`<sup>Optional</sup> <a name="disableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDefaultOutput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableInstanceDiscovery`<sup>Optional</sup> <a name="disableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery"></a>

```java
public java.lang.Boolean|IResolvable getDisableInstanceDiscovery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId"></a>

```java
public java.lang.Boolean|IResolvable getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePreflight`<sup>Optional</sup> <a name="enablePreflight" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight"></a>

```java
public java.lang.Boolean|IResolvable getEnablePreflight();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint"></a>

```java
public IResolvable|java.util.List<AzapiProviderEndpoint> getEndpoint();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>>

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `ignoreNoOpChanges`<sup>Optional</sup> <a name="ignoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNoOpChanges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maximumBusyRetryAttempts`<sup>Optional</sup> <a name="maximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts"></a>

```java
public java.lang.Number getMaximumBusyRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `oidcAzureServiceConnectionId`<sup>Optional</sup> <a name="oidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId"></a>

```java
public java.lang.String getOidcAzureServiceConnectionId();
```

- *Type:* java.lang.String

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

---

##### `preserveResourceIdCasing`<sup>Optional</sup> <a name="preserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing"></a>

```java
public java.lang.Boolean|IResolvable getPreserveResourceIdCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration"></a>

```java
public java.lang.Boolean|IResolvable getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity"></a>

```java
public java.lang.Boolean|IResolvable getUseAksWorkloadIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCli"></a>

```java
public java.lang.Boolean|IResolvable getUseCli();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi"></a>

```java
public java.lang.Boolean|IResolvable getUseMsi();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc"></a>

```java
public java.lang.Boolean|IResolvable getUseOidc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzapiProviderConfig <a name="AzapiProviderConfig" id="@cdktn/provider-azapi.provider.AzapiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProviderConfig;

AzapiProviderConfig.builder()
//  .alias(java.lang.String)
//  .alwaysAcquirePolicyToken(java.lang.Boolean|IResolvable)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .customCorrelationRequestId(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .defaultName(java.lang.String)
//  .defaultTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableCorrelationRequestId(java.lang.Boolean|IResolvable)
//  .disableDefaultOutput(java.lang.Boolean|IResolvable)
//  .disableInstanceDiscovery(java.lang.Boolean|IResolvable)
//  .disableTerraformPartnerId(java.lang.Boolean|IResolvable)
//  .enablePreflight(java.lang.Boolean|IResolvable)
//  .endpoint(IResolvable|java.util.List<AzapiProviderEndpoint>)
//  .environment(java.lang.String)
//  .ignoreNoOpChanges(java.lang.Boolean|IResolvable)
//  .maximumBusyRetryAttempts(java.lang.Number)
//  .oidcAzureServiceConnectionId(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .preserveResourceIdCasing(java.lang.Boolean|IResolvable)
//  .skipProviderRegistration(java.lang.Boolean|IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useAksWorkloadIdentity(java.lang.Boolean|IResolvable)
//  .useCli(java.lang.Boolean|IResolvable)
//  .useMsi(java.lang.Boolean|IResolvable)
//  .useOidc(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken">alwaysAcquirePolicyToken</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId">customCorrelationRequestId</a></code> | <code>java.lang.String</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName">defaultName</a></code> | <code>java.lang.String</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags">defaultTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput">disableDefaultOutput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery">disableInstanceDiscovery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight">enablePreflight</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint">endpoint</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>></code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges">ignoreNoOpChanges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts">maximumBusyRetryAttempts</a></code> | <code>java.lang.Number</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId">oidcAzureServiceConnectionId</a></code> | <code>java.lang.String</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing">preserveResourceIdCasing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity">useAksWorkloadIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli">useCli</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `alwaysAcquirePolicyToken`<sup>Optional</sup> <a name="alwaysAcquirePolicyToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken"></a>

```java
public java.lang.Boolean|IResolvable getAlwaysAcquirePolicyToken();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `customCorrelationRequestId`<sup>Optional</sup> <a name="customCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId"></a>

```java
public java.lang.String getCustomCorrelationRequestId();
```

- *Type:* java.lang.String

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `defaultName`<sup>Optional</sup> <a name="defaultName" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName"></a>

```java
public java.lang.String getDefaultName();
```

- *Type:* java.lang.String

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId"></a>

```java
public java.lang.Boolean|IResolvable getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `disableDefaultOutput`<sup>Optional</sup> <a name="disableDefaultOutput" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDefaultOutput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `disableInstanceDiscovery`<sup>Optional</sup> <a name="disableInstanceDiscovery" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery"></a>

```java
public java.lang.Boolean|IResolvable getDisableInstanceDiscovery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId"></a>

```java
public java.lang.Boolean|IResolvable getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `enablePreflight`<sup>Optional</sup> <a name="enablePreflight" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight"></a>

```java
public java.lang.Boolean|IResolvable getEnablePreflight();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint"></a>

```java
public IResolvable|java.util.List<AzapiProviderEndpoint> getEndpoint();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>>

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `ignoreNoOpChanges`<sup>Optional</sup> <a name="ignoreNoOpChanges" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNoOpChanges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `maximumBusyRetryAttempts`<sup>Optional</sup> <a name="maximumBusyRetryAttempts" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts"></a>

```java
public java.lang.Number getMaximumBusyRetryAttempts();
```

- *Type:* java.lang.Number

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `oidcAzureServiceConnectionId`<sup>Optional</sup> <a name="oidcAzureServiceConnectionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId"></a>

```java
public java.lang.String getOidcAzureServiceConnectionId();
```

- *Type:* java.lang.String

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `preserveResourceIdCasing`<sup>Optional</sup> <a name="preserveResourceIdCasing" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing"></a>

```java
public java.lang.Boolean|IResolvable getPreserveResourceIdCasing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration"></a>

```java
public java.lang.Boolean|IResolvable getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `useAksWorkloadIdentity`<sup>Optional</sup> <a name="useAksWorkloadIdentity" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity"></a>

```java
public java.lang.Boolean|IResolvable getUseAksWorkloadIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli"></a>

```java
public java.lang.Boolean|IResolvable getUseCli();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi"></a>

```java
public java.lang.Boolean|IResolvable getUseMsi();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc"></a>

```java
public java.lang.Boolean|IResolvable getUseOidc();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

### AzapiProviderEndpoint <a name="AzapiProviderEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.Initializer"></a>

```java
import io.cdktn.providers.azapi.provider.AzapiProviderEndpoint;

AzapiProviderEndpoint.builder()
//  .activeDirectoryAuthorityHost(java.lang.String)
//  .resourceManagerAudience(java.lang.String)
//  .resourceManagerEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost">activeDirectoryAuthorityHost</a></code> | <code>java.lang.String</code> | The Azure Active Directory login endpoint to use. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience">resourceManagerAudience</a></code> | <code>java.lang.String</code> | The resource ID to obtain AD tokens for. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint">resourceManagerEndpoint</a></code> | <code>java.lang.String</code> | The Azure Resource Manager endpoint to use. |

---

##### `activeDirectoryAuthorityHost`<sup>Optional</sup> <a name="activeDirectoryAuthorityHost" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost"></a>

```java
public java.lang.String getActiveDirectoryAuthorityHost();
```

- *Type:* java.lang.String

The Azure Active Directory login endpoint to use.

This can also be sourced from the `ARM_ACTIVE_DIRECTORY_AUTHORITY_HOST` Environment Variable. Defaults to `https://login.microsoftonline.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#active_directory_authority_host AzapiProvider#active_directory_authority_host}

---

##### `resourceManagerAudience`<sup>Optional</sup> <a name="resourceManagerAudience" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience"></a>

```java
public java.lang.String getResourceManagerAudience();
```

- *Type:* java.lang.String

The resource ID to obtain AD tokens for.

This can also be sourced from the `ARM_RESOURCE_MANAGER_AUDIENCE` Environment Variable. Defaults to `https://management.core.windows.net/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_audience AzapiProvider#resource_manager_audience}

---

##### `resourceManagerEndpoint`<sup>Optional</sup> <a name="resourceManagerEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint"></a>

```java
public java.lang.String getResourceManagerEndpoint();
```

- *Type:* java.lang.String

The Azure Resource Manager endpoint to use.

This can also be sourced from the `ARM_RESOURCE_MANAGER_ENDPOINT` Environment Variable. Defaults to `https://management.azure.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_endpoint AzapiProvider#resource_manager_endpoint}

---



