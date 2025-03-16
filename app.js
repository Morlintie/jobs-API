require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connection.js");
const registerRouter = require("./routes/auth.js");
const jobsRouter = require("./routes/jobs.js");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware.js");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/v1/register", registerRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server run on port ${PORT}`);
    });
  } catch (error) {
    console.log("Something went wrong ");
    console.log(error);
  }
};

start();
