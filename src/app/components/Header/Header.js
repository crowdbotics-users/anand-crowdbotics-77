
class HeaderController {
  /** @ngInject */
  constructor(authService, $state) {
    this.authService = authService;
    this.$state = $state;
  }

  goBack() {
    switch (this.$state.current.name) {
      case 'direct':
      case 'indirect': {
        this.$state.go('gene');
        break;
      }
      case 'search': {
        const route = this.$state.params.from === 'direct' ? 'direct' : 'indirect';
        this.$state.go(route);
        break;
      }
      default: {
        return 0;
      }
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController
};
