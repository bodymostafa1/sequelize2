import sequelize from "../dbconnection.js"
import { DataTypes } from "sequelize"

import commentsModel from "./comments.model.js"
const postModel = sequelize.define('post',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
     content:{
        type: DataTypes.STRING,
        allowNull: false,
    } ,
    author:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})
postModel.hasMany(commentsModel)
export default postModel