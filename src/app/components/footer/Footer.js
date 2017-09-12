
class FooterController {
  constructor() {
    this.footer = 'footer';
  }
}

export const Footer = {
  template: require('./Footer.html'),
  controller: FooterController,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    selectedFilter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};
