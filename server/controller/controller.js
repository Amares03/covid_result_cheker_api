var userdb = require("../model/model");
var path = require("path");
const pdfService = require("../controller/pdf-service");
const axios = require("axios");
const saveAs = require("file-saver");

const pdfDownload = () => {
  axios.get(`/pdf`, { responseType: "blob" }).then((res) => {
    const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    saveAs(pdfBlob, "newpdf.pdf");
  });
};

exports.save = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  pdfDownload();
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const user = new userdb({
    fullName: req.body.fullName,
    passportNum: req.body.passportNum,
    requestedDate: req.body.requestedDate,
    collectedDate: req.body.collectedDate,
    dbo: req.body.dbo,
    nationality: req.body.nationality,
    phone: req.body.phone,
    resultDate: req.body.resultDate,
    reviewedBy: req.body.reviewedBy,
    sampleId: req.body.sampleId,
    sex: req.body.sex,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "error while saving" + err });
    });
};

exports.find = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const id = req.params.id;
  userdb
    .findById(id)
    .then((data) => {
      res.render("index", { user: data });
    })
    .catch((err) => {
      res.status(500).render("errorpage" + err);
    });
};

exports.detail = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const id = req.params.id;
  userdb
    .findById(id)
    .then((data) => {
      res.render("detail", { user: data });
    })
    .catch((err) => {
      res.status(500).render("errorpage" + err);
    });
};

exports.findSample = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const id = req.params.id;
  userdb
    .find({ sampleId: id })
    .then((data) => {
      res.render("index", { user: data[0] });
    })
    .catch((err) => {
      res.status(500).render("errorpage" + err);
    });
};
exports.pdfGenerate = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const id = req.params.id;

  userdb
    .findById(id)
    .then((data) => {
      pdfService.buldPdf(data);

      setTimeout(
        () => {
          res.download(`output1.pdf`);
        },

        1000
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("errorpage");
    });
};
