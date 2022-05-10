const express = require("express");
const controller = require("../controller/controller");

const router = express.Router();

// API
router.post("/api/users", controller.create);
router.get("/test-result-using-qr-code/:id", controller.find);
router.put("api/users/:id", controller.update);
router.delete("api/users/:id", controller.delete);
router.get("/test-result-using-qr-code/:id/pdf", controller.pdfGenerate);

module.exports = router;
