const badWords = [
  "gandu", "bc", "mc", "bhosdi", "lund", "chutiya", "madarchod", "randi"
];

const savageReplies = [
  "Aree yaar, thoda tameez rakho 😏",
  "Hahaha cute gaali hai, par main bhi reply kar sakti hoon 💁‍♀️",
  "Oi 😏, aise baat mat karo, warna main bhi nikal dungi 🔥",
  "Bas bas, thoda pyar se bolo na 💕",
  "Wow 😏, creative ho tum, reply bhi milega!"
];

// handler-event style
module.exports = async function ({ api, event }) {
  const { body, threadID, senderID } = event;
  if (!body) return;

  const msg = body.toLowerCase();

  // Check for any bad word
  const found = badWords.some(word => msg.includes(word));
  if (!found) return; // agar gaali nahi mili to ignore

  // Random savage reply
  const reply = savageReplies[Math.floor(Math.random() * savageReplies.length)];

  // Send message
  api.sendMessage(reply, threadID);
};
