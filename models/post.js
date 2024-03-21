const db = require("./banco")

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    },
    origem:{
        type: Sequelize.STRING
    },
    data_contato:{
        type: Sequelize.DATE
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

module.exports = Agendamentos