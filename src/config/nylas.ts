import Nylas from "nylas";
import { NYLAS_CLIENT_ID, NYLAS_CLIENT_SECRET } from "root/config/env-vars";

Nylas.config({
  clientId: NYLAS_CLIENT_ID,
  clientSecret: NYLAS_CLIENT_SECRET,
});

export default Nylas;
