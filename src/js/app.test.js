import React from 'react';

import { shallow } from 'enzyme'

import Hello from './app';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.text()).toBe('Hello from React')
  })
});
