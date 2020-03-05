const express= require("express");
const router = express.Router()
const data=require("../data.json")

// routes for different paths of the site
router.get("/",(req,res)=>{
    res.locals.proj=data.projects
 res.render("index")
})

router.get("/about",(req,res)=>{
    res.render("about")
})

router.get("/projects:id",(req,res)=>{
    res.locals.proj=data.projects[req.params.id]
    res.render("project")
})












module.exports=router