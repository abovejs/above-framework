import { errorParser } from './apigee-error.parser';
import errorCatalog from './error-catalog.joi';

const parsePath = path => {
  if (path instanceof Array) {
    path = path.length === 0 ? [''] : path;
    path = path.reduce((current, value) => {
      return current
        .toString()
        .concat('.')
        .concat(value);
    });
  }

  let result = path;
  const arrayIndexes = path.match(/(^\d{1,}[.])|([.]\d{1,}[.])|([.]\d{1,}$)/g);
  if (arrayIndexes && arrayIndexes.length > 0) {
    arrayIndexes.forEach(index => {
      const indexPosition =
        index.substring(0, 1) === '.'
          ? index.substring(index.length - 1, index.length) === '.'
            ? 'inner'
            : 'end'
          : 'begin';
      let indexParsed = '';
      if (indexPosition === 'begin') {
        indexParsed = '[' + index.substring(0, index.length - 1) + '].';
      } else if (indexPosition === 'inner') {
        indexParsed = '[' + index.substring(1, index.length - 1) + '].';
      } else if (indexPosition === 'end') {
        indexParsed = '[' + index.substring(1, index.length) + ']';
      }
      result = result.split(index).join(indexParsed);
    });
  }
  return result;
};

const buildJoiError = error => {
  const errorDetails = error.details;
  let parameterPath = parsePath(errorDetails[0].path);

  parameterPath =
    parameterPath === '' ? errorDetails[0].context.label : parameterPath;

  let parameterType = error.output.payload.validation.source;
  if (parameterType === 'params') {
    parameterType = 'path';
  }

  if (parameterType === 'payload') {
    parameterType = 'body';
  }

  const errorType = errorDetails[0].type;

  /**
   * Tratamento para o error type date.isoDate, seguindo a convenção ISO-8601
   */
  if (errorType === 'object.and') {
    parameterPath = errorDetails[0].context.missing;
  }
  const joiError = errorCatalog[errorType];
  if (!joiError) {
    return errorParser(
      20020,
      '- Error code not found for joi error ' + errorType
    );
  }

  const parameters = joiError.parameters(errorDetails[0], [
    parameterType,
    parameterPath
  ]);

  return errorParser(joiError.code, parameters);
};

const buildGenericErrors = error => {
  if (error.output.statusCode === 401) {
    return errorParser(
      30001,
      'make sure the header parameter Authorization is valid'
    );
  }
  if (error.output.statusCode === 500) {
    return errorParser(10000, '');
  }
  return errorParser(
    20020,
    '- Error code not found for joi error ' + error.output.payload.message
  );
};

export { buildGenericErrors, buildJoiError };
