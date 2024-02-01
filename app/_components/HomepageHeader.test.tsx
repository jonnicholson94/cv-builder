
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import HomepageHeader from "./HomepageHeader"

test("displays link to homepage in header", () => {
    render(<HomepageHeader />)

    const link = screen.getByRole("link", { name: /The primary icon for CV builder/i })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/")

})

test("displays link to sign in page in header", () => {
    render(<HomepageHeader />)

    const link = screen.getByText("Sign in")

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/auth/sign-in")

})