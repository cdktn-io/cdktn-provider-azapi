/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAzapiResourceActionConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The name of the resource action. It's also possible to make HTTP requests towards the resource ID if leave this field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#action EphemeralAzapiResourceAction#action}
  */
  readonly action?: string;
  /**
  * A dynamic attribute that contains the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#body EphemeralAzapiResourceAction#body}
  */
  readonly body?: { [key: string]: any };
  /**
  * A map of headers to include in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#headers EphemeralAzapiResourceAction#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * A list of ARM resource IDs which are used to avoid create/modify/delete azapi resources at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#locks EphemeralAzapiResourceAction#locks}
  */
  readonly locks?: string[];
  /**
  * Specifies the HTTP method of the azure resource action. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#method EphemeralAzapiResourceAction#method}
  */
  readonly method?: string;
  /**
  * A map of query parameters to include in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#query_parameters EphemeralAzapiResourceAction#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string[] } | cdktn.IResolvable;
  /**
  * The ID of an existing Azure source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#resource_id EphemeralAzapiResourceAction#resource_id}
  */
  readonly resourceId: string;
  /**
  * The attribute can accept either a list or a map.
  * 
  * - **List**: A list of paths that need to be exported from the response body. Setting it to `["*"]` will export the full response body. Here's an example. If it sets to `["properties.loginServer", "properties.policies.quarantinePolicy.status"]`, it will set the following HCL object to the computed property output.
  * 
  * 	```text
  * 	{
  * 		properties = {
  * 			loginServer = "registry1.azurecr.io"
  * 			policies = {
  * 				quarantinePolicy = {
  * 					status = "disabled"
  * 				}
  * 			}
  * 		}
  * 	}
  * 	```
  * 
  * - **Map**: A map where the key is the name for the result and the value is a JMESPath query string to filter the response. Here's an example. If it sets to `{"login_server": "properties.loginServer", "quarantine_status": "properties.policies.quarantinePolicy.status"}`, it will set the following HCL object to the computed property output.
  * 
  * 	```text
  * 	{
  * 		"login_server" = "registry1.azurecr.io"
  * 		"quarantine_status" = "disabled"
  * 	}
  * 	```
  * 
  * To learn more about JMESPath, visit [JMESPath](https://jmespath.org/).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#response_export_values EphemeralAzapiResourceAction#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: any };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#retry EphemeralAzapiResourceAction#retry}
  */
  readonly retry?: EphemeralAzapiResourceActionRetry;
  /**
  * A dynamic attribute that contains the write-only properties of the request body. This will be merge-patched to the body to construct the actual request body. If a property is defined in both `body` and `sensitive_body`, the `sensitive_body` value takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#sensitive_body EphemeralAzapiResourceAction#sensitive_body}
  */
  readonly sensitiveBody?: { [key: string]: any };
  /**
  * In a format like `<resource-type>@<api-version>`. `<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#type EphemeralAzapiResourceAction#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#timeouts EphemeralAzapiResourceAction#timeouts}
  */
  readonly timeouts?: EphemeralAzapiResourceActionTimeouts;
}
export interface EphemeralAzapiResourceActionRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#error_message_regex EphemeralAzapiResourceAction#error_message_regex}
  */
  readonly errorMessageRegex: string[];
  /**
  * The base number of seconds to wait between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#interval_seconds EphemeralAzapiResourceAction#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The maximum number of seconds to wait between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#max_interval_seconds EphemeralAzapiResourceAction#max_interval_seconds}
  */
  readonly maxIntervalSeconds?: number;
  /**
  * The multiplier to apply to the interval between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#multiplier EphemeralAzapiResourceAction#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The randomization factor to apply to the interval between retries. The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#randomization_factor EphemeralAzapiResourceAction#randomization_factor}
  */
  readonly randomizationFactor?: number;
}

export function ephemeralAzapiResourceActionRetryToTerraform(struct?: EphemeralAzapiResourceActionRetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_message_regex: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.errorMessageRegex),
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    max_interval_seconds: cdktn.numberToTerraform(struct!.maxIntervalSeconds),
    multiplier: cdktn.numberToTerraform(struct!.multiplier),
    randomization_factor: cdktn.numberToTerraform(struct!.randomizationFactor),
  }
}


