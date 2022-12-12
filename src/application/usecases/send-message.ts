import { writeFile } from "fs";
import path from "path";
import { Message } from "../../domain/entities/message";
import { ISendMessage } from "../../domain/usecases/send-message";

export class SendMessage implements ISendMessage {
  async send(message: Message): Promise<void> {
    const {content, receiver, sender} = message
    writeFile(path.join(__dirname, "..", "..", "..", "data", "chat.txt"), `content: ${content} receiver: ${receiver} sender: ${sender}`, (err) => {
      if (err) throw err
    })
  }
}