const User = require('../models/user');

class UserRepository {
    async createUser(model) {
        return await User.create(model);
    }

    async findByUserName(username) {
        return await User.find({where: username})
    }

    async findAll() {
        return await User.findAll()
    }
}