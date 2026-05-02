const express = require("express");
const router = express.Router();
const controller = require("../controllers/submissionController");

router.post("/", controller.createSubmission);
router.get("/:assignmentId", controller.getSubmissions);

module.exports = router;