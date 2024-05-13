import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


// Hash password with bcrypt
const hashPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds).then((hash) => {
        return hash; // Save hash in database
    })
    .catch((err) => {
        console.log(err);
    })
};

const comparePassword = (givenPassword, hash) => {
    return bcrypt
        .compare(givenPassword, hash) // Checks password from user and hashed password
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log(err);
        })  
};

const authenticateToken = (req, res, next) => {
    const secret = process.env.JWT_SECRET;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the header

    if (token == null) return res.sendStatus(401); // if no token, return 401 Unauthorized

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403); // any error (e.g., token expired) returns 403 Forbidden
        req.user = user;
        next(); // proceed to the next middleware function
    });
}

export { hashPassword, comparePassword, authenticateToken };