import {COLORS} from '../../constants/StylesConstants';

class SearchController {
  constructor($mdPanel, $document, $log) {
    this.buttonRipple = COLORS.buttonRipple;
    this.showDescription = [];
    this._mdPanel = $mdPanel;
    this.document = $document;
    this.$log = $log;
  }

  show(index) {
    if (!this.showDescription.includes(index)) {
      this.showDescription.push(index);
    }
  }

  hide(index) {
    this.showDescription = this.showDescription.filter(indexNo => {
      return indexNo !== index;
    });
  }

  closeMenu() {
    const myEl = angular.element(this.document[0].querySelector('.md-panel'));
    myEl.remove();
  }
}

SearchController.prototype.showMenu = function (ev, indexNo, from) {
  const position = this._mdPanel.newPanelPosition()
    .relativeTo('.demo-menu-open-button-' + indexNo)
    .addPanelPosition(this._mdPanel.xPosition.ALIGN_START, this._mdPanel.yPosition.BELOW);
  const description = this.document[0].getElementById('desc-' + indexNo);

  this.style = {width: (description.offsetWidth - 62) + 'px'};
  this.text = '';
  this.images = [];
  switch (from) {
    case 'abstract': {
      this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur impedit ratione sint? Ab consequuntur, delectus, dolorem eligendi enim ex, molestiae optio porro possimus reiciendis repellendus ut vel. Beatae, dolorum!';
      break;
    }
    case 'images': {
      this.images = [
        'https://www.google.com.pk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg',
        'https://as1.ftcdn.net/jpg/01/11/44/44/500_F_111444442_lZtCowC6zD8C9jrGGeQb5K6kwqe5Y6q9.jpg'
      ];
      break;
    }
    default: {
      return;
    }
  }

  const config = {
    attachTo: angular.element(this.document[0].body),
    controller: SearchController,
    controllerAs: 'ctrl',
    disableParentScroll: false,
    templateUrl: 'app/components/Search/Abstract.html',
    panelClass: 'demo-menu-example',
    position,
    locals: {
      style: this.style,
      text: this.text,
      images: this.images,
      close: this.closeMenu
    },
    openFrom: ev,
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: false,
    zIndex: 2
  };

  this._mdPanel.open(config);
};

export const Search = {
  template: require('./Search.html'),
  controller: SearchController
};
