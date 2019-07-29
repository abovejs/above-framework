import errorCatalog from '../apigee/error-catalog.apigee';
import { isEmptyValue, isString, trim } from '../helper/json.helper';

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
    throw new Error(`luizalabs-error: Error language ${language} not found for code ${code}`);
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
      moreInfo: 'http://www.developer.apiluiza.com.br/errors',
    },
  };
};
