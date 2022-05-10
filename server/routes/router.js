const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();

// API
router.get("/test-result-using-qr-code/:id", controller.find);
router.get("/test-result-using-qr-code/:id/pdf", controller.pdfGenerate);
// router.get('/generate/:id',controller.pdfGenerate);

module.exports = router;
