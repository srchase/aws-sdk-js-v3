import { Encoder, Hash, StreamHasher } from "@aws-sdk/types";
import { toBase64 } from "@aws-sdk/util-base64-node";
import { Hash as HashNode } from "@aws-sdk/hash-node";

export interface ApplyBodyChecksumInputConfig {
  /**
   *
   */
  headerName?: string;
  /**
   *
   */
  hashCtor?: { new (): Hash };
  /**
   *
   */
  encoder?: Encoder;
  /**
   *
   */
  streamHasher?: StreamHasher<any>;
}
export interface ApplyBodyChecksumResolvedConfig {
  headerName: string;
  hashCtor: { new (): Hash };
  encoder: Encoder;
  streamHasher: StreamHasher<any>;
}
export function resolveApplyBodyChecksumConfig<T>(
  input: T & ApplyBodyChecksumInputConfig
): T & ApplyBodyChecksumResolvedConfig {
  return {
    ...input,
    headerName: input.headerName || "Content-MD5",
    hashCtor: input.hashCtor || HashNode,
    encoder: input.encoder || toBase64,
    streamHasher: input.streamHasher || throwOnStream
  };
}

function throwOnStream(stream: any): never {
  throw new Error(
    `applyBodyChecksumMiddleware encountered a request with a streaming body of type ${Object.prototype.toString.call(
      stream
    )}, but no stream hasher function was provided`
  );
}
