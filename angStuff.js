angular.module('App', ['ui.router','ngAnimate'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'homeCtrl'
            })
            .state('poster', {
                url: '/poster0',
                templateUrl: '/posters0.html',
                controller: 'posterCtrl'
            })
            .state('poster1', {
                url: '/poster1',
                templateUrl: '/posters1.html',
                controller: 'posterCtrl'
            })
            .state('poster2', {
                url: '/poster2',
                templateUrl: '/posters2.html',
                controller: 'posterCtrl'
            })
        $urlRouterProvider.otherwise('home')    
    }])

.controller('homeCtrl', [
    '$http',
    '$scope',
    function($scope, $http){
        $scope.stuff=""

        $scope.Search = function() {
            console.log("about to get")
            var myUrl = "https://api.themoviedb.org/3/search/movie?api_key=ea290f9dcf18ae999a92fd2d09bc9fda&query=" + $scope.mySearch
            console.log(myUrl)
            $http.get(myUrl)
            console.log("got it!")
            .then(function(response){
                console.log("got response")
                $scope.stuff = response.data;
            console.log("stuff: ")
            console.log($scope.stuff)        
        })
    }
}])

.controller('posterCtrl', [
    '$scope',
    function($scope){
        $scope.displayVote = ''
        
        $scope.hotFn = function() {
            $scope.displayVote = "Hot!"
        }
        
        $scope.aweFn = function() {
            $scope.displayVote = "Awesome!"
        }

        $scope.insFn = function() {
            $scope.displayVote = "Inspiring!"
        }

        $scope.chillFn = function() {
            $scope.displayVote = "Chill!"
        }

        $scope.likeFn = function() {
            $scope.displayVote = "Like!"
        }
}])