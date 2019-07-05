import Hapi from '@hapi/hapi';
import Joi from 'joi';
import { BasePath } from './Helpers';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({
    path: BasePath.get(`../.env.testing`)
  });
}

require('dotenv').config({
  path: BasePath.get(`../.env`)
});

import {
  Controller,
  Delete,
  Get,
  Options,
  Patch,
  Post,
  Put
} from './Annotations/Controller';
import Bootstrap from './Bootstrap';
import BaseException from './Exceptions/BaseException';
import IHttp from './typings/interface/IHttp';

export {
  Bootstrap,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  IHttp,
  BaseException,
  Options,
  Patch,
  Hapi,
  Joi
};
