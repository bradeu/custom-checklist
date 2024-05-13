import { hashPassword, comparePassword } from "../auth.js";
import userModel from "../models/UserModel.js"
import jwt from "jsonwebtoken";

export default class UserController {
    static async signup(req, res) {
        const args = req.body;
        const hashedPassword = await hashPassword(args.password);
        args.password = hashedPassword;

        userModel.create(args).then(() => {
            console.log("User created");
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
    }

    static login(req, res) {
        const args = req.body;

        UserModel.get(args.email).then(async (user) => {
            if (user) {
                const valid = await comparePassword(args.password, user.password);
                if (valid) {
                    const token = jwt.sign(
                        {
                            userId: user.email
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "6h",
                            algorithm: "HS256"
                        }
                    );
                    res.status(200).send(token);
                } else {
                    res.status(500).send("Invalid password");
                }
            } else {
                res.status(500).send("User not found");
            }
        })
        .catch(err => {
            console.log('Error logging in user:', err);
            res.status(500).send('Error logging in user');
        });
    }
}