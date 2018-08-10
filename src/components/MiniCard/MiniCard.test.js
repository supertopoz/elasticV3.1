import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { MiniCard } from './MiniCard';

describe('Header', () => {
  test('is rendered', () => {

   const clusterError = { 
    name:"all clusters",
    count: 10,
    id: "allClusters"
    } 


    const component = render(
      <MiniCard cardData={clusterError} />
    );

    expect(component)
      .toMatchSnapshot();
  });
});