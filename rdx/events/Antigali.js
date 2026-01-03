module.exports.config = {
  name: "antigali",
  version: "1.0.0",
  credits: "FIXED",
  description: "Auto Anti Gali System"
};

const badWords = [
  "madarchod",
  "bhosdike",
  "chutiya",
  "gandu",
  "randi",
  "mc",
  "bc",
  "lode",
  "lund"
];

module.exports.handleEvent = async function ({ api, event }) {
  try {
    if (!event.body) return;

    const msg = event.body.toLowerCase();

    if (badWords.some(word => msg.includes(word))) {
      return api.sendMessage(
        "⚠️ Gali mat do. Respect rakho 🙂",
        event.threadID,
        event.messageID
      );
    }
  } catch (e) {
    console.log("ANTI-GALI ERROR:", e);
  }
};

module.exports.run = async () => {};
