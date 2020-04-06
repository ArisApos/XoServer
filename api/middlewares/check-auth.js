const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.body.token, process.env.JWT_KEY);
        const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.playerData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Auth Fail'});
    }
}