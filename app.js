const express=require("express");
const Myprojects=require("./package.json").projects
const routes= require("./routes/myroutes.js");
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())


app.set("view engine","pug")

app.use("/static",express.static("public"))
// app.use(express.static("public/css/style.css"))

app.use(routes);





// errorhandler middlewear for 404 page


app.use((req,res,next)=>{
    const err= new Error ("Sorry Page Not Found")
    err.status=404
    next(err)
})
app.use((error,req,res,next)=>{
    res.locals.error=error
    console.log("error called")
    res.render("error",)
})








app.listen(3000,function(){
    
    console.log(`The server is listening at port:${this.address().port}`)
})