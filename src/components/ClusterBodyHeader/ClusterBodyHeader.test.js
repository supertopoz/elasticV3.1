import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { ClusterBodyHeader } from './ClusterBodyHeader';

describe('ClusterBodyFooterContainer', () => {
  test('is rendered', () => {
   const component = render(
     <ClusterBodyHeader clusters={clusters} />
    );
    expect(component)
      .toMatchSnapshot();
  });
});