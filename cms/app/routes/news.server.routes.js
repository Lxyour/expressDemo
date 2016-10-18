var NewsController = require('../controllers/news.server.controller')

module.exports = function (app) {
    app.route('/news')
        .get(NewsController.list)
        .post(NewsController.create)
    /*app.get('/news', NewsController.list)
    app.post(NewsController.create)*/
    app.route('/news/:nid')
        .get(NewsController.get)
    //app.get('/news/:id', NewsController.get)
    app.param('nid', NewsController.getById)
}
