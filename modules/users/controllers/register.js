import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

export const userRegistration = async (req,res) => {
    const {name, email, password, balance} = req.body

    if(!name){throw "name must be provided"}
    if(!email)throw "email must be provided"
    if(!password)throw  "password must be provided"
    if(password.length < 5) throw "passwird must be greater than 5"

    const nPassword = await bcrypt.hash(password, 10)
    const usersSchema = mongoose.model("usersSchema")
    const result = await usersSchema.findOne({email:email})
    if(result != {} || result != null){throw "user already exist"}

    usersSchema.create({
        name:name,
        email: email,
        password: nPassword,
        balance: balance
    })

    res.status(200).json({
        status: 200,
        message: " User registered successfully"
    })
}