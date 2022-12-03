// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render,fireEvent } from "@testing-library/react";
import Counter from "../components/Counter"
let getByText,getByRole;

beforeEach(() => {
  // Render the Counter component here
  ({ getByText, getByRole} = render(<Counter />));
 });
test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    //const { getByText } = render(<Counter />);
    expect(getByText("Counter")).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    //const { getByText } = render(<Counter />);
    expect(getByText("0")).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  //const { getByText, getByRole } = render(<Counter />);
  const increment = getByRole('button', { name: '+' });
  fireEvent.click(increment);
  expect(getByText("1")).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  //const { getByText, getByRole } = render(<Counter />);
  const decrement = getByRole('button', { name: '-' });
  fireEvent.click(decrement);
  expect(getByText("-1")).toBeInTheDocument();
});
