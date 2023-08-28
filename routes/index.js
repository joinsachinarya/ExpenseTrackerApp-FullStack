const express = require("express");
const router = express.Router();
const homeController = require("../controllers/index");

// We can use a prefix for route names to reflect the resource : not needed here
// const EXPENSES_PREFIX = "/expenses";
// router.get(`${EXPENSES_PREFIX}/getLast`, homeController.fetchLastExpense);

router.post("/addExpense", homeController.addExpense);
router.get("/fetchLastExpense", homeController.fetchLastExpense);
router.get("/fetchTotalExpense", homeController.fetchTotalExpense);

module.exports = router;
