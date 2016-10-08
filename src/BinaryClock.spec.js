import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import BinaryClock from './BinaryClock.jsx';

chai.should();

describe('<BinaryClock />', () => {
  const wrapper = shallow(<BinaryClock />);
  it('wrapper type should equal div', () => {
    const type = wrapper.type();
    type.should.equal('div');
  });
});
