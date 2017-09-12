
class WelcomeController {
  /** @ngInject */
  constructor($state) {
    this.bgs = [];
    const self = this;
    this.state = $state;
    this.navOpts = [
      {
        text: 'Projects',
        link: () => self.state.go('app.projects')
      },
      {
        text: 'Tech Stack',
        link: () => self.state.go('app.stack')
      },
      {
        text: 'Blog',
        link: () => self.state.go('app.blog')
      },
      {
        text: 'Resume',
        link: () => self.state.go('app.resume')
      }
    ];
//    this.todoService = todoService;
//    this.selectedFilter = visibilityFilters[this.filter];
//    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
  }
}

export const Welcome = {
  template: require('./Welcome.html'),

  controller: WelcomeController,
  bindings: {

  }
};
