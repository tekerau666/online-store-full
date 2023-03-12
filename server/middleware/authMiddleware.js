const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Если метод запроса на сервер OPTIONS, то вызвывается функция next(), которая
    // пропускает данный middleware. Данный middleware используется только для GET, POST запросов
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        // Берёт headers из jwt
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        // Проверяет хэш через фунцию verify которая принимает в себя headers токена и SECRET_KEY
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }
    catch (e) {
        res.status(401).json({message: 'Пользователь не авторизован'});
    }
}