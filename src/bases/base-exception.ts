abstract class BaseException extends Error {
  constructor(
    readonly payload: {
      readonly developerMessage: string;
      readonly errorCode: number;
      readonly statusCode: number;
      readonly userMessage: string;
    },
  ) {
    super(JSON.stringify({ ...payload }));
  }

  public getResponse() {
    return {
      ...this.payload,
      moreInfo: 'http://www.developer.apiluiza.com.br/errors',
      errorName: this.constructor.name,
    };
  }

  public getSchema() {
    const error = this.getResponse();
    return {
      [`${error.statusCode} - ${error.errorName}`]: error,
    };
  }
}

export default BaseException;
