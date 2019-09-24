import {
  SmithyException as $SmithyException,
  SmithyStructure as $SmithyStructure,
  TaggedUnion,
} from "../../../shared/shapeTypes";

export class AbortIncompleteMultipartUpload implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AbortIncompleteMultipartUpload";
  readonly DaysAfterInitiation?: number;
  constructor(args: {
    DaysAfterInitiation?: number;
  }) {
    this.DaysAfterInitiation = args.DaysAfterInitiation;
  }
}

export class AbortMultipartUploadOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AbortMultipartUploadOutput";
  readonly RequestCharged?: RequestCharged | string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
  }) {
    this.RequestCharged = args.RequestCharged;
  }
}

export class AbortMultipartUploadRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AbortMultipartUploadRequest";
  readonly Key: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly UploadId: string | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    Key: string | undefined;
    RequestPayer?: RequestPayer | string;
    UploadId: string | undefined;
    Bucket: string | undefined;
  }) {
    this.Key = args.Key;
    this.RequestPayer = args.RequestPayer;
    this.UploadId = args.UploadId;
    this.Bucket = args.Bucket;
  }
}

export class AccelerateConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AccelerateConfiguration";
  readonly Status?: BucketAccelerateStatus | string;
  constructor(args: {
    Status?: BucketAccelerateStatus | string;
  }) {
    this.Status = args.Status;
  }
}

export class AccessControlPolicy implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AccessControlPolicy";
  readonly Owner?: Owner;
  readonly Grants?: Array<Grant>;
  constructor(args: {
    Owner?: Owner;
    Grants?: Array<Grant>;
  }) {
    this.Owner = args.Owner;
    this.Grants = args.Grants;
  }
}

export class AccessControlTranslation implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AccessControlTranslation";
  readonly Owner: OwnerOverride | string | undefined;
  constructor(args: {
    Owner: OwnerOverride | string | undefined;
  }) {
    this.Owner = args.Owner;
  }
}

export class AnalyticsAndOperator implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AnalyticsAndOperator";
  readonly Prefix?: string;
  readonly Tags?: Array<Tag>;
  constructor(args: {
    Prefix?: string;
    Tags?: Array<Tag>;
  }) {
    this.Prefix = args.Prefix;
    this.Tags = args.Tags;
  }
}

export class AnalyticsConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AnalyticsConfiguration";
  readonly Id: string | undefined;
  readonly StorageClassAnalysis: StorageClassAnalysis | undefined;
  readonly Filter?: AnalyticsFilter;
  constructor(args: {
    Id: string | undefined;
    StorageClassAnalysis: StorageClassAnalysis | undefined;
    Filter?: AnalyticsFilter;
  }) {
    this.Id = args.Id;
    this.StorageClassAnalysis = args.StorageClassAnalysis;
    this.Filter = args.Filter;
  }
}

export class AnalyticsExportDestination implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AnalyticsExportDestination";
  readonly S3BucketDestination: AnalyticsS3BucketDestination | undefined;
  constructor(args: {
    S3BucketDestination: AnalyticsS3BucketDestination | undefined;
  }) {
    this.S3BucketDestination = args.S3BucketDestination;
  }
}

export class AnalyticsFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AnalyticsFilter";
  readonly Prefix?: string;
  readonly Tag?: Tag;
  readonly And?: AnalyticsAndOperator;
  constructor(args: {
    Prefix?: string;
    Tag?: Tag;
    And?: AnalyticsAndOperator;
  }) {
    this.Prefix = args.Prefix;
    this.Tag = args.Tag;
    this.And = args.And;
  }
}

export class AnalyticsS3BucketDestination implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#AnalyticsS3BucketDestination";
  readonly BucketAccountId?: string;
  readonly Bucket: string | undefined;
  readonly Prefix?: string;
  readonly Format: AnalyticsS3ExportFileFormat | string | undefined;
  constructor(args: {
    BucketAccountId?: string;
    Bucket: string | undefined;
    Prefix?: string;
    Format: AnalyticsS3ExportFileFormat | string | undefined;
  }) {
    this.BucketAccountId = args.BucketAccountId;
    this.Bucket = args.Bucket;
    this.Prefix = args.Prefix;
    this.Format = args.Format;
  }
}

export type AnalyticsS3ExportFileFormat = "CSV"

export class Bucket implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Bucket";
  readonly Name?: string;
  readonly CreationDate?: Date;
  constructor(args: {
    Name?: string;
    CreationDate?: Date;
  }) {
    this.Name = args.Name;
    this.CreationDate = args.CreationDate;
  }
}

export type BucketAccelerateStatus = "Enabled" | "Suspended"

export class BucketAlreadyExists extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#BucketAlreadyExists",
      name: "BucketAlreadyExists",
      fault: "client",
      service: args.$service,
    });
  }
}

export class BucketAlreadyOwnedByYou extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#BucketAlreadyOwnedByYou",
      name: "BucketAlreadyOwnedByYou",
      fault: "client",
      service: args.$service,
    });
  }
}

export type BucketCannedACL = "private" | "public-read" | "public-read-write" | "authenticated-read"

export class BucketLifecycleConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#BucketLifecycleConfiguration";
  readonly Rules: Array<LifecycleRule> | undefined;
  constructor(args: {
    Rules: Array<LifecycleRule> | undefined;
  }) {
    this.Rules = args.Rules;
  }
}

export type BucketLocationConstraint = "EU" | "eu-west-1" | "us-west-1" | "us-west-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "sa-east-1" | "cn-north-1" | "eu-central-1"

export class BucketLoggingStatus implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#BucketLoggingStatus";
  readonly LoggingEnabled?: LoggingEnabled;
  constructor(args: {
    LoggingEnabled?: LoggingEnabled;
  }) {
    this.LoggingEnabled = args.LoggingEnabled;
  }
}

export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE"

export type BucketVersioningStatus = "Enabled" | "Suspended"

export class CORSConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CORSConfiguration";
  readonly CORSRules: Array<CORSRule> | undefined;
  constructor(args: {
    CORSRules: Array<CORSRule> | undefined;
  }) {
    this.CORSRules = args.CORSRules;
  }
}

export class CORSRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CORSRule";
  readonly MaxAgeSeconds?: number;
  readonly AllowedMethods: Array<string> | undefined;
  readonly AllowedOrigins: Array<string> | undefined;
  readonly AllowedHeaders?: Array<string>;
  readonly ExposeHeaders?: Array<string>;
  constructor(args: {
    MaxAgeSeconds?: number;
    AllowedMethods: Array<string> | undefined;
    AllowedOrigins: Array<string> | undefined;
    AllowedHeaders?: Array<string>;
    ExposeHeaders?: Array<string>;
  }) {
    this.MaxAgeSeconds = args.MaxAgeSeconds;
    this.AllowedMethods = args.AllowedMethods;
    this.AllowedOrigins = args.AllowedOrigins;
    this.AllowedHeaders = args.AllowedHeaders;
    this.ExposeHeaders = args.ExposeHeaders;
  }
}

export class CSVInput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CSVInput";
  readonly QuoteCharacter?: string;
  readonly FieldDelimiter?: string;
  readonly FileHeaderInfo?: FileHeaderInfo | string;
  readonly RecordDelimiter?: string;
  readonly QuoteEscapeCharacter?: string;
  readonly AllowQuotedRecordDelimiter?: boolean;
  readonly Comments?: string;
  constructor(args: {
    QuoteCharacter?: string;
    FieldDelimiter?: string;
    FileHeaderInfo?: FileHeaderInfo | string;
    RecordDelimiter?: string;
    QuoteEscapeCharacter?: string;
    AllowQuotedRecordDelimiter?: boolean;
    Comments?: string;
  }) {
    this.QuoteCharacter = args.QuoteCharacter;
    this.FieldDelimiter = args.FieldDelimiter;
    this.FileHeaderInfo = args.FileHeaderInfo;
    this.RecordDelimiter = args.RecordDelimiter;
    this.QuoteEscapeCharacter = args.QuoteEscapeCharacter;
    this.AllowQuotedRecordDelimiter = args.AllowQuotedRecordDelimiter;
    this.Comments = args.Comments;
  }
}

export class CSVOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CSVOutput";
  readonly QuoteCharacter?: string;
  readonly FieldDelimiter?: string;
  readonly QuoteFields?: QuoteFields | string;
  readonly QuoteEscapeCharacter?: string;
  readonly RecordDelimiter?: string;
  constructor(args: {
    QuoteCharacter?: string;
    FieldDelimiter?: string;
    QuoteFields?: QuoteFields | string;
    QuoteEscapeCharacter?: string;
    RecordDelimiter?: string;
  }) {
    this.QuoteCharacter = args.QuoteCharacter;
    this.FieldDelimiter = args.FieldDelimiter;
    this.QuoteFields = args.QuoteFields;
    this.QuoteEscapeCharacter = args.QuoteEscapeCharacter;
    this.RecordDelimiter = args.RecordDelimiter;
  }
}

export class CloudFunctionConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CloudFunctionConfiguration";
  readonly InvocationRole?: string;
  readonly CloudFunction?: string;
  readonly Event?: Event | string;
  readonly Id?: string;
  readonly Events?: Array<Event | string>;
  constructor(args: {
    InvocationRole?: string;
    CloudFunction?: string;
    Event?: Event | string;
    Id?: string;
    Events?: Array<Event | string>;
  }) {
    this.InvocationRole = args.InvocationRole;
    this.CloudFunction = args.CloudFunction;
    this.Event = args.Event;
    this.Id = args.Id;
    this.Events = args.Events;
  }
}

export class CommonPrefix implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CommonPrefix";
  readonly Prefix?: string;
  constructor(args: {
    Prefix?: string;
  }) {
    this.Prefix = args.Prefix;
  }
}

export class CompleteMultipartUploadOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CompleteMultipartUploadOutput";
  readonly ETag?: string;
  readonly Key?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly RequestCharged?: RequestCharged | string;
  readonly SSEKMSKeyId?: string;
  readonly VersionId?: string;
  readonly Location?: string;
  readonly Bucket?: string;
  readonly Expiration?: string;
  constructor(args: {
    ETag?: string;
    Key?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    RequestCharged?: RequestCharged | string;
    SSEKMSKeyId?: string;
    VersionId?: string;
    Location?: string;
    Bucket?: string;
    Expiration?: string;
  }) {
    this.ETag = args.ETag;
    this.Key = args.Key;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.RequestCharged = args.RequestCharged;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.VersionId = args.VersionId;
    this.Location = args.Location;
    this.Bucket = args.Bucket;
    this.Expiration = args.Expiration;
  }
}

export class CompleteMultipartUploadRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CompleteMultipartUploadRequest";
  readonly UploadId: string | undefined;
  readonly Bucket: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly Key: string | undefined;
  readonly MultipartUpload?: CompletedMultipartUpload;
  constructor(args: {
    UploadId: string | undefined;
    Bucket: string | undefined;
    RequestPayer?: RequestPayer | string;
    Key: string | undefined;
    MultipartUpload?: CompletedMultipartUpload;
  }) {
    this.UploadId = args.UploadId;
    this.Bucket = args.Bucket;
    this.RequestPayer = args.RequestPayer;
    this.Key = args.Key;
    this.MultipartUpload = args.MultipartUpload;
  }
}

export class CompletedMultipartUpload implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CompletedMultipartUpload";
  readonly Parts?: Array<CompletedPart>;
  constructor(args: {
    Parts?: Array<CompletedPart>;
  }) {
    this.Parts = args.Parts;
  }
}

export class CompletedPart implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CompletedPart";
  readonly PartNumber?: string;
  readonly ETag?: string;
  constructor(args: {
    PartNumber?: string;
    ETag?: string;
  }) {
    this.PartNumber = args.PartNumber;
    this.ETag = args.ETag;
  }
}

export type CompressionType = "NONE" | "GZIP" | "BZIP2"

export class Condition implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Condition";
  readonly KeyPrefixEquals?: string;
  readonly HttpErrorCodeReturnedEquals?: string;
  constructor(args: {
    KeyPrefixEquals?: string;
    HttpErrorCodeReturnedEquals?: string;
  }) {
    this.KeyPrefixEquals = args.KeyPrefixEquals;
    this.HttpErrorCodeReturnedEquals = args.HttpErrorCodeReturnedEquals;
  }
}

export class ContinuationEvent implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ContinuationEvent";
  constructor(args?: {}) {}
}

export class CopyObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CopyObjectOutput";
  readonly VersionId?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly RequestCharged?: RequestCharged | string;
  readonly SSEKMSKeyId?: string;
  readonly SSEKMSEncryptionContext?: string;
  readonly Expiration?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly CopyObjectResult?: CopyObjectResult;
  readonly SSECustomerAlgorithm?: string;
  readonly CopySourceVersionId?: string;
  constructor(args: {
    VersionId?: string;
    SSECustomerKeyMD5?: string;
    RequestCharged?: RequestCharged | string;
    SSEKMSKeyId?: string;
    SSEKMSEncryptionContext?: string;
    Expiration?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    CopyObjectResult?: CopyObjectResult;
    SSECustomerAlgorithm?: string;
    CopySourceVersionId?: string;
  }) {
    this.VersionId = args.VersionId;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.RequestCharged = args.RequestCharged;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.Expiration = args.Expiration;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.CopyObjectResult = args.CopyObjectResult;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.CopySourceVersionId = args.CopySourceVersionId;
  }
}

export class CopyObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CopyObjectRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly ContentType?: string;
  readonly ContentDisposition?: string;
  readonly Tagging?: string;
  readonly WebsiteRedirectLocation?: string;
  readonly CopySourceIfUnmodifiedSince?: string;
  readonly CopySourceSSECustomerAlgorithm?: string;
  readonly GrantReadACP?: string;
  readonly CopySourceSSECustomerKey?: string;
  readonly TaggingDirective?: TaggingDirective | string;
  readonly CopySourceIfModifiedSince?: string;
  readonly ACL?: ObjectCannedACL | string;
  readonly CopySourceIfMatch?: string;
  readonly ContentEncoding?: string;
  readonly ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  readonly StorageClass?: StorageClass | string;
  readonly ContentLanguage?: string;
  readonly GrantRead?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly SSECustomerAlgorithm?: string;
  readonly Metadata?: { [key: string]: string };
  readonly CopySourceSSECustomerKeyMD5?: string;
  readonly MetadataDirective?: MetadataDirective | string;
  readonly SSECustomerKey?: string;
  readonly ObjectLockRetainUntilDate?: Date;
  readonly GrantWriteACP?: string;
  readonly CopySourceIfNoneMatch?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly CopySource: string | undefined;
  readonly Expires?: string;
  readonly SSEKMSKeyId?: string;
  readonly CacheControl?: string;
  readonly GrantFullControl?: string;
  readonly Key: string | undefined;
  readonly SSEKMSEncryptionContext?: string;
  readonly ObjectLockMode?: ObjectLockMode | string;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    ContentType?: string;
    ContentDisposition?: string;
    Tagging?: string;
    WebsiteRedirectLocation?: string;
    CopySourceIfUnmodifiedSince?: string;
    CopySourceSSECustomerAlgorithm?: string;
    GrantReadACP?: string;
    CopySourceSSECustomerKey?: string;
    TaggingDirective?: TaggingDirective | string;
    CopySourceIfModifiedSince?: string;
    ACL?: ObjectCannedACL | string;
    CopySourceIfMatch?: string;
    ContentEncoding?: string;
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
    StorageClass?: StorageClass | string;
    ContentLanguage?: string;
    GrantRead?: string;
    SSECustomerKeyMD5?: string;
    SSECustomerAlgorithm?: string;
    Metadata?: { [key: string]: string };
    CopySourceSSECustomerKeyMD5?: string;
    MetadataDirective?: MetadataDirective | string;
    SSECustomerKey?: string;
    ObjectLockRetainUntilDate?: Date;
    GrantWriteACP?: string;
    CopySourceIfNoneMatch?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    CopySource: string | undefined;
    Expires?: string;
    SSEKMSKeyId?: string;
    CacheControl?: string;
    GrantFullControl?: string;
    Key: string | undefined;
    SSEKMSEncryptionContext?: string;
    ObjectLockMode?: ObjectLockMode | string;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.ContentType = args.ContentType;
    this.ContentDisposition = args.ContentDisposition;
    this.Tagging = args.Tagging;
    this.WebsiteRedirectLocation = args.WebsiteRedirectLocation;
    this.CopySourceIfUnmodifiedSince = args.CopySourceIfUnmodifiedSince;
    this.CopySourceSSECustomerAlgorithm = args.CopySourceSSECustomerAlgorithm;
    this.GrantReadACP = args.GrantReadACP;
    this.CopySourceSSECustomerKey = args.CopySourceSSECustomerKey;
    this.TaggingDirective = args.TaggingDirective;
    this.CopySourceIfModifiedSince = args.CopySourceIfModifiedSince;
    this.ACL = args.ACL;
    this.CopySourceIfMatch = args.CopySourceIfMatch;
    this.ContentEncoding = args.ContentEncoding;
    this.ObjectLockLegalHoldStatus = args.ObjectLockLegalHoldStatus;
    this.StorageClass = args.StorageClass;
    this.ContentLanguage = args.ContentLanguage;
    this.GrantRead = args.GrantRead;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.Metadata = args.Metadata;
    this.CopySourceSSECustomerKeyMD5 = args.CopySourceSSECustomerKeyMD5;
    this.MetadataDirective = args.MetadataDirective;
    this.SSECustomerKey = args.SSECustomerKey;
    this.ObjectLockRetainUntilDate = args.ObjectLockRetainUntilDate;
    this.GrantWriteACP = args.GrantWriteACP;
    this.CopySourceIfNoneMatch = args.CopySourceIfNoneMatch;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.CopySource = args.CopySource;
    this.Expires = args.Expires;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.CacheControl = args.CacheControl;
    this.GrantFullControl = args.GrantFullControl;
    this.Key = args.Key;
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.ObjectLockMode = args.ObjectLockMode;
  }
}

