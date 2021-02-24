import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
    let output;
    beforeEach(() => {
        output = shallow(<Header />);
    });
    it('should render correctly', () => {
        expect(output.find('.header').length).toBe(1);
        expect(output.find('.headerText').length).toBe(1);
        expect(output.find('.headerTitle').text()).toBe('Flag Picker');
    });

    it('Header snapShot', () => {
        expect(output).toMatchSnapshot()
    });
});