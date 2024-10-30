const User = require('../models/User');

class UserRepository {
    async createUser(model) {
        return await User.create(model);
    }

    async findByUserName(username) {
        return await User.findOne({where: {username}})
    }

    async findAll() {
        return await User.findAll()
    }
}

module.exports = new UserRepository;