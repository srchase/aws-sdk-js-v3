import * as _smithy from "../lib/smithy";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *       <zonbook>
 *          <para>Represents user interaction event information sent using the
 *       <code>PutEvents</code> API.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>Represents user interaction event information sent using the
 *       <code>PutEvents</code> API.</p>
 *       </xhtml>
 *
 */
export interface Event {
  __type?: "Event";
  /**
   *
   *       <zonbook>
   *          <para>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinquish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinquish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</p>
   *       </xhtml>
   *
   */
  eventId?: string;

  /**
   *
   *       <zonbook>
   *          <para>The type of event. This property corresponds to the <code>EVENT_TYPE</code>
   *       field of the Interactions schema.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The type of event. This property corresponds to the <code>EVENT_TYPE</code>
   *       field of the Interactions schema.</p>
   *       </xhtml>
   *
   */
  eventType: string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>A string map of event-specific data that you might choose to record. For example, if a
   *       user rates a movie on your site, you might send the movie ID and rating, and the number of
   *       movie ratings made by the user.</para>
   *          <para>Each item in the map consists of a key-value pair. For example,</para>
   *          <para>
   *             <code>{"itemId": "movie1"}</code>
   *          </para>
   *          <para>
   *             <code>{"itemId": "movie2", "eventValue": "4.5"}</code>
   *          </para>
   *          <para>
   *             <code>{"itemId": "movie3", "eventValue": "3", "numberOfRatings": "12"}</code>
   *          </para>
   *          <para>The keys use camel case names that match the fields in the Interactions
   *       schema. The <code>itemId</code> and <code>eventValue</code> keys correspond to the
   *       <code>ITEM_ID</code> and <code>EVENT_VALUE</code> fields.
   *       In the above example, the <code>eventType</code> might be 'MovieRating' with
   *       <code>eventValue</code> being the rating. The <code>numberOfRatings</code> would match the
   *       'NUMBER_OF_RATINGS' field defined in the Interactions schema.</para>
   *
   *
   *       </zonbook>
   *       <xhtml>
   *          <p>A string map of event-specific data that you might choose to record. For example, if a
   *       user rates a movie on your site, you might send the movie ID and rating, and the number of
   *       movie ratings made by the user.</p>
   *          <p>Each item in the map consists of a key-value pair. For example,</p>
   *          <p>
   *             <code>{"itemId": "movie1"}</code>
   *          </p>
   *          <p>
   *             <code>{"itemId": "movie2", "eventValue": "4.5"}</code>
   *          </p>
   *          <p>
   *             <code>{"itemId": "movie3", "eventValue": "3", "numberOfRatings": "12"}</code>
   *          </p>
   *          <p>The keys use camel case names that match the fields in the Interactions
   *       schema. The <code>itemId</code> and <code>eventValue</code> keys correspond to the
   *       <code>ITEM_ID</code> and <code>EVENT_VALUE</code> fields.
   *       In the above example, the <code>eventType</code> might be 'MovieRating' with
   *       <code>eventValue</code> being the rating. The <code>numberOfRatings</code> would match the
   *       'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p>
   *
   *
   *       </xhtml>
   *
   */
  properties: string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The timestamp on the client side when the event occurred.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The timestamp on the client side when the event occurred.</p>
   *       </xhtml>
   *
   */
  sentAt: Date | undefined;
}

export namespace Event {
  export function isa(o: any): o is Event {
    return _smithy.isa(o, "Event");
  }
}

export interface PutEventsRequest {
  __type?: "PutEventsRequest";
  /**
   *
   *       <zonbook>
   *          <para>A list of event data from the session.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A list of event data from the session.</p>
   *       </xhtml>
   *
   */
  eventList: Array<Event> | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The session ID associated with the user's visit.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The session ID associated with the user's visit.</p>
   *       </xhtml>
   *
   */
  sessionId: string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The tracking ID for the event.
   *       The ID is generated by a call to the
   *       <ulink type="documentation" url="personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</ulink> API.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The tracking ID for the event.
   *       The ID is generated by a call to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.</p>
   *       </xhtml>
   *
   */
  trackingId: string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The user associated with the event.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The user associated with the event.</p>
   *       </xhtml>
   *
   */
  userId?: string;
}

export namespace PutEventsRequest {
  export function isa(o: any): o is PutEventsRequest {
    return _smithy.isa(o, "PutEventsRequest");
  }
}

/**
 *
 *       <zonbook>
 *          <para>Provide a valid value for the field or parameter.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>Provide a valid value for the field or parameter.</p>
 *       </xhtml>
 *
 */
export interface InvalidInputException extends _smithy.SmithyException {
  __type: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return _smithy.isa(o, "InvalidInputException");
  }
}
