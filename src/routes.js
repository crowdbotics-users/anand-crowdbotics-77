export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'login'
    })
    .state('register', {
      url: '/register',
      component: 'register'
    })
    .state('gene', {
      url: '/gene',
      component: 'gene'
    })
    .state('direct', {
      url: '/gene/direct',
      component: 'directGene'
    })
    .state('indirect', {
      url: '/gene/indirect',
      component: 'indirectGene'
    })
    .state('search', {
      url: '/search/{from}',
      component: 'search'
    });
}
