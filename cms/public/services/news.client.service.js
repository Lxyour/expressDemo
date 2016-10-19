angular.module('webapp')
    .service('NewsService', ['$http', '$q', NewsData]);

//前端请求接口
function NewsData($http, $q) {
    function handleRequest(method, url, data) {
        var defered = $q.defer();
        var option = {
            method: method,
            url: url
        }

        if(method === 'POST'){
            option.data = data;
        }else if (method === 'GET') {
            option.params = data;
        }

        $http(option).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err)
        });

        return defered.promise;
    }
    return {
        list: function (params) {
            return handleRequest('GET', '/news', params)
        },
        save: function (data) {
            return handleRequest('POST', '/news', data)
        },
        detail: function (id) {
            return handleRequest('GET', '/news/' + id)
        }
    }
}
