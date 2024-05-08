var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
╭ ❖ ── ✦ ── ✦ ── ❖ ──╗
│
│ 𝐉𝐎𝐒𝐄 𝐂 
│ *Wa.me/50493108279*
│
│ 𝐋𝐀𝐃𝐘 𝐌𝐀𝐑𝐈
│ *wa.me/50493544106*
│
│ 𝐉𝐎𝐒𝐄 𝐂
│ *wa.me/50493108279*
│
│*GRUPO OFICIAL*
│*https://chat.whatsapp.com/LtTUopzTNqGJo8QSLUFrNy*
│
│⋆——————✧❦𝐉𝐎𝐒𝐄 𝐂-𝐋𝐀𝐃𝐘 𝐌𝐀𝐑𝐈❦✧——————⋆ - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
│*${asistencia}*
╰─ ❖ ── ✦ ── ✦ ── ❖ ──╝`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
