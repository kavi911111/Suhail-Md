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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_44_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCd1QrTXhRUnhURGNsdjJhMjdROXZobXlsbEFuL1dwVFJneHZXLzZkVVZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU1MDk3NDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RjJBNzZEMUU1RjVCQTJCRDU3OTFFRUIzOEJFMkVERlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4MDU0NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1NTA5NzQyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkM4MTc4NEYyNjQ5QTFBOTA5RTUxRUE2RUQ0NzM1MTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODA1NDUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl8tQ1pFdTF0UjRTMFhDZzZxbEk2aVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjYyMGRhOTItNWU1Zi00OTAwLWJmY2MtNjE2NWU5YTNlNjNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICA2NyxcbiAgICAgIDE3NyxcbiAgICAgIDUxLFxuICAgICAgMTcxLFxuICAgICAgMTM3LFxuICAgICAgMTIxLFxuICAgICAgNTIsXG4gICAgICAxOTgsXG4gICAgICAxMTMsXG4gICAgICAxNjksXG4gICAgICAyMTgsXG4gICAgICA5OCxcbiAgICAgIDE2LFxuICAgICAgMTU5LFxuICAgICAgMjgsXG4gICAgICAzNCxcbiAgICAgIDMsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDEzNixcbiAgICAgIDE4NyxcbiAgICAgIDIyMyxcbiAgICAgIDE0LFxuICAgICAgMjU1LFxuICAgICAgNTksXG4gICAgICAzMyxcbiAgICAgIDE0MixcbiAgICAgIDIyMCxcbiAgICAgIDIzMSxcbiAgICAgIDE4NCxcbiAgICAgIDE1MyxcbiAgICAgIDgsXG4gICAgICAzLFxuICAgICAgMTQyLFxuICAgICAgNjYsXG4gICAgICA3MyxcbiAgICAgIDE4MCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWlExRzg5Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTUwOTc0Mjc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlYJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7wnZS4XFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu8J2VjVxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbuKAolxcbvCdlYBcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7wnZWQXFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu4oCiXFxu8J2UuFwiLFxuICAgIFwibGlkXCI6IFwiMjEzOTM2MDEyNjE1NzY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWHh4ZHNDRUlmTWlMUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInM3TTlEa0lKdGRsWjY3SjFkVDRRYVpUbFFTeXg2MWhTUXJ4Wm1IQTVWRlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicE1Idlg5WTRvOEtyS3JCc2dqdFRsRWUwSkVXNmMyak92bC9XNWp0MGplMER6YldSU0cwQ293RENhblpPdElac2JHWkh1aHRrRXNpUkFESlJGNjhhQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUxuT0thVC92Znlsc0hpNDJvRlg4SStad2JUcU1qV1R5Y2tNdUg3dm12enUrelRsS04vTHdjVnZVdWhKSXQrT3h5UEhNbm00L2w4K2hnNitaNnI4RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTUwOTc0Mjc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4MDU0NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdEhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd0SC5qc29uIjogIntcImtleURhdGFcIjpcIi9hQ09mOG5BTVpLUnVPNG9DWUFhbmgwVWIzUDNUVlNyalR6aXk2T2M4VjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI4ODU2NzQwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzQ5NDcyNDZcIn0iCn0="  // PUT your SESSION_ID 


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
