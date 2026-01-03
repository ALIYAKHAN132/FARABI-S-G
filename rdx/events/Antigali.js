module.exports.config = {
  name: "antigali",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto Anti Gali Reply",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

// ❌ command band
module.exports.run = async () => {};

// ✅ bina prefix auto kaam
module.exports.handleEvent = async function ({ api, event }) {
  if (!event.body) return;

  const msg = event.body.toLowerCase();

  // ❗ gaali list (apni marzi se add/remove kar sakta hai)
  const BAD_WORDS = [
    "mc", "bc", "madarchod", "behenchod", "chutiya",
    "randi", "bhosdike", "lund", "gandu", "harami",
    "fuck", "shit", "asshole"
  ];

  // check
  const found = BAD_WORDS.some(word => msg.includes(word));
  if (!found) return;

  const replies = [
    "Gaali mat do 😑 thoda tameez rakho",
    "Respect se baat karo 😌",
    "Ye group hai, gali allowed nahi 🚫",
    "Shanti rakho warna bot bhi gussa ho jayega 🤖😤",
    "Language sudharo dost 🙂"
  ];

  return api.sendMessage(
    replies[Math.floor(Math.random() * replies.length)],
    event.threadID,
    event.messageID
  );
};
