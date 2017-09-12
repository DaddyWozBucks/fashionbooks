import {NYT_KEY} from '../constants/nyt';

export class NytService {
  constructor($http, $q, $log) {
    this.http = $http;
    this.q = $q;
    this.logger = $log;
  }
  getBooks(list) {
    const deferred = this.q.defer();
    const req = {
      method: 'POST',
      url: 'https://us-central1-tktr-fa4cf.cloudfunctions.net/getBooks',
      data: {
        list
      }
    };
    this.http(req).then(response => deferred.resolve(response.data));
    return deferred.promise;
  }

  getLists() {
    const deferred = this.q.defer();
    const req = {
      method: 'GET',
      url: 'https://us-central1-tktr-fa4cf.cloudfunctions.net/getLists',
      q: {
        'api-key': NYT_KEY
      }
    };
    this.http(req).then(response => {
      deferred.resolve(response.data);
      this.logger.warn(response.data);
    });
    return deferred.promise;
  }

}
