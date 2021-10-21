import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />)
  const btn = screen.getByRole("button")
  expect(btn).toHaveStyle({
    backgroundColor: "red"
  })
});

test("button has correct initial text", () => {
  render(<App />)
  screen.getByRole("button", {name: "Change to blue"})
})

test("button turns blue when clicked", () => {
  render(<App />)
  const btn = screen.getByRole("button")
  fireEvent.click(btn)
  expect(btn).toHaveStyle({
    backgroundColor: "blue"
  })
  expect(btn.textContent).toBe("Change to red")
})

test("initial conditions", () => {
  render(<App />)
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue"})
  expect(colorButton).toBeEnabled()

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()

})

test("checkbox functions", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue"})
  const checkbox = screen.getByRole("checkbox")

  // button is disabled after checkbox is checked
  fireEvent.click(checkbox)
  expect(colorButton).not.toBeEnabled()
 
  // button is enabled after checkbox is unchecked
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test("disabled button has gray background and revert to blue", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue"})
  const checkbox = screen.getByRole("checkbox")
   
  // button is disabled after checkbox is checked
   fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({
    backgroundColor: "gray"
  })
  // enable the button
  fireEvent.click(checkbox)
  // click button to change background color
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue"
  })
})
test("disabled button has gray background and revert to red", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue"})
  const checkbox = screen.getByRole("checkbox")

  // click button to change background color
  fireEvent.click(colorButton)

  // button is disabled after checkbox is checked
   fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({
    backgroundColor: "gray"
  })
  
  // enable the button
  fireEvent.click(checkbox)
  // click button to change background color
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({
    backgroundColor: "red"
  })
})

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red")
  })

  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })
  
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red")
  })
}) 