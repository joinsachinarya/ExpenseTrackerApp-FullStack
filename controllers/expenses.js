const Expense = require("../models/index");

exports.fetchAllExpenses = (req, res, next) => {
  console.log("fetched all expense");
  res.json("fetched all expense");
};
exports.fetchExpense = (req, res, next) => {
  console.log("fetched  expense");
  res.json("fetched  expense");
};
exports.deleteExpense = (req, res, next) => {
  console.log("deleted  expense");
  res.json("deleted  expense");
};
exports.editExpense = (req, res, next) => {
  console.log("edited  expense");
  res.json("edited  expense");
};
