import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import BinaryClock from './BinaryClock.jsx';

chai.should();
chai.use(chaiEnzyme());

describe('<BinaryClock />', () => {
  describe('common', () => {
    const wrapper = shallow(<BinaryClock />);

    it('wrapper type should equal div', () => {
      const type = wrapper.type();
      type.should.equal('div');
    });
  });

  describe('default', () => {
    const wrapper = shallow(<BinaryClock />);
    const componentDefaultClassName = 'binary-clock';

    it(`wrapper should have className "${componentDefaultClassName}"`, () => {
      wrapper.should.have.className(componentDefaultClassName);
    });
  });

  describe('custom', () => {
    const props = {
      className: 'outlaw'
    };
    const wrapper = shallow(<BinaryClock {...props} />);

    it(`wrapper should have className "${props.className}"`, () => {
      wrapper.should.have.className(props.className);
    });
  });
});
