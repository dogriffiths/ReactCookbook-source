import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('should show the field label on the first form', () => {
        const { queryByLabelText } = render(<App />);
        expect(queryByLabelText(/Field 1/)).toBeInTheDocument();
    });

    it('should be able to switch to the second form', () => {
        const { queryByLabelText, getByLabelText, container } = render(<App />);
        expect(queryByLabelText(/Field 1/)).toBeInTheDocument();
        fireEvent.change(container.querySelector('select'),{target: {value: 'second'}});
        expect(getByLabelText(/Address 2.*:/)).toBeInTheDocument();
    });
});
