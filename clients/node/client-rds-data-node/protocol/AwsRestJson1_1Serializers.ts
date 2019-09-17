import { HttpRequest } from "@aws-sdk/types";
import { Field, SqlParameter } from "../models/com/amazon/rdsdataservice";

export function awsRestJson1_1Finalize(input: any): HttpRequest {
  input.protocol = "https:";
  input.body = JSON.stringify(input.body);
  input.headers = {
    "Content-Type": "application/json"
  };
  return input;
}

export function sqlParameterListAwsRestJson1_1Serialize(
  input: Array<SqlParameter>
): Array<SqlParameter> {
  let list: Array<SqlParameter> = [];
  for (let SqlParameter of input) {
    list.push(sqlParameterAwsRestJson1_1Serialize(SqlParameter));
  }
  return list;
}

export function sqlParameterAwsRestJson1_1Serialize(input: SqlParameter): any {
  return {
    name: input.name,
    value: fieldAwsRestJson1_1Serialize(input.value)
  };
}

export function fieldAwsRestJson1_1Serialize(input: Field): any {
  return input.visit(input, {});
}
