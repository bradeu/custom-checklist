import pool from "../../app.js"

class ListModel {
    create(list) {
        const query = "INSERT INTO public.list(id, email, content) VALUES($1, $2, $3)";
        const values = [list.id, list.email, list.content];

        return pool.query(query, values)
            .then(() => {console.log("Successfully created")})
            .catch(err => {console.log(err);})
     }

    read(list) {
        const query = "SELECT * FROM public.list WHERE email = $1";
        const values = [list.email];

        return pool.query(query, values)
            .then(result => {
                if (result.rows.length > 0) return result;
                return null;
            })
            .catch(err => {console.log(err);})
    }

    update(list) {
        const query = "UPDATE public.list SET content = $3 WHERE id = $1 AND email = $2";
        const values = [list.id, list.email, list.content];

        return pool.query(query, values)
            .then(() => {console.log("Successfully updated")})
            .catch(err => {console.log(err);})
    }

    delete(list) {
        const query = "DELETE FROM public.list WHERE id = $1 AND email = $2";
        const values = [list.id, list.email];

        return pool.query(query, values)
            .then(() => {console.log("Successfully deleted")})
            .catch(err => {console.log(err);})
    }
}

export default new ListModel();