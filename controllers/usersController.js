// users controller - we need data base query so we need to import pool
import pool from "../db/pg.js";

// we have to export every controller seperately
export const getAllUsers = (req, res) => {
    pool
        .query("SELECT * FROM users")
        // here we say that our users is an object with the value of data.rows
        .then((data) => res.status(200).json({ users: data.rows }))
        //.then((data)=> console.log(data));
        .catch((err) => res.status(500).json(err));
};

