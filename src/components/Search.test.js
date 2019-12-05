import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() })

test('Search field box renders', () => {

  const searchBox = shallow(<Search />);

  expect(searchBox).toMatchSnapshot();
});