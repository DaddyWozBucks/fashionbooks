class HeaderController {
  /** @ngInject */
  constructor($state, nytService, $log) {
    this.logger = $log;
    this.currentState = $state.current.name;
    this.nytService = nytService;
    this.handleResponse = function (resp) {
      this.listOne = angular.fromJson(resp.data);
    };
    this.nytService.getLists().then(data => this.handleResponse(data));
    this.logger.log(this.listOne);
  }

}
export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
  }
};
