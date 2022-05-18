// users controller - we need data base query so we need to import pool
import pool, { Pool } from "../db/pg.js";

// we have to export every controller seperately
export const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users").then(data => console.log(data)).catch(err => res.status(500).json(err));
};