/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAzapiDataPlaneResourceConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Specifies the name (identifier segment) of the data plane resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#name EphemeralAzapiDataPlaneResource#name}
  */
  readonly name?: string;
  /**
  * The ID of the azure resource in which this resource exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#parent_id EphemeralAzapiDataPlaneResource#parent_id}
  */
  readonly parentId: string;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#response_export_values EphemeralAzapiDataPlaneResource#response_export_values}
  */
  readonly responseExportValues?: { [key: string]: any };
  /**
  * The retry object supports the following attributes:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#retry EphemeralAzapiDataPlaneResource#retry}
  */
  readonly retry?: EphemeralAzapiDataPlaneResourceRetry;
  /**
  * In a format like `<resource-type>@<api-version>`. `<resource-type>` is the Azure resource type, for example, `Microsoft.Storage/storageAccounts`. `<api-version>` is version of the API used to manage this azure resource. For a list of supported data plane resource types, see the [Available Resources](https://registry.terraform.io/providers/Azure/azapi/latest/docs/resources/data_plane_resource#available-resources) documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#type EphemeralAzapiDataPlaneResource#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#timeouts EphemeralAzapiDataPlaneResource#timeouts}
  */
  readonly timeouts?: EphemeralAzapiDataPlaneResourceTimeouts;
}
export interface EphemeralAzapiDataPlaneResourceRetry {
  /**
  * A list of regular expressions to match against error messages. If any of the regular expressions match, the request will be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#error_message_regex EphemeralAzapiDataPlaneResource#error_message_regex}
  */
  readonly errorMessageRegex: string[];
  /**
  * The base number of seconds to wait between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#interval_seconds EphemeralAzapiDataPlaneResource#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The maximum number of seconds to wait between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#max_interval_seconds EphemeralAzapiDataPlaneResource#max_interval_seconds}
  */
  readonly maxIntervalSeconds?: number;
  /**
  * The multiplier to apply to the interval between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#multiplier EphemeralAzapiDataPlaneResource#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The randomization factor to apply to the interval between retries. The formula for the randomized interval is: `RetryInterval * (random value in range [1 - RandomizationFactor, 1 + RandomizationFactor])`. Therefore set to zero `0.0` for no randomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#randomization_factor EphemeralAzapiDataPlaneResource#randomization_factor}
  */
  readonly randomizationFactor?: number;
}

export function ephemeralAzapiDataPlaneResourceRetryToTerraform(struct?: EphemeralAzapiDataPlaneResourceRetry | cdktn.IResolvable): any {
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


export function ephemeralAzapiDataPlaneResourceRetryToHclTerraform(struct?: EphemeralAzapiDataPlaneResourceRetry | cdktn.IResolvable): any {
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

export class EphemeralAzapiDataPlaneResourceRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralAzapiDataPlaneResourceRetry | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EphemeralAzapiDataPlaneResourceRetry | cdktn.IResolvable | undefined) {
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
export interface EphemeralAzapiDataPlaneResourceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource#open EphemeralAzapiDataPlaneResource#open}
  */
  readonly open?: string;
}

export function ephemeralAzapiDataPlaneResourceTimeoutsToTerraform(struct?: EphemeralAzapiDataPlaneResourceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open: cdktn.stringToTerraform(struct!.open),
  }
}


export function ephemeralAzapiDataPlaneResourceTimeoutsToHclTerraform(struct?: EphemeralAzapiDataPlaneResourceTimeouts | cdktn.IResolvable): any {
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

export class EphemeralAzapiDataPlaneResourceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralAzapiDataPlaneResourceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EphemeralAzapiDataPlaneResourceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource}
*/
export class EphemeralAzapiDataPlaneResource extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azapi_data_plane_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/azapi/2.13.0/docs/ephemeral-resources/data_plane_resource azapi_data_plane_resource} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAzapiDataPlaneResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAzapiDataPlaneResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'azapi_data_plane_resource',
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
    this._name = config.name;
    this._parentId = config.parentId;
    this._responseExportValues = config.responseExportValues;
    this._retry.internalValue = config.retry;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  private _body = new cdktn.AnyMap(this, "body");
  public get body() {
    return this._body;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktn.AnyMap(this, "output");
  public get output() {
    return this._output;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
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
  private _retry = new EphemeralAzapiDataPlaneResourceRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: EphemeralAzapiDataPlaneResourceRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
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
  private _timeouts = new EphemeralAzapiDataPlaneResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EphemeralAzapiDataPlaneResourceTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      parent_id: cdktn.stringToTerraform(this._parentId),
      response_export_values: cdktn.hashMapper(cdktn.anyToTerraform)(this._responseExportValues),
      retry: ephemeralAzapiDataPlaneResourceRetryToTerraform(this._retry.internalValue),
      type: cdktn.stringToTerraform(this._type),
      timeouts: ephemeralAzapiDataPlaneResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktn.stringToHclTerraform(this._parentId),
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
        value: ephemeralAzapiDataPlaneResourceRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralAzapiDataPlaneResourceRetry",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ephemeralAzapiDataPlaneResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralAzapiDataPlaneResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
