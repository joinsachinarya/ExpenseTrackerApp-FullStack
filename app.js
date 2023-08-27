const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/", (req, res, next) => {
  res.json({ res: "Heyy" });
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
