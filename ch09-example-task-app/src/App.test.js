import {render, screen} from '@testing-library/react';
import App from './App';

test('renders heading', () => {
    render(<App/>);
    screen.getByText(/manage tasks/i);
});
