import express from "express";

const app = express();
const host = "192.168.1.31";
const port = 5050;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, host, () => {
  console.log(`Server is running on port ${host}:${port}`);
});
