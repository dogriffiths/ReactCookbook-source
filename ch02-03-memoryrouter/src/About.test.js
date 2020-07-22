import {MemoryRouter} from "react-router";
import {Route} from "react-router-dom";
import {fireEvent, render} from '@testing-library/react';
import React from "react";

import About from './About';

describe('About component', () => {
    it.skip('this will break because there is no router', () => {
        const {getByText} = render(<About/>);

        expect(getByText('Kip Russel')).toBeInTheDocument();
    });
    it('should show people', () => {
        const {getByText} = render(<MemoryRouter><About/></MemoryRouter>);

        expect(getByText('Kip Russel')).toBeInTheDocument();
    });
    it('should show offices if in route', () => {
        const {getByText} = render(<MemoryRouter initialEntries={[
            {pathname: '/about/offices'},
        ]}>
            <About/>
        </MemoryRouter>);

        expect(getByText('South Dakota')).toBeInTheDocument();
    });
    it('should be able to click to offices', () => {
        const {getByText} = render(<MemoryRouter initialEntries={[
            {pathname: '/about'},
        ]}>
            <About/>
        </MemoryRouter>);

        expect(getByText('Kip Russel')).toBeInTheDocument();

        fireEvent(getByText('Offices'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(getByText('South Dakota')).toBeInTheDocument();
    });
});