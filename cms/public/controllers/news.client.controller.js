angular.module('webapp')
    .controller('NewsController', ['$scope', 'NewsService', NewsController]);

function NewsController($scope, NewsService) {
    $scope.list = [];

    $scope.formatTime = function (time) {
        return moment(time).format('YYYY-MM-DD hh:mm:ss')
    }

    $scope.loadNews = function () {
        NewsService.list().then(
            function (data) {
                $scope.list = data;
            },
            function (err) {

            }
        );
    };

    $scope.loadNews();
}
