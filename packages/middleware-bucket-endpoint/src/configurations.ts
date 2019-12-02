export interface BucketEndpointInputConfig {
  forcePathStyle?: boolean;
  preformedBucketEndpoint?: boolean;
  useAccelerateEndpoint?: boolean;
  useDualstackEndpoint?: boolean;
}

export interface BucketEndpointResolvedConfig {
  forcePathStyle: boolean;
  preformedBucketEndpoint: boolean;
  useAccelerateEndpoint: boolean;
  useDualstackEndpoint: boolean;
}

export function resolveBucketEndpointConfig<T>(
  input: T & BucketEndpointInputConfig
): T & BucketEndpointResolvedConfig {
  const forcePathStyle = input.forcePathStyle ? input.forcePathStyle : false;
  const preformedBucketEndpoint = input.preformedBucketEndpoint
    ? input.preformedBucketEndpoint
    : false;
  const useAccelerateEndpoint = input.useAccelerateEndpoint
    ? input.useAccelerateEndpoint
    : false;
  const useDualstackEndpoint = input.useDualstackEndpoint
    ? input.useDualstackEndpoint
    : false;
  return {
    ...input,
    forcePathStyle,
    preformedBucketEndpoint,
    useAccelerateEndpoint,
    useDualstackEndpoint
  };
}
