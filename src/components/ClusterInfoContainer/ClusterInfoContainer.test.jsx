import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { ClusterInfoContainer } from './ClusterInfoContainer';

describe('ClusterBodyFooterContainer', () => {
  test('is rendered', () => {
   const component = render(
     <ClusterInfoContainer clusters={clusters} />
    );
    expect(component)
      .toMatchSnapshot();
  });
});