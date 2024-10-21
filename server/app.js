import cors from "cors";
import express, { json } from "express";
import "dotenv/config";
import { getAccessToken } from "./spotify.js";
import { Resend } from "resend";
import {emailValidation, isNotValidEmail} from "./validation.js";

const app = express();
const resend = new Resend(process.env.APIKEY);

app.use(
    cors({
        origin: [
            "https://www.johnclaytonblanc.com",
            "https://johnclayton.vercel.app",
        ],
    })
);
app.use(json());

app.use("/send-email", async (req, res) => {
    const { formData } = req.body;

    try {
        const { error } = emailValidation(formData);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const isNotValid = await isNotValidEmail(formData.email)
        if (isNotValid) return res.status(400).json({ message: "Please enter a valid email address."});

        await resend.emails.send({
            from: `Acme <${process.env.SENDER}>`,
            to: [process.env.RECEIVER],
            subject: `Portfolio - ${formData.subject}`,
            html: `<div>
                <h4>Sender's Email: ${formData.email}</h4> 
                <br> 
                <p>${formData.message}</p>
            </div>`,
        });

        res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
        console.error("Error send message:", error);
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
                response: { message: "Unable to Fetch Song", code: 500 },
            });
        } else if (response.status === 204) {
            return res.status(500).json({
                response: { message: "Currently Not Playing", code: 204 },
            });
        }

        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist) => artist.name).join(", ");
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
            code: 200,
        };

        res.status(200).json({ response: responseData });
    } catch (error) {
        console.log("Error fetching currently playing song");
        res.status(500).json({
            response: { message: "Internal server error!", code: 500 },
        });
    }
});

app.listen(5000, () => {
    console.log("http://localhost:5000");
});
