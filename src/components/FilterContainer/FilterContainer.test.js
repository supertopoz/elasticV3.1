import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { FilterContainer } from './FilterContainer';

describe('Header', () => {
  test('is rendered', () => {
    const component = render(
      <FilterContainer />
    );

    expect(component)
      .toMatchSnapshot();
  });
});