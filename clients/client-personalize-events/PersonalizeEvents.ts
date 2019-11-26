import { PersonalizeEventsClient } from "./PersonalizeEventsClient";
import {
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "./commands/PutEventsCommand";

/**
 *
 *       <zonbook>
 *          <para></para>
 *       </zonbook>
 *       <xhtml>
 *          <p></p>
 *       </xhtml>
 *
 */
export class PersonalizeEvents extends PersonalizeEventsClient {
  /**
   *
   *       <zonbook>
   *          <para>Records user interaction event data.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>Records user interaction event data.</p>
   *       </xhtml>
   *
   */
  public putEventsCommand(args: PutEventsCommandInput): Promise<PutEventsCommandOutput>;
  public putEventsCommand(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  public putEventsCommand(
    args: PutEventsCommandInput,
    cb?: (err: any, data?: PutEventsCommandOutput) => void
  ): Promise<PutEventsCommandOutput> | void {
    const command = new PutEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

}
