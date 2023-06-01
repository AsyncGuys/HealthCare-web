const express = require("express");
const bodyParser=require("body-parser")
const request=require("request")
const errorMiddleware = require("./middleware/error");
const helmet = require("helmet");
const { Configuration, OpenAIApi } = require("openai");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");



const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

/* OPEN_AI CONFIGURATION */

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
export const openai = new OpenAIApi(configuration);

// ROUTE imports
const user = require("./routes/userRoutes");

app.use("/api/v1", user);
app.use("/openai", openAiRoutes);

//middleware for error
app.use(errorMiddleware);






module.exports = app;
