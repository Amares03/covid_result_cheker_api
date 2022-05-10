var userdb = require("../model/model");
const pdfService = require("../services/pdf-service");
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
      res.status(500).render("errorpage");
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
      res.status(500).render("errorpage");
    });
};
