const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class UserService {
    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepository.createUser({username, password: hashedPassword});
        return user;
    }

    async login(username, password) {
        //TO DO - Arquivo de banco de dados
    }

    async getUsers() {
        return userRepository.findAll();
    }
}