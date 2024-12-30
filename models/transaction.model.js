import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "provide id"]
    },
    amount: {
        type : Number,
        required:[true, "please Provide Amount"]
    },
    transactionType : {
        type: String,
        required: [true, "what's transaction type"]
    },
    remark : {
        type: String,
        default: "_"
    }

},
{
    timestamps: true
})

export const transactionModel = mongoose.model("transactions",transactionSchema)