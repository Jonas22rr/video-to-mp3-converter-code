import { Request, Response } from "express";
import * as express from "express";
import axios from "axios";
import dotenv from "dotenv";

export const convert = express.Router();
dotenv.config();
interface videoInfos {
    videoId: string;
}

convert.get("/convert-mp3", (req: Request, res: Response) => {
    res.send("convert test");
});

convert.post("/convert-mp3", async (req: Request, res: Response) => {
    const videoId = req.body.videoId as videoInfos["videoId"];
    console.log("videoId", videoId);
    if (videoId === "" || videoId === undefined || videoId === null) {
        return res.status(404).send("videoId Not Found!");
    } else {
        const options = {
            method: "GET",
            url: "https://youtube-mp36.p.rapidapi.com/dl",
            params: { id: videoId },
            headers: {
                "X-RapidAPI-Key": process.env.API_KEY,
                "X-RapidAPI-Host": process.env.API_HOST,
            },
        };

        const fetchResponse = await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });

        return res.status(200).json(fetchResponse);
    }
});
