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


app.use("/send-email", async (req, res) => {
    const { formData } = req.body;
    
    let mailOptions = {
        from: formData.email,
        to: "jclaytonblanc@gmail.com",
        subject: `Portfolio: ${formData.subject}`,
        text: `Sender's Email: ${formData.email}\n\n${formData.message}`
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
            res.json({ message: "Error!" });
        }
    });

    res.json({ message: "Message sent successfully." });
});

app.listen(5000, () => {
    console.log("http://localhost:5000");
});