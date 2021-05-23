import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import {WithMatchedGuessAndAnswer, WithMismatchedGuessAndAnswer, WithTimedOut} from "./Result.stories";

const stories = require('./Result.stories');

describe('Result', () => {
    it('should render all storybook stories without error', () => {
        for (let story in stories) {
            if (story !== 'default') {
                let C = stories[story];
                render(<C/>);
            }
        }
    });
    it('should say if I have timed out', () => {
        render(<WithTimedOut/>);
        screen.getByText(/out of time/i);
    });
});