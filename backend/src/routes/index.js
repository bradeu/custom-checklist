import express from "express";
import userRouter from "./UserRoute.js";
import {authenticateToken} from "../auth.js";

const router = express.Router();

router
    .get("/", authenticateToken, (req, res) => {
        console.log(req.user.userId);
        res.status(200).send(req.user.userId);
    })
    .use("/user", userRouter);

export default router;