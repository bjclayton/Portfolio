import cors from 'cors';
import express, { json } from 'express';
import 'dotenv/config';
import nodemailer from 'nodemailer';
import { getAccessToken } from './spotify.js';

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

    try {
        let mailOptions = {
            from: formData.email,
            to: "jclaytonblanc@gmail.com",
            subject: `Portfolio: ${formData.subject}`,
            text: `Sender's Email: ${formData.email}\n\n${formData.message}`
        };

        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log('Error send message:', err);
                return res.json({ message: "Internal server error!" });
            }
        });

        res.json({ message: "Message sent successfully." });

    } catch (error) {
        console.error('Error send message:', error);
        res.status(500).json({ message: "Internal server error!" });
    }
});


app.use("/generate-token", async (req, res) => {
    try {
        const { access_token } = await getAccessToken(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REFRESH_TOKEN
        );

        const response = await fetch(process.env.NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.status > 400) {
            return res.status(500).json({
                response: { message: "Unable to Fetch Song", code: 500 }
            });
        } else if (response.status === 204) {
            return res.status(500).json({
                response: { message: "Currently Not Playing", code: 204 }
            });
        }

        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist) => artist.name).join(', ');
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
        const timePlayed = song.progress_ms;
        const timeTotal = song.item.duration_ms;
        const artistUrl = song.item.album.artists[0].external_urls.spotify;

        const responseData = {
            albumImageUrl: albumImageUrl,
            artist: artist,
            isPlaying: isPlaying,
            songUrl: songUrl,
            title: title,
            timePlayed: timePlayed,
            timeTotal: timeTotal,
            artistUrl: artistUrl,
            code: 200
        };

        res.status(200).json({ response: responseData });

    } catch (error) {
        console.log('Error fetching currently playing song');
        res.status(500).json({
            response: { message: "Internal server error!", code: 500 }
        });
    }
});


app.listen(5000, () => {
    console.log("http://localhost:5000");
});