import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; 
import { Footer } from './Footer';

describe('Компонент Footer', () => {
  it('успішно рендериться', () => {

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const footerText = screen.getByText(/Volodymyr/i);
    expect(footerText).toBeInTheDocument();
  });
});