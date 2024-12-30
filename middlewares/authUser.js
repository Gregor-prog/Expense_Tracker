import express from "express"

export const authUser = (req,res,next) => {
    
    if(req.session.user){
        next()
    }
    else{
        throw "session expired, try login again"
    }
}