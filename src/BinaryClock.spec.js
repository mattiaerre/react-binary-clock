import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import BinaryClock from './BinaryClock.jsx';

chai.should();
chai.use(chaiEnzyme());

describe('<BinaryClock />', () => {
  const props = {
    time: '16:24:07'
  };

  const wrapper = shallow(<BinaryClock {...props} />);
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

/*

As of 2008, the most common binary clocks sold are designed by Anelace Inc., and use six columns of LEDs to represent zeros and ones. Each column represents a single decimal digit, a format known as binary-coded decimal (BCD). The bottom row in each column represents 1 (or 20), with each row above representing higher powers of two, up to 23 (or 8).

To read each individual digit in the time, the user adds the values that each illuminated LED represents, then reads these from left to right. The first two columns represent the hour, the next two represent the minute and the last two represent the second. Since zero digits are not illuminated, the positions of each digit must be memorized if the clock is to be usable in the dark.

*/
