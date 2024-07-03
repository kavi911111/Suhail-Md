const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_07_00_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhrcUpRNXQwb1FJWCtWMXRxVXBiWWVieE45TlJSMjIvbm84VjBReklmVkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTUwOTc0MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFMzNCQkE1Q0U3MzMwNzBCQTIxQThBQUVGQTBFNTVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk5MDAxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU1MDk3NDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMjk4NjlBMUNBQzE3RUM1RjVGQzZBNzhDNjBGMjI3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5OTAwMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODVYOHJoQzZRTHFrZ090aTlLbEl5Z1wiLFxuICBcInBob25lSWRcIjogXCJkOWUzYjEwMC01YzMzLTQ3MjAtOGQzMC0zOTUwMGFlYTg0ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTI1LFxuICAgICAgMzMsXG4gICAgICA3NyxcbiAgICAgIDE5MCxcbiAgICAgIDg1LFxuICAgICAgMTU1LFxuICAgICAgMzcsXG4gICAgICAyMTMsXG4gICAgICAxMDEsXG4gICAgICAxNTAsXG4gICAgICA0LFxuICAgICAgNTQsXG4gICAgICA2MixcbiAgICAgIDE3LFxuICAgICAgMjAzLFxuICAgICAgMjUzLFxuICAgICAgMTIwLFxuICAgICAgNTAsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAyOSxcbiAgICAgIDEzNCxcbiAgICAgIDIyNyxcbiAgICAgIDIwNCxcbiAgICAgIDExMSxcbiAgICAgIDEwNixcbiAgICAgIDcyLFxuICAgICAgMjQ3LFxuICAgICAgNTEsXG4gICAgICAyMDUsXG4gICAgICAxMDIsXG4gICAgICAyNTIsXG4gICAgICAxNCxcbiAgICAgIDIzMixcbiAgICAgIDE2MCxcbiAgICAgIDg0LFxuICAgICAgOTAsXG4gICAgICAxNjEsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUFBNDExS05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU1MDk3NDI3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMzkzNjAxMjYxNTc2OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oK1yY7guL/JhuKxpCDigq3igrNWxYJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSFo3cEVFRVB2dGs3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImU1aTJ4bnRBMlU2YlhxbUlVaVFhcWZNenllQXY5ekFzUWg5blllSVp0U009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM1FSaHcxSzdlWGxEdDhtR1NmbzRaWmRweVI1R2tCR29RMEV1S1paMTVqQ0JmSXk0WEFvcjBIQ1JxZFplMElTWk9TbEtnNXU2T0E1UHRHZXl1YkxOQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidjZYZU1PdTB2TjBEdDdjNVhQalFpb1FNakVrN2syYjVUb3RrTGNVQ0VvODk4ekhnK0M1UUtoWDhtTEdGL2tNQ3doY1dNSmIyWXlMZk9MU2hLcG8zQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTUwOTc0Mjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk5MDAxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUt3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFpJZ1BoaFBxWFcxdC9wUWNzZ2ROdTI3WHpIVVRSaWFjblRHR21SMTlzWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTExMjA3MTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5OTAwMTUwMThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
