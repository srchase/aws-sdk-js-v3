import {
  Handler,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { anyTypeAnnotation } from "@babel/types";

export interface IdentifierBearer {
  DelegationSetId?: string;
  HostedZoneId?: string;
  Id?: string;
}

const IDENTIFIER_PARAMETERS: Array<keyof IdentifierBearer> = [
  "DelegationSetId",
  "HostedZoneId",
  "Id"
];

const IDENTIFIER_PREFIX_PATTERN = /^\/(hostedzone|change|delegationset)\//;

export function route53IdNormalizerMiddleware(): InitializeMiddleware<
  any,
  any
> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const input = { ...(args.input as any) };
    for (const paramName of IDENTIFIER_PARAMETERS) {
      const param = input[paramName];
      if (param) {
        input[paramName] = param.replace(IDENTIFIER_PREFIX_PATTERN, "");
      }
    }
    return next({
      ...args,
      input
    });
  };
}

export const route53IdNormalizerMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["NORMALIZE_ROUTE53_IDS", "ROUT53_IDS"],
  name: "idNormalizerMiddleware"
};

export const getRoute53IdNormalizerPlugin = (): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      route53IdNormalizerMiddleware(),
      route53IdNormalizerMiddlewareOptions
    );
  }
});

export interface Change {
  ResourceRecordSet: {
    AliasTarget?: {
      HostedZoneId: string;
    };
  };
}

export interface ChangeBatchBearer {
  ChangeBatch: {
    Changes: Iterable<Change>;
  };
}

export function route53ChangeBatchAliasTargetIdNormalizerMiddleware(): InitializeMiddleware<
  any,
  any
> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const { ChangeBatch } = args.input;
    const Changes: Array<Change> = [];
    for (const change of ChangeBatch.Changes) {
      const { AliasTarget } = change.ResourceRecordSet;
      if (AliasTarget) {
        Changes.push({
          ...change,
          ResourceRecordSet: {
            ...change.ResourceRecordSet,
            AliasTarget: {
              ...AliasTarget,
              HostedZoneId: AliasTarget.HostedZoneId.replace(
                IDENTIFIER_PREFIX_PATTERN,
                ""
              )
            }
          }
        });
      } else {
        Changes.push(change);
      }
    }

    return next({
      ...args,
      input: {
        ...(args.input as any),
        ChangeBatch: {
          ...ChangeBatch,
          Changes
        }
      }
    });
  };
}

export const route53ChangeBatchAliasTargetIdNormalizerMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["NORMALIZE_ROUTE53_IDS", "ROUT53_IDS"],
  name: "idNormalizerMiddleware"
};

export const getRoute53ChangeBatchAliasTargetIdNormalizerPlugin = (): Pluggable<
  any,
  any
> => ({
  applyToStack: clientStack => {
    clientStack.add(
      route53ChangeBatchAliasTargetIdNormalizerMiddleware(),
      route53ChangeBatchAliasTargetIdNormalizerMiddlewareOptions
    );
  }
});
