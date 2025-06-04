import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import { AuthProvider } from '../contexts/AuthContext';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => mockedUsedNavigate,
  };
});

const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <AuthProvider>{ui}</AuthProvider>
    </MemoryRouter>
  );
};

describe('LoginPage', () => {
  test('preenche o formulário e redireciona para "/" após login', () => {
    renderWithProviders(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);

    const submitButtons = screen.getAllByRole('button', { name: /entrar/i });
    const submitButton = submitButtons.find(
      (btn) => btn.getAttribute('type') === 'submit'
    );

    expect(submitButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'teste@email.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    fireEvent.click(submitButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});
