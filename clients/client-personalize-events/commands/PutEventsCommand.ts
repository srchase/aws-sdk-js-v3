import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { PutEventsRequest } from "../models/index";
import {
  deserializeAws_restJson1_1PutEventsCommand,
  serializeAws_restJson1_1PutEventsCommand,
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpOptions as __HttpOptions,
} from "@aws-sdk/types";

export type PutEventsCommandInput = PutEventsRequest;
export type PutEventsCommandOutput = {};

export class PutEventsCommand extends $Command<PutEventsCommandInput, PutEventsCommandOutput, PersonalizeEventsClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<PutEventsCommandInput, PutEventsCommandOutput>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpOptions
  ): Handler<PutEventsCommandInput, PutEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEventsCommandInput,
    protocol: string,
    context: SerdeContext
  ): __HttpRequest {
    switch (protocol) {
      case 'aws.rest-json-1.1':
        return serializeAws_restJson1_1PutEventsCommand(input, context);
      default:
        throw new Error("Unknown protocol, " + protocol + ". Expected one of: []");
    }
  }

  private deserialize(
    output: __HttpResponse,
    protocol: string,
    context: SerdeContext
  ): Promise<PutEventsCommandOutput> {
    switch (protocol) {
      case 'aws.rest-json-1.1':
        return deserializeAws_restJson1_1PutEventsCommand(output, context);
      default:
        throw new Error("Unknown protocol, " + protocol + ". Expected one of: []");
    }
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
