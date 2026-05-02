require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const logger = require("./middleware/logger");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/assignments", require("./routes/assignmentsRoutes"));
app.use("/api/submissions", require("./routes/submissionsRoutes"));

// Start server
(async () => {
  try {
    await connectDB();
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();