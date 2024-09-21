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
global.owner = process.env.OWNER_NUMBER || "+233594428498";
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

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FYTWxlK0pPeGlhQVdpQ1I4d1FLM0hxNXJYQVdQQU5GR1lDS2NHcEhGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2U1RTRFdDRuTmNGdWxEVVlVaFFzc2VEa0d2Q0FyRm00S2d5Ujh4OVdYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTEhyYTdyVzlaSGdGYUNRL2FLSkFJbkltTGlLUlRsYzdQM0NwamlDaTA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SVlxcDU5OGNHczNEampodFBta0I3SVYrcGxFMWN1NHJnNUo1cHdoL0NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNNlFGWTNhSnJsQnpheFl2cjhJSTl3ZDZWaTRDbDIvdHIveWt6VHBKMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNhM1ZEdzlEVmtvbEZGdXVLaEtwNGgxMGlnM1JqaXBzQUEzSEFDZnJkUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlvWXAvdElwblJZMmhZU3ZRdUlVc1I1VUJtTDB6WHZyWXVCYkorbHlYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1BGbTd0b1hmdlg5c3VFK0VEUGVuRzRuMFVhdXNGWkJZVkJQQ1RUNlJ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3azRzYUVOY3hIZkhiOGJNQXFLMHZuQ090MnVQS0prL0VYSlJuZy9qeWxBd1BDZ2lQcFkzN2hXU3RFMFI5V29LRGh5M1daTnNzTHFROGlheG5oRGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJCUTVNQ3ZBUml3L01ITnNMQ21QYWJZLzhOaVBJVWhnR2pjQzhkVmlmQTdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyZXFfeHBPNFFpZVdlcy00OE5NUnJ3IiwicGhvbmVJZCI6Ijk1OGEwMTcxLTIzMDQtNGE5OS04N2UxLThkODBlZDdlM2UzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OVpGVGpQSzl1clYvVVFzZXJ5QUQ5M3JIKzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JaVFZpN3cySlRtaDkvSkNmWmZxSkR6c3VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFXWUJLNDNDIiwibWUiOnsiaWQiOiIyMzM1OTQ0Mjg0OTg6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PS3NaQUNFS3o1dWJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRHUnZlYnord0JoMjV6cnZzbjJzK2c4K2JaWmU5djBEd3ZBTFNINDVxakk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhWb0w2Q1ZlN0NUZXZUS1ltTXNKbnRmVkxOMGZzam9xd2NhbC9KUXNpb0s3ODFEU3krYmd0bm9oSDJkK2lLNHcvUjJxSUtKUWE2bmZxK3RnZ1hDcERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkOE9pWGxQOWxqRzQraGkzRE9GTFBQYzYvZnlGK2NDSFdONkZGblcya2dSQVlmTXZxQWo5eEt6SDNLaVE1R3NNU3g5eWZQM2dRR0pSZWV3bzRsTzRqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NDQyODQ5ODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUmtiM204L3NBWWR1YzY3N0o5clBvUFBtMldYdmI5QThMd0MwaCtPYW95In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTA1NTMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyWCJ9"
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FYTWxlK0pPeGlhQVdpQ1I4d1FLM0hxNXJYQVdQQU5GR1lDS2NHcEhGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2U1RTRFdDRuTmNGdWxEVVlVaFFzc2VEa0d2Q0FyRm00S2d5Ujh4OVdYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTEhyYTdyVzlaSGdGYUNRL2FLSkFJbkltTGlLUlRsYzdQM0NwamlDaTA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SVlxcDU5OGNHczNEampodFBta0I3SVYrcGxFMWN1NHJnNUo1cHdoL0NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNNlFGWTNhSnJsQnpheFl2cjhJSTl3ZDZWaTRDbDIvdHIveWt6VHBKMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNhM1ZEdzlEVmtvbEZGdXVLaEtwNGgxMGlnM1JqaXBzQUEzSEFDZnJkUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlvWXAvdElwblJZMmhZU3ZRdUlVc1I1VUJtTDB6WHZyWXVCYkorbHlYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1BGbTd0b1hmdlg5c3VFK0VEUGVuRzRuMFVhdXNGWkJZVkJQQ1RUNlJ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3azRzYUVOY3hIZkhiOGJNQXFLMHZuQ090MnVQS0prL0VYSlJuZy9qeWxBd1BDZ2lQcFkzN2hXU3RFMFI5V29LRGh5M1daTnNzTHFROGlheG5oRGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJCUTVNQ3ZBUml3L01ITnNMQ21QYWJZLzhOaVBJVWhnR2pjQzhkVmlmQTdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyZXFfeHBPNFFpZVdlcy00OE5NUnJ3IiwicGhvbmVJZCI6Ijk1OGEwMTcxLTIzMDQtNGE5OS04N2UxLThkODBlZDdlM2UzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OVpGVGpQSzl1clYvVVFzZXJ5QUQ5M3JIKzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JaVFZpN3cySlRtaDkvSkNmWmZxSkR6c3VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFXWUJLNDNDIiwibWUiOnsiaWQiOiIyMzM1OTQ0Mjg0OTg6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PS3NaQUNFS3o1dWJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRHUnZlYnord0JoMjV6cnZzbjJzK2c4K2JaWmU5djBEd3ZBTFNINDVxakk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhWb0w2Q1ZlN0NUZXZUS1ltTXNKbnRmVkxOMGZzam9xd2NhbC9KUXNpb0s3ODFEU3krYmd0bm9oSDJkK2lLNHcvUjJxSUtKUWE2bmZxK3RnZ1hDcERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkOE9pWGxQOWxqRzQraGkzRE9GTFBQYzYvZnlGK2NDSFdONkZGblcya2dSQVlmTXZxQWo5eEt6SDNLaVE1R3NNU3g5eWZQM2dRR0pSZWV3bzRsTzRqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5NDQyODQ5ODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUmtiM204L3NBWWR1YzY3N0o5clBvUFBtMldYdmI5QThMd0MwaCtPYW95In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTA1NTMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyWCJ9"
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
