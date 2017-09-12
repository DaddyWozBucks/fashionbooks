
class LandingController {
  /** @ngInject */
  constructor($state, $interval, nytService, $log) {
    this.log = $log;
    this.bgs = [];
    this.state = $state;
    this.nytService = nytService;
    this.handleResponse = function (resp) {
      this.listOpts = angular.fromJson(resp.data);
      this.log.log(this.listOpts);
    };
    this.nytService.getLists().then(data => this.handleResponse(data));
  }
}

export const Landing = {
  template: require('./Landing.html'),
  controller: LandingController,
  bindings: {
  }
};
