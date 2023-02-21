import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import TestWrapper from '../../../../utils/testUtils';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  history.pushState({}, '', '/');
  render(
    <TestWrapper>
      <Header isLoading={false} />
    </TestWrapper>
  );
});

describe('Header component', () => {
  test('renders Header', () => {
    const logo = screen.getByText('Trello');
    const logIn = screen.getByText('Log in');
    const signUp = screen.getByText('Sign up');

    expect(logo).toBeInTheDocument();
    expect(logIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });

  test('renders appropiate navlinks when click Log in', () => {
    const logIn = screen.getByText('Log in');

    userEvent.click(logIn);

    expect(window.location.pathname).toContain('/login');
  });

  test('renders appropiate translate when clicks on language button', () => {
    const languageButton = screen.getByText('EN');
    userEvent.click(languageButton);

    const logIn = screen.getByText('Zaloguj się');
    const signUp = screen.getByText('Zarejestruj się');

    expect(logIn).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
  });
});