export class CopyObjectResult implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CopyObjectResult";
  readonly ETag?: string;
  readonly LastModified?: string;
  constructor(args: {
    ETag?: string;
    LastModified?: string;
  }) {
    this.ETag = args.ETag;
    this.LastModified = args.LastModified;
  }
}

export class CopyPartResult implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CopyPartResult";
  readonly LastModified?: string;
  readonly ETag?: string;
  constructor(args: {
    LastModified?: string;
    ETag?: string;
  }) {
    this.LastModified = args.LastModified;
    this.ETag = args.ETag;
  }
}

export class CreateBucketConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CreateBucketConfiguration";
  readonly LocationConstraint?: BucketLocationConstraint | string;
  constructor(args: {
    LocationConstraint?: BucketLocationConstraint | string;
  }) {
    this.LocationConstraint = args.LocationConstraint;
  }
}

export class CreateBucketOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CreateBucketOutput";
  readonly Location?: string;
  constructor(args: {
    Location?: string;
  }) {
    this.Location = args.Location;
  }
}

export class CreateBucketRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CreateBucketRequest";
  readonly CreateBucketConfiguration?: CreateBucketConfiguration;
  readonly GrantFullControl?: string;
  readonly GrantReadACP?: string;
  readonly Bucket: string | undefined;
  readonly GrantRead?: string;
  readonly GrantWriteACP?: string;
  readonly GrantWrite?: string;
  readonly ObjectLockEnabledForBucket?: boolean;
  readonly ACL?: BucketCannedACL | string;
  constructor(args: {
    CreateBucketConfiguration?: CreateBucketConfiguration;
    GrantFullControl?: string;
    GrantReadACP?: string;
    Bucket: string | undefined;
    GrantRead?: string;
    GrantWriteACP?: string;
    GrantWrite?: string;
    ObjectLockEnabledForBucket?: boolean;
    ACL?: BucketCannedACL | string;
  }) {
    this.CreateBucketConfiguration = args.CreateBucketConfiguration;
    this.GrantFullControl = args.GrantFullControl;
    this.GrantReadACP = args.GrantReadACP;
    this.Bucket = args.Bucket;
    this.GrantRead = args.GrantRead;
    this.GrantWriteACP = args.GrantWriteACP;
    this.GrantWrite = args.GrantWrite;
    this.ObjectLockEnabledForBucket = args.ObjectLockEnabledForBucket;
    this.ACL = args.ACL;
  }
}

export class CreateMultipartUploadOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CreateMultipartUploadOutput";
  readonly UploadId?: string;
  readonly AbortDate?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly RequestCharged?: RequestCharged | string;
  readonly Key?: string;
  readonly SSEKMSKeyId?: string;
  readonly SSECustomerAlgorithm?: string;
  readonly SSEKMSEncryptionContext?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly Bucket?: string;
  readonly AbortRuleId?: string;
  constructor(args: {
    UploadId?: string;
    AbortDate?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    RequestCharged?: RequestCharged | string;
    Key?: string;
    SSEKMSKeyId?: string;
    SSECustomerAlgorithm?: string;
    SSEKMSEncryptionContext?: string;
    SSECustomerKeyMD5?: string;
    Bucket?: string;
    AbortRuleId?: string;
  }) {
    this.UploadId = args.UploadId;
    this.AbortDate = args.AbortDate;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.RequestCharged = args.RequestCharged;
    this.Key = args.Key;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.Bucket = args.Bucket;
    this.AbortRuleId = args.AbortRuleId;
  }
}

export class CreateMultipartUploadRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#CreateMultipartUploadRequest";
  readonly SSECustomerKey?: string;
  readonly GrantReadACP?: string;
  readonly ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  readonly ObjectLockMode?: ObjectLockMode | string;
  readonly ContentEncoding?: string;
  readonly ContentType?: string;
  readonly SSEKMSEncryptionContext?: string;
  readonly Key: string | undefined;
  readonly ContentDisposition?: string;
  readonly Expires?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly GrantFullControl?: string;
  readonly StorageClass?: StorageClass | string;
  readonly CacheControl?: string;
  readonly SSEKMSKeyId?: string;
  readonly ObjectLockRetainUntilDate?: Date;
  readonly ContentLanguage?: string;
  readonly GrantWriteACP?: string;
  readonly GrantRead?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly Metadata?: { [key: string]: string };
  readonly SSECustomerAlgorithm?: string;
  readonly Bucket: string | undefined;
  readonly WebsiteRedirectLocation?: string;
  readonly ACL?: ObjectCannedACL | string;
  readonly Tagging?: string;
  readonly SSECustomerKeyMD5?: string;
  constructor(args: {
    SSECustomerKey?: string;
    GrantReadACP?: string;
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
    ObjectLockMode?: ObjectLockMode | string;
    ContentEncoding?: string;
    ContentType?: string;
    SSEKMSEncryptionContext?: string;
    Key: string | undefined;
    ContentDisposition?: string;
    Expires?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    GrantFullControl?: string;
    StorageClass?: StorageClass | string;
    CacheControl?: string;
    SSEKMSKeyId?: string;
    ObjectLockRetainUntilDate?: Date;
    ContentLanguage?: string;
    GrantWriteACP?: string;
    GrantRead?: string;
    RequestPayer?: RequestPayer | string;
    Metadata?: { [key: string]: string };
    SSECustomerAlgorithm?: string;
    Bucket: string | undefined;
    WebsiteRedirectLocation?: string;
    ACL?: ObjectCannedACL | string;
    Tagging?: string;
    SSECustomerKeyMD5?: string;
  }) {
    this.SSECustomerKey = args.SSECustomerKey;
    this.GrantReadACP = args.GrantReadACP;
    this.ObjectLockLegalHoldStatus = args.ObjectLockLegalHoldStatus;
    this.ObjectLockMode = args.ObjectLockMode;
    this.ContentEncoding = args.ContentEncoding;
    this.ContentType = args.ContentType;
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.Key = args.Key;
    this.ContentDisposition = args.ContentDisposition;
    this.Expires = args.Expires;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.GrantFullControl = args.GrantFullControl;
    this.StorageClass = args.StorageClass;
    this.CacheControl = args.CacheControl;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.ObjectLockRetainUntilDate = args.ObjectLockRetainUntilDate;
    this.ContentLanguage = args.ContentLanguage;
    this.GrantWriteACP = args.GrantWriteACP;
    this.GrantRead = args.GrantRead;
    this.RequestPayer = args.RequestPayer;
    this.Metadata = args.Metadata;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.Bucket = args.Bucket;
    this.WebsiteRedirectLocation = args.WebsiteRedirectLocation;
    this.ACL = args.ACL;
    this.Tagging = args.Tagging;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
  }
}

export class DefaultRetention implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DefaultRetention";
  readonly Years?: number;
  readonly Mode?: ObjectLockRetentionMode | string;
  readonly Days?: number;
  constructor(args: {
    Years?: number;
    Mode?: ObjectLockRetentionMode | string;
    Days?: number;
  }) {
    this.Years = args.Years;
    this.Mode = args.Mode;
    this.Days = args.Days;
  }
}

export class Delete implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Delete";
  readonly Quiet?: boolean;
  readonly Objects: Array<ObjectIdentifier> | undefined;
  constructor(args: {
    Quiet?: boolean;
    Objects: Array<ObjectIdentifier> | undefined;
  }) {
    this.Quiet = args.Quiet;
    this.Objects = args.Objects;
  }
}

export class DeleteBucketAnalyticsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketAnalyticsConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly Id: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Id: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Id = args.Id;
  }
}

export class DeleteBucketCorsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketCorsRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketEncryptionRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketEncryptionRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketInventoryConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketInventoryConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly Id: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Id: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Id = args.Id;
  }
}

export class DeleteBucketLifecycleRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketLifecycleRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketMetricsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketMetricsConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly Id: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Id: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Id = args.Id;
  }
}

export class DeleteBucketPolicyRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketPolicyRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketReplicationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketReplicationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketTaggingRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteBucketWebsiteRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteBucketWebsiteRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeleteMarkerEntry implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteMarkerEntry";
  readonly LastModified?: string;
  readonly VersionId?: string;
  readonly Owner?: Owner;
  readonly Key?: string;
  readonly IsLatest?: boolean;
  constructor(args: {
    LastModified?: string;
    VersionId?: string;
    Owner?: Owner;
    Key?: string;
    IsLatest?: boolean;
  }) {
    this.LastModified = args.LastModified;
    this.VersionId = args.VersionId;
    this.Owner = args.Owner;
    this.Key = args.Key;
    this.IsLatest = args.IsLatest;
  }
}

export class DeleteMarkerReplication implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteMarkerReplication";
  readonly Status?: DeleteMarkerReplicationStatus | string;
  constructor(args: {
    Status?: DeleteMarkerReplicationStatus | string;
  }) {
    this.Status = args.Status;
  }
}

export type DeleteMarkerReplicationStatus = "Enabled" | "Disabled"

export class DeleteObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly VersionId?: string;
  readonly DeleteMarker?: string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    VersionId?: string;
    DeleteMarker?: string;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.VersionId = args.VersionId;
    this.DeleteMarker = args.DeleteMarker;
  }
}

export class DeleteObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly MFA?: string;
  readonly BypassGovernanceRetention?: boolean;
  readonly Key: string | undefined;
  readonly VersionId?: string;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    MFA?: string;
    BypassGovernanceRetention?: boolean;
    Key: string | undefined;
    VersionId?: string;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.MFA = args.MFA;
    this.BypassGovernanceRetention = args.BypassGovernanceRetention;
    this.Key = args.Key;
    this.VersionId = args.VersionId;
  }
}

export class DeleteObjectTaggingOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectTaggingOutput";
  readonly VersionId?: string;
  constructor(args: {
    VersionId?: string;
  }) {
    this.VersionId = args.VersionId;
  }
}

export class DeleteObjectTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectTaggingRequest";
  readonly VersionId?: string;
  readonly Key: string | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    VersionId?: string;
    Key: string | undefined;
    Bucket: string | undefined;
  }) {
    this.VersionId = args.VersionId;
    this.Key = args.Key;
    this.Bucket = args.Bucket;
  }
}

export class DeleteObjectsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectsOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly Deleted?: Array<DeletedObject>;
  readonly Errors?: Array<Error>;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    Deleted?: Array<DeletedObject>;
    Errors?: Array<Error>;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.Deleted = args.Deleted;
    this.Errors = args.Errors;
  }
}

export class DeleteObjectsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeleteObjectsRequest";
  readonly BypassGovernanceRetention?: boolean;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly MFA?: string;
  readonly Delete: Delete | undefined;
  constructor(args: {
    BypassGovernanceRetention?: boolean;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    MFA?: string;
    Delete: Delete | undefined;
  }) {
    this.BypassGovernanceRetention = args.BypassGovernanceRetention;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.MFA = args.MFA;
    this.Delete = args.Delete;
  }
}

export class DeletePublicAccessBlockRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeletePublicAccessBlockRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class DeletedObject implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#DeletedObject";
  readonly DeleteMarkerVersionId?: string;
  readonly Key?: string;
  readonly VersionId?: string;
  readonly DeleteMarker?: string;
  constructor(args: {
    DeleteMarkerVersionId?: string;
    Key?: string;
    VersionId?: string;
    DeleteMarker?: string;
  }) {
    this.DeleteMarkerVersionId = args.DeleteMarkerVersionId;
    this.Key = args.Key;
    this.VersionId = args.VersionId;
    this.DeleteMarker = args.DeleteMarker;
  }
}

export class Destination implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Destination";
  readonly StorageClass?: StorageClass | string;
  readonly ReplicationObjective?: ReplicationObjective;
  readonly Bucket: string | undefined;
  readonly AccessControlTranslation?: AccessControlTranslation;
  readonly Account?: string;
  readonly EncryptionConfiguration?: EncryptionConfiguration;
  readonly Metrics?: Metrics;
  constructor(args: {
    StorageClass?: StorageClass | string;
    ReplicationObjective?: ReplicationObjective;
    Bucket: string | undefined;
    AccessControlTranslation?: AccessControlTranslation;
    Account?: string;
    EncryptionConfiguration?: EncryptionConfiguration;
    Metrics?: Metrics;
  }) {
    this.StorageClass = args.StorageClass;
    this.ReplicationObjective = args.ReplicationObjective;
    this.Bucket = args.Bucket;
    this.AccessControlTranslation = args.AccessControlTranslation;
    this.Account = args.Account;
    this.EncryptionConfiguration = args.EncryptionConfiguration;
    this.Metrics = args.Metrics;
  }
}

export type EncodingType = "url"

export class Encryption implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Encryption";
  readonly KMSContext?: string;
  readonly KMSKeyId?: string;
  readonly EncryptionType: ServerSideEncryption | string | undefined;
  constructor(args: {
    KMSContext?: string;
    KMSKeyId?: string;
    EncryptionType: ServerSideEncryption | string | undefined;
  }) {
    this.KMSContext = args.KMSContext;
    this.KMSKeyId = args.KMSKeyId;
    this.EncryptionType = args.EncryptionType;
  }
}

export class EncryptionConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#EncryptionConfiguration";
  readonly ReplicaKmsKeyID?: string;
  constructor(args: {
    ReplicaKmsKeyID?: string;
  }) {
    this.ReplicaKmsKeyID = args.ReplicaKmsKeyID;
  }
}

export class EndEvent implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#EndEvent";
  constructor(args?: {}) {}
}

export class Error implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Error";
  readonly VersionId?: string;
  readonly Code?: string;
  readonly Message?: string;
  readonly Key?: string;
  constructor(args: {
    VersionId?: string;
    Code?: string;
    Message?: string;
    Key?: string;
  }) {
    this.VersionId = args.VersionId;
    this.Code = args.Code;
    this.Message = args.Message;
    this.Key = args.Key;
  }
}

export class ErrorDocument implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ErrorDocument";
  readonly Key: string | undefined;
  constructor(args: {
    Key: string | undefined;
  }) {
    this.Key = args.Key;
  }
}

export type Event = "s3:ReducedRedundancyLostObject" | "s3:ObjectCreated:*" | "s3:ObjectCreated:Put" | "s3:ObjectCreated:Post" | "s3:ObjectCreated:Copy" | "s3:ObjectCreated:CompleteMultipartUpload" | "s3:ObjectRemoved:*" | "s3:ObjectRemoved:Delete" | "s3:ObjectRemoved:DeleteMarkerCreated" | "s3:ObjectRestore:Post" | "s3:ObjectRestore:Completed"

export class ExistingObjectReplication implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ExistingObjectReplication";
  readonly Status: ExistingObjectReplicationStatus | string | undefined;
  constructor(args: {
    Status: ExistingObjectReplicationStatus | string | undefined;
  }) {
    this.Status = args.Status;
  }
}

export type ExistingObjectReplicationStatus = "Enabled" | "Disabled"

export type ExpirationStatus = "Enabled" | "Disabled"

export enum ExpressionType {
  SQL = "SQL",
};

export enum FileHeaderInfo {
  USE = "USE",
  IGNORE = "IGNORE",
  NONE = "NONE",
};

export class FilterRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#FilterRule";
  readonly Name?: FilterRuleName | string;
  readonly Value?: string;
  constructor(args: {
    Name?: FilterRuleName | string;
    Value?: string;
  }) {
    this.Name = args.Name;
    this.Value = args.Value;
  }
}

export type FilterRuleName = "prefix" | "suffix"

export class GetBucketAccelerateConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAccelerateConfigurationOutput";
  readonly Status?: BucketAccelerateStatus | string;
  constructor(args: {
    Status?: BucketAccelerateStatus | string;
  }) {
    this.Status = args.Status;
  }
}

export class GetBucketAccelerateConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAccelerateConfigurationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketAclOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAclOutput";
  readonly Owner?: Owner;
  readonly Grants?: Array<Grant>;
  constructor(args: {
    Owner?: Owner;
    Grants?: Array<Grant>;
  }) {
    this.Owner = args.Owner;
    this.Grants = args.Grants;
  }
}

