const express = require("express");

const {
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../controllers/shop/ordercontroller");

const router = express.Router();

router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;