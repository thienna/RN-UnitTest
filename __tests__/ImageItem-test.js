/**
 * @format
 */

import 'react-native';
import React from 'react';
import ImageItem from '../src/ImageItem';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing ImageItem component', () => {
  it('renders image correctly', () => {
    const wrapper = shallow(
      <ImageItem text={'Sun'}/>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ text: 'Sun2' });
    expect(wrapper).toMatchSnapshot();
  });
});
