// import pool from pg
import query from 'express/lib/middleware/query';
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
//------- create order controller ---------//
export const createNewOrder = (req, res) => {
    const { price, date, user_id } = req.body;
    pool
    query("INSERT INTO orders (price, date, user_id) VALUE ($1, $2, $3) REtURNING *;",
        [price, date, user_id]
    )
        .then((data) => res.status(200).json(data.rows[0]))
        .catch((err) => res.status(500).json(err));
};
//------- delete order controller ---------//
export const deleteOrder = (req, res) => {
    const { id } = req.params;
    pool
    query("DELETE user WHERE id=$1", [id]
    )
        .then((data) => {
            if (data.rowCount == 0) {
                res.status(404).send("There is no User matching this ID")
            } else {
                res.status(200).send("Order successfully deleted!")
            }
        })
        .catch((err) => res.status(500).json(err));
};