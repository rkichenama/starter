import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow } from 'enzyme'

import Hello from './app';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.text()).toBe('Hello from React')
  })
});
