import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  HeaderBag,
  MetadataBearer,
  BuildHandlerOptions,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { ApplyBodyChecksumResolvedConfig } from "./configurations";

export function applyBodyChecksumMiddleware(
  options: ApplyBodyChecksumResolvedConfig
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
    if (!hasHeader(options.headerName, headers)) {
      let digest: Promise<Uint8Array>;

      if (
        body === undefined ||
        typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        isArrayBuffer(body)
      ) {
        const hash = new options.hashCtor();
        hash.update(body || "");
        digest = hash.digest();
      } else {
        digest = options.streamHasher(options.hashCtor, body);
      }

      request = {
        ...request,
        headers: {
          ...headers,
          [options.headerName]: options.encoder(await digest)
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

export const getApplyBodyChecksumPlugin = (
  options: ApplyBodyChecksumResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      applyBodyChecksumMiddleware(options),
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
