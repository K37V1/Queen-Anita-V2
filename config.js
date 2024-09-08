//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://beatray:123490@cluster0.bpoad.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBjYWs4RWdXY2pvL0FFQktMeGFEMkFaYVJId2wrMm51U0REc1RmTnZsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGVsUG5kcStvOEh5TmFwMGd1OW1VcmYwanJVOUd6SC9QdjdUQS9zcG8zcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSTdVWi9zelhzSEUrbTVaVjIyTk5MeE00cjZRdGVQdlRzOVhZM29aTGtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiQlFiL0VyL0s0dzN2RFd2eUNDTlFML2o1KzFUbm5Yd2djaEdFMERqWVJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCWFV3b0d6U0cwWXRYcnorSVlmT2lqZDlVcy95V20xSDRYcUpPNFZXMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBObTFPa3graE03STVLTzVCVlluQWRXZFdIL2V1eTR1VkdvandGWTZIQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURhSXUvUzRGL1haOUgxbWpIN1pWdFRzRHBRSXlKSXBVbC9nV1pYd0hXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhIYXdUUlAzQVpRR2hRQjNwc1RGZi9IMkVMNjFIUisyaVBHdldOdkZsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims0anlLSjcxSGozc1hManZmVWMrUmZBeEJiV3pzaTRQbUZTUW9WeHhraFBaNEMxL1owVnZ4TXo5SklRdzlRdDNGbDBIb0EwSmhnRi9LREthK2F1eER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImdTMTlRWW9veldyUFRIcXA5UmVEUUM3aTIrdVFsak5mSDhQYy9VbVdpWUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTA1Nzk3MTU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVCOUVENDMwN0MyNTNBMjYzQUI1QTA4NUMyRjYyNjQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU4MTQ0MDB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUwNTc5NzE1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMERFNjkyRDZEMkQ1MUM3MzQ0NjM5NEMyQ0RCRThDNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1ODE0NDAwfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhdHpkVjN3b1NRcWtaOXRfNWpqTVJnIiwicGhvbmVJZCI6IjA0YzRkODljLWU4ZGItNDU1My04MWQxLWIxZWQwZGI5ZWZhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSK2NsaG5ubzZXSTE2cXAzVzlsRnFIN3U5cEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielBPM1ZrUU02QWUzT0JLYVk3WTJhV1dwOUtRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlDM1NMTkI1IiwibWUiOnsiaWQiOiIyMzM1MDU3OTcxNTg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCZWF0IFJheSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGlQNVBjRkVPK3M5N1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicmxReFY3dHdmaG1HR21mQjJZSFhmL0dEcmg0UmpqR01GUTgyK0dzWExtND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRW1HdC9sRDdiVDM4NFBRL2tjSmZ0SVFCRDlKSjZUejdNdGZxL0VNRnlEMVFON2gxVkhxTHpwUkNHcyt5d21JSjF1OXBHV0MvK1g1WEVaNGJuL1dyQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZTZzI2OHVtdGQvR0VvcnJxUkdOU1ZSQ0NTSlp2ekVDZ04zdG5mMiswK1BqY2FyUkZjb1B4UURQN3pBL001SitZdDdaNG0wblY4eWVNQk5zZXE4MENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTA1Nzk3MTU4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTVVTVZlN2NINFpoaHBud2RtQjEzL3hnNjRlRVk0eGpCVVBOdmhyRnk1dSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTgxNDM5NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPQ2MifQ=="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "B34T",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
