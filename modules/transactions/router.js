import express from "express"
import { authUser } from "../../middlewares/authUser.js"
import { createTrans } from "./controllers/createTransaction.js"
import { checkOneTransaction,checkAllTransaction } from "./controllers/checkTransaction.js"
export const transactionRouter = express.Router()

// protected routes
transactionRouter.use(authUser)
transactionRouter.post("/create", createTrans)
transactionRouter.post("/checkOne", checkOneTransaction)
transactionRouter.get("/checkAll", checkAllTransaction)