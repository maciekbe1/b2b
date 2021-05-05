const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = 12033;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("./build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./build", "index.html"));
  });
}

var jsonParser = bodyParser.json();

var corsOptions = {
  origin: process.env.VAR_SERVER,
  optionsSuccessStatus: 200,
};

app.use(cookieParser(), jsonParser, morgan("tiny"), cors(corsOptions));

app.post("/api/send", (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "web8.aftermarket.hosting",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@purconcept.pl",
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: req.body.email, // sender address
      to: "kontakt@purconcept.pl", // list of receivers
      subject: `Od: ${req.body.client}, Email: ${req.body.email}`, // Subject line
      html: `
      <h3>Wiadomość od <strong>${req.body.client}</strong></h3>
      <ul>
        <li>Email: ${req.body.email}</li>
        <li>Miejsce Aplikacji: ${req.body.place}</li>
      </ul>
      <p><strong>Treść wiadomości:</strong></p>
      <p>${req.body.message}</p>
      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);

        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`server start on port ${port}`);
});
