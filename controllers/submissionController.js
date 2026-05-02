const Submissions = require("../models/Submissions");
const Assignments = require("../models/Assignments");

// SUBMIT ASSIGNMENT
exports.createSubmission = async (req, res) => {
  const assignment = await Assignment.findById(req.body.assignmentId);

  // Prevent after deadline
  if (new Date() > assignment.dueDate) {
    return res.status(400).json({ message: "Deadline passed" });
  }

  const submission = await Submissions.create(req.body);
  res.json(submission);
};

// GET SUBMISSIONS FOR ASSIGNMENT
exports.getSubmissions = async (req, res) => {
  const submissions = await Submissions.find({
    assignmentId: req.params.assignmentId
  });
  res.json(submissions);
};