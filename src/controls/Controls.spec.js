// Test away!

/**
- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is closed
- the locked toggle button is disabled if the gate is open
- cannot be closed or opened if it is locked
*/

import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";

afterEach(cleanup)

describe("The Controls component", () => {

    it("renders open/close button", () => {
      const {getByText} = render(<Controls />)

      getByText(/Close Gate/i)
    })
    it("renders lock/unlock button", () => {
      const {getByText} = render(<Controls />)

      getByText(/Lock Gate/i)
    })
})
