import mongoose from "mongoose"


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Please provide  name"]
    },
    email: {
        type: String,
        required: [true, "please Provide Email"], 
        unique : true
    },
    password: {
        type: String,
        required : [true, "please provide password"]
    },
    balance : {
        type: Number,
        required: [true, "balance is required"],
        default: 0,
    }
},
{
    timestamps :true,
})


export const userRegModel = mongoose.model("usersSchema", usersSchema)