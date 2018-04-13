var app = angular.module('itwd', ['ui.router', 'ngAnimate'])

app.controller("mainSplashController",["$scope", "$location", function($scope, $location){
  var url = $location.url();
  console.log(url);
  $scope.title = "Intro to Web Development"
  $scope.subTitle = "It's not just a course"
}])

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state({
      name: 'index',
      url: '/',
      views: {
        'content': {
          templateUrl: './src/views/main.html'
        },
        'splashText': {
          templateUrl: './src/views/mainSplash.html'
        },
        'splashButton': {
          templateUrl: './src/views/mainSplashButton.html'
        }
      }
    })

    .state({
      name: 'non-profits',
      url: '/non-profits',
      views: {
        'content': {
          templateUrl: './src/views/non-profits.html'
        },
        'splashText': {
          templateUrl: './src/views/non-profitsSplash.html'
        },
        'splashButton': {
          templateUrl: './src/views/non-profitsSplashButton.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/');
}])