'use strict';

angular.module('myApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('movieService', ['$http', 'baseURL', function($http, baseURL) {

        this.getMovies = function() {
            return $http.get(baseURL + "movies");
        };
        this.getMovie = function(index) {
            return $http.get(baseURL + "movies/" + index);
        };
    }])

.service('actorService', ['$http', 'baseURL', function($http, baseURL) {

    this.getActors = function() {
        return $http.get(baseURL + "actors");
    };
    this.getActor = function(index) {
        return $http.get(baseURL + "actors/" + index);
    };
}]);
