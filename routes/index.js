const express = require("express");
const homeController = require("../controllers/index");
const router = express.Router();

router.get("/fetchAllItems", homeController.fetchAllItems);

module.exports = router;
