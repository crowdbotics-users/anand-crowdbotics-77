import {COLORS} from '../../constants/StylesConstants';

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
  constructor() {
    this.buttonRipple = COLORS.buttonRipple;
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
