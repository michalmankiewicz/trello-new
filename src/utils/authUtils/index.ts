const translationType = 'inputError';

export const validationObj = {
  required: `${translationType}.required`,
  minLength: {
    value: 3,
    message: `${translationType}.min`,
  },
  maxLength: {
    value: 10,
    message: `${translationType}.max`,
  },
};
