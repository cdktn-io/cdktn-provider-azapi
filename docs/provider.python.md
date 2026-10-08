# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-azapi.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzapiProvider <a name="AzapiProvider" id="@cdktn/provider-azapi.provider.AzapiProvider"></a>

Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs azapi}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  always_acquire_policy_token: bool | IResolvable = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  custom_correlation_request_id: str = None,
  default_location: str = None,
  default_name: str = None,
  default_tags: typing.Mapping[str] = None,
  disable_correlation_request_id: bool | IResolvable = None,
  disable_default_output: bool | IResolvable = None,
  disable_instance_discovery: bool | IResolvable = None,
  disable_terraform_partner_id: bool | IResolvable = None,
  enable_preflight: bool | IResolvable = None,
  endpoint: IResolvable | typing.List[AzapiProviderEndpoint] = None,
  environment: str = None,
  ignore_no_op_changes: bool | IResolvable = None,
  maximum_busy_retry_attempts: typing.Union[int, float] = None,
  oidc_azure_service_connection_id: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  preserve_resource_id_casing: bool | IResolvable = None,
  skip_provider_registration: bool | IResolvable = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: bool | IResolvable = None,
  use_cli: bool | IResolvable = None,
  use_msi: bool | IResolvable = None,
  use_oidc: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alwaysAcquirePolicyToken">always_acquire_policy_token</a></code> | <code>bool \| cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.customCorrelationRequestId">custom_correlation_request_id</a></code> | <code>str</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultLocation">default_location</a></code> | <code>str</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultName">default_name</a></code> | <code>str</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultTags">default_tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>bool \| cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableDefaultOutput">disable_default_output</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableInstanceDiscovery">disable_instance_discovery</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.enablePreflight">enable_preflight</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]</code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.ignoreNoOpChanges">ignore_no_op_changes</a></code> | <code>bool \| cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.maximumBusyRetryAttempts">maximum_busy_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcAzureServiceConnectionId">oidc_azure_service_connection_id</a></code> | <code>str</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcToken">oidc_token</a></code> | <code>str</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.preserveResourceIdCasing">preserve_resource_id_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.skipProviderRegistration">skip_provider_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useCli">use_cli</a></code> | <code>bool \| cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useMsi">use_msi</a></code> | <code>bool \| cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useOidc">use_oidc</a></code> | <code>bool \| cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `always_acquire_policy_token`<sup>Optional</sup> <a name="always_acquire_policy_token" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.alwaysAcquirePolicyToken"></a>

- *Type:* bool | cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* typing.List[str]

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* str

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* str

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* str

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientId"></a>

- *Type:* str

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* str

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* str

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `custom_correlation_request_id`<sup>Optional</sup> <a name="custom_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.customCorrelationRequestId"></a>

- *Type:* str

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultLocation"></a>

- *Type:* str

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `default_name`<sup>Optional</sup> <a name="default_name" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultName"></a>

- *Type:* str

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.defaultTags"></a>

- *Type:* typing.Mapping[str]

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* bool | cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `disable_default_output`<sup>Optional</sup> <a name="disable_default_output" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableDefaultOutput"></a>

- *Type:* bool | cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `disable_instance_discovery`<sup>Optional</sup> <a name="disable_instance_discovery" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableInstanceDiscovery"></a>

- *Type:* bool | cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* bool | cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `enable_preflight`<sup>Optional</sup> <a name="enable_preflight" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.enablePreflight"></a>

- *Type:* bool | cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.endpoint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.environment"></a>

- *Type:* str

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `ignore_no_op_changes`<sup>Optional</sup> <a name="ignore_no_op_changes" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.ignoreNoOpChanges"></a>

- *Type:* bool | cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `maximum_busy_retry_attempts`<sup>Optional</sup> <a name="maximum_busy_retry_attempts" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.maximumBusyRetryAttempts"></a>

- *Type:* typing.Union[int, float]

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `oidc_azure_service_connection_id`<sup>Optional</sup> <a name="oidc_azure_service_connection_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcAzureServiceConnectionId"></a>

- *Type:* str

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* str

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcToken"></a>

- *Type:* str

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* str

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.partnerId"></a>

- *Type:* str

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `preserve_resource_id_casing`<sup>Optional</sup> <a name="preserve_resource_id_casing" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.preserveResourceIdCasing"></a>

- *Type:* bool | cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* bool | cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useAksWorkloadIdentity"></a>

