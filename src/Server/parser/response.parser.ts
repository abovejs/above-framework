import { errorParser } from './apigee-error.parser';

export function responseSucess(data, options, customMeta) {
  options.query = options.query || {};
  const responseBody: { meta: object; records: object[] } = {
    meta: {},
    records: []
  };
  data = data instanceof Array ? data : data.meta ? data.records : [data];
  responseBody.meta = {
    server: require('os').hostname(),
    offset: options.query.offset,
    limit: options.query.limit,
    recordCount: data.length,
    ...customMeta
  };
  responseBody.records = data;

  return responseBody;
}

export function responseSuccessApi(data, options, customMeta) {
  options = {
    ...options,
    ...data.meta
  };
  return responseSucess(data, options, customMeta);
}

export function responseError(err) {
  if (
    err.response &&
    err.response.headers['content-type'].indexOf('application/json') === -1
  ) {
    err = new Error('Server returned html');
    err.errorCode = 20090;
    err.parameters = 'Server returned html';
  }

  if (err.requestApi && !err.errorCode) {
    if (err.requestApi.statusCode === 404) {
      err.errorCode = 20023;
      err.parameters = undefined;
    }
  }

  if (!err.errorCode) {
    if (typeof err === 'string') {
      err = new Error(err);
    }
    err.errorCode = 10000;
    err.parameters = undefined;
  }

  const errorMessage = errorParser(
    err.errorCode,
    err.parameters,
    err.statusCode
  );

  const headerError = {
    ...(err.message ? { message: err.message } : {}),
    ...(err.stack ? { stack: err.stack } : {}),
    ...(err.requestApi ? { request: err.requestApi } : {})
  };

  const errorBody =
    err.userMessage && err.developerMessage && err.moreInfo
      ? err
      : errorMessage.body;

  return [errorBody, errorMessage.statusCode, headerError];
}
