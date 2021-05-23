import {render, screen, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';
const sinon = require('sinon');

function makeRandomAlways(result) {
    if (Math.random.restore) {
        Math.random.restore();
    }
    sinon.stub(Math, 'random').returns(result);
}

describe('App', () => {
    it('should tell you when you win', async () => {
        // Given we've rendered the app
        render(<App/>);

        // When we enter the correct answer
        const number1 = screen.getByTestId('number1').textContent;
        const number2 = screen.getByTestId('number2').textContent;
        const input = screen.getByLabelText(/guess:/i);
        const submitButton = screen.getByText('Submit');
        user.type(input, '' + (parseFloat(number1) * parseFloat(number2)));
        user.click(submitButton);

        // Then we are told that we've won
        // screen.getByText(/won/i);
        await waitFor(() => screen.findByText(/won/i), {timeout: 4000});
    })

    it('should disable the question when a result is displayed', () => {
        render(<App/>);
        const input = screen.getByLabelText(/guess:/i);
        user.type(input, '1');
        const submitButton = screen.getByText('Submit');
        user.click(submitButton);
        expect(input.disabled).toBe(true);
        expect(submitButton.disabled).toBe(true);
        expect(screen.getByLabelText(/guess:/i)).toHaveValue(null);
    })

    it('should restart the game if you press refresh', () => {
        render(<App/>);
        const input = screen.getByLabelText(/guess:/i);
        user.type(input, '1');
        const submitButton = screen.getByText('Submit');
        const refreshButton = screen.getByText('Submit');
        user.click(submitButton);
        expect(input.disabled).toBe(true);
        expect(submitButton.disabled).toBe(true);
        expect(screen.getByLabelText(/guess:/i)).toHaveValue(null);
        expect(input.disabled).toBe(true);
    })

    it('should tell you that you entered the right answer', async () => {
        // Given we've rendered the app
        makeRandomAlways(0.5);
        render(<App/>);

        // When we enter the correct answer
        const input = screen.getByLabelText(/guess:/i);
        const submitButton = screen.getByText('Submit');
        user.type(input, '36');
        user.click(submitButton);

        // Then we are told that we've won
        await waitFor(() => screen.findByText(/won/i), {timeout: 4000});
    })
});
