import { Message } from "../entities/message";

export interface ISendMessage {
  send (message: Message): Promise<void>
}
