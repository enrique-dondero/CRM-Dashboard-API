import { APP_URL } from "root/config/env-vars";
import { renderEmail } from "./render-email";

export const inviteManagerEmailTemplate = (email: string, token: string) => renderEmail(`
<mj-section background-color="#ffffff" background-repeat="repeat" background-size="auto" padding-top="173px" text-align="center" padding-bottom="0px" >
<mj-column>
  <mj-text font-weight="600" align="center" color="#1E202E" font-family="Avenir, Georgia,Helvetica,Arial,sans-serif" font-size="28px" line-height="22px" padding-bottom="10px" padding-top="10px" >
    ${email}
  </mj-text>
  <mj-text font-weight="100" align="center" color="#1E202E" font-family="Avenir, Georgia,Helvetica,Arial,sans-serif" font-size="24px" line-height="22px" padding-top="15px" padding-bottom="0px" >
    You have been invited to partner with CRM. To complete the onboarding process, please click the button below.
  </mj-text>
          <mj-button href="${APP_URL}/register?token=${token}" padding-top="55px" align="center" background-color="#ffffff" border="2px solid #1E202E" border-radius="10px" color="#1E202E" font-family="Georgia, Helvetica, Arial, sans-serif" font-size="22px" font-weight="normal" inner-padding="10px 25px" text-decoration="none" text-transform="none" vertical-align="middle">Confirm now &nbsp;<img src="https://crm-public-assets.s3.eu-west-2.amazonaws.com/arrow.png" style="width:24px; vertical-align:middle;" /></mj-button>
</mj-column>
</mj-section>
`);
