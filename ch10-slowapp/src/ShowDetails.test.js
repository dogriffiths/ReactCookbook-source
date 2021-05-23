import {render, screen, waitFor} from "@testing-library/react";
import ShowDetails from "./ShowDetails";
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

describe('ShowDetails', () => {
    beforeEach(() => {
        renders = [];
        t.next();
    });
    afterEach(() => {
        console.log('Time taken: ', t.next().value);
        console.table(renders);
    });
    it('should show the slow results in about 20 seconds', async () => {
        render(<ShowDetails onRender={tracker}/>);
        await waitFor(() => {
            return expect(screen.getByText(/people slow length: 4/i)).toBeInTheDocument();
        }, {timeout: 30000});
    }, 30000);
    it('should show the fast results in about 5 seconds', async () => {
        render(<ShowDetails onRender={tracker}/>);
        await waitFor(() => {
            return expect(screen.getByText(/people fast length: 4/i)).toBeInTheDocument();
        }, {timeout: 5000});
    }, 30000);
});