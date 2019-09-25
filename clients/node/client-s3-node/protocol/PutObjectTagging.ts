import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  PutObjectTaggingRequest,
  PutObjectTaggingOutput
} from "../models/com/amazonaws/s3";

import {
  putObjectTaggingAwsRestXmlSerialize,
  putObjectTaggingAwsRestXmlDeserialize
} from "./AwsRestXml";

export function putObjectTaggingSerializer(
  input: PutObjectTaggingRequest,
  protocol: string
): HttpRequest {
  switch (protocol) {
    case "aws.rest-xml":
      return putObjectTaggingAwsRestXmlSerialize(input);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

export function putObjectDeserializer(
  output: HttpResponse,
  protocol: string
): PutObjectTaggingOutput {
  switch (protocol) {
    case "aws.rest-xml":
      return putObjectTaggingAwsRestXmlDeserialize(output);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}
