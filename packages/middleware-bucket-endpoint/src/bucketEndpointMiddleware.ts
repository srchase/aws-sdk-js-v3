import { bucketHostname } from "./bucketHostname";
import { BucketEndpointResolvedConfig } from "./configurations";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export interface BucketEndpointAwareInput {
  Bucket: string;
  $bucketEndpoint?: boolean;
  $forcePathStyle?: boolean;
  $useAccelerateEndpoint?: boolean;
  $useDualstackEndpoint?: boolean;
}

export interface bucketEndpointMiddlewareConfiguration {
  forcePathStyle?: boolean;
  preformedBucketEndpoint?: boolean;
  useAccelerateEndpoint?: boolean;
  useDualstackEndpoint?: boolean;
}

export function bucketEndpointMiddleware(
  options: BucketEndpointResolvedConfig
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const {
      Bucket: bucketName,
      $bucketEndpoint,
      $forcePathStyle = options.forcePathStyle,
      $useAccelerateEndpoint = options.useAccelerateEndpoint,
      $useDualstackEndpoint = options.useDualstackEndpoint
    } = args.input;
    let replaceBucketInPath =
      options.preformedBucketEndpoint || $bucketEndpoint;
    let request = args.request;
    if (HttpRequest.isInstance(request)) {
      if ($bucketEndpoint) {
        request.hostname = bucketName;
      } else if (!options.preformedBucketEndpoint) {
        const { hostname, bucketEndpoint } = bucketHostname({
          bucketName,
          baseHostname: request.hostname,
          accelerateEndpoint: $useAccelerateEndpoint,
          dualstackEndpoint: $useDualstackEndpoint,
          pathStyleEndpoint: $forcePathStyle,
          sslCompatible: request.protocol === "https:"
        });

        request.hostname = hostname;
        replaceBucketInPath = bucketEndpoint;
      }

      if (replaceBucketInPath) {
        request.path = request.path.replace(/^(\/)?[^\/]+/, "");
        if (request.path === "") {
          request.path = "/";
        }
      }
    }

    return next({ ...args, request });
  };
}

export const bucketEndpointMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["BUCKET_ENDPOINT"],
  name: "bucketEndpointMiddleware"
};

export const getBucketEndpointPlugin = (
  options: BucketEndpointResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      bucketEndpointMiddleware(options),
      bucketEndpointMiddlewareOptions
    );
  }
});
