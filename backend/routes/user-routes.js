const express = require("express");
const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.post("/user/create", UserCtrl.createUser);
router.get("/user/get", UserCtrl.getUser);
router.patch("/user/update/weeklyspent", UserCtrl.updateWeeklySpent);
router.patch("/user/update/monthlyspent", UserCtrl.updateMonthlySpent);
router.patch("/user/update/monthlylimit", UserCtrl.updateMonthlyLimit);
router.patch("/user/update/weeklylimit", UserCtrl.updateWeeklyLimit);
router.patch("/user/update/totalproducts", UserCtrl.updateTotalProducts);
router.patch(
  "/user/update/weeklyitemsnotpurchased",
  UserCtrl.updateWeeklyItemsNotPurchased
);
router.patch(
  "/user/update/monthlyitemsnotpurchased",
  UserCtrl.updateMonthlyItemsNotPurchased
);
router.patch("/user/update/monthlysaved", UserCtrl.updateMonthlySaved);
router.patch("/user/update/weeklysaved", UserCtrl.updateWeeklySaved);
router.patch("/user/update/purchases", UserCtrl.updatePurchases);
router.patch("/user/update/avoidancelist", UserCtrl.updateAvoidanceList);
router.delete("/user/delete", UserCtrl.deleteUser);

module.exports = router;
