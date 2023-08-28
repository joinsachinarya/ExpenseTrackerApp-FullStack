const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expenses");

router.get("/fetchAllExpenses", expensesController.fetchAllExpenses);
router.get("/fetchExpense", expensesController.fetchExpense);
router.delete("/deleteExpense", expensesController.deleteExpense);
router.put("/editExpense", expensesController.editExpense);

module.exports = router;
