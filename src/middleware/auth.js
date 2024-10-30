const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'anchieta', (err, user) => {
        if(err) {
            return res.sendStatus(403);
        }

        req.user = user;

        next()
    })
}

module.exports = authenticateToken;