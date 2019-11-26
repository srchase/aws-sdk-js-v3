import {
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "../commands/PutEventsCommand";
import {
  Event,
  InvalidInputException,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  SerdeContext,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
} from "@aws-sdk/types";

export function serializeAws_restJson1_1PutEventsCommand(
  input: PutEventsCommandInput,
  context: SerdeContext
): __HttpRequest {
  let headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  let body: any = undefined;
  let bodyParams: any = {};
  if (input.eventList !== undefined) {
    bodyParams['eventList'] = serializeAws_restJson1_1EventList(input.eventList, context);
  }
  if (input.sessionId !== undefined) {
    bodyParams['sessionId'] = input.sessionId;
  }
  if (input.trackingId !== undefined) {
    bodyParams['trackingId'] = input.trackingId;
  }
  if (input.userId !== undefined) {
    bodyParams['userId'] = input.userId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/events",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_restJson1_1PutEventsCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<PutEventsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutEventsCommandError(output, context);
  }
  let data: any = await parseBody(output.body, context)
  let contents: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutEventsCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<./commands/PutEventsCommand/PutEventsCommandOutput> {
  let data: any = await parseBody(output.body, context);
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.events.exceptions#InvalidInputException":
      response = deserializeAws_restJson1_1InvalidInputException(data, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.services.personalize.events#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(response);
}

const serializeAws_restJson1_1Event = (
  input: Event,
  context: SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.eventId !== undefined) {
    bodyParams['eventId'] = input.eventId;
  }
  if (input.eventType !== undefined) {
    bodyParams['eventType'] = input.eventType;
  }
  if (input.properties !== undefined) {
    bodyParams['properties'] = input.properties;
  }
  if (input.sentAt !== undefined) {
    bodyParams['sentAt'] = Math.round(input.sentAt.getTime() / 1000);
  }
  return bodyParams;
}

const serializeAws_restJson1_1EventList = (
  input: Array<Event>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Event(entry, context)
  );
}

const deserializeAws_restJson1_1InvalidInputException = (
  output: any,
  context: SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    $fault: "client",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
