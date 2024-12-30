import mongoose from "mongoose"

export const dashboard = async (req, res) => {
    const userRegModel = mongoose.model("usersSchema")
    const data = await userRegModel.findOne({name: req.session.user.name}).select("-password")
    res.status(200).json({
        status : 200,
        data : data
    })
}