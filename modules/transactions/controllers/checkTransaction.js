import mongoose from "mongoose"

export const checkOneTransaction = async (req,res) => {
    const transactionModel = mongoose.model("transactions")
    const {remark} = req.body
    const result = await transactionModel.findOne({remark})

    res.json({
        status:200,
        result
    })
}

export const checkAllTransaction = async (req,res) => {
    const transactionModel = mongoose.model("transactions")
    const [result] = await transactionModel.find({})

    res.json({
        status:200,
        result : result
    })
}