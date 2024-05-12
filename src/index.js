import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World 3" });
});

app.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
});
