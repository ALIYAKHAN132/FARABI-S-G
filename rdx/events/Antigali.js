module.exports.config = {
  name: "antigali",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CHATGPT",
  description: "Auto reply on bad words",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

const GALI = [
  "mc", "bc", "bkl", "madarchod", "behenchod",
  "chutiya", "randi", "harami", "kutte", "bsdk"
];

const REPLY = [
  "Zubaan sambhal ke 😒",
  "Aise baat mat karo 🙄",
  "Respect rakho yaar 🙂",
  "Gali dene se cool nahi bante 😌",
  "Shaant ho jao 😏"
];

// ✅ AUTO LISTENER
module.exports.handleEvent = async function ({ api, event }) {
  if (!event.body) return;

  const text = event.body.toLowerCase();

  if (GALI.some(word => text.includes(word))) {
    return api.sendMessage(
      REPLY[Math.floor(Math.random() * REPLY.length)],
      event.threadID,
      event.messageID
    );
  }
};

// ❌ run empty rakho (command ki zarurat nahi)
module.exports.run = async function () {};
