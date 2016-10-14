angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('risc1', {
    url: '/risc1',
    templateUrl: 'templates/risc1.html',
    controller: 'risc1Ctrl'
  })

  .state('risc1Results', {
    url: '/risc1results',
    templateUrl: 'templates/risc1Results.html',
    controller: 'risc1ResultsCtrl'
  })

  .state('risc2Results', {
    url: '/risc2results',
    templateUrl: 'templates/risc2Results.html',
    controller: 'risc2ResultsCtrl'
  })

  .state('riscCalculator', {
    url: '/index',
    templateUrl: 'templates/riscCalculator.html',
    controller: 'riscCalculatorCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/index')

  

});