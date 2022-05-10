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
    requestedDate: {
      type: String,
      default: "",
    },
    collectedDate: {
      type: String,
      default: "",
    },
    collectedLocation: {
      type: String,
      default: " ICL -AA1",
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
    sampleId: {
      type: String,
      default: "WD456248",
    },
    sex: {
      type: String,
      default: "",
    },
    specimenType: {
      type: String,
      default: "Nasopharngeal Swab",
    },
    testMethod: {
      type: String,
      default: "RT-PCR-QUALITATIVE Detection of nucleic Acid",
    },
    testPerformedBy: {
      type: String,
      default: "International Clinical Laburatory",
    },
  },
  { timestamps: true }
);

const userdb = mongoose.model("Cv", cvSchema);

module.exports = userdb;
