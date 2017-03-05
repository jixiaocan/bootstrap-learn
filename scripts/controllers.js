// 为啥删除了方括号？？？
angular.module('myApp')
.controller('MovieController', ['$scope','movieService', function($scope, movieService) {
    $scope.tab = 1;
    $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2)
            $scope.filtText = {label:"Hot"};
        else if (setTab === 3)
            $scope.filtText = {label:"New"};
        else if (setTab === 4)
            $scope.filtText = {watch: true};
        else
            $scope.filtText = {};
    };
    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };
    $scope.filtText = {};
    
    $scope.movies = movieService.getMovies();

    $scope.showDetails = true;
    
    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
}])

.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = { mychannel: "", firstname: "", lastname: "", agree: false, email: "" };
    var channels = [{ value: "tel", label: "Tel." }, { value: "Email", label: "Email" }];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;
}])

.controller('FeedbackController', ['$scope', function($scope) {
    $scope.sendFeedback = function() {
        console.log($scope.feedback);
        if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        } else {
            $scope.invalidChannelSelection = false;
            $scope.feedback = { mychannel: "", firstname: "", lastname: "", agree: false, email: "" };
            $scope.feedback.mychannel = "";
            // 为什么右侧的显示栏并没有清空？
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };
}])

.controller('MovieDetailController', ['$scope','$stateParams','movieService', function($scope,$stateParams,movieService) {

    // ngRoute use $routeParams instead of $stateParams
    // $scope.movie = movieService.getMovie(3);
    var movie = movieService.getMovie(parseInt($stateParams.id,10));
    $scope.movie = movie;
}])

.controller('MovieCommentController', ['$scope', function($scope) {
    //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.mycomment = { author: "", rating: "5", comment: "", date: "" };

    $scope.submitComment = function() {
        console.log($scope.mycomment);

        //Step 2: This is how you record the date
        $scope.mycomment.date = new Date().toISOString();
        // "The date property of your JavaScript object holding the comment" = new Date().toISOString();

        // Step 3: Push your comment into the dish's comment array
        $scope.movie.comments.push($scope.mycomment);

        //Step 4: reset your form to pristine

        $scope.commentForm.$setPristine();

        //Step 5: reset your JavaScript object that holds your comment
        $scope.mycomment = { author: "", rating: 5, comment: "", date: "" };
    };
}])

.controller('IndexController',['$scope','$filter','movieService','actorService',function($scope,$filter,movieService,actorService){
    var movies = movieService.getMovies();
    $scope.movies = movies;

    $scope.wachedmovie = $filter('orderBy')(movies,['date'],true)[0];

    $scope.releasedmovie = $filter('filter')(movies,{date:"",label:"New"})[0];

    $scope.actor = actorService.getActor(1);
}])

.controller('ActorController',['$scope','actorService',function($scope, actorService){
    $scope.actors = actorService.getActors();
}])

.controller("HeadController",["$scope",function($scope){
    $scope.tab = 1;
    $scope.select = function(setTab) {
        $scope.tab = setTab;
    };
    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };
}])
;
