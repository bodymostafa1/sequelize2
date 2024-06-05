import { Router } from "express";
import { createComments, deleteComment, readComments, updateComments } from "./comments.controller.js";

const commentsRouter = Router()
commentsRouter.post("/comments/createcomments",createComments)
commentsRouter.get("/comments/readcomments",readComments)
commentsRouter.put("/comments/updatecomment/:id",updateComments)
commentsRouter.delete("/comments/deleteComment/:id",deleteComment)

export default commentsRouter