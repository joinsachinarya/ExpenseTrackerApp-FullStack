const { Expense } = require("../models/index");

exports.addExpense = (req, res, next) => {
  const { name, category, price, quantity } = req.body;
  const expenseDetails = { name, category, price, quantity };

  Expense.create(expenseDetails)
    .then((result) => {
      console.log("Expense added");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while adding the expense." });
    });
};

exports.fetchLastExpense = (req, res, next) => {
  Expense.findOne({
    order: [["id", "DESC"]],
  })
    .then((result) => {
      console.log("Fetched last expense");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while fetching the last expense." });
    });
};

exports.fetchTotalExpense = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      let totalExpenses = 0;
      let perItemExpense = 0;
      for (let i in result) {
        perItemExpense =
          result[i].dataValues.quantity * result[i].dataValues.price;
        totalExpenses = totalExpenses + perItemExpense;
      }
      const totalPrice = {
        value: totalExpenses,
      };
      console.log(totalPrice);
      res.json(totalExpenses);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while fetching the total expense." });
    });
};
