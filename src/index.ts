import Joi from '@hapi/joi';
import Hapi from '@hapi/hapi';

import EnvManager from './utils/env-manager';
import Ignition from './core/ignition';
import { HttpContract, HttpContract as IHttp } from './contracts/http.contract';
import { Controller, Delete, Get, Post, Head, Options, Patch, Put } from './core/decorators';
import { ApplicationContract, SchemaContract } from './contracts/application.contract';
import { DatabaseContract } from './contracts/database.contract';
import BaseException from './bases/base-exception';
import RootPath from './utils/root-path';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({
    path: RootPath.get(`../.env.testing`),
  });
} else {
  require('dotenv').config({
    path: RootPath.get(`../.env`),
  });
}

export {
  EnvManager,
  Ignition,
  HttpContract,
  IHttp,
  Controller,
  Delete,
  Get,
  Post,
  Head,
  Options,
  Patch,
  Put,
  ApplicationContract,
  SchemaContract,
  DatabaseContract,
  BaseException,
  Joi,
  Hapi,
};
