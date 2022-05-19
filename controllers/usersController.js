// users controller - we need data base query so we need to import pool
import pool from "../db/pg.js";

// we have to export every controller seperately
export const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users")
        // as response we send status code 200 and declare a users table with the data of data.rows
        .then((data) => res.status(200).json({ users: data.rows }))
        .catch((err) => res.status(500).json(err));
};

// create a singleUser table
export const getSingleUser = (req, res) => {
  // if we only want one user we need to find a thing which
  // lets us identify the user - that can be done via the ID
  // the id can be found in the params!!!
  // for example - console.log(req.params) -> response {id: 12}
  // req.params.id
  // destructure the id
  const { id } = req.params;
  pool
    .query("SELECT * FROM users WHERE id=$1", [id])
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no User matching this ID");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
  // now test your :id route by using postman typing http://localhost:5000/api/users/2
  // you should get the user with the id 2
}

