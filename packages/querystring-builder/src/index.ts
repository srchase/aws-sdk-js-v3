import { QueryParameterBag } from "@aws-sdk/types";
import { escapeUri, escapeUriPath } from "@aws-sdk/util-uri-escape";

export function buildQueryString(query: QueryParameterBag): string {
  const parts: string[] = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    if (Array.isArray(value)) {
      for (let i = 0, iLen = value.length; i < iLen; i++) {
        parts.push(`${key}=${value[i]}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${value}`;
      }
      parts.push(qsEntry);
    }
  }

  return parts.join("&");
}