export class GetBucketAclRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAclRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketAnalyticsConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAnalyticsConfigurationOutput";
  readonly AnalyticsConfiguration?: AnalyticsConfiguration;
  constructor(args: {
    AnalyticsConfiguration?: AnalyticsConfiguration;
  }) {
    this.AnalyticsConfiguration = args.AnalyticsConfiguration;
  }
}

export class GetBucketAnalyticsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketAnalyticsConfigurationRequest";
  readonly Id: string | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    Id: string | undefined;
    Bucket: string | undefined;
  }) {
    this.Id = args.Id;
    this.Bucket = args.Bucket;
  }
}

export class GetBucketCorsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketCorsOutput";
  readonly CORSRules?: Array<CORSRule>;
  constructor(args: {
    CORSRules?: Array<CORSRule>;
  }) {
    this.CORSRules = args.CORSRules;
  }
}

export class GetBucketCorsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketCorsRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketEncryptionOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketEncryptionOutput";
  readonly ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  constructor(args: {
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  }) {
    this.ServerSideEncryptionConfiguration = args.ServerSideEncryptionConfiguration;
  }
}

export class GetBucketEncryptionRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketEncryptionRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketInventoryConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketInventoryConfigurationOutput";
  readonly InventoryConfiguration?: InventoryConfiguration;
  constructor(args: {
    InventoryConfiguration?: InventoryConfiguration;
  }) {
    this.InventoryConfiguration = args.InventoryConfiguration;
  }
}

export class GetBucketInventoryConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketInventoryConfigurationRequest";
  readonly Id: string | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    Id: string | undefined;
    Bucket: string | undefined;
  }) {
    this.Id = args.Id;
    this.Bucket = args.Bucket;
  }
}

export class GetBucketLifecycleConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLifecycleConfigurationOutput";
  readonly Rules?: Array<LifecycleRule>;
  constructor(args: {
    Rules?: Array<LifecycleRule>;
  }) {
    this.Rules = args.Rules;
  }
}

export class GetBucketLifecycleConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLifecycleConfigurationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketLifecycleOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLifecycleOutput";
  readonly Rules?: Array<Rule>;
  constructor(args: {
    Rules?: Array<Rule>;
  }) {
    this.Rules = args.Rules;
  }
}

export class GetBucketLifecycleRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLifecycleRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketLocationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLocationOutput";
  readonly LocationConstraint?: BucketLocationConstraint | string;
  constructor(args: {
    LocationConstraint?: BucketLocationConstraint | string;
  }) {
    this.LocationConstraint = args.LocationConstraint;
  }
}

export class GetBucketLocationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLocationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketLoggingOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLoggingOutput";
  readonly LoggingEnabled?: LoggingEnabled;
  constructor(args: {
    LoggingEnabled?: LoggingEnabled;
  }) {
    this.LoggingEnabled = args.LoggingEnabled;
  }
}

export class GetBucketLoggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketLoggingRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketMetricsConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketMetricsConfigurationOutput";
  readonly MetricsConfiguration?: MetricsConfiguration;
  constructor(args: {
    MetricsConfiguration?: MetricsConfiguration;
  }) {
    this.MetricsConfiguration = args.MetricsConfiguration;
  }
}

export class GetBucketMetricsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketMetricsConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly Id: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Id: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Id = args.Id;
  }
}

export class GetBucketNotificationConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketNotificationConfigurationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketPolicyOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketPolicyOutput";
  readonly Policy?: string;
  constructor(args: {
    Policy?: string;
  }) {
    this.Policy = args.Policy;
  }
}

export class GetBucketPolicyRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketPolicyRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketPolicyStatusOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketPolicyStatusOutput";
  readonly PolicyStatus?: PolicyStatus;
  constructor(args: {
    PolicyStatus?: PolicyStatus;
  }) {
    this.PolicyStatus = args.PolicyStatus;
  }
}

export class GetBucketPolicyStatusRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketPolicyStatusRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketReplicationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketReplicationOutput";
  readonly ReplicationConfiguration?: ReplicationConfiguration;
  constructor(args: {
    ReplicationConfiguration?: ReplicationConfiguration;
  }) {
    this.ReplicationConfiguration = args.ReplicationConfiguration;
  }
}

export class GetBucketReplicationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketReplicationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketRequestPaymentOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketRequestPaymentOutput";
  readonly Payer?: Payer | string;
  constructor(args: {
    Payer?: Payer | string;
  }) {
    this.Payer = args.Payer;
  }
}

export class GetBucketRequestPaymentRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketRequestPaymentRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketTaggingOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketTaggingOutput";
  readonly TagSet: Array<Tag> | undefined;
  constructor(args: {
    TagSet: Array<Tag> | undefined;
  }) {
    this.TagSet = args.TagSet;
  }
}

export class GetBucketTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketTaggingRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketVersioningOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketVersioningOutput";
  readonly Status?: BucketVersioningStatus | string;
  readonly MFADelete?: MFADeleteStatus | string;
  constructor(args: {
    Status?: BucketVersioningStatus | string;
    MFADelete?: MFADeleteStatus | string;
  }) {
    this.Status = args.Status;
    this.MFADelete = args.MFADelete;
  }
}

export class GetBucketVersioningRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketVersioningRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetBucketWebsiteOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketWebsiteOutput";
  readonly RedirectAllRequestsTo?: RedirectAllRequestsTo;
  readonly IndexDocument?: IndexDocument;
  readonly RoutingRules?: Array<RoutingRule>;
  readonly ErrorDocument?: ErrorDocument;
  constructor(args: {
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    IndexDocument?: IndexDocument;
    RoutingRules?: Array<RoutingRule>;
    ErrorDocument?: ErrorDocument;
  }) {
    this.RedirectAllRequestsTo = args.RedirectAllRequestsTo;
    this.IndexDocument = args.IndexDocument;
    this.RoutingRules = args.RoutingRules;
    this.ErrorDocument = args.ErrorDocument;
  }
}

export class GetBucketWebsiteRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetBucketWebsiteRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetObjectAclOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectAclOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly Grants?: Array<Grant>;
  readonly Owner?: Owner;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    Grants?: Array<Grant>;
    Owner?: Owner;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.Grants = args.Grants;
    this.Owner = args.Owner;
  }
}

export class GetObjectAclRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectAclRequest";
  readonly Key: string | undefined;
  readonly VersionId?: string;
  readonly Bucket: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  constructor(args: {
    Key: string | undefined;
    VersionId?: string;
    Bucket: string | undefined;
    RequestPayer?: RequestPayer | string;
  }) {
    this.Key = args.Key;
    this.VersionId = args.VersionId;
    this.Bucket = args.Bucket;
    this.RequestPayer = args.RequestPayer;
  }
}

export class GetObjectLegalHoldOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectLegalHoldOutput";
  readonly LegalHold?: ObjectLockLegalHold;
  constructor(args: {
    LegalHold?: ObjectLockLegalHold;
  }) {
    this.LegalHold = args.LegalHold;
  }
}

export class GetObjectLegalHoldRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectLegalHoldRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly VersionId?: string;
  readonly Key: string | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    VersionId?: string;
    Key: string | undefined;
    Bucket: string | undefined;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
    this.Bucket = args.Bucket;
  }
}

export class GetObjectLockConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectLockConfigurationOutput";
  readonly ObjectLockConfiguration?: ObjectLockConfiguration;
  constructor(args: {
    ObjectLockConfiguration?: ObjectLockConfiguration;
  }) {
    this.ObjectLockConfiguration = args.ObjectLockConfiguration;
  }
}

export class GetObjectLockConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectLockConfigurationRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GetObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly ETag?: string;
  readonly Restore?: string;
  readonly PartsCount?: number;
  readonly Metadata?: { [key: string]: string };
  readonly ContentLanguage?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly ObjectLockRetainUntilDate?: Date;
  readonly LastModified?: string;
  readonly SSEKMSKeyId?: string;
  readonly ContentRange?: string;
  readonly CacheControl?: string;
  readonly ContentDisposition?: string;
  readonly VersionId?: string;
  readonly MissingMeta?: string;
  readonly Expires?: string;
  readonly DeleteMarker?: string;
  readonly Body?: Uint8Array;
  readonly ObjectLockMode?: ObjectLockMode | string;
  readonly ContentType?: string;
  readonly ContentEncoding?: string;
  readonly ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  readonly TagCount?: number;
  readonly ReplicationStatus?: ReplicationStatus | string;
  readonly WebsiteRedirectLocation?: string;
  readonly StorageClass?: StorageClass | string;
  readonly SSECustomerAlgorithm?: string;
  readonly AcceptRanges?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly Expiration?: string;
  readonly ContentLength?: string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    ETag?: string;
    Restore?: string;
    PartsCount?: number;
    Metadata?: { [key: string]: string };
    ContentLanguage?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    ObjectLockRetainUntilDate?: Date;
    LastModified?: string;
    SSEKMSKeyId?: string;
    ContentRange?: string;
    CacheControl?: string;
    ContentDisposition?: string;
    VersionId?: string;
    MissingMeta?: string;
    Expires?: string;
    DeleteMarker?: string;
    Body?: Uint8Array;
    ObjectLockMode?: ObjectLockMode | string;
    ContentType?: string;
    ContentEncoding?: string;
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
    TagCount?: number;
    ReplicationStatus?: ReplicationStatus | string;
    WebsiteRedirectLocation?: string;
    StorageClass?: StorageClass | string;
    SSECustomerAlgorithm?: string;
    AcceptRanges?: string;
    SSECustomerKeyMD5?: string;
    Expiration?: string;
    ContentLength?: string;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.ETag = args.ETag;
    this.Restore = args.Restore;
    this.PartsCount = args.PartsCount;
    this.Metadata = args.Metadata;
    this.ContentLanguage = args.ContentLanguage;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.ObjectLockRetainUntilDate = args.ObjectLockRetainUntilDate;
    this.LastModified = args.LastModified;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.ContentRange = args.ContentRange;
    this.CacheControl = args.CacheControl;
    this.ContentDisposition = args.ContentDisposition;
    this.VersionId = args.VersionId;
    this.MissingMeta = args.MissingMeta;
    this.Expires = args.Expires;
    this.DeleteMarker = args.DeleteMarker;
    this.Body = args.Body;
    this.ObjectLockMode = args.ObjectLockMode;
    this.ContentType = args.ContentType;
    this.ContentEncoding = args.ContentEncoding;
    this.ObjectLockLegalHoldStatus = args.ObjectLockLegalHoldStatus;
    this.TagCount = args.TagCount;
    this.ReplicationStatus = args.ReplicationStatus;
    this.WebsiteRedirectLocation = args.WebsiteRedirectLocation;
    this.StorageClass = args.StorageClass;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.AcceptRanges = args.AcceptRanges;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.Expiration = args.Expiration;
    this.ContentLength = args.ContentLength;
  }
}

export class GetObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectRequest";
  readonly Range?: string;
  readonly ResponseContentType?: string;
  readonly IfUnmodifiedSince?: string;
  readonly Key: string | undefined;
  readonly IfNoneMatch?: string;
  readonly IfMatch?: string;
  readonly VersionId?: string;
  readonly SSECustomerKey?: string;
  readonly PartNumber?: string;
  readonly IfModifiedSince?: string;
  readonly ResponseExpires?: Date;
  readonly SSECustomerAlgorithm?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly ResponseContentDisposition?: string;
  readonly ResponseContentEncoding?: string;
  readonly Bucket: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly ResponseCacheControl?: string;
  readonly ResponseContentLanguage?: string;
  constructor(args: {
    Range?: string;
    ResponseContentType?: string;
    IfUnmodifiedSince?: string;
    Key: string | undefined;
    IfNoneMatch?: string;
    IfMatch?: string;
    VersionId?: string;
    SSECustomerKey?: string;
    PartNumber?: string;
    IfModifiedSince?: string;
    ResponseExpires?: Date;
    SSECustomerAlgorithm?: string;
    SSECustomerKeyMD5?: string;
    ResponseContentDisposition?: string;
    ResponseContentEncoding?: string;
    Bucket: string | undefined;
    RequestPayer?: RequestPayer | string;
    ResponseCacheControl?: string;
    ResponseContentLanguage?: string;
  }) {
    this.Range = args.Range;
    this.ResponseContentType = args.ResponseContentType;
    this.IfUnmodifiedSince = args.IfUnmodifiedSince;
    this.Key = args.Key;
    this.IfNoneMatch = args.IfNoneMatch;
    this.IfMatch = args.IfMatch;
    this.VersionId = args.VersionId;
    this.SSECustomerKey = args.SSECustomerKey;
    this.PartNumber = args.PartNumber;
    this.IfModifiedSince = args.IfModifiedSince;
    this.ResponseExpires = args.ResponseExpires;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.ResponseContentDisposition = args.ResponseContentDisposition;
    this.ResponseContentEncoding = args.ResponseContentEncoding;
    this.Bucket = args.Bucket;
    this.RequestPayer = args.RequestPayer;
    this.ResponseCacheControl = args.ResponseCacheControl;
    this.ResponseContentLanguage = args.ResponseContentLanguage;
  }
}

export class GetObjectRetentionOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectRetentionOutput";
  readonly Retention?: ObjectLockRetention;
  constructor(args: {
    Retention?: ObjectLockRetention;
  }) {
    this.Retention = args.Retention;
  }
}

export class GetObjectRetentionRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectRetentionRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly VersionId?: string;
  readonly Key: string | undefined;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    VersionId?: string;
    Key: string | undefined;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
  }
}

export class GetObjectTaggingOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectTaggingOutput";
  readonly TagSet: Array<Tag> | undefined;
  readonly VersionId?: string;
  constructor(args: {
    TagSet: Array<Tag> | undefined;
    VersionId?: string;
  }) {
    this.TagSet = args.TagSet;
    this.VersionId = args.VersionId;
  }
}

export class GetObjectTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectTaggingRequest";
  readonly Bucket: string | undefined;
  readonly VersionId?: string;
  readonly Key: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    VersionId?: string;
    Key: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
  }
}

export class GetObjectTorrentOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectTorrentOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly Body?: Uint8Array;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    Body?: Uint8Array;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.Body = args.Body;
  }
}

export class GetObjectTorrentRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetObjectTorrentRequest";
  readonly Bucket: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly Key: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    RequestPayer?: RequestPayer | string;
    Key: string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.RequestPayer = args.RequestPayer;
    this.Key = args.Key;
  }
}

export class GetPublicAccessBlockOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetPublicAccessBlockOutput";
  readonly PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  constructor(args: {
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }) {
    this.PublicAccessBlockConfiguration = args.PublicAccessBlockConfiguration;
  }
}

export class GetPublicAccessBlockRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GetPublicAccessBlockRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class GlacierJobParameters implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#GlacierJobParameters";
  readonly Tier: Tier | string | undefined;
  constructor(args: {
    Tier: Tier | string | undefined;
  }) {
    this.Tier = args.Tier;
  }
}

export class Grant implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Grant";
  readonly Permission?: Permission | string;
  readonly Grantee?: Grantee;
  constructor(args: {
    Permission?: Permission | string;
    Grantee?: Grantee;
  }) {
    this.Permission = args.Permission;
    this.Grantee = args.Grantee;
  }
}

export class Grantee implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Grantee";
  readonly Type: Type | string | undefined;
  readonly EmailAddress?: string;
  readonly ID?: string;
  readonly URI?: string;
  readonly DisplayName?: string;
  constructor(args: {
    Type: Type | string | undefined;
    EmailAddress?: string;
    ID?: string;
    URI?: string;
    DisplayName?: string;
  }) {
    this.Type = args.Type;
    this.EmailAddress = args.EmailAddress;
    this.ID = args.ID;
    this.URI = args.URI;
    this.DisplayName = args.DisplayName;
  }
}

export class HeadBucketRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#HeadBucketRequest";
  readonly Bucket: string | undefined;
  constructor(args: {
    Bucket: string | undefined;
  }) {
    this.Bucket = args.Bucket;
  }
}

