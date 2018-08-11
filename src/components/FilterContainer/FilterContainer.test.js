import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { FilterContainer } from './FilterContainer';

describe('Header', () => {
  test('is rendered', () => {
    
	const clusterErrors = [
		{ 
			name:"all clusters",
			count: 10,
			id: "allClusters"
		}
	]
   const component = render(
      <FilterContainer clusterErrors={clusterErrors} />
    );
    expect(component)
      .toMatchSnapshot();
  });
});