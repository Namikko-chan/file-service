import { sign, } from 'jsonwebtoken';

import { Boom, } from '@hapi/boom';
import { Request, ResponseObject, ResponseToolkit, } from '@hapi/hapi';

import { config, } from '../config/config';
import { IOutputEmpty, IOutputOk, } from '../interfaces';
import { Exception, handlerError, outputEmpty, outputOk, } from '../utils';
import { Token, } from './auth.enum';
import { AuthErrors, AuthErrorsMessages, } from './auth.errors';
import { decodeJwt, } from './auth.utils';

export function tokenGenerate(r: Request, h: ResponseToolkit): ResponseObject | IOutputOk<{ token: string }> | Boom {
  /* eslint-disable security/detect-object-injection */
  try {
    const { userId, fileId, } = r.payload as { userId: string; fileId?: string };
    const tokenType = r.params['tokenType'] as Token;
    const token = sign({ userId, fileId, timestamp: Date.now(), }, config.auth.jwt[tokenType].secret as string, { expiresIn: 642000000, });

    return h.response(outputOk({ token, })).code(201);
  } catch (err) {
    return handlerError('Failed to generate token', err);
  }
}

export function tokenInfo(r: Request): IOutputOk<Record<string, unknown>> | Boom {
  /* eslint-disable security/detect-object-injection */
  try {
    const tokenType = r.params['tokenType'] as Token;
    if (!r.headers['authorization']) throw new Exception(AuthErrors.TokenInvalid, AuthErrorsMessages[AuthErrors.TokenInvalid]);
    const data = decodeJwt(r.headers['authorization'].slice(7), config.auth.jwt[tokenType].secret as string);

    return outputOk({ data, });
  } catch (err) {
    return handlerError('Failed to decode token', err);
  }
}

export function tokenValidate(): IOutputEmpty | Boom {
  try {
    return outputEmpty();
  } catch (err) {
    return handlerError('Failed to validate token', err);
  }
}