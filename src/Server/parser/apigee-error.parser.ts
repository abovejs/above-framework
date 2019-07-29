import errorCatalog from '../apigee/error-catalog.apigee';

import { isArray, isDate, isEmpty, isObject } from 'lodash';

export function clearJson(object) {
  if (object instanceof Array) {
    for (let i = object.length - 1; i >= 0; i--) {
      clearJson(object[i]);
      if (isEmptyValue(object[i])) {
        object.splice(i, 1);
      }
    }
  } else if (typeof object === 'object') {
    for (const property in object) {
      const value = object[property];
      if (isEmptyValue(value)) {
        delete object[property];
      } else if (value instanceof Array || typeof value === 'object') {
        clearJson(value);
        if (isEmptyValue(value)) {
          delete object[property];
        }
      }
    }
  }
}

export function isEmptyValue(object) {
  if (isArray(object)) {
    return object.length === 0;
  }
  if (isObject(object)) {
    return isEmpty(object) && !isDate(object);
  }
  if (trim(object) === '') {
    return true;
  }
  return false;
}

export function isString(value) {
  return typeof value === 'string';
}

export function trim(value) {
  if (value === undefined || value === null) {
    return '';
  }
  value = String(value);
  return value.replace(/^\s+|\s+$/g, '');
}

export const errorParser = (code, parameters, defaultStatusCode?: number) => {
  if (!isEmptyValue(parameters) && isString(parameters)) {
    parameters = [parameters];
  }
  parameters = parameters || [];

  const error = errorCatalog[String(code)];
  if (isEmptyValue(error)) {
    throw new Error(`luizalabs-error: Error code ${code} not found!`);
  }
  const statusCode = defaultStatusCode || error.httpcode;

  const language = process.env.HAPI_LANGUAGE || 'en';
  let errorMessage = error[language] || error.en;

  if (isEmptyValue(errorMessage)) {
    errorMessage = error[language];
  }

  if (isEmptyValue(errorMessage)) {
    throw new Error(
      `luizalabs-error: Error language ${language} not found for code ${code}`
    );
  }

  let developerMessage = errorMessage.developerMessage;
  let userMessage = errorMessage.userMessage;

  for (let i = 0; i < parameters.length; i++) {
    developerMessage = developerMessage.split(`{${i}}`).join(parameters[i]);
    userMessage = userMessage.split(`{${i}}`).join(parameters[i]);
  }

  developerMessage = developerMessage.split(/[{]\d{1,}[}]/).join('');
  userMessage = userMessage.split(/[{]\d{1,}[}]/).join('');

  return {
    statusCode,
    body: {
      developerMessage: trim(developerMessage),
      userMessage: trim(userMessage),
      errorCode: parseInt(code, 0),
      moreInfo: 'http://www.developer.apiluiza.com.br/errors'
    }
  };
};
