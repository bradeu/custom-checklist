import express from "express";
import ListController from "../controllers/ListController.js";

const router = express.Router();

router
    .get("/", (req, res) => {
        console.log("list");
        res.status(200).send("list");
    })
    .post("/create", ListController.create)
    .post("/read", ListController.read)
    .post("/update", ListController.update)
    .post("/delete", ListController.delete)

export default router;