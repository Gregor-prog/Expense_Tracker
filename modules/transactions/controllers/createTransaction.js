import express from "express"
import mongoose from "mongoose"

export const createTrans = async (req,res) => {
    const transactionModel = mongoose.model("transactions")
    const {amount, transactionType,remark} = req.body

    const createdTrans = await transactionModel.create({
        user_id : req.session.user._id,
        amount,
        transactionType,
        remark
    })

    res.status(200).json({
        status:200,
        message: "transaction created successfully"
    })
}