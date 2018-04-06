var app = angular.module('itwd', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state({
      name: 'index',
      url: '/',
      views: {
        'content': {
          templateUrl: './src/views/main.html'
        },
        'splash': {
          templateUrl: './src/views/mainSplash.html'
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
        'splash': {
          templateUrl: './src/views/non-profitsSplash.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
})