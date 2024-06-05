import userModel from "../../Database/models/user.model.js"
import bcrypt, { hash } from "bcrypt"
import postModel from "../../Database/models/post.model.js"
import commentsModel from "../../Database/models/comments.model.js"
const addUser = async (req, res) => {
    let unHashed = req.body.password
    bcrypt.hash(unHashed, 8, async (err, hash) => {
        let hashed = hash
        await userModel.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashed,
        })
    });
    res.json({ "messege": "success" })
}
const logout = async (req, res) => {
    res.json({ "messege": "logged out" })
}
const getUsers = async (req, res) => {
    let users = await userModel.findAll({ attributes: ['userName', 'email'] })
    res.json({ "messege": "success", users: users })
}
const login = async (req, res) => {
    let unHashed = req.body.password
    let userArr = await userModel.findAll({
        where: {
            email: req.body.email,
        }
    })
    let hashed = userArr[0].password
    if (userArr.length >= 1) {
        let result = await bcrypt.compare(unHashed, hashed)
        if (result) {
            res.json({ "messege": "login successful", "token": "token..." })
        } else {
            res.json({ "messege": "login unsuccessful", "error": "email or password is wrong" })
        }
    }
    else {
        res.json({ "messege": "email or password is wrong" })
    }
}
let getSpecificUser = async (req, res) => {
    let userArr = await userModel.findAll({
        where: {
            id: req.params.id
        },include:[{model:postModel,include:commentsModel}]
    })
    if (userArr.length >= 1) {
       
        res.json({ "messege": "success", user:userArr })

    } else {
        res.json({ "messege": "can't find user" })

    }
}
export {
    addUser,
    getUsers,
    login,
    logout,
    getSpecificUser
}