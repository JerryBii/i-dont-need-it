const express = require("express");
const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.post("/User/create", UserCtrl.createUser);
router.put("/User/updateSettings", UserCtrl.updateUserSettings);
router.put("/User/updatePurchases", UserCtrl.updatePurchases);
router.put("/User/deleteUser", UserCtrl.deleteUser);

module.exports = router;
