const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expenses");

router.get("/fetchAllExpenses", expensesController.fetchAllExpenses);
router.get("/fetchExpense/:id", expensesController.fetchExpense);
router.delete("/deleteExpense/:id", expensesController.deleteExpense);
router.put("/editExpense/:id", expensesController.editExpense);

module.exports = router;
