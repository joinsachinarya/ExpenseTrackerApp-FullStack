const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("expenseDB", "root", "Password!@#$", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
