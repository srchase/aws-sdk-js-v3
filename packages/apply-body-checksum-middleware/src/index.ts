import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  Encoder,
  Hash,
  HeaderBag,
  StreamHasher,
  MetadataBearer,
  BuildHandlerOptions,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function applyBodyChecksumMiddleware(
  headerName: string,
  hashCtor: { new (): Hash },
  encoder: Encoder,
  streamHasher: StreamHasher<any> = throwOnStream
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = { ...args.request };
    if (!HttpRequest.isInstance(request)) {
      return next({ ...args, request });
    }
    const { body, headers } = request;
    if (!hasHeader(headerName, headers)) {
      let digest: Promise<Uint8Array>;

      if (
        body === undefined ||
        typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        isArrayBuffer(body)
      ) {
        const hash = new hashCtor();
        hash.update(body || "");
        digest = hash.digest();
      } else {
        digest = streamHasher(hashCtor, body);
      }

      request = {
        ...request,
        headers: {
          ...headers,
          [headerName]: encoder(await digest)
        }
      };
    }

    return next({ ...args, request });
  };
}

export const applyBodyChecksumMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["APPLY_BODY_CHECKSUM", "BODY_CHECKSUM"],
  name: "applyBodyChecksumMiddleware"
};

export const getApplyBodyChecksumPlugin = (options: {
  headerName: string;
  hashCtor: { new (): Hash };
  encoder: Encoder;
  streamHasher: StreamHasher<any>;
}): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      applyBodyChecksumMiddleware(
        options.headerName,
        options.hashCtor,
        options.encoder,
        options.streamHasher
      ),
      applyBodyChecksumMiddlewareOptions
    );
  }
});

function hasHeader(soughtHeader: string, headers: HeaderBag): boolean {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }

  return false;
}

function throwOnStream(stream: any): never {
  throw new Error(
    `applyBodyChecksumMiddleware encountered a request with a streaming body of type ${Object.prototype.toString.call(
      stream
    )}, but no stream hasher function was provided`
  );
}
