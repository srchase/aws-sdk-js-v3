import { HttpRequest, HttpResponse } from "@aws-sdk/types";
import {
  ColumnMetadata,
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  Field,
  SqlParameter
} from "../models/com/amazon/rdsdataservice";

export function executeStatementAwsRestJson1_1Serialize(
  input: ExecuteStatementRequest
): HttpRequest {
  let body: any = {};
  if (input.resourceArn) {
    body.resourceArn = input.resourceArn;
  }

  if (input.secretArn) {
    body.secretArn = input.secretArn;
  }

  if (input.sql) {
    body.sql = input.sql;
  }

  if (input.database) {
    body.database = input.database;
  }

  if (input.schema) {
    body.schema = input.schema;
  }

  if (input.parameters) {
    body.parameters = sqlParameterListAwsRestJson1_1Serialize(input.parameters);
  }

  if (input.transactionId) {
    body.transactionId = input.transactionId;
  }

  if (input.includeResultMetadata) {
    body.includeResultMetadata = input.includeResultMetadata;
  }

  if (input.continueAfterTimeout) {
    body.continueAfterTimeout = input.continueAfterTimeout;
  }

  let request = {
    body: body,
    method: "POST",
    path: "/execute"
  };

  return finalize(request);
}

export function executeStatementAwsRestJson1_1Deserialize(
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

function finalize(input: any): HttpRequest {
  input.protocol = "https:";
  input.body = JSON.stringify(input.body);
  input.headers = {
    "Content-Type": "application/json"
  };
  return input;
}

function sqlParameterListAwsRestJson1_1Serialize(
  input: Array<SqlParameter>
): Array<SqlParameter> {
  let list: Array<SqlParameter> = [];
  for (let SqlParameter of input) {
    list.push(sqlParameterAwsRestJson1_1Serialize(SqlParameter));
  }
  return list;
}

function sqlParameterAwsRestJson1_1Serialize(input: SqlParameter): any {
  return {
    name: input.name,
    value: fieldAwsRestJson1_1Serialize(input.value)
  };
}

function fieldAwsRestJson1_1Serialize(input: Field): any {
  return input.visit(input, {});
}

export function columnMetadataAwsRestJson1_1Deserialize(
  input: any
): ColumnMetadata {
  let columnMetadata: any = {
    $namespace: "com.amazon.rdsdataservice",
    $name: "ColumnMetadata"
  };
  if (input.nullable) {
    columnMetadata.nullable = input.nullable;
  }

  if (input.label) {
    columnMetadata.label = input.label;
  }

  if (input.typeName) {
    columnMetadata.typeName = input.typeName;
  }

  if (input.isCaseSensitive) {
    columnMetadata.isCaseSensitive = input.isCaseSensitive;
  }

  if (input.isCurrency) {
    columnMetadata.isCurrency = input.isCurrency;
  }

  if (input.arrayBaseColumnType) {
    columnMetadata.arrayBaseColumnType = input.arrayBaseColumnType;
  }

  if (input.precision) {
    columnMetadata.precision = input.precision;
  }

  if (input.type) {
    columnMetadata.type = input.type;
  }

  if (input.isSigned) {
    columnMetadata.isSigned = input.isSigned;
  }

  if (input.schemeName) {
    columnMetadata.schemeName = input.schemeName;
  }

  if (input.isAutoIncrement) {
    columnMetadata.isAutoIncrement = input.isAutoIncrement;
  }

  if (input.name) {
    columnMetadata.name = input.name;
  }

  if (input.scale) {
    columnMetadata.scale = input.scale;
  }

  if (input.tableName) {
    columnMetadata.tableName = input.tableName;
  }

  return columnMetadata;
}

function columnMetadataListAwsRestJson1_1Deserialize(
  input: any
): Array<ColumnMetadata> {
  let list: Array<ColumnMetadata> = [];
  for (let ColumnMetadata of input) {
    list.push(columnMetadataAwsRestJson1_1Deserialize(ColumnMetadata));
  }
  return list;
}

function fieldAwsRestJson1_1Deserialize(input: any): Field {
  return input.visit(input, {});
}

function generatedFieldsAwsRestJson1_1Deserialize(input: any): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Deserialize(Field));
  }
  return list;
}

function recordsAwsRestJson1_1Deserialize(input: any): Array<Array<Field>> {
  let list: Array<Array<Field>> = [];
  for (let recordsList of input) {
    list.push(recordsListAwsRestJson1_1Deserialize(input));
  }
  return list;
}

function recordsListAwsRestJson1_1Deserialize(input: any): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Serialize(input));
  }
  return list;
}
