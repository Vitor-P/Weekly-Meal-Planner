const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const port = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  res.send("Server Test Successful");
});

app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:3000/`);
});
