import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/Monty hall simulation/i);
  expect(headerElement).toBeInTheDocument();
});
