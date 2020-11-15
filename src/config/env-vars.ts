import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const APP_DEBUG = Boolean(
  JSON.parse(String(process.env["APP_DEBUG"]).toLowerCase())
);

export const APP_URL = process.env.APP_URL || "https://dev-api.crm.com";
export const SEND_MAIL_TYPE = process.env.SEND_MAIL_TYPE || "smtp";
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export const SMTP_HOST = process.env.SMTP_HOST;
export const SMTP_PORT = process.env.SMTP_PORT;
export const SMTP_USERNAME = process.env.SMTP_USERNAME;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
export const EMAIL_FROM = process.env.EMAIL_FROM;
export const NODE_ENV = process.env.NODE_ENV;

export const MONGODB_URI_SCHEME = process.env["MONGODB_URI_SCHEME"]
  ? process.env["MONGODB_URI_SCHEME"]
  : "mongodb";
export const MONGODB_USER = process.env["MONGODB_USER"];
export const MONGODB_PASSWORD = process.env["MONGODB_PASSWORD"];
export const MONGODB_HOST = process.env["MONGODB_HOST"];
export const MONGODB_PORT = process.env["MONGODB_PORT"];
export const MONGODB_DATABASE = process.env["MONGODB_DATABASE"];

let mongoUri = process.env["MONGODB_URL"];

if (!mongoUri) {
  mongoUri = `${MONGODB_URI_SCHEME}://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

  if (MONGODB_USER) {
    mongoUri = `${MONGODB_URI_SCHEME}://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;
  }
}
export const MONGODB_URI = mongoUri;

// Nylas Config
export const NYLAS_CLIENT_ID = process.env.NYLAS_CLIENT_ID;
export const NYLAS_CLIENT_SECRET = process.env.NYLAS_CLIENT_SECRET;
export const NYLAS_REDIRECT = process.env.NYLAS_REDIRECT;
export const NYLAS_HOOKS = process.env.NYLAS_HOOKS;

// Access Token Config
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;

// Dev Admin
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
