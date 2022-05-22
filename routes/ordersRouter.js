// import Router
import { Router } from 'express';
import { getAllOrders, getSingleOrder } from '../controllers/ordersController.js';

// call router function
const ordersRouter = Router();
// 1.  create Route for all orders(getAllOrders)
ordersRouter.route("/").get(getAllOrders);
// 1. create Route for single order (getSingleOrder)
ordersRouter.route("/:id").get(getSingleOrder);
// export router
export default ordersRouter;