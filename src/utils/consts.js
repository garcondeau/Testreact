const responseStatus = {
  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_NO_CONTENT: 204,
  HTTP_BAD_REQUEST: 400,
  HTTP_NOT_FOUND: 404,
  HTTP_ERROR_VALIDATION: 422,
  FORBIDDEN: 403,
  HTTP_INTERNAL_SERVER_ERROR: 500,
  HTTP_UNAUTHORIZED: 401,
  HTTP_CONFLICT: 409
};

const currencies = [
  { value: 'uah', label: 'UAH' },
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'pln', label: 'PLN' },
];

export {
  responseStatus,
  currencies
};