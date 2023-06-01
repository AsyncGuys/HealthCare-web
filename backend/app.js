const express = require("express");
const errorMiddleware = require("./middleware/error");
const helmet = require("helmet");
const { Configuration, OpenAIApi } = require("openai");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "config/config.env" });
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* OPEN_AI CONFIGURATION */

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ROUTE imports
const user = require("./routes/userRoutes");
app.use("/api/v1", user);

/////////////// ai-doctor //////////////////
app.post("/ai-doctor", async (req, res) => {
  try {
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
/////////////////////////////////////////

//middleware for error
app.use(errorMiddleware);

module.exports = app;
