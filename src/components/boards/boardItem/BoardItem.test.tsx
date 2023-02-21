import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import BoardItem from './BoardItem';

beforeEach(() => {
  history.pushState({}, '', '/boards');
});

describe('BoardItem component', () => {
  test('renders BoardItem', () => {
    render(
      <TestWrapper>
        <BoardItem
          onDeleteBoard={() => {}}
          onEditBoard={() => {}}
          title="Title"
          description="Description"
          id="1"
          key="1"
        />
      </TestWrapper>
    );

    const title = screen.getByText('Title');
    const description = screen.getByText('Description');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  test('redirect to columns page when item is clicked', () => {
    const id = '1';

    render(
      <TestWrapper>
        <BoardItem
          onDeleteBoard={() => {}}
          onEditBoard={() => {}}
          title="Title"
          description="Description"
          id={id}
          key={id}
        />
      </TestWrapper>
    );

    const title = screen.getByText('Title');

    userEvent.click(title);
    expect(window.location.pathname).toContain(`/boards/${id}`);
  });
  test('Modal function (edit/delete) is called when action button is clicked (redirection prevented)', () => {
    const id = '1';
    const mockFunction = jest.fn();
    render(
      <TestWrapper>
        <BoardItem
          onDeleteBoard={mockFunction}
          onEditBoard={mockFunction}
          title="Title"
          description="Description"
          id={id}
          key={id}
        />
      </TestWrapper>
    );

    const button = screen.getAllByRole('button');

    userEvent.click(button[0]);
    expect(window.location.pathname).not.toContain(`/boards/${id}`);
    expect(mockFunction).toBeCalled();
  });
});
