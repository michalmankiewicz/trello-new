import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import DeleteBoard from './DeleteBoard';

const mockDelete = jest.fn();
const mockCancel = jest.fn();

describe('DeleteBoard component', () => {
  test('Calls delete function (not Cancel) when Delete button is clicked', () => {
    render(
      <TestWrapper>
        <DeleteBoard deleteBoard={mockDelete} closeModal={mockCancel} id="1" />
      </TestWrapper>
    );

    const deleteButton = screen.getByText('Delete');
    userEvent.click(deleteButton);

    expect(mockDelete).toBeCalled();
    expect(mockCancel).not.toBeCalled();
  });

  test('Calls cancel function (not delete) when cancel button is clicked', () => {
    render(
      <TestWrapper>
        <DeleteBoard deleteBoard={mockDelete} closeModal={mockCancel} id="1" />
      </TestWrapper>
    );

    const cancelButton = screen.getByText('Cancel');
    userEvent.click(cancelButton);

    expect(mockCancel).toBeCalled();
    expect(mockDelete).not.toBeCalled();
  });
});
