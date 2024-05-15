import express from "express";
import ListController from "../controllers/ListController.js";

const router = express.Router();

router
    .get("/", (req, res) => {
        console.log(req.user.userId);
        res.status(200).send(req.user.userId);
    })
    .post("/create", ListController.create)
    .get("/read", ListController.read)
    .post("/update", ListController.update)
    .post("/delete", ListController.delete)

export default router;