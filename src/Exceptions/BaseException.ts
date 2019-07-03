abstract class BaseException extends Error {
  constructor(
    readonly payload: {
      readonly developerMessage: string;
      readonly errorCode: number;
      readonly statusCode: number;
      readonly userMessage: string;
    }
  ) {
    super(JSON.stringify({ ...payload }));
  }

  public getResponse() {
    return {
      ...this.payload,
      errorName: this.constructor.name,
    }
  }
}

export default BaseException;
