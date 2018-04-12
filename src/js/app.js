var app = angular.module('itwd', ['ui.router', 'ngAnimate'])

app.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that AngularJS
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
}]);

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