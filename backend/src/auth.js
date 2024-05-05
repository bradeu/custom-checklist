import bcrypt from "bcryptjs";


// Hash password with bcrypt
const hashPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds).then((hash) => {
        return hash; // Save hash in database
    })
    .catch((err) => {
        console.log(err);
    })
}

export { hashPassword };