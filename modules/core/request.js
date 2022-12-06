import helpers from '../../helpers/index.js';

const request_compose_args = {
  post: (req) => {
    const body = req.body;

    return [body];
  },
  get: (req) => {
    const {
      filter,
      options
    } = helpers.composeQuery(req.query);

    return [filter, options];
  },
  put: (req) => {
    const {
      filter
    } = helpers.composeQuery(req.query);
    const body = req.body;

    return [filter, body];
  },
  delete: (req) => {
    const {
      filter,
      options
    } = helpers.composeQuery(req.query);

    return [filter, options];
  }
};

export default (requestHandler) => {
  return async (req, res, next) => {
    try {
      const method = req.method.toLowerCase();
      const request_args = request_compose_args[method](req);

      const response = await requestHandler(...request_args, req, res);

      return res.status(200).json({response, errors: []});
    } catch (error) {
      return next(error);
    }
  };
};


