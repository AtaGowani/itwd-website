var app = angular.module('itwd', ['ui.router', 'ngAnimate'])

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){

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
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}])