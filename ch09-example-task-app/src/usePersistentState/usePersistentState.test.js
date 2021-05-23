import {render, screen} from '@testing-library/react';
import usePersistentState from "./usePersistentState";

describe('usePersistentState', () => {
    beforeEach(() => {
        localStorage.clear();
    })

    it('should be ok if no existing state', () => {

        const Example = () => {
            usePersistentState('something', []);

            return <div>Hello</div>
        }

        render(<Example/>);
    });
    it('should use existing state if it exists', () => {

        const Example = () => {
            const [v] = usePersistentState('something', '');

            return <div>{v}</div>
        }

        localStorage.setItem('something', JSON.stringify('Existing value'));
        render(<Example/>);
        screen.getByText('Existing value')
    });
    it('should update local storage when functional setter called', () => {

        const Example = () => {
            const [v, setV] = usePersistentState('something', 0);

            return <div>
                <div>Count: {v}</div>
                <button onClick={() => setV(c => c + 1)}>Click</button>
            </div>
        }

        render(<Example/>);
        screen.getByText('Count: 0')
        screen.getByText(/click/i).click()
        screen.getByText(/click/i).click()
        screen.getByText(/click/i).click()
        screen.getByText(/click/i).click()
        screen.getByText(/click/i).click()
        screen.getByText(/click/i).click()
        screen.getByText('Count: 6')
        expect(localStorage.getItem('something')).toEqual('6');
    });
    it('should update local storage when non-functional setter called', () => {

        const Example = () => {
            const [v, setV] = usePersistentState('clicked', false);

            return <div>
                <div>Clicked: {JSON.stringify(v)}</div>
                <button onClick={() => setV(true)}>Click me</button>
            </div>
        }

        render(<Example/>);
        screen.getByText('Clicked: false')
        screen.getByText(/click me/i).click()
        screen.getByText('Clicked: true')
        expect(localStorage.getItem('clicked')).toEqual('true');
    });
});