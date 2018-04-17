import angular from 'angular';
import 'todomvc-app-css/index.css';

import {AuthService} from './app/services/AuthService';
import {BucketService} from './app/services/BucketService';
import {App} from './app/containers/App';
import {Header} from './app/components/Header/Header';
import {MainSection} from './app/components/MainSection/MainSection';
import {Register} from './app/components/Register/Register';
import {Login} from './app/components/Login/Login';
import {Gene, DirectGene, IndirectGene} from './app/components/Gene/Gene';
import {Search} from './app/components/Search/Search';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

angular
  .module('app', ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .service('authService', AuthService)
  .service('bucketService', BucketService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('mainSection', MainSection)
  .component('login', Login)
  .component('register', Register)
  .component('gene', Gene)
  .component('directGene', DirectGene)
  .component('indirectGene', IndirectGene)
  .component('search', Search);
