import Joi from '@hapi/joi';

class PaymentSchema {
  public static findAll = {
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
      }),
    },
  };

  public static getItem = {
    validate: {
      query: Joi.object({
        name: Joi.string().required(),
      }),
    },
  };
}

export default PaymentSchema;
