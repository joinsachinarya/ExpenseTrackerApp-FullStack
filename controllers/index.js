const Expense = require("../models/index");

exports.addExpense = (req, res, next) => {
  const expenseDetails = {
    name: req.body.name,
    price: req.body.price,
  };
  console.log(req.body);
  res.json(expenseDetails);
};

exports.fetchLastExpense = (req, res, next) => {
  console.log("fetched last expense");
  res.json("fetched last expense");
};

exports.fetchTotalExpense = (req, res, next) => {
  console.log("fetched total expense");
  res.json("fetched total expense");
};
