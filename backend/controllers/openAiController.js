import express from "express";
import dotenv from "dotenv";
import { openai } from "../app";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
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
    console.error("error", error.response.data.error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
