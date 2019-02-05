// Test away
// - shows the controls and display

import React from "react";
import { render, cleanup } from "react-testing-library";
import Dashboard from "./Dashboard";
import "jest-dom/extend-expect";

afterEach(cleanup)

describe("The Dashboard component", () => {
  it("renders the display", () => {
    const { getByTestId } = render(<Dashboard />);

    getByTestId("display")
  })
  it("renders the controls", () => {
    const { getByTestId } = render(<Dashboard />);

    getByTestId("controls")
  })
})
