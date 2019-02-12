/**
- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if othewise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class
- defaults to `unlocked` and `open`
 */

import React from "react";
import { render, cleanup } from "react-testing-library";
import Display from "./Display";
import "jest-dom/extend-expect";

afterEach(cleanup)

describe("The Display component", () => {
  it("defaults to `unlocked` and `open`", () => {
    const {getByText} = render(<Display />)

    getByText(/unlocked/i)
    getByText(/open/i)
  })
  it("displays if gate is open/closed", () => {
    const {getByText} = render(<Display closed="true" />)

    getByText(/closed/i)
  })
  it("displays if gate is locked/unlocked", () => {
    const {getByText} = render(<Display locked="true" />)

    getByText(/locked/i)
  })
  it("displays red when locked", () => {
    const {getByText} = render(<Display locked="true" />)

    const locked = getByText(/locked/i);
    expect(locked).toHaveClass('red-led')
  })
  it("displays red when closed", () => {
    const {getByText} = render(<Display closed="true" />)

    const closed = getByText(/closed/i);
    expect(closed).toHaveClass('red-led')
  })
  it("displays green when unlocked", () => {
    const {getByText} = render(<Display />)

    const unlocked = getByText(/unlocked/i);
    expect(unlocked).toHaveClass('green-led')
  })
  it("displays green when opened", () => {
    const {getByText} = render(<Display />)

    const open = getByText(/open/i);
    expect(open).toHaveClass('green-led')
  })
})