import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import View from '../src/View.jsx';

chai.should();
chai.use(chaiEnzyme());

describe('<View />', () => {
  const props = {
    time: '16:24:07'
  };

  const wrapper = shallow(<View {...props} />);
  const div = 'div';
  const containerClassName = 'binary-clock';
  const rowClassName = 'row';
  const ledClassName = 'led';
  const onClassName = 'on';
  const offClassName = 'off';

  it(`its type should equal "${div}"`, () => {
    const type = wrapper.type();
    type.should.equal(div);
  });

  it(`it should have className "${containerClassName}"`, () => {
    wrapper.should.have.className(containerClassName);
  });

  it(`it should have exactly 6 descendants w/ className "${rowClassName}"`, () => {
    wrapper.should.have.exactly(6).descendants(`.${rowClassName}`);
  });

  it(`it should have exactly 24 descendants w/ className "${ledClassName}"`, () => {
    wrapper.should.have.exactly(24).descendants(`.${ledClassName}`);
  });

  describe(`given time is "${props.time}"`, () => {
    it(`it should have exactly 8 descendants w/ className "${onClassName}"`, () => {
      wrapper.should.have.exactly(8).descendants(`.${onClassName}`);
    });

    it(`it should have exactly 16 descendants w/ className "${offClassName}"`, () => {
      wrapper.should.have.exactly(16).descendants(`.${offClassName}`);
    });
  });
});
