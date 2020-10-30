import React from 'react';
import {fireEvent, render} from "@testing-library/react";

const stories = require('./InputField.stories');

describe('render stories', () => {
    it('should render all storybook stories without error', () => {
        for (let story in stories) {
            if (story !== 'default') {
                const C = stories[story];
                render(<C/>);
            }
        }
    });
    it('should be able to derive label from name', () => {
        const C = stories.Basic;
        const { queryByLabelText  } = render(<C />);
        expect(queryByLabelText(/Field 1.*:/)).toBeInTheDocument();
    });
    it('should allow label to be over-ridden', () => {
        const C = stories.WithLabel;
        const { queryByLabelText } = render(<C />);
        expect(queryByLabelText(/First field.*:/)).toBeInTheDocument();
    });
    it('should do validation', () => {
        const C = stories.WithOnValidate;
        const { getByLabelText, queryByText } = render(<C />);
        const input = getByLabelText(/Field 1.*:/);
        expect(input).toBeInTheDocument();
        expect(queryByText('Must be at least 3 chars.')).not.toBeInTheDocument();
        fireEvent.change(input, {target: {value: 'ab'}});
        expect(queryByText('Must be at least 3 chars.')).toBeInTheDocument();
    });
    // TODO: Re-enable when bug #9867 fixed in create-react-app
/*    it('should validation when blur event occurs', () => {
        const C = stories.WithOnValidate;
        const { getByLabelText, queryByText } = render(<C />);
        const input = getByLabelText(/Field 1.*:/);
        expect(input).toBeInTheDocument();
        expect(queryByText('Must be at least 3 chars.')).not.toBeInTheDocument();
        fireEvent.blur(input);
        expect(queryByText('Must be at least 3 chars.')).toBeInTheDocument();
    });*/
});
