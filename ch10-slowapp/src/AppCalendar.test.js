import {render, screen, waitFor} from "@testing-library/react";
import user from '@testing-library/user-event';
import YearCalendar from "./YearCalendar";
import timekeeper from "./timekeeper";
import App from "./App";

let renders = [];
let tracker = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) => {
    renders.push({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    })
};

const t = timekeeper();

describe('AppCalendar', () => {
    beforeEach(() => {
        renders = [];
        t.next();
    });
    afterEach(() => {
        console.log('Time taken: ', t.next().value);
        console.table(renders);
    });
    it('should do stuff', async () => {
        render(<App onRender={tracker}/>);
        user.click(screen.getByRole('button', {name: /previous/i}))
        await waitFor(() => {
            return expect(screen.getByText(/year: 2022/i)).toBeInTheDocument();
        }, {timeout: 5000});
    }, 30000);
});