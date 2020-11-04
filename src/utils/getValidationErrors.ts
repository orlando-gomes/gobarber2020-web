import { ValidationError } from 'yup';

/**
 * Qualquer objeto do tipo {
 *    key1: value,
 *    key2: value
 *    ...
 * }
 */
interface MyErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): MyErrors {
  const validationErrors: MyErrors = {};
  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
