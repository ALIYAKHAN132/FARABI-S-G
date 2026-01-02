module.exports.config = {
  name: "antigali",
  eventType: ["message"],
  version: "1.0.0",
  credits: "RDX",
  description: "Gali pe reply"
};

module.exports.run = async function ({ api, event }) {
  if (!event.body) return;

  const badWords = [
    "mc",
    "bc",
    "madarchod",
    "behenchod",
    "maa ki chut",
    "fuck",
    "lund",
    "chutiya"
  ];

  const text = event.body.toLowerCase();

  if (badWords.some(w => text.includes(w))) {
    api.sendMessage(
      "😡 Gali mat do warna block kar dungi!",
      event.threadID,
      event.messageID
    );
  }
};
