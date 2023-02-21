import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '../../../utils/testUtils';
import ServerError from './ServerError';

describe('serverError component', () => {
  test('Renders error', () => {
    render(
      <TestWrapper>
        <ServerError errorMessage={'serverError.default'} />
      </TestWrapper>
    );

    const error = screen.getByText('Something went wrong!');

    expect(error).toBeInTheDocument();
  });
});
