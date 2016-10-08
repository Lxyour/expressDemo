var NewsController = require('../controllers/news.server.controller')

module.exports = function (app) {
    app.get('/news', NewsController.list)
    app.post(NewsController.create)
    app.get('/news/:id', NewsController.get)

    app.param('id', NewsController.getById)
}
