import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

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

