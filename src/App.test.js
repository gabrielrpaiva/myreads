import React from 'react';
import { shallow, mount } from "enzyme";
import App from './App';
 
 
/* it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
}); */
it("renders without crashing", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});