import angular from 'angular';
import 'todomvc-app-css/index.css';

import {AppService} from './app/services/AppService';
import {App} from './app/containers/App';
import {Header} from './app/components/Header/Header';
import {MainSection} from './app/components/MainSection/MainSection';
import {Auth} from './app/components/Auth/Auth';
import {Home} from './app/components/Home/Home';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

angular
  .module('app', ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .service('appService', AppService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('mainSection', MainSection)
  .component('auth', Auth)
  .component('home', Home);
