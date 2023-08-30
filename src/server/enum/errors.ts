export enum Errors {
  // Bad Request (400)
  InvalidPayload = 400000,
  // Unauthorized (401)
  TokenExpired = 401001,
  TokenInvalid = 401002,
  // Forbidden (403)
  Forbidden = 403000,
  // Not found (404)
  NotFound = 404000,
  UserNotFound = 404001,
  // Conflict (409)
  Conflict = 409000,
  StorageLimit = 409001,
  // Payload too large,
  PayloadTooLarge = 413000,
  // Internal Server Error (500)
  InternalServerError = 500000,
}

export const ErrorsMessages: Record<Errors, string> = {
  [Errors.Conflict]: 'Conflict',
  [Errors.Forbidden]: 'Forbidden',
  [Errors.InternalServerError]: 'Internal server error',
  [Errors.InvalidPayload]: 'Bad Request',
  [Errors.NotFound]: 'Not found',
  [Errors.PayloadTooLarge]: 'Payload too large',
  [Errors.StorageLimit]: 'Storage limit',
  [Errors.TokenExpired]: 'Token expired',
  [Errors.TokenInvalid]: 'Invalid token',
  [Errors.UserNotFound]: 'User: Not found',
};
