// import pool from pg
import pool from '../db/pg.js'

// we have to export every controller seperately
//------- get all orders controller ---------//
export const getAllOrders = (req, res) => {
    pool
        .query("SELECT * FROM order")
        .then((data) => res.status(200).json({ order: data.rows }))
        .catch((err) => res.status(500).json(err));
};
//------- get single order controller ---------//
export const getSingleOrder = (req, res) => {
    const { id } = req.params;
    pool
        .query("SELECT * FROM orders WHERE id=$1")
        .then((data) => {
            if (data.rowCount == 0) {
                res.status(404).send("There is no Order matching this ID");
            } else {
                res.status(200).json(data.row[0]);
            }
        })
        .catch((err) => res.status(500).json(err));
};