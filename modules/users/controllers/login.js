import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

export const userLogin = async (req,res) => {
    const usersSchema = mongoose.model("usersSchema")
    const {iEmail, iPassword} = req.body
    const result = await usersSchema.findOne({email : iEmail})
    if(result == {} || result == null){throw "email does not exist, try registering"}
    const {_id, name, email, password, balance} = result
    const pp =  await bcrypt.compare(iPassword, password)
    console.log(pp)
    if(pp){
        req.session.user = {
            authenticated: true,
            name : name,
            _id
        }
        res.status(200).json({
            status:200,
            message: "login successful",
            userInfo: result
        })
    }
        else{
            throw "could'nt login, password is incorrect"
        }
    }


