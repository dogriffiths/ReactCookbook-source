import { h } from 'preact';
import Converter from '../src/components/Converter';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Converter', () => {
	test('should have gbp as initial currencyby default', () => {
	    const context = shallow(<Converter />);
	    expect(context.find('select').props().value).toBe('gbp');
	});
	test('should pick up the currency from the value passed', () => {
	    const context = shallow(<Converter currency='jpy' />);
	    expect(context.find('select').props().value).toBe('jpy');
	});
});
