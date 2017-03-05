'use strict';
angular.module('myApp', ['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            // route for the home page
            .state('app',{
                url:'/',
                views: {
                    'header':{templateUrl: 'views/header.html'},
                    'content':{templateUrl:'views/home.html', controller:'IndexController'},
                    'footer': {templateUrl:'views/footer.html'}
                }
            })
            // route for the actor page
            .state('app.actor',{
                url:'actor',
                views:{
                    'content@':{
                        templateUrl:'views/actor.html',
                    }
                }
            })
            // route for the contactus page
            .state('app.contact',{
                url:'contact',
                views:{
                    'content@':{
                        templateUrl:'views/contact.html',
                        controller:'ContactController'
                    }
                }
            })
            // route for the movie page
            .state('app.movie',{
                url:'movie',
                views:{
                    'content@':{
                        templateUrl:'views/movie.html',
                        controller:'MovieController'
                    }
                }
            })
            // route for the dishdetail page
            .state('app.moviedetails',{
                url:'movie/:id',
                views:{
                    'content@':{
                        templateUrl:'views/moviedetail.html',
                        controller:'MovieDetailController'
                    }
                }
            });

            $urlRouterProvider.otherwise('/');
    });


