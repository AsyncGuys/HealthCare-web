const express = require("express");
const dotenv = require("dotenv");

const { openai } = require("../app");

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.createChatCompletion({
      model: "text-davinci-003",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful senior doctor and you have to help the patients by providing them necessary answers.",
        }, // this represents the bot and what role they will assume
        { role: "user", content: text }, // the message that the user sends
      ],
    });

    res.status(200).json({ text: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error.response);
    res.status(500).json({ error: error });
  }
});
module.exports = router;
