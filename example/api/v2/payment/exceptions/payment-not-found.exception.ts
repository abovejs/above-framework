import { BaseException } from '../../../../../src';

class PaymentNotFoundException extends BaseException {
  constructor() {
    super({
      developerMessage: 'pagamento não encontrado',
      userMessage: 'pagamento não encontrado',
      errorCode: 20004,
      statusCode: 404,
    });
  }
}

export default PaymentNotFoundException;
