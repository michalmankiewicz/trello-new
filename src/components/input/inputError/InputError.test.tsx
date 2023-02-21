import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TestWrapper from '../../../utils/testUtils';
import InputErrorMessage from './InputErrorMessage';

describe('serverError component', () => {
  test('Renders error', () => {
    render(
      <TestWrapper>
        <InputErrorMessage errorMessage="inputError.required" />
      </TestWrapper>
    );

    const error = screen.getByText('This field is required');

    expect(error).toBeInTheDocument();
  });
});
