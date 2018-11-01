import * as superagent from 'superagent';

const methods = ['get', 'post', 'put', 'delete'];

class ApiClient {
    defaults = {};

    constructor() {
        methods.forEach((method) =>
            this[method] = (
                path,
                {headers, query, data, type} = {},
                isDHeadersWanted = true
            ) =>
                new Promise((resolve, reject) => {
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

                    request.end((err, res) => err ? reject(err.response) : resolve(res.body || res));
                })
        );
    }

    set(key, value) {
        this.defaults[key] = value;
    }
}

export default new ApiClient();
