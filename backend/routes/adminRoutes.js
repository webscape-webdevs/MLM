const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { isAuthenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/auth");

router.get("/get-data", adminController.getData);

module.exports = router;
