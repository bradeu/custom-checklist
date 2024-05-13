import pool from "../../app.js"

class UserModel {
    create(user) {
        const query = "INSERT INTO public.auth(name, email, password) VALUES($1, $2, $3)";
        const values = [user.name, user.email, user.password];

        return pool.query(query, values)
            .then(() => {console.log("User created successfully")})
            .catch(err => {console.log(err);})}

    get(email) {
        const query = "SELECT * FROM public.auth WHERE email = $1";
        const values = [email];
        
        return pool.query(query, values)
            .then(result => {
                if (result.rows.length > 0) {
                    return result.rows[0];
                } else {
                    return null;
                }
            })
            .catch(err => {console.log(err);})}
}

export default new UserModel();