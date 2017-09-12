export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/app/landing');

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      component: 'app'

    })
    .state('app.landing', {
      url: '/landing',
      views: {
        'main@app': {
          component: 'landing'
        }
      }
    });
}
