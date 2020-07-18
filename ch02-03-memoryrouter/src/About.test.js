import {MemoryRouter} from "react-router";
import {Route} from "react-router-dom";
import {fireEvent, render} from '@testing-library/react';
import React from "react";

import About from './About';

describe('About component', () => {
    it('should show people by default', () => {
        const { getByText } = render (<MemoryRouter initialEntries={[
            {pathname: '/about'},
        ]}>
            <Route path='/about/:tabId?'>
                <About/>
            </Route>
        </MemoryRouter>);

        expect(getByText('Kip Russel')).toBeInTheDocument();

        fireEvent(getByText('Offices'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(getByText('South Dakota')).toBeInTheDocument();
    });
});