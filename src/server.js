//Criaremos um servidor que irá subir
const express = require('express'); //Recuperando na biblioteca
//Importamos o Swagger
const swaggerUI = require('swagger-ui-express');
const userController = require('./controllers/userController');

const app = express(); //Criando uma instância 
app.use(express.json()); //Definindo que vamos trabalhar com o json
// Nova config
app.use('/api/user', userController); // Configuramos o path para ir para a raiz do usuário. Vamos criar esse arquivo na sequencia

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))
// CTRL C CTRL V

app.listen(3000, () => { //listen faz com que suba
    console.log('Servidor rodando na porta 3000') //
})