export class HeadObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#HeadObjectOutput";
  readonly PartsCount?: number;
  readonly ContentLanguage?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly Restore?: string;
  readonly ReplicationStatus?: ReplicationStatus | string;
  readonly Expires?: string;
  readonly LastModified?: string;
  readonly SSECustomerAlgorithm?: string;
  readonly ETag?: string;
  readonly VersionId?: string;
  readonly DeleteMarker?: string;
  readonly ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  readonly ContentEncoding?: string;
  readonly ContentType?: string;
  readonly ContentLength?: string;
  readonly SSEKMSKeyId?: string;
  readonly CacheControl?: string;
  readonly MissingMeta?: string;
  readonly ObjectLockMode?: ObjectLockMode | string;
  readonly StorageClass?: StorageClass | string;
  readonly ContentDisposition?: string;
  readonly Expiration?: string;
  readonly ObjectLockRetainUntilDate?: Date;
  readonly WebsiteRedirectLocation?: string;
  readonly RequestCharged?: RequestCharged | string;
  readonly AcceptRanges?: string;
  readonly Metadata?: { [key: string]: string };
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  constructor(args: {
    PartsCount?: number;
    ContentLanguage?: string;
    SSECustomerKeyMD5?: string;
    Restore?: string;
    ReplicationStatus?: ReplicationStatus | string;
    Expires?: string;
    LastModified?: string;
    SSECustomerAlgorithm?: string;
    ETag?: string;
    VersionId?: string;
    DeleteMarker?: string;
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
    ContentEncoding?: string;
    ContentType?: string;
    ContentLength?: string;
    SSEKMSKeyId?: string;
    CacheControl?: string;
    MissingMeta?: string;
    ObjectLockMode?: ObjectLockMode | string;
    StorageClass?: StorageClass | string;
    ContentDisposition?: string;
    Expiration?: string;
    ObjectLockRetainUntilDate?: Date;
    WebsiteRedirectLocation?: string;
    RequestCharged?: RequestCharged | string;
    AcceptRanges?: string;
    Metadata?: { [key: string]: string };
    ServerSideEncryption?: ServerSideEncryption | string;
  }) {
    this.PartsCount = args.PartsCount;
    this.ContentLanguage = args.ContentLanguage;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.Restore = args.Restore;
    this.ReplicationStatus = args.ReplicationStatus;
    this.Expires = args.Expires;
    this.LastModified = args.LastModified;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.ETag = args.ETag;
    this.VersionId = args.VersionId;
    this.DeleteMarker = args.DeleteMarker;
    this.ObjectLockLegalHoldStatus = args.ObjectLockLegalHoldStatus;
    this.ContentEncoding = args.ContentEncoding;
    this.ContentType = args.ContentType;
    this.ContentLength = args.ContentLength;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.CacheControl = args.CacheControl;
    this.MissingMeta = args.MissingMeta;
    this.ObjectLockMode = args.ObjectLockMode;
    this.StorageClass = args.StorageClass;
    this.ContentDisposition = args.ContentDisposition;
    this.Expiration = args.Expiration;
    this.ObjectLockRetainUntilDate = args.ObjectLockRetainUntilDate;
    this.WebsiteRedirectLocation = args.WebsiteRedirectLocation;
    this.RequestCharged = args.RequestCharged;
    this.AcceptRanges = args.AcceptRanges;
    this.Metadata = args.Metadata;
    this.ServerSideEncryption = args.ServerSideEncryption;
  }
}

export class HeadObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#HeadObjectRequest";
  readonly Bucket: string | undefined;
  readonly IfModifiedSince?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly SSECustomerKeyMD5?: string;
  readonly Range?: string;
  readonly SSECustomerAlgorithm?: string;
  readonly SSECustomerKey?: string;
  readonly PartNumber?: string;
  readonly VersionId?: string;
  readonly IfMatch?: string;
  readonly Key: string | undefined;
  readonly IfUnmodifiedSince?: string;
  readonly IfNoneMatch?: string;
  constructor(args: {
    Bucket: string | undefined;
    IfModifiedSince?: string;
    RequestPayer?: RequestPayer | string;
    SSECustomerKeyMD5?: string;
    Range?: string;
    SSECustomerAlgorithm?: string;
    SSECustomerKey?: string;
    PartNumber?: string;
    VersionId?: string;
    IfMatch?: string;
    Key: string | undefined;
    IfUnmodifiedSince?: string;
    IfNoneMatch?: string;
  }) {
    this.Bucket = args.Bucket;
    this.IfModifiedSince = args.IfModifiedSince;
    this.RequestPayer = args.RequestPayer;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.Range = args.Range;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSECustomerKey = args.SSECustomerKey;
    this.PartNumber = args.PartNumber;
    this.VersionId = args.VersionId;
    this.IfMatch = args.IfMatch;
    this.Key = args.Key;
    this.IfUnmodifiedSince = args.IfUnmodifiedSince;
    this.IfNoneMatch = args.IfNoneMatch;
  }
}

export class IndexDocument implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#IndexDocument";
  readonly Suffix: string | undefined;
  constructor(args: {
    Suffix: string | undefined;
  }) {
    this.Suffix = args.Suffix;
  }
}

export class Initiator implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Initiator";
  readonly ID?: string;
  readonly DisplayName?: string;
  constructor(args: {
    ID?: string;
    DisplayName?: string;
  }) {
    this.ID = args.ID;
    this.DisplayName = args.DisplayName;
  }
}

export class InputSerialization implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InputSerialization";
  readonly Parquet?: ParquetInput;
  readonly JSON?: JSONInput;
  readonly CSV?: CSVInput;
  readonly CompressionType?: CompressionType | string;
  constructor(args: {
    Parquet?: ParquetInput;
    JSON?: JSONInput;
    CSV?: CSVInput;
    CompressionType?: CompressionType | string;
  }) {
    this.Parquet = args.Parquet;
    this.JSON = args.JSON;
    this.CSV = args.CSV;
    this.CompressionType = args.CompressionType;
  }
}

export class InventoryConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventoryConfiguration";
  readonly IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;
  readonly OptionalFields?: Array<InventoryOptionalField | string>;
  readonly Filter?: InventoryFilter;
  readonly Schedule: InventorySchedule | undefined;
  readonly IsEnabled: boolean | undefined;
  readonly Destination: InventoryDestination | undefined;
  readonly Id: string | undefined;
  constructor(args: {
    IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;
    OptionalFields?: Array<InventoryOptionalField | string>;
    Filter?: InventoryFilter;
    Schedule: InventorySchedule | undefined;
    IsEnabled: boolean | undefined;
    Destination: InventoryDestination | undefined;
    Id: string | undefined;
  }) {
    this.IncludedObjectVersions = args.IncludedObjectVersions;
    this.OptionalFields = args.OptionalFields;
    this.Filter = args.Filter;
    this.Schedule = args.Schedule;
    this.IsEnabled = args.IsEnabled;
    this.Destination = args.Destination;
    this.Id = args.Id;
  }
}

export class InventoryDestination implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventoryDestination";
  readonly S3BucketDestination: InventoryS3BucketDestination | undefined;
  constructor(args: {
    S3BucketDestination: InventoryS3BucketDestination | undefined;
  }) {
    this.S3BucketDestination = args.S3BucketDestination;
  }
}

export class InventoryEncryption implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventoryEncryption";
  readonly SSES3?: SSES3;
  readonly SSEKMS?: SSEKMS;
  constructor(args: {
    SSES3?: SSES3;
    SSEKMS?: SSEKMS;
  }) {
    this.SSES3 = args.SSES3;
    this.SSEKMS = args.SSEKMS;
  }
}

export class InventoryFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventoryFilter";
  readonly Prefix: string | undefined;
  constructor(args: {
    Prefix: string | undefined;
  }) {
    this.Prefix = args.Prefix;
  }
}

export type InventoryFormat = "CSV" | "ORC" | "Parquet"

export type InventoryFrequency = "Daily" | "Weekly"

export type InventoryIncludedObjectVersions = "All" | "Current"

export type InventoryOptionalField = "Size" | "LastModifiedDate" | "StorageClass" | "ETag" | "IsMultipartUploaded" | "ReplicationStatus" | "EncryptionStatus" | "ObjectLockRetainUntilDate" | "ObjectLockMode" | "ObjectLockLegalHoldStatus"

export class InventoryS3BucketDestination implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventoryS3BucketDestination";
  readonly Bucket: string | undefined;
  readonly Encryption?: InventoryEncryption;
  readonly AccountId?: string;
  readonly Prefix?: string;
  readonly Format: InventoryFormat | string | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Encryption?: InventoryEncryption;
    AccountId?: string;
    Prefix?: string;
    Format: InventoryFormat | string | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Encryption = args.Encryption;
    this.AccountId = args.AccountId;
    this.Prefix = args.Prefix;
    this.Format = args.Format;
  }
}

export class InventorySchedule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#InventorySchedule";
  readonly Frequency: InventoryFrequency | string | undefined;
  constructor(args: {
    Frequency: InventoryFrequency | string | undefined;
  }) {
    this.Frequency = args.Frequency;
  }
}

export class JSONInput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#JSONInput";
  readonly Type?: JSONType | string;
  constructor(args: {
    Type?: JSONType | string;
  }) {
    this.Type = args.Type;
  }
}

export class JSONOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#JSONOutput";
  readonly RecordDelimiter?: string;
  constructor(args: {
    RecordDelimiter?: string;
  }) {
    this.RecordDelimiter = args.RecordDelimiter;
  }
}

export enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
};

export class LambdaFunctionConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LambdaFunctionConfiguration";
  readonly LambdaFunctionArn: string | undefined;
  readonly Id?: string;
  readonly Filter?: NotificationConfigurationFilter;
  readonly Events: Array<Event | string> | undefined;
  constructor(args: {
    LambdaFunctionArn: string | undefined;
    Id?: string;
    Filter?: NotificationConfigurationFilter;
    Events: Array<Event | string> | undefined;
  }) {
    this.LambdaFunctionArn = args.LambdaFunctionArn;
    this.Id = args.Id;
    this.Filter = args.Filter;
    this.Events = args.Events;
  }
}

export class LifecycleConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LifecycleConfiguration";
  readonly Rules: Array<Rule> | undefined;
  constructor(args: {
    Rules: Array<Rule> | undefined;
  }) {
    this.Rules = args.Rules;
  }
}

export class LifecycleExpiration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LifecycleExpiration";
  readonly Days?: number;
  readonly Date?: Date;
  readonly ExpiredObjectDeleteMarker?: boolean;
  constructor(args: {
    Days?: number;
    Date?: Date;
    ExpiredObjectDeleteMarker?: boolean;
  }) {
    this.Days = args.Days;
    this.Date = args.Date;
    this.ExpiredObjectDeleteMarker = args.ExpiredObjectDeleteMarker;
  }
}

export class LifecycleRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LifecycleRule";
  readonly Expiration?: LifecycleExpiration;
  readonly Transitions?: Array<Transition>;
  readonly Prefix?: string;
  readonly NoncurrentVersionTransitions?: Array<NoncurrentVersionTransition>;
  readonly Status: ExpirationStatus | string | undefined;
  readonly ID?: string;
  readonly NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  readonly AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  readonly Filter?: LifecycleRuleFilter;
  constructor(args: {
    Expiration?: LifecycleExpiration;
    Transitions?: Array<Transition>;
    Prefix?: string;
    NoncurrentVersionTransitions?: Array<NoncurrentVersionTransition>;
    Status: ExpirationStatus | string | undefined;
    ID?: string;
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    Filter?: LifecycleRuleFilter;
  }) {
    this.Expiration = args.Expiration;
    this.Transitions = args.Transitions;
    this.Prefix = args.Prefix;
    this.NoncurrentVersionTransitions = args.NoncurrentVersionTransitions;
    this.Status = args.Status;
    this.ID = args.ID;
    this.NoncurrentVersionExpiration = args.NoncurrentVersionExpiration;
    this.AbortIncompleteMultipartUpload = args.AbortIncompleteMultipartUpload;
    this.Filter = args.Filter;
  }
}

export class LifecycleRuleAndOperator implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LifecycleRuleAndOperator";
  readonly Tags?: Array<Tag>;
  readonly Prefix?: string;
  constructor(args: {
    Tags?: Array<Tag>;
    Prefix?: string;
  }) {
    this.Tags = args.Tags;
    this.Prefix = args.Prefix;
  }
}

export class LifecycleRuleFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LifecycleRuleFilter";
  readonly And?: LifecycleRuleAndOperator;
  readonly Prefix?: string;
  readonly Tag?: Tag;
  constructor(args: {
    And?: LifecycleRuleAndOperator;
    Prefix?: string;
    Tag?: Tag;
  }) {
    this.And = args.And;
    this.Prefix = args.Prefix;
    this.Tag = args.Tag;
  }
}

export class ListBucketAnalyticsConfigurationsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketAnalyticsConfigurationsOutput";
  readonly IsTruncated?: boolean;
  readonly AnalyticsConfigurationList?: Array<AnalyticsConfiguration>;
  readonly ContinuationToken?: string;
  readonly NextContinuationToken?: string;
  constructor(args: {
    IsTruncated?: boolean;
    AnalyticsConfigurationList?: Array<AnalyticsConfiguration>;
    ContinuationToken?: string;
    NextContinuationToken?: string;
  }) {
    this.IsTruncated = args.IsTruncated;
    this.AnalyticsConfigurationList = args.AnalyticsConfigurationList;
    this.ContinuationToken = args.ContinuationToken;
    this.NextContinuationToken = args.NextContinuationToken;
  }
}

export class ListBucketAnalyticsConfigurationsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketAnalyticsConfigurationsRequest";
  readonly Bucket: string | undefined;
  readonly ContinuationToken?: string;
  constructor(args: {
    Bucket: string | undefined;
    ContinuationToken?: string;
  }) {
    this.Bucket = args.Bucket;
    this.ContinuationToken = args.ContinuationToken;
  }
}

export class ListBucketInventoryConfigurationsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketInventoryConfigurationsOutput";
  readonly InventoryConfigurationList?: Array<InventoryConfiguration>;
  readonly IsTruncated?: boolean;
  readonly NextContinuationToken?: string;
  readonly ContinuationToken?: string;
  constructor(args: {
    InventoryConfigurationList?: Array<InventoryConfiguration>;
    IsTruncated?: boolean;
    NextContinuationToken?: string;
    ContinuationToken?: string;
  }) {
    this.InventoryConfigurationList = args.InventoryConfigurationList;
    this.IsTruncated = args.IsTruncated;
    this.NextContinuationToken = args.NextContinuationToken;
    this.ContinuationToken = args.ContinuationToken;
  }
}

export class ListBucketInventoryConfigurationsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketInventoryConfigurationsRequest";
  readonly Bucket: string | undefined;
  readonly ContinuationToken?: string;
  constructor(args: {
    Bucket: string | undefined;
    ContinuationToken?: string;
  }) {
    this.Bucket = args.Bucket;
    this.ContinuationToken = args.ContinuationToken;
  }
}

export class ListBucketMetricsConfigurationsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketMetricsConfigurationsOutput";
  readonly IsTruncated?: boolean;
  readonly MetricsConfigurationList?: Array<MetricsConfiguration>;
  readonly NextContinuationToken?: string;
  readonly ContinuationToken?: string;
  constructor(args: {
    IsTruncated?: boolean;
    MetricsConfigurationList?: Array<MetricsConfiguration>;
    NextContinuationToken?: string;
    ContinuationToken?: string;
  }) {
    this.IsTruncated = args.IsTruncated;
    this.MetricsConfigurationList = args.MetricsConfigurationList;
    this.NextContinuationToken = args.NextContinuationToken;
    this.ContinuationToken = args.ContinuationToken;
  }
}

export class ListBucketMetricsConfigurationsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketMetricsConfigurationsRequest";
  readonly ContinuationToken?: string;
  readonly Bucket: string | undefined;
  constructor(args: {
    ContinuationToken?: string;
    Bucket: string | undefined;
  }) {
    this.ContinuationToken = args.ContinuationToken;
    this.Bucket = args.Bucket;
  }
}

export class ListBucketsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListBucketsOutput";
  readonly Owner?: Owner;
  readonly Buckets?: Array<Bucket>;
  constructor(args: {
    Owner?: Owner;
    Buckets?: Array<Bucket>;
  }) {
    this.Owner = args.Owner;
    this.Buckets = args.Buckets;
  }
}

export class ListMultipartUploadsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListMultipartUploadsOutput";
  readonly EncodingType?: EncodingType | string;
  readonly MaxUploads?: string;
  readonly NextKeyMarker?: string;
  readonly Bucket?: string;
  readonly Prefix?: string;
  readonly UploadIdMarker?: string;
  readonly NextUploadIdMarker?: string;
  readonly CommonPrefixes?: Array<CommonPrefix>;
  readonly Delimiter?: string;
  readonly KeyMarker?: string;
  readonly Uploads?: Array<MultipartUpload>;
  readonly IsTruncated?: boolean;
  constructor(args: {
    EncodingType?: EncodingType | string;
    MaxUploads?: string;
    NextKeyMarker?: string;
    Bucket?: string;
    Prefix?: string;
    UploadIdMarker?: string;
    NextUploadIdMarker?: string;
    CommonPrefixes?: Array<CommonPrefix>;
    Delimiter?: string;
    KeyMarker?: string;
    Uploads?: Array<MultipartUpload>;
    IsTruncated?: boolean;
  }) {
    this.EncodingType = args.EncodingType;
    this.MaxUploads = args.MaxUploads;
    this.NextKeyMarker = args.NextKeyMarker;
    this.Bucket = args.Bucket;
    this.Prefix = args.Prefix;
    this.UploadIdMarker = args.UploadIdMarker;
    this.NextUploadIdMarker = args.NextUploadIdMarker;
    this.CommonPrefixes = args.CommonPrefixes;
    this.Delimiter = args.Delimiter;
    this.KeyMarker = args.KeyMarker;
    this.Uploads = args.Uploads;
    this.IsTruncated = args.IsTruncated;
  }
}

