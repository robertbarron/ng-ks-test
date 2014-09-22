angular.module( 'yb-app.welcome', [
  'ui.router'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'welcome', {
    url: '/welcome',
    views: {
      "main": {
        controller: 'WelcomeCtrl',
        templateUrl: 'templates/welcome/welcome.tpl.html'
      }
    },
    data:{ pageTitle: 'Welcome' }
  });
})
.controller( 'WelcomeCtrl', function WelcomeCtrl ( $scope ) {
});