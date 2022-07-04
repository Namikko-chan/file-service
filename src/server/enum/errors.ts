export enum Errors {
  // Bad Request (400)
  InvalidPayload = 400000,
  AlreadyExists = 400001,
  // Unauthorized (401)
  TokenExpired = 401001,
  TokenInvalid = 401002,
  SessionNotFound = 401003,
  InvalidCaptcha = 401004,
  // Forbidden (403)
  Forbidden = 403000,
  FileIsPrivate = 403001,
  UnverifiedAdmin = 403004,
  // Not found (404)
  NotFound = 404000,
  UserNotFound = 404001,
  FileNotFound = 404002,
  // NotAcceptable (406)
  NotAcceptable = 406000,
  // Conflict (409)
  Conflict = 409000,
  EmailExists = 409001,
  StatusAlreadyAssigned = 409002,
  // Unsupported Media Type (415)
  UnsupportedMediaType = 415000,
  FileExtNotSupport = 415001,
  // Too Many Requests (429)
  TooManyRequests = 429000,
  // Internal Server Error (500)
  InternalServerError = 500000,
}

export const ErrorsMessages: Record<Errors, string> = {
	[Errors.InvalidPayload]: 'Bad Request',
	[Errors.AlreadyExists]: 'Already Exists',
	[Errors.TokenExpired]: 'Token expired',
	[Errors.TokenInvalid]: 'Invalid token',
	[Errors.SessionNotFound]: 'Session not found',
	[Errors.InvalidCaptcha]: 'Invalid captcha',
	[Errors.Forbidden]: 'Forbidden',
	[Errors.UnverifiedAdmin]: 'Unverified admin',
	[Errors.NotFound]: 'Not found',
	[Errors.NotAcceptable]: 'Not acceptable',
	[Errors.Conflict]: 'Conflict',
	[Errors.EmailExists]: 'Email exists',
	[Errors.StatusAlreadyAssigned]: 'Status already assigned',
	[Errors.UnsupportedMediaType]: 'Unsupported media type',
	[Errors.TooManyRequests]: 'Too many request',
	[Errors.InternalServerError]: 'Internal server error',
	[Errors.UserNotFound]: 'User: Not found',
	[Errors.FileIsPrivate]: 'File: Private',
	[Errors.FileNotFound]: 'File: Not found',
	[Errors.FileExtNotSupport]: 'File: ext not support',
};
