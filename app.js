const express = require('express')
const app = express()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo","root","",{
    host: "localhost",
    dialect: "mysql"
})
const port = 8081;

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar: " + erro)
})


const Agendamentos =  sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    }
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });

//Agendamentos.sync({force: true})
app.get("/", function(req, res) {
    res.send('Hello Sir')
})

app.get("/cadastrar", function(req, res) {
    res.send('Sucesso')

    Agendamentos.create({
        nome: "Exemplo2",
        endereco: "exemplo2",
        bairro: "exemplo2",
        cep: "exemplo2",
        cidade: "exemplo2",
        estado: "exemplo2",
    }
    
    )
})
