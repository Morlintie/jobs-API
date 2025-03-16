const createJob = async (req, res) => {
  res.status(200).json({ msg: "createJob" });
};

const getAllJobs = async (req, res) => {
  res.status(200).json({ msg: "getAllJobs" });
};

const getSingleJob = async (req, res) => {
  res.status(200).json({ msg: "getSingleJob" });
};

const patchSingleJob = async (req, res) => {
  res.status(200).json({ msg: "patchSingleJob" });
};

const deleteSingleJob = async (req, res) => {
  res.status(200).json({ msg: "deleteSingleJob" });
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  patchSingleJob,
  deleteSingleJob,
};
