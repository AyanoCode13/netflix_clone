import { google } from "googleapis";

const oAuthClient = (client_id, client_secret) => {
  return new google.auth.OAuth2({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: "http://localhost:8000/api/v1/auth/google/callback",
  });
};

export const getGoogleOAuthUrl = () => {
  return oAuthClient(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  ).generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    include_granted_scopes: true,
  });
};

export const getGoogleUser = async (code) => {
  const { tokens } = await oAuthClient(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  ).getToken(code);
  const oauth2Client = new google.auth.OAuth2(); // create new auth client
  oauth2Client.setCredentials({ access_token: tokens.access_token }); // use the new auth client with the access_token
  let oauth2 = google.oauth2({
    auth: oauth2Client,
    version: "v2",
  });
  const { data } = await oauth2.userinfo.get(); // get user info
  console.log(data);
  return data;
};
