import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Navbar from '../Navbar';
const nav = shallow(<Navbar />);

it('renders navigation bar', () => {
  const header = document.createElement('header');
  ReactDOM.render(<Navbar />, header);
});

it('renders three list items', () => {
  expect(nav.find('li').length).toEqual(3);
});

// TODO: find more effective way to test if a child element has a certain class name
it('a list item has a "button" class name', () => {
  expect(nav.containsMatchingElement(<li className="button">About Me</li>)).toEqual(true);
});