- *Type:* bool | cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useCli"></a>

- *Type:* bool | cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useMsi"></a>

- *Type:* bool | cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktn/provider-azapi.provider.AzapiProvider.Initializer.parameter.useOidc"></a>

- *Type:* bool | cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken">reset_always_acquire_policy_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds">reset_auxiliary_tenant_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword">reset_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath">reset_client_certificate_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath">reset_client_id_file_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath">reset_client_secret_file_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId">reset_custom_correlation_request_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation">reset_default_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName">reset_default_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags">reset_default_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId">reset_disable_correlation_request_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput">reset_disable_default_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery">reset_disable_instance_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId">reset_disable_terraform_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight">reset_enable_preflight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges">reset_ignore_no_op_changes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts">reset_maximum_busy_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId">reset_oidc_azure_service_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken">reset_oidc_request_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl">reset_oidc_request_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath">reset_oidc_token_file_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId">reset_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing">reset_preserve_resource_id_casing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration">reset_skip_provider_registration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity">reset_use_aks_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli">reset_use_cli</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi">reset_use_msi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc">reset_use_oidc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azapi.provider.AzapiProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azapi.provider.AzapiProvider.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azapi.provider.AzapiProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azapi.provider.AzapiProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azapi.provider.AzapiProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azapi.provider.AzapiProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azapi.provider.AzapiProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_always_acquire_policy_token` <a name="reset_always_acquire_policy_token" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAlwaysAcquirePolicyToken"></a>

```python
def reset_always_acquire_policy_token() -> None
```

##### `reset_auxiliary_tenant_ids` <a name="reset_auxiliary_tenant_ids" id="@cdktn/provider-azapi.provider.AzapiProvider.resetAuxiliaryTenantIds"></a>

```python
def reset_auxiliary_tenant_ids() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_certificate_password` <a name="reset_client_certificate_password" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePassword"></a>

```python
def reset_client_certificate_password() -> None
```

##### `reset_client_certificate_path` <a name="reset_client_certificate_path" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientCertificatePath"></a>

```python
def reset_client_certificate_path() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_file_path` <a name="reset_client_id_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientIdFilePath"></a>

```python
def reset_client_id_file_path() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_file_path` <a name="reset_client_secret_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.resetClientSecretFilePath"></a>

```python
def reset_client_secret_file_path() -> None
```

##### `reset_custom_correlation_request_id` <a name="reset_custom_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetCustomCorrelationRequestId"></a>

```python
def reset_custom_correlation_request_id() -> None
```

##### `reset_default_location` <a name="reset_default_location" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultLocation"></a>

```python
def reset_default_location() -> None
```

##### `reset_default_name` <a name="reset_default_name" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultName"></a>

```python
def reset_default_name() -> None
```

##### `reset_default_tags` <a name="reset_default_tags" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDefaultTags"></a>

```python
def reset_default_tags() -> None
```

##### `reset_disable_correlation_request_id` <a name="reset_disable_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableCorrelationRequestId"></a>

```python
def reset_disable_correlation_request_id() -> None
```

##### `reset_disable_default_output` <a name="reset_disable_default_output" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableDefaultOutput"></a>

```python
def reset_disable_default_output() -> None
```

##### `reset_disable_instance_discovery` <a name="reset_disable_instance_discovery" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableInstanceDiscovery"></a>

```python
def reset_disable_instance_discovery() -> None
```

##### `reset_disable_terraform_partner_id` <a name="reset_disable_terraform_partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetDisableTerraformPartnerId"></a>

```python
def reset_disable_terraform_partner_id() -> None
```

##### `reset_enable_preflight` <a name="reset_enable_preflight" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnablePreflight"></a>

```python
def reset_enable_preflight() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-azapi.provider.AzapiProvider.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_ignore_no_op_changes` <a name="reset_ignore_no_op_changes" id="@cdktn/provider-azapi.provider.AzapiProvider.resetIgnoreNoOpChanges"></a>

```python
def reset_ignore_no_op_changes() -> None
```

##### `reset_maximum_busy_retry_attempts` <a name="reset_maximum_busy_retry_attempts" id="@cdktn/provider-azapi.provider.AzapiProvider.resetMaximumBusyRetryAttempts"></a>

```python
def reset_maximum_busy_retry_attempts() -> None
```

##### `reset_oidc_azure_service_connection_id` <a name="reset_oidc_azure_service_connection_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcAzureServiceConnectionId"></a>

```python
def reset_oidc_azure_service_connection_id() -> None
```

##### `reset_oidc_request_token` <a name="reset_oidc_request_token" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestToken"></a>

```python
def reset_oidc_request_token() -> None
```

##### `reset_oidc_request_url` <a name="reset_oidc_request_url" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcRequestUrl"></a>

```python
def reset_oidc_request_url() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_oidc_token_file_path` <a name="reset_oidc_token_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.resetOidcTokenFilePath"></a>

```python
def reset_oidc_token_file_path() -> None
```

##### `reset_partner_id` <a name="reset_partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPartnerId"></a>

```python
def reset_partner_id() -> None
```

##### `reset_preserve_resource_id_casing` <a name="reset_preserve_resource_id_casing" id="@cdktn/provider-azapi.provider.AzapiProvider.resetPreserveResourceIdCasing"></a>

```python
def reset_preserve_resource_id_casing() -> None
```

##### `reset_skip_provider_registration` <a name="reset_skip_provider_registration" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSkipProviderRegistration"></a>

```python
def reset_skip_provider_registration() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-azapi.provider.AzapiProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_use_aks_workload_identity` <a name="reset_use_aks_workload_identity" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseAksWorkloadIdentity"></a>

```python
def reset_use_aks_workload_identity() -> None
```

##### `reset_use_cli` <a name="reset_use_cli" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseCli"></a>

```python
def reset_use_cli() -> None
```

##### `reset_use_msi` <a name="reset_use_msi" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseMsi"></a>

```python
def reset_use_msi() -> None
```

##### `reset_use_oidc` <a name="reset_use_oidc" id="@cdktn/provider-azapi.provider.AzapiProvider.resetUseOidc"></a>

```python
def reset_use_oidc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azapi.provider.AzapiProvider.isConstruct"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azapi.provider.AzapiProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AzapiProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzapiProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azapi.provider.AzapiProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

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
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.functions">functions</a></code> | <code>cdktn_provider_azapi.providerFunctions.AzapiProviderFunctions</code> | Provider-defined functions of the azapi provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput">always_acquire_policy_token_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput">auxiliary_tenant_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput">client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput">client_certificate_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput">client_id_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput">client_secret_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput">custom_correlation_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput">default_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput">default_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput">default_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput">disable_correlation_request_id_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput">disable_default_output_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput">disable_instance_discovery_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput">disable_terraform_partner_id_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput">enable_preflight_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput">endpoint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput">ignore_no_op_changes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput">maximum_busy_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput">oidc_azure_service_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput">oidc_request_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput">oidc_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput">oidc_token_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput">oidc_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput">partner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput">preserve_resource_id_casing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput">skip_provider_registration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput">use_aks_workload_identity_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput">use_cli_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput">use_msi_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput">use_oidc_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken">always_acquire_policy_token</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId">custom_correlation_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation">default_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName">default_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags">default_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput">disable_default_output</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery">disable_instance_discovery</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight">enable_preflight</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint">endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges">ignore_no_op_changes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts">maximum_busy_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId">oidc_azure_service_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken">oidc_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId">partner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing">preserve_resource_id_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useCli">use_cli</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi">use_msi</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc">use_oidc</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azapi.provider.AzapiProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azapi.provider.AzapiProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azapi.provider.AzapiProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktn/provider-azapi.provider.AzapiProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-azapi.provider.AzapiProvider.property.functions"></a>

