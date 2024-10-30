//Importar o SEQUELIZE
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexao Efetuada no DATABASE com Sucesso!');
        return sequelize.sync();
    })

module.exports = sequelize;