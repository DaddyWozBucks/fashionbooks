
class ListController {
  /** @ngInject */
  constructor($state, nytService, $stateParams, $log) {
    this.logger = $log;
    this.bgs = [];
    const self = this;
    this.state = $state;
    this.sparams = $stateParams;
    this.nytService = nytService;
    this.handleResults = function (resp) {
      self.bookList = angular.fromJson(resp.data);
      self.listTitle = self.bookList.results[0].list_name;
      this.logger.log(self.bookList.results[0]);
    };
    this.listOrderKey = 'rank';
    this.setOrderKey = function (key) {
      if (self.listOrderKey === key) {
        self.listOrderKey = '-' + key;
      } else {
        switch (key) {
          case 'rank': {
            self.listOrderKey = 'rank';
            break;
          }
          case 'prev_rank': {
            self.listOrderKey = 'rank_last_week';
            break;
          }
          case 'title': {
            self.listOrderKey = 'book_details[0].title';
            break;
          }
          case 'author': {
            self.listOrderKey = 'book_details[0].author';
            break;
          }
          default: {
            self.listOrderKey = 'rank';
            break;
          }
        }
      }
    };
    this.nytService.getBooks(this.sparams.id).then(data => this.handleResults(data));
  }
}

export const List = {
  template: require('./List.html'),

  controller: ListController,
  bindings: {

  }
};
