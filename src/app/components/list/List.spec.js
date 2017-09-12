import angular from 'angular';
import 'angular-mocks';
import {List} from './List';

describe('List component', () => {
  class MockNytService {
    getBooks(list) {}
    getLists() {}
   
  }

  let component;

  beforeEach(() => {
    angular
      .module('List', ['app/components/List.html'])
      .service('nytService', MockNytService)
      .component('List', List);
    angular.mock.module('List');
  });

  beforeEach(angular.mock.inject($componentController => {
    component = $componentController('List', {}, {});
    list = 'e-book-fiction';
  }));

  it('shoud call getBooks', () => {
    spyOn(component.nytService, 'getBooks').and.callThrough();
    component.getBooks(list);
    expect(component.nytService.getBooks).toHaveBeenCalled();
  });

 
});
