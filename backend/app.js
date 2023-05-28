const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

// ROUTE imports
const user = require("./routes/userRoutes");

app.use("/api/v1", user);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
