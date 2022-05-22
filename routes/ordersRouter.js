// import Router
import { Router } from 'express';
import { createNewOrder, deleteOrder, getAllOrders, getSingleOrder } from '../controllers/ordersController.js';

// call router function
const ordersRouter = Router();
// 1.  create Route for all orders(getAllOrders)
ordersRouter.route("/").get(getAllOrders).post(createNewOrder);
// 1. create Route for single order (getSingleOrder)
ordersRouter.route("/:id").get(getSingleOrder).delete(deleteOrder);
// export router
export default ordersRouter;