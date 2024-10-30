// É uma extensão do express . Vamos criar todas as rotas estarão neste arquvio
// Se é uma extensão, precisamos colocar o express aqui tb

const express = require('express');

//No servidor criamos uma instancia, aqui nao será assim

const router = express.Router();

//No projeto anterior, todas as rotas estavam no index.js

//Vamos criar o nosso service

const userService = require('../services/userService'); // Irá direcionar para o service

const authenticateToken = require('../middleware/auth');

//Rota de POST
router.post('/register', async  (req, res) =>{
    try {
        const {username, password} = req.body;
        const user = await userService.register(username, password);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}); //Nao entendi

router.post('/login', async  (req, res) =>{
    try {
        const {username, password} = req.body;
        const token = await userService.login(username, password);
        res.json(token);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}); 

router.get('/users', authenticateToken, async  (req, res) =>{
    try {
        const user = await userService.getUsers();
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}); 

module.exports = router;