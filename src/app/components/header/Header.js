class HeaderController {
  /** @ngInject */
  constructor($state) {
    this.currentState = $state.current.name;
  }

}
export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
  }
};
