
class MainSectionController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
  }

}

export const MainSection = {
  template: require('./MainSection.html'),
  controller: MainSectionController,
  bindings: {
    todos: '=',
    filter: '<'
  }
};
