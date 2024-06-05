import commentsModel from "../../Database/models/comments.model.js"

let createComments = async (req,res)=>{
    await commentsModel.create(req.body)
    let createdComment = await commentsModel.findAll({
        where:{
            content:req.body.content,
        }
    })
    res.json({"messege":"success",addedComment:createdComment})
}
let readComments = async (req,res)=>{
    let createdComment = await commentsModel.findAll()
    res.json({"messege":"success",allComments:createdComment})
}
let updateComments = async (req,res)=>{
    await commentsModel.update(
        {content:req.body.content},
        {where:{
            id:req.body.commentId,
            postId:req.params.id
        }}
    )
    let updatedComment = await commentsModel.findAll({
        where:{
            id:req.body.commentId,
            postId:req.params.id
        }
    })
    res.json({"messege":"updated",updatedComment:updatedComment})
}
let deleteComment = async (req,res)=>{
    let deleteComment = await commentsModel.findAll({
        where:{
            id:req.body.commentId,
            postId:req.params.id
        }
    })
    await commentsModel.destroy(
        {where:{
            id:req.body.commentId,
            postId:req.params.id
        }}
    )
    
    res.json({"messege":"deleted",deleteComment:deleteComment})
}
export{
    createComments,
    readComments,
    updateComments,
    deleteComment
}