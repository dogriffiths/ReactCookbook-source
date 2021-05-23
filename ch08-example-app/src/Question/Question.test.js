import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import Question from "./Question";
import {Basic, WithDisabled} from './Question.stories'

const sinon = require('sinon');

const stories = require('./Question.stories');

describe('Question', () => {
    it('should render all storybook stories without error', () => {
        for (let story in stories) {
            if (story !== 'default') {
                let C = stories[story];
                render(<C/>);
            }
        }
    });

    it('should disable the button when asked', () => {
        render(<WithDisabled/>);
        const refreshButton = screen.getByRole('button');
        expect(refreshButton.disabled).toEqual(true);
    });

    it('should call the onAnswer with an initial value and update it when asked', () => {
        const callback = sinon.fake();
        render(<Question onAnswer={callback}/>);
        const number1Before = screen.getByTestId('number1').textContent;
        const number2Before = screen.getByTestId('number2').textContent;
        sinon.assert.calledWith(callback, parseFloat(number1Before) * parseFloat(number2Before))
        expect(callback.callCount).toEqual(1);
        const refreshButton = screen.getByRole('button');
        user.click(refreshButton);
        const number1After = screen.getByTestId('number1').textContent;
        const number2After = screen.getByTestId('number2').textContent;
        sinon.assert.calledWith(callback, parseFloat(number1After) * parseFloat(number2After))
    });
});
