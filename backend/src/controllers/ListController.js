import listModel from "../models/ListModel.js"

export default class ListController {
    
    static create(req, res) {
        const args = req.body;

        listModel.create(args).then(() => {
            console.log("List item created successfully");
            res.status(200).send("List item created successfully");
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }

    static read(req, res) {
        const args = req.body;

        listModel.read(args).then(result => {
            if (result == null) {
                console.log("Not Found");
                res.status(500).send("Not found")
            } else {
                console.log("List read successfully");
                res.status(200).send(result);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }

    static update(req, res) {
        const args = req.body;

        listModel.update(args).then(() => {
            console.log("List item updated successfully");
            res.status(200).send("List item updated successfully");
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }

    static delete(req, res) {
        const args = req.body;

        listModel.delete(args).then(() => {
            console.log("List item deleted successfully");
            res.status(200).send("List item deleted successfully");
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    }
}