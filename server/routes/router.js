const express = require("express");
const controller = require("../controller/controller");
const render = require("../services/render");

const router = express.Router();

// API
router.post("/api/user", controller.create);
router.get("/icladdis/viewresult/:id", controller.find);
router.get("/icladdis/viewresult/:id/detail", controller.detail);
router.get("/icladdis/viewresult/:id/pdf", controller.pdfGenerate);
router.get("/viewresult/ref=/:id", controller.findSample);
// router.get("/viewresult/ref=/:id/pdf", controller.pdfGenerate);
// router.get("/pdf/:id", controller.pdfGenerate);

module.exports = router;
