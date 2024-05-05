import express from "express";
import userRouter from "./UserRoute.js"

const router = express.Router();

router
    .get("/", (req, res) => {
        console.log("hello world");
        res.status(200).send("hello world");
    })
    .use("/user", userRouter);

export default router;