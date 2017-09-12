import angular from 'angular';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/header/Header';
import {MainSection} from './app/components/main/MainSection';
import {Landing} from './app/components/landing/Landing';
import {Welcome} from './app/components/welcome/Welcome';

import {Footer} from './app/components/footer/Footer';
import 'angular-ui-router';

import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('landing', Landing)
  .component('welcome', Welcome);

