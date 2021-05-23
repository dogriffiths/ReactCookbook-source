import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import Skip from "./Skip";

describe('Skip', () => {
    let after, afterSkip, before, beforeSkip, first, last;
    beforeEach(() => {
        render(<>
            <label htmlFor='before'>Before field</label>
            <input id='before'/>
            <Skip name='things'>
                <label htmlFor='first'>First field</label>
                <input id='first'/>
                <label htmlFor='last'>Last field</label>
                <input id='last'/>
            </Skip>
            <label htmlFor='after'>After field</label>
            <input id='after'/>
        </>);
        after = screen.getByLabelText(/after field/i);
        afterSkip = screen.getByText(/skip before things/i);
        before = screen.getByLabelText(/before field/i);
        beforeSkip = screen.getByText(/skip things/i);
        after = screen.getByLabelText(/after field/i);
        first = screen.getByLabelText(/first field/i);
        last = screen.getByLabelText(/last field/i);
    })
    it('should show the skip button when entering the area', async () => {
        user.click(before);
        user.tab();
        expect(beforeSkip).toHaveFocus();
        user.type(beforeSkip, "{enter}")
        expect(after).toHaveFocus();
    })
    it('should show the skip back', async () => {
        user.click(after);
        user.tab({shift: true})
        expect(afterSkip).toHaveFocus();
        user.type(afterSkip, "{enter}")
        expect(before).toHaveFocus();
    })
    it('should be able to not skip', async () => {
        user.click(before);
        user.tab();
        expect(beforeSkip).toHaveFocus();
        user.tab();
        expect(first).toHaveFocus();
        user.tab({shift: true})
        expect(before).toHaveFocus();
    })
    it('should be able to not skip back', async () => {
        user.click(after);
        user.tab({shift: true})
        expect(afterSkip).toHaveFocus();
        user.tab({shift: true})
        expect(last).toHaveFocus();
        user.tab()
        expect(after).toHaveFocus();
    })
});