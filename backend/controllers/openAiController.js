const express = require("express");
const dotenv = require("dotenv");

const { openai } = require("../app2");

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
      console.log(req.body)
    const msg = req.body.inputMessage;
    console.log(msg)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      ${msg}

      you are a senior doctor and I am a patient tell me the necessary answers in less than 30 words
      ###
    `,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error.response);
    res.status(500).json({ error: error });
  }
});
module.exports = router;
