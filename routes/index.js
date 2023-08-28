const express = require("express");
const router = express.Router();
const homeController = require("../controllers/index");

router.post("/addExpense", homeController.addExpense);
router.get("/fetchLastExpense", homeController.fetchLastExpense);
router.get("/fetchTotalExpense", homeController.fetchTotalExpense);

module.exports = router;
