//Criaremos um servidor que irá subir
const express = require('express'); //Recuperando na biblioteca
const userController = require('./controllers/userController');

const app = express(); //Criando uma instância 
app.use(express.json()); //Definindo que vamos trabalhar com o json
// Nova config
app.use('/api/user', userController); // Configuramos o path para ir para a raiz do usuário. Vamos criar esse arquivo na sequencia

// TO DO - Configurar Swagger
// CTRL C CTRL V

app.listen(300, () => { //listen faz com que suba
    console.log('Servidor rodando na porta 3000') //
})
