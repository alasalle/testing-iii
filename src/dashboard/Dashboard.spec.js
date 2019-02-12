// Test away
// - shows the controls and display

import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
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
  test("lock/unlock button text changes on click", () => {
      const { getByTestId } = render(<Dashboard />)

      let lockButton = getByTestId("lock-button");
      expect(lockButton).toHaveTextContent(/lock gate/i)
      let closeButton = getByTestId("close-button");

      fireEvent.click(closeButton);
      fireEvent.click(lockButton);
      let newText = getByTestId("lock-button");

      expect(newText).toHaveTextContent(/unlock gate/i);
    })
    test("open/close button text changes on click", () => {
      const { getByTestId } = render(<Dashboard />)

      const openButton = getByTestId("close-button");
      expect(openButton).toHaveTextContent(/close gate/i)

      fireEvent.click(openButton);
      const newT = getByTestId("close-button");

      expect(newT).toHaveTextContent(/open gate/i);
    })
    test("the closed toggle button is disabled if the gate is closed", () => {
      const {getByTestId} = render(<Dashboard />)

      const closeButton = getByTestId("close-button");
      const lockButton = getByTestId("lock-button");

      fireEvent.click(closeButton);
      fireEvent.click(lockButton);

      expect(closeButton).toBeDisabled();
    })
    test("the locked toggle button is disabled if the gate is open", () => {
      const {getByTestId} = render(<Dashboard />)

      const lockButton = getByTestId("lock-button");

      expect(lockButton).toBeDisabled();
    })
    test("cannot be closed or opened if it is locked", () => {
      const {getByTestId} = render(<Dashboard />)

      const closeButton = getByTestId("close-button");
      const lockButton = getByTestId("lock-button");

      fireEvent.click(closeButton)
      fireEvent.click(lockButton)

      expect(closeButton).toBeDisabled();
    })
})
