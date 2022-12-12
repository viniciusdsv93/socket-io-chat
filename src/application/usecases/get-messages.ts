import { readFile, readFileSync } from "fs";
import path from "path";
import { Chat } from "../../domain/entities/chat";
import { Message } from "../../domain/entities/message";
import { IGetMessages } from "../../domain/usecases/get-messages";

export class GetMessages implements IGetMessages {
  async get(): Promise<Chat | null> {
    const result = readFileSync(path.resolve(__dirname, "..", "..", "..", "data", "chat.txt"))
    const formattedResult = result.toString()
    const messages: any = formattedResult.split('\n').map((line) => {
      const destructuredLine = line.split(' ')
      const message: Message = {
        date: destructuredLine[0] + destructuredLine[1] + destructuredLine[2],
        content: destructuredLine[4],
        receiver: destructuredLine[6],
        sender: destructuredLine[8] 
      }
      return {
        messages: message
      }
    })
    return messages
  }

}