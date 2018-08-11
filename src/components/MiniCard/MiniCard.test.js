import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { MiniCard, shallow } from './MiniCard';

describe('Header', () => {
  test('is rendered', () => {

   const clusterError = { 
    "All_Clusters": {count: 150}
    }
    const component = render(
      <MiniCard cardData={clusterError} />
    );

    expect(component)
      .toMatchSnapshot();
  });
});