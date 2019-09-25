import { HttpRequest, HttpResponse, HeaderBag } from "@aws-sdk/protocol-http";
import { XmlNode, XmlText } from "@aws-sdk/xml-builder";
import {
  GetObjectLockConfigurationOutput,
  ObjectLockConfiguration,
  PutObjectRequest,
  PutObjectOutput,
  PutObjectTaggingRequest,
  PutObjectTaggingOutput,
  Tag,
  Tagging,
  ObjectLockRule,
  DefaultRetention,
  ObjectLockEnabled
} from "../models/com/amazonaws/s3";
import { parse as pixlParse, XMLParseOutput } from "../vendor/pixl-xml";

export function putObjectAwsRestXmlSerialize(
  input: PutObjectRequest
): HttpRequest {
  const request = new HttpRequest({
    method: "PUT"
  });
  let headerBag: HeaderBag = {};

  if (input.Body !== undefined) {
    request.body = input.Body;
  }

  if (input.ObjectLockMode !== undefined) {
    headerBag["x-amz-object-lock-mode"] = input.ObjectLockMode;
  }

  if (input.Tagging !== undefined) {
    headerBag["x-amz-tagging"] = input.Tagging;
  }

  if (input.ContentType !== undefined) {
    headerBag["Content-Type"] = input.ContentType;
  }

  if (input.ObjectLockLegalHoldStatus !== undefined) {
    headerBag["x-amz-object-lock-legal-hold"] = input.ObjectLockLegalHoldStatus;
  }

  if (input.GrantReadACP !== undefined) {
    headerBag["x-amz-grant-read-acp"] = input.GrantReadACP;
  }

  if (input.ContentMD5 !== undefined) {
    headerBag["Content-MD5"] = input.ContentMD5;
  }

  if (input.StorageClass !== undefined) {
    headerBag["x-amz-storage-class"] = input.StorageClass;
  }

  if (input.ContentEncoding !== undefined) {
    headerBag["Content-Encoding"] = input.ContentEncoding;
  }

  if (input.GrantRead !== undefined) {
    headerBag["x-amz-grant-read"] = input.GrantRead;
  }

  if (input.WebsiteRedirectLocation !== undefined) {
    headerBag["x-amz-website-redirect-location"] =
      input.WebsiteRedirectLocation;
  }

  if (input.ACL !== undefined) {
    headerBag["x-amz-acl"] = input.ACL;
  }

  if (input.SSECustomerAlgorithm !== undefined) {
    headerBag["x-amz-server-side-encryption-customer-algorithm"] =
      input.SSECustomerAlgorithm;
  }

  if (input.ContentLength !== undefined) {
    headerBag["Content-Length"] = input.ContentLength;
  }

  if (input.RequestPayer !== undefined) {
    headerBag["x-amz-request-payer"] = input.RequestPayer;
  }

  if (input.Bucket !== undefined) {
    request.hostname = input.Bucket + ".s3.amazonaws.com";
  }

  if (input.Key !== undefined) {
    request.path = input.Key;
  }

  if (input.Metadata !== undefined) {
    headerBag = serializeMetadata(headerBag, input.Metadata);
  }

  if (input.ContentLanguage !== undefined) {
    headerBag["Content-Language"] = input.ContentLanguage;
  }

  if (input.SSEKMSEncryptionContext !== undefined) {
    headerBag["x-amz-server-side-encryption-context"] =
      input.SSEKMSEncryptionContext;
  }

  if (input.SSECustomerKeyMD5 !== undefined) {
    headerBag["x-amz-server-side-encryption-customer-key-MD5"] =
      input.SSECustomerKeyMD5;
  }

  if (input.ObjectLockRetainUntilDate !== undefined) {
    headerBag[
      "x-amz-object-lock-retain-until-date"
    ] = serializeObjectLockRetainUntilDate(input.ObjectLockRetainUntilDate);
  }

  if (input.ServerSideEncryption !== undefined) {
    headerBag["x-amz-server-side-encryption"] = input.ServerSideEncryption;
  }

  if (input.SSECustomerKey !== undefined) {
    headerBag["x-amz-server-side-encryption-customer-key"] =
      input.SSECustomerKey;
  }

  if (input.GrantWriteACP !== undefined) {
    headerBag["x-amz-grant-write-acp"] = input.GrantWriteACP;
  }

  if (input.SSEKMSKeyId !== undefined) {
    headerBag["x-amz-server-side-encryption-aws-kms-key-id"] =
      input.SSEKMSKeyId;
  }

  if (input.GrantFullControl !== undefined) {
    headerBag["x-amz-grant-full-control"] = input.GrantFullControl;
  }

  if (input.CacheControl !== undefined) {
    headerBag["Cache-Control"] = input.CacheControl;
  }

  if (input.ContentDisposition !== undefined) {
    headerBag["Content-Disposition"] = input.ContentDisposition;
  }

  request.headers = headerBag;

  return request;
}

