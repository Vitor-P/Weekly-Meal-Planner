const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const port = process.env.PORT || 3000;

//Test server
app.get("/test", (req, res) => {
  res.send("Server Test Successful");
});

//Default path
app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});

//Start server & determine port
app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}/`);
});
