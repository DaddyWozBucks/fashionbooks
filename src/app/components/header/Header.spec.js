import angular from 'angular';
import 'angular-mocks';
import {Header} from './Header';

describe('Header component', () => {
  

  

  beforeEach(() => {
    angular
      .module('headerComponent', ['app/components/Header.html'])
      .component('headerComponent', Header);
    angular.mock.module('headerComponent');
  });

//  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
//    const element = $compile('<header-component></header-component>')($rootScope);
//    $rootScope.$digest();
//    const header = element.find('h1');
//    expect(header.html().trim()).toEqual('todos');
//  }));
//
//  it('should get the todos binded to the component', angular.mock.inject(($rootScope, $compile, $componentController) => {
//    const component = $componentController('headerComponent', {}, {todos});
//    spyOn(component, 'handleSave').and.callThrough();
//    expect(component.todos.length).toEqual(1);
//    component.handleSave('New Task');
//    expect(component.handleSave).toHaveBeenCalledWith('New Task');
//    expect(component.todos.length).toEqual(2);
//  }));
});
