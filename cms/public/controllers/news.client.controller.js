angular.module('webapp')
    .controller('NewsController', ['$scope', 'NewsService', NewsController]);

function NewsController($scope, NewsService) {
    $scope.list = [];
    $scope.current = {};
    $scope.new = {};

    //保存事件
    $scope.save = function () {

        if(!$scope.new.content) {
            $scope.editorMessage = 'Content is required';
            return;
        }
        if(!$scope.new.title) {
            $scope.editorMessage = 'Title is required';
            return;
        }
        $scope.editorMessage = '';

        //保存到数据库
        NewsService.save($scope.new).then(
            function(data){
                $("#modal-editor").modal('hide')
                $scope.loadNews();
            },
            function(err){
                $scope.editorMessage = err;
            }
        );

    }

    $scope.createNews = function(){
        $("#modal-editor").modal('show');
    };

    //显示新闻详情
    $scope.showNewsDetail = function (id) {
        $scope.loadDetail(id);
        $('#modal-detail').modal('show');
    }

    //根据id从后台查询新闻
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

    //获取新闻列表
    $scope.loadNews = function () {
        NewsService.list().then(
            function (data) {
                $scope.list = data;
            },
            function (err) {
                console.log(err)
            }
        );
    };

    $scope.loadNews();
}
