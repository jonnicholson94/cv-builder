
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import HomepageHero from "./HomepageHero"

test("expect main heading to be in the document", () => {
    render(<HomepageHero />)

    expect(screen.getByText("Build a CV, really fast")).toBeInTheDocument()
})

test("expect sub heading to be in the component", () => {
    render(<HomepageHero />)

    expect(screen.getByText("No more painful editing of your CV. Add your details, pick a beautiful design and export it, all in one place.")).toBeInTheDocument()
})

test("renders link to sign up", () => {
    render(<HomepageHero />)

    expect(screen.getByText("Get started")).toHaveAttribute("href", "/auth/register")
})

test("renders primary image in the component", () => {
    render(<HomepageHero />)

    expect(screen.getByAltText("A picture of the main CV builder dashboard")).toBeInTheDocument()
})