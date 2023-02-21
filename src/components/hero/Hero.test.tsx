import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';
import TestWrapper from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(
    <TestWrapper>
      <Hero />
    </TestWrapper>
  );
});

describe('Hero component', () => {
  test('renders Hero Component', () => {
    // https://polvara.me/posts/five-things-you-didnt-know-about-testing-library
    //   Example 4
    //   Solution to get rid of span inside title

    const title = screen.getByText((content, node: Element | null) => {
      const hasText = (node: Element | null) => node?.textContent === 'Project managment app';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node!.children).every((child) => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    });

    const getStartedBtn = screen.getByText('Get started');
    const image = screen.getByAltText('People using kanban board');

    expect(title).toBeInTheDocument();
    expect(getStartedBtn).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('rendirect to boards page when Get started button is clicked', () => {
    const getStartedBtn = screen.getByText('Get started');

    userEvent.click(getStartedBtn);

    expect(global.window.location.pathname).toContain('/boards');
  });
});
