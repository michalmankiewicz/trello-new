import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import EditBoard from './EditBoard';

describe('EditBoard component', () => {
  test('renders EditBoard component with accurate values', () => {
    render(
      <TestWrapper>
        <EditBoard
          onSubmitHandler={() => {}}
          boardData={{ id: '1', title: 'Title', description: 'Description' }}
        />
      </TestWrapper>
    );

    const titleInput = screen.getByRole('textbox', { name: 'Title' });
    const descriptionInput = screen.getByLabelText('Description');

    expect(titleInput).toHaveValue('Title');
    expect(descriptionInput).toHaveValue('Description');
  });
  test('Calls submit function when button is cliocked', async () => {
    const mockFunction = jest.fn();
    render(
      <TestWrapper>
        <EditBoard
          onSubmitHandler={mockFunction}
          boardData={{ id: '1', title: 'Title', description: 'Description' }}
        />
      </TestWrapper>
    );

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFunction).toBeCalled();
    });
  });
});