```python
functions: AzapiProviderFunctions
```

- *Type:* cdktn_provider_azapi.providerFunctions.AzapiProviderFunctions

Provider-defined functions of the azapi provider.

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `always_acquire_policy_token_input`<sup>Optional</sup> <a name="always_acquire_policy_token_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyTokenInput"></a>

```python
always_acquire_policy_token_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auxiliary_tenant_ids_input`<sup>Optional</sup> <a name="auxiliary_tenant_ids_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIdsInput"></a>

```python
auxiliary_tenant_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_password_input`<sup>Optional</sup> <a name="client_certificate_password_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePasswordInput"></a>

```python
client_certificate_password_input: str
```

- *Type:* str

---

##### `client_certificate_path_input`<sup>Optional</sup> <a name="client_certificate_path_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePathInput"></a>

```python
client_certificate_path_input: str
```

- *Type:* str

---

##### `client_id_file_path_input`<sup>Optional</sup> <a name="client_id_file_path_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePathInput"></a>

```python
client_id_file_path_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_file_path_input`<sup>Optional</sup> <a name="client_secret_file_path_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePathInput"></a>

```python
client_secret_file_path_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `custom_correlation_request_id_input`<sup>Optional</sup> <a name="custom_correlation_request_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestIdInput"></a>

```python
custom_correlation_request_id_input: str
```

- *Type:* str

---

##### `default_location_input`<sup>Optional</sup> <a name="default_location_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocationInput"></a>

```python
default_location_input: str
```

- *Type:* str

---

##### `default_name_input`<sup>Optional</sup> <a name="default_name_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultNameInput"></a>

```python
default_name_input: str
```

- *Type:* str

---

##### `default_tags_input`<sup>Optional</sup> <a name="default_tags_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTagsInput"></a>

```python
default_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_correlation_request_id_input`<sup>Optional</sup> <a name="disable_correlation_request_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestIdInput"></a>

```python
disable_correlation_request_id_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_default_output_input`<sup>Optional</sup> <a name="disable_default_output_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutputInput"></a>

```python
disable_default_output_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_instance_discovery_input`<sup>Optional</sup> <a name="disable_instance_discovery_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscoveryInput"></a>

```python
disable_instance_discovery_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_terraform_partner_id_input`<sup>Optional</sup> <a name="disable_terraform_partner_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerIdInput"></a>

```python
disable_terraform_partner_id_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_preflight_input`<sup>Optional</sup> <a name="enable_preflight_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflightInput"></a>

```python
enable_preflight_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpointInput"></a>

