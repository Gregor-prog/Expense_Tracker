import errorHandler from "express-async-errors"
import express from "express"
import dotenv from "dotenv"
import session from "express-session"
import mongoose from "mongoose"
import { errorHandle } from "./handlers/errorHandler.js"
import { UserRouter } from "./modules/users/router.js";
import { transactionRouter } from "./modules/transactions/router.js"

const PORT = 5000;
dotenv.config()
const app = express()


// connecting database
mongoose.connect(process.env.MONGO_STRING, {})
.then(() => {console.log(`connection to monodb database was successfull`)})
.catch((error) => {console.log(error); console.log(`error connecting to database`)})


// models initialization
import { userRegModel } from "./models/user.model.js";
import { transactionModel } from "./models/transaction.model.js"

// middlewares
app.use(session({
    secret:"damn",
    resave:false,
    saveUninitialized : false,
    cookie: {secure:false, maxAge:3600000}
}))
app.use(express.json());

// requests
app.use("/users", UserRouter)
app.use("/users/transaction", transactionRouter)

app.use(errorHandle)




app.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`)
})