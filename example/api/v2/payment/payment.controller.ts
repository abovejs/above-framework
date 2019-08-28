import { Controller, IHttp } from '../../../../src';
import { Get, Post } from '../../../../src/core/decorators';
import PaymentSchema from './payment.schema';
import PaymentNotFoundException from './exceptions/payment-not-found.exception';

@Controller('/payment')
class PaymentController {
  @Post('/findAll', {
    paginate: true,
    auth: false,
    records: true,
    validate: PaymentSchema.findAll.validate,
  })
  async xxx({
    reply,
    request: {
      payload: { name },
    },
  }: IHttp<typeof PaymentSchema.findAll.validate>) {
    if (name === 'fabricio') {
      throw new PaymentNotFoundException();
    }
    if (name === 'error') {
      throw new Error('deu erro em alguma implementação');
    }
    return reply.response({
      name,
    });
  }
  @Get('/getItem', {
    auth: false,
    validate: PaymentSchema.getItem.validate,
  })
  async getIem({ reply }: IHttp) {
    return reply.response({
      item: 'xpto',
    });
  }
}

export default PaymentController;
