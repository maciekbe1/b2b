import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import nodemailer from "nodemailer";

const path = require("path");

require("dotenv").config();

const app = express();

const port = 12444;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

var jsonParser = bodyParser.json();

app.use(cookieParser(), jsonParser, morgan("tiny"), cors("*"));

app.post("/api/send", (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "web8.aftermarket.hosting",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@purconcept.pl",
        pass: "admin1234567890",
      },
    });

    const mailOptions = {
      from: req.body.email, // sender address
      to: "madecki1991@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>Masz nową wiadomość!</p>
      <ul>
        <li>Nazwa klienta: ${req.body.client}</li>
        <li>Email: ${req.body.email}</li>
        <li>Miejsce Aplikacji: ${req.body.subject}</li>
        <li>Wiadomość: ${req.body.message}</li>
      </ul>
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

app.listen(port, () => {
  console.log("server start on port 12444");
});
