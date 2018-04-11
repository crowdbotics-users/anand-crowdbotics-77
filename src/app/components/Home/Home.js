import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../../constants/TodoFilters';

class HomeController {
  constructor() {
    this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
  }

}

export const Home = {
  template: require('./Home.html'),
  controller: HomeController
};
