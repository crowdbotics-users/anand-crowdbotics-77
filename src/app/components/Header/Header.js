
class HeaderController {
  /** @ngInject */
  constructor() {
    this.user = null;
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController
};