export class ListMultipartUploadsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListMultipartUploadsRequest";
  readonly Prefix?: string;
  readonly Bucket: string | undefined;
  readonly EncodingType?: EncodingType | string;
  readonly MaxUploads?: string;
  readonly UploadIdMarker?: string;
  readonly Delimiter?: string;
  readonly KeyMarker?: string;
  constructor(args: {
    Prefix?: string;
    Bucket: string | undefined;
    EncodingType?: EncodingType | string;
    MaxUploads?: string;
    UploadIdMarker?: string;
    Delimiter?: string;
    KeyMarker?: string;
  }) {
    this.Prefix = args.Prefix;
    this.Bucket = args.Bucket;
    this.EncodingType = args.EncodingType;
    this.MaxUploads = args.MaxUploads;
    this.UploadIdMarker = args.UploadIdMarker;
    this.Delimiter = args.Delimiter;
    this.KeyMarker = args.KeyMarker;
  }
}

export class ListObjectVersionsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectVersionsOutput";
  readonly NextKeyMarker?: string;
  readonly EncodingType?: EncodingType | string;
  readonly DeleteMarkers?: Array<DeleteMarkerEntry>;
  readonly MaxKeys?: string;
  readonly Name?: string;
  readonly CommonPrefixes?: Array<CommonPrefix>;
  readonly Prefix?: string;
  readonly Versions?: Array<ObjectVersion>;
  readonly NextVersionIdMarker?: string;
  readonly KeyMarker?: string;
  readonly Delimiter?: string;
  readonly VersionIdMarker?: string;
  readonly IsTruncated?: boolean;
  constructor(args: {
    NextKeyMarker?: string;
    EncodingType?: EncodingType | string;
    DeleteMarkers?: Array<DeleteMarkerEntry>;
    MaxKeys?: string;
    Name?: string;
    CommonPrefixes?: Array<CommonPrefix>;
    Prefix?: string;
    Versions?: Array<ObjectVersion>;
    NextVersionIdMarker?: string;
    KeyMarker?: string;
    Delimiter?: string;
    VersionIdMarker?: string;
    IsTruncated?: boolean;
  }) {
    this.NextKeyMarker = args.NextKeyMarker;
    this.EncodingType = args.EncodingType;
    this.DeleteMarkers = args.DeleteMarkers;
    this.MaxKeys = args.MaxKeys;
    this.Name = args.Name;
    this.CommonPrefixes = args.CommonPrefixes;
    this.Prefix = args.Prefix;
    this.Versions = args.Versions;
    this.NextVersionIdMarker = args.NextVersionIdMarker;
    this.KeyMarker = args.KeyMarker;
    this.Delimiter = args.Delimiter;
    this.VersionIdMarker = args.VersionIdMarker;
    this.IsTruncated = args.IsTruncated;
  }
}

export class ListObjectVersionsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectVersionsRequest";
  readonly Bucket: string | undefined;
  readonly Prefix?: string;
  readonly Delimiter?: string;
  readonly EncodingType?: EncodingType | string;
  readonly VersionIdMarker?: string;
  readonly MaxKeys?: string;
  readonly KeyMarker?: string;
  constructor(args: {
    Bucket: string | undefined;
    Prefix?: string;
    Delimiter?: string;
    EncodingType?: EncodingType | string;
    VersionIdMarker?: string;
    MaxKeys?: string;
    KeyMarker?: string;
  }) {
    this.Bucket = args.Bucket;
    this.Prefix = args.Prefix;
    this.Delimiter = args.Delimiter;
    this.EncodingType = args.EncodingType;
    this.VersionIdMarker = args.VersionIdMarker;
    this.MaxKeys = args.MaxKeys;
    this.KeyMarker = args.KeyMarker;
  }
}

export class ListObjectsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectsOutput";
  readonly Marker?: string;
  readonly MaxKeys?: string;
  readonly NextMarker?: string;
  readonly Prefix?: string;
  readonly Contents?: Array<Object>;
  readonly IsTruncated?: boolean;
  readonly EncodingType?: EncodingType | string;
  readonly CommonPrefixes?: Array<CommonPrefix>;
  readonly Delimiter?: string;
  readonly Name?: string;
  constructor(args: {
    Marker?: string;
    MaxKeys?: string;
    NextMarker?: string;
    Prefix?: string;
    Contents?: Array<Object>;
    IsTruncated?: boolean;
    EncodingType?: EncodingType | string;
    CommonPrefixes?: Array<CommonPrefix>;
    Delimiter?: string;
    Name?: string;
  }) {
    this.Marker = args.Marker;
    this.MaxKeys = args.MaxKeys;
    this.NextMarker = args.NextMarker;
    this.Prefix = args.Prefix;
    this.Contents = args.Contents;
    this.IsTruncated = args.IsTruncated;
    this.EncodingType = args.EncodingType;
    this.CommonPrefixes = args.CommonPrefixes;
    this.Delimiter = args.Delimiter;
    this.Name = args.Name;
  }
}

export class ListObjectsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectsRequest";
  readonly Delimiter?: string;
  readonly Bucket: string | undefined;
  readonly Prefix?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly EncodingType?: EncodingType | string;
  readonly Marker?: string;
  readonly MaxKeys?: string;
  constructor(args: {
    Delimiter?: string;
    Bucket: string | undefined;
    Prefix?: string;
    RequestPayer?: RequestPayer | string;
    EncodingType?: EncodingType | string;
    Marker?: string;
    MaxKeys?: string;
  }) {
    this.Delimiter = args.Delimiter;
    this.Bucket = args.Bucket;
    this.Prefix = args.Prefix;
    this.RequestPayer = args.RequestPayer;
    this.EncodingType = args.EncodingType;
    this.Marker = args.Marker;
    this.MaxKeys = args.MaxKeys;
  }
}

export class ListObjectsV2Output implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectsV2Output";
  readonly MaxKeys?: string;
  readonly CommonPrefixes?: Array<CommonPrefix>;
  readonly Delimiter?: string;
  readonly NextContinuationToken?: string;
  readonly StartAfter?: string;
  readonly Contents?: Array<Object>;
  readonly IsTruncated?: boolean;
  readonly Name?: string;
  readonly Prefix?: string;
  readonly EncodingType?: EncodingType | string;
  readonly ContinuationToken?: string;
  readonly KeyCount?: string;
  constructor(args: {
    MaxKeys?: string;
    CommonPrefixes?: Array<CommonPrefix>;
    Delimiter?: string;
    NextContinuationToken?: string;
    StartAfter?: string;
    Contents?: Array<Object>;
    IsTruncated?: boolean;
    Name?: string;
    Prefix?: string;
    EncodingType?: EncodingType | string;
    ContinuationToken?: string;
    KeyCount?: string;
  }) {
    this.MaxKeys = args.MaxKeys;
    this.CommonPrefixes = args.CommonPrefixes;
    this.Delimiter = args.Delimiter;
    this.NextContinuationToken = args.NextContinuationToken;
    this.StartAfter = args.StartAfter;
    this.Contents = args.Contents;
    this.IsTruncated = args.IsTruncated;
    this.Name = args.Name;
    this.Prefix = args.Prefix;
    this.EncodingType = args.EncodingType;
    this.ContinuationToken = args.ContinuationToken;
    this.KeyCount = args.KeyCount;
  }
}

export class ListObjectsV2Request implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListObjectsV2Request";
  readonly Prefix?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly EncodingType?: EncodingType | string;
  readonly ContinuationToken?: string;
  readonly FetchOwner?: boolean;
  readonly MaxKeys?: string;
  readonly StartAfter?: string;
  readonly Delimiter?: string;
  constructor(args: {
    Prefix?: string;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    EncodingType?: EncodingType | string;
    ContinuationToken?: string;
    FetchOwner?: boolean;
    MaxKeys?: string;
    StartAfter?: string;
    Delimiter?: string;
  }) {
    this.Prefix = args.Prefix;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.EncodingType = args.EncodingType;
    this.ContinuationToken = args.ContinuationToken;
    this.FetchOwner = args.FetchOwner;
    this.MaxKeys = args.MaxKeys;
    this.StartAfter = args.StartAfter;
    this.Delimiter = args.Delimiter;
  }
}

export class ListPartsOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListPartsOutput";
  readonly StorageClass?: StorageClass | string;
  readonly IsTruncated?: boolean;
  readonly Key?: string;
  readonly RequestCharged?: RequestCharged | string;
  readonly PartNumberMarker?: string;
  readonly Owner?: Owner;
  readonly AbortRuleId?: string;
  readonly MaxParts?: string;
  readonly AbortDate?: string;
  readonly NextPartNumberMarker?: number;
  readonly Initiator?: Initiator;
  readonly Bucket?: string;
  readonly UploadId?: string;
  readonly Parts?: Array<Part>;
  constructor(args: {
    StorageClass?: StorageClass | string;
    IsTruncated?: boolean;
    Key?: string;
    RequestCharged?: RequestCharged | string;
    PartNumberMarker?: string;
    Owner?: Owner;
    AbortRuleId?: string;
    MaxParts?: string;
    AbortDate?: string;
    NextPartNumberMarker?: number;
    Initiator?: Initiator;
    Bucket?: string;
    UploadId?: string;
    Parts?: Array<Part>;
  }) {
    this.StorageClass = args.StorageClass;
    this.IsTruncated = args.IsTruncated;
    this.Key = args.Key;
    this.RequestCharged = args.RequestCharged;
    this.PartNumberMarker = args.PartNumberMarker;
    this.Owner = args.Owner;
    this.AbortRuleId = args.AbortRuleId;
    this.MaxParts = args.MaxParts;
    this.AbortDate = args.AbortDate;
    this.NextPartNumberMarker = args.NextPartNumberMarker;
    this.Initiator = args.Initiator;
    this.Bucket = args.Bucket;
    this.UploadId = args.UploadId;
    this.Parts = args.Parts;
  }
}

export class ListPartsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ListPartsRequest";
  readonly PartNumberMarker?: string;
  readonly Key: string | undefined;
  readonly MaxParts?: string;
  readonly UploadId: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  constructor(args: {
    PartNumberMarker?: string;
    Key: string | undefined;
    MaxParts?: string;
    UploadId: string | undefined;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
  }) {
    this.PartNumberMarker = args.PartNumberMarker;
    this.Key = args.Key;
    this.MaxParts = args.MaxParts;
    this.UploadId = args.UploadId;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
  }
}

export class LoggingEnabled implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#LoggingEnabled";
  readonly TargetGrants?: Array<TargetGrant>;
  readonly TargetPrefix: string | undefined;
  readonly TargetBucket: string | undefined;
  constructor(args: {
    TargetGrants?: Array<TargetGrant>;
    TargetPrefix: string | undefined;
    TargetBucket: string | undefined;
  }) {
    this.TargetGrants = args.TargetGrants;
    this.TargetPrefix = args.TargetPrefix;
    this.TargetBucket = args.TargetBucket;
  }
}

export type MFADelete = "Enabled" | "Disabled"

export type MFADeleteStatus = "Enabled" | "Disabled"

export type MetadataDirective = "COPY" | "REPLACE"

export class MetadataEntry implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#MetadataEntry";
  readonly Name?: string;
  readonly Value?: string;
  constructor(args: {
    Name?: string;
    Value?: string;
  }) {
    this.Name = args.Name;
    this.Value = args.Value;
  }
}

export class Metrics implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Metrics";
  readonly Status: MetricsStatus | string | undefined;
  readonly EventThreshold: ReplicationTime | undefined;
  constructor(args: {
    Status: MetricsStatus | string | undefined;
    EventThreshold: ReplicationTime | undefined;
  }) {
    this.Status = args.Status;
    this.EventThreshold = args.EventThreshold;
  }
}

export class MetricsAndOperator implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#MetricsAndOperator";
  readonly Prefix?: string;
  readonly Tags?: Array<Tag>;
  constructor(args: {
    Prefix?: string;
    Tags?: Array<Tag>;
  }) {
    this.Prefix = args.Prefix;
    this.Tags = args.Tags;
  }
}

export class MetricsConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#MetricsConfiguration";
  readonly Filter?: MetricsFilter;
  readonly Id: string | undefined;
  constructor(args: {
    Filter?: MetricsFilter;
    Id: string | undefined;
  }) {
    this.Filter = args.Filter;
    this.Id = args.Id;
  }
}

export class MetricsFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#MetricsFilter";
  readonly Prefix?: string;
  readonly And?: MetricsAndOperator;
  readonly Tag?: Tag;
  constructor(args: {
    Prefix?: string;
    And?: MetricsAndOperator;
    Tag?: Tag;
  }) {
    this.Prefix = args.Prefix;
    this.And = args.And;
    this.Tag = args.Tag;
  }
}

export type MetricsStatus = "Enabled" | "Disabled"

export class MultipartUpload implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#MultipartUpload";
  readonly Initiator?: Initiator;
  readonly Initiated?: Date;
  readonly StorageClass?: StorageClass | string;
  readonly Key?: string;
  readonly Owner?: Owner;
  readonly UploadId?: string;
  constructor(args: {
    Initiator?: Initiator;
    Initiated?: Date;
    StorageClass?: StorageClass | string;
    Key?: string;
    Owner?: Owner;
    UploadId?: string;
  }) {
    this.Initiator = args.Initiator;
    this.Initiated = args.Initiated;
    this.StorageClass = args.StorageClass;
    this.Key = args.Key;
    this.Owner = args.Owner;
    this.UploadId = args.UploadId;
  }
}

export class NoSuchBucket extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#NoSuchBucket",
      name: "NoSuchBucket",
      fault: "client",
      service: args.$service,
    });
  }
}

export class NoSuchKey extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#NoSuchKey",
      name: "NoSuchKey",
      fault: "client",
      service: args.$service,
    });
  }
}

export class NoSuchUpload extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#NoSuchUpload",
      name: "NoSuchUpload",
      fault: "client",
      service: args.$service,
    });
  }
}

export class NoncurrentVersionExpiration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#NoncurrentVersionExpiration";
  readonly NoncurrentDays?: number;
  constructor(args: {
    NoncurrentDays?: number;
  }) {
    this.NoncurrentDays = args.NoncurrentDays;
  }
}

export class NoncurrentVersionTransition implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#NoncurrentVersionTransition";
  readonly StorageClass?: TransitionStorageClass | string;
  readonly NoncurrentDays?: number;
  constructor(args: {
    StorageClass?: TransitionStorageClass | string;
    NoncurrentDays?: number;
  }) {
    this.StorageClass = args.StorageClass;
    this.NoncurrentDays = args.NoncurrentDays;
  }
}

export class NotificationConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#NotificationConfiguration";
  readonly LambdaFunctionConfigurations?: Array<LambdaFunctionConfiguration>;
  readonly QueueConfigurations?: Array<QueueConfiguration>;
  readonly TopicConfigurations?: Array<TopicConfiguration>;
  constructor(args: {
    LambdaFunctionConfigurations?: Array<LambdaFunctionConfiguration>;
    QueueConfigurations?: Array<QueueConfiguration>;
    TopicConfigurations?: Array<TopicConfiguration>;
  }) {
    this.LambdaFunctionConfigurations = args.LambdaFunctionConfigurations;
    this.QueueConfigurations = args.QueueConfigurations;
    this.TopicConfigurations = args.TopicConfigurations;
  }
}

export class NotificationConfigurationDeprecated implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#NotificationConfigurationDeprecated";
  readonly QueueConfiguration?: QueueConfigurationDeprecated;
  readonly CloudFunctionConfiguration?: CloudFunctionConfiguration;
  readonly TopicConfiguration?: TopicConfigurationDeprecated;
  constructor(args: {
    QueueConfiguration?: QueueConfigurationDeprecated;
    CloudFunctionConfiguration?: CloudFunctionConfiguration;
    TopicConfiguration?: TopicConfigurationDeprecated;
  }) {
    this.QueueConfiguration = args.QueueConfiguration;
    this.CloudFunctionConfiguration = args.CloudFunctionConfiguration;
    this.TopicConfiguration = args.TopicConfiguration;
  }
}

export class NotificationConfigurationFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#NotificationConfigurationFilter";
  readonly Key?: S3KeyFilter;
  constructor(args: {
    Key?: S3KeyFilter;
  }) {
    this.Key = args.Key;
  }
}

export class _Object implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Object";
  readonly LastModified?: string;
  readonly Key?: string;
  readonly Size?: number;
  readonly ETag?: string;
  readonly StorageClass?: ObjectStorageClass | string;
  readonly Owner?: Owner;
  constructor(args: {
    LastModified?: string;
    Key?: string;
    Size?: number;
    ETag?: string;
    StorageClass?: ObjectStorageClass | string;
    Owner?: Owner;
  }) {
    this.LastModified = args.LastModified;
    this.Key = args.Key;
    this.Size = args.Size;
    this.ETag = args.ETag;
    this.StorageClass = args.StorageClass;
    this.Owner = args.Owner;
  }
}

export class ObjectAlreadyInActiveTierError extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#ObjectAlreadyInActiveTierError",
      name: "ObjectAlreadyInActiveTierError",
      fault: "client",
      service: args.$service,
    });
  }
}

export type ObjectCannedACL = "private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control"

export class ObjectIdentifier implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectIdentifier";
  readonly Key: string | undefined;
  readonly VersionId?: string;
  constructor(args: {
    Key: string | undefined;
    VersionId?: string;
  }) {
    this.Key = args.Key;
    this.VersionId = args.VersionId;
  }
}

