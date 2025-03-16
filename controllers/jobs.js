const Job = require("../models/Job.js");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "job has been created" });
};

const getAllJobs = async (req, res) => {
  const createdBy = req.user.userId;
  const allJobs = await Job.find({ createdBy: createdBy });
  if (!allJobs) {
    throw new NotFoundError("Jobs not found");
  }

  res.status(StatusCodes.OK).json({ jobs: allJobs });
};

const getSingleJob = async (req, res) => {
  const createdBy = req.user.userId;
  const jobId = req.params.id;

  const singleJob = await Job.findOne({ createdBy: createdBy, _id: jobId });
  if (!singleJob) {
    throw new NotFoundError("Job not found");
  }

  res.status(StatusCodes.OK).json({ job: singleJob });
};

const patchSingleJob = async (req, res) => {
  const createdBy = req.user.userId;
  const jobId = req.params.id;
  if (!jobId) {
    throw new BadRequestError("Please provide job ID");
  }
  const patchedJob = await Job.findOneAndUpdate(
    { createdBy: createdBy, _id: jobId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!patchedJob) {
    throw new NotFoundError("Job no found");
  }

  res.status(StatusCodes.OK).json({ job: patchedJob });
};

const deleteSingleJob = async (req, res) => {
  const createdBy = req.user.userId;
  const jobId = req.params.id;
  if (!jobId) {
    throw new BadRequestError("Please provide job ID");
  }
  const deletedJob = await Job.findOneAndDelete({
    createdBy: createdBy,
    _id: jobId,
  });

  if (!deletedJob) {
    throw new NotFoundError("Job not found");
  }

  res.status(StatusCodes.OK).json({ msg: "Job has been successfully deleted" });
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  patchSingleJob,
  deleteSingleJob,
};