export function ephemeralAzapiResourceActionRetryToHclTerraform(struct?: EphemeralAzapiResourceActionRetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_message_regex: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.errorMessageRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktn.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    randomization_factor: {
      value: cdktn.numberToHclTerraform(struct!.randomizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralAzapiResourceActionRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralAzapiResourceActionRetry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorMessageRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessageRegex = this._errorMessageRegex;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._maxIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIntervalSeconds = this._maxIntervalSeconds;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._randomizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomizationFactor = this._randomizationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAzapiResourceActionRetry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorMessageRegex = undefined;
      this._intervalSeconds = undefined;
      this._maxIntervalSeconds = undefined;
      this._multiplier = undefined;
      this._randomizationFactor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorMessageRegex = value.errorMessageRegex;
      this._intervalSeconds = value.intervalSeconds;
      this._maxIntervalSeconds = value.maxIntervalSeconds;
      this._multiplier = value.multiplier;
      this._randomizationFactor = value.randomizationFactor;
    }
  }

  // error_message_regex - computed: false, optional: false, required: true
  private _errorMessageRegex?: string[]; 
  public get errorMessageRegex() {
    return this.getListAttribute('error_message_regex');
  }
  public set errorMessageRegex(value: string[]) {
    this._errorMessageRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageRegexInput() {
    return this._errorMessageRegex;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // max_interval_seconds - computed: true, optional: true, required: false
  private _maxIntervalSeconds?: number; 
  public get maxIntervalSeconds() {
    return this.getNumberAttribute('max_interval_seconds');
  }
  public set maxIntervalSeconds(value: number) {
    this._maxIntervalSeconds = value;
  }
  public resetMaxIntervalSeconds() {
    this._maxIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalSecondsInput() {
    return this._maxIntervalSeconds;
  }

  // multiplier - computed: true, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // randomization_factor - computed: true, optional: true, required: false
  private _randomizationFactor?: number; 
  public get randomizationFactor() {
    return this.getNumberAttribute('randomization_factor');
  }
  public set randomizationFactor(value: number) {
    this._randomizationFactor = value;
  }
  public resetRandomizationFactor() {
    this._randomizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizationFactorInput() {
    return this._randomizationFactor;
  }
}
export interface EphemeralAzapiResourceActionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action#open EphemeralAzapiResourceAction#open}
  */
  readonly open?: string;
}

export function ephemeralAzapiResourceActionTimeoutsToTerraform(struct?: EphemeralAzapiResourceActionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open: cdktn.stringToTerraform(struct!.open),
  }
}


export function ephemeralAzapiResourceActionTimeoutsToHclTerraform(struct?: EphemeralAzapiResourceActionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    open: {
      value: cdktn.stringToHclTerraform(struct!.open),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralAzapiResourceActionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralAzapiResourceActionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._open !== undefined) {
      hasAnyValues = true;
      internalValueResult.open = this._open;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAzapiResourceActionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._open = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._open = value.open;
    }
  }

  // open - computed: false, optional: true, required: false
  private _open?: string; 
  public get open() {
    return this.getStringAttribute('open');
  }
  public set open(value: string) {
    this._open = value;
  }
  public resetOpen() {
    this._open = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInput() {
    return this._open;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action azapi_resource_action}
*/
export class EphemeralAzapiResourceAction extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azapi_resource_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/resource_action azapi_resource_action} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAzapiResourceActionConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAzapiResourceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'azapi_resource_action',
      terraformGeneratorMetadata: {
        providerName: 'azapi',
        providerVersion: '2.13.0',
        providerVersionConstraint: '~> 2.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._action = config.action;
    this._body = config.body;
    this._headers = config.headers;
    this._locks = config.locks;
    this._method = config.method;
    this._queryParameters = config.queryParameters;
    this._resourceId = config.resourceId;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
    this._sensitiveBody = config.sensitiveBody;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: any }; 
  public get body() {
    return this.getAnyMapAttribute('body');
  }
  public set body(value: { [key: string]: any }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locks - computed: false, optional: true, required: false
  private _locks?: string[]; 
  public get locks() {
    return this.getListAttribute('locks');
  }
  public set locks(value: string[]) {
    this._locks = value;
  }
  public resetLocks() {
    this._locks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktn.AnyMap(this, "output");
  public get output() {
    return this._output;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters?: { [key: string]: string[] } | cdktn.IResolvable; 
  public get queryParameters() {
    return this.interpolationForAttribute('query_parameters');
  }
  public set queryParameters(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // response_export_values - computed: false, optional: true, required: false
  private _responseExportValues?: { [key: string]: any }; 
  public get responseExportValues() {
    return this.getAnyMapAttribute('response_export_values');
  }
  public set responseExportValues(value: { [key: string]: any }) {
    this._responseExportValues = value;
  }
  public resetResponseExportValues() {
    this._responseExportValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseExportValuesInput() {
    return this._responseExportValues;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new EphemeralAzapiResourceActionRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: EphemeralAzapiResourceActionRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // sensitive_body - computed: false, optional: true, required: false
  private _sensitiveBody?: { [key: string]: any }; 
  public get sensitiveBody() {
    return this.getAnyMapAttribute('sensitive_body');
  }
  public set sensitiveBody(value: { [key: string]: any }) {
    this._sensitiveBody = value;
  }
  public resetSensitiveBody() {
    this._sensitiveBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveBodyInput() {
    return this._sensitiveBody;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EphemeralAzapiResourceActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EphemeralAzapiResourceActionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktn.stringToTerraform(this._action),
      body: cdktn.hashMapper(cdktn.anyToTerraform)(this._body),
      headers: cdktn.hashMapper(cdktn.stringToTerraform)(this._headers),
      locks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._locks),
      method: cdktn.stringToTerraform(this._method),
      query_parameters: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(this._queryParameters),
      resource_id: cdktn.stringToTerraform(this._resourceId),
      response_export_values: cdktn.hashMapper(cdktn.anyToTerraform)(this._responseExportValues),
      retry: ephemeralAzapiResourceActionRetryToTerraform(this._retry.internalValue),
      sensitive_body: cdktn.hashMapper(cdktn.anyToTerraform)(this._sensitiveBody),
      type: cdktn.stringToTerraform(this._type),
      timeouts: ephemeralAzapiResourceActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktn.hashMapperHcl(cdktn.anyToHclTerraform)(this._body),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      headers: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      locks: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._locks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      method: {
        value: cdktn.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_parameters: {
        value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(this._queryParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      resource_id: {
        value: cdktn.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_export_values: {
        value: cdktn.hashMapperHcl(cdktn.anyToHclTerraform)(this._responseExportValues),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      retry: {
        value: ephemeralAzapiResourceActionRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralAzapiResourceActionRetry",
      },
      sensitive_body: {
        value: cdktn.hashMapperHcl(cdktn.anyToHclTerraform)(this._sensitiveBody),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ephemeralAzapiResourceActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralAzapiResourceActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
