import fs from "fs"
import { SendMessage } from "./send-message";

describe('Send Message', () => {
  test('Should call fs.writeFile with correct values', () => {
    const sut = new SendMessage()
    const writeFileSpy = jest.spyOn(fs, 'appendFile')
    sut.send({
      date: new Date().toLocaleString(),
      content: 'test_content',
      receiver: 'receiver_user',
      sender: 'sender_user'
    })
    expect(writeFileSpy).toHaveBeenCalledWith(expect.anything(), `${new Date().toLocaleString()} content: test_content receiver: receiver_user sender: sender_user\n`, expect.anything())
  });
});