export class ObjectLockConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectLockConfiguration";
  readonly Rule?: ObjectLockRule;
  readonly ObjectLockEnabled?: ObjectLockEnabled | string;
  constructor(args: {
    Rule?: ObjectLockRule;
    ObjectLockEnabled?: ObjectLockEnabled | string;
  }) {
    this.Rule = args.Rule;
    this.ObjectLockEnabled = args.ObjectLockEnabled;
  }
}

export type ObjectLockEnabled = "Enabled"

export class ObjectLockLegalHold implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectLockLegalHold";
  readonly Status?: ObjectLockLegalHoldStatus | string;
  constructor(args: {
    Status?: ObjectLockLegalHoldStatus | string;
  }) {
    this.Status = args.Status;
  }
}

export type ObjectLockLegalHoldStatus = "ON" | "OFF"

export type ObjectLockMode = "GOVERNANCE" | "COMPLIANCE"

export class ObjectLockRetention implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectLockRetention";
  readonly RetainUntilDate?: Date;
  readonly Mode?: ObjectLockRetentionMode | string;
  constructor(args: {
    RetainUntilDate?: Date;
    Mode?: ObjectLockRetentionMode | string;
  }) {
    this.RetainUntilDate = args.RetainUntilDate;
    this.Mode = args.Mode;
  }
}

export type ObjectLockRetentionMode = "GOVERNANCE" | "COMPLIANCE"

export class ObjectLockRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectLockRule";
  readonly DefaultRetention?: DefaultRetention;
  constructor(args: {
    DefaultRetention?: DefaultRetention;
  }) {
    this.DefaultRetention = args.DefaultRetention;
  }
}

export class ObjectNotInActiveTierError extends $SmithyException {
  constructor(args: {
    $service: string;
    message?: string;
  }) {
    super({
      id: "com.amazonaws.s3#ObjectNotInActiveTierError",
      name: "ObjectNotInActiveTierError",
      fault: "client",
      service: args.$service,
    });
  }
}

export type ObjectStorageClass = "STANDARD" | "REDUCED_REDUNDANCY" | "GLACIER" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "DEEP_ARCHIVE"

export class ObjectVersion implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ObjectVersion";
  readonly LastModified?: string;
  readonly ETag?: string;
  readonly Owner?: Owner;
  readonly Size?: number;
  readonly VersionId?: string;
  readonly Key?: string;
  readonly IsLatest?: boolean;
  readonly StorageClass?: ObjectVersionStorageClass | string;
  constructor(args: {
    LastModified?: string;
    ETag?: string;
    Owner?: Owner;
    Size?: number;
    VersionId?: string;
    Key?: string;
    IsLatest?: boolean;
    StorageClass?: ObjectVersionStorageClass | string;
  }) {
    this.LastModified = args.LastModified;
    this.ETag = args.ETag;
    this.Owner = args.Owner;
    this.Size = args.Size;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
    this.IsLatest = args.IsLatest;
    this.StorageClass = args.StorageClass;
  }
}

export type ObjectVersionStorageClass = "STANDARD"

export class OutputLocation implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#OutputLocation";
  readonly S3?: S3Location;
  constructor(args: {
    S3?: S3Location;
  }) {
    this.S3 = args.S3;
  }
}

export class OutputSerialization implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#OutputSerialization";
  readonly JSON?: JSONOutput;
  readonly CSV?: CSVOutput;
  constructor(args: {
    JSON?: JSONOutput;
    CSV?: CSVOutput;
  }) {
    this.JSON = args.JSON;
    this.CSV = args.CSV;
  }
}

export class Owner implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Owner";
  readonly DisplayName?: string;
  readonly ID?: string;
  constructor(args: {
    DisplayName?: string;
    ID?: string;
  }) {
    this.DisplayName = args.DisplayName;
    this.ID = args.ID;
  }
}

export type OwnerOverride = "Destination"

export class ParquetInput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ParquetInput";
  constructor(args?: {}) {}
}

export class Part implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Part";
  readonly ETag?: string;
  readonly Size?: number;
  readonly PartNumber?: string;
  readonly LastModified?: string;
  constructor(args: {
    ETag?: string;
    Size?: number;
    PartNumber?: string;
    LastModified?: string;
  }) {
    this.ETag = args.ETag;
    this.Size = args.Size;
    this.PartNumber = args.PartNumber;
    this.LastModified = args.LastModified;
  }
}

export type Payer = "Requester" | "BucketOwner"

export type Permission = "FULL_CONTROL" | "WRITE" | "WRITE_ACP" | "READ" | "READ_ACP"

export class PolicyStatus implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PolicyStatus";
  readonly IsPublic?: boolean;
  constructor(args: {
    IsPublic?: boolean;
  }) {
    this.IsPublic = args.IsPublic;
  }
}

export class Progress implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Progress";
  readonly BytesProcessed?: number;
  readonly BytesScanned?: number;
  readonly BytesReturned?: number;
  constructor(args: {
    BytesProcessed?: number;
    BytesScanned?: number;
    BytesReturned?: number;
  }) {
    this.BytesProcessed = args.BytesProcessed;
    this.BytesScanned = args.BytesScanned;
    this.BytesReturned = args.BytesReturned;
  }
}

export class ProgressEvent implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ProgressEvent";
  readonly Details?: Progress;
  constructor(args: {
    Details?: Progress;
  }) {
    this.Details = args.Details;
  }
}

export type Protocol = "http" | "https"

export class PublicAccessBlockConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PublicAccessBlockConfiguration";
  readonly BlockPublicAcls?: boolean;
  readonly RestrictPublicBuckets?: boolean;
  readonly IgnorePublicAcls?: boolean;
  readonly BlockPublicPolicy?: boolean;
  constructor(args: {
    BlockPublicAcls?: boolean;
    RestrictPublicBuckets?: boolean;
    IgnorePublicAcls?: boolean;
    BlockPublicPolicy?: boolean;
  }) {
    this.BlockPublicAcls = args.BlockPublicAcls;
    this.RestrictPublicBuckets = args.RestrictPublicBuckets;
    this.IgnorePublicAcls = args.IgnorePublicAcls;
    this.BlockPublicPolicy = args.BlockPublicPolicy;
  }
}

export class PutBucketAccelerateConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketAccelerateConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly AccelerateConfiguration: AccelerateConfiguration | undefined;
  constructor(args: {
    Bucket: string | undefined;
    AccelerateConfiguration: AccelerateConfiguration | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.AccelerateConfiguration = args.AccelerateConfiguration;
  }
}

export class PutBucketAclRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketAclRequest";
  readonly GrantRead?: string;
  readonly AccessControlPolicy?: AccessControlPolicy;
  readonly GrantWrite?: string;
  readonly Bucket: string | undefined;
  readonly ACL?: BucketCannedACL | string;
  readonly ContentMD5?: string;
  readonly GrantReadACP?: string;
  readonly GrantWriteACP?: string;
  readonly GrantFullControl?: string;
  constructor(args: {
    GrantRead?: string;
    AccessControlPolicy?: AccessControlPolicy;
    GrantWrite?: string;
    Bucket: string | undefined;
    ACL?: BucketCannedACL | string;
    ContentMD5?: string;
    GrantReadACP?: string;
    GrantWriteACP?: string;
    GrantFullControl?: string;
  }) {
    this.GrantRead = args.GrantRead;
    this.AccessControlPolicy = args.AccessControlPolicy;
    this.GrantWrite = args.GrantWrite;
    this.Bucket = args.Bucket;
    this.ACL = args.ACL;
    this.ContentMD5 = args.ContentMD5;
    this.GrantReadACP = args.GrantReadACP;
    this.GrantWriteACP = args.GrantWriteACP;
    this.GrantFullControl = args.GrantFullControl;
  }
}

export class PutBucketAnalyticsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketAnalyticsConfigurationRequest";
  readonly Id: string | undefined;
  readonly AnalyticsConfiguration: AnalyticsConfiguration | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    Id: string | undefined;
    AnalyticsConfiguration: AnalyticsConfiguration | undefined;
    Bucket: string | undefined;
  }) {
    this.Id = args.Id;
    this.AnalyticsConfiguration = args.AnalyticsConfiguration;
    this.Bucket = args.Bucket;
  }
}

export class PutBucketCorsRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketCorsRequest";
  readonly CORSConfiguration: CORSConfiguration | undefined;
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  constructor(args: {
    CORSConfiguration: CORSConfiguration | undefined;
    Bucket: string | undefined;
    ContentMD5?: string;
  }) {
    this.CORSConfiguration = args.CORSConfiguration;
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
  }
}

export class PutBucketEncryptionRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketEncryptionRequest";
  readonly ContentMD5?: string;
  readonly ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
  readonly Bucket: string | undefined;
  constructor(args: {
    ContentMD5?: string;
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
    Bucket: string | undefined;
  }) {
    this.ContentMD5 = args.ContentMD5;
    this.ServerSideEncryptionConfiguration = args.ServerSideEncryptionConfiguration;
    this.Bucket = args.Bucket;
  }
}

export class PutBucketInventoryConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketInventoryConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly Id: string | undefined;
  readonly InventoryConfiguration: InventoryConfiguration | undefined;
  constructor(args: {
    Bucket: string | undefined;
    Id: string | undefined;
    InventoryConfiguration: InventoryConfiguration | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.Id = args.Id;
    this.InventoryConfiguration = args.InventoryConfiguration;
  }
}

export class PutBucketLifecycleConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketLifecycleConfigurationRequest";
  readonly LifecycleConfiguration?: BucketLifecycleConfiguration;
  readonly Bucket: string | undefined;
  constructor(args: {
    LifecycleConfiguration?: BucketLifecycleConfiguration;
    Bucket: string | undefined;
  }) {
    this.LifecycleConfiguration = args.LifecycleConfiguration;
    this.Bucket = args.Bucket;
  }
}

export class PutBucketLifecycleRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketLifecycleRequest";
  readonly ContentMD5?: string;
  readonly Bucket: string | undefined;
  readonly LifecycleConfiguration?: LifecycleConfiguration;
  constructor(args: {
    ContentMD5?: string;
    Bucket: string | undefined;
    LifecycleConfiguration?: LifecycleConfiguration;
  }) {
    this.ContentMD5 = args.ContentMD5;
    this.Bucket = args.Bucket;
    this.LifecycleConfiguration = args.LifecycleConfiguration;
  }
}

export class PutBucketLoggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketLoggingRequest";
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  readonly BucketLoggingStatus: BucketLoggingStatus | undefined;
  constructor(args: {
    Bucket: string | undefined;
    ContentMD5?: string;
    BucketLoggingStatus: BucketLoggingStatus | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
    this.BucketLoggingStatus = args.BucketLoggingStatus;
  }
}

export class PutBucketMetricsConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketMetricsConfigurationRequest";
  readonly Id: string | undefined;
  readonly Bucket: string | undefined;
  readonly MetricsConfiguration: MetricsConfiguration | undefined;
  constructor(args: {
    Id: string | undefined;
    Bucket: string | undefined;
    MetricsConfiguration: MetricsConfiguration | undefined;
  }) {
    this.Id = args.Id;
    this.Bucket = args.Bucket;
    this.MetricsConfiguration = args.MetricsConfiguration;
  }
}

export class PutBucketNotificationConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketNotificationConfigurationRequest";
  readonly Bucket: string | undefined;
  readonly NotificationConfiguration: NotificationConfiguration | undefined;
  constructor(args: {
    Bucket: string | undefined;
    NotificationConfiguration: NotificationConfiguration | undefined;
  }) {
    this.Bucket = args.Bucket;
    this.NotificationConfiguration = args.NotificationConfiguration;
  }
}

export class PutBucketNotificationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketNotificationRequest";
  readonly NotificationConfiguration: NotificationConfigurationDeprecated | undefined;
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  constructor(args: {
    NotificationConfiguration: NotificationConfigurationDeprecated | undefined;
    Bucket: string | undefined;
    ContentMD5?: string;
  }) {
    this.NotificationConfiguration = args.NotificationConfiguration;
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
  }
}

export class PutBucketPolicyRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketPolicyRequest";
  readonly Policy: string | undefined;
  readonly ContentMD5?: string;
  readonly ConfirmRemoveSelfBucketAccess?: boolean;
  readonly Bucket: string | undefined;
  constructor(args: {
    Policy: string | undefined;
    ContentMD5?: string;
    ConfirmRemoveSelfBucketAccess?: boolean;
    Bucket: string | undefined;
  }) {
    this.Policy = args.Policy;
    this.ContentMD5 = args.ContentMD5;
    this.ConfirmRemoveSelfBucketAccess = args.ConfirmRemoveSelfBucketAccess;
    this.Bucket = args.Bucket;
  }
}

export class PutBucketReplicationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketReplicationRequest";
  readonly ContentMD5?: string;
  readonly Bucket: string | undefined;
  readonly Token?: string;
  readonly ReplicationConfiguration: ReplicationConfiguration | undefined;
  constructor(args: {
    ContentMD5?: string;
    Bucket: string | undefined;
    Token?: string;
    ReplicationConfiguration: ReplicationConfiguration | undefined;
  }) {
    this.ContentMD5 = args.ContentMD5;
    this.Bucket = args.Bucket;
    this.Token = args.Token;
    this.ReplicationConfiguration = args.ReplicationConfiguration;
  }
}

export class PutBucketRequestPaymentRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketRequestPaymentRequest";
  readonly Bucket: string | undefined;
  readonly RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;
  readonly ContentMD5?: string;
  constructor(args: {
    Bucket: string | undefined;
    RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;
    ContentMD5?: string;
  }) {
    this.Bucket = args.Bucket;
    this.RequestPaymentConfiguration = args.RequestPaymentConfiguration;
    this.ContentMD5 = args.ContentMD5;
  }
}

export class PutBucketTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketTaggingRequest";
  readonly Tagging: Tagging | undefined;
  readonly ContentMD5?: string;
  readonly Bucket: string | undefined;
  constructor(args: {
    Tagging: Tagging | undefined;
    ContentMD5?: string;
    Bucket: string | undefined;
  }) {
    this.Tagging = args.Tagging;
    this.ContentMD5 = args.ContentMD5;
    this.Bucket = args.Bucket;
  }
}

export class PutBucketVersioningRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketVersioningRequest";
  readonly VersioningConfiguration: VersioningConfiguration | undefined;
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  readonly MFA?: string;
  constructor(args: {
    VersioningConfiguration: VersioningConfiguration | undefined;
    Bucket: string | undefined;
    ContentMD5?: string;
    MFA?: string;
  }) {
    this.VersioningConfiguration = args.VersioningConfiguration;
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
    this.MFA = args.MFA;
  }
}

export class PutBucketWebsiteRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutBucketWebsiteRequest";
  readonly ContentMD5?: string;
  readonly Bucket: string | undefined;
  readonly WebsiteConfiguration: WebsiteConfiguration | undefined;
  constructor(args: {
    ContentMD5?: string;
    Bucket: string | undefined;
    WebsiteConfiguration: WebsiteConfiguration | undefined;
  }) {
    this.ContentMD5 = args.ContentMD5;
    this.Bucket = args.Bucket;
    this.WebsiteConfiguration = args.WebsiteConfiguration;
  }
}

export class PutObjectAclOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectAclOutput";
  readonly RequestCharged?: RequestCharged | string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
  }) {
    this.RequestCharged = args.RequestCharged;
  }
}

export class PutObjectAclRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectAclRequest";
  readonly ACL?: ObjectCannedACL | string;
  readonly VersionId?: string;
  readonly ContentMD5?: string;
  readonly GrantReadACP?: string;
  readonly GrantWrite?: string;
  readonly AccessControlPolicy?: AccessControlPolicy;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly GrantRead?: string;
  readonly GrantFullControl?: string;
  readonly GrantWriteACP?: string;
  readonly Key: string | undefined;
  constructor(args: {
    ACL?: ObjectCannedACL | string;
    VersionId?: string;
    ContentMD5?: string;
    GrantReadACP?: string;
    GrantWrite?: string;
    AccessControlPolicy?: AccessControlPolicy;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    GrantRead?: string;
    GrantFullControl?: string;
    GrantWriteACP?: string;
    Key: string | undefined;
  }) {
    this.ACL = args.ACL;
    this.VersionId = args.VersionId;
    this.ContentMD5 = args.ContentMD5;
    this.GrantReadACP = args.GrantReadACP;
    this.GrantWrite = args.GrantWrite;
    this.AccessControlPolicy = args.AccessControlPolicy;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.GrantRead = args.GrantRead;
    this.GrantFullControl = args.GrantFullControl;
    this.GrantWriteACP = args.GrantWriteACP;
    this.Key = args.Key;
  }
}

export class PutObjectLegalHoldOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectLegalHoldOutput";
  readonly RequestCharged?: RequestCharged | string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
  }) {
    this.RequestCharged = args.RequestCharged;
  }
}

