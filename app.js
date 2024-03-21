const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.render("cadastrar")
})

app.get("/consultar", function(req, res){
    res.render("consultar")
    
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})