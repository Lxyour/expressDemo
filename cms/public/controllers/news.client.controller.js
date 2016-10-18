angular.module('webapp')
    .controller('NewsController', ['$scope', 'NewsService', NewsController]);

function NewsController($scope, NewsService) {
    $scope.list = [];
    $scope.current = {};

    $scope.showNewsDetail = function (id) {
        $scope.loadDetail(id);
        $('#modal-detail').modal('show');
    }


    $scope.loadDetail = function (id) {
        NewsService.detail(id)
            .then(function (res) {
                $scope.current = res;
            })
            .catch(function (err) {
                console.log(err)
            })
    }

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
