import {NytService} from './nyt';

describe('TodoService', () => {
  let nytService;

  beforeEach(() => {
    nytService = new NytService();
  });

  it('should retrieve cat list', () => {
    const res = nytService.getLists();
    expect(res.data.results.length).not.toBeLessThan(0);

  });

});