```python
endpoint_input: IResolvable | typing.List[AzapiProviderEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `ignore_no_op_changes_input`<sup>Optional</sup> <a name="ignore_no_op_changes_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChangesInput"></a>

```python
ignore_no_op_changes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_busy_retry_attempts_input`<sup>Optional</sup> <a name="maximum_busy_retry_attempts_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttemptsInput"></a>

```python
maximum_busy_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oidc_azure_service_connection_id_input`<sup>Optional</sup> <a name="oidc_azure_service_connection_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionIdInput"></a>

```python
oidc_azure_service_connection_id_input: str
```

- *Type:* str

---

##### `oidc_request_token_input`<sup>Optional</sup> <a name="oidc_request_token_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestTokenInput"></a>

```python
oidc_request_token_input: str
```

- *Type:* str

---

##### `oidc_request_url_input`<sup>Optional</sup> <a name="oidc_request_url_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrlInput"></a>

```python
oidc_request_url_input: str
```

- *Type:* str

---

##### `oidc_token_file_path_input`<sup>Optional</sup> <a name="oidc_token_file_path_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePathInput"></a>

```python
oidc_token_file_path_input: str
```

- *Type:* str

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenInput"></a>

```python
oidc_token_input: str
```

- *Type:* str

---

##### `partner_id_input`<sup>Optional</sup> <a name="partner_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerIdInput"></a>

```python
partner_id_input: str
```

- *Type:* str

---

##### `preserve_resource_id_casing_input`<sup>Optional</sup> <a name="preserve_resource_id_casing_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasingInput"></a>

```python
preserve_resource_id_casing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_provider_registration_input`<sup>Optional</sup> <a name="skip_provider_registration_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistrationInput"></a>

```python
skip_provider_registration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `use_aks_workload_identity_input`<sup>Optional</sup> <a name="use_aks_workload_identity_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentityInput"></a>

```python
use_aks_workload_identity_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_cli_input`<sup>Optional</sup> <a name="use_cli_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCliInput"></a>

```python
use_cli_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_msi_input`<sup>Optional</sup> <a name="use_msi_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsiInput"></a>

```python
use_msi_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_oidc_input`<sup>Optional</sup> <a name="use_oidc_input" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidcInput"></a>

```python
use_oidc_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `always_acquire_policy_token`<sup>Optional</sup> <a name="always_acquire_policy_token" id="@cdktn/provider-azapi.provider.AzapiProvider.property.alwaysAcquirePolicyToken"></a>

```python
always_acquire_policy_token: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktn/provider-azapi.provider.AzapiProvider.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

---

##### `custom_correlation_request_id`<sup>Optional</sup> <a name="custom_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.customCorrelationRequestId"></a>

```python
custom_correlation_request_id: str
```

