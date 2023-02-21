import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogInForm from './LogInForm';
import TestWrapper from '../../../../utils/testUtils';

describe('LogInForm component', () => {
  beforeEach(() => history.pushState({}, '', '/login'));
  test('Render login page', () => {
    render(
      <TestWrapper>
        <LogInForm
          isError={false}
          isLoading={false}
          errorMessage=""
          onSubmitFormHandler={() => {}}
        />
      </TestWrapper>
    );
    const title = screen.getAllByText('Login');
    const loginInput = screen.getByText('Login');
    const passwordInput = screen.getByText('Password');
    expect(title[0]).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  test('Renders error message', () => {
    render(
      <TestWrapper>
        <LogInForm
          isError={true}
          isLoading={false}
          errorMessage="Something went wrong"
          onSubmitFormHandler={() => {}}
        />
      </TestWrapper>
    );
    const error = screen.getByText('Something went wrong');
    expect(error).toBeInTheDocument();
  });
  test('Call submit function when data inserted correctly', async () => {
    const mockSubmitForm = jest.fn();
    render(
      <TestWrapper>
        <LogInForm
          isError={true}
          isLoading={false}
          errorMessage="Something went wrong"
          onSubmitFormHandler={mockSubmitForm}
        />
      </TestWrapper>
    );
    const loginInput = screen.getByRole('textbox', { name: 'Login' });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');
    fireEvent.input(loginInput, {
      target: {
        value: 'Login',
      },
    });
    fireEvent.input(passwordInput, {
      target: {
        value: 'Password',
      },
    });
    fireEvent.click(submitButton);
    expect(loginInput).toHaveValue('Login');
    expect(passwordInput).toHaveValue('Password');
    // waitFor used because of React Hook Form async validation
    await waitFor(() => expect(mockSubmitForm).toBeCalled());
  });
  test('Doesnt call submit function when data inserted incorrectly', async () => {
    const mockSubmitForm = jest.fn();
    render(
      <TestWrapper>
        <LogInForm
          isError={true}
          isLoading={false}
          errorMessage="Something went wrong"
          onSubmitFormHandler={mockSubmitForm}
        />
      </TestWrapper>
    );
    const loginInput = screen.getByRole('textbox', { name: 'Login' });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');
    fireEvent.input(loginInput, {
      target: {
        value: 'Login',
      },
    });
    fireEvent.input(passwordInput, {
      target: {
        value: 'Passwordsadsadsadsadsa',
      },
    });
    fireEvent.click(submitButton);
    expect(loginInput).toHaveValue('Login');
    expect(passwordInput).toHaveValue('Passwordsadsadsadsadsa');
    // waitFor used because of React Hook Form async validation
    await waitFor(() => {
      const errorMessage = screen.getByText('This field should have max 10 characters');
      expect(mockSubmitForm).not.toBeCalled();
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
