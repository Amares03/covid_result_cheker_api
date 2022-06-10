const PDFDocument = require("pdfkit");
const fs = require("fs");
const qrCode = require("qrcode");

const pdf = new PDFDocument({ size: "A5", margin: 10 });
const nameYAxis = 150;
const nameXAxis = 80;

function buldQr(data) {
  qrCode.toFile(
    `${__dirname}/assets/rqimage.png`,
    `https://covid-result-tester.herokuapp.com/test-result-using-qr-code/${data.passportNum}`,
    {
      version: 6,
      width: 90,
    },
    function (err) {
      if (err) throw err;
      buldPdf(data);
    }
  );
}

function buldPdf(data) {
  pdf.pipe(fs.createWriteStream(`output1.pdf`));

  pdf.image(fs.readFileSync(`${__dirname}/assets/checklogo.png`), 0, 0, {
    height: pdf.page.height,
    width: pdf.page.width,
  });
  pdf.image(
    fs.readFileSync(`${__dirname}/assets/rqimage.png`),
    nameXAxis + 150,
    nameYAxis + 270,
    {
      height: 120,
      width: 120,
    }
  );

  pdf
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#000")
    .text("Scan Here ", nameXAxis + 160, nameYAxis + 257);
  pdf
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor("#0f55eb")
    .text("Covid Result Certificate ", nameXAxis + 40, 120);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(`Full Name : ${data.fullName}`, nameXAxis, nameYAxis);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(
      `Passport/Kebele ID : ${data.passportNum}`,
      nameXAxis,
      nameYAxis + 30
    );
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(`Date of Birth : ${data.dbo}`, nameXAxis, nameYAxis + 60);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(`Gender : ${data.sex}`, nameXAxis, nameYAxis + 90);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(`Nationality : ${data.nationality}`, nameXAxis, nameYAxis + 120);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(`Result : ${data.result}`, nameXAxis, nameYAxis + 150);
  pdf
    .font("Times-Roman")
    .fontSize(15)
    .fillColor("#0f55eb")
    .text(
      `Result issued date : ${data.resultDate}`,
      nameXAxis,
      nameYAxis + 180
    );
  pdf.end();
}

module.exports = { buldQr };
