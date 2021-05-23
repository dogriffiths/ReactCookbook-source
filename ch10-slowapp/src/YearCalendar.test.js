import {render, screen, waitFor} from "@testing-library/react";
import YearCalendar from "./YearCalendar";
import timekeeper from "./timekeeper";

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

describe('YearCalendar', () => {
    beforeEach(() => {
        renders = [];
        t.next();
    });
    afterEach(() => {
        console.log('Time taken: ', t.next().value);
        console.table(renders);
    });
    it('should do stuff', async () => {
        render(<YearCalendar onRender={tracker}/>);
        screen.getAllByText(/january/i);
    }, 30000);
});