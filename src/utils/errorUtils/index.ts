export const handleErrorMessage = (error: unknown): string => {
  const translationType = 'serverError';
  const defaultMessage = 'default';

  let errorMessage = '';
  if (error && typeof error === 'object' && 'status' in error) {
    if (error.status === 400) {
      errorMessage = defaultMessage;
    } else if (error.status === 403) {
      errorMessage = 'error403';
    } else if (error.status === 404) {
      errorMessage = 'error404';
    } else if (error.status === 409) errorMessage = 'error409';
    else errorMessage = defaultMessage;
  } else return (errorMessage = defaultMessage);

  return translationType.concat('.', errorMessage);
};
