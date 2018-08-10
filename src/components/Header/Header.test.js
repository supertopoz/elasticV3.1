import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Header } from './Header';

describe('Header', () => {
  test('is rendered', () => {
    const component = render(
      <Header />
    );

    expect(component)
      .toMatchSnapshot();
  });
});