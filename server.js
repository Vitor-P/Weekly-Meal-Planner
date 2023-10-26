const app = require("./app");

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
