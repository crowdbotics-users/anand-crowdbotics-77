import {COLORS} from '../../constants/StylesConstants';
import _ from 'underscore';

class GeneController {
  constructor() {
    this.buttonRipple = COLORS.buttonRipple;
  }
}

class DirectGeneController {
  constructor() {
    this.buttonRipple = COLORS.buttonRipple;
    this.genes = [{name: 'AADACL3'}, {name: 'AADACL4'}, {name: 'ACADM'}, {name: 'ACTL8'}, {name: 'ADGRL2'}, {name: 'ADPRHL2'}, {name: 'AMPD2'}, {name: 'ARID1A'}, {name: 'ATXN7L2'}, {name: 'AZIN2'}, {name: 'BCAS2'}, {name: 'BCL10'}];
    this.mechanisms = [{name: 'AADACL3'}, {name: 'AADACL4'}, {name: 'ACADM'}, {name: 'ACTL8'}, {name: 'ADGRL2'}, {name: 'ADPRHL2'}, {name: 'AMPD2'}, {name: 'ARID1A'}, {name: 'ATXN7L2'}, {name: 'AZIN2'}, {name: 'BCAS2'}, {name: 'BCL10'}];
    this.models = [{name: 'AADACL3'}, {name: 'AADACL4'}, {name: 'ACADM'}, {name: 'ACTL8'}, {name: 'ADGRL2'}, {name: 'ADPRHL2'}, {name: 'AMPD2'}, {name: 'ARID1A'}, {name: 'ATXN7L2'}, {name: 'AZIN2'}, {name: 'BCAS2'}, {name: 'BCL10'}];
  }
}

class IndirectGeneController {
  constructor($log, $timeout) {
    this.console = $log;
    this.timeout = $timeout;
    this.buttonRipple = COLORS.buttonRipple;
    this.target = [{name: 'Sox 17'}];
    this.bridge = [{name: 'Biological Processes'}, {name: 'Cellular Components'}, {name: 'Molecular Functions'}];
    this.indication = [{name: 'Macur Degeneration'}, {name: 'Dibetic Ratinopathy'}];
    this.bridgeFilters = [{}];
    this.selectedBridge = [];
    this.result = 0;
    this.total = 2987453;
    this.stopAddMore = false;
  }

  addFilter() {
    this.bridgeFilters.push({});
    this.stopAddMore = this.bridgeFilters.length === this.bridge.length;
  }

  onSelect(filter, list) {
    this.result = Math.round(Math.random() * 2987453);
    this.progress = Math.round((this.result / this.total) * 100);
    this.timeout(() => {
      this[filter] = _.map(this[filter], elem => {
        elem.disabled = this[list].includes(elem.name);
        return elem;
      });
    });
  }

  submit() {
    return null;
  }
}

export const Gene = {
  template: require('./Gene.html'),
  controller: GeneController
};

export const DirectGene = {
  template: require('./DirectGene.html'),
  controller: DirectGeneController
};

export const IndirectGene = {
  template: require('./IndirectGene.html'),
  controller: IndirectGeneController
};
