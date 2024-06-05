 import { DataTypes } from "sequelize"
import sequelize from "../dbconnection.js"
const commentsModel = sequelize.define('comment',{
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    },
     
})
export default commentsModel