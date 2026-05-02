const Assignments = require("../models/Assignments");

// CREATE
exports.createAssignment = async (req, res) => {
  try {
    const assignment = await Assignments.create(req.body);
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getAssignments = async (req, res) => {
  const assignments = await Assignments.find();
  res.json(assignments);
};

// GET ONE
exports.getAssignmentById = async (req, res) => {
  const assignment = await Assignments.findById(req.params.id);
  res.json(assignment);
};

// UPDATE
exports.updateAssignment = async (req, res) => {
  const updated = await Assignments.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
exports.deleteAssignment = async (req, res) => {
  await Assignments.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};