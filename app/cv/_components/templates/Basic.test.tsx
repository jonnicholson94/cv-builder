
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import { cv } from "@/lib/mockData"

import Basic from "./Basic"

test("renders name in template", () => {

    render(<Basic cv={cv} />)

    const name = screen.getByText("Jon Nicholson")

    expect(name).toBeInTheDocument()

})

test("renders email and phone number in template", () => {

    render(<Basic cv={cv} /> )

    const content = screen.getByText("jon.nicholson@email.com | 0711")

    expect(content).toBeInTheDocument()

})

test("renders about profile in template", () => {
    render(<Basic cv={cv} />)

    const about = screen.getByText("Example content about me")

    expect(about).toBeInTheDocument()
})

test("renders jobs in template", () => {

    render(<Basic cv={cv} />)

    const job = screen.getByText("Product Manager")

    expect(job).toBeInTheDocument()

})

test("renders education in template", () => {

    render(<Basic cv={cv} />)

    const education = screen.getByText("Bla")

    expect(education).toBeInTheDocument()

})

test("renders side projects in template", () => {

    render(<Basic cv={cv} />)

    const project = screen.getByText("Cv builder")

    expect(project).toBeInTheDocument()

})