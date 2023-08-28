const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const expensesRoutes = require("./routes/expenses");
const sequelize = require("./utils/database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(homeRoutes);
app.use(expensesRoutes);

sequelize
  .sync()
  .then((res) => {
    console.log("Server is syncing with  database using sequelize");
    app.listen(3000, (req, res, next) => {
      console.log("Server is listening at port 3000");
    });
  })
  .catch((err) => console.error(err));
