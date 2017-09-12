const moment = require('moment');
class ListController {
  /** @ngInject */
  constructor(nytService, $stateParams, $log) {
    this.logger = $log;
    this.bgs = [];
    const self = this;

    this.sparams = $stateParams;
    this.nytService = nytService;
    this.handleResults = function (resp) {
      self.bookList = angular.fromJson(resp.data);
      self.listTitle = self.bookList.results[0].list_name;
      self.lastModified = moment(self.bookList.last_modified).format('lll');
      this.logger.log(self.bookList.results[0]);
    };
    this.listOrderKey = 'rank';
    this.setOrderKey = function (key) {
      if (self.listOrderKey === key) {
        self.listOrderKey = '-' + key;
      } else {
        self.listOrderKey = key;
      }
    };
    this.nytService.getBooks(this.sparams.id).then(data => this.handleResults(data));
  }
}

export const List = {
  template: require('./List.html'),
  controller: ListController
};
