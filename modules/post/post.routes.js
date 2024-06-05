import { Router } from "express";
import { createPost, deletePost, readPost, specificPost, updatePost } from "./post.controller.js";

const postRouter = Router()
postRouter.post("/posts/createpost",createPost)
postRouter.get("/posts/readposts",readPost)
postRouter.get("/posts/:author",specificPost)
postRouter.put("/posts/updatepost/:id",updatePost)
postRouter.delete("/posts/deletepost/:id",deletePost)

export default postRouter