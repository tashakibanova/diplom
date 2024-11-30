import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />);
    
    expect(screen.getByText(/Вся жизнь/i)).toBeInTheDocument();
    expect(screen.getByText(/о нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Как это работает/i)).toBeInTheDocument();
    expect(screen.getByText(/отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(/Свяжитесь с нами/i)).toBeInTheDocument();
  });
});