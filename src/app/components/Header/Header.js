
class HeaderController {
  /** @ngInject */
  constructor(authService, $state) {
    this.authService = authService;
    this.$state = $state;
  }

  goBack() {
    const states = ['direct', 'indirect'];
    if (states.includes(this.$state.current.name)) {
      this.$state.go('gene');
    }
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController
};
