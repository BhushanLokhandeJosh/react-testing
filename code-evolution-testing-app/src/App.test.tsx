import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


//test and expect are methods from jest which create-react-app locally provides
//to each test.
test('renders learn react link', () => {
  //We are creating virtual DOM of app component by using render method of react 
  // testing library.
  //We use screen from react-testing-library which is an object that contains method
  //to query virtual DOM.
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  //we expect linkelement to be in document.
  expect(linkElement).toBeInTheDocument();
});


