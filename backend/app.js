import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import router from "./src/routes/index.js";
import pkg from 'pg';
const { Pool } = pkg;
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: process.env.DB_SSL ? { ca: process.env.DB_SSL } : false,
};

const pgPool = new Pool(dbConfig);


// Test database connection
pgPool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
        return;
    }
    console.log('Connected to database');
    release(); // Release the client
    console.log("Test Connection Closed")
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", router);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default pgPool;