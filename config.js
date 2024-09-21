const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DBk0FZBS#GDbYY9i-5lBm-Xt0yXK8VxEtqGqrprto1wh5NvugA0M",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖 Hi ꜱᴇɴᴜ Qᴜᴇᴇɴ ʷʰᵃᵗˢᵃᵖᵖ ᵇᵒᵗ Is Online Now 💻\n*💻 Owner* - Rocky \n\n*💻 Owner Number* -94704104383",
SUDO_NB: process.env.SUDO_NB || "94771665143",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false"
};

