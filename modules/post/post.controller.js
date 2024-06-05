import postModel from "../../Database/models/post.model.js"

let createPost = async (req,res)=>{
    await postModel.create(req.body)
    let createdpost = await postModel.findAll({
        where:{
            author:req.body.author,
            content:req.body.content,
            title:req.body.title
        }
    })
    res.json({"messege":"success",addedPost:createdpost})
}
let readPost = async (req,res)=>{
    let createdpost = await postModel.findAll()
    res.json({"messege":"success",addedPost:createdpost})
}
let updatePost = async (req,res)=>{
    await postModel.update(
        {author:req.body.author,
        title:req.body.title,
        content:req.body.content},
        {where:{
            id:req.params.id,
            userId:req.body.userId
        }}
    )
    let updatedPost = await postModel.findAll({
        where:{
            author:req.body.author,
            content:req.body.content,
            title:req.body.title,
            userId:req.body.userId
        }
    })
    res.json({"messege":"updated",updatedPost:updatedPost})
}
let deletePost = async (req,res)=>{
    let deletedUser = await postModel.findAll({
        where:{
            id:req.params.id,
            userId:req.body.userId
        }
    })
    await postModel.destroy(
        {where:{
            id:req.params.id,
            userId:req.body.userId
        }}
    )
    
    res.json({"messege":"deleted",deletedUser:deletedUser})
}
let specificPost = async (req,res)=>{
    let post = await postModel.findAll({
        where:{
            author:req.params.author
    }})
    res.json({"messege":"success",post:post})
}
export{
    createPost,
    readPost,
    updatePost,
    deletePost,
    specificPost
}