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
       const user = await userRepository.findByUserName(username);
       
       if (!user) {
        throw new Error('Usuario não encontrado');

       }
       
       const isValid = await bcrypt.compare(password, user.password)

       if(!isValid) {
        throw new Error('Senha Inválida');
       }

       const token = jwt.sign({id: user.id, name: user.name}, 'anchieta', {expiresIn: '24h'});
       return token;

    }

    async getUsers() {
        return userRepository.findAll();
    }
}

module.exports = new UserService;