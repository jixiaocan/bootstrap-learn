// 为啥删除了方括号？？？
angular.module('myApp')
    .controller('MovieController', ['$scope', 'movieService', function($scope, movieService) {
        $scope.tab = 1;
        $scope.select = function(setTab) {
            $scope.tab = setTab;

            if (setTab === 2)
                $scope.filtText = { label: "Hot" };
            else if (setTab === 3)
                $scope.filtText = { label: "New" };
            else if (setTab === 4)
                $scope.filtText = { watch: true };
            else
                $scope.filtText = {};
        };
        $scope.isSelected = function(checkTab) {
            return ($scope.tab === checkTab);
        };
        $scope.filtText = {};

        $scope.showMovies = false;
        $scope.message = "Loading...";
        movieService.getMovies().query(function(response){
            $scope.movies = response;
            $scope.showMovies = true;
        },function(response){
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });

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

.controller('MovieDetailController', ['$scope', '$stateParams', 'movieService', function($scope, $stateParams, movieService) {

    // ngRoute use $routeParams instead of $stateParams
    // $scope.movie = movieService.getMovie(3);
    
    $scope.showMovie = false;
    $scope.message = "Loading...";

    $scope.movie = movieService.getMovies().get({id:parseInt($stateParams.id, 10)})
        .$promise.then(function(response){
            $scope.movie = response;
            $scope.showMovie = true;
        },function(response){
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
}])

.controller('MovieCommentController', ['$scope','movieService', function($scope,movieService) {
    $scope.mycomment = { author: "", rating: "5", comment: "", date: "" };

    $scope.submitComment = function() {
        $scope.mycomment.date = new Date().toISOString();
        $scope.movie.comments.push($scope.mycomment);
        movieService.getMovies().update({id:$scope.movie.id},$scope.movie);

        $scope.commentForm.$setPristine();
        $scope.mycomment = { author: "", rating: 5, comment: "", date: "" };
    };
}])

.controller('IndexController', ['$scope', '$filter', 'movieService', 'actorService', function($scope, $filter, movieService, actorService) {
    $scope.showMovie = false;
    $scope.message = "Loading...";

    movieService.getMovies().query(function(response){
            $scope.movies = response;
            $scope.showMovie = true;
            $scope.wachedmovie = $filter('orderBy')($scope.movies, ['date'], true)[0];
            $scope.releasedmovie = $filter('filter')($scope.movies, { date: "", label: "New" })[0];
        },function(response){
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
    
    
    $scope.actor = {};
    $scope.showActor = false;
    $scope.messageActor = "Loading...";
    actorService.getActor(1).then(function(response){
        $scope.actor = response.data;
        $scope.showActor = true;
    },function(response){
        $scope.messageActor = "Error: " + response.status + " " + response.statusText;
    });
}])

.controller('ActorController', ['$scope', 'actorService', function($scope, actorService) {
    $scope.actors = [];
    $scope.showActors = false;
    $scope.message = "Loading...";
    actorService.getActors().then(function(response){
        $scope.actors = response.data;
        $scope.showActors = true;
    },function(response){
        $scope.message = "Error: " + response.status + " " + response.statusText;
    });

    $scope.bigPic = function($event){
        console.log("clicked!");
        var span = document.createElement("span");
        span.className = "close-x";
        span.appendChild(document.createTextNode("X"));

        var img = document.createElement("img");
        img.className = "img-thumbnail";
        img.src = $($event.target)[0].src;

        var div = document.createElement("div");
        div.className = "full-image";

        div.appendChild(img);
        div.appendChild(span);

        $($event.target).parent().append(div);

        $(".close-x").click(function() {
            $(".full-image").remove();
        });
    };
}])

.controller("HeadController", ["$scope", function($scope) {
    $scope.tab = 1;
    $scope.select = function(setTab) {
        $scope.tab = setTab;
    };
    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };
}]);