export class PutObjectLegalHoldRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectLegalHoldRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly LegalHold?: ObjectLockLegalHold;
  readonly Bucket: string | undefined;
  readonly VersionId?: string;
  readonly ContentMD5?: string;
  readonly Key: string | undefined;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    LegalHold?: ObjectLockLegalHold;
    Bucket: string | undefined;
    VersionId?: string;
    ContentMD5?: string;
    Key: string | undefined;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.LegalHold = args.LegalHold;
    this.Bucket = args.Bucket;
    this.VersionId = args.VersionId;
    this.ContentMD5 = args.ContentMD5;
    this.Key = args.Key;
  }
}

export class PutObjectLockConfigurationOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectLockConfigurationOutput";
  readonly RequestCharged?: RequestCharged | string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
  }) {
    this.RequestCharged = args.RequestCharged;
  }
}

export class PutObjectLockConfigurationRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectLockConfigurationRequest";
  readonly Token?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly ObjectLockConfiguration?: ObjectLockConfiguration;
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  constructor(args: {
    Token?: string;
    RequestPayer?: RequestPayer | string;
    ObjectLockConfiguration?: ObjectLockConfiguration;
    Bucket: string | undefined;
    ContentMD5?: string;
  }) {
    this.Token = args.Token;
    this.RequestPayer = args.RequestPayer;
    this.ObjectLockConfiguration = args.ObjectLockConfiguration;
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
  }
}

export class PutObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectOutput";
  readonly SSEKMSEncryptionContext?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly SSECustomerAlgorithm?: string;
  readonly Expiration?: string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly RequestCharged?: RequestCharged | string;
  readonly ETag?: string;
  readonly SSEKMSKeyId?: string;
  readonly VersionId?: string;
  constructor(args: {
    SSEKMSEncryptionContext?: string;
    SSECustomerKeyMD5?: string;
    SSECustomerAlgorithm?: string;
    Expiration?: string;
    ServerSideEncryption?: ServerSideEncryption | string;
    RequestCharged?: RequestCharged | string;
    ETag?: string;
    SSEKMSKeyId?: string;
    VersionId?: string;
  }) {
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.Expiration = args.Expiration;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.RequestCharged = args.RequestCharged;
    this.ETag = args.ETag;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.VersionId = args.VersionId;
  }
}

export class PutObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectRequest";
  readonly Body?: Uint8Array;
  readonly ObjectLockMode?: ObjectLockMode | string;
  readonly Tagging?: string;
  readonly ContentType?: string;
  readonly ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  readonly GrantReadACP?: string;
  readonly ContentMD5?: string;
  readonly StorageClass?: StorageClass | string;
  readonly ContentEncoding?: string;
  readonly GrantRead?: string;
  readonly WebsiteRedirectLocation?: string;
  readonly ACL?: ObjectCannedACL | string;
  readonly SSECustomerAlgorithm?: string;
  readonly ContentLength?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly Key: string | undefined;
  readonly Metadata?: { [key: string]: string };
  readonly ContentLanguage?: string;
  readonly SSEKMSEncryptionContext?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly ObjectLockRetainUntilDate?: Date;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly SSECustomerKey?: string;
  readonly Expires?: string;
  readonly GrantWriteACP?: string;
  readonly SSEKMSKeyId?: string;
  readonly GrantFullControl?: string;
  readonly CacheControl?: string;
  readonly ContentDisposition?: string;
  constructor(args: {
    Body?: Uint8Array;
    ObjectLockMode?: ObjectLockMode | string;
    Tagging?: string;
    ContentType?: string;
    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
    GrantReadACP?: string;
    ContentMD5?: string;
    StorageClass?: StorageClass | string;
    ContentEncoding?: string;
    GrantRead?: string;
    WebsiteRedirectLocation?: string;
    ACL?: ObjectCannedACL | string;
    SSECustomerAlgorithm?: string;
    ContentLength?: string;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    Key: string | undefined;
    Metadata?: { [key: string]: string };
    ContentLanguage?: string;
    SSEKMSEncryptionContext?: string;
    SSECustomerKeyMD5?: string;
    ObjectLockRetainUntilDate?: Date;
    ServerSideEncryption?: ServerSideEncryption | string;
    SSECustomerKey?: string;
    Expires?: string;
    GrantWriteACP?: string;
    SSEKMSKeyId?: string;
    GrantFullControl?: string;
    CacheControl?: string;
    ContentDisposition?: string;
  }) {
    this.Body = args.Body;
    this.ObjectLockMode = args.ObjectLockMode;
    this.Tagging = args.Tagging;
    this.ContentType = args.ContentType;
    this.ObjectLockLegalHoldStatus = args.ObjectLockLegalHoldStatus;
    this.GrantReadACP = args.GrantReadACP;
    this.ContentMD5 = args.ContentMD5;
    this.StorageClass = args.StorageClass;
    this.ContentEncoding = args.ContentEncoding;
    this.GrantRead = args.GrantRead;
    this.WebsiteRedirectLocation = args.WebsiteRedirectLocation;
    this.ACL = args.ACL;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.ContentLength = args.ContentLength;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.Key = args.Key;
    this.Metadata = args.Metadata;
    this.ContentLanguage = args.ContentLanguage;
    this.SSEKMSEncryptionContext = args.SSEKMSEncryptionContext;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.ObjectLockRetainUntilDate = args.ObjectLockRetainUntilDate;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.SSECustomerKey = args.SSECustomerKey;
    this.Expires = args.Expires;
    this.GrantWriteACP = args.GrantWriteACP;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.GrantFullControl = args.GrantFullControl;
    this.CacheControl = args.CacheControl;
    this.ContentDisposition = args.ContentDisposition;
  }
}

export class PutObjectRetentionOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectRetentionOutput";
  readonly RequestCharged?: RequestCharged | string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
  }) {
    this.RequestCharged = args.RequestCharged;
  }
}

export class PutObjectRetentionRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectRetentionRequest";
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly BypassGovernanceRetention?: boolean;
  readonly ContentMD5?: string;
  readonly VersionId?: string;
  readonly Key: string | undefined;
  readonly Retention?: ObjectLockRetention;
  constructor(args: {
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    BypassGovernanceRetention?: boolean;
    ContentMD5?: string;
    VersionId?: string;
    Key: string | undefined;
    Retention?: ObjectLockRetention;
  }) {
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.BypassGovernanceRetention = args.BypassGovernanceRetention;
    this.ContentMD5 = args.ContentMD5;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
    this.Retention = args.Retention;
  }
}

export class PutObjectTaggingOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectTaggingOutput";
  readonly VersionId?: string;
  constructor(args: {
    VersionId?: string;
  }) {
    this.VersionId = args.VersionId;
  }
}

export class PutObjectTaggingRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutObjectTaggingRequest";
  readonly Tagging: Tagging | undefined;
  readonly Bucket: string | undefined;
  readonly ContentMD5?: string;
  readonly VersionId?: string;
  readonly Key: string | undefined;
  constructor(args: {
    Tagging: Tagging | undefined;
    Bucket: string | undefined;
    ContentMD5?: string;
    VersionId?: string;
    Key: string | undefined;
  }) {
    this.Tagging = args.Tagging;
    this.Bucket = args.Bucket;
    this.ContentMD5 = args.ContentMD5;
    this.VersionId = args.VersionId;
    this.Key = args.Key;
  }
}

export class PutPublicAccessBlockRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#PutPublicAccessBlockRequest";
  readonly Bucket: string | undefined;
  readonly PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
  readonly ContentMD5?: string;
  constructor(args: {
    Bucket: string | undefined;
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
    ContentMD5?: string;
  }) {
    this.Bucket = args.Bucket;
    this.PublicAccessBlockConfiguration = args.PublicAccessBlockConfiguration;
    this.ContentMD5 = args.ContentMD5;
  }
}

export class QueueConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#QueueConfiguration";
  readonly QueueArn: string | undefined;
  readonly Events: Array<Event | string> | undefined;
  readonly Id?: string;
  readonly Filter?: NotificationConfigurationFilter;
  constructor(args: {
    QueueArn: string | undefined;
    Events: Array<Event | string> | undefined;
    Id?: string;
    Filter?: NotificationConfigurationFilter;
  }) {
    this.QueueArn = args.QueueArn;
    this.Events = args.Events;
    this.Id = args.Id;
    this.Filter = args.Filter;
  }
}

export class QueueConfigurationDeprecated implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#QueueConfigurationDeprecated";
  readonly Id?: string;
  readonly Event?: Event | string;
  readonly Queue?: string;
  readonly Events?: Array<Event | string>;
  constructor(args: {
    Id?: string;
    Event?: Event | string;
    Queue?: string;
    Events?: Array<Event | string>;
  }) {
    this.Id = args.Id;
    this.Event = args.Event;
    this.Queue = args.Queue;
    this.Events = args.Events;
  }
}

export enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
};

export class RecordsEvent implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RecordsEvent";
  readonly Payload?: Uint8Array;
  constructor(args: {
    Payload?: Uint8Array;
  }) {
    this.Payload = args.Payload;
  }
}

export class Redirect implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Redirect";
  readonly HttpRedirectCode?: string;
  readonly ReplaceKeyWith?: string;
  readonly Protocol?: Protocol | string;
  readonly HostName?: string;
  readonly ReplaceKeyPrefixWith?: string;
  constructor(args: {
    HttpRedirectCode?: string;
    ReplaceKeyWith?: string;
    Protocol?: Protocol | string;
    HostName?: string;
    ReplaceKeyPrefixWith?: string;
  }) {
    this.HttpRedirectCode = args.HttpRedirectCode;
    this.ReplaceKeyWith = args.ReplaceKeyWith;
    this.Protocol = args.Protocol;
    this.HostName = args.HostName;
    this.ReplaceKeyPrefixWith = args.ReplaceKeyPrefixWith;
  }
}

export class RedirectAllRequestsTo implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RedirectAllRequestsTo";
  readonly HostName: string | undefined;
  readonly Protocol?: Protocol | string;
  constructor(args: {
    HostName: string | undefined;
    Protocol?: Protocol | string;
  }) {
    this.HostName = args.HostName;
    this.Protocol = args.Protocol;
  }
}

export class ReplicationConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationConfiguration";
  readonly Role: string | undefined;
  readonly Rules: Array<ReplicationRule> | undefined;
  constructor(args: {
    Role: string | undefined;
    Rules: Array<ReplicationRule> | undefined;
  }) {
    this.Role = args.Role;
    this.Rules = args.Rules;
  }
}

export class ReplicationObjective implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationObjective";
  readonly Status: ReplicationObjectiveStatus | string | undefined;
  readonly Time: ReplicationTime | undefined;
  constructor(args: {
    Status: ReplicationObjectiveStatus | string | undefined;
    Time: ReplicationTime | undefined;
  }) {
    this.Status = args.Status;
    this.Time = args.Time;
  }
}

export type ReplicationObjectiveStatus = "Enabled" | "Disabled"

export class ReplicationRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationRule";
  readonly Destination: Destination | undefined;
  readonly Filter?: ReplicationRuleFilter;
  readonly Priority?: number;
  readonly ID?: string;
  readonly ExistingObjectReplication?: ExistingObjectReplication;
  readonly DeleteMarkerReplication?: DeleteMarkerReplication;
  readonly Prefix?: string;
  readonly SourceSelectionCriteria?: SourceSelectionCriteria;
  readonly Status: ReplicationRuleStatus | string | undefined;
  constructor(args: {
    Destination: Destination | undefined;
    Filter?: ReplicationRuleFilter;
    Priority?: number;
    ID?: string;
    ExistingObjectReplication?: ExistingObjectReplication;
    DeleteMarkerReplication?: DeleteMarkerReplication;
    Prefix?: string;
    SourceSelectionCriteria?: SourceSelectionCriteria;
    Status: ReplicationRuleStatus | string | undefined;
  }) {
    this.Destination = args.Destination;
    this.Filter = args.Filter;
    this.Priority = args.Priority;
    this.ID = args.ID;
    this.ExistingObjectReplication = args.ExistingObjectReplication;
    this.DeleteMarkerReplication = args.DeleteMarkerReplication;
    this.Prefix = args.Prefix;
    this.SourceSelectionCriteria = args.SourceSelectionCriteria;
    this.Status = args.Status;
  }
}

export class ReplicationRuleAndOperator implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationRuleAndOperator";
  readonly Prefix?: string;
  readonly Tags?: Array<Tag>;
  constructor(args: {
    Prefix?: string;
    Tags?: Array<Tag>;
  }) {
    this.Prefix = args.Prefix;
    this.Tags = args.Tags;
  }
}

export class ReplicationRuleFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationRuleFilter";
  readonly Tag?: Tag;
  readonly And?: ReplicationRuleAndOperator;
  readonly Prefix?: string;
  constructor(args: {
    Tag?: Tag;
    And?: ReplicationRuleAndOperator;
    Prefix?: string;
  }) {
    this.Tag = args.Tag;
    this.And = args.And;
    this.Prefix = args.Prefix;
  }
}

export type ReplicationRuleStatus = "Enabled" | "Disabled"

export type ReplicationStatus = "COMPLETE" | "PENDING" | "FAILED" | "REPLICA"

export class ReplicationTime implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ReplicationTime";
  readonly Hours?: number;
  readonly Minutes?: number;
  constructor(args: {
    Hours?: number;
    Minutes?: number;
  }) {
    this.Hours = args.Hours;
    this.Minutes = args.Minutes;
  }
}

export type RequestCharged = "requester"

export type RequestPayer = "requester"

export class RequestPaymentConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RequestPaymentConfiguration";
  readonly Payer: Payer | string | undefined;
  constructor(args: {
    Payer: Payer | string | undefined;
  }) {
    this.Payer = args.Payer;
  }
}

export class RequestProgress implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RequestProgress";
  readonly Enabled?: boolean;
  constructor(args: {
    Enabled?: boolean;
  }) {
    this.Enabled = args.Enabled;
  }
}

export class RestoreObjectOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RestoreObjectOutput";
  readonly RequestCharged?: RequestCharged | string;
  readonly RestoreOutputPath?: string;
  constructor(args: {
    RequestCharged?: RequestCharged | string;
    RestoreOutputPath?: string;
  }) {
    this.RequestCharged = args.RequestCharged;
    this.RestoreOutputPath = args.RestoreOutputPath;
  }
}

export class RestoreObjectRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RestoreObjectRequest";
  readonly VersionId?: string;
  readonly Key: string | undefined;
  readonly RestoreRequest?: RestoreRequest;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  constructor(args: {
    VersionId?: string;
    Key: string | undefined;
    RestoreRequest?: RestoreRequest;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
  }) {
    this.VersionId = args.VersionId;
    this.Key = args.Key;
    this.RestoreRequest = args.RestoreRequest;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
  }
}

export class RestoreRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RestoreRequest";
  readonly Description?: string;
  readonly SelectParameters?: SelectParameters;
  readonly Tier?: Tier | string;
  readonly Days?: number;
  readonly Type?: RestoreRequestType | string;
  readonly GlacierJobParameters?: GlacierJobParameters;
  readonly OutputLocation?: OutputLocation;
  constructor(args: {
    Description?: string;
    SelectParameters?: SelectParameters;
    Tier?: Tier | string;
    Days?: number;
    Type?: RestoreRequestType | string;
    GlacierJobParameters?: GlacierJobParameters;
    OutputLocation?: OutputLocation;
  }) {
    this.Description = args.Description;
    this.SelectParameters = args.SelectParameters;
    this.Tier = args.Tier;
    this.Days = args.Days;
    this.Type = args.Type;
    this.GlacierJobParameters = args.GlacierJobParameters;
    this.OutputLocation = args.OutputLocation;
  }
}

export enum RestoreRequestType {
  SELECT = "SELECT",
};

export class RoutingRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#RoutingRule";
  readonly Condition?: Condition;
  readonly Redirect: Redirect | undefined;
  constructor(args: {
    Condition?: Condition;
    Redirect: Redirect | undefined;
  }) {
    this.Condition = args.Condition;
    this.Redirect = args.Redirect;
  }
}

export class Rule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Rule";
  readonly Prefix: string | undefined;
  readonly AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  readonly Expiration?: LifecycleExpiration;
  readonly Transition?: Transition;
  readonly ID?: string;
  readonly Status: ExpirationStatus | string | undefined;
  readonly NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  readonly NoncurrentVersionTransition?: NoncurrentVersionTransition;
  constructor(args: {
    Prefix: string | undefined;
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    Expiration?: LifecycleExpiration;
    Transition?: Transition;
    ID?: string;
    Status: ExpirationStatus | string | undefined;
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    NoncurrentVersionTransition?: NoncurrentVersionTransition;
  }) {
    this.Prefix = args.Prefix;
    this.AbortIncompleteMultipartUpload = args.AbortIncompleteMultipartUpload;
    this.Expiration = args.Expiration;
    this.Transition = args.Transition;
    this.ID = args.ID;
    this.Status = args.Status;
    this.NoncurrentVersionExpiration = args.NoncurrentVersionExpiration;
    this.NoncurrentVersionTransition = args.NoncurrentVersionTransition;
  }
}

