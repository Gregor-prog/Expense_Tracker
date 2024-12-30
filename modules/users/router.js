import express from "express"
import { userRegistration } from "./controllers/register.js";
import { userLogin } from "./controllers/login.js";
import { authUser } from "../../middlewares/authUser.js";
import { dashboard } from "./controllers/dashboard.js";

export const UserRouter = express.Router();
UserRouter.post("/registration", userRegistration)
UserRouter.post("/login", userLogin )

// protected routes
UserRouter.use(authUser)
UserRouter.get("/dashboard", dashboard
    
)