const express= require("express");
const app= express();
const exphbs= require("express-handlebars");

app.engine("handlebars", exphbs.engine({defaultLayout:"main"}))
app.set("view engine","handlebars");

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(5000);