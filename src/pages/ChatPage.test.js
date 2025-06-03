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
    renderWithProviders(<ChatPage />);

    const alertButton = screen.getByRole('button', {
      name: (content, element) => content.toLowerCase().includes('alertar') && content.toLowerCase().includes('autoridades')
    });
    expect(alertButton).toBeInTheDocument();

    fireEvent.click(alertButton);

    const policeButton = screen.getByRole('button', { name: /polícia/i });
    expect(policeButton).toBeInTheDocument();

    fireEvent.click(policeButton);

    expect(window.alert).toHaveBeenCalledWith('Polícia acionado para sua localização.');
  });
});
