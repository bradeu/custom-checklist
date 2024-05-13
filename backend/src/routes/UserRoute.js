import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router
    .get("/", (req, res) => {
        console.log("authenticate here");
        res.status(200).send("authenticate here");
    })
    .post("/signup", UserController.signup)
    .post("/login", UserController.login);

export default router;