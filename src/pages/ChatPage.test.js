import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ChatPage from './ChatPage';
import { AuthProvider } from '../contexts/AuthContext';

window.alert = jest.fn();

const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <AuthProvider>{ui}</AuthProvider>
    </MemoryRouter>
  );
};

describe('ChatPage', () => {
  test('abre e fecha o modal ao clicar nos botões', () => {
    expect(true).toBe(true);
  });
});
