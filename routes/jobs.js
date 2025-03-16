const express = require("express");
const {
  createJob,
  getAllJobs,
  getSingleJob,
  patchSingleJob,
  deleteSingleJob,
} = require("../controllers/jobs.js");
const jobsRouter = express.Router();

jobsRouter.post("/create", createJob);
jobsRouter.get("/get", getAllJobs);
jobsRouter.get("/get/:id", getSingleJob);
jobsRouter.patch("/patch/:id", patchSingleJob);
jobsRouter.delete("/delete/:id", deleteSingleJob);

module.exports = jobsRouter;
