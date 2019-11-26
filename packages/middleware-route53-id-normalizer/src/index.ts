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

export function changeBatchAliasTargetIdNormalizerMiddleware<
  Input extends ChangeBatchBearer,
  Output extends object
>(next: Handler<Input, Output>): Handler<Input, Output> {
  return async (args: HandlerArguments<Input>): Promise<Output> => {
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
