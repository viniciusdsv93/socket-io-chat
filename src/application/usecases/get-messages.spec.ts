import fs from "fs"
import path from "path";
import { GetMessages } from "./get-messages";

describe('Send Message', () => {
  test('Should call fs.readFileSync with correct path', () => {
    const sut = new GetMessages()
    const readFileSyncSpy = jest.spyOn(fs, 'readFileSync')
    sut.get()
    expect(readFileSyncSpy).toHaveBeenCalledWith(path.resolve(__dirname, "..", "..", "..", "data", "chat.txt"))
  });
});
