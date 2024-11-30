import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('renders all form inputs', () => {
    render(<SearchForm />);
    
    expect(screen.getByLabelText(/Откуда/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Куда/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Дата отправления/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Дата возвращения/i)).toBeInTheDocument();
  });

  it('submits form with input values', async () => {
    const user = userEvent.setup();
    render(<SearchForm />);
    
    await user.type(screen.getByLabelText(/Откуда/i), 'Москва');
    await user.type(screen.getByLabelText(/Куда/i), 'Санкт-Петербург');
    await user.type(screen.getByLabelText(/Дата отправления/i), '01/01/2024');
    await user.type(screen.getByLabelText(/Дата возвращения/i), '02/01/2024');
    
    await user.click(screen.getByText(/найти билеты/i));
    
    // Add assertions for form submission
  });
});