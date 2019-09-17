import { Field, ColumnMetadata } from "../models/com/amazon/rdsdataservice";
import { fieldAwsRestJson1_1Serialize } from "./AwsRestJson1_1Serializers";

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

export function columnMetadataListAwsRestJson1_1Deserialize(
  input: any
): Array<ColumnMetadata> {
  let list: Array<ColumnMetadata> = [];
  for (let ColumnMetadata of input) {
    list.push(columnMetadataAwsRestJson1_1Deserialize(ColumnMetadata));
  }
  return list;
}

export function fieldAwsRestJson1_1Deserialize(input: any): Field {
  return input.visit(input, {});
}

export function generatedFieldsAwsRestJson1_1Deserialize(
  input: any
): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Deserialize(Field));
  }
  return list;
}

export function recordsAwsRestJson1_1Deserialize(
  input: any
): Array<Array<Field>> {
  let list: Array<Array<Field>> = [];
  for (let recordsList of input) {
    list.push(recordsListAwsRestJson1_1Deserialize(input));
  }
  return list;
}

export function recordsListAwsRestJson1_1Deserialize(input: any): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Serialize(input));
  }
  return list;
}