- *Type:* str

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

---

##### `default_name`<sup>Optional</sup> <a name="default_name" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultName"></a>

```python
default_name: str
```

- *Type:* str

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktn/provider-azapi.provider.AzapiProvider.property.defaultTags"></a>

```python
default_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_default_output`<sup>Optional</sup> <a name="disable_default_output" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableDefaultOutput"></a>

```python
disable_default_output: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_instance_discovery`<sup>Optional</sup> <a name="disable_instance_discovery" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableInstanceDiscovery"></a>

```python
disable_instance_discovery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_preflight`<sup>Optional</sup> <a name="enable_preflight" id="@cdktn/provider-azapi.provider.AzapiProvider.property.enablePreflight"></a>

```python
enable_preflight: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProvider.property.endpoint"></a>

```python
endpoint: IResolvable | typing.List[AzapiProviderEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProvider.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `ignore_no_op_changes`<sup>Optional</sup> <a name="ignore_no_op_changes" id="@cdktn/provider-azapi.provider.AzapiProvider.property.ignoreNoOpChanges"></a>

```python
ignore_no_op_changes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_busy_retry_attempts`<sup>Optional</sup> <a name="maximum_busy_retry_attempts" id="@cdktn/provider-azapi.provider.AzapiProvider.property.maximumBusyRetryAttempts"></a>

```python
maximum_busy_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oidc_azure_service_connection_id`<sup>Optional</sup> <a name="oidc_azure_service_connection_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcAzureServiceConnectionId"></a>

```python
oidc_azure_service_connection_id: str
```

- *Type:* str

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktn/provider-azapi.provider.AzapiProvider.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

---

##### `preserve_resource_id_casing`<sup>Optional</sup> <a name="preserve_resource_id_casing" id="@cdktn/provider-azapi.provider.AzapiProvider.property.preserveResourceIdCasing"></a>

```python
preserve_resource_id_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktn/provider-azapi.provider.AzapiProvider.property.skipProviderRegistration"></a>

```python
skip_provider_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useCli"></a>

```python
use_cli: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useMsi"></a>

```python
use_msi: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktn/provider-azapi.provider.AzapiProvider.property.useOidc"></a>

```python
use_oidc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azapi.provider.AzapiProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzapiProviderConfig <a name="AzapiProviderConfig" id="@cdktn/provider-azapi.provider.AzapiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.Initializer"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProviderConfig(
  alias: str = None,
  always_acquire_policy_token: bool | IResolvable = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  custom_correlation_request_id: str = None,
  default_location: str = None,
  default_name: str = None,
  default_tags: typing.Mapping[str] = None,
  disable_correlation_request_id: bool | IResolvable = None,
  disable_default_output: bool | IResolvable = None,
  disable_instance_discovery: bool | IResolvable = None,
  disable_terraform_partner_id: bool | IResolvable = None,
  enable_preflight: bool | IResolvable = None,
  endpoint: IResolvable | typing.List[AzapiProviderEndpoint] = None,
  environment: str = None,
  ignore_no_op_changes: bool | IResolvable = None,
  maximum_busy_retry_attempts: typing.Union[int, float] = None,
  oidc_azure_service_connection_id: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  preserve_resource_id_casing: bool | IResolvable = None,
  skip_provider_registration: bool | IResolvable = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: bool | IResolvable = None,
  use_cli: bool | IResolvable = None,
  use_msi: bool | IResolvable = None,
  use_oidc: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken">always_acquire_policy_token</a></code> | <code>bool \| cdktn.IResolvable</code> | Always acquire a policy token for write requests, regardless of whether one is required. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId">custom_correlation_request_id</a></code> | <code>str</code> | The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation">default_location</a></code> | <code>str</code> | The default Azure Region where the azure resource should exist. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName">default_name</a></code> | <code>str</code> | The default name to create the azure resource. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags">default_tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags which should be assigned to the azure resource as default tags. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>bool \| cdktn.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput">disable_default_output</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable default output. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery">disable_instance_discovery</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight">enable_preflight</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Preflight Validation. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint">endpoint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]</code> | The Azure API Endpoint Configuration. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges">ignore_no_op_changes</a></code> | <code>bool \| cdktn.IResolvable</code> | Ignore no-op changes for `azapi_resource`. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts">maximum_busy_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId">oidc_azure_service_connection_id</a></code> | <code>str</code> | The Azure Pipelines Service Connection ID to use for authentication. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken">oidc_token</a></code> | <code>str</code> | The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an ID token when authenticating using OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing">preserve_resource_id_casing</a></code> | <code>bool \| cdktn.IResolvable</code> | Preserve the existing casing of the resource ID in state. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | Should the Provider skip registering the Resource Providers it supports? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | Should AKS Workload Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli">use_cli</a></code> | <code>bool \| cdktn.IResolvable</code> | Should Azure CLI be used for authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi">use_msi</a></code> | <code>bool \| cdktn.IResolvable</code> | Should Managed Identity be used for Authentication? |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc">use_oidc</a></code> | <code>bool \| cdktn.IResolvable</code> | Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#alias AzapiProvider#alias}

---

##### `always_acquire_policy_token`<sup>Optional</sup> <a name="always_acquire_policy_token" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.alwaysAcquirePolicyToken"></a>

```python
always_acquire_policy_token: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Always acquire a policy token for write requests, regardless of whether one is required.

The default is `false`. The default behaviour is to wait for a qualifying `403` response indicating that a policy token is required, and then retry the request with an acquired policy token. When this attribute is set to `true`, the provider proactively acquires a policy token and attaches it to every write request, avoiding the extra round-trip per request. Performance will be improved if the number of changed resources is known to be large beforehand. This can also be sourced from the `ARM_ALWAYS_ACQUIRE_POLICY_TOKEN` Environment Variable. See [Feature: Acquire Policy Token](guides/feature_acquire_policy_token.html) to learn more.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#always_acquire_policy_token AzapiProvider#always_acquire_policy_token}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of auxiliary Tenant IDs required for multi-tenancy and cross-tenant scenarios.

This can also be sourced from the `ARM_AUXILIARY_TENANT_IDS` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#auxiliary_tenant_ids AzapiProvider#auxiliary_tenant_ids}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

A base64-encoded PKCS#12 bundle to be used as the client certificate for authentication.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate AzapiProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

The password associated with the Client Certificate. This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_password AzapiProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

The path to the Client Certificate associated with the Service Principal which should be used.

This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_certificate_path AzapiProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The Client ID which should be used. This can also be sourced from the `ARM_CLIENT_ID`, `AZURE_CLIENT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id AzapiProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

The path to a file containing the Client ID which should be used.

This can also be sourced from the `ARM_CLIENT_ID_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_id_file_path AzapiProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The Client Secret which should be used. This can also be sourced from the `ARM_CLIENT_SECRET` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret AzapiProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret. This can also be sourced from the `ARM_CLIENT_SECRET_FILE_PATH` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#client_secret_file_path AzapiProvider#client_secret_file_path}

---

##### `custom_correlation_request_id`<sup>Optional</sup> <a name="custom_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.customCorrelationRequestId"></a>

```python
custom_correlation_request_id: str
```

- *Type:* str

The value of the `x-ms-correlation-request-id` header, otherwise an auto-generated UUID will be used.

This can also be sourced from the `ARM_CORRELATION_REQUEST_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#custom_correlation_request_id AzapiProvider#custom_correlation_request_id}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

The default Azure Region where the azure resource should exist.

The `location` in each resource block can override the `default_location`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_location AzapiProvider#default_location}

---

##### `default_name`<sup>Optional</sup> <a name="default_name" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultName"></a>

```python
default_name: str
```

- *Type:* str

The default name to create the azure resource.

The `name` in each resource block can override the `default_name`. Changing this forces new resources to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_name AzapiProvider#default_name}

---

##### `default_tags`<sup>Optional</sup> <a name="default_tags" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.defaultTags"></a>

```python
default_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of tags which should be assigned to the azure resource as default tags.

The `tags` in each resource block can override the `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#default_tags AzapiProvider#default_tags}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_correlation_request_id AzapiProvider#disable_correlation_request_id}

---

##### `disable_default_output`<sup>Optional</sup> <a name="disable_default_output" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableDefaultOutput"></a>

```python
disable_default_output: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable default output.

The default is false. When set to false, the provider will output the read-only properties if `response_export_values` is not specified in the resource block. When set to true, the provider will disable this output. This can also be sourced from the `ARM_DISABLE_DEFAULT_OUTPUT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_default_output AzapiProvider#disable_default_output}

---

##### `disable_instance_discovery`<sup>Optional</sup> <a name="disable_instance_discovery" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableInstanceDiscovery"></a>

```python
disable_instance_discovery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables Instance Discovery, which validates that the Authority is valid and known by the Microsoft Entra instance metadata service at `https://login.microsoft.com` before authenticating. This should only be enabled when the configured authority is known to be valid and trustworthy - such as when running against Azure Stack or when `environment` is set to `custom`. This can also be specified via the `ARM_DISABLE_INSTANCE_DISCOVERY` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_instance_discovery AzapiProvider#disable_instance_discovery}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable sending the Terraform Partner ID if a custom `partner_id` isn't specified, which allows Microsoft to better understand the usage of Terraform.

The Partner ID does not give HashiCorp any direct access to usage information. This can also be sourced from the `ARM_DISABLE_TERRAFORM_PARTNER_ID` environment variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#disable_terraform_partner_id AzapiProvider#disable_terraform_partner_id}

---

##### `enable_preflight`<sup>Optional</sup> <a name="enable_preflight" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.enablePreflight"></a>

```python
enable_preflight: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable Preflight Validation.

The default is false. When set to true, the provider will use Preflight to do static validation before really deploying a new resource. When set to false, the provider will disable this validation. This can also be sourced from the `ARM_ENABLE_PREFLIGHT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#enable_preflight AzapiProvider#enable_preflight}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.endpoint"></a>

```python
endpoint: IResolvable | typing.List[AzapiProviderEndpoint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint">AzapiProviderEndpoint</a>]

The Azure API Endpoint Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#endpoint AzapiProvider#endpoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Cloud Environment which should be used.

Defaults to `public`. This can also be sourced from the `ARM_ENVIRONMENT` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#environment AzapiProvider#environment}

---

##### `ignore_no_op_changes`<sup>Optional</sup> <a name="ignore_no_op_changes" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.ignoreNoOpChanges"></a>

```python
ignore_no_op_changes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Ignore no-op changes for `azapi_resource`.

The default is true. When set to true, the provider will suppress changes in the `azapi_resource` if the `body` in the new API version still matches the remote state. When set to false, the provider will not suppress these changes. This can also be sourced from the `ARM_IGNORE_NO_OP_CHANGES` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#ignore_no_op_changes AzapiProvider#ignore_no_op_changes}

---

##### `maximum_busy_retry_attempts`<sup>Optional</sup> <a name="maximum_busy_retry_attempts" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.maximumBusyRetryAttempts"></a>

```python
maximum_busy_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

DEPRECATED - The maximum number of retries to attempt if the Azure API returns an HTTP 408, 429, 500, 502, 503, or 504 response.

The default is `32767`, this allows the provider to rely on the resource timeout values rather than a maximum retry count. The resource-specific retry configuration may additionally be used to retry on other errors and conditions. This property will be removed in a future version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#maximum_busy_retry_attempts AzapiProvider#maximum_busy_retry_attempts}

---

##### `oidc_azure_service_connection_id`<sup>Optional</sup> <a name="oidc_azure_service_connection_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcAzureServiceConnectionId"></a>

```python
oidc_azure_service_connection_id: str
```

- *Type:* str

The Azure Pipelines Service Connection ID to use for authentication.

This can also be sourced from the `ARM_ADO_PIPELINE_SERVICE_CONNECTION_ID`, `ARM_OIDC_AZURE_SERVICE_CONNECTION_ID`, or `AZURESUBSCRIPTION_SERVICE_CONNECTION_ID` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_azure_service_connection_id AzapiProvider#oidc_azure_service_connection_id}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

The bearer token for the request to the OIDC provider.

This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_TOKEN`, or `SYSTEM_ACCESSTOKEN` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_token AzapiProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

This can also be sourced from the `ARM_OIDC_REQUEST_URL`, `ACTIONS_ID_TOKEN_REQUEST_URL`, or `SYSTEM_OIDCREQUESTURI` Environment Variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_request_url AzapiProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

The ID token when authenticating using OpenID Connect (OIDC). This can also be sourced from the `ARM_OIDC_TOKEN` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token AzapiProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).

