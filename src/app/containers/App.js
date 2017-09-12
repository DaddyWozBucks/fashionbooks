class AppController {
  constructor() {
    this.title = 'NYT Books List';
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
