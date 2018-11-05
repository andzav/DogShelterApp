import * as superagent from 'superagent';

const methods = ['get', 'post', 'put', 'delete'];

class ApiClient {
  defaults = {};

  constructor() {
    // eslint-disable-next-line no-return-assign
    methods.forEach(method => this[method] = (
      path,
      {
        headers, query, data, type,
      } = {},
      isDHeadersWanted = true,
    ) => new Promise((resolve, reject) => {
      const request = superagent[method](path);

      // Set default headers
      if (isDHeadersWanted) {
        request.set(this.defaults);
      }

      if (type) {
        request.type(type);
      }

      if (headers) {
        request.set(headers);
      }

      if (query) {
        request.query(query);
      }

      if (data) {
        request.send(data);
      }

      request.end((err, res) => {
        if (err) reject(err.response);
        else setTimeout(() => resolve(res.body || res), 1500);
      });
    }));
  }

  set(key, value) {
    this.defaults[key] = value;
  }
}

export default new ApiClient();
