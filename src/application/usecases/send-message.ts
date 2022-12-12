import { appendFile } from "fs";
import path from "path";
import { Message } from "../../domain/entities/message";
import { ISendMessage } from "../../domain/usecases/send-message";

export class SendMessage implements ISendMessage {
  async send(message: Message): Promise<void> {
    const {date, content, receiver, sender} = message
    appendFile(path.join(__dirname, "..", "..", "..", "data", "chat.txt"), `${date} content: ${content} receiver: ${receiver} sender: ${sender}\n`, (err) => {
      if (err) throw err
    })
  }
}