var userdb = require("../model/model");
// const pdfService = require("../services/pdf-service");

// create user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const user = new userdb({
    fullName: req.body.fullName,
    passportNum: req.body.passportNum,
    dbo: req.body.dbo,
    nationality: req.body.nationality,
    phone: req.body.phone,
    result: req.body.result,
    resultDate: req.body.resultDate,
    reviewedBy: req.body.reviewedBy,
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

// find user
exports.find = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "user cannot be emity" });
  }
  const id = req.params.id;
  userdb
    .findById(id)
    .then((data) => {
      if (!data) {
        res.status(500).render("errorpage");
      } else {
        res.render("index", { user: data });
      }
    })
    .catch((err) => {
      res.status(500).render("errorpage");
    });
};

// update user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Update Cannot be empity" });
  }
  const id = req.params.id;
  userdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send(`User by id ${id} not Found`);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(`Error While Updating User Data Information`);
    });
};

// delete user
exports.delete = (req, res) => {
  const id = req.params.id;
  userdb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `User by id ${id} is not found` });
      } else {
        res.status(200).send({ message: `user is Deleted Sucssuccfully` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `user not found` });
    });
};

// generate pdf
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