This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH`, `AZURE_FEDERATED_TOKEN_FILE` environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#oidc_token_file_path AzapiProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

A GUID/UUID that is [registered](https://docs.microsoft.com/azure/marketplace/azure-partner-customer-usage-attribution#register-guids-and-offers) with Microsoft to facilitate partner resource usage attribution. This can also be sourced from the `ARM_PARTNER_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#partner_id AzapiProvider#partner_id}

---

##### `preserve_resource_id_casing`<sup>Optional</sup> <a name="preserve_resource_id_casing" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.preserveResourceIdCasing"></a>

```python
preserve_resource_id_casing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Preserve the existing casing of the resource ID in state.

The default is false. When set to true, if the resource ID the provider would write back to state differs from the value already in state only by casing, the existing casing is kept. This is useful when consumers of the resource ID (or the `azapi_resource` identity) require a specific casing that the Azure API may not preserve. This only affects the `id` (and `resource_id`) attributes; other properties are unaffected. This can also be sourced from the `ARM_PRESERVE_RESOURCE_ID_CASING` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#preserve_resource_id_casing AzapiProvider#preserve_resource_id_casing}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.skipProviderRegistration"></a>

```python
skip_provider_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Should the Provider skip registering the Resource Providers it supports?

This can also be sourced from the `ARM_SKIP_PROVIDER_REGISTRATION` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#skip_provider_registration AzapiProvider#skip_provider_registration}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The Subscription ID which should be used. This can also be sourced from the `ARM_SUBSCRIPTION_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#subscription_id AzapiProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Tenant ID should be used. This can also be sourced from the `ARM_TENANT_ID` Environment Variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#tenant_id AzapiProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Should AKS Workload Identity be used for Authentication?

