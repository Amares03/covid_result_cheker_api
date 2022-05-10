const axios = require("axios");

exports.homeRout = async (req, res) => {
  await axios
    .get("https://iclilaboratory.herokuapp.com/icladdis/viewresult")
    .then(function (response) {
      res.render("index", { user: response.data });
    })
    .catch((err) => {
      res.status(404).render("errorpage");
    });
};
