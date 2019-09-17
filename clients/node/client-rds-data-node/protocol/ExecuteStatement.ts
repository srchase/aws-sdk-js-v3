import { HttpRequest, HttpResponse } from "@aws-sdk/types";
import {
  ExecuteStatementRequest,
  ExecuteStatementResponse
} from "../models/com/amazon/rdsdataservice";
import {
  executeStatementAwsRestJson1_1Serialize,
  executeStatementAwsRestJson1_1Deserialize
} from "./AwsRestJson1_1";

export function executeStatementSerializer(
  input: ExecuteStatementRequest,
  protocol: string
): HttpRequest {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return executeStatementAwsRestJson1_1Serialize(input);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

export function executeStatementDeserializer(
  output: HttpResponse,
  protocol: string
): ExecuteStatementResponse {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return executeStatementAwsRestJson1_1Deserialize(output);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}
