const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
 
"I am not the create. I only edit this for my personal works only ,ᵐᵃˢᵗᵉʳ ʳᵒᶜᵏʸ"
 
Here the originl bot repo...  👇

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦ https://github.com/QUEEN-KYLIE-MD-01/QUEEN-KYLIE-MD/tree/main

*📍PLEASE SUBSCRIBE MY YOUTUBE CHANNEL ❤️‍🔥👇*

🧚‍♀️◦ https://www.youtube.com/@Sahas_Tech

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*

`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
