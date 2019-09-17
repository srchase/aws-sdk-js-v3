import { HttpRequest } from "@aws-sdk/types";
import { Field, SqlParameter } from "../models/com/amazon/rdsdataservice";

export function AwsRestJson1_1Finalize(input: any): HttpRequest {
  input.protocol = "https:";
  input.body = JSON.stringify(input.body);
  input.headers = {
    "Content-Type": "application/json"
  };
  return input;
}

export function SqlParameterListAwsRestJson1_1Serialize(
  input: Array<SqlParameter>
): Array<SqlParameter> {
  let list: Array<SqlParameter> = [];
  for (let SqlParameter of input) {
    list.push(SqlParameterAwsRestJson1_1Serialize(SqlParameter));
  }
  return list;
}

export function SqlParameterAwsRestJson1_1Serialize(input: SqlParameter): any {
  return {
    name: input.name,
    value: FieldAwsRestJson1_1Serialize(input.value)
  };
}

export function FieldAwsRestJson1_1Serialize(input: Field): any {
  return input.visit(input, {});
}
