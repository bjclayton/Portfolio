import cors from 'cors';
import express, { json } from 'express';
import 'dotenv/config';
import nodemailer from 'nodemailer';

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://johnclayton.vercel.app"
    ]
}));
app.use(json());

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});


app.use("/api/send-message", async (req, res) => {
    const { sender, subject, body } = req.body;

    let mailOptions = {
        from: sender,
        to: "jclaytonblanc@gmail.com",
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
            res.json({ message: "Error!" });
        }
    });

    res.json({ message: "Message sent successfully." });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});