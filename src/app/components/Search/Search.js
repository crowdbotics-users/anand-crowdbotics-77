import {COLORS} from '../../constants/StylesConstants';

class SearchController {
  constructor($log, $state) {
    this.buttonRipple = COLORS.buttonRipple;
    $log.log('$state.params');
    $log.log($state.params);
  }
}

export const Search = {
  template: require('./Search.html'),
  controller: SearchController
};
