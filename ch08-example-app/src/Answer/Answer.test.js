import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import {WithDisabled} from "./Answer.stories";

const stories = require('./Answer.stories');

describe('Answer', () => {
    it('should render all storybook stories without error', () => {
        for (let story in stories) {
            if (story !== 'default') {
                let C = stories[story];
                render(<C/>);
            }
        }
    });

    it('should disable everything when asked', () => {
        render(<WithDisabled/>);
        expect(screen.getByLabelText(/guess/i)).toBeDisabled();
        expect(screen.getByText(/submit/i)).toBeDisabled();
    });
});