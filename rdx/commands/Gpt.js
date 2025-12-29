const axios = require("axios");

module.exports = {
  name: "gpt",
  run: async (api, event, args) => {
    const question = args.join(" ");
    if (!question) {
      return api.sendMessage(
        "GPT se sawal puchho\nExample:\n!gpt aaj mausam kaisa hai",
        event.threadID
      );
    }

    try {
      api.sendTypingIndicator(event.threadID, true);

      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: question }],
          temperature: 0.7
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "csk-45t2xr4je456ytndnn3vwyt6ptd3ynjj5pvy3v4cpdj6rfth"
          }
        }
      );

      api.sendTypingIndicator(event.threadID, false);

      const reply = res.data.choices[0].message.content;
      api.sendMessage(reply, event.threadID);

    } catch (e) {
      api.sendTypingIndicator(event.threadID, false);
      api.sendMessage("GPT abhi reply nahi kar pa raha ❌", event.threadID);
    }
  }
};
