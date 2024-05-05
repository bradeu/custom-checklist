export default class UserController {
    static signup(req, res) {
        res.status(200).send("signup");
    }

    static login(req, res) {
        res.status(200).send("login")
    }
}