export function putObjectTaggingAwsRestXmlSerialize(
  input: PutObjectTaggingRequest
): HttpRequest {
  const request = new HttpRequest({
    method: "PUT"
  });
  let headerBag: HeaderBag = {};

  if (input.Tagging !== undefined) {
    request.body = serializeTagging(input.Tagging).toString();
  }

  if (input.Bucket !== undefined) {
    request.hostname = input.Bucket + ".s3.amazonaws.com";
  }

  if (input.ContentMD5 !== undefined) {
    headerBag["Content-MD5"] = input.ContentMD5;
  }

  if (input.VersionId !== undefined) {
    headerBag["x-amz-version-id"] = input.VersionId;
  }

  if (input.Key !== undefined) {
    request.path = input.Key;
  }

  request.headers = headerBag;

  return request;
}

export function serializeMetadata(
  headerBag: HeaderBag,
  metadata: { [key: string]: string }
): HeaderBag {
  for (let key in metadata) {
    headerBag[`x-amz-meta-${key}`] = metadata[key];
  }

  return headerBag;
}

export function serializeObjectLockRetainUntilDate(
  objectLockRetainUntilDate: Date
): string {
  return objectLockRetainUntilDate.toString();
}

export function serializeTagging(input: Tagging): XmlNode {
  const tagging = new XmlNode("Tagging");
  const tagset = new XmlNode("TagSet");

  if (input.TagSet !== undefined) {
    for (let tag of input.TagSet) {
      tagset.addChildNode(serializeTag(tag));
    }
    tagging.addChildNode(tagset);
  }
  return tagging;
}

export function serializeTag(input: Tag): XmlNode {
  const tag = new XmlNode("Tag");
  if (input.Key !== undefined && input.Value !== undefined) {
    const key = new XmlNode("Key");
    key.addChildNode(new XmlText(input.Key));
    tag.addChildNode(key);

    const value = new XmlNode("Value");
    value.addChildNode(new XmlText(input.Value));
    tag.addChildNode(value);
  }
  return tag;
}

export function putObjectAwsRestXmlDeserialize(
  input: HttpResponse
): PutObjectOutput {
  return new PutObjectOutput({});
}

export function putObjectTaggingAwsRestXmlDeserialize(
  input: HttpResponse
): PutObjectTaggingOutput {
  return new PutObjectTaggingOutput({
    VersionId: input.headers["x-amz-version-id"]
  });
}

export function getObjectLockConfigurationAwsRestXmlDeserialize(
  input: HttpResponse
): GetObjectLockConfigurationOutput {
  const xmlObj = pixlParse(input.body);
  return new GetObjectLockConfigurationOutput({
    ObjectLockConfiguration: objectLockConfigurationAwsRestXmlDeserialize(
      xmlObj
    )
  });
}

export function objectLockConfigurationAwsRestXmlDeserialize(
  input: any
): ObjectLockConfiguration {
  return new ObjectLockConfiguration({
    Rule: objectLockRuleAwsRestXmlDeserialize(input.Rule),
    ObjectLockEnabled: input.ObjectLockEnabled
  });
}

export function objectLockRuleAwsRestXmlDeserialize(
  input: any
): ObjectLockRule {
  return new ObjectLockRule({
    DefaultRetention: defaultRetentionAwsRestXmlDeserialize(
      input.DefaultRetention
    )
  });
}

export function defaultRetentionAwsRestXmlDeserialize(
  input: any
): DefaultRetention {
  return new DefaultRetention({
    Years: input.Years ? parseInt(input.Years) : undefined,
    Mode: input.Mode,
    Days: input.Days ? parseInt(input.Days) : undefined
  });
}
