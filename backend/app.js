const express = require("express");
const errorMiddleware = require("./middleware/error");
import { Configuration, OpenAIApi } from "openai";

const app = express();
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
export const openai = new OpenAIApi(configuration);

// ROUTE imports
const user = require("./routes/userRoutes");

app.use("/api/v1", user);
app.use("/openai", openAiRoutes);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
