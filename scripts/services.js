'use strict';

angular.module('myApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('movieService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getMovies = function() {
            // return $http.get(baseURL + "movies");
            return $resource(baseURL+"movies/:id",null,{'update':{method:'PUT'}});
        };
        // this.getMovie = function(index) {
        //     return $http.get(baseURL + "movies/" + index);
        // };
    }])

.service('actorService', ['$http', 'baseURL', function($http, baseURL) {

    this.getActors = function() {
        return $http.get(baseURL + "actors");
    };
    this.getActor = function(index) {
        return $http.get(baseURL + "actors/" + index);
    };
}]);
