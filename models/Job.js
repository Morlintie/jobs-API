const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },

    status: {
      type: String,
      enum: {
        values: ["interview", "declined", "pending"],
        message: "",
      },
      default: "pending",
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide credentials"],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;
