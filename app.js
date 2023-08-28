const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const expensesRoutes = require("./routes/expenses");
const sequelize = require("./utils/database");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use(homeRoutes);
app.use(expensesRoutes);

sequelize
  .sync()
  .then((res) => {
    console.log("Server is syncing with  database using sequelize");
    app.listen(PORT, (req, res, next) => {
      console.log("Server is listening at port 3000");
    });
  })
  .catch((err) => console.error(err));
