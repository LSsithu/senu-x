const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/WhatsApp Ptt 2024-09-24 at 8.17.11 AM.ogg'
                    }
let des = `*👋 Hello ${pushname}*

𝐈 𝐀𝐌 ꜱᴇɴᴜ Qᴜᴇᴇɴ ʷʰᵃᵗˢᵃᵖᵖ ᵇᵒᵗ ♡

I'm Online now!
              
*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@OTM_Rocky
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VammC2VD38CZ8OMdux3f

*©ᴹᵃᵈᵉ ᵇʸ ᵐᵃˢᵗᵉʳ ʳᵒᶜᵏʸ*`

await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
