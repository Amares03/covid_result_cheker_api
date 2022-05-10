var userdb = require("../model/model");
const pdfService = require("../services/pdf-service");
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
