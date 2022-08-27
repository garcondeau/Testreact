export const validateValue = (fieldValue, regex) => {
  return new RegExp(regex).test(fieldValue);
}