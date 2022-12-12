import { readFile, readFileSync } from "fs";
import path from "path";
import { Chat } from "../../domain/entities/chat";
import { IGetMessages } from "../../domain/usecases/get-messages";

export class GetMessages implements IGetMessages {
  async get(): Promise<Chat | null> {
    const result = readFileSync(path.resolve(__dirname, "..", "..", "..", "data", "chat.txt"))
    return null
  }

}