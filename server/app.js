import cors from 'cors';
import express, { json } from 'express';
import { Resend } from 'resend';
import 'dotenv/config';

const app = express();
const resend = new Resend("re_9Gi1C4RA_JYf5cBoqsdx96TYViUrYAYGv");

app.use(cors());
app.use(json());

app.use("/api/send-message", async (req, res) => {
    const { sender, subject, body } = req.body;

    await resend.emails.send({
        from: 'portfolio-contact.com',
        to: 'jclaytonblanc@gmail.com',
        subject: subject,
        html: `<p${sender} <br/> ${body}</p>`
    });

    res.json({ message: "Success!" });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});