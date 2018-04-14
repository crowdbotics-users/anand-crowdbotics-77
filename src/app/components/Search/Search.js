import {COLORS} from '../../constants/StylesConstants';

class SearchController {
  constructor() {
    this.buttonRipple = COLORS.buttonRipple;
    this.showDescription = false;
  }

  show(index) {
    this.showDescription = index;
  }
}

export const Search = {
  template: require('./Search.html'),
  controller: SearchController
};