export class S3KeyFilter implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#S3KeyFilter";
  readonly FilterRules?: Array<FilterRule>;
  constructor(args: {
    FilterRules?: Array<FilterRule>;
  }) {
    this.FilterRules = args.FilterRules;
  }
}

export class S3Location implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#S3Location";
  readonly CannedACL?: ObjectCannedACL | string;
  readonly Prefix: string | undefined;
  readonly StorageClass?: StorageClass | string;
  readonly Tagging?: Tagging;
  readonly AccessControlList?: Array<Grant>;
  readonly BucketName: string | undefined;
  readonly UserMetadata?: Array<MetadataEntry>;
  readonly Encryption?: Encryption;
  constructor(args: {
    CannedACL?: ObjectCannedACL | string;
    Prefix: string | undefined;
    StorageClass?: StorageClass | string;
    Tagging?: Tagging;
    AccessControlList?: Array<Grant>;
    BucketName: string | undefined;
    UserMetadata?: Array<MetadataEntry>;
    Encryption?: Encryption;
  }) {
    this.CannedACL = args.CannedACL;
    this.Prefix = args.Prefix;
    this.StorageClass = args.StorageClass;
    this.Tagging = args.Tagging;
    this.AccessControlList = args.AccessControlList;
    this.BucketName = args.BucketName;
    this.UserMetadata = args.UserMetadata;
    this.Encryption = args.Encryption;
  }
}

export class SSEKMS implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SSEKMS";
  readonly KeyId: string | undefined;
  constructor(args: {
    KeyId: string | undefined;
  }) {
    this.KeyId = args.KeyId;
  }
}

export class SSES3 implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SSES3";
  constructor(args?: {}) {}
}

export type SelectObjectContentEventStream = TaggedUnion<{
  Records?: RecordsEvent;
  End?: EndEvent;
  Progress?: ProgressEvent;
  Stats?: StatsEvent;
  Cont?: ContinuationEvent;
}>;

namespace SelectObjectContentEventStream {
  export interface SelectObjectContentEventStreamVisitor<T> {
    Records: (value: RecordsEvent) => T;
    End: (value: EndEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Stats: (value: StatsEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    _: (name: string, value: any) => T;
  }

  export function visit<T>(
    value: SelectObjectContentEventStream,
    visitor: SelectObjectContentEventStreamVisitor<T>
  ): T {
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.End !== undefined) return visitor.End(value.End);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export class SelectObjectContentOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SelectObjectContentOutput";
  readonly Payload?: SelectObjectContentEventStream;
  constructor(args: {
    Payload?: SelectObjectContentEventStream;
  }) {
    this.Payload = args.Payload;
  }
}

export class SelectObjectContentRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SelectObjectContentRequest";
  readonly Key: string | undefined;
  readonly InputSerialization: InputSerialization | undefined;
  readonly SSECustomerAlgorithm?: string;
  readonly Bucket: string | undefined;
  readonly Expression: string | undefined;
  readonly SSECustomerKeyMD5?: string;
  readonly ExpressionType: ExpressionType | string | undefined;
  readonly OutputSerialization: OutputSerialization | undefined;
  readonly SSECustomerKey?: string;
  readonly RequestProgress?: RequestProgress;
  constructor(args: {
    Key: string | undefined;
    InputSerialization: InputSerialization | undefined;
    SSECustomerAlgorithm?: string;
    Bucket: string | undefined;
    Expression: string | undefined;
    SSECustomerKeyMD5?: string;
    ExpressionType: ExpressionType | string | undefined;
    OutputSerialization: OutputSerialization | undefined;
    SSECustomerKey?: string;
    RequestProgress?: RequestProgress;
  }) {
    this.Key = args.Key;
    this.InputSerialization = args.InputSerialization;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.Bucket = args.Bucket;
    this.Expression = args.Expression;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.ExpressionType = args.ExpressionType;
    this.OutputSerialization = args.OutputSerialization;
    this.SSECustomerKey = args.SSECustomerKey;
    this.RequestProgress = args.RequestProgress;
  }
}

export class SelectParameters implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SelectParameters";
  readonly Expression: string | undefined;
  readonly OutputSerialization: OutputSerialization | undefined;
  readonly ExpressionType: ExpressionType | string | undefined;
  readonly InputSerialization: InputSerialization | undefined;
  constructor(args: {
    Expression: string | undefined;
    OutputSerialization: OutputSerialization | undefined;
    ExpressionType: ExpressionType | string | undefined;
    InputSerialization: InputSerialization | undefined;
  }) {
    this.Expression = args.Expression;
    this.OutputSerialization = args.OutputSerialization;
    this.ExpressionType = args.ExpressionType;
    this.InputSerialization = args.InputSerialization;
  }
}

export type ServerSideEncryption = "AES256" | "aws:kms"

export class ServerSideEncryptionByDefault implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ServerSideEncryptionByDefault";
  readonly SSEAlgorithm: ServerSideEncryption | string | undefined;
  readonly KMSMasterKeyID?: string;
  constructor(args: {
    SSEAlgorithm: ServerSideEncryption | string | undefined;
    KMSMasterKeyID?: string;
  }) {
    this.SSEAlgorithm = args.SSEAlgorithm;
    this.KMSMasterKeyID = args.KMSMasterKeyID;
  }
}

export class ServerSideEncryptionConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ServerSideEncryptionConfiguration";
  readonly Rules: Array<ServerSideEncryptionRule> | undefined;
  constructor(args: {
    Rules: Array<ServerSideEncryptionRule> | undefined;
  }) {
    this.Rules = args.Rules;
  }
}

export class ServerSideEncryptionRule implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#ServerSideEncryptionRule";
  readonly ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
  constructor(args: {
    ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
  }) {
    this.ApplyServerSideEncryptionByDefault = args.ApplyServerSideEncryptionByDefault;
  }
}

export class SourceSelectionCriteria implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SourceSelectionCriteria";
  readonly SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  constructor(args: {
    SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  }) {
    this.SseKmsEncryptedObjects = args.SseKmsEncryptedObjects;
  }
}

export class SseKmsEncryptedObjects implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#SseKmsEncryptedObjects";
  readonly Status: SseKmsEncryptedObjectsStatus | string | undefined;
  constructor(args: {
    Status: SseKmsEncryptedObjectsStatus | string | undefined;
  }) {
    this.Status = args.Status;
  }
}

export type SseKmsEncryptedObjectsStatus = "Enabled" | "Disabled"

export class Stats implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Stats";
  readonly BytesReturned?: number;
  readonly BytesScanned?: number;
  readonly BytesProcessed?: number;
  constructor(args: {
    BytesReturned?: number;
    BytesScanned?: number;
    BytesProcessed?: number;
  }) {
    this.BytesReturned = args.BytesReturned;
    this.BytesScanned = args.BytesScanned;
    this.BytesProcessed = args.BytesProcessed;
  }
}

export class StatsEvent implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#StatsEvent";
  readonly Details?: Stats;
  constructor(args: {
    Details?: Stats;
  }) {
    this.Details = args.Details;
  }
}

export type StorageClass = "STANDARD" | "REDUCED_REDUNDANCY" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "DEEP_ARCHIVE"

export class StorageClassAnalysis implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#StorageClassAnalysis";
  readonly DataExport?: StorageClassAnalysisDataExport;
  constructor(args: {
    DataExport?: StorageClassAnalysisDataExport;
  }) {
    this.DataExport = args.DataExport;
  }
}

export class StorageClassAnalysisDataExport implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#StorageClassAnalysisDataExport";
  readonly OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;
  readonly Destination: AnalyticsExportDestination | undefined;
  constructor(args: {
    OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;
    Destination: AnalyticsExportDestination | undefined;
  }) {
    this.OutputSchemaVersion = args.OutputSchemaVersion;
    this.Destination = args.Destination;
  }
}

export type StorageClassAnalysisSchemaVersion = "V_1"

export class Tag implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Tag";
  readonly Value: string | undefined;
  readonly Key: string | undefined;
  constructor(args: {
    Value: string | undefined;
    Key: string | undefined;
  }) {
    this.Value = args.Value;
    this.Key = args.Key;
  }
}

export class Tagging implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Tagging";
  readonly TagSet: Array<Tag> | undefined;
  constructor(args: {
    TagSet: Array<Tag> | undefined;
  }) {
    this.TagSet = args.TagSet;
  }
}

export type TaggingDirective = "COPY" | "REPLACE"

export class TargetGrant implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#TargetGrant";
  readonly Grantee?: Grantee;
  readonly Permission?: BucketLogsPermission | string;
  constructor(args: {
    Grantee?: Grantee;
    Permission?: BucketLogsPermission | string;
  }) {
    this.Grantee = args.Grantee;
    this.Permission = args.Permission;
  }
}

export type Tier = "Standard" | "Bulk" | "Expedited"

export class TopicConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#TopicConfiguration";
  readonly TopicArn: string | undefined;
  readonly Filter?: NotificationConfigurationFilter;
  readonly Events: Array<Event | string> | undefined;
  readonly Id?: string;
  constructor(args: {
    TopicArn: string | undefined;
    Filter?: NotificationConfigurationFilter;
    Events: Array<Event | string> | undefined;
    Id?: string;
  }) {
    this.TopicArn = args.TopicArn;
    this.Filter = args.Filter;
    this.Events = args.Events;
    this.Id = args.Id;
  }
}

export class TopicConfigurationDeprecated implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#TopicConfigurationDeprecated";
  readonly Event?: Event | string;
  readonly Events?: Array<Event | string>;
  readonly Id?: string;
  readonly Topic?: string;
  constructor(args: {
    Event?: Event | string;
    Events?: Array<Event | string>;
    Id?: string;
    Topic?: string;
  }) {
    this.Event = args.Event;
    this.Events = args.Events;
    this.Id = args.Id;
    this.Topic = args.Topic;
  }
}

export class Transition implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#Transition";
  readonly Date?: Date;
  readonly Days?: number;
  readonly StorageClass?: TransitionStorageClass | string;
  constructor(args: {
    Date?: Date;
    Days?: number;
    StorageClass?: TransitionStorageClass | string;
  }) {
    this.Date = args.Date;
    this.Days = args.Days;
    this.StorageClass = args.StorageClass;
  }
}

export type TransitionStorageClass = "GLACIER" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "DEEP_ARCHIVE"

export type Type = "CanonicalUser" | "AmazonCustomerByEmail" | "Group"

export class UploadPartCopyOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#UploadPartCopyOutput";
  readonly SSEKMSKeyId?: string;
  readonly RequestCharged?: RequestCharged | string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly CopyPartResult?: CopyPartResult;
  readonly SSECustomerAlgorithm?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly CopySourceVersionId?: string;
  constructor(args: {
    SSEKMSKeyId?: string;
    RequestCharged?: RequestCharged | string;
    ServerSideEncryption?: ServerSideEncryption | string;
    CopyPartResult?: CopyPartResult;
    SSECustomerAlgorithm?: string;
    SSECustomerKeyMD5?: string;
    CopySourceVersionId?: string;
  }) {
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.RequestCharged = args.RequestCharged;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.CopyPartResult = args.CopyPartResult;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.CopySourceVersionId = args.CopySourceVersionId;
  }
}

export class UploadPartCopyRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#UploadPartCopyRequest";
  readonly SSECustomerAlgorithm?: string;
  readonly SSECustomerKey?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly CopySource: string | undefined;
  readonly Key: string | undefined;
  readonly CopySourceSSECustomerKeyMD5?: string;
  readonly CopySourceIfNoneMatch?: string;
  readonly RequestPayer?: RequestPayer | string;
  readonly Bucket: string | undefined;
  readonly CopySourceRange?: string;
  readonly CopySourceSSECustomerKey?: string;
  readonly CopySourceIfUnmodifiedSince?: string;
  readonly CopySourceSSECustomerAlgorithm?: string;
  readonly PartNumber: string | undefined;
  readonly UploadId: string | undefined;
  readonly CopySourceIfMatch?: string;
  readonly CopySourceIfModifiedSince?: string;
  constructor(args: {
    SSECustomerAlgorithm?: string;
    SSECustomerKey?: string;
    SSECustomerKeyMD5?: string;
    CopySource: string | undefined;
    Key: string | undefined;
    CopySourceSSECustomerKeyMD5?: string;
    CopySourceIfNoneMatch?: string;
    RequestPayer?: RequestPayer | string;
    Bucket: string | undefined;
    CopySourceRange?: string;
    CopySourceSSECustomerKey?: string;
    CopySourceIfUnmodifiedSince?: string;
    CopySourceSSECustomerAlgorithm?: string;
    PartNumber: string | undefined;
    UploadId: string | undefined;
    CopySourceIfMatch?: string;
    CopySourceIfModifiedSince?: string;
  }) {
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSECustomerKey = args.SSECustomerKey;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.CopySource = args.CopySource;
    this.Key = args.Key;
    this.CopySourceSSECustomerKeyMD5 = args.CopySourceSSECustomerKeyMD5;
    this.CopySourceIfNoneMatch = args.CopySourceIfNoneMatch;
    this.RequestPayer = args.RequestPayer;
    this.Bucket = args.Bucket;
    this.CopySourceRange = args.CopySourceRange;
    this.CopySourceSSECustomerKey = args.CopySourceSSECustomerKey;
    this.CopySourceIfUnmodifiedSince = args.CopySourceIfUnmodifiedSince;
    this.CopySourceSSECustomerAlgorithm = args.CopySourceSSECustomerAlgorithm;
    this.PartNumber = args.PartNumber;
    this.UploadId = args.UploadId;
    this.CopySourceIfMatch = args.CopySourceIfMatch;
    this.CopySourceIfModifiedSince = args.CopySourceIfModifiedSince;
  }
}

export class UploadPartOutput implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#UploadPartOutput";
  readonly SSECustomerKeyMD5?: string;
  readonly RequestCharged?: RequestCharged | string;
  readonly ServerSideEncryption?: ServerSideEncryption | string;
  readonly SSEKMSKeyId?: string;
  readonly ETag?: string;
  readonly SSECustomerAlgorithm?: string;
  constructor(args: {
    SSECustomerKeyMD5?: string;
    RequestCharged?: RequestCharged | string;
    ServerSideEncryption?: ServerSideEncryption | string;
    SSEKMSKeyId?: string;
    ETag?: string;
    SSECustomerAlgorithm?: string;
  }) {
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.RequestCharged = args.RequestCharged;
    this.ServerSideEncryption = args.ServerSideEncryption;
    this.SSEKMSKeyId = args.SSEKMSKeyId;
    this.ETag = args.ETag;
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
  }
}

export class UploadPartRequest implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#UploadPartRequest";
  readonly SSECustomerAlgorithm?: string;
  readonly SSECustomerKeyMD5?: string;
  readonly Bucket: string | undefined;
  readonly RequestPayer?: RequestPayer | string;
  readonly PartNumber: string | undefined;
  readonly UploadId: string | undefined;
  readonly Body?: Uint8Array;
  readonly ContentMD5?: string;
  readonly ContentLength?: string;
  readonly SSECustomerKey?: string;
  readonly Key: string | undefined;
  constructor(args: {
    SSECustomerAlgorithm?: string;
    SSECustomerKeyMD5?: string;
    Bucket: string | undefined;
    RequestPayer?: RequestPayer | string;
    PartNumber: string | undefined;
    UploadId: string | undefined;
    Body?: Uint8Array;
    ContentMD5?: string;
    ContentLength?: string;
    SSECustomerKey?: string;
    Key: string | undefined;
  }) {
    this.SSECustomerAlgorithm = args.SSECustomerAlgorithm;
    this.SSECustomerKeyMD5 = args.SSECustomerKeyMD5;
    this.Bucket = args.Bucket;
    this.RequestPayer = args.RequestPayer;
    this.PartNumber = args.PartNumber;
    this.UploadId = args.UploadId;
    this.Body = args.Body;
    this.ContentMD5 = args.ContentMD5;
    this.ContentLength = args.ContentLength;
    this.SSECustomerKey = args.SSECustomerKey;
    this.Key = args.Key;
  }
}

export class VersioningConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#VersioningConfiguration";
  readonly Status?: BucketVersioningStatus | string;
  readonly MFADelete?: MFADelete | string;
  constructor(args: {
    Status?: BucketVersioningStatus | string;
    MFADelete?: MFADelete | string;
  }) {
    this.Status = args.Status;
    this.MFADelete = args.MFADelete;
  }
}

export class WebsiteConfiguration implements $SmithyStructure {
  readonly $id = "com.amazonaws.s3#WebsiteConfiguration";
  readonly ErrorDocument?: ErrorDocument;
  readonly RedirectAllRequestsTo?: RedirectAllRequestsTo;
  readonly RoutingRules?: Array<RoutingRule>;
  readonly IndexDocument?: IndexDocument;
  constructor(args: {
    ErrorDocument?: ErrorDocument;
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    RoutingRules?: Array<RoutingRule>;
    IndexDocument?: IndexDocument;
  }) {
    this.ErrorDocument = args.ErrorDocument;
    this.RedirectAllRequestsTo = args.RedirectAllRequestsTo;
    this.RoutingRules = args.RoutingRules;
    this.IndexDocument = args.IndexDocument;
  }
}
