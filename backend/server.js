const app = require("./app2");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
}); 

// Config
dotenv.config({ path: "config/config.env" });

//Connecting Database
connectDatabase();

// const server = app.listen(process.env.PORT, () => {
//   console.log( 
//     `Server is Working on Port http://localhost:${process.env.PORT} `
//   );
// });

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
