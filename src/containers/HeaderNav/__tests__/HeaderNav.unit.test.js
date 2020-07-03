import React from 'react';
import {shallow} from 'enzyme';
import HeaderNav from '../HeaderNav';

test('render HeaderNav', () => {
	const wrapper = shallow(
		<HeaderNav />
	);
	expect(wrapper).toMatchSnapshot();
});