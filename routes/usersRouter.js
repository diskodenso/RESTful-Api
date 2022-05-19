// import Router
import { Router } from "express";
// import getAllUsers
import { getAllUsers, getSingleUser } from "../controllers/usersController.js";
// declare userRouter
const usersRouter = Router();
// at the /api/users route we want to accept get & post 
usersRouter.route("/").get(getAllUsers);
// at the /api/users/:id route we want to accept get, put & delete
usersRouter.route("/:id").get(getSingleUser);

// export Router
export default usersRouter;
