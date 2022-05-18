// import Router
import { Router } from "express";
// import getAllUsers
import { getAllUsers } from "../controllers/usersController.js";
// declare userRouter
const usersRouter = Router();
// we want to accept get & post at the /api/users route
usersRouter.route("/").get(getAllUsers)


// export Router
export default usersRouter;
