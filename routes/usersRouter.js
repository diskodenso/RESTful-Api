// import Router
import { Router } from "express";
// import getAllUsers
import { getAllUsers, getSingleUser, createNewUser, deleteUser, updateUser } from "../controllers/usersController.js";
// declare userRouter
const usersRouter = Router();
// at the /api/users route we want to accept get & post (add the method and pass in the matching controller)
usersRouter.route("/").get(getAllUsers).post(createNewUser);
// at the /api/users/:id route we want to accept get, put & delete (add the method and pass in the matching controller)
usersRouter.route("/:id").get(getSingleUser).delete(deleteUser).put(updateUser);

// export Router
export default usersRouter;
