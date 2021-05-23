import {render, screen, waitFor} from "@testing-library/react";
import user from '@testing-library/user-event';
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
        interactions: JSON.stringify(Array.from(interactions))
    })
};

let startTime = 0;

describe('App', () => {
    beforeEach(() => {
        renders = [];
        startTime = performance.now();
    });
    afterEach(() => {
        console.log('Time taken: ', performance.now() - startTime);
        console.table(renders);
    });
    it('should move between years', async () => {
        render(<App onRender={tracker}/>);
        user.click(screen.getByRole('button', {name: /previous/i}))
        user.click(screen.getByRole('button', {name: /previous/i}))
        user.click(screen.getByRole('button', {name: /previous/i}))
        user.click(screen.getByRole('button', {name: /next/i}))
        user.click(screen.getByRole('button', {name: /next/i}))
        user.click(screen.getByRole('button', {name: /next/i}))
    }, 30000);
});