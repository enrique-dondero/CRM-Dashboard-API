import { SendNylasEmailReqeust } from "root/requests/nylas";
import { nylasModel, userModel } from "root/providers";
import fs from "fs";

export const sendNylasEmail = async (data: SendNylasEmailReqeust, user: User) => {
  const {
    toEmail,
    filePath,
    messageBody,
    subject
  } = data;

  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);

  const draft: any = await nylas.drafts.build({
    subject: subject,
    to: [{ email: toEmail }],
    body: messageBody
  });

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      const f: any = nylas.files.build({
        filename: filePath,
        data: data,
        contentType: "text/plain"
      });
      f.upload(async (_err: Error, file: any) => {
        draft.files = [file];
        await draft.save();
      });
    });
  } else {
    await draft.send();
  }
};
