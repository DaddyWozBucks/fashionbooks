
class LandingController {
  /** @ngInject */
  constructor($state, $interval) {
    const self = this;
    this.bgs = [];
    this.state = $state;
    this.startView = true;
    this.titleBg = 'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/blood_1.gif';
    this.gifs = {
      title: [
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/blood_1.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/blood_3.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/blood_4.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_1.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_2.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/tears_1.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/tears_2.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/tears_3.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/blood_5.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/blood_6_xs.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_3.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_4.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_5.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/sweat_6.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/tears_4.gif',
        'https://s3-eu-west-1.amazonaws.com/bloodsweatandtears.eu/assets/images/tears_5.gif'
      ]
    };
    this.shuffle = $interval(() => {
      const rIndex = Math.floor(Math.random() * (self.gifs.title.length - 1));
      self.titleBg = self.gifs.title[rIndex];
    }, 3000);
    this.start = () => $state.go('app.welcome');
  }

//  handleClearCompleted() {
//    this.todos = this.todoService.clearCompleted(this.todos);
//  }
//
//  handleCompleteAll() {
//    this.todos = this.todoService.completeAll(this.todos);
//  }
//
//  handleShow(filter) {
//    this.filter = filter;
//    this.selectedFilter = visibilityFilters[filter];
//  }
//
//  handleChange(id) {
//    this.todos = this.todoService.completeTodo(id, this.todos);
//  }
//
//  handleSave(e) {
//    if (e.text.length === 0) {
//      this.todos = this.todoService.deleteTodo(e.id, this.todos);
//    } else {
//      this.todos = this.todoService.editTodo(e.id, e.text, this.todos);
//    }
//  }
//
//  handleDestroy(e) {
//    this.todos = this.todoService.deleteTodo(e, this.todos);
//  }
}

export const Landing = {
  template: require('./Landing.html'),
//  templateUrl: './Landing.html',
  controller: LandingController,
  bindings: {
//    todos: '=',
//    filter: '<'
  }
};
