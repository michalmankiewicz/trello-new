import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TestWrapper from '../../../utils/testUtils';

import BoardsList from './BoardsList';

describe('BoardsList component', () => {
  test('renders BoardsList', () => {
    render(
      <TestWrapper>
        <BoardsList
          boards={[
            { id: '1', title: 'Title', description: 'Description' },
            { id: '2', title: 'Title', description: 'Description' },
          ]}
          onUpdateBoards={() => {}}
        />
      </TestWrapper>
    );

    const title = screen.getAllByText('Your Boards');
    const listItems = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument;
    expect(listItems).toHaveLength(2 + 1); // 2 elements + 1 add button
  });
  test('renders error', () => {
    render(
      <TestWrapper>
        <BoardsList
          boards={[
            { id: '1', title: 'Title', description: 'Description' },
            { id: '2', title: 'Title', description: 'Description' },
          ]}
          onUpdateBoards={() => {}}
        />
      </TestWrapper>
    );

    const error = screen.getAllByText('Something went wrong!');

    expect(error).toBeInTheDocument;
  });
});
