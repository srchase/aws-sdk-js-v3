import { HttpResponse } from "@aws-sdk/types";
import { ExecuteStatementResponse } from "../models/com/amazon/rdsdataservice";
import {
  columnMetadataListAwsRestJson1_1Deserialize,
  generatedFieldsAwsRestJson1_1Deserialize,
  recordsAwsRestJson1_1Deserialize
} from "./AwsRestJson1_1Deserializers";

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

function executeStatementAwsRestJson1_1Deserialize(
  output: HttpResponse
): ExecuteStatementResponse {
  let data: any = {};
  if (output.body) {
    data = JSON.parse(output.body);
  }
  return {
    $namespace: "com.amazon.rdsdataservice",
    $name: "ExecuteStatementResponse",
    records: recordsAwsRestJson1_1Deserialize(data.records),
    columnMetadata: columnMetadataListAwsRestJson1_1Deserialize(
      data.columnMetadata
    ),
    numberOfRecordsUpdated: data.numberOfRecordsUpdated,
    generatedFields: generatedFieldsAwsRestJson1_1Deserialize(
      data.generatedFields
    )
  };
}
