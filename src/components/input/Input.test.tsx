import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../utils/testUtils';
import Input from './Input';

describe('Input component', () => {
  test('Renders input', () => {
    render(
      <TestWrapper>
        <Input label="Name" />
      </TestWrapper>
    );

    const label = screen.getByText('Name');

    expect(label).toBeInTheDocument();
  });
});
