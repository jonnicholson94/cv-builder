
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AuthLink from "./AuthLink"

test("link has correct href passed in as a prop", () => {
    render(<AuthLink link="/auth/register" content="Register" />)

    const link = screen.getByText("Register")

    expect(link).toHaveAttribute("href", "/auth/register")
})

test("displays correct content inside of link", () => {
    render(<AuthLink link="/auth/register" content="Register" />)

    const link = screen.getByText("Register")

    expect(link).toBeInTheDocument()
})