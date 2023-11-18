const express = require("express");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.route("/v1").get(viewController.getOverview);

router.get("/v2", viewController.getOverview);

module.exports = router;
