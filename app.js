const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use(homeRoutes);

app.listen(3000, (req, res, next) => {
  console.log("Server is listening at port 3000");
});
