const express = require("express");

const { getHeartDisease, liverDisease, diabetes } = require("../controllers/diseaseController");

const router = express.Router();

router.route("/heart").post(getHeartDisease);
router.route("/liver").post(liverDisease);
// router.route("/diabetes").post(diabetes);

module.exports = router;