This can also be sourced from the `ARM_USE_AKS_WORKLOAD_IDENTITY` Environment Variable. Defaults to `false`. When set, `client_id`, `tenant_id` and `oidc_token_file_path` will be detected from the environment and do not need to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_aks_workload_identity AzapiProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useCli"></a>

```python
use_cli: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Should Azure CLI be used for authentication?

This can also be sourced from the `ARM_USE_CLI` environment variable. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_cli AzapiProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useMsi"></a>

```python
use_msi: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Should Managed Identity be used for Authentication?

This can also be sourced from the `ARM_USE_MSI` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_msi AzapiProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktn/provider-azapi.provider.AzapiProviderConfig.property.useOidc"></a>

```python
use_oidc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Should OIDC be used for Authentication? This can also be sourced from the `ARM_USE_OIDC` Environment Variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#use_oidc AzapiProvider#use_oidc}

---

### AzapiProviderEndpoint <a name="AzapiProviderEndpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.Initializer"></a>

```python
from cdktn_provider_azapi import provider

provider.AzapiProviderEndpoint(
  active_directory_authority_host: str = None,
  resource_manager_audience: str = None,
  resource_manager_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost">active_directory_authority_host</a></code> | <code>str</code> | The Azure Active Directory login endpoint to use. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience">resource_manager_audience</a></code> | <code>str</code> | The resource ID to obtain AD tokens for. |
| <code><a href="#@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint">resource_manager_endpoint</a></code> | <code>str</code> | The Azure Resource Manager endpoint to use. |

---

##### `active_directory_authority_host`<sup>Optional</sup> <a name="active_directory_authority_host" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.activeDirectoryAuthorityHost"></a>

```python
active_directory_authority_host: str
```

- *Type:* str

The Azure Active Directory login endpoint to use.

This can also be sourced from the `ARM_ACTIVE_DIRECTORY_AUTHORITY_HOST` Environment Variable. Defaults to `https://login.microsoftonline.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#active_directory_authority_host AzapiProvider#active_directory_authority_host}

---

##### `resource_manager_audience`<sup>Optional</sup> <a name="resource_manager_audience" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerAudience"></a>

```python
resource_manager_audience: str
```

- *Type:* str

The resource ID to obtain AD tokens for.

This can also be sourced from the `ARM_RESOURCE_MANAGER_AUDIENCE` Environment Variable. Defaults to `https://management.core.windows.net/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_audience AzapiProvider#resource_manager_audience}

---

##### `resource_manager_endpoint`<sup>Optional</sup> <a name="resource_manager_endpoint" id="@cdktn/provider-azapi.provider.AzapiProviderEndpoint.property.resourceManagerEndpoint"></a>

```python
resource_manager_endpoint: str
```

- *Type:* str

The Azure Resource Manager endpoint to use.

This can also be sourced from the `ARM_RESOURCE_MANAGER_ENDPOINT` Environment Variable. Defaults to `https://management.azure.com/` for public cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs#resource_manager_endpoint AzapiProvider#resource_manager_endpoint}

---



