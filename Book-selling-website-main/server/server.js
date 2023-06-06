import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRoute.js"

const port = process.env.port || 5000;
const mongo_url = process.env.mongo_url;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use((req, res) => {
    const error = req.body.error || "404";
    res.status(200).json({error});
});

// mongodb setup
mongoose.set("strictQuery", false);

mongoose.connect(mongo_url, {
    useUnifiedTopology: true,
})
    .then((res) => {
        console.log("db connected...");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.log("Mongodb error.. -> " + err);
    })