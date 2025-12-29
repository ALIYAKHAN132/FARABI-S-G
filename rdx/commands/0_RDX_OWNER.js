const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: 'owner',
    aliases: ['dev', 'creator', 'developer'],
    description: 'Show bot owner information',
    credits: 'SARDAR RDX',
    usage: 'owner',
    category: 'Info',
    prefix: false
  },

  async run({ api, event, send, config }) {
    const { threadID, messageID } = event;

    const ownerPics = [
      'https://ibb.co/zhzZSntC',
      '',
      '',
      ''
    ];

    const randomPic = ownerPics[Math.floor(Math.random() * ownerPics.length)];

    const ownerInfo = `
╔═══════════════════════════
║   ✨𝗕𝗢𝗧 '𝐒 𝐈𝐍𝐅𝐎 ✨           
╠═══════════════════════════
║                                    
║𝐍𝐀𝐌𝐄: 𝗟𝗚𝗡𝗗 𝗔𝗟𝗜𝗬𝗔        
║𝐀𝐆𝐄  : 𝟮𝟭+                     
║𝐂𝐋𝐀𝐒𝐒: 𝐈𝐍𝐓𝐄𝐑 2𝐍𝐃 𝐘𝐄𝐀𝐑          
║𝐇𝐎𝐌𝐄𝐓𝐎𝐖𝐍:𝗠𝗨𝗠𝗕𝗔𝗜            
║𝐋𝐈𝐕𝐈𝐍𝐆:𝗕𝗔𝗡𝗗𝗥𝗔
║𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏:𝐈𝐓'𝐒 𝐂𝐎𝐌𝐏𝐋𝐈𝐂𝐀𝐓𝐄𝐃 
║𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘:1 𝐌𝐚𝐫𝐜𝐡                
║𝐇𝐄𝐈𝐆𝐇𝐓:5 𝐅𝐓 8 𝐈𝐍𝐂𝐇 
║𝐖𝐄𝐈𝐆𝐇𝐓:𝟰𝟲 𝐊𝐆
║𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 :𝐈𝐒𝐋𝐀𝐌
╠═══════════════════════════
║  📱 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐈𝐧𝐟𝐨:          
║                           
║  🌐 𝑻𝑬𝑳𝑬𝑮𝑹𝑨𝑴:              
║𝗚𝗔𝗟𝗜 𝗦𝗨𝗡𝗡𝗜 𝗛𝗘 𝗧𝗢 𝗔𝗔𝗝𝗔𝗡𝗔
║                           
║  📲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:              
║  𝗧𝗘𝗥𝗔 𝗕𝗔𝗔𝗣 𝗕𝗛𝗜 𝗣𝗧𝗔 𝗡𝗔𝗛𝗜 𝗟𝗚𝗔 𝗣𝗔𝗬𝗘𝗚𝗔
║                           
╠═══════════════════════════
║  🤖 𝐁𝐨𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬:           
║                           
║  📛 Name: ${config.BOTNAME || '𝗔𝗟𝗜𝗬𝗔'}
║  ⚡ Prefix: ${config.PREFIX || '.'}
║  💻 Version: 0.5       
║  🛠️ Framework: 𝗟𝗚𝗡𝗗 𝗔𝗟𝗜𝗬𝗔  
║                           
╠═══════════════════════════
║  💝 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙪𝙨𝙞𝙣𝙜!  
╚═══════════════════════════
    `.trim();

    try {
      const cacheDir = path.join(__dirname, 'cache');
      fs.ensureDirSync(cacheDir);
      const imgPath = path.join(cacheDir, `owner_${Date.now()}.jpg`);
      
      const response = await axios.get(randomPic, { responseType: 'arraybuffer' });
      fs.writeFileSync(imgPath, Buffer.from(response.data));
      
      api.sendMessage(
        {
          body: ownerInfo,
          attachment: fs.createReadStream(imgPath)
        },
        threadID,
        () => {
          try { fs.unlinkSync(imgPath); } catch {}
        },
        messageID
      );
    } catch (error) {
      return send.reply(ownerInfo);
    }
  }
};
