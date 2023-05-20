import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('Register', () => {
    test('renders the Register component', () => {
        render(<Register />);
        
        // Verify that the register form is rendered
        const registerForm = screen.getByRole('form');
        expect(registerForm).toBeInTheDocument();
        
        // Verify that the email input field is rendered
        const emailInput = screen.getByPlaceholderText('Email address');
        expect(emailInput).toBeInTheDocument();
        
        // Verify that the password input field is rendered
        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();
        
        // Add more assertions for other elements if needed
      });
         
})

