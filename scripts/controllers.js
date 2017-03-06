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
        $scope.movies = [];
        movieService.getMovies().then(function(response) {
            $scope.movies = response.data;
            $scope.showMovies = true;
        }, function(response) {
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
    $scope.movie = {};
    $scope.showMovie = false;
    $scope.message = "Loading...";

    movieService.getMovie(parseInt($stateParams.id, 10)).then(function(response){
        $scope.movie = response.data;
        $scope.showMovie = true;
    },function(response){
        $scope.message = "Error: " + response.status + " " + response.statusText;
    });
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

.controller('IndexController', ['$scope', '$filter', 'movieService', 'actorService', function($scope, $filter, movieService, actorService) {
    $scope.showMovie = false;
    $scope.message = "Loading...";
    $scope.movies = [];
    movieService.getMovies().then(function(response) {
        $scope.movies = response.data;
        $scope.showMovie = true;

        $scope.wachedmovie = $filter('orderBy')($scope.movies, ['date'], true)[0];
        $scope.releasedmovie = $filter('filter')($scope.movies, { date: "", label: "New" })[0];
    }, function(response) {
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
