const mongoose = require("mongoose");

const cvSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      default: "",
    },
    passportNum: {
      type: String,
      default: "",
    },
    dbo: {
      type: String,
      default: "",
    },
    nationality: {
      type: String,
      default: "ETHIOPIA",
    },
    phone: {
      type: String,
      default: "",
    },
    result: {
      type: String,
      default: "NEGATIVE",
    },
    resultDate: {
      type: String,
      default: "",
    },
    reviewedBy: {
      type: String,
      default: "Dr.mesfin Negussie",
    },
    sex: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const userdb = mongoose.model("Cv", cvSchema);

module.exports = userdb;
