const { Expense } = require("../models/index");

exports.fetchAllExpenses = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      console.log("All expenses fetched");
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while fetching the all expenses." });
    });
};
exports.fetchExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((result) => {
      console.log("Expense fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while fetching the expense." });
    });
};
exports.deleteExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((result) => result.destroy())
    .then((result) => {
      console.log("Expense deleted");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while deleting the expense." });
    });
};
exports.editExpense = (req, res, next) => {
  const id = req.params.id;
  const updatedValues = req.body;
  Expense.findByPk(id)
    .then((result) => {
      result.update(updatedValues);
      console.log("Expense updated");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occured while editing the expense." });
    });
};
