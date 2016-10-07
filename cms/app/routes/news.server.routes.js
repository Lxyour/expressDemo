var NewsController = require('../controllers/news.server.controller')

module.exports = function (app) {
    app.router('/news')
        .get(NewsController.list)
        .post(NewsController.create)

    app.router('/news/:id')
        .get(NewsController.get)

    app.param('id', NewsController.getById)
}
