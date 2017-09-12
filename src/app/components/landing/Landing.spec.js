import angular from 'angular';
import 'angular-mocks';
import {Landing} from './Landing';

describe('Landing component', () => {
 

  let component;

  beforeEach(() => {
    angular
      .module('Landing', ['app/components/Landing.html'])
      .component('Landing', Landing);
    angular.mock.module('Landing');
  });

  beforeEach(angular.mock.inject($componentController => {
    component = $componentController('Landing', {}, {});
  }));

  
});
