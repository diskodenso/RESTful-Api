// import Router
import { Router } from "express";
// import getAllUsers
import { getAllUsers, getSingleUser, createNewUser } from "../controllers/usersController.js";
// declare userRouter
const usersRouter = Router();
// at the /api/users route we want to accept get & post 
// to create a new user we need the post method and we want to have it at the generic main route
usersRouter.route("/").get(getAllUsers).post(createNewUser);
// at the /api/users/:id route we want to accept get, put & delete
usersRouter.route("/:id").get(getSingleUser);

// export Router
export default usersRouter;
