import express from 'express'
import {  DataTypes} from 'sequelize'
import sequelize from './Database/dbconnection.js'
import userRouter from './modules/user/user.routes.js'
import postRouter from './modules/post/post.routes.js'
import commentsRouter from './modules/comments/comments.routes.js'
import cors from "cors"
app.use(cors())
const app = express()
const port = process.env.PORT || 3000
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(commentsRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))