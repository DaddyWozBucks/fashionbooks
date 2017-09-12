import angular from 'angular';
import 'angular-mocks';
import {List} from './List';

describe('List component', () => {
  class MockNytService {
    getBooks() {}
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
  }));

  it('should call getBooks', () => {
    let list = 'e-book-fiction';
    spyOn(component.nytService, 'getBooks').and.callThrough();
    component.nytService.getBooks(list).then(function(data) {
      expect(data.results[0].list_name_enconded).toEqual(list);
    });
    expect(component.nytService.getBooks).toHaveBeenCalled();
  });

 
});
