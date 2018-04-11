import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../../constants/TodoFilters';

class AuthController {
  constructor() {
    this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
  }

}

export const Auth = {
  template: require('./Auth.html'),
  controller: AuthController
};
