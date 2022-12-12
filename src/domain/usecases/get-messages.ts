import { Chat } from "../entities/chat";

export interface IGetMessages {
  get (): Promise<Chat | null>
}
