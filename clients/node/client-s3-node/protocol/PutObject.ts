import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { PutObjectRequest, PutObjectOutput } from "../models/com/amazonaws/s3";

import {
  putObjectAwsRestXmlSerialize,
  putObjectAwsRestXmlDeserialize
} from "./AwsRestXml";

export function putObjectSerializer(
  input: PutObjectRequest,
  protocol: string
): HttpRequest {
  switch (protocol) {
    case "aws.rest-xml":
      return putObjectAwsRestXmlSerialize(input);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

export function putObjectDeserializer(
  output: HttpResponse,
  protocol: string
): PutObjectOutput {
  switch (protocol) {
    case "aws.rest-xml":
      return putObjectAwsRestXmlDeserialize(output);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}
