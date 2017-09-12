import angular from 'angular';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NytService} from './app/nyt/nyt';
import {App} from './app/containers/App';
import {Header} from './app/components/header/Header';
import {Landing} from './app/components/landing/Landing';
import {List} from './app/components/list/List';
import 'angular-ui-router';

import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('nytService', NytService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('landing', Landing)
  .component('list', List);

