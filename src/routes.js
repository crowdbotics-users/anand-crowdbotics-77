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
    .state('home', {
      url: '/home',
      component: 'home'
    });
}
