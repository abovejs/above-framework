import { Controller, IHttp } from '../../../../src';
import { Get, Post } from '../../../../src/core/decorators';
import PaymentSchema from './payment.schema';

@Controller('/payment')
class PaymentController {
  @Post('/findAll', {
    paginate: true,
    auth: false,
    records: true,
    validate: PaymentSchema.findAll.validate,
  })
  async findAll({
    reply,
    request: {
      payload: { name },
    },
  }: IHttp<typeof PaymentSchema.findAll.validate>) {
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
