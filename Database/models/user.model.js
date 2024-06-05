import sequelize from "../dbconnection.js"
import { DataTypes } from "sequelize"
import commentsModel from "./comments.model.js"
import postModel from "./post.model.js"
const userModel =  sequelize.define('user',{
    userName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})
export default userModel
userModel.hasMany(commentsModel)
userModel.hasMany(postModel)