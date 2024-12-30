import errorHandler from "express-async-errors"
export const errorHandle = (error,req,res,next) => {
    if(error){
        res.status(400).json({
            status:404,
            error: error
        })
        console.log(error)
    }
    else{
        next()
    }
}