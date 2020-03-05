const express= require("express");
const router = express.Router()
const data=require("../data.json")

// routes for different paths of the site
router.get("/",(req,res)=>{
    res.locals.proj=data.projects
    console.log(data.projects[0].image_urls[0])
 res.render("index")
})

router.get("/about",(req,res)=>{
    console.log("about")
    res.render("about")
})

router.get("/projects:id",(req,res)=>{
    console.log(req.params.id)
    res.locals.proj=data.projects[req.params.id]
    res.render("project")
})












module.exports=router