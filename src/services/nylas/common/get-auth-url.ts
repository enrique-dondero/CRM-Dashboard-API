import { NYLAS_REDIRECT } from "root/config/env-vars";
import { nylasModel } from "root/providers";

export const getNylasAuthUrl = async (email: string): Promise<string> => {
  const options = {
    loginHint: email,
    redirectURI: NYLAS_REDIRECT,
    scopes: [
      "email.read_only",
      "email.send",
      "email.modify",
      "email.send",
      "email.folders_and_labels",
      "email.metadata",
      "email.drafts",
      "calendar",
      "calendar.read_only",
      "room_resources.read_only",
      "contacts",
      "contacts.read_only",
    ],
  };

  const authUrl = nylasModel().urlForAuthentication(options);
  return authUrl;
};
