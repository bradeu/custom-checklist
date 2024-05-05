import { hashPassword } from "../auth.js";
import userModel from "../models/UserModel.js"

export default class UserController {
    static async signup(req, res) {
        const args = req.body;
        const hashedPassword = await hashPassword(args.password);
        args.password = hashedPassword;

        return userModel.create(args).then(() => {
            console.log("User created")
        }).catch((err) => {
            console.log(err);
        });
    }

    static login(req, res) {
        res.status(200).send("login")
    }
}