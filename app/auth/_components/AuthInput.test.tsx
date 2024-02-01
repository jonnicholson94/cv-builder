
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AuthInput from "./AuthInput"

test("renders placeholder passed in as a prop", () => {
    render(<AuthInput placeholder="Enter your email" type="email" />)

    const input = screen.getByPlaceholderText("Enter your email")

    expect(input).toBeInTheDocument()

})

test("has correct type passed in as a prop", () => {
    render(<AuthInput placeholder="Enter your email" type="email" />)

    const input = screen.getByPlaceholderText("Enter your email")

    expect(input).toHaveAttribute("type", "email")
})