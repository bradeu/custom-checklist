import pool from "../../app.js"

class UserModel {
    create(user) {
        const query = "INSERT INTO public.auth(name, email, passowrd) VALUES($1, $2, $3)";
        const values = [user.name, user.email, user.password];

        return pool.query(query, values).then(() => {
            console.log("User created successfully")
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default new UserModel();